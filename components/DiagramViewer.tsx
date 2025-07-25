
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Icon from './Icon';
import { useTranslation } from '../hooks/useTranslation';
import { DiagrammingLanguage } from '../types';

interface DiagramViewerProps {
  diagramCode: string;
  diagrammingLanguage: DiagrammingLanguage;
  isLoading: boolean;
  error: string | null;
  onFixError: () => void;
  analysisExplanation: string;
  onRenderError: (errorMessage: string | null) => void;
  isCorrectionAllowed: boolean;
  onGenerateDocs: () => void;
  onGenerateWhitepaper: () => void;
  onGenerateManual: () => void;
  isGeneratingDocs: boolean;
  isGeneratingWhitepaper: boolean;
  isGeneratingManual: boolean;
  onGenerateProjectMarkdown: () => void;
  isProjectLoaded: boolean;
}

declare const plantumlEncoder: any;

const DiagramViewer: React.FC<DiagramViewerProps> = ({ 
    diagramCode,
    diagrammingLanguage,
    isLoading, 
    error, 
    onFixError, 
    analysisExplanation, 
    onRenderError, 
    isCorrectionAllowed,
    onGenerateDocs,
    onGenerateWhitepaper,
    onGenerateManual,
    isGeneratingDocs,
    isGeneratingWhitepaper,
    isGeneratingManual,
    onGenerateProjectMarkdown,
    isProjectLoaded,
}) => {
  const diagramContainerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [isRenderLoading, setIsRenderLoading] = useState(false);
  const { t } = useTranslation();

  const renderMermaid = useCallback(async () => {
    if (!diagramContainerRef.current) return;
    
    setIsRenderLoading(true);
    diagramContainerRef.current.innerHTML = ''; 
    setSvgContent('');
    onRenderError(null);
    
    const renderId = 'mermaid-graph-' + Date.now();

    try {
      // @ts-ignore
      const { svg } = await window.mermaid.render(renderId, diagramCode);
      if (diagramContainerRef.current) {
        diagramContainerRef.current.innerHTML = svg;
        setSvgContent(svg);
      }
    } catch (e: any) {
      console.error("Mermaid rendering error:", e);
      onRenderError(e.message || 'Unknown Mermaid error');
    } finally {
        setIsRenderLoading(false);
    }
  }, [diagramCode, onRenderError]);
  
  const renderPlantUml = useCallback(async () => {
    if (!diagramContainerRef.current) return;

    setIsRenderLoading(true);
    diagramContainerRef.current.innerHTML = '';
    setSvgContent('');
    onRenderError(null);
    
    try {
        const encoded = plantumlEncoder.encode(diagramCode);
        const url = `https://www.plantuml.com/plantuml/svg/${encoded}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            const errorText = await response.text();
            // Try to extract a cleaner error message from the returned SVG.
            // PlantUML syntax errors return an SVG with a <text> element containing the error.
            const syntaxErrorMatch = errorText.match(/<text fill="#FF0000"[^>]*>\s*(Syntax Error\?.*?)<\/text>/s);
            let friendlyError;
            if (syntaxErrorMatch?.[1]) {
                friendlyError = syntaxErrorMatch[1].trim();
            } else {
                const genericErrorMatch = errorText.match(/<text fill="#FF0000"[^>]*>([^<]+)<\/text>/);
                if (genericErrorMatch?.[1]) {
                    friendlyError = `Syntax Error: ${genericErrorMatch[1].trim()}`;
                } else {
                    friendlyError = `PlantUML server responded with status ${response.status}. This often indicates a syntax error in the diagram code.`;
                }
            }
            throw new Error(friendlyError);
        }
        const svg = await response.text();

        if (diagramContainerRef.current) {
            diagramContainerRef.current.innerHTML = `<div class="w-full h-full bg-white">${svg}</div>`;
            setSvgContent(svg);
        }
    } catch (e: any) {
        console.error("PlantUML rendering error:", e);
        onRenderError(e.message || 'Failed to fetch PlantUML diagram.');
    } finally {
        setIsRenderLoading(false);
    }
  }, [diagramCode, onRenderError]);

  useEffect(() => {
    if (!diagramCode) {
      if (diagramContainerRef.current) diagramContainerRef.current.innerHTML = '';
      setSvgContent('');
      onRenderError(null);
      return;
    }

    if (diagrammingLanguage === 'mermaid') {
        renderMermaid();
    } else if (diagrammingLanguage === 'plantuml') {
        renderPlantUml();
    }
  }, [diagramCode, diagrammingLanguage, renderMermaid, renderPlantUml, onRenderError]);

  const downloadFile = (content: string, fileName: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleDownloadPng = async () => {
    if (diagrammingLanguage === 'plantuml') {
      if (!diagramCode) return;
      try {
        const encoded = plantumlEncoder.encode(diagramCode);
        const url = `https://www.plantuml.com/plantuml/png/${encoded}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`PlantUML server responded with status ${response.status}`);
        }
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'diagram.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Failed to download PlantUML PNG:", error);
        alert("Failed to download PlantUML PNG.");
      }
    } else { // Mermaid - New implementation to fix html2canvas issue
      if (!svgContent || !diagramContainerRef.current?.firstChild) {
        return;
      }

      const svgElement = diagramContainerRef.current.firstChild as SVGElement;
      const { width, height } = svgElement.getBoundingClientRect();

      if (width === 0 || height === 0) {
        console.error("Cannot export PNG for a diagram with zero dimensions.");
        alert("Cannot export: Diagram has no size. Please render a valid diagram first.");
        return;
      }

      const img = new Image();
      const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const padding = 20;
        canvas.width = width + padding * 2;
        canvas.height = height + padding * 2;
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Use a white background as it's more portable than transparent
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw the SVG onto the canvas, centered with padding
          ctx.drawImage(img, padding, padding, width, height);
          
          const pngUrl = canvas.toDataURL('image/png');
          
          const a = document.createElement('a');
          a.href = pngUrl;
          a.download = 'diagram.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
        URL.revokeObjectURL(url);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        console.error("Error: Could not load the SVG into an Image element for conversion.");
        alert("Failed to convert diagram to PNG. The SVG may contain unsupported features.");
      };

      img.src = url;
    }
  };

  const handleDownloadSvg = () => {
    if (svgContent) {
        downloadFile(svgContent, 'diagram.svg', 'image/svg+xml');
    }
  };

  const handleDownloadSource = () => {
    const extension = diagrammingLanguage === 'mermaid' ? 'md' : 'txt';
    const mimeType = 'text/plain;charset=utf-8';
    const content = diagrammingLanguage === 'mermaid' 
        ? `\`\`\`mermaid\n${diagramCode}\n\`\`\``
        : diagramCode;
    downloadFile(content, `diagram.${extension}`, mimeType);
  };

  const isDiagramExportDisabled = !svgContent || isLoading || !!error;
  const isGeneratorBusy = isGeneratingDocs || isGeneratingWhitepaper || isGeneratingManual;

  return (
    <div className="bg-slate-800/50 rounded-lg h-full flex flex-col relative">
      <div className="p-2 border-b border-slate-700 flex justify-between items-center flex-shrink-0">
        <h2 className="text-lg font-semibold text-slate-100 p-2">{t('diagramViewer')}</h2>
        <div className="flex items-center space-x-2">
            <button title={t('exportPNG')} onClick={handleDownloadPng} disabled={isDiagramExportDisabled} className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><Icon type="png" className="w-5 h-5"/></button>
            <button title={t('exportSVG')} onClick={handleDownloadSvg} disabled={isDiagramExportDisabled} className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><Icon type="svg" className="w-5 h-5"/></button>
            <button title={t('downloadSourceCode')} onClick={handleDownloadSource} disabled={!diagramCode || isLoading} className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><Icon type="file" className="w-5 h-5"/></button>
            <button title={t('exportDocs')} onClick={onGenerateDocs} disabled={isDiagramExportDisabled || isGeneratorBusy} className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                {isGeneratingDocs ? <Icon type="spinner" className="w-5 h-5"/> : <Icon type="documentation" className="w-5 h-5"/>}
            </button>
            <button title={t('exportWhitepaper')} onClick={onGenerateWhitepaper} disabled={isDiagramExportDisabled || isGeneratorBusy} className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                 {isGeneratingWhitepaper ? <Icon type="spinner" className="w-5 h-5"/> : <Icon type="whitepaper" className="w-5 h-5"/>}
            </button>
             <button title={t('exportManual')} onClick={onGenerateManual} disabled={!isProjectLoaded || isLoading || isGeneratorBusy} className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                 {isGeneratingManual ? <Icon type="spinner" className="w-5 h-5"/> : <Icon type="manual" className="w-5 h-5"/>}
            </button>
            <button title={t('exportProjectMarkdown')} onClick={onGenerateProjectMarkdown} disabled={!isProjectLoaded || isLoading} className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                <Icon type="md" className="w-5 h-5"/>
            </button>
        </div>
      </div>

      <div className="flex-grow p-4 overflow-auto relative min-h-0">
        {(isLoading || isRenderLoading) && (
          <div className="absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center z-10">
            <Icon type="spinner" className="w-12 h-12 text-sky-400" />
            <p className="mt-4 text-lg">{isLoading ? t('analyzingProject') : t('renderingDiagram')}</p>
          </div>
        )}
        {error && !isLoading && (
            <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center z-10 p-4 text-center">
                <h3 className="text-xl font-bold text-red-400 mb-2">{t('diagramError')}</h3>
                <div className="text-sm text-slate-400 mb-4 bg-slate-800 p-2 rounded w-full max-w-md max-h-48 overflow-auto font-mono text-left">{error}</div>
                {isCorrectionAllowed ? (
                     <button onClick={onFixError} disabled={isLoading} className="flex items-center space-x-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        <Icon type="fix" className="w-5 h-5" />
                        <span>{t('fixWithAI')}</span>
                    </button>
                ) : (
                    <div className="mt-4 p-3 bg-amber-900/50 border border-amber-600/50 rounded-md">
                        <p className="font-semibold text-amber-300">{t('aiCorrectionFailed')}</p>
                        <p className="text-amber-400 text-sm mt-1">
                           {t('aiCorrectionFailedMessage')}
                        </p>
                    </div>
                )}
            </div>
        )}
         {!diagramCode && !isLoading && !error && (
             <div className="flex flex-col items-center justify-center h-full text-slate-500 text-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m-5-1.5l1 1.5m-8.25-11.25h16.5" /></svg>
                 <p className="font-semibold text-lg">{t('diagramAppearHere')}</p>
                 <p className="text-sm">{t('uploadAndAnalyze')}</p>
            </div>
         )}
        <div ref={diagramContainerRef} className="w-full h-full flex items-center justify-center text-slate-200 [&>svg]:max-w-full [&>svg]:max-h-full [&>div]:max-w-full [&>div]:max-h-full [&>div]:w-full [&>div]:h-full [&>div>svg]:w-full [&>div>svg]:h-full"></div>
      </div>
       {analysisExplanation && !error && (
        <div className="p-4 border-t border-slate-700 bg-slate-900/30 text-sm text-slate-300 max-h-32 overflow-y-auto flex-shrink-0">
            <h3 className="font-semibold text-slate-100 mb-1">{t('aiAnalysis')}</h3>
            <p>{analysisExplanation}</p>
        </div>
       )}
    </div>
  );
};

export default DiagramViewer;
