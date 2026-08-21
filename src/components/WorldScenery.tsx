import React, { useEffect, useMemo, useState } from 'react';
import { Bird, Bot, Coffee, Palette, Telescope, UserRound } from 'lucide-react';
import './worldEncounters.css';

const trees = [
  { x: 900, scale: 0.78 }, { x: 1650, scale: 1.05 }, { x: 2550, scale: 0.9 },
  { x: 4050, scale: 1.22 }, { x: 5350, scale: 0.94 }, { x: 5850, scale: 0.7 },
  { x: 11250, scale: 0.72 }, { x: 13450, scale: 0.82 }, { x: 17350, scale: 0.68 },
];

const rocks = [720, 1320, 3100, 4450, 5700, 8650, 10750, 13200, 15550, 17600];
const grasses = Array.from({ length: 42 }, (_, index) => 240 + index * 430 + ((index * 137) % 210));
const lanterns = [6750, 7200, 7900, 9300, 10100, 14250, 14950, 16050, 16800];

type EncounterIcon = 'bird' | 'student' | 'coffee' | 'watch' | 'maker' | 'robot';

type Encounter = {
  id: string;
  x: number;
  icon: EncounterIcon;
  zoneClass: string;
  label: { pt: string; en: string };
  message: { pt: string; en: string };
};

const encounters: Encounter[] = [
  {
    id: 'carcara',
    x: 4720,
    icon: 'bird',
    zoneClass: 'world-encounter-fercal world-encounter-animal',
    label: { pt: 'Carcará', en: 'Caracara' },
    message: {
      pt: 'Um carcará observa a trilha por alguns segundos e abre as asas quando você se aproxima.',
      en: 'A caracara watches the trail for a few seconds and spreads its wings as you approach.',
    },
  },
  {
    id: 'estudante',
    x: 7480,
    icon: 'student',
    zoneClass: 'world-encounter-tech world-encounter-npc',
    label: { pt: 'Estudante', en: 'Student' },
    message: {
      pt: '“Continue aprendendo um pouco todos os dias. Projetos pequenos também constroem grandes habilidades.”',
      en: '“Keep learning a little every day. Small projects build big skills too.”',
    },
  },
  {
    id: 'cafe',
    x: 9910,
    icon: 'coffee',
    zoneClass: 'world-encounter-cafe world-encounter-npc',
    label: { pt: 'Pausa', en: 'Break' },
    message: {
      pt: 'Uma pausa rápida na jornada: respire, observe o cenário e siga quando estiver pronto.',
      en: 'A quick break in the journey: breathe, enjoy the scenery, and continue when you are ready.',
    },
  },
  {
    id: 'mirante',
    x: 12480,
    icon: 'watch',
    zoneClass: 'world-encounter-watch world-encounter-npc',
    label: { pt: 'Mirante', en: 'Lookout' },
    message: {
      pt: 'Do alto do mirante, os marcos já percorridos parecem parte de uma única história em construção.',
      en: 'From the lookout, the milestones already crossed feel like one story still being built.',
    },
  },
  {
    id: 'maker',
    x: 14630,
    icon: 'maker',
    zoneClass: 'world-encounter-atelier world-encounter-npc',
    label: { pt: 'Maker', en: 'Maker' },
    message: {
      pt: '“Ideias ficam melhores quando saem do papel. Teste, erre, ajuste e transforme em projeto.”',
      en: '“Ideas get better when they leave the page. Test, fail, adjust, and turn them into a project.”',
    },
  },
  {
    id: 'robo',
    x: 16560,
    icon: 'robot',
    zoneClass: 'world-encounter-final world-encounter-robot',
    label: { pt: 'Companheiro', en: 'Companion' },
    message: {
      pt: 'O pequeno robô acende as luzes e sinaliza que o fim da trilha está próximo — mas a jornada continua.',
      en: 'The small robot lights up and signals that the trail is almost over — but the journey continues.',
    },
  },
];

const EncounterGlyph: React.FC<{ icon: EncounterIcon }> = ({ icon }) => {
  if (icon === 'bird') return <Bird aria-hidden="true" />;
  if (icon === 'student') return <UserRound aria-hidden="true" />;
  if (icon === 'coffee') return <Coffee aria-hidden="true" />;
  if (icon === 'watch') return <Telescope aria-hidden="true" />;
  if (icon === 'maker') return <Palette aria-hidden="true" />;
  return <Bot aria-hidden="true" />;
};

export const WorldScenery: React.FC = React.memo(() => {
  const [activeEncounter, setActiveEncounter] = useState<string | null>(null);
  const [language, setLanguage] = useState<'pt' | 'en'>(() =>
    document.documentElement.lang.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  );

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(document.documentElement.lang.toLowerCase().startsWith('pt') ? 'pt' : 'en');
    };

    const observer = new MutationObserver(updateLanguage);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    updateLanguage();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeEncounter) return;
    const timer = window.setTimeout(() => setActiveEncounter(null), 4800);
    return () => window.clearTimeout(timer);
  }, [activeEncounter]);

  const localizedEncounters = useMemo(
    () => encounters.map((encounter) => ({
      ...encounter,
      localizedLabel: encounter.label[language],
      localizedMessage: encounter.message[language],
    })),
    [language]
  );

  return (
    <div className="absolute inset-0 pointer-events-none scenery-layer">
      <div aria-hidden="true">
        <div className="absolute left-0 right-0 bottom-[82px] h-[96px] scenery-ground-wash" />

        {trees.map((tree, index) => (
          <div
            key={`tree-${tree.x}`}
            className={`scenery-tree scenery-tree-${(index % 3) + 1}`}
            style={{ left: `${tree.x}px`, transform: `scale(${tree.scale})` }}
          >
            <span className="scenery-tree-trunk" />
            <span className="scenery-tree-crown scenery-tree-crown-a" />
            <span className="scenery-tree-crown scenery-tree-crown-b" />
            <span className="scenery-tree-crown scenery-tree-crown-c" />
          </div>
        ))}

        {rocks.map((x, index) => (
          <span
            key={`rock-${x}`}
            className={`scenery-rock scenery-rock-${(index % 3) + 1}`}
            style={{ left: `${x}px` }}
          />
        ))}

        {grasses.map((x, index) => (
          <span
            key={`grass-${x}`}
            className={`scenery-grass ${index % 4 === 0 ? 'scenery-grass-tall' : ''}`}
            style={{ left: `${x}px`, animationDelay: `${-(index % 9) * 0.45}s` }}
          />
        ))}

        {lanterns.map((x, index) => (
          <div key={`lantern-${x}`} className="scenery-lantern" style={{ left: `${x}px` }}>
            <span className="scenery-lantern-post" />
            <span className="scenery-lantern-head">
              <span className="scenery-lantern-light" style={{ animationDelay: `${-index * 0.4}s` }} />
            </span>
          </div>
        ))}

        {/* Fercal: vegetação do cerrado, pedras e relevo calcário. */}
        <div className="scenery-zone scenery-fercal" style={{ left: '3500px' }}>
          <div className="scenery-limestone limestone-a" />
          <div className="scenery-limestone limestone-b" />
          <div className="scenery-shrub shrub-a" />
          <div className="scenery-shrub shrub-b" />
          <span className="scenery-butterfly butterfly-a" />
          <span className="scenery-butterfly butterfly-b" />
        </div>

        {/* Marco 7.4: pequenos elementos tecnológicos sem quebrar o estilo artesanal. */}
        <div className="scenery-zone scenery-tech" style={{ left: '6450px' }}>
          <div className="scenery-solar-panel"><span /><span /><span /></div>
          <div className="scenery-signal-tower">
            <span className="signal-pulse signal-pulse-a" />
            <span className="signal-pulse signal-pulse-b" />
          </div>
          <div className="scenery-cable-light cable-light-a" />
          <div className="scenery-cable-light cable-light-b" />
        </div>

        {/* Marco 9.9: atmosfera de café e descanso. */}
        <div className="scenery-zone scenery-cafe" style={{ left: '9000px' }}>
          <div className="scenery-string-lights">
            {Array.from({ length: 9 }, (_, index) => <span key={index} style={{ animationDelay: `${-index * 0.28}s` }} />)}
          </div>
          <div className="scenery-bench"><span /><span /></div>
          <div className="scenery-steam steam-a" />
          <div className="scenery-steam steam-b" />
        </div>

        {/* Marco 12.4: bandeiras e mirante. */}
        <div className="scenery-zone scenery-watch" style={{ left: '11500px' }}>
          <div className="scenery-banner banner-a" />
          <div className="scenery-banner banner-b" />
          <div className="scenery-wind-lines wind-line-a" />
          <div className="scenery-wind-lines wind-line-b" />
        </div>

        {/* Marco 14.6: atelier acolhedor. */}
        <div className="scenery-zone scenery-atelier" style={{ left: '13950px' }}>
          <div className="scenery-clothesline">
            <span /><span /><span /><span />
          </div>
          <div className="scenery-potted-plant plant-a" />
          <div className="scenery-potted-plant plant-b" />
        </div>

        {/* Marco 16.4: final mais contemplativo e iluminado. */}
        <div className="scenery-zone scenery-final" style={{ left: '15700px' }}>
          <div className="scenery-wayfinder"><span /><span /></div>
          <span className="scenery-star-glint glint-a" />
          <span className="scenery-star-glint glint-b" />
          <span className="scenery-star-glint glint-c" />
        </div>
      </div>

      {/* Encontros leves: funcionam com mouse, teclado e toque sem alterar a física da jornada. */}
      {localizedEncounters.map((encounter, index) => {
        const isActive = activeEncounter === encounter.id;
        return (
          <button
            key={encounter.id}
            type="button"
            className={`world-encounter ${encounter.zoneClass} ${isActive ? 'is-active' : ''}`}
            style={{ left: `${encounter.x}px`, animationDelay: `${-(index % 4) * 0.8}s` }}
            onClick={() => setActiveEncounter((current) => current === encounter.id ? null : encounter.id)}
            aria-expanded={isActive}
            aria-label={`${encounter.localizedLabel}: ${encounter.localizedMessage}`}
          >
            <EncounterGlyph icon={encounter.icon} />
            <span className="world-encounter-badge" aria-hidden="true">+</span>
            <span className="world-encounter-label" aria-hidden="true">{encounter.localizedLabel}</span>

            {isActive && (
              <>
                <span className="world-encounter-sparks" aria-hidden="true"><span /><span /><span /></span>
                <span className="world-encounter-bubble" role="status">{encounter.localizedMessage}</span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
});

WorldScenery.displayName = 'WorldScenery';