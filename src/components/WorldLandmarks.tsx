import React from 'react';
import { WorldArea, Language } from '../types';
import { APP_COPY } from '../data/translations';

interface WorldLandmarksProps {
  worlds: WorldArea[];
  activeWorld: WorldArea | null;
  language: Language;
  onExplore: (world: WorldArea) => void;
  onJumpToAct2: () => void;
  onOpenProfile?: () => void;
}

export const WorldLandmarks: React.FC<WorldLandmarksProps> = ({
  worlds,
  activeWorld,
  language,
  onExplore,
  onJumpToAct2,
  onOpenProfile,
}) => {
  const copy = APP_COPY[language];

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ width: '19000px', height: '100%' }}>
      {/* Background Distant Mountain Silhouettes */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[600px] opacity-25"
        viewBox="0 0 19000 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0 450 Q 1500 200 3000 420 Q 5000 150 7000 380 Q 9500 180 12000 430 Q 14500 160 17000 400 L 19000 450 L 19000 600 L 0 600 Z"
          fill="#c5beb3"
        />
        <path
          d="M0 490 Q 2000 320 4000 500 Q 6500 310 9000 480 Q 11500 330 14000 490 Q 16500 340 19000 510 L 19000 600 L 0 600 Z"
          fill="#aba194"
        />
      </svg>

      {/* Origin Milestone */}
      <div
        className="absolute bottom-[110px] left-[600px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => onOpenProfile?.()}
        id="landmark-origin"
      >
        <div className="bg-white/95 backdrop-blur-md border border-neutral-300 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-neutral-700 shadow-sm flex items-center gap-2 mb-3 group-hover:scale-105 group-hover:border-amber-400 transition-all">
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
          <span>{copy.origin.toUpperCase()} / GIOVANNI.FJ</span>
          <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">{copy.biography}</span>
        </div>
        <svg width="120" height="180" viewBox="0 0 120 180" className="group-hover:scale-105 transition-transform duration-200">
          <rect x="35" y="40" width="50" height="130" rx="4" fill="#52504c" stroke="#363431" strokeWidth="2" />
          <text x="60" y="80" fill="#dedbd2" fontSize="10" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.5">GIOVANNI</text>
          <text x="60" y="100" fill="#dedbd2" fontSize="9" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">ATLAS</text>
          <line x1="45" y1="115" x2="75" y2="115" stroke="#dedbd2" strokeWidth="1" opacity="0.6" />
          <text x="60" y="135" fill="#a8a29e" fontSize="8" fontFamily="monospace" textAnchor="middle">0.0 KM</text>
        </svg>
      </div>

      {/* World 1: Fercal */}
      <div
        className="absolute bottom-[110px] left-[4800px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => onExplore(worlds[0])}
        id="landmark-moss"
      >
        <div className="mb-4 transition-transform group-hover:scale-105 duration-200">
          <div className="bg-white/95 border border-[#2d6a4f]/40 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-serif font-medium text-[#1b4332]">
            <span className="w-2 h-2 rounded-full bg-[#2d6a4f] animate-ping" />
            <span>{worlds[0]?.name}</span>
            <span className="text-[10px] text-neutral-400 font-mono">4.8km</span>
          </div>
        </div>

        <svg width="290" height="230" viewBox="0 0 290 230" className="overflow-visible">
          <path d="M10 185 Q 90 120 180 160 Q 240 135 285 185 Z" fill="#40916c" opacity="0.85" />
          <path d="M50 185 Q 140 100 230 185 Z" fill="#52b788" opacity="0.6" />
          <g transform="translate(30, 75)">
            <rect x="14" y="60" width="8" height="50" fill="#5c4033" rx="1" />
            <circle cx="18" cy="45" r="28" fill="#2d6a4f" />
            <circle cx="28" cy="35" r="22" fill="#40916c" />
            <circle cx="8" cy="38" r="20" fill="#1b4332" />
          </g>
          <g transform="translate(215, 60)">
            <rect x="16" y="70" width="7" height="55" fill="#5c4033" rx="1" />
            <circle cx="20" cy="55" r="26" fill="#2d6a4f" />
            <circle cx="30" cy="45" r="20" fill="#52b788" />
          </g>
          <rect x="40" y="160" width="200" height="14" rx="4" fill="#d8f3dc" stroke="#95d5b2" strokeWidth="1.5" />
          <rect x="45" y="174" width="190" height="6" fill="#74c69d" />
          <rect x="52" y="132" width="22" height="28" rx="2" fill="#ffffff" stroke="#2d6a4f" strokeWidth="1.5" />
          <text x="63" y="152" fill="#1b4332" fontSize="13" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">EU</text>
          <g transform="translate(80, 133)">
            <path d="M12 4 C8 0, 0 2, 0 10 C0 16, 12 24, 12 24 C12 24, 24 16, 24 10 C24 2, 16 0, 12 4 Z" fill="#e63946" stroke="#b7094c" strokeWidth="1.2" />
          </g>
          <rect x="110" y="132" width="120" height="28" rx="2" fill="#ffffff" stroke="#2d6a4f" strokeWidth="1.5" />
          <text x="170" y="152" fill="#1b4332" fontSize="13" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="3">FERCAL</text>
          <rect x="238" y="115" width="4" height="65" fill="#333333" />
          <circle cx="240" cy="115" r="5" fill="#fde047" className="animate-pulse" />
          <polygon points="234,110 246,110 240,103" fill="#1e1e1e" />
          <path d="M20 190 Q 24 175 28 190 M24 190 Q 28 172 32 190" stroke="#52b788" strokeWidth="2" fill="none" />
          <path d="M255 190 Q 259 175 263 190 M260 190 Q 265 170 270 190" stroke="#52b788" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* World 2: 7.4 */}
      <div
        className="absolute bottom-[110px] left-[7400px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => onExplore(worlds[1])}
        id="landmark-taupe"
      >
        <div className="mb-4 transition-transform group-hover:scale-105 duration-200">
          <div className="bg-white/95 border border-[#6c584c]/40 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-mono font-medium text-[#4a3b32]">
            <span className="w-2 h-2 rounded-full bg-[#a98467] animate-ping" />
            <span>{worlds[1]?.name}</span>
            <span className="text-[10px] text-neutral-400">7.4km</span>
          </div>
        </div>

        <svg width="270" height="230" viewBox="0 0 270 230" className="overflow-visible">
          <rect x="25" y="70" width="45" height="135" rx="3" fill="#2d3748" stroke="#1a202c" strokeWidth="1.5" />
          <circle cx="37" cy="85" r="2.5" fill="#38bdf8" className="animate-pulse" />
          <circle cx="47" cy="85" r="2.5" fill="#34d399" />
          <circle cx="57" cy="85" r="2.5" fill="#f43f5e" />
          <line x1="33" y1="100" x2="62" y2="100" stroke="#4a5568" strokeWidth="1" />
          <line x1="33" y1="120" x2="62" y2="120" stroke="#4a5568" strokeWidth="1" />
          <line x1="33" y1="140" x2="62" y2="140" stroke="#4a5568" strokeWidth="1" />
          <line x1="33" y1="160" x2="62" y2="160" stroke="#4a5568" strokeWidth="1" />
          <rect x="85" y="145" width="150" height="10" rx="2" fill="#d7ccc8" stroke="#8d6e63" strokeWidth="1.5" />
          <rect x="95" y="155" width="8" height="50" fill="#a1887f" />
          <rect x="215" y="155" width="8" height="50" fill="#a1887f" />
          <rect x="135" y="85" width="65" height="45" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="140" y="90" width="55" height="35" rx="1" fill="#090d16" />
          <text x="143" y="102" fill="#38bdf8" fontSize="6" fontFamily="monospace">&gt; giovanni.dev</text>
          <text x="143" y="112" fill="#a3e635" fontSize="5" fontFamily="monospace">✓ learning</text>
          <text x="143" y="120" fill="#94a3b8" fontSize="4.5" fontFamily="monospace">python / linux / web</text>
          <rect x="163" y="130" width="9" height="15" fill="#64748b" />
          <rect x="155" y="143" width="25" height="2" fill="#475569" />
          <rect x="95" y="75" width="30" height="55" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
          <rect x="98" y="78" width="24" height="49" fill="#0b1120" />
          <line x1="102" y1="85" x2="118" y2="85" stroke="#38bdf8" strokeWidth="1" />
          <line x1="102" y1="92" x2="114" y2="92" stroke="#a78bfa" strokeWidth="1" />
          <line x1="102" y1="99" x2="119" y2="99" stroke="#34d399" strokeWidth="1" />
          <rect x="205" y="135" width="22" height="9" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="216" cy="139.5" r="1.5" fill="#64748b" />
          <g className="animate-bounce" style={{ animationDuration: '3s' }}>
            <circle cx="167" cy="45" r="4" fill="#a98467" opacity="0.8" />
            <line x1="167" y1="49" x2="167" y2="80" stroke="#a98467" strokeWidth="1" strokeDasharray="2,2" />
          </g>
        </svg>
      </div>

      {/* World 3: 9.9 */}
      <div
        className="absolute bottom-[110px] left-[9900px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => onExplore(worlds[2])}
        id="landmark-islog"
      >
        <div className="mb-4 transition-transform group-hover:scale-105 duration-200">
          <div className="bg-white/95 border border-[#b86236]/40 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-serif font-medium text-[#8f431c]">
            <span className="w-2 h-2 rounded-full bg-[#b86236] animate-ping" />
            <span>{worlds[2]?.name}</span>
            <span className="text-[10px] text-neutral-400">9.9km</span>
          </div>
        </div>

        <svg width="280" height="230" viewBox="0 0 280 230" className="overflow-visible">
          <path d="M30 85 Q 140 50 250 85 L260 95 Q 140 70 20 95 Z" fill="#3a3836" stroke="#211f1e" strokeWidth="1.5" />
          <path d="M40 78 Q 140 45 240 78" stroke="#686561" strokeWidth="3" fill="none" />
          <rect x="50" y="93" width="10" height="110" fill="#784d31" stroke="#52321c" strokeWidth="1.2" />
          <rect x="220" y="93" width="10" height="110" fill="#784d31" stroke="#52321c" strokeWidth="1.2" />
          <rect x="45" y="105" width="190" height="8" fill="#8f5d3d" stroke="#52321c" strokeWidth="1" />
          <rect x="75" y="113" width="40" height="35" fill="#fdfbf7" stroke="#d5cebe" strokeWidth="1" />
          <text x="95" y="135" fill="#b86236" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">VIA</text>
          <rect x="120" y="113" width="40" height="35" fill="#fdfbf7" stroke="#d5cebe" strokeWidth="1" />
          <text x="140" y="135" fill="#b86236" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">LOG</text>
          <rect x="165" y="113" width="40" height="35" fill="#fdfbf7" stroke="#d5cebe" strokeWidth="1" />
          <text x="185" y="135" fill="#b86236" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">CAFE</text>
          <rect x="60" y="165" width="160" height="12" rx="2" fill="#a06e4a" stroke="#6d4629" strokeWidth="1.2" />
          <rect x="75" y="177" width="8" height="28" fill="#6d4629" />
          <rect x="195" y="177" width="8" height="28" fill="#6d4629" />
          <circle cx="100" cy="160" r="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
          <path d="M140 163 L148 163 L146 155 L142 155 Z" fill="#b86236" />
          <circle cx="144" cy="154" r="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <g transform="translate(10, 130)">
            <path d="M5 25 L25 25 L20 15 L10 15 Z" fill="#71717a" stroke="#3f3f46" strokeWidth="1" />
            <rect x="10" y="25" width="10" height="15" fill="#52525b" />
            <rect x="7" y="40" width="16" height="35" fill="#71717a" stroke="#3f3f46" strokeWidth="1" />
            <circle cx="15" cy="32" r="3.5" fill="#fde047" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* World 4: 12.4 */}
      <div
        className="absolute bottom-[110px] left-[12400px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => onExplore(worlds[3])}
        id="landmark-ojicra"
      >
        <div className="mb-4 transition-transform group-hover:scale-105 duration-200">
          <div className="bg-white/95 border border-[#2a5a7b]/40 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-mono font-medium text-[#1e4159]">
            <span className="w-2 h-2 rounded-full bg-[#4f83a8] animate-ping" />
            <span>{worlds[3]?.name}</span>
            <span className="text-[10px] text-neutral-400">12.4km</span>
          </div>
        </div>

        <svg width="270" height="250" viewBox="0 0 270 250" className="overflow-visible">
          <rect x="70" y="50" width="130" height="155" fill="#4a5568" stroke="#2d3748" strokeWidth="2" />
          <rect x="65" y="32" width="22" height="20" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
          <rect x="97" y="32" width="22" height="20" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
          <rect x="130" y="32" width="22" height="20" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
          <rect x="162" y="32" width="22" height="20" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
          <rect x="183" y="32" width="22" height="20" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
          <rect x="125" y="10" width="4" height="30" fill="#718096" />
          <path d="M129 12 L160 18 L129 25 Z" fill="#3182ce" />
          <rect x="85" y="70" width="25" height="15" fill="#718096" stroke="#2d3748" strokeWidth="1" />
          <rect x="120" y="85" width="30" height="18" fill="#718096" stroke="#2d3748" strokeWidth="1" />
          <rect x="160" y="70" width="25" height="15" fill="#718096" stroke="#2d3748" strokeWidth="1" />
          <rect x="90" y="115" width="28" height="16" fill="#718096" stroke="#2d3748" strokeWidth="1" />
          <rect x="150" y="125" width="30" height="16" fill="#718096" stroke="#2d3748" strokeWidth="1" />
          <path d="M115 205 L115 155 Q 135 140 155 155 L155 205 Z" fill="#1a202c" stroke="#000" strokeWidth="1.5" />
          <line x1="125" y1="150" x2="125" y2="205" stroke="#718096" strokeWidth="1.5" />
          <line x1="135" y1="145" x2="135" y2="205" stroke="#718096" strokeWidth="1.5" />
          <line x1="145" y1="150" x2="145" y2="205" stroke="#718096" strokeWidth="1.5" />
          <rect x="90" y="95" width="8" height="10" fill="#f6ad55" stroke="#dd6b20" strokeWidth="1" className="animate-pulse" />
          <rect x="172" y="95" width="8" height="10" fill="#f6ad55" stroke="#dd6b20" strokeWidth="1" className="animate-pulse" />
          <g transform="translate(15, 80)">
            <rect x="15" y="65" width="14" height="60" fill="#8d6e63" stroke="#4e342e" strokeWidth="1" />
            <rect x="0" y="20" width="44" height="45" rx="4" fill="#38a169" stroke="#22543d" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* World 5: 14.6 */}
      <div
        className="absolute bottom-[110px] left-[14600px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => onExplore(worlds[4])}
        id="landmark-monoomoi"
      >
        <div className="mb-4 transition-transform group-hover:scale-105 duration-200">
          <div className="bg-white/95 border border-[#8b3a4a]/40 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-serif font-medium text-[#702937]">
            <span className="w-2 h-2 rounded-full bg-[#b85d6e] animate-ping" />
            <span>{worlds[4]?.name}</span>
            <span className="text-[10px] text-neutral-400">14.6km</span>
          </div>
        </div>

        <svg width="270" height="230" viewBox="0 0 270 230" className="overflow-visible">
          <rect x="40" y="135" width="190" height="12" rx="3" fill="#e2d4c9" stroke="#9e8a7b" strokeWidth="1.5" />
          <rect x="55" y="147" width="10" height="58" fill="#b09e90" stroke="#756457" strokeWidth="1" />
          <rect x="205" y="147" width="10" height="58" fill="#b09e90" stroke="#756457" strokeWidth="1" />
          <rect x="80" y="90" width="45" height="45" rx="3" fill="#8b3a4a" stroke="#5c202d" strokeWidth="1.5" />
          <line x1="102.5" y1="90" x2="102.5" y2="135" stroke="#f6e05e" strokeWidth="4" />
          <line x1="80" y1="112.5" x2="125" y2="112.5" stroke="#f6e05e" strokeWidth="4" />
          <ellipse cx="96" cy="88" rx="7" ry="4" fill="#ecc94b" stroke="#b7791f" strokeWidth="1" />
          <ellipse cx="109" cy="88" rx="7" ry="4" fill="#ecc94b" stroke="#b7791f" strokeWidth="1" />
          <rect x="135" y="105" width="40" height="30" rx="2" fill="#2b626d" stroke="#163940" strokeWidth="1.5" />
          <line x1="155" y1="105" x2="155" y2="135" stroke="#fed7d7" strokeWidth="3" />
          <rect x="182" y="118" width="30" height="17" rx="4" fill="#d69e2e" stroke="#975a16" strokeWidth="1" />
          <line x1="135" y1="30" x2="135" y2="65" stroke="#cbd5e1" strokeWidth="1" />
          <polygon points="135,65 145,75 135,85 125,75" fill="#f472b6" stroke="#db2777" strokeWidth="1" />
          <line x1="175" y1="20" x2="175" y2="55" stroke="#cbd5e1" strokeWidth="1" />
          <polygon points="175,55 183,63 175,71 167,63" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />
        </svg>
      </div>

      {/* World 6: 16.4 */}
      <div
        className="absolute bottom-[110px] left-[16400px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => onExplore(worlds[5])}
        id="landmark-monoerabi"
      >
        <div className="mb-4 transition-transform group-hover:scale-105 duration-200">
          <div className="bg-white/95 border border-[#2b626d]/40 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-serif font-medium text-[#1c474f]">
            <span className="w-2 h-2 rounded-full bg-[#458b99] animate-ping" />
            <span>{worlds[5]?.name}</span>
            <span className="text-[10px] text-neutral-400">16.4km</span>
          </div>
        </div>

        <svg width="270" height="230" viewBox="0 0 270 230" className="overflow-visible">
          <rect x="40" y="135" width="190" height="12" rx="2" fill="#cfd8dc" stroke="#90a4ae" strokeWidth="1.5" />
          <rect x="55" y="147" width="8" height="58" fill="#78909c" />
          <rect x="207" y="147" width="8" height="58" fill="#78909c" />
          <path d="M70 128 L110 128 L110 135 L70 135 Z" fill="#90a4ae" stroke="#455a64" strokeWidth="1" />
          <circle cx="105" cy="131.5" r="4" fill="#37474f" />
          <rect x="125" y="115" width="22" height="20" rx="3" fill="#263238" stroke="#000" strokeWidth="1.2" />
          <path d="M147 125 Q 160 110 170 130" stroke="#00acc1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <rect x="180" y="120" width="30" height="15" rx="1" fill="#fff9c4" stroke="#fbc02d" strokeWidth="1" />
          <line x1="184" y1="124" x2="204" y2="124" stroke="#d4e157" strokeWidth="1" />
          <line x1="184" y1="128" x2="198" y2="128" stroke="#d4e157" strokeWidth="1" />
          <circle cx="100" cy="85" r="14" fill="rgba(224, 242, 254, 0.4)" stroke="#37474f" strokeWidth="2" />
          <line x1="110" y1="95" x2="122" y2="107" stroke="#8d6e63" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Act II Entrance */}
      <div
        className="absolute bottom-[110px] left-[17800px] flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={onJumpToAct2}
        id="landmark-act2-gate"
      >
        <div className="mb-4 transition-transform group-hover:scale-110 duration-200">
          <div className="bg-neutral-900 text-amber-200 border border-amber-400/50 px-4 py-2 rounded-full shadow-xl flex items-center gap-2.5 text-xs font-serif tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold">{copy.act2Gate}</span>
            <span className="text-neutral-400 font-mono text-[10px]">{copy.enter}</span>
          </div>
        </div>

        <svg width="340" height="280" viewBox="0 0 340 280" className="overflow-visible">
          <path d="M50 210 L50 70 Q 170 15 290 70 L290 210" stroke="#b45309" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M65 210 L65 80 Q 170 35 275 80 L275 210" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
          <ellipse cx="170" cy="205" rx="45" ry="12" fill="#d97706" opacity="0.3" />
          <ellipse cx="170" cy="175" rx="35" ry="9" fill="#f59e0b" opacity="0.4" />
          <ellipse cx="170" cy="145" rx="25" ry="7" fill="#fbbf24" opacity="0.5" />
          <g className="animate-pulse">
            <polygon points="170,55 173,63 181,63 175,68 177,76 170,71 163,76 165,68 159,63 167,63" fill="#fef08a" />
            <circle cx="120" cy="90" r="3" fill="#60a5fa" />
            <circle cx="220" cy="90" r="3" fill="#34d399" />
            <circle cx="100" cy="140" r="2.5" fill="#f472b6" />
            <circle cx="240" cy="140" r="2.5" fill="#fb923c" />
            <line x1="170" y1="65" x2="120" y2="90" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
            <line x1="170" y1="65" x2="220" y2="90" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
            <line x1="120" y1="90" x2="100" y2="140" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
            <line x1="220" y1="90" x2="240" y2="140" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
          </g>
          <text x="170" y="115" fill="#78350f" fontSize="11" fontFamily="serif" textAnchor="middle" letterSpacing="3" fontWeight="bold">
            {copy.livingAtlas}
          </text>
        </svg>
      </div>

      {/* Ground Path */}
      <div className="absolute bottom-0 left-0 w-full h-[110px] bg-gradient-to-b from-[#e8e2d7] to-[#dfd7ca] border-t-2 border-[#d5cbbe]">
        <svg className="w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 19000 110">
          <line x1="0" y1="8" x2="19000" y2="8" stroke="#bead9b" strokeWidth="1" strokeDasharray="30, 20" />
          <line x1="0" y1="28" x2="19000" y2="28" stroke="#d5cbbe" strokeWidth="1" strokeDasharray="80, 50" />
        </svg>

        {[2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000].map((kmPos) => (
          <div
            key={kmPos}
            className="absolute top-2 flex flex-col items-center opacity-85 pointer-events-none"
            style={{ left: `${kmPos}px` }}
          >
            <div className="w-3 h-5 bg-[#6e6860] rounded-t-sm border border-[#524d45] flex items-center justify-center shadow-xs">
              <div className="w-1 h-1 rounded-full bg-amber-200/80" />
            </div>
            <span className="text-[9px] font-mono text-neutral-500 font-bold mt-1">
              {(kmPos / 1000).toFixed(0)} KM
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
