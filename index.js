// index.tsx
import React8 from "react";
import ReactDOM from "react-dom/client";

// App.tsx
import { useState as useState6, useCallback as useCallback3, useEffect as useEffect5 } from "react";

// components/Header.tsx
import React2 from "react";

// components/Icon.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Icon = ({ type, className = "w-5 h-5" }) => {
  const icons = {
    folder: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" }) }),
    file: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }) }),
    javascript: /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 256", children: [
      /* @__PURE__ */ jsx("path", { fill: "#f7df1e", d: "M0 0h256v256H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M68.52 211.55h26.02V123.6c0-10.35 6.03-15.3 14.63-15.3 8.32 0 13.52 4.95 13.52 15.3v87.95h26.01V124.1c0-10.08 5.76-14.75 14.35-14.75 8.6 0 13.52 4.67 13.52 14.75v87.45h26.01V112.6H197.5v-22.3H119.3v22.3h26.02v89.7c0 8.32-3.12 12.48-9.92 12.48-6.52 0-9.92-4.16-9.92-12.48v-9.67h-26.01v9.67c0 15.59 10.39 23.91 27.03 23.91 16.12 0 26.2-7.54 26.2-24.7v-10.15h.27V124.1c0-15.86-9.92-23.92-25.75-23.92-14.34 0-23.9 8.32-23.9 21.05v8.05h-.28V123.6c0-15.86-9.92-23.91-25.75-23.91-14.07 0-23.9 8.05-23.9 21.06v68.32h.28l-.28 2.48z" })
    ] }),
    typescript: /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 256", children: [
      /* @__PURE__ */ jsx("path", { fill: "#007acc", d: "M0 0h256v256H0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M52.09 104.94h26.78v88.1h28.18v-88.1h26.79v-24.8H52.09v24.8zm115.65 68.3v-45.7c0-10.35 5.25-15.3 14.1-15.3 8.32 0 12.75 4.95 12.75 15.3v45.7h25.27v-50.6c0-15.86-9.92-23.92-25.75-23.92-10.15 0-17.7 4.15-22.12 11.22h-.55V80.14h-24.22v113.1h26.27z" })
    ] }),
    json: /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M14 6V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1" }),
      /* @__PURE__ */ jsx("path", { d: "M10 18v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1" }),
      /* @__PURE__ */ jsx("path", { d: "M6 10H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1" }),
      /* @__PURE__ */ jsx("path", { d: "M18 14h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1" }),
      /* @__PURE__ */ jsx("path", { d: "M6 14h12" }),
      /* @__PURE__ */ jsx("path", { d: "M12 6v12" })
    ] }),
    css: /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "m10 4.5-3 15" }),
      /* @__PURE__ */ jsx("path", { d: "m14 4.5 3 15" }),
      /* @__PURE__ */ jsx("path", { d: "M5 8h14" }),
      /* @__PURE__ */ jsx("path", { d: "M5 16h14" })
    ] }),
    html: /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "m18 16 4-4-4-4" }),
      /* @__PURE__ */ jsx("path", { d: "m6 8-4 4 4 4" }),
      /* @__PURE__ */ jsx("path", { d: "m14.5 4-5 16" })
    ] }),
    markdown: /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M10 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" }),
      /* @__PURE__ */ jsx("path", { d: "M3 7h18" }),
      /* @__PURE__ */ jsx("path", { d: "M17 12v-1" }),
      /* @__PURE__ */ jsx("path", { d: "M7 12v-1" }),
      /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" })
    ] }),
    image: /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
      /* @__PURE__ */ jsx("path", { d: "m21 15-5-5L5 21" })
    ] }),
    zip: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" }) }),
    upload: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" }) }),
    analyze: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.456-2.456L12.5 18l1.178-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456L20.5 18l-1.178.398a3.375 3.375 0 00-2.456 2.456z" }) }),
    fix: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691v4.992h-4.992m0 0h4.992m-4.991 0l-3.181-3.183a8.25 8.25 0 0111.667 0l3.181 3.183" }) }),
    png: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" }) }),
    svg: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" }) }),
    md: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM10.5 16.5h.008v.008h-.008v-.008z" }) }),
    settings: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" }) }),
    render: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 3.75l.955 1.592a.638.638 0 00.55.333h1.89c.26 0 .51-.123.67-.343L12 3.75m0 0v16.5m-6-16.5h12m-12 0H3.75m9 16.5V21" }) }),
    documentation: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m9 12.75h-9" }) }),
    manual: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" }) }),
    whitepaper: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }),
    mockup: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 9h18M9 21V9" })
    ] }),
    scaffolding: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" }) }),
    spinner: /* @__PURE__ */ jsxs("svg", { className: `${className} animate-spin`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
    ] })
  };
  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "ts":
      case "tsx":
        return "typescript";
      case "js":
      case "jsx":
        return "javascript";
      case "json":
        return "json";
      case "md":
        return "markdown";
      case "css":
      case "scss":
      case "less":
        return "css";
      case "html":
        return "html";
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
      case "svg":
        return "image";
      default:
        return "file";
    }
  };
  const iconType = type === "file" ? getFileIcon("file.unknown") : type;
  return icons[iconType] || icons["file"];
};
var Icon_default = Icon;

// hooks/useTranslation.ts
import React, { createContext, useState, useContext, useEffect } from "react";
var I18nContext = createContext(void 0);
var I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const [enRes, deRes] = await Promise.all([
          fetch("./locales/en.json"),
          fetch("./locales/de.json")
        ]);
        if (!enRes.ok || !deRes.ok) {
          throw new Error("Failed to fetch translation files");
        }
        const enData = await enRes.json();
        const deData = await deRes.json();
        setTranslations({ en: enData, de: deData });
      } catch (error) {
        console.error("Failed to load translation files:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTranslations();
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const t = (key, replacements) => {
    const langTranslations = translations[language] || translations["en"];
    let translation = langTranslations?.[key] || key;
    if (replacements) {
      Object.entries(replacements).forEach(([placeholder, value]) => {
        translation = translation.replace(`{${placeholder}}`, String(value));
      });
    }
    return translation;
  };
  if (isLoading) {
    return null;
  }
  return React.createElement(
    I18nContext.Provider,
    { value: { language, setLanguage, t } },
    children
  );
};
var useTranslation = () => {
  const context = useContext(I18nContext);
  if (context === void 0) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
};

// components/Header.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Header = ({
  onZipUpload,
  onAnalyze,
  onSettingsToggle,
  isProjectLoaded,
  isLoading,
  appMode,
  onAppModeChange
}) => {
  const fileInputRef = React2.useRef(null);
  const { t } = useTranslation();
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  const buttonBaseClasses = "px-4 py-1.5 rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50";
  const activeButtonClasses = "bg-slate-100 text-slate-800 shadow";
  const inactiveButtonClasses = "bg-transparent text-slate-300 hover:bg-slate-600";
  return /* @__PURE__ */ jsxs2("header", { className: "flex items-center justify-between p-4 bg-slate-900/50 border-b border-slate-700/50 rounded-t-lg flex-shrink-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-sky-400", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx2("path", { d: "M12 3v18" }),
        /* @__PURE__ */ jsx2("path", { d: "M3 12h18" }),
        /* @__PURE__ */ jsx2("path", { d: "M16 3a4 4 0 0 0-8 0" }),
        /* @__PURE__ */ jsx2("path", { d: "M16 21a4 4 0 0 0-8 0" }),
        /* @__PURE__ */ jsx2("path", { d: "M3 16a4 4 0 0 0 0-8" }),
        /* @__PURE__ */ jsx2("path", { d: "M21 16a4 4 0 0 0 0-8" })
      ] }),
      /* @__PURE__ */ jsx2("h1", { className: "text-2xl font-bold text-slate-100", children: "Mermaid Architect AI" })
    ] }),
    /* @__PURE__ */ jsx2("div", { className: "flex-grow flex items-center justify-center", children: /* @__PURE__ */ jsxs2("div", { className: "p-1 bg-slate-700/50 rounded-lg flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx2("button", { onClick: () => onAppModeChange("analyze"), className: `${buttonBaseClasses} ${appMode === "analyze" ? activeButtonClasses : inactiveButtonClasses}`, children: t("analyzeExistingProject") }),
      /* @__PURE__ */ jsx2("button", { onClick: () => onAppModeChange("generate"), className: `${buttonBaseClasses} ${appMode === "generate" ? activeButtonClasses : inactiveButtonClasses}`, children: t("architectFromIdea") })
    ] }) }),
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center space-x-3", children: [
      appMode === "analyze" && /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "file",
            accept: ".zip",
            onChange: onZipUpload,
            ref: fileInputRef,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ jsxs2(
          "button",
          {
            onClick: handleUploadClick,
            className: "flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md font-semibold transition-colors",
            title: t("uploadZipTitle"),
            children: [
              /* @__PURE__ */ jsx2(Icon_default, { type: "upload" }),
              /* @__PURE__ */ jsx2("span", { children: t("uploadZip") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs2(
          "button",
          {
            onClick: onAnalyze,
            disabled: !isProjectLoaded || isLoading,
            className: "flex items-center space-x-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            title: t("analyzeProjectTitle"),
            children: [
              isLoading ? /* @__PURE__ */ jsx2(Icon_default, { type: "spinner" }) : /* @__PURE__ */ jsx2(Icon_default, { type: "analyze" }),
              /* @__PURE__ */ jsx2("span", { children: isLoading ? t("analyzing") : t("analyzeProject") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx2(
        "button",
        {
          onClick: onSettingsToggle,
          className: "p-2 bg-slate-700 hover:bg-slate-600 rounded-md font-semibold transition-colors",
          title: t("settings"),
          children: /* @__PURE__ */ jsx2(Icon_default, { type: "settings" })
        }
      )
    ] })
  ] });
};
var Header_default = Header;

// components/FileNodeView.tsx
import { useState as useState2 } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var FileNodeView = ({ node, onFileClick, level = 0 }) => {
  const [isOpen, setIsOpen] = useState2(true);
  const isDirectory = node.type === "directory";
  const getFileIconType2 = (fileName) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "ts":
      case "tsx":
        return "typescript";
      case "js":
      case "jsx":
        return "javascript";
      case "json":
        return "json";
      case "md":
        return "markdown";
      case "css":
      case "scss":
      case "less":
        return "css";
      case "html":
        return "html";
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
      case "svg":
        return "image";
      default:
        return "file";
    }
  };
  const handleToggle = () => {
    if (isDirectory) {
      setIsOpen(!isOpen);
    } else {
      onFileClick(node.path);
    }
  };
  return /* @__PURE__ */ jsxs3("div", { style: { paddingLeft: `${level * 1}rem` }, children: [
    /* @__PURE__ */ jsxs3(
      "div",
      {
        onClick: handleToggle,
        className: "flex items-center space-x-2 py-1 px-2 rounded-md hover:bg-slate-700 cursor-pointer transition-colors duration-150",
        children: [
          isDirectory ? /* @__PURE__ */ jsx3("span", { className: `transform transition-transform duration-150 ${isOpen ? "rotate-90" : ""}`, children: /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 3, stroke: "currentColor", className: "w-3 h-3 text-slate-500", children: /* @__PURE__ */ jsx3("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }) }) }) : /* @__PURE__ */ jsx3("span", { className: "w-3 h-3" }),
          /* @__PURE__ */ jsx3(Icon_default, { type: isDirectory ? "folder" : getFileIconType2(node.name), className: "w-5 h-5 flex-shrink-0 text-sky-400" }),
          /* @__PURE__ */ jsx3("span", { className: "truncate text-sm text-slate-300", children: node.name })
        ]
      }
    ),
    isOpen && isDirectory && node.children && /* @__PURE__ */ jsx3("div", { children: node.children.sort((a, b) => {
      if (a.type === "directory" && b.type === "file") return -1;
      if (a.type === "file" && b.type === "directory") return 1;
      return a.name.localeCompare(b.name);
    }).map((child) => /* @__PURE__ */ jsx3(FileNodeView, { node: child, onFileClick, level: level + 1 }, child.path)) })
  ] });
};
var FileNodeView_default = FileNodeView;

// components/FileExplorer.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var FileExplorer = ({ fileTree, onFileClick }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs4("div", { className: "bg-slate-800/50 rounded-lg overflow-y-auto h-full p-2 flex flex-col", children: [
    /* @__PURE__ */ jsx4("div", { className: "p-2 border-b border-slate-700 mb-2 flex-shrink-0", children: /* @__PURE__ */ jsx4("h2", { className: "text-lg font-semibold text-slate-100", children: t("projectExplorer") }) }),
    /* @__PURE__ */ jsx4("div", { className: "pr-1 overflow-y-auto flex-grow", children: fileTree ? /* @__PURE__ */ jsx4(FileNodeView_default, { node: fileTree, onFileClick }) : /* @__PURE__ */ jsxs4("div", { className: "flex flex-col items-center justify-center h-full text-slate-500 text-center p-4", children: [
      /* @__PURE__ */ jsx4(Icon_default, { type: "zip", className: "w-16 h-16 mb-4" }),
      /* @__PURE__ */ jsx4("p", { className: "font-semibold", children: t("noProjectLoaded") }),
      /* @__PURE__ */ jsx4("p", { className: "text-sm", children: t("uploadZipToStart") })
    ] }) })
  ] });
};
var FileExplorer_default = FileExplorer;

// components/MermaidEditor.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var DiagramEditor = ({ code, onCodeChange, onRender, isLoading }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs5("div", { className: "bg-slate-800/50 rounded-lg h-full flex flex-col", children: [
    /* @__PURE__ */ jsxs5("div", { className: "p-2 border-b border-slate-700 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx5("h2", { className: "text-lg font-semibold text-slate-100 p-2", children: t("diagramCode") }),
      /* @__PURE__ */ jsxs5(
        "button",
        {
          onClick: onRender,
          disabled: isLoading || !code,
          className: "flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx5(Icon_default, { type: "render", className: "w-4 h-4" }),
            /* @__PURE__ */ jsx5("span", { children: t("renderDiagram") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx5(
      "textarea",
      {
        value: code,
        onChange: (e) => onCodeChange(e.target.value),
        className: "w-full h-full p-4 bg-transparent border-0 focus:ring-0 resize-none font-mono text-sm text-slate-300 placeholder:text-slate-500",
        placeholder: t("diagramCodePlaceholder"),
        "aria-label": t("diagramCode")
      }
    )
  ] });
};
var MermaidEditor_default = DiagramEditor;

// components/DiagramViewer.tsx
import { useEffect as useEffect2, useRef, useState as useState3, useCallback } from "react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var DiagramViewer = ({
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
  isProjectLoaded
}) => {
  const diagramContainerRef = useRef(null);
  const [svgContent, setSvgContent] = useState3("");
  const [isRenderLoading, setIsRenderLoading] = useState3(false);
  const { t } = useTranslation();
  const renderMermaid = useCallback(async () => {
    if (!diagramContainerRef.current) return;
    setIsRenderLoading(true);
    diagramContainerRef.current.innerHTML = "";
    setSvgContent("");
    onRenderError(null);
    const renderId = "mermaid-graph-" + Date.now();
    try {
      const { svg } = await window.mermaid.render(renderId, diagramCode);
      if (diagramContainerRef.current) {
        diagramContainerRef.current.innerHTML = svg;
        setSvgContent(svg);
      }
    } catch (e) {
      console.error("Mermaid rendering error:", e);
      onRenderError(e.message || "Unknown Mermaid error");
    } finally {
      setIsRenderLoading(false);
    }
  }, [diagramCode, onRenderError]);
  const renderPlantUml = useCallback(async () => {
    if (!diagramContainerRef.current) return;
    setIsRenderLoading(true);
    diagramContainerRef.current.innerHTML = "";
    setSvgContent("");
    onRenderError(null);
    try {
      const encoded = plantumlEncoder.encode(diagramCode);
      const url = `https://www.plantuml.com/plantuml/svg/${encoded}`;
      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
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
    } catch (e) {
      console.error("PlantUML rendering error:", e);
      onRenderError(e.message || "Failed to fetch PlantUML diagram.");
    } finally {
      setIsRenderLoading(false);
    }
  }, [diagramCode, onRenderError]);
  useEffect2(() => {
    if (!diagramCode) {
      if (diagramContainerRef.current) diagramContainerRef.current.innerHTML = "";
      setSvgContent("");
      onRenderError(null);
      return;
    }
    if (diagrammingLanguage === "mermaid") {
      renderMermaid();
    } else if (diagrammingLanguage === "plantuml") {
      renderPlantUml();
    }
  }, [diagramCode, diagrammingLanguage, renderMermaid, renderPlantUml, onRenderError]);
  const downloadFile = (content, fileName, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleDownloadPng = async () => {
    if (diagrammingLanguage === "plantuml") {
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
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = "diagram.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      } catch (error2) {
        console.error("Failed to download PlantUML PNG:", error2);
        alert("Failed to download PlantUML PNG.");
      }
    } else {
      if (!svgContent || !diagramContainerRef.current?.firstChild) {
        return;
      }
      const svgElement = diagramContainerRef.current.firstChild;
      const { width, height } = svgElement.getBoundingClientRect();
      if (width === 0 || height === 0) {
        console.error("Cannot export PNG for a diagram with zero dimensions.");
        alert("Cannot export: Diagram has no size. Please render a valid diagram first.");
        return;
      }
      const img = new Image();
      const svgBlob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const padding = 20;
        canvas.width = width + padding * 2;
        canvas.height = height + padding * 2;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, padding, padding, width, height);
          const pngUrl = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.href = pngUrl;
          a.download = "diagram.png";
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
      downloadFile(svgContent, "diagram.svg", "image/svg+xml");
    }
  };
  const handleDownloadSource = () => {
    const extension = diagrammingLanguage === "mermaid" ? "md" : "txt";
    const mimeType = "text/plain;charset=utf-8";
    const content = diagrammingLanguage === "mermaid" ? `\`\`\`mermaid
${diagramCode}
\`\`\`` : diagramCode;
    downloadFile(content, `diagram.${extension}`, mimeType);
  };
  const isDiagramExportDisabled = !svgContent || isLoading || !!error;
  const isGeneratorBusy = isGeneratingDocs || isGeneratingWhitepaper || isGeneratingManual;
  return /* @__PURE__ */ jsxs6("div", { className: "bg-slate-800/50 rounded-lg h-full flex flex-col relative", children: [
    /* @__PURE__ */ jsxs6("div", { className: "p-2 border-b border-slate-700 flex justify-between items-center flex-shrink-0", children: [
      /* @__PURE__ */ jsx6("h2", { className: "text-lg font-semibold text-slate-100 p-2", children: t("diagramViewer") }),
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx6("button", { title: t("exportPNG"), onClick: handleDownloadPng, disabled: isDiagramExportDisabled, className: "p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: /* @__PURE__ */ jsx6(Icon_default, { type: "png", className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx6("button", { title: t("exportSVG"), onClick: handleDownloadSvg, disabled: isDiagramExportDisabled, className: "p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: /* @__PURE__ */ jsx6(Icon_default, { type: "svg", className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx6("button", { title: t("downloadSourceCode"), onClick: handleDownloadSource, disabled: !diagramCode || isLoading, className: "p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: /* @__PURE__ */ jsx6(Icon_default, { type: "file", className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx6("button", { title: t("exportDocs"), onClick: onGenerateDocs, disabled: isDiagramExportDisabled || isGeneratorBusy, className: "p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: isGeneratingDocs ? /* @__PURE__ */ jsx6(Icon_default, { type: "spinner", className: "w-5 h-5" }) : /* @__PURE__ */ jsx6(Icon_default, { type: "documentation", className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx6("button", { title: t("exportWhitepaper"), onClick: onGenerateWhitepaper, disabled: isDiagramExportDisabled || isGeneratorBusy, className: "p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: isGeneratingWhitepaper ? /* @__PURE__ */ jsx6(Icon_default, { type: "spinner", className: "w-5 h-5" }) : /* @__PURE__ */ jsx6(Icon_default, { type: "whitepaper", className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx6("button", { title: t("exportManual"), onClick: onGenerateManual, disabled: !isProjectLoaded || isLoading || isGeneratorBusy, className: "p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: isGeneratingManual ? /* @__PURE__ */ jsx6(Icon_default, { type: "spinner", className: "w-5 h-5" }) : /* @__PURE__ */ jsx6(Icon_default, { type: "manual", className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx6("button", { title: t("exportProjectMarkdown"), onClick: onGenerateProjectMarkdown, disabled: !isProjectLoaded || isLoading, className: "p-2 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: /* @__PURE__ */ jsx6(Icon_default, { type: "md", className: "w-5 h-5" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "flex-grow p-4 overflow-auto relative min-h-0", children: [
      (isLoading || isRenderLoading) && /* @__PURE__ */ jsxs6("div", { className: "absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center z-10", children: [
        /* @__PURE__ */ jsx6(Icon_default, { type: "spinner", className: "w-12 h-12 text-sky-400" }),
        /* @__PURE__ */ jsx6("p", { className: "mt-4 text-lg", children: isLoading ? t("analyzingProject") : t("renderingDiagram") })
      ] }),
      error && !isLoading && /* @__PURE__ */ jsxs6("div", { className: "absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center z-10 p-4 text-center", children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-xl font-bold text-red-400 mb-2", children: t("diagramError") }),
        /* @__PURE__ */ jsx6("div", { className: "text-sm text-slate-400 mb-4 bg-slate-800 p-2 rounded w-full max-w-md max-h-48 overflow-auto font-mono text-left", children: error }),
        isCorrectionAllowed ? /* @__PURE__ */ jsxs6("button", { onClick: onFixError, disabled: isLoading, className: "flex items-center space-x-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsx6(Icon_default, { type: "fix", className: "w-5 h-5" }),
          /* @__PURE__ */ jsx6("span", { children: t("fixWithAI") })
        ] }) : /* @__PURE__ */ jsxs6("div", { className: "mt-4 p-3 bg-amber-900/50 border border-amber-600/50 rounded-md", children: [
          /* @__PURE__ */ jsx6("p", { className: "font-semibold text-amber-300", children: t("aiCorrectionFailed") }),
          /* @__PURE__ */ jsx6("p", { className: "text-amber-400 text-sm mt-1", children: t("aiCorrectionFailedMessage") })
        ] })
      ] }),
      !diagramCode && !isLoading && !error && /* @__PURE__ */ jsxs6("div", { className: "flex flex-col items-center justify-center h-full text-slate-500 text-center", children: [
        /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-20 h-20 mb-4", children: /* @__PURE__ */ jsx6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m-5-1.5l1 1.5m-8.25-11.25h16.5" }) }),
        /* @__PURE__ */ jsx6("p", { className: "font-semibold text-lg", children: t("diagramAppearHere") }),
        /* @__PURE__ */ jsx6("p", { className: "text-sm", children: t("uploadAndAnalyze") })
      ] }),
      /* @__PURE__ */ jsx6("div", { ref: diagramContainerRef, className: "w-full h-full flex items-center justify-center text-slate-200 [&>svg]:max-w-full [&>svg]:max-h-full [&>div]:max-w-full [&>div]:max-h-full [&>div]:w-full [&>div]:h-full [&>div>svg]:w-full [&>div>svg]:h-full" })
    ] }),
    analysisExplanation && !error && /* @__PURE__ */ jsxs6("div", { className: "p-4 border-t border-slate-700 bg-slate-900/30 text-sm text-slate-300 max-h-32 overflow-y-auto flex-shrink-0", children: [
      /* @__PURE__ */ jsx6("h3", { className: "font-semibold text-slate-100 mb-1", children: t("aiAnalysis") }),
      /* @__PURE__ */ jsx6("p", { children: analysisExplanation })
    ] })
  ] });
};
var DiagramViewer_default = DiagramViewer;

// components/SettingsModal.tsx
import { useState as useState4, useEffect as useEffect3 } from "react";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState4(value);
  useEffect3(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
var SettingsModal = ({
  isOpen,
  onClose,
  themeSettings,
  onThemeChange,
  diagramType,
  onDiagramTypeChange,
  diagrammingLanguage,
  onDiagrammingLanguageChange,
  modelConfig,
  onModelConfigChange
}) => {
  const { language, setLanguage, t } = useTranslation();
  const [geminiModels, setGeminiModels] = useState4([]);
  const [openAiModels, setOpenAiModels] = useState4([]);
  const [isFetchingModels, setIsFetchingModels] = useState4(false);
  const [fetchError, setFetchError] = useState4(null);
  const handleModelConfigValueChange = (key, value) => {
    onModelConfigChange({ ...modelConfig, [key]: value });
  };
  const debouncedGeminiApiKey = useDebounce(modelConfig.geminiApiKey, 500);
  const debouncedOpenAiApiKey = useDebounce(modelConfig.openAiApiKey, 500);
  useEffect3(() => {
    if (!isOpen) return;
    const fetchGeminiModels = async (apiKey) => {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        if (!response.ok) throw new Error(t("noModelsFound"));
        const data = await response.json();
        const filteredModels = data.models.filter((m) => m.supportedGenerationMethods.includes("generateContent") && m.name.includes("gemini")).map((m) => m.name.replace("models/", "")).sort((a, b) => b.localeCompare(a));
        setGeminiModels(filteredModels);
        if (filteredModels.length > 0 && !filteredModels.includes(modelConfig.geminiModel)) {
          handleModelConfigValueChange("geminiModel", filteredModels.find((m) => m.includes("flash")) || filteredModels[0]);
        }
      } catch (error) {
        setFetchError(error.message);
        setGeminiModels([]);
      }
    };
    const fetchOpenAiModels = async (apiKey) => {
      try {
        const response = await fetch("https://api.openai.com/v1/models", {
          headers: { "Authorization": `Bearer ${apiKey}` }
        });
        if (!response.ok) throw new Error(t("noModelsFound"));
        const data = await response.json();
        const filteredModels = data.data.map((m) => m.id).filter((id) => id.includes("gpt")).sort((a, b) => b.localeCompare(a));
        setOpenAiModels(filteredModels);
        if (filteredModels.length > 0 && !filteredModels.includes(modelConfig.openAiModel)) {
          handleModelConfigValueChange("openAiModel", filteredModels.find((m) => m.includes("gpt-4")) || filteredModels[0]);
        }
      } catch (error) {
        setFetchError(error.message);
        setOpenAiModels([]);
      }
    };
    const fetchAllModels = async () => {
      setIsFetchingModels(true);
      setFetchError(null);
      setGeminiModels([]);
      setOpenAiModels([]);
      if (modelConfig.provider === "openai" && debouncedOpenAiApiKey) {
        await fetchOpenAiModels(debouncedOpenAiApiKey);
      } else if (modelConfig.provider === "gemini" && debouncedGeminiApiKey) {
        await fetchGeminiModels(debouncedGeminiApiKey);
      }
      setIsFetchingModels(false);
    };
    fetchAllModels();
  }, [isOpen, modelConfig.provider, debouncedOpenAiApiKey, debouncedGeminiApiKey, t]);
  if (!isOpen) return null;
  const handleThemeValueChange = (key, value) => {
    onThemeChange({ ...themeSettings, [key]: value });
  };
  const diagramTypes = [
    { label: t("classDiagram"), value: "classDiagram" },
    { label: t("flowchart"), value: "flowchart TD" },
    { label: t("sequenceDiagram"), value: "sequenceDiagram" },
    { label: t("stateDiagram"), value: "stateDiagram-v2" }
  ];
  const ModelSelector = ({ provider }) => {
    const models = provider === "gemini" ? geminiModels : openAiModels;
    const selectedModel = provider === "gemini" ? modelConfig.geminiModel : modelConfig.openAiModel;
    const apiKey = provider === "gemini" ? modelConfig.geminiApiKey : modelConfig.openAiApiKey;
    const modelKey = provider === "gemini" ? "geminiModel" : "openAiModel";
    const label = provider === "gemini" ? t("geminiModel") : t("openAiModel");
    if (!apiKey) return null;
    return /* @__PURE__ */ jsxs7("div", { children: [
      /* @__PURE__ */ jsx7("label", { htmlFor: `${provider}-model-select`, className: "block text-sm font-medium text-slate-300 mb-2", children: label }),
      isFetchingModels && /* @__PURE__ */ jsx7("p", { className: "text-sm text-slate-400 italic", children: t("fetchingModels") }),
      fetchError && /* @__PURE__ */ jsx7("p", { className: "text-sm text-red-400", children: fetchError }),
      !isFetchingModels && !fetchError && models.length > 0 && /* @__PURE__ */ jsx7(
        "select",
        {
          id: `${provider}-model-select`,
          value: selectedModel,
          onChange: (e) => handleModelConfigValueChange(modelKey, e.target.value),
          className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
          children: models.map((model) => /* @__PURE__ */ jsx7("option", { value: model, children: model }, model))
        }
      ),
      !isFetchingModels && !fetchError && models.length === 0 && apiKey && /* @__PURE__ */ jsx7("p", { className: "text-sm text-amber-400", children: t("noModelsFound") })
    ] });
  };
  return /* @__PURE__ */ jsx7(
    "div",
    {
      className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs7(
        "div",
        {
          className: "bg-slate-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs7("header", { className: "flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0", children: [
              /* @__PURE__ */ jsx7("h2", { className: "text-xl font-bold text-slate-100", children: t("settingsTitle") }),
              /* @__PURE__ */ jsx7("button", { onClick: onClose, className: "p-1 rounded-full hover:bg-slate-700 transition-colors", children: /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }) })
            ] }),
            /* @__PURE__ */ jsxs7("main", { className: "p-6 overflow-y-auto space-y-8", children: [
              /* @__PURE__ */ jsxs7("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs7("div", { children: [
                  /* @__PURE__ */ jsx7("label", { htmlFor: "language-select", className: "block text-sm font-medium text-slate-300 mb-2", children: t("language") }),
                  /* @__PURE__ */ jsxs7(
                    "select",
                    {
                      id: "language-select",
                      value: language,
                      onChange: (e) => setLanguage(e.target.value),
                      className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                      children: [
                        /* @__PURE__ */ jsx7("option", { value: "en", children: "English" }),
                        /* @__PURE__ */ jsx7("option", { value: "de", children: "Deutsch" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs7("div", { children: [
                  /* @__PURE__ */ jsx7("label", { htmlFor: "diagram-lang-select", className: "block text-sm font-medium text-slate-300 mb-2", children: t("diagrammingLanguage") }),
                  /* @__PURE__ */ jsxs7(
                    "select",
                    {
                      id: "diagram-lang-select",
                      value: diagrammingLanguage,
                      onChange: (e) => onDiagrammingLanguageChange(e.target.value),
                      className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                      children: [
                        /* @__PURE__ */ jsx7("option", { value: "mermaid", children: t("mermaid") }),
                        /* @__PURE__ */ jsx7("option", { value: "plantuml", children: t("plantuml") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs7("div", { children: [
                  /* @__PURE__ */ jsx7("label", { htmlFor: "diagram-type-select", className: "block text-sm font-medium text-slate-300 mb-2", children: t("diagramType") }),
                  /* @__PURE__ */ jsx7(
                    "select",
                    {
                      id: "diagram-type-select",
                      value: diagramType,
                      onChange: (e) => onDiagramTypeChange(e.target.value),
                      className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                      children: diagramTypes.map((dt) => /* @__PURE__ */ jsx7("option", { value: dt.value, children: dt.label }, dt.value))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs7("section", { children: [
                /* @__PURE__ */ jsx7("h3", { className: "text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-4", children: t("aiProviderSettings") }),
                /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs7("div", { children: [
                    /* @__PURE__ */ jsx7("label", { htmlFor: "ai-provider-select", className: "block text-sm font-medium text-slate-300 mb-2", children: t("aiProvider") }),
                    /* @__PURE__ */ jsxs7(
                      "select",
                      {
                        id: "ai-provider-select",
                        value: modelConfig.provider,
                        onChange: (e) => handleModelConfigValueChange("provider", e.target.value),
                        className: "w-full md:w-1/3 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                        children: [
                          /* @__PURE__ */ jsx7("option", { value: "gemini", children: "Google Gemini" }),
                          /* @__PURE__ */ jsx7("option", { value: "openai", children: t("openai") }),
                          /* @__PURE__ */ jsx7("option", { value: "lmstudio", children: "LM Studio" })
                        ]
                      }
                    )
                  ] }),
                  modelConfig.provider === "gemini" && /* @__PURE__ */ jsxs7("div", { className: "p-4 border border-slate-700 rounded-lg space-y-4 bg-slate-900/30", children: [
                    /* @__PURE__ */ jsx7("h4", { className: "font-semibold text-slate-200", children: "Google Gemini" }),
                    /* @__PURE__ */ jsxs7("div", { children: [
                      /* @__PURE__ */ jsx7("label", { htmlFor: "gemini-api-key", className: "block text-sm font-medium text-slate-300 mb-2", children: t("geminiApiKey") }),
                      /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: "password",
                          id: "gemini-api-key",
                          value: modelConfig.geminiApiKey,
                          onChange: (e) => handleModelConfigValueChange("geminiApiKey", e.target.value),
                          className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                          placeholder: "Enter your Gemini API Key"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx7(ModelSelector, { provider: "gemini" })
                  ] }),
                  modelConfig.provider === "openai" && /* @__PURE__ */ jsxs7("div", { className: "p-4 border border-slate-700 rounded-lg space-y-4 bg-slate-900/30", children: [
                    /* @__PURE__ */ jsx7("h4", { className: "font-semibold text-slate-200", children: "OpenAI" }),
                    /* @__PURE__ */ jsxs7("div", { children: [
                      /* @__PURE__ */ jsx7("label", { htmlFor: "openai-api-key", className: "block text-sm font-medium text-slate-300 mb-2", children: t("openAiApiKey") }),
                      /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: "password",
                          id: "openai-api-key",
                          value: modelConfig.openAiApiKey,
                          onChange: (e) => handleModelConfigValueChange("openAiApiKey", e.target.value),
                          className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                          placeholder: "Enter your OpenAI API Key"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx7(ModelSelector, { provider: "openai" })
                  ] }),
                  modelConfig.provider === "lmstudio" && /* @__PURE__ */ jsxs7("div", { className: "p-4 border border-slate-700 rounded-lg space-y-4 bg-slate-900/30", children: [
                    /* @__PURE__ */ jsx7("h4", { className: "font-semibold text-slate-200", children: t("lmStudioSettings") }),
                    /* @__PURE__ */ jsxs7("div", { children: [
                      /* @__PURE__ */ jsx7("label", { htmlFor: "lm-studio-url", className: "block text-sm font-medium text-slate-300 mb-2", children: t("lmStudioBaseUrl") }),
                      /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: "text",
                          id: "lm-studio-url",
                          value: modelConfig.lmStudioBaseUrl,
                          onChange: (e) => handleModelConfigValueChange("lmStudioBaseUrl", e.target.value),
                          className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                          placeholder: "http://localhost:1234/v1"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs7("div", { children: [
                      /* @__PURE__ */ jsx7("label", { htmlFor: "lm-studio-model", className: "block text-sm font-medium text-slate-300 mb-2", children: t("lmStudioModelName") }),
                      /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: "text",
                          id: "lm-studio-model",
                          value: modelConfig.lmStudioModel,
                          onChange: (e) => handleModelConfigValueChange("lmStudioModel", e.target.value),
                          className: "w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                          placeholder: "e.g., gemma-2b-it"
                        }
                      )
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs7("section", { children: [
                /* @__PURE__ */ jsx7("h3", { className: "text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-4", children: t("themeSettings") }),
                /* @__PURE__ */ jsx7("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4", children: Object.keys(themeSettings).map((key) => {
                  const settingKey = key;
                  const isColor = settingKey !== "fontSize";
                  return /* @__PURE__ */ jsxs7("div", { children: [
                    /* @__PURE__ */ jsx7("label", { htmlFor: key, className: "block text-sm font-medium text-slate-300 mb-1 capitalize", children: t(settingKey) }),
                    /* @__PURE__ */ jsxs7("div", { className: "flex items-center", children: [
                      isColor && /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: "color",
                          id: key,
                          value: themeSettings[settingKey],
                          onChange: (e) => handleThemeValueChange(settingKey, e.target.value),
                          className: "p-0 h-10 w-10 rounded-md border-none bg-slate-700 cursor-pointer"
                        }
                      ),
                      /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: isColor ? "text" : "number",
                          value: themeSettings[settingKey],
                          onChange: (e) => handleThemeValueChange(settingKey, isColor ? e.target.value : parseInt(e.target.value, 10)),
                          className: "w-full ml-2 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500",
                          min: isColor ? void 0 : 8,
                          max: isColor ? void 0 : 24
                        }
                      )
                    ] })
                  ] }, key);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx7("footer", { className: "p-4 bg-slate-900/50 border-t border-slate-700 flex-shrink-0 flex justify-end", children: /* @__PURE__ */ jsx7(
              "button",
              {
                onClick: onClose,
                className: "px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors",
                children: t("close")
              }
            ) })
          ]
        }
      )
    }
  );
};
var SettingsModal_default = SettingsModal;

// components/IdeaArchitect.tsx
import { useState as useState5, useMemo, useEffect as useEffect4 } from "react";
import { Fragment as Fragment2, jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var getFileIconType = (fileName) => {
  if (!fileName) return "file";
  const extension = fileName.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "ts":
    case "tsx":
      return "typescript";
    case "js":
    case "jsx":
      return "javascript";
    case "json":
      return "json";
    case "md":
      return "markdown";
    case "css":
    case "scss":
    case "less":
      return "css";
    case "html":
      return "html";
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
      return "image";
    default:
      return "file";
  }
};
var ManualViewer = ({ manual, onDownload }) => {
  const { t } = useTranslation();
  const generateMarkdown = () => {
    let md = `# ${manual.title}

`;
    md += `_${manual.introduction}_

`;
    manual.sections.forEach((section) => {
      md += `## ${section.title}

`;
      md += `${section.content}

`;
    });
    return md;
  };
  const generateHtml = () => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${manual.title}</title>
`;
    html += `<script src="https://cdn.tailwindcss.com?plugins=typography"><\/script>
`;
    html += `<body class="bg-slate-900 text-slate-200 p-8">
<article class="prose prose-invert prose-slate max-w-4xl mx-auto prose-h1:text-cyan-400 prose-h2:text-teal-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
`;
    html += `<h1>${manual.title}</h1>
`;
    html += `<p class="lead">${manual.introduction}</p>
`;
    manual.sections.forEach((section) => {
      html += `<h2>${section.title}</h2>
<div>${section.content.replace(/\n/g, "<br />")}</div>
`;
    });
    html += "</article>\n</body>\n</html>";
    return html;
  };
  return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col bg-slate-900 rounded-lg", children: [
    /* @__PURE__ */ jsx8("div", { className: "p-2 border-b border-slate-700 flex justify-end flex-shrink-0", children: /* @__PURE__ */ jsxs8("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxs8("button", { onClick: () => onDownload(generateHtml(), "manual.html", "text/html"), className: "flex items-center gap-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-slate-200 rounded-lg transition-colors duration-300", children: [
        /* @__PURE__ */ jsx8(Icon_default, { type: "html", className: "w-5 h-5" }),
        /* @__PURE__ */ jsx8("span", { children: t("downloadHTML") })
      ] }),
      /* @__PURE__ */ jsxs8("button", { onClick: () => onDownload(generateMarkdown(), "manual.md", "text/markdown"), className: "flex items-center gap-2 px-3 py-1.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors duration-300", children: [
        /* @__PURE__ */ jsx8(Icon_default, { type: "md", className: "w-5 h-5" }),
        /* @__PURE__ */ jsx8("span", { children: t("downloadMD") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs8("div", { className: "p-6 overflow-y-auto prose prose-invert prose-slate max-w-none prose-h1:text-cyan-400 prose-h2:text-teal-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300", children: [
      /* @__PURE__ */ jsx8("p", { className: "lead !my-2 !text-lg !text-slate-400", children: manual.introduction }),
      manual.sections.map((section, index) => /* @__PURE__ */ jsxs8("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx8("h2", { children: section.title }),
        /* @__PURE__ */ jsx8("div", { className: "text-slate-300", dangerouslySetInnerHTML: { __html: section.content.replace(/\n/g, "<br />") } })
      ] }, index))
    ] })
  ] });
};
var IdeaArchitect = ({
  ideaPrompt,
  onIdeaPromptChange,
  onGenerate,
  isLoading,
  diagram,
  editableDiagramCode,
  onEditableDiagramCodeChange,
  onRenderDiagram,
  documentation,
  whitepaper,
  generatedSuperprompt,
  themeRevision,
  downloadFile,
  diagrammingLanguage,
  generatedMockup,
  isGeneratingMockup,
  onGenerateMockup,
  generatedManual,
  isGeneratingManual,
  onGenerateManual,
  generatedScaffolding,
  isGeneratingScaffolding,
  onGenerateScaffolding
}) => {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState5("diagram");
  const hasContent = diagram || documentation || whitepaper || generatedSuperprompt;
  const renderContent = () => {
    if (!hasContent && !isLoading) {
      return /* @__PURE__ */ jsxs8("div", { className: "flex flex-col items-center justify-center h-full text-slate-500 text-center p-4", children: [
        /* @__PURE__ */ jsx8(Icon_default, { type: "analyze", className: "w-20 h-20 mb-4 text-sky-400/50" }),
        /* @__PURE__ */ jsx8("h2", { className: "text-2xl font-bold text-slate-300", children: t("ideaArchitectWelcome") }),
        /* @__PURE__ */ jsx8("p", { className: "mt-2 max-w-xl", children: t("ideaArchitectDescription") })
      ] });
    }
    if (isLoading) {
      return /* @__PURE__ */ jsxs8("div", { className: "absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center z-10", children: [
        /* @__PURE__ */ jsx8(Icon_default, { type: "spinner", className: "w-12 h-12 text-sky-400" }),
        /* @__PURE__ */ jsx8("p", { className: "mt-4 text-lg", children: t("generatingArchitecture") })
      ] });
    }
    return /* @__PURE__ */ jsxs8("div", { className: "w-full h-full flex flex-col", children: [
      /* @__PURE__ */ jsx8("div", { className: "flex-shrink-0 border-b border-slate-700", children: /* @__PURE__ */ jsxs8("nav", { className: "flex space-x-1 p-2 overflow-x-auto", children: [
        /* @__PURE__ */ jsx8(TabButton, { id: "diagram", activeTab, setActiveTab, label: t("diagram") }),
        /* @__PURE__ */ jsx8(TabButton, { id: "docs", activeTab, setActiveTab, label: t("technicalDocumentation") }),
        /* @__PURE__ */ jsx8(TabButton, { id: "whitepaper", activeTab, setActiveTab, label: t("exportWhitepaper") }),
        /* @__PURE__ */ jsx8(TabButton, { id: "superprompt", activeTab, setActiveTab, label: t("superprompt") }),
        generatedSuperprompt && /* @__PURE__ */ jsx8(TabButton, { id: "scaffolding", activeTab, setActiveTab, label: t("scaffolding") }),
        generatedSuperprompt && /* @__PURE__ */ jsx8(TabButton, { id: "mockup", activeTab, setActiveTab, label: t("mockup") }),
        generatedSuperprompt && /* @__PURE__ */ jsx8(TabButton, { id: "manual", activeTab, setActiveTab, label: t("userManual") })
      ] }) }),
      /* @__PURE__ */ jsxs8("div", { className: "flex-grow min-h-0 p-4", children: [
        activeTab === "diagram" && diagram && /* @__PURE__ */ jsxs8("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 h-full", children: [
          /* @__PURE__ */ jsx8(
            MermaidEditor_default,
            {
              code: editableDiagramCode,
              onCodeChange: onEditableDiagramCodeChange,
              onRender: onRenderDiagram,
              isLoading
            }
          ),
          /* @__PURE__ */ jsx8(
            DiagramViewer_default,
            {
              diagramCode: diagram,
              diagrammingLanguage,
              isLoading,
              error: null,
              onFixError: () => {
              },
              onRenderError: () => {
              },
              analysisExplanation: "",
              isCorrectionAllowed: false,
              onGenerateDocs: () => downloadFile(documentation, "technical-documentation.html", "text/html;charset=utf-8"),
              onGenerateWhitepaper: () => downloadFile(whitepaper, "project-whitepaper.html", "text/html;charset=utf-8"),
              onGenerateManual: () => {
              },
              isGeneratingDocs: false,
              isGeneratingWhitepaper: false,
              isGeneratingManual: false,
              onGenerateProjectMarkdown: () => {
              },
              isProjectLoaded: false
            },
            `generate-${themeRevision}-${diagrammingLanguage}`
          )
        ] }),
        activeTab === "docs" && documentation && /* @__PURE__ */ jsx8(
          HtmlViewer,
          {
            htmlContent: documentation,
            onDownload: () => downloadFile(documentation, "technical-documentation.html", "text/html;charset=utf-8")
          }
        ),
        activeTab === "whitepaper" && whitepaper && /* @__PURE__ */ jsx8(
          HtmlViewer,
          {
            htmlContent: whitepaper,
            onDownload: () => downloadFile(whitepaper, "project-whitepaper.html", "text/html;charset=utf-8")
          }
        ),
        activeTab === "superprompt" && generatedSuperprompt && /* @__PURE__ */ jsx8(
          PromptViewer,
          {
            markdownContent: generatedSuperprompt,
            downloadFile,
            language
          }
        ),
        activeTab === "scaffolding" && /* @__PURE__ */ jsx8(
          ScaffoldingViewer,
          {
            generatedScaffolding,
            isGeneratingScaffolding,
            onGenerateScaffolding,
            ideaPrompt
          }
        ),
        activeTab === "mockup" && /* @__PURE__ */ jsx8(
          MockupViewer,
          {
            generatedMockup,
            isGeneratingMockup,
            onGenerateMockup,
            onDownload: () => downloadFile(generatedMockup, "ui-mockup.html", "text/html;charset=utf-8")
          }
        ),
        activeTab === "manual" && /* @__PURE__ */ jsx8(
          ManualModeViewer,
          {
            generatedManual,
            isGeneratingManual,
            onGenerateManual,
            onDownload: downloadFile
          }
        )
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs8("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-4 h-full", children: [
    /* @__PURE__ */ jsxs8("div", { className: "lg:col-span-4 h-full flex flex-col bg-slate-800/50 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx8("h2", { className: "text-lg font-semibold text-slate-100 mb-3", children: t("architectFromIdea") }),
      /* @__PURE__ */ jsx8(
        "textarea",
        {
          value: ideaPrompt,
          onChange: (e) => onIdeaPromptChange(e.target.value),
          className: "w-full flex-grow p-4 bg-slate-900/70 border border-slate-700 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none font-mono text-sm text-slate-300 placeholder:text-slate-500",
          placeholder: t("describeYourIdea")
        }
      ),
      /* @__PURE__ */ jsx8(
        "button",
        {
          onClick: onGenerate,
          disabled: isLoading || !ideaPrompt,
          className: "mt-4 w-full flex items-center justify-center space-x-2 px-4 py-3 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: isLoading ? /* @__PURE__ */ jsxs8(Fragment2, { children: [
            /* @__PURE__ */ jsx8(Icon_default, { type: "spinner", className: "w-5 h-5" }),
            /* @__PURE__ */ jsx8("span", { children: t("generatingArchitecture") })
          ] }) : /* @__PURE__ */ jsxs8(Fragment2, { children: [
            /* @__PURE__ */ jsx8(Icon_default, { type: "analyze", className: "w-5 h-5" }),
            /* @__PURE__ */ jsx8("span", { children: t("generateArchitecture") })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "lg:col-span-8 h-full bg-slate-800/50 rounded-lg relative", children: renderContent() })
  ] });
};
var TabButton = ({ id, activeTab, setActiveTab, label }) => {
  const isActive = activeTab === id;
  return /* @__PURE__ */ jsx8(
    "button",
    {
      onClick: () => setActiveTab(id),
      className: `px-4 py-2 text-sm font-medium rounded-md transition-colors flex-shrink-0 ${isActive ? "bg-sky-600 text-white" : "text-slate-300 hover:bg-slate-700"}`,
      children: label
    }
  );
};
var HtmlViewer = ({ htmlContent, onDownload }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col bg-slate-900 rounded-lg", children: [
    /* @__PURE__ */ jsx8("div", { className: "p-2 border-b border-slate-700 flex justify-end flex-shrink-0", children: /* @__PURE__ */ jsxs8(
      "button",
      {
        onClick: onDownload,
        className: "flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold text-sm transition-colors",
        children: [
          /* @__PURE__ */ jsx8(Icon_default, { type: "html", className: "w-4 h-4" }),
          /* @__PURE__ */ jsx8("span", { children: t("downloadHTML") })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx8("div", { className: "flex-grow w-full h-full min-h-0", children: /* @__PURE__ */ jsx8(
      "iframe",
      {
        srcDoc: htmlContent,
        className: "w-full h-full border-0 bg-white",
        sandbox: "allow-scripts allow-same-origin",
        title: "Generated Content"
      }
    ) })
  ] });
};
var PromptViewer = ({ markdownContent, downloadFile, language }) => {
  const { t } = useTranslation();
  const handleDownloadMd = () => {
    downloadFile(markdownContent, "superprompt.md", "text/markdown;charset=utf-8");
  };
  const handleDownloadHtml = () => {
    const html = `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Superprompt</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; padding: 1rem 2rem; background-color: #111827; color: #d1d5db; margin: 0;}
        main { max-width: 800px; margin: 2rem auto; }
        pre { white-space: pre-wrap; word-wrap: break-word; background: #1f2937; padding: 1.5em; border-radius: 8px; border: 1px solid #374151; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 14px; }
        h1 { color: #f9fafb; border-bottom: 1px solid #374151; padding-bottom: 0.5em;}
    </style>
</head>
<body>
    <main>
        <h1>Superprompt</h1>
        <pre>${markdownContent.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
    </main>
</body>
</html>`;
    downloadFile(html, "superprompt.html", "text/html;charset=utf-8");
  };
  return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col bg-slate-900 rounded-lg", children: [
    /* @__PURE__ */ jsxs8("div", { className: "p-2 border-b border-slate-700 flex justify-between items-center flex-shrink-0", children: [
      /* @__PURE__ */ jsx8("p", { className: "text-sm text-slate-400 px-2 italic max-w-lg", children: t("superpromptDescription") }),
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs8(
          "button",
          {
            onClick: handleDownloadMd,
            className: "flex items-center space-x-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-md font-semibold text-sm transition-colors",
            children: [
              /* @__PURE__ */ jsx8(Icon_default, { type: "md", className: "w-4 h-4" }),
              /* @__PURE__ */ jsx8("span", { children: t("downloadMD") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs8(
          "button",
          {
            onClick: handleDownloadHtml,
            className: "flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold text-sm transition-colors",
            children: [
              /* @__PURE__ */ jsx8(Icon_default, { type: "html", className: "w-4 h-4" }),
              /* @__PURE__ */ jsx8("span", { children: t("downloadHTML") })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "flex-grow w-full h-full min-h-0 p-4 overflow-auto", children: /* @__PURE__ */ jsx8("pre", { className: "whitespace-pre-wrap font-mono text-sm text-slate-200", children: markdownContent }) })
  ] });
};
var MockupViewer = ({ generatedMockup, isGeneratingMockup, onGenerateMockup, onDownload }) => {
  const { t } = useTranslation();
  if (isGeneratingMockup) {
    return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col items-center justify-center text-slate-400", children: [
      /* @__PURE__ */ jsx8(Icon_default, { type: "spinner", className: "w-12 h-12 text-sky-400" }),
      /* @__PURE__ */ jsx8("p", { className: "mt-4 text-lg", children: t("generatingMockup") })
    ] });
  }
  if (!generatedMockup) {
    return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col items-center justify-center text-center p-4", children: [
      /* @__PURE__ */ jsx8(Icon_default, { type: "mockup", className: "w-20 h-20 mb-4 text-slate-500" }),
      /* @__PURE__ */ jsx8("h3", { className: "text-xl font-semibold text-slate-300", children: t("generateUIMockup") }),
      /* @__PURE__ */ jsx8("p", { className: "text-slate-400 mt-2 max-w-md", children: t("generateUIMockupDescription") }),
      /* @__PURE__ */ jsxs8(
        "button",
        {
          onClick: onGenerateMockup,
          className: "mt-6 flex items-center justify-center space-x-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx8(Icon_default, { type: "analyze", className: "w-5 h-5" }),
            /* @__PURE__ */ jsx8("span", { children: t("generateMockup") })
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx8(HtmlViewer, { htmlContent: generatedMockup, onDownload });
};
var ManualModeViewer = ({ generatedManual, isGeneratingManual, onGenerateManual, onDownload }) => {
  const { t } = useTranslation();
  if (isGeneratingManual) {
    return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col items-center justify-center text-slate-400", children: [
      /* @__PURE__ */ jsx8(Icon_default, { type: "spinner", className: "w-12 h-12 text-sky-400" }),
      /* @__PURE__ */ jsx8("p", { className: "mt-4 text-lg", children: t("generatingManual") })
    ] });
  }
  if (!generatedManual) {
    return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col items-center justify-center text-center p-4", children: [
      /* @__PURE__ */ jsx8(Icon_default, { type: "manual", className: "w-20 h-20 mb-4 text-slate-500" }),
      /* @__PURE__ */ jsx8("h3", { className: "text-xl font-semibold text-slate-300", children: t("generateUserManual") }),
      /* @__PURE__ */ jsx8("p", { className: "text-slate-400 mt-2 max-w-md", children: t("userManualDescription") }),
      /* @__PURE__ */ jsxs8(
        "button",
        {
          onClick: onGenerateManual,
          className: "mt-6 flex items-center justify-center space-x-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx8(Icon_default, { type: "analyze", className: "w-5 h-5" }),
            /* @__PURE__ */ jsx8("span", { children: t("generateUserManual") })
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx8(ManualViewer, { manual: generatedManual, onDownload });
};
var createFileTreeFromContents = (projectName, contents) => {
  const rootName = projectName.replace(/[\s_]+/g, "-").toLowerCase() || "project";
  const root2 = { name: rootName, path: "", type: "directory", children: [] };
  Object.keys(contents).forEach((path) => {
    const pathParts = path.split("/").filter((p) => p);
    let currentNode = root2;
    pathParts.forEach((part, index) => {
      if (!currentNode.children) {
        currentNode.children = [];
      }
      if (index === pathParts.length - 1) {
        if (!currentNode.children.some((child) => child.name === part && child.type === "file")) {
          currentNode.children.push({ name: part, path, type: "file" });
        }
      } else {
        let dirNode = currentNode.children.find((child) => child.name === part && child.type === "directory");
        if (!dirNode) {
          const dirPath = path.substring(0, path.indexOf(part) + part.length);
          dirNode = { name: part, path: dirPath, type: "directory", children: [] };
          currentNode.children.push(dirNode);
        }
        currentNode = dirNode;
      }
    });
  });
  return root2;
};
var ScaffoldingViewer = ({ generatedScaffolding, isGeneratingScaffolding, onGenerateScaffolding, ideaPrompt }) => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState5(null);
  const fileTree = useMemo(() => {
    if (!generatedScaffolding) return null;
    const projectName = ideaPrompt.split(" ").slice(0, 5).join(" ");
    return createFileTreeFromContents(projectName, generatedScaffolding);
  }, [generatedScaffolding, ideaPrompt]);
  useEffect4(() => {
    if (fileTree && !selectedFile) {
      const findFirstFile = (node) => {
        if (node.type === "file") return node.path;
        if (node.children) {
          for (const child of [...node.children].sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => a.type === "directory" && b.type === "file" ? -1 : 1)) {
            const firstFile = findFirstFile(child);
            if (firstFile) return firstFile;
          }
        }
        return null;
      };
      setSelectedFile(findFirstFile(fileTree));
    }
    if (!fileTree) {
      setSelectedFile(null);
    }
  }, [fileTree]);
  const handleFileSelect = (path) => {
    if (generatedScaffolding && generatedScaffolding[path] !== void 0) {
      setSelectedFile(path);
    }
  };
  const handleDownloadZip = async () => {
    if (!generatedScaffolding || !fileTree) return;
    const zip = new JSZip();
    Object.entries(generatedScaffolding).forEach(([path, content]) => {
      zip.file(path, content);
    });
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileTree.name}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  if (isGeneratingScaffolding) {
    return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col items-center justify-center text-slate-400", children: [
      /* @__PURE__ */ jsx8(Icon_default, { type: "spinner", className: "w-12 h-12 text-sky-400" }),
      /* @__PURE__ */ jsx8("p", { className: "mt-4 text-lg", children: t("generatingScaffolding") })
    ] });
  }
  if (!generatedScaffolding || !fileTree) {
    return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col items-center justify-center text-center p-4", children: [
      /* @__PURE__ */ jsx8(Icon_default, { type: "scaffolding", className: "w-20 h-20 mb-4 text-slate-500" }),
      /* @__PURE__ */ jsx8("h3", { className: "text-xl font-semibold text-slate-300", children: t("generateScaffolding") }),
      /* @__PURE__ */ jsx8("p", { className: "text-slate-400 mt-2 max-w-md", children: t("scaffoldingDescription") }),
      /* @__PURE__ */ jsxs8(
        "button",
        {
          onClick: onGenerateScaffolding,
          className: "mt-6 flex items-center justify-center space-x-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx8(Icon_default, { type: "analyze", className: "w-5 h-5" }),
            /* @__PURE__ */ jsx8("span", { children: t("generateScaffolding") })
          ]
        }
      )
    ] });
  }
  const selectedFileContent = generatedScaffolding[selectedFile ?? ""] ?? null;
  return /* @__PURE__ */ jsxs8("div", { className: "h-full flex flex-col bg-slate-900 rounded-lg", children: [
    /* @__PURE__ */ jsx8("div", { className: "p-2 border-b border-slate-700 flex justify-end flex-shrink-0", children: /* @__PURE__ */ jsxs8(
      "button",
      {
        onClick: handleDownloadZip,
        className: "flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold text-sm transition-colors",
        children: [
          /* @__PURE__ */ jsx8(Icon_default, { type: "zip", className: "w-4 h-4" }),
          /* @__PURE__ */ jsx8("span", { children: t("downloadScaffoldingZip") })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs8("div", { className: "flex-grow w-full h-full min-h-0 grid grid-cols-12 gap-px bg-slate-700", children: [
      /* @__PURE__ */ jsx8("div", { className: "col-span-4 bg-slate-800/60 overflow-y-auto", children: /* @__PURE__ */ jsx8(FileExplorer_default, { fileTree, onFileClick: handleFileSelect }) }),
      /* @__PURE__ */ jsx8("div", { className: "col-span-8 bg-slate-900 flex flex-col", children: selectedFile ? /* @__PURE__ */ jsxs8(Fragment2, { children: [
        /* @__PURE__ */ jsxs8("div", { className: "p-2 border-b border-slate-700 flex items-center space-x-2 flex-shrink-0 bg-slate-800/80", children: [
          /* @__PURE__ */ jsx8(Icon_default, { type: getFileIconType(selectedFile), className: "w-5 h-5 flex-shrink-0 text-sky-400" }),
          /* @__PURE__ */ jsx8("span", { className: "text-sm font-mono text-slate-400", children: selectedFile })
        ] }),
        /* @__PURE__ */ jsx8("div", { className: "flex-grow overflow-auto relative", children: /* @__PURE__ */ jsx8("pre", { className: "p-4 text-xs font-mono text-slate-300 w-full h-full absolute inset-0", children: /* @__PURE__ */ jsx8("code", { children: selectedFileContent ?? `// ${t("emptyFile")}` }) }) })
      ] }) : /* @__PURE__ */ jsx8("div", { className: "flex items-center justify-center h-full text-slate-500", children: /* @__PURE__ */ jsx8("p", { children: t("selectFileToView") }) }) })
    ] })
  ] });
};
var IdeaArchitect_default = IdeaArchitect;

// services/geminiService.ts
import { GoogleGenAI } from "@google/genai";
var cleanAiResponse = (text) => {
  let cleanedText = text.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = cleanedText.match(fenceRegex);
  if (match && match[2]) {
    cleanedText = match[2].trim();
  }
  return cleanedText;
};
async function lmStudioChatCompletion(prompt, modelConfig, expectJson, temperature = 0.3) {
  const body = {
    model: modelConfig.lmStudioModel,
    messages: [{ role: "user", content: prompt }],
    temperature
  };
  if (expectJson) {
  }
  const response = await fetch(`${modelConfig.lmStudioBaseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LM Studio API Error: ${response.status} ${errorText}`);
  }
  const data = await response.json();
  if (!data.choices || data.choices.length === 0 || !data.choices[0].message?.content) {
    throw new Error("LM Studio returned an invalid or empty response.");
  }
  return data.choices[0].message.content;
}
async function openAiChatCompletion(prompt, modelConfig, expectJson, temperature = 0.3) {
  const body = {
    model: modelConfig.openAiModel,
    messages: [{ role: "user", content: prompt }],
    temperature
  };
  if (expectJson) {
    body.response_format = { type: "json_object" };
  }
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${modelConfig.openAiApiKey}`
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API Error: ${response.status} ${errorText}`);
  }
  const data = await response.json();
  if (!data.choices || data.choices.length === 0 || !data.choices[0].message?.content) {
    throw new Error("OpenAI returned an invalid or empty response.");
  }
  return data.choices[0].message.content;
}
var getDiagramInstructions = (diagramType, diagrammingLanguage) => {
  if (diagrammingLanguage === "plantuml") {
    switch (diagramType) {
      case "flowchart TD":
        return "Generate a PlantUML 'activity diagram' that illustrates the primary control flow, function calls, and logic paths. Use '@startuml' and '@enduml'.";
      case "sequenceDiagram":
        return "Generate a PlantUML 'sequence diagram' that shows the sequence of interactions between different components. Use '@startuml' and '@enduml'.";
      case "stateDiagram-v2":
        return "Generate a PlantUML 'state diagram' if the application has distinct states. Show the states and transitions. Use '@startuml' and '@enduml'.";
      case "classDiagram":
      default:
        return "Generate a PlantUML 'class diagram' that represents the main components, classes, and their relationships. Use '@startuml' and '@enduml'.";
    }
  } else {
    switch (diagramType) {
      case "flowchart TD":
        return "Generate a Mermaid 'flowchart TD' that illustrates the primary control flow, function calls, and logic paths within the code. Focus on showing how data or control moves through the system.";
      case "sequenceDiagram":
        return "Generate a Mermaid 'sequenceDiagram' that shows the sequence of interactions between different components or modules. Identify key function calls or events and represent them in chronological order.";
      case "stateDiagram-v2":
        return "Generate a Mermaid 'stateDiagram-v2' if the application has distinct states (e.g., loading, idle, error). Show the states and the transitions between them based on events or conditions in the code.";
      case "classDiagram":
      default:
        return "Generate a Mermaid 'classDiagram' that represents the main components, classes, modules, and their relationships (e.g., inheritance, composition). Focus on the static structure of the codebase.";
    }
  }
};
var getFileContentString = (files) => {
  return Object.entries(files).filter(([path, content]) => {
    const extension = path.split(".").pop()?.toLowerCase();
    const nonTextExtensions = ["png", "jpg", "jpeg", "gif", "webp", "ico", "eot", "ttf", "woff", "woff2", "svg"];
    return content.length > 0 && content.length < 15e3 && !nonTextExtensions.includes(extension || "");
  }).map(([path, content]) => `--- FILE: ${path} ---
\`\`\`
${content}
\`\`\``).join("\n\n");
};
var generatePromptForAnalysis = (files, diagramType, language, diagrammingLanguage) => {
  const fileContentString = getFileContentString(files);
  const langInstruction = language === "de" ? "German" : "English";
  const plantUMLRule = diagrammingLanguage === "plantuml" ? `6. PLANTUML-SPECIFIC RULE: Any participant (component, actor, etc.) with a name containing spaces or special characters MUST be enclosed in double quotes. Example: \`component "User Interface"\`. The name of a participant in a relationship must be an identifier that has been previously defined or is a quoted string. Do not use unquoted special characters like '*' as a participant.` : "";
  return `
You are an expert software architect called "Mermaid Architect AI".
Your task is to analyze the provided source code of a project and generate a ${diagrammingLanguage} diagram to visualize its architecture.
You must also provide a brief, one-paragraph explanation of the project's structure and the logic depicted in the diagram.

**CRITICAL LANGUAGE REQUIREMENT: The 'explanation' text MUST be written in ${langInstruction}.**

Analyze the following files:
${fileContentString}

RULES:
1. ${getDiagramInstructions(diagramType, diagrammingLanguage)}
2. Keep the diagram clear and concise. Focus on the most important architectural elements. Avoid excessive detail.
3. The ${diagrammingLanguage} code in the 'diagram' field MUST be syntactically correct and renderable. This is a critical requirement.
4. Your response MUST be a valid JSON object with the following structure: { "diagram": "...", "explanation": "..." }
5. Do not include the JSON in a markdown block or any other text. The response must be the raw JSON object.
${plantUMLRule}
`;
};
var analyzeProject = async (files, diagramType, language, diagrammingLanguage, modelConfig) => {
  const prompt = generatePromptForAnalysis(files, diagramType, language, diagrammingLanguage);
  try {
    let resultText;
    if (modelConfig.provider === "gemini") {
      const ai = new GoogleGenAI({ apiKey: modelConfig.geminiApiKey });
      const response = await ai.models.generateContent({
        model: modelConfig.geminiModel,
        contents: prompt,
        config: { responseMimeType: "application/json", temperature: 0.2 }
      });
      resultText = response.text;
    } else if (modelConfig.provider === "openai") {
      resultText = await openAiChatCompletion(prompt, modelConfig, true, 0.2);
    } else {
      resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.2);
    }
    const parsed = JSON.parse(cleanAiResponse(resultText));
    if (typeof parsed.diagram === "string" && typeof parsed.explanation === "string") {
      return parsed;
    } else {
      throw new Error("AI response is missing 'diagram' or 'explanation' fields.");
    }
  } catch (error) {
    console.error("Error analyzing project:", error);
    throw new Error(`Failed to analyze project with AI. ${error instanceof Error ? error.message : String(error)}`);
  }
};
var correctDiagramCode = async (faultyCode, errorMessage, diagrammingLanguage, modelConfig) => {
  const prompt = `
You are a world-class ${diagrammingLanguage} syntax correction expert.
The following ${diagrammingLanguage} code is syntactically incorrect and failed to render.
Your only task is to fix the syntax error and return a perfectly valid ${diagrammingLanguage} code block.

CRITICAL INSTRUCTIONS:
- Your output must ONLY be the raw, corrected ${diagrammingLanguage} code.
- Do NOT include any explanations, apologies, or markdown fences (like \`\`\`mermaid\`\`\`).
- Double-check your response to ensure it is 100% valid and will render correctly.

Error Message (this might be empty or unavailable for PlantUML, rely on the code):
${errorMessage}

Faulty ${diagrammingLanguage} Code:
${faultyCode}
`;
  try {
    let correctedCode;
    if (modelConfig.provider === "gemini") {
      const ai = new GoogleGenAI({ apiKey: modelConfig.geminiApiKey });
      const response = await ai.models.generateContent({
        model: modelConfig.geminiModel,
        contents: prompt,
        config: { temperature: 0 }
      });
      correctedCode = response.text;
    } else if (modelConfig.provider === "openai") {
      correctedCode = await openAiChatCompletion(prompt, modelConfig, false, 0);
    } else {
      correctedCode = await lmStudioChatCompletion(prompt, modelConfig, false, 0);
    }
    return cleanAiResponse(correctedCode);
  } catch (error) {
    console.error(`Error correcting ${diagrammingLanguage} code:`, error);
    throw new Error(`Failed to correct code with AI. ${error instanceof Error ? error.message : String(error)}`);
  }
};
var getDiagramEmbeddingInstructions = (diagrammingLanguage, diagramCode) => {
  if (diagrammingLanguage === "plantuml") {
    const encoded = plantumlEncoder.encode(diagramCode);
    const imageUrl = `https://www.plantuml.com/plantuml/svg/${encoded}`;
    return `To display the PlantUML diagram, embed it as an image using the following URL. The image should be displayed on a white background for better visibility.
Example:
<div class="flex justify-center my-4 p-4 bg-white rounded-lg shadow">
  <img src="${imageUrl}" alt="PlantUML Diagram" style="max-width: 100%; height: auto;">
</div>`;
  } else {
    return `To display the Mermaid diagram, ensure the Mermaid.js script is included in the HTML, then place the diagram code inside a <pre class="mermaid"> tag.
Example:
<div class="flex justify-center my-4 p-4 bg-gray-800 rounded-lg">
  <pre class="mermaid">${diagramCode}</pre>
</div>
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true, theme: 'dark' });
<\/script>`;
  }
};
var generateDocument = async (prompt, modelConfig) => {
  try {
    let htmlContent;
    if (modelConfig.provider === "gemini") {
      const ai = new GoogleGenAI({ apiKey: modelConfig.geminiApiKey });
      const response = await ai.models.generateContent({
        model: modelConfig.geminiModel,
        contents: prompt,
        config: { temperature: 0.4 }
      });
      htmlContent = response.text;
    } else if (modelConfig.provider === "openai") {
      htmlContent = await openAiChatCompletion(prompt, modelConfig, false, 0.4);
    } else {
      htmlContent = await lmStudioChatCompletion(prompt, modelConfig, false, 0.4);
    }
    return cleanAiResponse(htmlContent);
  } catch (error) {
    console.error("Error generating document:", error);
    throw new Error(`Failed to generate document with AI. ${error instanceof Error ? error.message : String(error)}`);
  }
};
var generateProjectDocumentation = async (files, diagramCode, explanation, language, diagrammingLanguage, modelConfig) => {
  const fileContentString = getFileContentString(files);
  const langInstruction = language === "de" ? "Die gesamte Antwort, einschlie\xDFlich aller Texte und Abschnitts\xFCberschriften, MUSS auf Deutsch sein." : "The entire response, including all text and section headers, MUST be in English.";
  const prompt = `
You are a senior software architect creating comprehensive project documentation.
Based on the provided project files, the architecture diagram code, and a summary, create a professional HTML documentation page.

**CRITICAL LANGUAGE INSTRUCTION: ${langInstruction}**

The output MUST be a single, complete HTML file.
The HTML should be modern, clean, and styled with Tailwind CSS classes (using a CDN link).
${diagrammingLanguage === "mermaid" ? "It must include a <script> tag for Mermaid.js to render the diagram." : ""}
The final HTML must be well-formed and ready to be saved as a .html file and viewed in a browser.

The documentation should be structured with the following sections (section titles must be localized into the target language):

1.  **Project Overview**: A detailed summary of the project's purpose and functionality. Use the provided analysis explanation as a starting point and expand on it.
2.  **Architecture Diagram**: Display the provided diagram. ${getDiagramEmbeddingInstructions(diagrammingLanguage, diagramCode)}
3.  **Component Breakdown**: A detailed description of the key files and components.
4.  **Key Dependencies**: List the main libraries and frameworks used.
5.  **Setup and Usage**: Provide clear instructions on how to use the application.

Here is the context:

**Project Analysis:**
${explanation}

**Project Files:**
${fileContentString}
`;
  return generateDocument(prompt, modelConfig);
};
var generateWhitepaper = async (files, diagramCode, explanation, language, diagrammingLanguage, modelConfig) => {
  const fileContentString = getFileContentString(files);
  const langInstruction = language === "de" ? "Das gesamte Whitepaper, einschlie\xDFlich aller Texte, Abschnitts\xFCberschriften und Fachbegriffe, MUSS auf Deutsch sein." : "The entire whitepaper, including all text, section headers, and technical terms, MUST be in English.";
  const prompt = `
You are a distinguished research scientist and technical writer authoring a scientific whitepaper.
Analyze the provided software project, its architecture diagram, and its summary to produce a formal whitepaper in HTML format.

**CRITICAL LANGUAGE INSTRUCTION: ${langInstruction}**

The output MUST be a single, complete HTML file.
The HTML should have a professional, academic style. Use embedded CSS for styling (within a <style> tag in the <head>).
${diagrammingLanguage === "mermaid" ? "It must include a <script> tag for Mermaid.js to render the diagram." : ""}
The final HTML must be well-formed and ready to be saved as a .html file and viewed in a browser.

The whitepaper must contain the following sections (section titles must be localized into the target language):

1.  **Abstract**: A concise summary.
2.  **1. Introduction**: Elaborate on the problem domain.
3.  **2. System Architecture**: Present the software's architecture. ${getDiagramEmbeddingInstructions(diagrammingLanguage, diagramCode)}
4.  **3. Core Technologies & Implementation**: Discuss the key technologies.
5.  **4. Results & Discussion**: Discuss the benefits.
6.  **5. Conclusion & Future Work**: Summarize and suggest future enhancements.

Here is the context:

**Project Analysis:**
${explanation}

**Project Files:**
${fileContentString}
`;
  return generateDocument(prompt, modelConfig);
};
var getDiagramEmbeddingPromptInstructions = (diagrammingLanguage) => {
  if (diagrammingLanguage === "plantuml") {
    return `When creating the 'documentation' and 'whitepaper' HTML, you MUST embed the generated PlantUML diagram as an image. Use a placeholder for the image source: \`src="PLANTUML_DIAGRAM_URL_PLACEHOLDER"\`. The client application will replace this placeholder with the correct URL. The image should have a white background and be responsive. Example: \`<div class="flex justify-center my-4 p-4 bg-white rounded-lg shadow"><img src="PLANTUML_DIAGRAM_URL_PLACEHOLDER" alt="PlantUML Diagram" style="max-width: 100%; height: auto;"></div>\``;
  } else {
    return `When creating the 'documentation' and 'whitepaper' HTML, you MUST embed the generated Mermaid diagram code inside a \`<pre class="mermaid">\` tag and include the Mermaid.js script in the HTML to render it. Example: \`<div class="flex justify-center my-4 p-4 bg-gray-800 rounded-lg"><pre class="mermaid">...\`</pre></div><script type="module">import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'; mermaid.initialize({ startOnLoad: true, theme: 'dark' });\`<\/script>\``;
  }
};
var generateArchitectureFromIdea = async (ideaPrompt, diagramType, language, diagrammingLanguage, modelConfig) => {
  const langInstruction = language === "de" ? "German" : "English";
  const diagramEmbeddingInstructions = getDiagramEmbeddingPromptInstructions(diagrammingLanguage);
  const plantUMLDiagramRule = diagrammingLanguage === "plantuml" ? `The diagram must follow strict PlantUML syntax. Any participant (component, actor, etc.) with a name containing spaces or special characters MUST be enclosed in double quotes (e.g., \`component "User Interface"\`). The name of a participant in a relationship must be an identifier that has been previously defined or is a quoted string. Do not use unquoted special characters like '*' as a participant.` : "";
  const prompt = `
You are a Principal Solutions Architect. Your task is to generate a comprehensive architectural plan for a software application based on a user's idea.

**CRITICAL: RESPONSE FORMAT**
Your entire response MUST be a single, valid JSON object. It must start with \`{\` and end with \`}\`. Do NOT include any other text, explanations, or markdown fences before or after the JSON object.

The JSON object must have the following structure and keys:
{
  "diagram": "string",
  "documentation": "string",
  "whitepaper": "string",
  "superprompt": "string"
}

**CRITICAL: JSON STRING VALIDATION**
This is the most important instruction. An invalid JSON response is a complete failure.
The string values for "documentation", "whitepaper", and "superprompt" will contain complex content like multi-line HTML and Markdown. You MUST ensure these strings are correctly escaped to produce a syntactically valid JSON object.
1.  Escape Double Quotes: All double quotes (") inside a string value must be escaped with a backslash (\\").
2.  Escape Backslashes: All backslashes (\\) inside a string value must be escaped with another backslash (\\\\).
3.  Replace Newlines: All newline characters inside a string value MUST be replaced with the two characters \`\\n\`.

**TASK DETAILS**
- The user's idea is: "${ideaPrompt}"
- All text content you generate (explanations, titles, etc.) MUST be in ${langInstruction}.
- Based on the user's idea, generate the content for the four required JSON keys:

1.  **diagram**: A ${diagrammingLanguage} diagram script for a '${diagramType}'. This diagram should visualize the high-level architecture, components, and user flow of the proposed application. The code must be syntactically perfect and renderable. ${plantUMLDiagramRule}
2.  **documentation**: A complete, single HTML file string intended for a technical audience (developers). This document should be styled with modern, clean Tailwind CSS classes using the official CDN script. The HTML MUST be well-formed and ready to be saved and opened in a browser. ${diagramEmbeddingInstructions}
3.  **whitepaper**: A complete, single HTML file string formatted as a professional whitepaper. This document should be styled with professional, academic-looking embedded CSS (in a <style> tag in the <head>). The HTML must be well-formed. ${diagramEmbeddingInstructions}
4.  **superprompt**: A comprehensive and detailed prompt in Markdown format, intended for a sophisticated coding AI. This prompt should synthesize all the information from the idea, the diagram, and the documentation. It must be a complete set of instructions to build the application. The prompt must include:
    *   A high-level project goal.
    *   A detailed list of user stories or features.
    *   The architectural plan derived from the diagram (include the ${diagrammingLanguage} diagram code in a code block).
    *   A breakdown of components, their responsibilities, and a complete file structure.
    *   **The recommended technical stack. CRITICAL:** If the user's idea specifies a programming language, framework, or technology you MUST use that stack. If not specified, choose a modern and appropriate stack for the project's requirements.
    *   Step-by-step instructions for the AI on how to generate the code, file by file. The instructions for each file must be explicit and contain or describe the literal code to be written.
    *   The output must be a well-structured Markdown document.
`;
  try {
    let resultText;
    if (modelConfig.provider === "gemini") {
      const ai = new GoogleGenAI({ apiKey: modelConfig.geminiApiKey });
      const response = await ai.models.generateContent({
        model: modelConfig.geminiModel,
        contents: prompt,
        config: { responseMimeType: "application/json", temperature: 0.5 }
      });
      resultText = response.text;
    } else if (modelConfig.provider === "openai") {
      resultText = await openAiChatCompletion(prompt, modelConfig, true, 0.5);
    } else {
      resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.5);
    }
    const parsed = JSON.parse(cleanAiResponse(resultText));
    if (typeof parsed.diagram === "string" && typeof parsed.documentation === "string" && typeof parsed.whitepaper === "string" && typeof parsed.superprompt === "string") {
      return parsed;
    } else {
      throw new Error("AI response is missing required fields.");
    }
  } catch (error) {
    console.error("Error generating architecture from idea:", error.message);
    throw new Error(`Failed to generate architecture with AI. ${error.message}`);
  }
};
var generateMockupFromSuperprompt = async (superprompt, language, modelConfig) => {
  const langInstruction = language === "de" ? "German" : "English";
  const prompt = `
You are a world-class UI/UX designer and frontend developer.
Your task is to create a single-page HTML mockup for a web application based on the provided "superprompt".

**CRITICAL INSTRUCTIONS:**
1.  **Output Format:** Your response MUST be a single, complete, and valid HTML file string. Do NOT include any explanations, apologies, or markdown fences. Just the raw HTML.
2.  **Styling:** Use Tailwind CSS for all styling. You MUST include the Tailwind CDN script in the <head> of the HTML: \`<script src="https://cdn.tailwindcss.com"><\/script>\`.
3.  **Content Language:** All visible text in the mockup (headings, buttons, labels, placeholder text, etc.) MUST be in ${langInstruction}.
4.  **Visual Design:** Create a modern, clean, and aesthetically pleasing layout. Use a consistent color scheme (e.g., a dark theme). The design should be responsive and user-friendly. Use placeholder icons where appropriate by referencing an icon library like Heroicons, which can be used via SVG copy-paste.
5.  **Functionality:** The mockup is for visual purposes only. No JavaScript functionality is required, but interactive elements should be present and styled correctly.
6.  **Interpretation:** Analyze the superprompt to understand the application's core features, UI components, and workflow. Translate these requirements into a visual design.

**Superprompt to Implement:**
---
${superprompt}
---
`;
  return generateDocument(prompt, modelConfig);
};
var generateScaffoldingFromSuperprompt = async (superprompt, language, modelConfig) => {
  const langInstruction = language === "de" ? "German" : "English";
  const prompt = `
You are an expert full-stack software engineer. Your task is to generate the complete, production-ready source code for an entire application based on the provided "superprompt".

**CRITICAL INSTRUCTIONS:**
1.  **Full Implementation:** You MUST write the complete, functional, and production-quality code for EVERY file described in the superprompt. Do NOT use placeholders, "TODO" comments, or incomplete snippets.
2.  **Output Format:** Your response MUST be a single, valid JSON object mapping file paths (string) to their full string content. Do NOT wrap it in markdown fences.
3.  **Adherence to Superprompt:** Strictly follow the architecture, file structure, component breakdown, and technical stack specified in the superprompt.
4.  **JSON String Escaping:** Ensure all string values in the JSON are properly escaped (e.g., newlines as \\n, quotes as \\").
5.  **Content Language:** Any user-facing text or comments in the generated code should be in ${langInstruction}.

**Superprompt to implement:**
---
${superprompt}
---
`;
  try {
    let resultText;
    if (modelConfig.provider === "gemini") {
      const ai = new GoogleGenAI({ apiKey: modelConfig.geminiApiKey });
      const response = await ai.models.generateContent({
        model: modelConfig.geminiModel,
        contents: prompt,
        config: { responseMimeType: "application/json", temperature: 0.3 }
      });
      resultText = response.text;
    } else if (modelConfig.provider === "openai") {
      resultText = await openAiChatCompletion(prompt, modelConfig, true, 0.3);
    } else {
      resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.3);
    }
    const parsedData = JSON.parse(cleanAiResponse(resultText));
    if (typeof parsedData !== "object" || parsedData === null || Array.isArray(parsedData)) {
      throw new Error("AI response was not a valid file contents object.");
    }
    return parsedData;
  } catch (e) {
    console.error("Failed to parse or validate scaffolding from AI response:", e.message);
    throw new Error("The AI returned an invalid or malformed scaffolding structure.");
  }
};
var getManualPrompt = (language, contextType, context) => {
  const langName = language === "de" ? "German" : "English";
  const schema = `{
  "title": "string",
  "introduction": "string",
  "sections": [
    {
      "title": "string",
      "content": "string"
    }
  ]
}`;
  const instructions = {
    de: {
      main: "Sie sind ein erfahrener technischer Redakteur. Ihre Aufgabe ist es, ein umfassendes Benutzerhandbuch f\xFCr eine Softwareanwendung zu erstellen.",
      input: contextType === "code" ? "Der Quellcode des Projekts wird als JSON-Objekt bereitgestellt, bei dem die Schl\xFCssel die Dateipfade und die Werte der entsprechende Dateiinhalt sind." : "Die Spezifikation des Projekts wird als detaillierter 'Superprompt' bereitgestellt.",
      goal: "Analysieren Sie die bereitgestellten Informationen, um den Zweck der Anwendung, ihre grafische Benutzeroberfl\xE4che (GUI), ihre Funktionen und die Interaktion eines nicht-technischen Benutzers damit zu verstehen.",
      output: `Erstellen Sie ein Benutzerhandbuch auf Deutsch. Die Antwort MUSS ein g\xFCltiges JSON-Objekt sein. Umschlie\xDFen Sie das JSON NICHT mit Markdown-Z\xE4unen wie \`\`\`json.`,
      schema_desc: "Das JSON-Objekt muss sich strikt an das folgende Schema halten:",
      structure_guide: `
- "title": Ein pr\xE4gnanter und beschreibender Titel f\xFCr das Benutzerhandbuch.
- "introduction": Eine kurze \xDCbersicht \xFCber den Zweck und die Hauptfunktionalit\xE4t der Anwendung. Erkl\xE4ren Sie in einfachen Worten, was die Software tut.
- "sections": Ein Array von Objekten, wobei jedes Objekt einen Abschnitt des Handbuchs darstellt.
  - "title": Der Titel des Abschnitts (z.B. "Installation", "Hauptfenster", "Wichtige Funktionen", "Fehlerbehebung").
  - "content": Eine detaillierte Beschreibung des Themas f\xFCr diesen Abschnitt, geschrieben f\xFCr einen Endbenutzer. Erkl\xE4ren Sie GUI-Elemente und deren Funktionen klar und verst\xE4ndlich.`
    },
    en: {
      main: "You are an expert technical writer. Your task is to generate a comprehensive user manual for a software application.",
      input: contextType === "code" ? "The project's source code is provided as a JSON object where keys are the file paths and values are the corresponding file content." : "The project's specification is provided as a detailed 'Superprompt'.",
      goal: "Analyze the provided information to understand the application's purpose, its Graphical User Interface (GUI), features, and how a non-technical user would interact with it.",
      output: `Generate a user manual in English. The response MUST be a valid JSON object. Do NOT wrap the JSON in markdown fences like \`\`\`json.`,
      schema_desc: `The JSON object must strictly adhere to the following schema:`,
      structure_guide: `
- "title": A concise and descriptive title for the user manual.
- "introduction": A brief overview of the application's purpose and main functionality. Explain what the software does in simple terms.
- "sections": An array of objects, where each object represents a section of the manual.
  - "title": The title of the section (e.g., "Installation", "Main Window", "Key Features", "Troubleshooting").
  - "content": A detailed description of the topic for that section, written for an end-user. Explain GUI elements and their functions clearly.`
    }
  };
  const selectedInstructions = instructions[language];
  return `
${selectedInstructions.main}
${selectedInstructions.input}
${selectedInstructions.goal}
${selectedInstructions.output}
${selectedInstructions.schema_desc}
\`\`\`json
${schema}
\`\`\`
${selectedInstructions.structure_guide}
---
HERE IS THE PROJECT CONTEXT:
---
${context}
`;
};
async function generateManual(prompt, modelConfig) {
  try {
    let resultText;
    if (modelConfig.provider === "gemini") {
      const ai = new GoogleGenAI({ apiKey: modelConfig.geminiApiKey });
      const response = await ai.models.generateContent({
        model: modelConfig.geminiModel,
        contents: prompt,
        config: { responseMimeType: "application/json", temperature: 0.3 }
      });
      resultText = response.text;
    } else if (modelConfig.provider === "openai") {
      resultText = await openAiChatCompletion(prompt, modelConfig, true, 0.3);
    } else {
      resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.3);
    }
    const parsedData = JSON.parse(cleanAiResponse(resultText));
    if (!parsedData.title || !parsedData.introduction || !Array.isArray(parsedData.sections)) {
      throw new Error("AI response is missing required fields (title, introduction, sections).");
    }
    return parsedData;
  } catch (e) {
    console.error("Failed to parse or validate manual from AI response:", e.message);
    throw new Error("The AI returned an invalid or malformed manual structure. Please try again.");
  }
}
var generateProjectManual = async (files, language, modelConfig) => {
  const projectContext = JSON.stringify(files, null, 2);
  const prompt = getManualPrompt(language, "code", projectContext);
  return generateManual(prompt, modelConfig);
};
var generateIdeaManual = async (superprompt, language, modelConfig) => {
  const prompt = getManualPrompt(language, "spec", superprompt);
  return generateManual(prompt, modelConfig);
};

// App.tsx
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var MAX_CORRECTION_ATTEMPTS = 3;
var defaultTheme = {
  background: "#1e293b",
  // slate-800
  primaryColor: "#0ea5e9",
  // sky-500
  secondaryColor: "#334155",
  // slate-700
  primaryTextColor: "#f1f5f9",
  // slate-100
  lineColor: "#64748b",
  // slate-500
  fontSize: 14
};
var ManualViewer2 = ({ manual, onDownload }) => {
  const { t } = useTranslation();
  const generateMarkdown = () => {
    let md = `# ${manual.title}

`;
    md += `_${manual.introduction}_

`;
    manual.sections.forEach((section) => {
      md += `## ${section.title}

`;
      md += `${section.content}

`;
    });
    return md;
  };
  const generateHtml = () => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${manual.title}</title>
`;
    html += `<script src="https://cdn.tailwindcss.com?plugins=typography"><\/script>
`;
    html += `<body class="bg-slate-900 text-slate-200 p-8">
<article class="prose prose-invert prose-slate max-w-4xl mx-auto prose-h1:text-cyan-400 prose-h2:text-teal-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
`;
    html += `<h1>${manual.title}</h1>
`;
    html += `<p class="lead">${manual.introduction}</p>
`;
    manual.sections.forEach((section) => {
      html += `<h2>${section.title}</h2>
<div>${section.content.replace(/\n/g, "<br />")}</div>
`;
    });
    html += "</article>\n</body>\n</html>";
    return html;
  };
  return /* @__PURE__ */ jsxs9("div", { className: "bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col", children: [
    /* @__PURE__ */ jsxs9("header", { className: "flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0", children: [
      /* @__PURE__ */ jsx9("h2", { className: "text-xl font-bold text-slate-100", children: manual.title }),
      /* @__PURE__ */ jsxs9("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs9("button", { onClick: () => onDownload(generateHtml(), "manual.html", "text/html"), className: "flex items-center gap-2 px-3 py-1.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors duration-300", children: [
          /* @__PURE__ */ jsx9(Icon_default, { type: "html", className: "w-5 h-5" }),
          /* @__PURE__ */ jsx9("span", { children: t("downloadHTML") })
        ] }),
        /* @__PURE__ */ jsxs9("button", { onClick: () => onDownload(generateMarkdown(), "manual.md", "text/markdown"), className: "flex items-center gap-2 px-3 py-1.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors duration-300", children: [
          /* @__PURE__ */ jsx9(Icon_default, { type: "md", className: "w-5 h-5" }),
          /* @__PURE__ */ jsx9("span", { children: t("downloadMD") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs9("main", { className: "p-6 overflow-y-auto prose prose-invert prose-slate max-w-none prose-h1:text-cyan-400 prose-h2:text-teal-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300", children: [
      /* @__PURE__ */ jsx9("p", { className: "lead !my-2 !text-lg !text-slate-400", children: manual.introduction }),
      manual.sections.map((section, index) => /* @__PURE__ */ jsxs9("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx9("h2", { children: section.title }),
        /* @__PURE__ */ jsx9("div", { className: "text-slate-300", dangerouslySetInnerHTML: { __html: section.content.replace(/\n/g, "<br />") } })
      ] }, index))
    ] })
  ] });
};
var MainApp = () => {
  const [isLoading, setIsLoading] = useState6(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState6(false);
  const [themeSettings, setThemeSettings] = useState6(defaultTheme);
  const [diagramType, setDiagramType] = useState6("classDiagram");
  const [diagrammingLanguage, setDiagrammingLanguage] = useState6("mermaid");
  const [themeRevision, setThemeRevision] = useState6(0);
  const { t, language } = useTranslation();
  const [appMode, setAppMode] = useState6("analyze");
  const [modelConfig, setModelConfig] = useState6({
    provider: "gemini",
    geminiApiKey: "",
    geminiModel: "gemini-2.5-flash",
    openAiApiKey: "",
    openAiModel: "gpt-4-turbo",
    lmStudioBaseUrl: "http://localhost:1234/v1",
    lmStudioModel: "local-model"
  });
  const [fileTree, setFileTree] = useState6(null);
  const [fileContents, setFileContents] = useState6(null);
  const [renderedDiagramCode, setRenderedDiagramCode] = useState6("");
  const [editableDiagramCode, setEditableDiagramCode] = useState6("");
  const [diagramError, setDiagramError] = useState6(null);
  const [analysisExplanation, setAnalysisExplanation] = useState6("");
  const [correctionAttempts, setCorrectionAttempts] = useState6(0);
  const [isGeneratingDocs, setIsGeneratingDocs] = useState6(false);
  const [isGeneratingWhitepaper, setIsGeneratingWhitepaper] = useState6(false);
  const [isGeneratingManual, setIsGeneratingManual] = useState6(false);
  const [isManualModalOpen, setIsManualModalOpen] = useState6(false);
  const [generatedManual, setGeneratedManual] = useState6(null);
  const [ideaPrompt, setIdeaPrompt] = useState6("");
  const [generatedDiagram, setGeneratedDiagram] = useState6("");
  const [editableGeneratedDiagram, setEditableGeneratedDiagram] = useState6("");
  const [generatedDocumentation, setGeneratedDocumentation] = useState6("");
  const [generatedWhitepaperContent, setGeneratedWhitepaperContent] = useState6("");
  const [generatedSuperprompt, setGeneratedSuperprompt] = useState6("");
  const [generatedMockup, setGeneratedMockup] = useState6("");
  const [isGeneratingMockup, setIsGeneratingMockup] = useState6(false);
  const [generatedScaffolding, setGeneratedScaffolding] = useState6(null);
  const [isGeneratingScaffolding, setIsGeneratingScaffolding] = useState6(false);
  useEffect5(() => {
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "base",
      themeVariables: {
        background: themeSettings.background,
        primaryColor: themeSettings.primaryColor,
        secondaryColor: themeSettings.secondaryColor,
        primaryTextColor: themeSettings.primaryTextColor,
        lineColor: themeSettings.lineColor,
        fontSize: `${themeSettings.fontSize}px`,
        nodeBorder: themeSettings.primaryColor,
        mainBkg: themeSettings.background,
        textColor: themeSettings.primaryTextColor
      }
    });
    setThemeRevision((rev) => rev + 1);
  }, [themeSettings]);
  const processZipFile = useCallback3(async (file) => {
    setIsLoading(true);
    setFileTree(null);
    setFileContents(null);
    setRenderedDiagramCode("");
    setEditableDiagramCode("");
    setDiagramError(null);
    setAnalysisExplanation("");
    setCorrectionAttempts(0);
    try {
      const zip = await JSZip.loadAsync(file);
      const root2 = { name: file.name.replace(".zip", ""), path: "", type: "directory", children: [] };
      const contents = {};
      const filePromises = [];
      zip.forEach((relativePath, zipEntry) => {
        if (!zipEntry.dir) {
          filePromises.push(
            zipEntry.async("string").then((content) => {
              contents[relativePath] = content;
              const pathParts = relativePath.split("/").filter((p) => p);
              let currentNode = root2;
              pathParts.forEach((part, index) => {
                if (index === pathParts.length - 1) {
                  currentNode.children?.push({ name: part, path: relativePath, type: "file" });
                } else {
                  let dirNode = currentNode.children?.find((child) => child.name === part && child.type === "directory");
                  if (!dirNode) {
                    dirNode = { name: part, path: relativePath.substring(0, relativePath.indexOf(part) + part.length), type: "directory", children: [] };
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
      setFileTree(root2);
      setFileContents(contents);
    } catch (e) {
      console.error("Error processing ZIP file:", e);
      alert(t("zipError"));
    } finally {
      setIsLoading(false);
    }
  }, [t]);
  const handleZipUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      processZipFile(file);
    }
    event.target.value = "";
  };
  const isModelConfigured = useCallback3(() => {
    if (modelConfig.provider === "gemini") {
      if (!modelConfig.geminiApiKey) {
        alert(t("apiKeyMissing"));
        return false;
      }
    } else if (modelConfig.provider === "openai") {
      if (!modelConfig.openAiApiKey) {
        alert(t("openAiApiKeyMissing"));
        return false;
      }
    } else if (modelConfig.provider === "lmstudio") {
      if (!modelConfig.lmStudioBaseUrl || !modelConfig.lmStudioModel) {
        alert(t("lmStudioNotConfigured"));
        return false;
      }
    }
    return true;
  }, [modelConfig, t]);
  const handleRenderError = useCallback3((errorMessage) => {
    setDiagramError(errorMessage);
  }, []);
  const downloadFile = (content, fileName, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleAnalyze = useCallback3(async () => {
    if (!fileContents) {
      alert(t("noFilesToAnalyze"));
      return;
    }
    if (!isModelConfigured()) return;
    setIsLoading(true);
    setDiagramError(null);
    setRenderedDiagramCode("");
    setEditableDiagramCode("");
    setAnalysisExplanation("");
    setCorrectionAttempts(0);
    try {
      const result = await analyzeProject(fileContents, diagramType, language, diagrammingLanguage, modelConfig);
      setAnalysisExplanation(result.explanation);
      setRenderedDiagramCode(result.diagram);
      setEditableDiagramCode(result.diagram);
    } catch (e) {
      console.error("Failed to analyze project:", e);
      setDiagramError(`${t("aiAnalysisFailed")}: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }, [fileContents, diagramType, language, diagrammingLanguage, t, modelConfig, isModelConfigured]);
  const handleCorrectError = useCallback3(async () => {
    if (!renderedDiagramCode || !diagramError || correctionAttempts >= MAX_CORRECTION_ATTEMPTS) return;
    if (!isModelConfigured()) return;
    setIsLoading(true);
    const attemptNumber = correctionAttempts + 1;
    setCorrectionAttempts(attemptNumber);
    try {
      const correctedCode = await correctDiagramCode(renderedDiagramCode, diagramError, diagrammingLanguage, modelConfig);
      setRenderedDiagramCode(correctedCode);
      setEditableDiagramCode(correctedCode);
      setAnalysisExplanation(t("aiCorrectionAttempt", { attempt: attemptNumber }));
      setDiagramError(null);
    } catch (e) {
      console.error(e);
      alert(`${t("aiCorrectionFailedAttempt", { attempt: attemptNumber })}: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }, [renderedDiagramCode, diagramError, correctionAttempts, t, diagrammingLanguage, modelConfig, isModelConfigured]);
  const handleManualRender = () => {
    setDiagramError(null);
    setCorrectionAttempts(0);
    setAnalysisExplanation(t("manualRenderExplanation"));
    setRenderedDiagramCode(editableDiagramCode);
  };
  const handleGenerateDocs = async () => {
    if (!fileContents || !renderedDiagramCode) return;
    if (!isModelConfigured()) return;
    setIsGeneratingDocs(true);
    try {
      const htmlContent = await generateProjectDocumentation(fileContents, renderedDiagramCode, analysisExplanation, language, diagrammingLanguage, modelConfig);
      downloadFile(htmlContent, "project-documentation.html", "text/html;charset=utf-8");
    } catch (e) {
      console.error("Failed to generate documentation:", e);
      alert(`${t("aiAnalysisFailed")}: ${e.message}`);
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
      downloadFile(htmlContent, "project-whitepaper.html", "text/html;charset=utf-8");
    } catch (e) {
      console.error("Failed to generate whitepaper:", e);
      alert(`${t("aiAnalysisFailed")}: ${e.message}`);
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
    } catch (e) {
      console.error("Failed to generate project manual:", e);
      alert(`${t("manualGenerationFailed")}: ${e.message}`);
    } finally {
      setIsGeneratingManual(false);
    }
  };
  const handleGenerateProjectMarkdown = () => {
    if (!fileContents) return;
    const generateProjectMarkdownContent = (files) => {
      let markdownContent = `# Project Code Dump

This document contains a dump of all the files from the uploaded project.

---

`;
      const getLanguageIdentifier = (fileName) => {
        const extension = fileName.split(".").pop()?.toLowerCase();
        switch (extension) {
          case "js":
          case "jsx":
            return "javascript";
          case "ts":
          case "tsx":
            return "typescript";
          case "py":
            return "python";
          case "java":
            return "java";
          case "cs":
            return "csharp";
          case "go":
            return "go";
          case "rb":
            return "ruby";
          case "php":
            return "php";
          case "html":
            return "html";
          case "css":
            return "css";
          case "scss":
            return "scss";
          case "less":
            return "less";
          case "json":
            return "json";
          case "xml":
            return "xml";
          case "sql":
            return "sql";
          case "sh":
            return "shell";
          case "md":
            return "markdown";
          default:
            return "";
        }
      };
      Object.entries(files).forEach(([path, content]) => {
        const lang = getLanguageIdentifier(path);
        markdownContent += `## \`${path}\`

`;
        markdownContent += `\`\`\`${lang}
`;
        markdownContent += `${content}
`;
        markdownContent += `\`\`\`

---

`;
      });
      return markdownContent;
    };
    const markdown = generateProjectMarkdownContent(fileContents);
    downloadFile(markdown, "project-contents.md", "text/markdown;charset=utf-8");
  };
  const handleGenerateIdeaManual = async () => {
    if (!generatedSuperprompt) return;
    if (!isModelConfigured()) return;
    setIsGeneratingManual(true);
    setGeneratedManual(null);
    try {
      const manual = await generateIdeaManual(generatedSuperprompt, language, modelConfig);
      setGeneratedManual(manual);
    } catch (e) {
      console.error("Failed to generate idea manual:", e);
      alert(`${t("manualGenerationFailed")}: ${e.message}`);
    } finally {
      setIsGeneratingManual(false);
    }
  };
  const handleGenerateFromIdea = async () => {
    if (!ideaPrompt) {
      alert(t("noIdeaToAnalyze"));
      return;
    }
    if (!isModelConfigured()) return;
    setIsLoading(true);
    setGeneratedDiagram("");
    setEditableGeneratedDiagram("");
    setGeneratedDocumentation("");
    setGeneratedWhitepaperContent("");
    setGeneratedSuperprompt("");
    setGeneratedMockup("");
    setGeneratedManual(null);
    setGeneratedScaffolding(null);
    try {
      const result = await generateArchitectureFromIdea(ideaPrompt, diagramType, language, diagrammingLanguage, modelConfig);
      let doc = result.documentation;
      let wp = result.whitepaper;
      if (diagrammingLanguage === "plantuml" && result.diagram) {
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
    } catch (e) {
      console.error("Failed to generate from idea:", e);
      alert(`${t("ideaGenerationFailed")}: ${e.message}`);
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
    } catch (e) {
      console.error("Failed to generate mockup:", e);
      alert(`${t("mockupGenerationFailed")}: ${e.message}`);
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
    } catch (e) {
      console.error("Failed to generate scaffolding:", e);
      alert(`${t("scaffoldingGenerationFailed")}: ${e.message}`);
    } finally {
      setIsGeneratingScaffolding(false);
    }
  };
  const handleGenerateRender = () => {
    setGeneratedDiagram(editableGeneratedDiagram);
  };
  const handleAppModeChange = (mode) => {
    setAppMode(mode);
    setFileTree(null);
    setFileContents(null);
    setRenderedDiagramCode("");
    setEditableDiagramCode("");
    setDiagramError(null);
    setAnalysisExplanation("");
    setCorrectionAttempts(0);
    setIdeaPrompt("");
    setGeneratedDiagram("");
    setEditableGeneratedDiagram("");
    setGeneratedDocumentation("");
    setGeneratedWhitepaperContent("");
    setGeneratedSuperprompt("");
    setGeneratedMockup("");
    setGeneratedManual(null);
    setGeneratedScaffolding(null);
    setIsLoading(false);
    setIsGeneratingMockup(false);
    setIsGeneratingManual(false);
    setIsGeneratingScaffolding(false);
  };
  const renderContent = () => {
    if (appMode === "generate") {
      return /* @__PURE__ */ jsx9(
        IdeaArchitect_default,
        {
          ideaPrompt,
          onIdeaPromptChange: setIdeaPrompt,
          onGenerate: handleGenerateFromIdea,
          isLoading: isLoading && appMode === "generate",
          diagram: generatedDiagram,
          editableDiagramCode: editableGeneratedDiagram,
          onEditableDiagramCodeChange: setEditableGeneratedDiagram,
          onRenderDiagram: handleGenerateRender,
          documentation: generatedDocumentation,
          whitepaper: generatedWhitepaperContent,
          generatedSuperprompt,
          themeRevision,
          downloadFile,
          diagrammingLanguage,
          generatedMockup,
          isGeneratingMockup,
          onGenerateMockup: handleGenerateMockup,
          generatedManual,
          isGeneratingManual,
          onGenerateManual: handleGenerateIdeaManual,
          generatedScaffolding,
          isGeneratingScaffolding,
          onGenerateScaffolding: handleGenerateScaffolding
        }
      );
    }
    return /* @__PURE__ */ jsxs9("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-4 h-full", children: [
      /* @__PURE__ */ jsx9("div", { className: "lg:col-span-3 h-full min-h-0", children: /* @__PURE__ */ jsx9(FileExplorer_default, { fileTree, onFileClick: () => {
      } }) }),
      /* @__PURE__ */ jsx9("div", { className: "lg:col-span-4 h-full min-h-0", children: /* @__PURE__ */ jsx9(
        MermaidEditor_default,
        {
          code: editableDiagramCode,
          onCodeChange: setEditableDiagramCode,
          onRender: handleManualRender,
          isLoading
        }
      ) }),
      /* @__PURE__ */ jsx9("div", { className: "lg:col-span-5 h-full min-h-0", children: /* @__PURE__ */ jsx9(
        DiagramViewer_default,
        {
          diagramCode: renderedDiagramCode,
          diagrammingLanguage,
          isLoading,
          error: diagramError,
          onFixError: handleCorrectError,
          analysisExplanation,
          onRenderError: handleRenderError,
          isCorrectionAllowed: correctionAttempts < MAX_CORRECTION_ATTEMPTS,
          onGenerateDocs: handleGenerateDocs,
          onGenerateWhitepaper: handleGenerateWhitepaper,
          onGenerateManual: handleGenerateProjectManual,
          isGeneratingDocs,
          isGeneratingWhitepaper,
          isGeneratingManual,
          onGenerateProjectMarkdown: handleGenerateProjectMarkdown,
          isProjectLoaded: !!fileTree
        },
        `${themeRevision}-${diagrammingLanguage}`
      ) })
    ] });
  };
  return /* @__PURE__ */ jsxs9("div", { className: "flex flex-col h-screen p-4 gap-4", children: [
    /* @__PURE__ */ jsx9(
      Header_default,
      {
        onZipUpload: handleZipUpload,
        onAnalyze: handleAnalyze,
        onSettingsToggle: () => setIsSettingsOpen(true),
        isProjectLoaded: !!fileTree,
        isLoading: isLoading && appMode === "analyze",
        appMode,
        onAppModeChange: handleAppModeChange
      }
    ),
    /* @__PURE__ */ jsx9("main", { className: "flex-grow min-h-0", children: renderContent() }),
    /* @__PURE__ */ jsx9(
      SettingsModal_default,
      {
        isOpen: isSettingsOpen,
        onClose: () => setIsSettingsOpen(false),
        themeSettings,
        onThemeChange: setThemeSettings,
        diagramType,
        onDiagramTypeChange: setDiagramType,
        diagrammingLanguage,
        onDiagrammingLanguageChange: setDiagrammingLanguage,
        modelConfig,
        onModelConfigChange: setModelConfig
      }
    ),
    isManualModalOpen && /* @__PURE__ */ jsx9(
      "div",
      {
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",
        onClick: () => setIsManualModalOpen(false),
        children: /* @__PURE__ */ jsxs9("div", { onClick: (e) => e.stopPropagation(), children: [
          isGeneratingManual && /* @__PURE__ */ jsxs9("div", { className: "flex flex-col items-center justify-center text-slate-400 bg-slate-800 p-12 rounded-lg", children: [
            /* @__PURE__ */ jsx9(Icon_default, { type: "spinner", className: "w-12 h-12 text-sky-400" }),
            /* @__PURE__ */ jsx9("p", { className: "mt-4 text-lg", children: t("generatingManual") })
          ] }),
          generatedManual && !isGeneratingManual && /* @__PURE__ */ jsx9(ManualViewer2, { manual: generatedManual, onDownload: downloadFile })
        ] })
      }
    )
  ] });
};
var App = () => /* @__PURE__ */ jsx9(I18nProvider, { children: /* @__PURE__ */ jsx9(MainApp, {}) });
var App_default = App;

// index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
var root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsx10(React8.StrictMode, { children: /* @__PURE__ */ jsx10(App_default, {}) })
);
//# sourceMappingURL=index.js.map
