

export interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileNode[];
}

export interface FileContents {
  [path:string]: string;
}

export type Language = 'en' | 'de';

export interface Translations {
    [key: string]: string;
}

export interface ThemeSettings {
    background: string;
    primaryColor: string;
    secondaryColor: string;
    primaryTextColor: string;
    lineColor: string;
    fontSize: number;
}

export type DiagramType = 'classDiagram' | 'flowchart TD' | 'sequenceDiagram' | 'stateDiagram-v2';

export type DiagrammingLanguage = 'mermaid' | 'plantuml';

export interface ManualSection {
  title: string;
  content: string;
}

export interface Manual {
  title: string;
  introduction: string;
  sections: ManualSection[];
}

export type AiProvider = 'gemini' | 'openai' | 'lmstudio';

export interface ModelConfig {
    provider: AiProvider;
    geminiApiKey: string;
    geminiModel: string;
    openAiApiKey: string;
    openAiModel: string;
    lmStudioBaseUrl: string;
    lmStudioModel: string;
}