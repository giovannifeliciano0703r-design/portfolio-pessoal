import React, { useState } from 'react';
import { Project, Language } from '../types';
import { UI_STRINGS } from '../data/portfolioData';
import { APP_COPY } from '../data/translations';
import { X, Copy, Check, ExternalLink, Terminal, ShieldCheck, Code, Cpu } from 'lucide-react';

interface ProjectDetailsModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  language,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  if (!project) return null;
  const t = UI_STRINGS[language];
  const copy = APP_COPY[language];

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="project-details-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-details-modal"
        className="relative w-full max-w-2xl bg-[#faf8f5] border border-neutral-300 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#242424] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-project-details"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-200/70 text-neutral-500 hover:text-neutral-900 transition-colors"
          aria-label={copy.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-3.5 mb-4 pr-10">
          <div className="w-12 h-12 rounded-xl bg-neutral-900 text-amber-300 flex items-center justify-center shrink-0 shadow-sm">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-mono font-bold text-neutral-500 bg-neutral-200 px-2 py-0.5 rounded">
                {project.version}
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                {project.license} {copy.license}
              </span>
            </div>
            <h3 className="text-2xl font-mono font-bold tracking-tight text-neutral-900">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-sm font-sans text-neutral-600 mb-5 leading-relaxed">
          {project.tagline}
        </p>

        {project.installCommand && (
          <div className="mb-6 bg-neutral-900 text-neutral-100 p-3.5 rounded-xl font-mono text-xs flex items-center justify-between border border-neutral-800 shadow-inner">
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-amber-400 select-none">$</span>
              <code className="text-neutral-200">{project.installCommand}</code>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(project.installCommand!)}
              className="ml-3 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[11px] flex items-center gap-1.5 shrink-0 transition-colors"
              title={copy.copyClipboard}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t.copied : t.copyCommand}</span>
            </button>
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            {copy.projectArchitecture}
          </h4>
          <p className="text-sm text-neutral-800 leading-relaxed bg-white/70 p-4 rounded-xl border border-neutral-200/80">
            {project.fullOverview}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5" />
            {copy.projectCapabilities}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.highlightFeatures.map((feat, idx) => (
              <li
                key={idx}
                className="text-xs text-neutral-700 bg-white/60 p-2.5 rounded-lg border border-neutral-200/60 flex items-start gap-2"
              >
                <span className="text-amber-600 font-bold">▪</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl border border-neutral-200 text-center">
                <span className="block text-base sm:text-lg font-mono font-bold text-neutral-900">
                  {m.value}
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.languages.map((lang, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-200/80 text-neutral-700"
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span>{copy.githubRepository}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {project.pypiUrl && (
              <a
                href={project.pypiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#3775a9] hover:bg-[#2b5d88] text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>{copy.pypiPackage}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 text-xs font-medium transition-colors"
          >
            {copy.close}
          </button>
        </div>
      </div>
    </div>
  );
};
