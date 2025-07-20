

import React, { useState, useEffect, useCallback } from 'react';
import { Language, ThemeSettings, DiagramType, DiagrammingLanguage, ModelConfig, AiProvider } from '../types';
import { useTranslation } from '../hooks/useTranslation';

// A custom hook for debouncing a value
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeSettings: ThemeSettings;
  onThemeChange: (newSettings: ThemeSettings) => void;
  diagramType: DiagramType;
  onDiagramTypeChange: (newType: DiagramType) => void;
  diagrammingLanguage: DiagrammingLanguage;
  onDiagrammingLanguageChange: (newLang: DiagrammingLanguage) => void;
  modelConfig: ModelConfig;
  onModelConfigChange: (newConfig: ModelConfig) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  themeSettings,
  onThemeChange,
  diagramType,
  onDiagramTypeChange,
  diagrammingLanguage,
  onDiagrammingLanguageChange,
  modelConfig,
  onModelConfigChange,
}) => {
  const { language, setLanguage, t } = useTranslation();
  const [geminiModels, setGeminiModels] = useState<string[]>([]);
  const [openAiModels, setOpenAiModels] = useState<string[]>([]);
  const [isFetchingModels, setIsFetchingModels] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const handleModelConfigValueChange = (key: keyof ModelConfig, value: string | AiProvider) => {
      onModelConfigChange({ ...modelConfig, [key]: value });
  };
  
  const debouncedGeminiApiKey = useDebounce(modelConfig.geminiApiKey, 500);
  const debouncedOpenAiApiKey = useDebounce(modelConfig.openAiApiKey, 500);

  useEffect(() => {
    if (!isOpen) return;

    const fetchGeminiModels = async (apiKey: string) => {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
            if (!response.ok) throw new Error(t('noModelsFound'));
            const data = await response.json();
            const filteredModels = data.models
                .filter((m: any) => m.supportedGenerationMethods.includes('generateContent') && m.name.includes('gemini'))
                .map((m: any) => m.name.replace('models/', ''))
                .sort((a: string, b: string) => b.localeCompare(a)); // Prioritize newer models like flash
            setGeminiModels(filteredModels);
            if (filteredModels.length > 0 && !filteredModels.includes(modelConfig.geminiModel)) {
                handleModelConfigValueChange('geminiModel', filteredModels.find(m => m.includes('flash')) || filteredModels[0]);
            }
        } catch (error: any) {
            setFetchError(error.message);
            setGeminiModels([]);
        }
    };

    const fetchOpenAiModels = async (apiKey: string) => {
         try {
            const response = await fetch('https://api.openai.com/v1/models', {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            });
            if (!response.ok) throw new Error(t('noModelsFound'));
            const data = await response.json();
            const filteredModels = data.data
                .map((m: any) => m.id)
                .filter((id: string) => id.includes('gpt'))
                .sort((a: string, b: string) => b.localeCompare(a)); // Prioritize newer models
            setOpenAiModels(filteredModels);
            if (filteredModels.length > 0 && !filteredModels.includes(modelConfig.openAiModel)) {
                handleModelConfigValueChange('openAiModel', filteredModels.find(m => m.includes('gpt-4')) || filteredModels[0]);
            }
        } catch (error: any) {
            setFetchError(error.message);
            setOpenAiModels([]);
        }
    }

    const fetchAllModels = async () => {
        setIsFetchingModels(true);
        setFetchError(null);
        setGeminiModels([]);
        setOpenAiModels([]);

        if (modelConfig.provider === 'openai' && debouncedOpenAiApiKey) {
            await fetchOpenAiModels(debouncedOpenAiApiKey);
        } else if (modelConfig.provider === 'gemini' && debouncedGeminiApiKey) {
            await fetchGeminiModels(debouncedGeminiApiKey);
        }
        setIsFetchingModels(false);
    };
    
    fetchAllModels();
  }, [isOpen, modelConfig.provider, debouncedOpenAiApiKey, debouncedGeminiApiKey, t]); // eslint-disable-line

  if (!isOpen) return null;
  
  const handleThemeValueChange = (key: keyof ThemeSettings, value: string | number) => {
      onThemeChange({ ...themeSettings, [key]: value });
  };

  const diagramTypes: {label: string, value: DiagramType}[] = [
    { label: t('classDiagram'), value: 'classDiagram' },
    { label: t('flowchart'), value: 'flowchart TD' },
    { label: t('sequenceDiagram'), value: 'sequenceDiagram' },
    { label: t('stateDiagram'), value: 'stateDiagram-v2' },
  ];

  const ModelSelector: React.FC<{provider: 'gemini' | 'openai'}> = ({provider}) => {
      const models = provider === 'gemini' ? geminiModels : openAiModels;
      const selectedModel = provider === 'gemini' ? modelConfig.geminiModel : modelConfig.openAiModel;
      const apiKey = provider === 'gemini' ? modelConfig.geminiApiKey : modelConfig.openAiApiKey;
      const modelKey = provider === 'gemini' ? 'geminiModel' : 'openAiModel';
      const label = provider === 'gemini' ? t('geminiModel') : t('openAiModel');

      if (!apiKey) return null;

      return (
          <div>
              <label htmlFor={`${provider}-model-select`} className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
              {isFetchingModels && <p className="text-sm text-slate-400 italic">{t('fetchingModels')}</p>}
              {fetchError && <p className="text-sm text-red-400">{fetchError}</p>}
              {!isFetchingModels && !fetchError && models.length > 0 && (
                  <select
                      id={`${provider}-model-select`}
                      value={selectedModel}
                      onChange={(e) => handleModelConfigValueChange(modelKey, e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                      {models.map(model => <option key={model} value={model}>{model}</option>)}
                  </select>
              )}
               {!isFetchingModels && !fetchError && models.length === 0 && apiKey && (
                    <p className="text-sm text-amber-400">{t('noModelsFound')}</p>
               )}
          </div>
      );
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <h2 className="text-xl font-bold text-slate-100">{t('settingsTitle')}</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <main className="p-6 overflow-y-auto space-y-8">
          {/* General Settings */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="language-select" className="block text-sm font-medium text-slate-300 mb-2">{t('language')}</label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
             <div>
              <label htmlFor="diagram-lang-select" className="block text-sm font-medium text-slate-300 mb-2">{t('diagrammingLanguage')}</label>
              <select
                id="diagram-lang-select"
                value={diagrammingLanguage}
                onChange={(e) => onDiagrammingLanguageChange(e.target.value as DiagrammingLanguage)}
                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="mermaid">{t('mermaid')}</option>
                <option value="plantuml">{t('plantuml')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="diagram-type-select" className="block text-sm font-medium text-slate-300 mb-2">{t('diagramType')}</label>
              <select
                id="diagram-type-select"
                value={diagramType}
                onChange={(e) => onDiagramTypeChange(e.target.value as DiagramType)}
                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {diagramTypes.map(dt => <option key={dt.value} value={dt.value}>{dt.label}</option>)}
              </select>
            </div>
          </section>

          {/* AI Provider Settings */}
           <section>
             <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-4">{t('aiProviderSettings')}</h3>
             <div className="space-y-4">
                <div>
                  <label htmlFor="ai-provider-select" className="block text-sm font-medium text-slate-300 mb-2">{t('aiProvider')}</label>
                  <select
                    id="ai-provider-select"
                    value={modelConfig.provider}
                    onChange={(e) => handleModelConfigValueChange('provider', e.target.value as AiProvider)}
                    className="w-full md:w-1/3 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="gemini">Google Gemini</option>
                    <option value="openai">{t('openai')}</option>
                    <option value="lmstudio">LM Studio</option>
                  </select>
                </div>
                
                {modelConfig.provider === 'gemini' && (
                    <div className="p-4 border border-slate-700 rounded-lg space-y-4 bg-slate-900/30">
                        <h4 className="font-semibold text-slate-200">Google Gemini</h4>
                        <div>
                            <label htmlFor="gemini-api-key" className="block text-sm font-medium text-slate-300 mb-2">{t('geminiApiKey')}</label>
                            <input
                                type="password"
                                id="gemini-api-key"
                                value={modelConfig.geminiApiKey}
                                onChange={(e) => handleModelConfigValueChange('geminiApiKey', e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                placeholder="Enter your Gemini API Key"
                            />
                        </div>
                        <ModelSelector provider="gemini" />
                    </div>
                )}

                {modelConfig.provider === 'openai' && (
                    <div className="p-4 border border-slate-700 rounded-lg space-y-4 bg-slate-900/30">
                        <h4 className="font-semibold text-slate-200">OpenAI</h4>
                        <div>
                            <label htmlFor="openai-api-key" className="block text-sm font-medium text-slate-300 mb-2">{t('openAiApiKey')}</label>
                            <input
                                type="password"
                                id="openai-api-key"
                                value={modelConfig.openAiApiKey}
                                onChange={(e) => handleModelConfigValueChange('openAiApiKey', e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                placeholder="Enter your OpenAI API Key"
                            />
                        </div>
                        <ModelSelector provider="openai" />
                    </div>
                )}

                {modelConfig.provider === 'lmstudio' && (
                    <div className="p-4 border border-slate-700 rounded-lg space-y-4 bg-slate-900/30">
                         <h4 className="font-semibold text-slate-200">{t('lmStudioSettings')}</h4>
                         <div>
                            <label htmlFor="lm-studio-url" className="block text-sm font-medium text-slate-300 mb-2">{t('lmStudioBaseUrl')}</label>
                            <input
                                type="text"
                                id="lm-studio-url"
                                value={modelConfig.lmStudioBaseUrl}
                                onChange={(e) => handleModelConfigValueChange('lmStudioBaseUrl', e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                placeholder="http://localhost:1234/v1"
                            />
                        </div>
                        <div>
                            <label htmlFor="lm-studio-model" className="block text-sm font-medium text-slate-300 mb-2">{t('lmStudioModelName')}</label>
                            <input
                                type="text"
                                id="lm-studio-model"
                                value={modelConfig.lmStudioModel}
                                onChange={(e) => handleModelConfigValueChange('lmStudioModel', e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                placeholder="e.g., gemma-2b-it"
                            />
                        </div>
                    </div>
                )}
             </div>
          </section>

          {/* Theme Settings */}
          <section>
             <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-4">{t('themeSettings')}</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {Object.keys(themeSettings).map((key) => {
                    const settingKey = key as keyof ThemeSettings;
                    const isColor = settingKey !== 'fontSize';
                    return (
                        <div key={key}>
                            <label htmlFor={key} className="block text-sm font-medium text-slate-300 mb-1 capitalize">{t(settingKey)}</label>
                            <div className="flex items-center">
                                {isColor && <input
                                    type="color"
                                    id={key}
                                    value={themeSettings[settingKey] as string}
                                    onChange={(e) => handleThemeValueChange(settingKey, e.target.value)}
                                    className="p-0 h-10 w-10 rounded-md border-none bg-slate-700 cursor-pointer"
                                />}
                                <input
                                    type={isColor ? 'text' : 'number'}
                                    value={themeSettings[settingKey]}
                                    onChange={(e) => handleThemeValueChange(settingKey, isColor ? e.target.value : parseInt(e.target.value, 10))}
                                    className="w-full ml-2 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                    min={isColor ? undefined : 8}
                                    max={isColor ? undefined : 24}
                                />
                            </div>
                        </div>
                    )
                })}
             </div>
          </section>
        </main>
         <footer className="p-4 bg-slate-900/50 border-t border-slate-700 flex-shrink-0 flex justify-end">
            <button
                onClick={onClose}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors"
            >
                {t('close')}
            </button>
        </footer>
      </div>
    </div>
  );
};

export default SettingsModal;
