import React from 'react';
import { WorldArea, Language } from '../types';
import { UI_STRINGS } from '../data/portfolioData';
import { FERCAL_LETREIRO_IMAGE, FERCAL_PANORAMICA_IMAGE } from '../data/fercalImages';
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
}) => {
  if (!world) return null;
  UI_STRINGS[language];

  const instagramUrl = 'https://www.instagram.com/p/C_1hzBcsTQv/';

  return (
    <div
      id="discovery-card-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="discovery-card-modal"
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#faf8f5] border border-neutral-300/80 rounded-3xl shadow-2xl p-5 sm:p-8 text-[#242424]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-2.5 rounded-t-3xl" style={{ backgroundColor: world.color }} />

        <button
          id="close-discovery-card"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-200/70 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          aria-label="Fechar cartão"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4 mb-5 pr-10">
          <div className="w-13 h-13 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md" style={{ backgroundColor: world.color }}>
            <Compass className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">{world.label}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-medium">{Math.round(world.xStart / 1000)} km marco</span>
            </div>
            <h3 className="text-2xl font-serif font-bold tracking-tight text-neutral-900">{world.name}</h3>
            <p className="text-xs font-mono text-neutral-500 mt-0.5">{world.role}</p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-6">
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans">"{world.description}"</p>
        </div>

        {world.key === 'moss' ? (
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 flex items-center gap-1.5 font-bold">
                <ImageIcon className="w-4 h-4 text-emerald-700" />
                Fotografias de Origem • Fercal, Distrito Federal
              </span>
              <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap">2 fotos</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir a foto do letreiro da Fercal no Instagram"
                title="Abrir esta foto no Instagram"
                className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <div className="relative h-64 sm:h-72 bg-neutral-100 overflow-hidden">
                  <img
                    src={FERCAL_LETREIRO_IMAGE}
                    alt="Letreiro Eu amo Fercal em meio ao verde da cidade"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 text-white px-2 py-1 rounded-full z-10 flex items-center gap-1.5">
                    Letreiro da Cidade • Instagram <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    Monumento "Eu ❤️ Fercal"
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">Foto original do letreiro da Fercal. Clique para abrir a publicação no Instagram.</p>
                </div>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir a vista panorâmica da Fercal no Instagram"
                title="Abrir esta foto no Instagram"
                className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <div className="relative h-64 sm:h-72 bg-neutral-100 overflow-hidden">
                  <img
                    src={FERCAL_PANORAMICA_IMAGE}
                    alt="Vista aérea panorâmica da Fercal com relevo, cidade e área de mineração"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 text-white px-2 py-1 rounded-full z-10 flex items-center gap-1.5">
                    Vista Aérea • Instagram <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    Vista Panorâmica da Fercal
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">Vista aérea da Fercal. Clique para abrir a publicação original no Instagram.</p>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-6">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Ponto de Parada • Jornada do Mundo</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">Você alcançou este marco ao longo da caminhada. Siga em frente pelo percurso para descobrir os próximos trechos e monumentos.</p>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>{world.name} • {(world.xStart / 1000).toFixed(1)} KM</span>
          </div>
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold font-mono tracking-wide transition-all shadow-sm cursor-pointer">Continuar Explorando</button>
        </div>
      </div>
    </div>
  );
};
