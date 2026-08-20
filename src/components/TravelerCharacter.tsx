import React from 'react';
import { CharacterState } from '../types';

interface TravelerCharacterProps {
  state: CharacterState;
  currentColor: string;
}

export const TravelerCharacter: React.FC<TravelerCharacterProps> = ({ state, currentColor }) => {
  const isFlipped = state.direction === 'left';
  const walkPhase = state.frameIndex * 0.35;
  const legOffset = state.isWalking ? Math.sin(walkPhase) * 11 : 0;
  const armOffset = state.isWalking ? -Math.sin(walkPhase) * 11 : 0;
  const bobbing = state.isWalking ? Math.abs(Math.sin(walkPhase)) * 3.5 : 0;
  const scarfWave = state.isWalking ? Math.sin(walkPhase * 1.5) * 6 : Math.sin(Date.now() * 0.003) * 2;

  return (
    <div
      id="traveler-character-container"
      className="relative select-none pointer-events-none will-change-transform"
      style={{
        transform: `translate3d(${state.x}px, ${state.y - bobbing}px, 0) scaleX(${isFlipped ? -1 : 1})`,
        width: '56px',
        height: '86px',
      }}
    >
      {/* Soft Ground Shadow underneath */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 rounded-full bg-neutral-900/20 blur-[1.5px] transition-all duration-150"
        style={{
          width: state.isJumping ? '28px' : '44px',
          transform: state.isJumping ? 'scale(0.6)' : 'scale(1)',
          opacity: state.isJumping ? 0.25 : 0.65,
        }}
      />

      {/* Walking Dust Puff Particles */}
      {state.isWalking && !state.isJumping && Math.abs(Math.sin(walkPhase)) > 0.8 && (
        <div
          className="absolute bottom-1 -left-2 w-3 h-3 rounded-full bg-[#d0c6b8]/70 blur-[0.8px] animate-dustFade pointer-events-none"
          style={{ animationDuration: '0.4s' }}
        />
      )}

      <svg
        viewBox="0 0 60 90"
        className="w-full h-full drop-shadow-md overflow-visible"
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
        <g>
          <path
            d="M15 32 C10 32, 9 38, 9 46 C9 53, 12 57, 17 57 Z"
            fill="url(#satchelGrad)"
            stroke="#231b17"
            strokeWidth="1.5"
          />
          {/* Satchel straps */}
          <path
            d="M14 35 Q 23 38 27 48"
            stroke="#231b17"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="46" r="1.5" fill="#facc15" />
        </g>

        {/* Back Arm */}
        <g style={{ transformOrigin: '24px 34px', transform: `rotate(${armOffset * 1.6}deg)` }}>
          <path
            d="M24 34 L18 48 L13 58"
            stroke="#242220"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Hand */}
          <circle cx="13" cy="59" r="2.5" fill="#f5dfce" />
        </g>

        {/* Back Leg */}
        <g style={{ transformOrigin: '25px 56px', transform: `rotate(${-legOffset * 2}deg)` }}>
          <path
            d="M25 56 L19 72 L17 86"
            stroke="#3a3734"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Shoe with sole accent */}
          <path
            d="M15 86 L23 86 C24 86 24 88 23 89 L13 89 Z"
            fill="#1e1e1e"
          />
        </g>

        {/* Front Leg */}
        <g style={{ transformOrigin: '27px 56px', transform: `rotate(${legOffset * 2}deg)` }}>
          <path
            d="M27 56 L32 72 L33 86"
            stroke="#3a3734"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Shoe with sole accent */}
          <path
            d="M31 86 L40 86 C41 86 41 88 40 89 L29 89 Z"
            fill="#1e1e1e"
          />
        </g>

        {/* Torso / Japanese Minimalist Coat */}
        <path
          d="M20 30 C20 28, 36 28, 36 30 L35 56 C35 58, 20 58, 20 56 Z"
          fill="url(#coatGrad)"
          stroke="#1e1e1e"
          strokeWidth="1.5"
        />

        {/* Scarf / Accent Collar tied in current world's signature accent */}
        <path
          d="M20 28 Q 28 32 36 28 Q 33 34 26 35 Q 22 34 20 28"
          fill={currentColor}
          stroke="#1e1e1e"
          strokeWidth="1.2"
        />
        {/* Scarf tails flowing in wind */}
        <path
          d={`M22 34 Q ${15 + scarfWave} 40 ${13 + scarfWave * 1.4} 48`}
          stroke={currentColor}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Head / Face Profile */}
        <circle cx="28" cy="20" r="8.5" fill="#f5dfce" stroke="#2b2826" strokeWidth="1.2" />
        
        {/* Hair / Traveler Cap */}
        <path
          d="M18 19 C18 11, 38 11, 38 19 C38 16, 32 12, 28 12 C24 12, 19 16, 18 19 Z"
          fill="#2b2826"
        />
        <path
          d="M18 19 Q 28 17 39 19 Q 42 20 40 22 Q 30 20 18 21 Z"
          fill="#3c3835"
        />

        {/* Eye dot & subtle smile */}
        <circle cx="33" cy="20" r="1.1" fill="#2b2826" />

        {/* Front Arm */}
        <g style={{ transformOrigin: '28px 34px', transform: `rotate(${-armOffset * 1.6}deg)` }}>
          <path
            d="M28 34 L35 46 L38 56"
            stroke="#242220"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Hand */}
          <circle cx="39" cy="57" r="2.5" fill="#f5dfce" />

          {/* Action Specific Equipment when active */}
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
