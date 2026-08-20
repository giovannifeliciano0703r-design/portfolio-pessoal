import React from 'react';
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
              {/* Foto 1 — sem filtros de blur e com área maior para facilitar a visualização */}
              <div className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col">
                <div className="relative h-64 sm:h-72 bg-gradient-to-b from-[#70b2f5] via-[#a3cdf8] to-[#40916c] overflow-hidden flex flex-col justify-end p-4">
                  <div className="absolute top-3 left-3 text-white/90 text-xs font-serif italic">Céu do Distrito Federal</div>
                  <div className="absolute -top-5 -right-5 w-36 h-36 rounded-full bg-[#2d6a4f]/90" />
                  <div className="absolute top-6 right-16 w-24 h-24 rounded-full bg-[#40916c]/90" />
                  <div className="absolute top-4 left-10 w-28 h-28 rounded-full bg-[#1b4332]/85" />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#52b788] rounded-t-[30%]" />
                  <div className="relative z-10 flex items-center justify-center gap-2 bg-white/95 py-3 px-4 rounded-xl border border-neutral-200 shadow-xl">
                    <span className="font-extrabold text-neutral-900 tracking-wider text-xl">EU</span>
                    <span className="text-red-600 text-2xl">❤️</span>
                    <span className="font-extrabold text-neutral-900 tracking-widest text-xl">FERCAL</span>
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/75 text-white px-2 py-1 rounded-full z-10">Monumento da Cidade</span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-neutral-900">Monumento "Eu ❤️ Fercal"</h4>
                  <p className="text-xs text-neutral-600 mt-1">Letreiro emblemático localizado na entrada da Fercal.</p>
                </div>
              </div>

              {/* Foto 2 — link para a publicação do Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir a segunda foto da Fercal no Instagram"
                title="Abrir esta foto no Instagram"
                className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <div className="relative h-64 sm:h-72 bg-gradient-to-b from-[#101827] via-[#283548] to-[#17231d] overflow-hidden flex flex-col justify-end p-4">
                  {/* Paisagem em alta definição visual: removidos blur-xs e backdrop-blur-xs que deixavam a imagem artificialmente embaçada. */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-amber-500/25 to-transparent" />
                  <div className="absolute bottom-12 -left-12 w-56 h-36 rounded-[45%] bg-[#183d2b]" />
                  <div className="absolute bottom-10 -right-12 w-60 h-40 rounded-[45%] bg-[#0d2118]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-28 bg-amber-300/75" />
                  <div className="absolute bottom-7 left-[18%] w-2 h-2 rounded-full bg-amber-300" />
                  <div className="absolute bottom-10 left-[28%] w-1.5 h-1.5 rounded-full bg-amber-200" />
                  <div className="absolute bottom-8 right-[20%] w-2 h-2 rounded-full bg-amber-300" />
                  <div className="absolute bottom-12 right-[31%] w-1.5 h-1.5 rounded-full bg-amber-200" />

                  <div className="relative z-10 bg-black/85 p-3 rounded-xl border border-amber-400/60 text-center shadow-xl">
                    <div className="text-xs font-mono font-bold text-amber-200 tracking-wider">FERCAL RA XXXI</div>
                    <div className="text-[10px] font-mono text-neutral-100 mt-1">CAPITAL DO CALCÁRIO</div>
                  </div>

                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/85 text-white px-2 py-1 rounded-full z-10 flex items-center gap-1.5">
                    Vista Aérea • Instagram <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    Vista Panorâmica da Fercal
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">Clique para abrir a publicação original e ver a foto com a qualidade disponível no Instagram.</p>
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
