
import React, { useState, useCallback, useEffect } from 'react';
import { FileNode, FileContents, Language, ThemeSettings, DiagramType, DiagrammingLanguage, Manual, ModelConfig } from './types';
import Header from './components/Header';
import FileExplorer from './components/FileExplorer';
import DiagramEditor from './components/MermaidEditor';
import DiagramViewer from './components/DiagramViewer';
import SettingsModal from './components/SettingsModal';
import IdeaArchitect from './components/IdeaArchitect';
import Icon from './components/Icon';
import { analyzeProject, correctDiagramCode, generateProjectDocumentation, generateWhitepaper, generateArchitectureFromIdea, generateMockupFromSuperprompt, generateProjectManual, generateIdeaManual, generateScaffoldingFromSuperprompt } from './services/geminiService';
import { I18nProvider, useTranslation } from './hooks/useTranslation';

declare const JSZip: any;
const MAX_CORRECTION_ATTEMPTS = 3;

const defaultTheme: ThemeSettings = {
    background: '#1e293b', // slate-800
    primaryColor: '#0ea5e9', // sky-500
    secondaryColor: '#334155', // slate-700
    primaryTextColor: '#f1f5f9', // slate-100
    lineColor: '#64748b', // slate-500
    fontSize: 14,
};

const ManualViewer: React.FC<{manual: Manual, onDownload: (content: string, fileName: string, mimeType: string) => void}> = ({ manual, onDownload }) => {
    const { t } = useTranslation();
    
    const generateMarkdown = (): string => {
        let md = `# ${manual.title}\n\n`;
        md += `_${manual.introduction}_\n\n`;
        manual.sections.forEach(section => {
            md += `## ${section.title}\n\n`;
            md += `${section.content}\n\n`;
        });
        return md;
    };

    const generateHtml = (): string => {
        let html = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>${manual.title}</title>\n`;
        html += `<script src="https://cdn.tailwindcss.com?plugins=typography"></script>\n`
        html += `<body class="bg-slate-900 text-slate-200 p-8">\n<article class="prose prose-invert prose-slate max-w-4xl mx-auto prose-h1:text-cyan-400 prose-h2:text-teal-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">\n`;
        html += `<h1>${manual.title}</h1>\n`;
        html += `<p class="lead">${manual.introduction}</p>\n`;
        manual.sections.forEach(section => {
            html += `<h2>${section.title}</h2>\n<div>${section.content.replace(/\n/g, '<br />')}</div>\n`;
        });
        html += '</article>\n</body>\n</html>';
        return html;
    };
    
    return (
        <div className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
                <h2 className="text-xl font-bold text-slate-100">{manual.title}</h2>
                 <div className="flex items-center space-x-2">
                    <button onClick={() => onDownload(generateHtml(), 'manual.html', 'text/html')} className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                        <Icon type="html" className="w-5 h-5" />
                        <span>{t('downloadHTML')}</span>
                    </button>
                    <button onClick={() => onDownload(generateMarkdown(), 'manual.md', 'text/markdown')} className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                        <Icon type="md" className="w-5 h-5" />
                        <span>{t('downloadMD')}</span>
                    </button>
                </div>
            </header>
            <main className="p-6 overflow-y-auto prose prose-invert prose-slate max-w-none prose-h1:text-cyan-400 prose-h2:text-teal-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
                <p className="lead !my-2 !text-lg !text-slate-400">{manual.introduction}</p>
                {manual.sections.map((section, index) => (
                    <div key={index} className="mt-6">
                        <h2>{section.title}</h2>
                        <div className="text-slate-300" dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }} />
                    </div>
                ))}
            </main>
        </div>
    );
}


const MainApp: React.FC = () => {
  // Common state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [themeSettings, setThemeSettings] = useState<ThemeSettings>(defaultTheme);
  const [diagramType, setDiagramType] = useState<DiagramType>('classDiagram');
  const [diagrammingLanguage, setDiagrammingLanguage] = useState<DiagrammingLanguage>('mermaid');
  const [themeRevision, setThemeRevision] = useState(0);
  const { t, language } = useTranslation();
  const [appMode, setAppMode] = useState<'analyze' | 'generate'>('analyze');
  const [modelConfig, setModelConfig] = useState<ModelConfig>({
      provider: 'gemini',
      apiKey: '',
      lmStudioBaseUrl: 'http://localhost:1234/v1',
      lmStudioModel: 'google/gemma-2b-it'
  });

  // State for 'analyze' mode
  const [fileTree, setFileTree] = useState<FileNode | null>(null);
  const [fileContents, setFileContents] = useState<FileContents | null>(null);
  const [renderedDiagramCode, setRenderedDiagramCode] = useState<string>('');
  const [editableDiagramCode, setEditableDiagramCode] = useState<string>('');
  const [diagramError, setDiagramError] = useState<string | null>(null);
  const [analysisExplanation, setAnalysisExplanation] = useState<string>('');
  const [correctionAttempts, setCorrectionAttempts] = useState<number>(0);
  const [isGeneratingDocs, setIsGeneratingDocs] = useState<boolean>(false);
  const [isGeneratingWhitepaper, setIsGeneratingWhitepaper] = useState<boolean>(false);
  const [isGeneratingManual, setIsGeneratingManual] = useState<boolean>(false);
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  const [generatedManual, setGeneratedManual] = useState<Manual | null>(null);

  // State for 'generate' mode
  const [ideaPrompt, setIdeaPrompt] = useState<string>('');
  const [generatedDiagram, setGeneratedDiagram] = useState<string>('');
  const [editableGeneratedDiagram, setEditableGeneratedDiagram] = useState<string>('');
  const [generatedDocumentation, setGeneratedDocumentation] = useState<string>('');
  const [generatedWhitepaperContent, setGeneratedWhitepaperContent] = useState<string>('');
  const [generatedSuperprompt, setGeneratedSuperprompt] = useState<string>('');
  const [generatedMockup, setGeneratedMockup] = useState<string>('');
  const [isGeneratingMockup, setIsGeneratingMockup] = useState<boolean>(false);
  const [generatedScaffolding, setGeneratedScaffolding] = useState<FileContents | null>(null);
  const [isGeneratingScaffolding, setIsGeneratingScaffolding] = useState<boolean>(false);


  useEffect(() => {
    // @ts-ignore
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'base',
      themeVariables: {
        background: themeSettings.background,
        primaryColor: themeSettings.primaryColor,
        secondaryColor: themeSettings.secondaryColor,
        primaryTextColor: themeSettings.primaryTextColor,
        lineColor: themeSettings.lineColor,
        fontSize: `${themeSettings.fontSize}px`,
        nodeBorder: themeSettings.primaryColor,
        mainBkg: themeSettings.background,
        textColor: themeSettings.primaryTextColor,
      }
    });
    setThemeRevision(rev => rev + 1);
  }, [themeSettings]);


  const processZipFile = useCallback(async (file: File) => {
    setIsLoading(true);
    setFileTree(null);
    setFileContents(null);
    setRenderedDiagramCode('');
    setEditableDiagramCode('');
    setDiagramError(null);
    setAnalysisExplanation('');
    setCorrectionAttempts(0);
    
    try {
      const zip = await JSZip.loadAsync(file);
      const root: FileNode = { name: file.name.replace('.zip', ''), path: '', type: 'directory', children: [] };
      const contents: FileContents = {};
      const filePromises: Promise<void>[] = [];

      zip.forEach((relativePath: string, zipEntry: any) => {
        if (!zipEntry.dir) {
          filePromises.push(
            zipEntry.async('string').then((content: string) => {
              contents[relativePath] = content;
              const pathParts = relativePath.split('/').filter(p => p);
              let currentNode = root;

              pathParts.forEach((part, index) => {
                if (index === pathParts.length - 1) {
                  currentNode.children?.push({ name: part, path: relativePath, type: 'file' });
                } else {
                  let dirNode = currentNode.children?.find(child => child.name === part && child.type === 'directory');
                  if (!dirNode) {
                    dirNode = { name: part, path: relativePath.substring(0, relativePath.indexOf(part) + part.length), type: 'directory', children: [] };
                    currentNode.children?.push(dirNode);
                  }
                  currentNode = dirNode;
                }
              });
            })
          );
        }
      });

      await Promise.all(filePromises);
      setFileTree(root);
      setFileContents(contents);

    } catch (e) {
      console.error("Error processing ZIP file:", e);
      alert(t('zipError'));
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  const handleZipUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processZipFile(file);
    }
    event.target.value = '';
  };
  
  const isModelConfigured = useCallback(() => {
    if (modelConfig.provider === 'gemini') {
        if (!modelConfig.apiKey) {
            alert(t('apiKeyMissing'));
            return false;
        }
    } else if (modelConfig.provider === 'lmstudio') {
        if (!modelConfig.lmStudioBaseUrl || !modelConfig.lmStudioModel) {
            alert(t('lmStudioNotConfigured'));
            return false;
        }
    }
    return true;
  }, [modelConfig, t]);

  const handleRenderError = useCallback((errorMessage: string | null) => {
    setDiagramError(errorMessage);
  }, []);

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
  
  const handleAnalyze = useCallback(async () => {
    if (!fileContents) {
      alert(t('noFilesToAnalyze'));
      return;
    }
    if (!isModelConfigured()) return;
    
    setIsLoading(true);
    setDiagramError(null);
    setRenderedDiagramCode('');
    setEditableDiagramCode('');
    setAnalysisExplanation('');
    setCorrectionAttempts(0);

    try {
      const result = await analyzeProject(fileContents, diagramType, language, diagrammingLanguage, modelConfig);
      setAnalysisExplanation(result.explanation);
      setRenderedDiagramCode(result.diagram);
      setEditableDiagramCode(result.diagram);
    } catch (e: any) {
      console.error("Failed to analyze project:", e);
      setDiagramError(`${t('aiAnalysisFailed')}: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }, [fileContents, diagramType, language, diagrammingLanguage, t, modelConfig, isModelConfigured]);

  const handleCorrectError = useCallback(async () => {
      if (!renderedDiagramCode || !diagramError || correctionAttempts >= MAX_CORRECTION_ATTEMPTS) return;
      if (!isModelConfigured()) return;

      setIsLoading(true);
      const attemptNumber = correctionAttempts + 1;
      setCorrectionAttempts(attemptNumber);
      
      try {
        const correctedCode = await correctDiagramCode(renderedDiagramCode, diagramError, diagrammingLanguage, modelConfig);
        setRenderedDiagramCode(correctedCode);
        setEditableDiagramCode(correctedCode);
        setAnalysisExplanation(t('aiCorrectionAttempt', { attempt: attemptNumber }));
        setDiagramError(null);
      } catch (e: any) {
        console.error(e);
        alert(`${t('aiCorrectionFailedAttempt', { attempt: attemptNumber })}: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
  }, [renderedDiagramCode, diagramError, correctionAttempts, t, diagrammingLanguage, modelConfig, isModelConfigured]);
  
  const handleManualRender = () => {
    setDiagramError(null);
    setCorrectionAttempts(0);
    setAnalysisExplanation(t('manualRenderExplanation'));
    setRenderedDiagramCode(editableDiagramCode);
  };

  const handleGenerateDocs = async () => {
    if (!fileContents || !renderedDiagramCode) return;
    if (!isModelConfigured()) return;
    
    setIsGeneratingDocs(true);
    try {
        const htmlContent = await generateProjectDocumentation(fileContents, renderedDiagramCode, analysisExplanation, language, diagrammingLanguage, modelConfig);
        downloadFile(htmlContent, 'project-documentation.html', 'text/html;charset=utf-8');
    } catch (e: any) {
        console.error("Failed to generate documentation:", e);
        alert(`${t('aiAnalysisFailed')}: ${e.message}`);
    } finally {
        setIsGeneratingDocs(false);
    }
  };

  const handleGenerateWhitepaper = async () => {
      if (!fileContents || !renderedDiagramCode) return;
      if (!isModelConfigured()) return;
      
      setIsGeneratingWhitepaper(true);
      try {
          const htmlContent = await generateWhitepaper(fileContents, renderedDiagramCode, analysisExplanation, language, diagrammingLanguage, modelConfig);
          downloadFile(htmlContent, 'project-whitepaper.html', 'text/html;charset=utf-8');
      } catch (e: any) {
          console.error("Failed to generate whitepaper:", e);
          alert(`${t('aiAnalysisFailed')}: ${e.message}`);
      } finally {
          setIsGeneratingWhitepaper(false);
      }
  };

  const handleGenerateProjectManual = async () => {
    if (!fileContents) return;
    if (!isModelConfigured()) return;
    
    setIsGeneratingManual(true);
    setGeneratedManual(null);
    try {
        const manual = await generateProjectManual(fileContents, language, modelConfig);
        setGeneratedManual(manual);
        setIsManualModalOpen(true);
    } catch (e: any) {
        console.error("Failed to generate project manual:", e);
        alert(`${t('manualGenerationFailed')}: ${e.message}`);
    } finally {
        setIsGeneratingManual(false);
    }
  };

  const handleGenerateProjectMarkdown = () => {
    if (!fileContents) return;

    const generateProjectMarkdownContent = (files: FileContents): string => {
      let markdownContent = `# Project Code Dump\n\nThis document contains a dump of all the files from the uploaded project.\n\n---\n\n`;
      const getLanguageIdentifier = (fileName: string): string => {
        const extension = fileName.split('.').pop()?.toLowerCase();
        switch (extension) {
          case 'js': case 'jsx': return 'javascript';
          case 'ts': case 'tsx': return 'typescript';
          case 'py': return 'python';
          case 'java': return 'java';
          case 'cs': return 'csharp';
          case 'go': return 'go';
          case 'rb': return 'ruby';
          case 'php': return 'php';
          case 'html': return 'html';
          case 'css': return 'css';
          case 'scss': return 'scss';
          case 'less': return 'less';
          case 'json': return 'json';
          case 'xml': return 'xml';
          case 'sql': return 'sql';
          case 'sh': return 'shell';
          case 'md': return 'markdown';
          default: return '';
        }
      };

      Object.entries(files).forEach(([path, content]) => {
        const lang = getLanguageIdentifier(path);
        markdownContent += `## \`${path}\`\n\n`;
        markdownContent += `\`\`\`${lang}\n`;
        markdownContent += `${content}\n`;
        markdownContent += `\`\`\`\n\n---\n\n`;
      });
      return markdownContent;
    };

    const markdown = generateProjectMarkdownContent(fileContents);
    downloadFile(markdown, 'project-contents.md', 'text/markdown;charset=utf-8');
  };
  
  const handleGenerateIdeaManual = async () => {
    if (!generatedSuperprompt) return;
    if (!isModelConfigured()) return;
    
    setIsGeneratingManual(true);
    setGeneratedManual(null);
     try {
        const manual = await generateIdeaManual(generatedSuperprompt, language, modelConfig);
        setGeneratedManual(manual);
    } catch (e: any) {
        console.error("Failed to generate idea manual:", e);
        alert(`${t('manualGenerationFailed')}: ${e.message}`);
    } finally {
        setIsGeneratingManual(false);
    }
  }


  const handleGenerateFromIdea = async () => {
      if (!ideaPrompt) {
          alert(t('noIdeaToAnalyze'));
          return;
      }
      if (!isModelConfigured()) return;

      setIsLoading(true);
      setGeneratedDiagram('');
      setEditableGeneratedDiagram('');
      setGeneratedDocumentation('');
      setGeneratedWhitepaperContent('');
      setGeneratedSuperprompt('');
      setGeneratedMockup('');
      setGeneratedManual(null);
      setGeneratedScaffolding(null);
      
      try {
          const result = await generateArchitectureFromIdea(ideaPrompt, diagramType, language, diagrammingLanguage, modelConfig);
          
          let doc = result.documentation;
          let wp = result.whitepaper;

          if (diagrammingLanguage === 'plantuml' && result.diagram) {
            // @ts-ignore
            const encoded = window.plantumlEncoder.encode(result.diagram);
            const imageUrl = `https://www.plantuml.com/plantuml/svg/${encoded}`;
            const placeholderRegex = /PLANTUML_DIAGRAM_URL_PLACEHOLDER/g;
            doc = doc.replace(placeholderRegex, imageUrl);
            wp = wp.replace(placeholderRegex, imageUrl);
          }
          
          setGeneratedDiagram(result.diagram);
          setEditableGeneratedDiagram(result.diagram);
          setGeneratedDocumentation(doc);
          setGeneratedWhitepaperContent(wp);
          setGeneratedSuperprompt(result.superprompt);
      } catch (e: any) {
          console.error("Failed to generate from idea:", e);
          alert(`${t('ideaGenerationFailed')}: ${e.message}`);
      } finally {
          setIsLoading(false);
      }
  };

  const handleGenerateMockup = async () => {
    if (!generatedSuperprompt) return;
    if (!isModelConfigured()) return;
    
    setIsGeneratingMockup(true);
    try {
        const mockupHtml = await generateMockupFromSuperprompt(generatedSuperprompt, language, modelConfig);
        setGeneratedMockup(mockupHtml);
    } catch (e: any) {
        console.error("Failed to generate mockup:", e);
        alert(`${t('mockupGenerationFailed')}: ${e.message}`);
    } finally {
        setIsGeneratingMockup(false);
    }
  };
  
  const handleGenerateScaffolding = async () => {
    if (!generatedSuperprompt) return;
    if (!isModelConfigured()) return;

    setIsGeneratingScaffolding(true);
    setGeneratedScaffolding(null);
    try {
        const scaffolding = await generateScaffoldingFromSuperprompt(generatedSuperprompt, language, modelConfig);
        setGeneratedScaffolding(scaffolding);
    } catch (e: any) {
        console.error("Failed to generate scaffolding:", e);
        alert(`${t('scaffoldingGenerationFailed')}: ${e.message}`);
    } finally {
        setIsGeneratingScaffolding(false);
    }
  };


  const handleGenerateRender = () => {
    setGeneratedDiagram(editableGeneratedDiagram);
  };
  
  const handleAppModeChange = (mode: 'analyze' | 'generate') => {
      setAppMode(mode);
      // Reset all state to avoid mixing data between modes
      setFileTree(null);
      setFileContents(null);
      setRenderedDiagramCode('');
      setEditableDiagramCode('');
      setDiagramError(null);
      setAnalysisExplanation('');
      setCorrectionAttempts(0);
      setIdeaPrompt('');
      setGeneratedDiagram('');
      setEditableGeneratedDiagram('');
      setGeneratedDocumentation('');
      setGeneratedWhitepaperContent('');
      setGeneratedSuperprompt('');
      setGeneratedMockup('');
      setGeneratedManual(null);
      setGeneratedScaffolding(null);
      setIsLoading(false);
      setIsGeneratingMockup(false);
      setIsGeneratingManual(false);
      setIsGeneratingScaffolding(false);
  }

  const renderContent = () => {
    if (appMode === 'generate') {
        return (
            <IdeaArchitect 
                ideaPrompt={ideaPrompt}
                onIdeaPromptChange={setIdeaPrompt}
                onGenerate={handleGenerateFromIdea}
                isLoading={isLoading && appMode === 'generate'}
                diagram={generatedDiagram}
                editableDiagramCode={editableGeneratedDiagram}
                onEditableDiagramCodeChange={setEditableGeneratedDiagram}
                onRenderDiagram={handleGenerateRender}
                documentation={generatedDocumentation}
                whitepaper={generatedWhitepaperContent}
                generatedSuperprompt={generatedSuperprompt}
                themeRevision={themeRevision}
                downloadFile={downloadFile}
                diagrammingLanguage={diagrammingLanguage}
                generatedMockup={generatedMockup}
                isGeneratingMockup={isGeneratingMockup}
                onGenerateMockup={handleGenerateMockup}
                generatedManual={generatedManual}
                isGeneratingManual={isGeneratingManual}
                onGenerateManual={handleGenerateIdeaManual}
                generatedScaffolding={generatedScaffolding}
                isGeneratingScaffolding={isGeneratingScaffolding}
                onGenerateScaffolding={handleGenerateScaffolding}
            />
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
            <div className="lg:col-span-3 h-full min-h-0">
              <FileExplorer fileTree={fileTree} onFileClick={() => {}} />
            </div>
            <div className="lg:col-span-4 h-full min-h-0">
              <DiagramEditor
                code={editableDiagramCode}
                onCodeChange={setEditableDiagramCode}
                onRender={handleManualRender}
                isLoading={isLoading}
              />
            </div>
            <div className="lg:col-span-5 h-full min-h-0">
              <DiagramViewer
                key={`${themeRevision}-${diagrammingLanguage}`}
                diagramCode={renderedDiagramCode}
                diagrammingLanguage={diagrammingLanguage}
                isLoading={isLoading}
                error={diagramError}
                onFixError={handleCorrectError}
                analysisExplanation={analysisExplanation}
                onRenderError={handleRenderError}
                isCorrectionAllowed={correctionAttempts < MAX_CORRECTION_ATTEMPTS}
                onGenerateDocs={handleGenerateDocs}
                onGenerateWhitepaper={handleGenerateWhitepaper}
                onGenerateManual={handleGenerateProjectManual}
                isGeneratingDocs={isGeneratingDocs}
                isGeneratingWhitepaper={isGeneratingWhitepaper}
                isGeneratingManual={isGeneratingManual}
                onGenerateProjectMarkdown={handleGenerateProjectMarkdown}
                isProjectLoaded={!!fileTree}
              />
            </div>
        </div>
    );
  };

  return (
    <div className="flex flex-col h-screen p-4 gap-4">
      <Header 
        onZipUpload={handleZipUpload} 
        onAnalyze={handleAnalyze} 
        onSettingsToggle={() => setIsSettingsOpen(true)}
        isProjectLoaded={!!fileTree}
        isLoading={isLoading && appMode === 'analyze'}
        appMode={appMode}
        onAppModeChange={handleAppModeChange}
      />
      <main className="flex-grow min-h-0">
        {renderContent()}
      </main>
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        themeSettings={themeSettings}
        onThemeChange={setThemeSettings}
        diagramType={diagramType}
        onDiagramTypeChange={setDiagramType}
        diagrammingLanguage={diagrammingLanguage}
        onDiagrammingLanguageChange={setDiagrammingLanguage}
        modelConfig={modelConfig}
        onModelConfigChange={setModelConfig}
      />
      {isManualModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsManualModalOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {isGeneratingManual && (
                 <div className="flex flex-col items-center justify-center text-slate-400 bg-slate-800 p-12 rounded-lg">
                    <Icon type="spinner" className="w-12 h-12 text-sky-400" />
                    <p className="mt-4 text-lg">{t('generatingManual')}</p>
                </div>
            )}
            {generatedManual && !isGeneratingManual && (
                <ManualViewer manual={generatedManual} onDownload={downloadFile} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => (
    <I18nProvider>
        <MainApp />
    </I18nProvider>
);

export default App;
