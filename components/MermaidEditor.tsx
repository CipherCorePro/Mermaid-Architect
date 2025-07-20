
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Icon from './Icon';

interface DiagramEditorProps {
  code: string;
  onCodeChange: (newCode: string) => void;
  onRender: () => void;
  isLoading: boolean;
}

const DiagramEditor: React.FC<DiagramEditorProps> = ({ code, onCodeChange, onRender, isLoading }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-800/50 rounded-lg h-full flex flex-col">
      <div className="p-2 border-b border-slate-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-100 p-2">{t('diagramCode')}</h2>
        <button
          onClick={onRender}
          disabled={isLoading || !code}
          className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon type="render" className="w-4 h-4" />
          <span>{t('renderDiagram')}</span>
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        className="w-full h-full p-4 bg-transparent border-0 focus:ring-0 resize-none font-mono text-sm text-slate-300 placeholder:text-slate-500"
        placeholder={t('diagramCodePlaceholder')}
        aria-label={t('diagramCode')}
      />
    </div>
  );
};

export default DiagramEditor;
