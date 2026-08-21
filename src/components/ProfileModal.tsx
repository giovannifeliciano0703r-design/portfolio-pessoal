import React from 'react';
import { Language } from '../types';
import { APP_COPY } from '../data/translations';
import { X, BookOpen, MapPin, Sparkles } from 'lucide-react';

interface ProfileModalProps {
  language: Language;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ language, onClose }) => {
  const copy = APP_COPY[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn selection:bg-amber-200 selection:text-black">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] border border-neutral-300 rounded-3xl shadow-2xl p-6 sm:p-8 text-[#242424]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
          aria-label={copy.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold">
              {copy.profileEyebrow}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 leading-tight">
            Giovanni Feliciano de Jesus
          </h2>
          <p className="text-xs font-mono text-neutral-600 mt-1 flex flex-wrap items-center gap-2">
            <span>{copy.age}</span>
            <span>•</span>
            <span className="text-amber-800 font-medium">{copy.role}</span>
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-800 font-bold">
              {copy.biographyTitle}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans">
            {copy.bio1}
          </p>
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans mt-3">
            {copy.bio2}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-6 flex items-start gap-3">
          <MapPin className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {language === 'pt'
              ? 'Cursos, certificados e projetos foram organizados no Marco 7.4 km para manter o início da jornada focado na minha história e origem.'
              : 'Courses, certificates and projects are organized at the 7.4 km Milestone, keeping the beginning of the journey focused on my story and origins.'}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{copy.learningDaily}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-100 text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            {copy.close}
          </button>
        </div>
      </div>
    </div>
  );
};
