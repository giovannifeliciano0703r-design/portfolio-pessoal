import React from 'react';

/**
 * Camada puramente visual para dar mais vida ao cenário sem interferir
 * na física, nos cliques ou na navegação do portfólio.
 */
export const AmbientLife: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-20 pointer-events-none overflow-hidden ambient-life"
      aria-hidden="true"
    >
      {/* Luz atmosférica muito suave para manter o estilo original */}
      <div className="absolute inset-0 ambient-vignette" />

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

      {/* Partículas discretas que simulam poeira/luz no ar */}
      {Array.from({ length: 14 }).map((_, index) => (
        <span
          key={index}
          className="ambient-mote"
          style={{
            left: `${5 + ((index * 17) % 92)}%`,
            top: `${18 + ((index * 29) % 66)}%`,
            animationDelay: `${(index % 7) * -0.9}s`,
            animationDuration: `${6 + (index % 5) * 1.25}s`,
          }}
        />
      ))}
    </div>
  );
};
