import React from 'react';

const trees = [
  { x: 900, scale: 0.78 }, { x: 1650, scale: 1.05 }, { x: 2550, scale: 0.9 },
  { x: 4050, scale: 1.22 }, { x: 5350, scale: 0.94 }, { x: 5850, scale: 0.7 },
  { x: 11250, scale: 0.72 }, { x: 13450, scale: 0.82 }, { x: 17350, scale: 0.68 },
];

const rocks = [720, 1320, 3100, 4450, 5700, 8650, 10750, 13200, 15550, 17600];
const grasses = Array.from({ length: 42 }, (_, index) => 240 + index * 430 + ((index * 137) % 210));
const lanterns = [6750, 7200, 7900, 9300, 10100, 14250, 14950, 16050, 16800];

export const WorldScenery: React.FC = React.memo(() => {
  return (
    <div className="absolute inset-0 pointer-events-none scenery-layer" aria-hidden="true">
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
  );
});

WorldScenery.displayName = 'WorldScenery';