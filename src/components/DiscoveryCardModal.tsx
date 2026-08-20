import React, { useState } from 'react';
import { WorldArea, Language } from '../types';
import { UI_STRINGS } from '../data/portfolioData';
import { X, ExternalLink, Compass, MapPin, Sparkles, Image as ImageIcon } from 'lucide-react';

interface DiscoveryCardModalProps {
  world: WorldArea | null;
  language: Language;
  onClose: () => void;
  onJumpToAtlasSection: (worldKey: string) => void;
}

export const DiscoveryCardModal: React.FC<DiscoveryCardModalProps> = ({
  world,
  language,
  onClose,
  onJumpToAtlasSection,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<'letreiro' | 'panoramica' | null>(null);

  if (!world) return null;
  const t = UI_STRINGS[language];

  return (
    <div
      id="discovery-card-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="discovery-card-modal"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] border border-neutral-300/80 rounded-3xl shadow-2xl p-6 sm:p-8 text-[#242424] transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div
          className="absolute top-0 left-0 right-0 h-2.5 rounded-t-3xl"
          style={{ backgroundColor: world.color }}
        />

        {/* Close Button */}
        <button
          id="close-discovery-card"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-200/60 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          aria-label="Close card"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-13 h-13 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
            style={{ backgroundColor: world.color }}
          >
            <Compass className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
                {world.label}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-medium">
                {Math.round(world.xStart / 1000)}km marco
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold tracking-tight text-neutral-900">
              {world.name}
            </h3>
            <p className="text-xs font-mono text-neutral-500 mt-0.5">
              {world.role}
            </p>
          </div>
        </div>

        {/* User's Authentic Personal Narrative */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-6">
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans">
            "{world.description}"
          </p>
        </div>

        {/* Photo Gallery & Landmarks for Fercal */}
        {world.key === 'moss' ? (
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 flex items-center gap-1.5 font-bold">
                <ImageIcon className="w-4 h-4 text-emerald-700" />
                Fotografias de Origem • Fercal, Distrito Federal
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                2 fotos da cidade
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Photo 1: Monumento EU ❤️ FERCAL */}
              <div
                onClick={() => setSelectedPhoto('letreiro')}
                className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                {/* Visual Representation of Letreiro */}
                <div className="relative h-44 bg-gradient-to-b from-[#70b2f5] via-[#a3cdf8] to-[#40916c] overflow-hidden flex flex-col justify-end p-4">
                  {/* Sky & Tree Silhouettes */}
                  <div className="absolute top-2 left-3 text-white/40 text-xs font-serif italic">
                    Céu do Distrito Federal
                  </div>
                  {/* Trees */}
                  <div className="absolute -top-4 -right-6 w-32 h-32 rounded-full bg-[#2d6a4f]/80 blur-xs" />
                  <div className="absolute top-4 right-14 w-20 h-20 rounded-full bg-[#40916c]/80 blur-xs" />
                  <div className="absolute top-2 left-8 w-24 h-24 rounded-full bg-[#1b4332]/70 blur-xs" />

                  {/* Grass Slope */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#52b788] rounded-t-[30%]" />

                  {/* 3D "EU ❤️ FERCAL" Monument */}
                  <div className="relative z-10 flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur-xs py-2 px-3 rounded-xl border border-neutral-200 shadow-lg">
                    <span className="font-extrabold text-neutral-900 tracking-wider text-base font-sans">EU</span>
                    <span className="text-red-600 text-lg animate-pulse">❤️</span>
                    <span className="font-extrabold text-neutral-900 tracking-widest text-base font-sans">FERCAL</span>
                  </div>

                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/60 text-white px-2 py-0.5 rounded-full z-10">
                    Monumento da Cidade
                  </span>
                </div>

                <div className="p-3.5">
                  <h4 className="text-sm font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors">
                    Monumento "Eu ❤️ Fercal"
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                    Letreiro emblemático localizado na entrada da Fercal, cercado pela vegetação e a tranquilidade da natureza.
                  </p>
                  <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-medium">
                      #Fercal
                    </span>
                    <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      #DistritoFederal
                    </span>
                    <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      #Natureza
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo 2: Vista Aérea Noturna / Relevo */}
              <div
                onClick={() => setSelectedPhoto('panoramica')}
                className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                {/* Visual Representation of Vista Panorâmica */}
                <div className="relative h-44 bg-gradient-to-b from-[#1a202c] via-[#2d3748] to-[#1e293b] overflow-hidden flex flex-col justify-end p-4">
                  {/* Sunset glow / Horizon lights */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-amber-500/20 to-transparent" />
                  
                  {/* Mountain silhouettes */}
                  <div className="absolute bottom-10 -left-10 w-48 h-32 rounded-full bg-[#1b4332]/60 blur-xs" />
                  <div className="absolute bottom-8 -right-10 w-52 h-36 rounded-full bg-[#0f281e]/80 blur-xs" />
                  
                  {/* Lit Highway / Town Lights */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-24 bg-amber-400/30 blur-xs" />
                  
                  {/* Hillside Inscription */}
                  <div className="relative z-10 bg-black/75 backdrop-blur-xs p-2 rounded-xl border border-amber-500/40 text-center shadow-lg">
                    <div className="text-[11px] font-mono font-bold text-amber-300 tracking-wider">
                      FERCAL RA XXXI
                    </div>
                    <div className="text-[9px] font-mono text-neutral-300">
                      CAPITAL DO CALCÁRIO
                    </div>
                  </div>

                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/70 text-white px-2 py-0.5 rounded-full z-10">
                    Vista Aérea
                  </span>
                </div>

                <div className="p-3.5">
                  <h4 className="text-sm font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors">
                    Vista Panorâmica da Fercal
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                    Visão aérea das colinas, do relevo característico da região e da iluminação urbana ao entardecer.
                  </p>
                  <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
                    <span className="text-[10px] font-mono bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md font-medium">
                      #RA_XXXI
                    </span>
                    <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      #Sobradinho
                    </span>
                    <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      #Geografia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Standard World Articles for other milestones */
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Notas de Campo &amp; Publicações
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
              {world.articles.slice(0, 2).map((art, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-neutral-200/80 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs font-medium text-neutral-900 mb-1">
                      {art.title}
                    </h4>
                    {art.excerpt && (
                      <p className="text-[11px] text-neutral-500 font-serif italic">
                        {art.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-mono mt-2 pt-2 border-t border-neutral-100">
                    {art.tags?.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Marco {world.name} • 4.8 KM</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold font-mono tracking-wide transition-all shadow-sm cursor-pointer"
          >
            Continuar Explorando
          </button>
        </div>
      </div>
    </div>
  );
};
