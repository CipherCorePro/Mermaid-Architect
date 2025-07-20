
import React, { useState } from 'react';
import { FileNode } from '../types';
import Icon from './Icon';

interface FileNodeViewProps {
  node: FileNode;
  onFileClick: (path: string) => void;
  level?: number;
}

const FileNodeView: React.FC<FileNodeViewProps> = ({ node, onFileClick, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const isDirectory = node.type === 'directory';

  const getFileIconType = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'ts': case 'tsx': return 'typescript';
      case 'js': case 'jsx': return 'javascript';
      case 'json': return 'json';
      case 'md': return 'markdown';
      case 'css': case 'scss': case 'less': return 'css';
      case 'html': return 'html';
      case 'png': case 'jpg': case 'jpeg': case 'gif': case 'svg': return 'image';
      default: return 'file';
    }
  };

  const handleToggle = () => {
    if (isDirectory) {
      setIsOpen(!isOpen);
    } else {
        onFileClick(node.path);
    }
  };

  return (
    <div style={{ paddingLeft: `${level * 1}rem` }}>
      <div
        onClick={handleToggle}
        className="flex items-center space-x-2 py-1 px-2 rounded-md hover:bg-slate-700 cursor-pointer transition-colors duration-150"
      >
        {isDirectory ? (
          <span className={`transform transition-transform duration-150 ${isOpen ? 'rotate-90' : ''}`}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 text-slate-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        ) : <span className="w-3 h-3"></span>}
        <Icon type={isDirectory ? 'folder' : getFileIconType(node.name)} className="w-5 h-5 flex-shrink-0 text-sky-400" />
        <span className="truncate text-sm text-slate-300">{node.name}</span>
      </div>
      {isOpen && isDirectory && node.children && (
        <div>
          {node.children
            .sort((a, b) => { // Sort directories first, then alphabetically
                if (a.type === 'directory' && b.type === 'file') return -1;
                if (a.type === 'file' && b.type === 'directory') return 1;
                return a.name.localeCompare(b.name);
            })
            .map((child) => (
                <FileNodeView key={child.path} node={child} onFileClick={onFileClick} level={level + 1} />
           ))}
        </div>
      )}
    </div>
  );
};

export default FileNodeView;
