import React, { useEffect, useRef } from 'react';
import { CharacterState } from '../types';

interface TravelerCharacterProps {
  state: CharacterState;
  currentColor: string;
}

export const TravelerCharacter: React.FC<TravelerCharacterProps> = ({ state, currentColor }) => {
  const characterRef = useRef<HTMLDivElement>(null);
  const isFlipped = state.direction === 'left';
  const walkPhase = state.frameIndex * 0.22;
  const strideStrength = state.isWalking ? Math.min(1, Math.abs(state.vx) / 440) : 0;
  const legOffset = Math.sin(walkPhase) * 9 * strideStrength;
  const armOffset = -Math.sin(walkPhase) * 8 * strideStrength;
  const bobbing = state.isWalking ? Math.abs(Math.sin(walkPhase * 2)) * 2.2 : 0;
  const jumpTilt = state.isJumping ? Math.max(-7, Math.min(7, state.vy / 90)) : 0;
  const targetY = state.y - bobbing;

  const motionRef = useRef({
    x: state.x,
    y: targetY,
    targetX: state.x,
    targetY,
    vx: state.vx,
    tilt: jumpTilt,
    targetTilt: jumpTilt,
    directionScale: isFlipped ? -1 : 1,
    snapshotAt: 0,
  });

  // O estado do jogo chega pelo React em intervalos curtos. Guardamos o último
  // snapshot e interpolamos visualmente a posição em cada frame para evitar
  // pequenos "saltos" perceptíveis no personagem, principalmente ao correr.
  useEffect(() => {
    const motion = motionRef.current;
    const now = performance.now();

    // Viagem rápida deve parecer instantânea, não uma corrida atravessando o mapa.
    if (Math.abs(state.x - motion.x) > 700) motion.x = state.x;
    if (Math.abs(targetY - motion.y) > 120) motion.y = targetY;

    motion.targetX = state.x;
    motion.targetY = targetY;
    motion.vx = state.vx;
    motion.targetTilt = jumpTilt;
    motion.directionScale = isFlipped ? -1 : 1;
    motion.snapshotAt = now;
  }, [state.x, state.vx, targetY, jumpTilt, isFlipped]);

  useEffect(() => {
    let animationFrameId = 0;
    let lastFrame = performance.now();
    motionRef.current.snapshotAt = lastFrame;

    const renderMotion = (now: number) => {
      const element = characterRef.current;
      const motion = motionRef.current;
      const dt = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;

      // Pequena previsão horizontal compensa o intervalo entre snapshots do React
      // sem deixar o sprite se afastar da física real do mundo.
      const timeSinceSnapshot = Math.min(0.022, Math.max(0, (now - motion.snapshotAt) / 1000));
      const predictedX = motion.targetX + motion.vx * timeSinceSnapshot;
      const horizontalFollow = 1 - Math.exp(-30 * dt);
      const verticalFollow = 1 - Math.exp(-36 * dt);
      const rotationFollow = 1 - Math.exp(-24 * dt);

      motion.x += (predictedX - motion.x) * horizontalFollow;
      motion.y += (motion.targetY - motion.y) * verticalFollow;
      motion.tilt += (motion.targetTilt - motion.tilt) * rotationFollow;

      if (element) {
        element.style.transform = `translate3d(${motion.x}px, ${motion.y}px, 0) scaleX(${motion.directionScale}) rotate(${motion.tilt}deg)`;
      }

      animationFrameId = requestAnimationFrame(renderMotion);
    };

    animationFrameId = requestAnimationFrame(renderMotion);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={characterRef}
      id="traveler-character-container"
      className={`relative select-none pointer-events-none will-change-transform traveler-motion ${state.isWalking ? 'traveler-walking' : 'traveler-idle'} ${state.isJumping ? 'traveler-jumping' : ''}`}
      style={{
        transform: `translate3d(${state.x}px, ${targetY}px, 0) scaleX(${isFlipped ? -1 : 1}) rotate(${jumpTilt}deg)`,
        width: '56px',
        height: '86px',
      }}
    >
      {/* Soft Ground Shadow underneath */}
      <div
        className="absolute -bottom-1 left-1/2 h-2.5 rounded-full bg-neutral-900/20 blur-[1.5px] traveler-shadow"
        style={{
          width: state.isJumping ? '28px' : '44px',
          opacity: state.isJumping ? 0.25 : 0.65,
        }}
      />

      {/* Walking Dust Puff Particles */}
      {state.isWalking && !state.isJumping && Math.abs(Math.sin(walkPhase * 2)) > 0.84 && (
        <div
          className="absolute bottom-1 -left-2 w-3 h-3 rounded-full bg-[#d0c6b8]/70 blur-[0.8px] animate-dustFade pointer-events-none"
          style={{ animationDuration: '0.42s' }}
        />
      )}

      <svg
        viewBox="0 0 60 90"
        className="w-full h-full drop-shadow-md overflow-visible traveler-body"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d3a37" />
            <stop offset="100%" stopColor="#242220" />
          </linearGradient>
          <linearGradient id="satchelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6e584a" />
            <stop offset="100%" stopColor="#48362b" />
          </linearGradient>
        </defs>

        {/* Backpack / Satchel with brass buckle */}
        <g className="traveler-satchel">
          <path
            d="M15 32 C10 32, 9 38, 9 46 C9 53, 12 57, 17 57 Z"
            fill="url(#satchelGrad)"
            stroke="#231b17"
            strokeWidth="1.5"
          />
          <path d="M14 35 Q 23 38 27 48" stroke="#231b17" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="46" r="1.5" fill="#facc15" />
        </g>

        {/* Back Arm */}
        <g className="traveler-limb" style={{ transformOrigin: '24px 34px', transform: `rotate(${armOffset * 1.55}deg)` }}>
          <path d="M24 34 L18 48 L13 58" stroke="#242220" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="13" cy="59" r="2.5" fill="#f5dfce" />
        </g>

        {/* Back Leg */}
        <g className="traveler-limb" style={{ transformOrigin: '25px 56px', transform: `rotate(${-legOffset * 1.7}deg)` }}>
          <path d="M25 56 L19 72 L17 86" stroke="#3a3734" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M15 86 L23 86 C24 86 24 88 23 89 L13 89 Z" fill="#1e1e1e" />
        </g>

        {/* Front Leg */}
        <g className="traveler-limb" style={{ transformOrigin: '27px 56px', transform: `rotate(${legOffset * 1.7}deg)` }}>
          <path d="M27 56 L32 72 L33 86" stroke="#3a3734" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M31 86 L40 86 C41 86 41 88 40 89 L29 89 Z" fill="#1e1e1e" />
        </g>

        {/* Torso */}
        <path
          d="M20 30 C20 28, 36 28, 36 30 L35 56 C35 58, 20 58, 20 56 Z"
          fill="url(#coatGrad)"
          stroke="#1e1e1e"
          strokeWidth="1.5"
        />

        {/* Scarf */}
        <path
          d="M20 28 Q 28 32 36 28 Q 33 34 26 35 Q 22 34 20 28"
          fill={currentColor}
          stroke="#1e1e1e"
          strokeWidth="1.2"
        />
        <path
          d="M22 34 Q 15 40 13 48"
          stroke={currentColor}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
          className="traveler-scarf"
        />

        {/* Head */}
        <circle cx="28" cy="20" r="8.5" fill="#f5dfce" stroke="#2b2826" strokeWidth="1.2" />
        <path d="M18 19 C18 11, 38 11, 38 19 C38 16, 32 12, 28 12 C24 12, 19 16, 18 19 Z" fill="#2b2826" />
        <path d="M18 19 Q 28 17 39 19 Q 42 20 40 22 Q 30 20 18 21 Z" fill="#3c3835" />
        <circle cx="33" cy="20" r="1.1" fill="#2b2826" />

        {/* Front Arm */}
        <g className="traveler-limb" style={{ transformOrigin: '28px 34px', transform: `rotate(${-armOffset * 1.55}deg)` }}>
          <path d="M28 34 L35 46 L38 56" stroke="#242220" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="39" cy="57" r="2.5" fill="#f5dfce" />

          {state.isActionActive && state.actionType === 'fish' && (
            <g>
              <line x1="39" y1="57" x2="69" y2="15" stroke="#8b5a2b" strokeWidth="2" strokeLinecap="round" />
              <path d="M69 15 Q 76 35 77 65" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" fill="none" />
              <circle cx="77" cy="65" r="1.5" fill="#e63946" />
            </g>
          )}

          {state.isActionActive && state.actionType === 'code' && (
            <g transform="translate(36, 45) scale(0.6)">
              <rect x="0" y="0" width="22" height="15" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <text x="3" y="10" fill="#38bdf8" fontSize="8" fontFamily="monospace">&gt;_</text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
