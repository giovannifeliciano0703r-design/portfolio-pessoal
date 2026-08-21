import React from 'react';
import { WorldArea, Language } from '../types';
import { APP_COPY } from '../data/translations';
import { FERCAL_LETREIRO_IMAGE, FERCAL_PANORAMICA_IMAGE } from '../data/fercalImages';
import {
  X,
  ExternalLink,
  Compass,
  MapPin,
  Sparkles,
  Image as ImageIcon,
  GraduationCap,
  Award,
  Code2,
  Network,
  Terminal,
  Cpu,
  Gamepad2,
  Globe2,
  CheckCircle2,
  Clock3,
  BookOpenCheck
} from 'lucide-react';

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
  const copy = APP_COPY[language];
  const instagramUrl = 'https://www.instagram.com/p/C_1hzBcsTQv/';
  const isPt = language === 'pt';

  const certificates = [
    {
      title: copy.networkBasics,
      provider: 'Cisco Networking Academy',
      icon: <Network className="w-4 h-4 text-blue-600" />,
    },
    {
      title: copy.pythonBasics,
      provider: 'Cisco Networking Academy',
      icon: <Code2 className="w-4 h-4 text-emerald-600" />,
    },
  ];

  const completedCourses = [
    {
      title: copy.linuxCourse,
      provider: isPt ? 'Curso de Linux' : 'Linux Course',
      icon: <Terminal className="w-4 h-4 text-neutral-700" />,
    },
  ];

  const currentCourses = [
    {
      title: copy.microAi,
      provider: 'SENAI',
      icon: <Cpu className="w-4 h-4 text-amber-600" />,
    },
    {
      title: copy.python2,
      provider: 'Cisco Networking Academy',
      icon: <Code2 className="w-4 h-4 text-emerald-600" />,
    },
  ];

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
          aria-label={copy.closeCard}
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
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-medium">
                {(world.xStart / 1000).toFixed(1)} km {copy.milestone}
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold tracking-tight text-neutral-900">{world.name}</h3>
            <p className="text-xs font-mono text-neutral-500 mt-0.5">{world.role}</p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-6">
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans">{world.description}</p>
        </div>

        {world.key === 'moss' && (
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 flex items-center gap-1.5 font-bold">
                <ImageIcon className="w-4 h-4 text-emerald-700" />
                {copy.originPhotos}
              </span>
              <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap">{copy.twoPhotos}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.openFercalSign}
                title={copy.openInstagram}
                className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <div className="relative h-64 sm:h-72 bg-neutral-100 overflow-hidden">
                  <img
                    src={FERCAL_LETREIRO_IMAGE}
                    alt={copy.signAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 text-white px-2 py-1 rounded-full z-10 flex items-center gap-1.5">
                    {copy.citySign} • Instagram <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    {copy.fercalMonument}
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">{copy.fercalMonumentText}</p>
                </div>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.openFercalPanorama}
                title={copy.openInstagram}
                className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <div className="relative h-64 sm:h-72 bg-neutral-100 overflow-hidden">
                  <img
                    src={FERCAL_PANORAMICA_IMAGE}
                    alt={copy.panoramaAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 text-white px-2 py-1 rounded-full z-10 flex items-center gap-1.5">
                    {copy.aerialView} • Instagram <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    {copy.fercalPanorama}
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">{copy.fercalPanoramaText}</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {world.key === 'taupe' && (
          <div className="space-y-6 mb-6">
            <section>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-bold">
                  {isPt ? 'Cursos em andamento' : 'Courses in progress'}
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCourses.map((course) => (
                  <div key={course.title} className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-amber-300 transition-colors">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">{course.icon}<span className="text-[10px] font-mono text-neutral-500">{course.provider}</span></div>
                      <span className="text-[10px] font-mono bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <Clock3 className="w-3 h-3" /> {copy.inProgress}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-neutral-900">{course.title}</h5>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <BookOpenCheck className="w-4 h-4 text-neutral-700" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-bold">
                  {isPt ? 'Cursos concluídos' : 'Completed courses'}
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {completedCourses.map((course) => (
                  <div key={course.title} className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">{course.icon}<span className="text-[10px] font-mono text-neutral-500">{course.provider}</span></div>
                      <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {copy.completed}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-neutral-900">{course.title}</h5>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-emerald-700" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-bold">
                  {isPt ? 'Meus certificados' : 'My certificates'}
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((certificate) => (
                  <div key={certificate.title} className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-emerald-300 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      {certificate.icon}
                      <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {copy.completed}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-neutral-900">{certificate.title}</h5>
                    <p className="text-[11px] text-neutral-500 mt-1">{certificate.provider}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-blue-700" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-bold">
                  {isPt ? 'Projetos em desenvolvimento' : 'Projects in development'}
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-neutral-900 text-white border border-neutral-800 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-amber-300">
                    <Gamepad2 className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase font-bold">{copy.inProgress}</span>
                  </div>
                  <h5 className="text-base font-serif font-bold">{copy.rpgApp}</h5>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">{copy.rpgDescription}</p>
                </div>

                <a
                  href="https://github.com/giovannifeliciano0703r-design/Site-Senai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-white border border-neutral-200 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Globe2 className="w-4 h-4" />
                      <span className="text-[10px] font-mono uppercase font-bold">{copy.inProgress}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600" />
                  </div>
                  <h5 className="text-base font-serif font-bold text-neutral-900">{isPt ? 'Site SENAI' : 'SENAI Website'}</h5>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {isPt
                      ? 'Site moderno e responsivo para apresentar iniciativas, equipes, tecnologia, robótica e competições do SENAI.'
                      : 'Modern responsive website presenting SENAI initiatives, teams, technology, robotics and competitions.'}
                  </p>
                </a>
              </div>
            </section>
          </div>
        )}

        {world.key !== 'moss' && world.key !== 'taupe' && (
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-6">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{copy.stoppingPoint} • {copy.worldJourney}</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">{copy.stoppingPointText}</p>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>{world.name} • {(world.xStart / 1000).toFixed(1)} KM</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold font-mono tracking-wide transition-all shadow-sm cursor-pointer"
          >
            {copy.keepExploring}
          </button>
        </div>
      </div>
    </div>
  );
};
