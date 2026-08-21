import React from 'react';

const ambientMotes = Array.from({ length: 14 }, (_, index) => ({
  id: `mote-${index}`,
  left: `${5 + ((index * 17) % 92)}%`,
  top: `${18 + ((index * 29) % 66)}%`,
  delay: `${(index % 7) * -0.9}s`,
  duration: `${6 + (index % 5) * 1.25}s`,
}));

const driftingLeaves = Array.from({ length: 7 }, (_, index) => ({
  id: `leaf-${index}`,
  left: `${8 + ((index * 23) % 88)}%`,
  delay: `${-2.4 * index}s`,
  duration: `${12 + (index % 4) * 3}s`,
  scale: 0.65 + (index % 3) * 0.16,
}));

const groundFireflies = Array.from({ length: 8 }, (_, index) => ({
  id: `firefly-${index}`,
  left: `${4 + ((index * 19) % 92)}%`,
  delay: `${-1.7 * index}s`,
  duration: `${4.6 + (index % 4) * 1.1}s`,
}));

/**
 * Camada puramente visual para dar mais vida ao cenário sem interferir
 * na física, nos cliques ou na navegação do portfólio.
 */
export const AmbientLife: React.FC = React.memo(() => {
  return (
    <div
      className="fixed inset-0 z-20 pointer-events-none overflow-hidden ambient-life"
      aria-hidden="true"
    >
      {/* Iluminação e profundidade atmosférica discretas */}
      <div className="absolute inset-0 ambient-vignette" />
      <div className="ambient-sun-glow" />
      <div className="ambient-horizon-haze" />

      {/* Nuvens lentas em profundidades diferentes */}
      <div className="ambient-cloud ambient-cloud-a" />
      <div className="ambient-cloud ambient-cloud-b" />
      <div className="ambient-cloud ambient-cloud-c" />

      {/* Pequenos pássaros ao longe */}
      <div className="ambient-birds ambient-birds-a">
        <span>⌁</span><span>⌁</span><span>⌁</span>
      </div>
      <div className="ambient-birds ambient-birds-b">
        <span>⌁</span><span>⌁</span>
      </div>

      {/* Folhas leves cruzando o primeiro plano de vez em quando */}
      {driftingLeaves.map((leaf) => (
        <span
          key={leaf.id}
          className="ambient-leaf"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            ['--leaf-scale' as string]: leaf.scale,
          }}
        />
      ))}

      {/* Partículas discretas que simulam poeira/luz no ar */}
      {ambientMotes.map((mote) => (
        <span
          key={mote.id}
          className="ambient-mote"
          style={{
            left: mote.left,
            top: mote.top,
            animationDelay: mote.delay,
            animationDuration: mote.duration,
          }}
        />
      ))}

      {/* Pontos de luz próximos ao solo dão sensação de profundidade e movimento */}
      {groundFireflies.map((firefly) => (
        <span
          key={firefly.id}
          className="ambient-firefly"
          style={{
            left: firefly.left,
            animationDelay: firefly.delay,
            animationDuration: firefly.duration,
          }}
        />
      ))}
    </div>
  );
});

AmbientLife.displayName = 'AmbientLife';
