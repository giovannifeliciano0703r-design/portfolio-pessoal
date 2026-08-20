import React from 'react';
import { Language } from '../types';
import {
  X,
  Award,
  BookOpen,
  Gamepad2,
  Cpu,
  GraduationCap,
  Sparkles,
  Terminal,
  Network,
  Code2,
  Calendar
} from 'lucide-react';

interface ProfileModalProps {
  language: Language;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  language,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn selection:bg-amber-200 selection:text-black">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] border border-neutral-300 rounded-3xl shadow-2xl p-6 sm:p-8 text-[#242424]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Eyebrow & Name */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold">
              {language === 'pt' ? 'PERFIL DO DESENVOLVEDOR' : language === 'ja' ? '開発者プロフィール' : 'DEVELOPER PROFILE'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 leading-tight">
            Giovanni Feliciano de Jesus
          </h2>
          <p className="text-xs font-mono text-neutral-600 mt-1 flex items-center gap-2">
            <span>19 anos</span>
            <span>•</span>
            <span className="text-amber-800 font-medium">
              {language === 'pt' ? 'Estudante de Tecnologia & Desenvolvedor' : 'Technology Student & Developer'}
            </span>
          </p>
        </div>

        {/* Main Biography Box */}
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-800 font-bold">
              {language === 'pt' ? 'Biografia' : language === 'ja' ? '自己紹介' : 'Biography'}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans">
            Meu nome é <strong>Giovanni Feliciano de Jesus</strong>, tenho 19 anos e estou dando os primeiros passos na área de Tecnologia da Informação. Embora ainda seja iniciante, já construí uma base sólida com certificações em <strong>Rede Básico</strong> e <strong>Python Básico</strong> pela <strong>Cisco</strong>, e atualmente curso <strong>Operador de Micro com IA</strong> pelo <strong>SENAI</strong>.
          </p>
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans mt-3">
            Meu foco é me especializar em programação — atualmente estou desenvolvendo um <strong>aplicativo de RPG</strong>, meu primeiro projeto prático nessa jornada. Acredito que todo profissional de tecnologia começou de algum lugar, e é com essa mentalidade que sigo aprendendo todos os dias, buscando transformar interesse em conhecimento sólido e conhecimento em resultados reais.
          </p>
        </div>

        {/* Certifications & Education Grid */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-600 font-bold mb-3 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-neutral-700" />
            <span>{language === 'pt' ? 'Formação & Certificações' : 'Certifications & Education'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Cisco Redes */}
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-amber-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <Network className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-bold">Cisco</span>
              </div>
              <h4 className="text-xs font-bold text-neutral-900 mb-1">
                Rede Básico
              </h4>
              <p className="text-[11px] text-neutral-500 font-sans">
                Cisco Networking Academy
              </p>
            </div>

            {/* Cisco Python */}
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-amber-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-bold">Cisco</span>
              </div>
              <h4 className="text-xs font-bold text-neutral-900 mb-1">
                Python Básico
              </h4>
              <p className="text-[11px] text-neutral-500 font-sans">
                Cisco Networking Academy
              </p>
            </div>

            {/* SENAI IA */}
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-amber-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <Cpu className="w-4 h-4 text-amber-600" />
                <span className="text-[10px] font-mono bg-amber-50 text-amber-900 px-2 py-0.5 rounded font-bold">SENAI</span>
              </div>
              <h4 className="text-xs font-bold text-neutral-900 mb-1">
                Operador de Micro com IA
              </h4>
              <p className="text-[11px] text-amber-700 font-sans font-medium">
                Em andamento
              </p>
            </div>
          </div>
        </div>

        {/* Current Project Spotlight: RPG App */}
        <div className="p-5 rounded-2xl bg-neutral-900 text-white shadow-md mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                {language === 'pt' ? 'PROJETO PRÁTICO EM DESENVOLVIMENTO' : 'FEATURED PROJECT IN PROGRESS'}
              </span>
            </div>
            <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">
              v0.1 / Em Criação
            </span>
          </div>

          <h4 className="text-lg font-serif font-bold text-white mb-2">
            Aplicativo de RPG
          </h4>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            Primeiro projeto prático de programação focado na criação de um sistema interativo de RPG, integrando lógica de atributos, mecânicas de jogo, progressão de personagens e experiência imersiva.
          </p>

          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-neutral-800 text-[10px] font-mono text-neutral-400">
            <span className="px-2 py-0.5 rounded bg-neutral-800">Python / Lógica</span>
            <span className="px-2 py-0.5 rounded bg-neutral-800">Game Design</span>
            <span className="px-2 py-0.5 rounded bg-neutral-800">Sistemas de RPG</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Construindo conhecimento todos os dias</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-100 text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            {language === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
