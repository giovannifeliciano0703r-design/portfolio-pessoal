import React, { useEffect, useRef, useState, useCallback } from 'react';
import { WorldArea, CharacterState, Language } from '../types';
import { UI_STRINGS } from '../data/portfolioData';
import { TravelerCharacter } from './TravelerCharacter';
import { WorldLandmarks } from './WorldLandmarks';
import { sound } from '../utils/audioEngine';
import {
  Volume2,
  VolumeX,
  Sparkles,
  Compass,
  MapPin,
  Zap,
  ArrowUp,
  Navigation,
  User,
  ChevronRight,
  Eye
} from 'lucide-react';

interface WalkableWorldProps {
  worlds: WorldArea[];
  language: Language;
  visitedWorlds: Set<string>;
  onExploreWorld: (world: WorldArea) => void;
  onOpenKeepsake: () => void;
  onOpenProfile: () => void;
  onSwitchToAct2: (targetSection?: string) => void;
  onLanguageChange: (lang: Language) => void;
  onWorldVisited: (worldKey: string) => void;
}

export const WalkableWorld: React.FC<WalkableWorldProps> = ({
  worlds,
  language,
  visitedWorlds,
  onExploreWorld,
  onOpenKeepsake,
  onOpenProfile,
  onSwitchToAct2,
  onLanguageChange,
  onWorldVisited,
}) => {
  const t = UI_STRINGS[language];
  const totalWorldLength = 18600;

  // DOM Refs for direct 60fps GPU transforms (zero React re-render lag)
  const worldStageRef = useRef<HTMLDivElement>(null);
  const parallaxFarRef = useRef<HTMLDivElement>(null);
  const parallaxMidRef = useRef<HTMLDivElement>(null);

  // Physics state kept in ref to avoid triggering React virtual DOM tree reconciliations 60x/sec
  const physicsRef = useRef<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    direction: 'left' | 'right';
    isWalking: boolean;
    isJumping: boolean;
    frameIndex: number;
    camX: number;
    smoothCamX: number;
  }>({
    x: 1200,
    y: 0,
    vx: 0,
    vy: 0,
    direction: 'right',
    isWalking: false,
    isJumping: false,
    frameIndex: 0,
    camX: 0,
    smoothCamX: 0,
  });

  // UI state for React (updated only when world changes or throttled)
  const [characterRenderState, setCharacterRenderState] = useState<CharacterState>({
    x: 1200,
    y: 0,
    vx: 0,
    vy: 0,
    direction: 'right',
    isWalking: false,
    isJumping: false,
    isSitting: false,
    isActionActive: false,
    frameIndex: 0,
  });

  const [activeWorld, setActiveWorld] = useState<WorldArea | null>(null);
  const [nearbyWorld, setNearbyWorld] = useState<WorldArea | null>(null);
  const [isNearOrigin, setIsNearOrigin] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSprinting, setIsSprinting] = useState(false);
  const [distanceKm, setDistanceKm] = useState('1.2');
  const [progressPercent, setProgressPercent] = useState(6);
  const [showMinimap, setShowMinimap] = useState(false);

  // Input states
  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const touchDirection = useRef<'left' | 'right' | null>(null);
  const stepSoundCounter = useRef<number>(0);
  const uiThrottleCounter = useRef<number>(0);

  // Sound toggle handler
  const handleSoundToggle = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  // Teleport to landmark
  const handleTeleport = (xTarget: number) => {
    physicsRef.current.x = xTarget;
    physicsRef.current.vx = 0;
    physicsRef.current.isWalking = false;
    sound.playWhoosh();
  };

  // Detect active world and proximity
  const checkProximityAndWorlds = useCallback((xPos: number) => {
    // Check Origin milestone (0 - 1600m)
    const nearOrig = xPos >= 300 && xPos <= 1200;
    setIsNearOrigin(nearOrig);

    // Active world (region)
    const current = worlds.find((w) => xPos >= w.xStart - 400 && xPos <= w.xEnd + 400);
    setActiveWorld((prev) => (prev?.key !== current?.key ? current || null : prev));

    // Nearby landmark (interactive range)
    const closeLandmark = worlds.find((w) => {
      const center = (w.xStart + w.xEnd) / 2;
      return Math.abs(xPos - center) < 360;
    });
    setNearbyWorld((prev) => (prev?.key !== closeLandmark?.key ? closeLandmark || null : prev));

    if (current && !visitedWorlds.has(current.key)) {
      onWorldVisited(current.key);
      sound.playDiscoveryChime(current.key);
    }
  }, [worlds, visitedWorlds, onWorldVisited]);

  // Main 60 FPS Physics & Render Loop (Hardware Accelerated)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updatePhysics = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;

      const p = physicsRef.current;
      const speed = (isSprinting || keysPressed.current['Shift']) ? 780 : 440;

      let vx = 0;
      let isWalking = false;

      // Horizontal inputs
      if (
        keysPressed.current['ArrowLeft'] ||
        keysPressed.current['a'] ||
        keysPressed.current['A'] ||
        touchDirection.current === 'left'
      ) {
        vx = -speed;
        p.direction = 'left';
        isWalking = true;
      } else if (
        keysPressed.current['ArrowRight'] ||
        keysPressed.current['d'] ||
        keysPressed.current['D'] ||
        touchDirection.current === 'right'
      ) {
        vx = speed;
        p.direction = 'right';
        isWalking = true;
      }

      p.vx = vx;
      p.isWalking = isWalking;

      // Jump inputs
      const wantsJump =
        keysPressed.current['ArrowUp'] ||
        keysPressed.current['w'] ||
        keysPressed.current['W'] ||
        keysPressed.current[' '];

      if (wantsJump && !p.isJumping) {
        p.vy = -560;
        p.isJumping = true;
        sound.playJump();
      }

      // Apply Gravity
      if (p.isJumping || p.y < 0) {
        p.vy += 1500 * delta;
        p.y += p.vy * delta;
        if (p.y >= 0) {
          p.y = 0;
          p.vy = 0;
          p.isJumping = false;
        }
      }

      // Update position
      p.x = Math.max(100, Math.min(totalWorldLength - 100, p.x + p.vx * delta));
      if (p.isWalking) {
        p.frameIndex += 1;
      }

      // Footstep sound loop
      if (p.isWalking && !p.isJumping) {
        stepSoundCounter.current += delta;
        if (stepSoundCounter.current > (isSprinting ? 0.22 : 0.34)) {
          sound.playFootstep();
          stepSoundCounter.current = 0;
        }
      }

      // Smooth Camera Tracking (Lerp damping)
      const viewportWidth = window.innerWidth || 1200;
      const targetCamX = Math.max(0, Math.min(totalWorldLength - viewportWidth, p.x - viewportWidth * 0.38));
      p.smoothCamX += (targetCamX - p.smoothCamX) * Math.min(1, delta * 12);

      // Direct GPU Transform Updates (Bypasses React DOM diffing for 60fps / 120fps fluidity)
      if (worldStageRef.current) {
        worldStageRef.current.style.transform = `translate3d(${-p.smoothCamX}px, 0, 0)`;
      }
      if (parallaxFarRef.current) {
        parallaxFarRef.current.style.transform = `translate3d(${-p.smoothCamX * 0.15}px, 0, 0)`;
      }
      if (parallaxMidRef.current) {
        parallaxMidRef.current.style.transform = `translate3d(${-p.smoothCamX * 0.45}px, 0, 0)`;
      }

      // Throttled UI & Character Animation State Update (~30-60ms)
      uiThrottleCounter.current += delta;
      if (uiThrottleCounter.current > 0.033) {
        uiThrottleCounter.current = 0;

        setCharacterRenderState({
          x: p.x,
          y: p.y,
          vx: p.vx,
          vy: p.vy,
          direction: p.direction,
          isWalking: p.isWalking,
          isJumping: p.isJumping,
          isSitting: false,
          isActionActive: false,
          frameIndex: p.frameIndex,
        });

        const km = (p.x / 1000).toFixed(1);
        setDistanceKm(km);
        setProgressPercent(Math.min(100, Math.round((p.x / totalWorldLength) * 100)));

        checkProximityAndWorlds(p.x);
        sound.updateWorldPosition(p.x, totalWorldLength);

        // Auto trigger Act II entrance at the end of the road
        if (p.x > 18150) {
          onSwitchToAct2();
        }
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [checkProximityAndWorlds, isSprinting, onSwitchToAct2, totalWorldLength]);

  // Keyboard Event Handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement).tagName?.toLowerCase())) return;

      keysPressed.current[e.key] = true;

      // Explore key (E or Enter)
      if (e.key === 'e' || e.key === 'E' || e.key === 'Enter') {
        if (nearbyWorld) {
          onExploreWorld(nearbyWorld);
        } else if (isNearOrigin) {
          onOpenProfile();
        }
      }

      if (e.key === 'Shift') {
        setIsSprinting(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
      if (e.key === 'Shift') {
        setIsSprinting(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isNearOrigin, nearbyWorld, onExploreWorld, onOpenProfile]);

  const currentAccentColor = activeWorld?.accentColor || '#c2410c';
  const currentSky = activeWorld?.skyGradient || 'from-[#faf7f2] via-[#f1ece1] to-[#faf8f5]';

  return (
    <div
      id="walkable-world-stage"
      className={`relative w-full h-screen overflow-hidden select-none bg-gradient-to-b ${currentSky} transition-colors duration-1000 ease-out`}
    >
      {/* Top HUD Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 py-3 flex items-center justify-between pointer-events-auto bg-white/80 backdrop-blur-lg border-b border-neutral-200/80 shadow-xs">
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-serif font-extrabold tracking-wider text-sm sm:text-base text-neutral-900">
            GIOVANNI<span className="text-amber-800">.FJ</span>
          </span>
        </div>

        {/* Center Distance & Progress HUD */}
        <div className="flex items-center gap-2 sm:gap-3 max-w-[200px] sm:max-w-xs md:max-w-md w-full mx-2 sm:mx-4">
          <span className="text-[11px] font-mono text-neutral-500 shrink-0 font-medium">
            {distanceKm} km
          </span>
          <div className="relative flex-1 h-2 bg-neutral-200/90 rounded-full overflow-hidden shadow-inner">
            <div
              className="absolute top-0 bottom-0 left-0 transition-all duration-75 rounded-full"
              style={{
                width: `${progressPercent}%`,
                backgroundColor: currentAccentColor,
              }}
            />
          </div>
          <span className="text-[11px] font-mono font-bold text-neutral-800 shrink-0">
            {progressPercent}%
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Minimap / Fast Travel Toggle */}
          <button
            type="button"
            onClick={() => setShowMinimap(!showMinimap)}
            className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              showMinimap
                ? 'bg-amber-600 border-amber-700 text-white'
                : 'bg-white hover:bg-neutral-100 border-neutral-300 text-neutral-700'
            }`}
            title="Mapa de Marcos & Viagem Rápida"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Marcos</span>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={handleSoundToggle}
            className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-700 transition-colors cursor-pointer"
            title={isMuted ? t.soundOn : t.soundOff}
            aria-label={isMuted ? t.soundOn : t.soundOff}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
          </button>

          {/* Language Switcher (PT / EN) */}
          <div className="flex items-center bg-white border border-neutral-300 rounded-xl px-1.5 py-1 text-xs font-mono">
            <button
              type="button"
              onClick={() => onLanguageChange('pt')}
              className={`px-1.5 py-0.5 rounded ${language === 'pt' ? 'bg-neutral-900 text-white font-bold' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              PT
            </button>
            <span className="text-neutral-300 text-[10px]">/</span>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-0.5 rounded ${language === 'en' ? 'bg-neutral-900 text-white font-bold' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              EN
            </button>
          </div>

          {/* Keepsake Souvenir Button */}
          <button
            type="button"
            onClick={onOpenKeepsake}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-100 text-xs font-medium tracking-wide flex items-center gap-1.5 transition-all shadow-sm group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">{t.saveKeepsake}</span>
            <span className="group-hover:translate-x-0.5 transition-transform font-mono text-[11px]">✦</span>
          </button>
        </div>
      </header>

      {/* Interactive Minimap & Fast Travel Bar (Collapsible) */}
      {showMinimap && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-2xl bg-white/95 backdrop-blur-md border border-neutral-300 rounded-2xl shadow-xl p-3 animate-fadeIn">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 font-bold flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-amber-700" />
              <span>Viagem Rápida / Marcos do Mundo</span>
            </span>
            <button
              type="button"
              onClick={() => setShowMinimap(false)}
              className="text-[11px] font-mono text-neutral-400 hover:text-neutral-800"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-7 gap-1.5 text-center">
            {/* Origin */}
            <button
              type="button"
              onClick={() => {
                handleTeleport(600);
                setShowMinimap(false);
              }}
              className="p-1.5 rounded-lg bg-neutral-100 hover:bg-amber-100 text-neutral-800 border border-neutral-200 transition-colors text-[11px] font-mono"
            >
              <div className="font-bold">Origem</div>
              <div className="text-[9px] text-neutral-500">0.6 km</div>
            </button>

            {/* 6 Worlds */}
            {worlds.map((w, idx) => (
              <button
                key={w.key}
                type="button"
                onClick={() => {
                  handleTeleport((w.xStart + w.xEnd) / 2);
                  setShowMinimap(false);
                }}
                className="p-1.5 rounded-lg bg-neutral-50 hover:bg-amber-50 text-neutral-800 border border-neutral-200 transition-colors text-[11px] font-mono"
                style={{ borderColor: visitedWorlds.has(w.key) ? w.color : undefined }}
              >
                <div className="font-bold truncate">{w.name}</div>
                <div className="text-[9px] text-neutral-500">
                  {((w.xStart + w.xEnd) / 2000).toFixed(1)} km
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Parallax Layer 1: Distant Sky Clouds & Mountain Peaks (0.15x speed) */}
      <div
        ref={parallaxFarRef}
        className="absolute top-0 left-0 bottom-0 pointer-events-none will-change-transform opacity-30"
        style={{ width: `${totalWorldLength}px` }}
      >
        <svg
          className="absolute bottom-20 left-0 w-full h-[500px]"
          viewBox="0 0 19000 500"
          preserveAspectRatio="none"
        >
          {/* Distant soft mountain ridges */}
          <path
            d="M0 350 Q 2000 120 4000 320 Q 7000 90 10000 300 Q 13500 110 16500 310 L 19000 350 L 19000 500 L 0 500 Z"
            fill="#baa593"
          />
          {/* Drifting Clouds */}
          <ellipse cx="1200" cy="80" rx="180" ry="30" fill="#ffffff" opacity="0.6" />
          <ellipse cx="4500" cy="110" rx="220" ry="35" fill="#ffffff" opacity="0.5" />
          <ellipse cx="8500" cy="90" rx="190" ry="28" fill="#ffffff" opacity="0.6" />
          <ellipse cx="13000" cy="100" rx="240" ry="32" fill="#ffffff" opacity="0.5" />
          <ellipse cx="17000" cy="70" rx="200" ry="30" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>

      {/* Parallax Layer 2: Midground Hills, Floating Sparks & Ambient Silhouettes (0.45x speed) */}
      <div
        ref={parallaxMidRef}
        className="absolute top-0 left-0 bottom-0 pointer-events-none will-change-transform opacity-40"
        style={{ width: `${totalWorldLength}px` }}
      >
        <svg
          className="absolute bottom-16 left-0 w-full h-[380px]"
          viewBox="0 0 19000 380"
          preserveAspectRatio="none"
        >
          <path
            d="M0 260 Q 1800 140 3600 240 Q 6000 120 8800 250 Q 12000 130 15000 240 Q 17500 150 19000 260 L 19000 380 L 0 380 Z"
            fill="#a69482"
          />
        </svg>

        {/* Ambient floating fireflies / embers */}
        <div className="absolute bottom-32 left-[1200px] w-2 h-2 rounded-full bg-amber-400 blur-[1px] animate-floatSlow" />
        <div className="absolute bottom-40 left-[4900px] w-2.5 h-2.5 rounded-full bg-emerald-400 blur-[1px] animate-floatSlow" />
        <div className="absolute bottom-44 left-[7600px] w-2 h-2 rounded-full bg-sky-400 blur-[1px] animate-floatSlow" />
        <div className="absolute bottom-36 left-[10100px] w-2.5 h-2.5 rounded-full bg-orange-400 blur-[1px] animate-floatSlow" />
        <div className="absolute bottom-48 left-[12600px] w-2 h-2 rounded-full bg-indigo-400 blur-[1px] animate-floatSlow" />
        <div className="absolute bottom-38 left-[15200px] w-2.5 h-2.5 rounded-full bg-rose-400 blur-[1px] animate-floatSlow" />
      </div>

      {/* Main World Stage (1.0x speed, 60fps GPU translated) */}
      <div
        ref={worldStageRef}
        className="absolute top-0 left-0 bottom-0 pointer-events-none will-change-transform"
        style={{ width: `${totalWorldLength}px` }}
      >
        {/* World Landmarks & Scenery */}
        <WorldLandmarks
          worlds={worlds}
          activeWorld={activeWorld}
          onExplore={onExploreWorld}
          onJumpToAct2={() => onSwitchToAct2()}
          onOpenProfile={onOpenProfile}
        />

        {/* Floating Proximity Interaction Prompt above Traveler */}
        {(nearbyWorld || isNearOrigin) && (
          <div
            className="absolute bottom-[210px] pointer-events-auto transition-transform duration-100"
            style={{
              left: `${characterRenderState.x - 40}px`,
              transform: `translateY(${characterRenderState.y}px)`,
            }}
          >
            <button
              type="button"
              onClick={() => {
                if (nearbyWorld) onExploreWorld(nearbyWorld);
                else if (isNearOrigin) onOpenProfile();
              }}
              className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 hover:bg-neutral-950 text-white border border-amber-400/80 shadow-lg text-xs font-mono flex items-center gap-2 animate-bounce cursor-pointer group backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-bold">
                [E] {nearbyWorld ? `Explorar ${nearbyWorld.name}` : 'Ver Biografia'}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* Character Sprite Object */}
        <div className="absolute bottom-[110px] left-0 pointer-events-none">
          <TravelerCharacter
            state={characterRenderState}
            currentColor={currentAccentColor}
          />
        </div>
      </div>

      {/* Bottom Controls / Mobile Touch D-Pad & Keyboard Hints */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 pointer-events-none flex items-end justify-between">
        {/* Desktop Keyboard Hints */}
        <div className="hidden md:flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-neutral-200 shadow-xs pointer-events-auto">
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-600">
            <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-bold">A</span>
            <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-bold">D</span>
            <span>Andar</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-600">
            <span className="px-2.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-bold">Espaço</span>
            <span>Pular</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-600">
            <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-bold">Shift</span>
            <span>Correr</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-600">
            <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-amber-900 font-bold">E</span>
            <span>Explorar</span>
          </div>
        </div>

        {/* Mobile Touch Navigation Controls */}
        <div className="flex md:hidden items-center justify-between w-full pointer-events-auto">
          {/* Left / Right D-Pad */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-neutral-300 shadow-lg">
            <button
              type="button"
              onTouchStart={() => (touchDirection.current = 'left')}
              onTouchEnd={() => (touchDirection.current = null)}
              onMouseDown={() => (touchDirection.current = 'left')}
              onMouseUp={() => (touchDirection.current = null)}
              className="w-12 h-12 rounded-xl bg-neutral-100 active:bg-neutral-300 flex items-center justify-center text-lg font-bold text-neutral-800 select-none cursor-pointer"
            >
              ◀
            </button>
            <button
              type="button"
              onTouchStart={() => (touchDirection.current = 'right')}
              onTouchEnd={() => (touchDirection.current = null)}
              onMouseDown={() => (touchDirection.current = 'right')}
              onMouseUp={() => (touchDirection.current = null)}
              className="w-12 h-12 rounded-xl bg-neutral-100 active:bg-neutral-300 flex items-center justify-center text-lg font-bold text-neutral-800 select-none cursor-pointer"
            >
              ▶
            </button>
          </div>

          {/* Action Buttons (Jump, Sprint, Explore) */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-neutral-300 shadow-lg">
            {/* Sprint Toggle */}
            <button
              type="button"
              onClick={() => setIsSprinting(!isSprinting)}
              className={`w-11 h-11 rounded-xl text-xs font-mono font-bold flex items-center justify-center transition-colors ${
                isSprinting ? 'bg-amber-600 text-white' : 'bg-neutral-100 text-neutral-700'
              }`}
            >
              <Zap className="w-4 h-4" />
            </button>

            {/* Jump Button */}
            <button
              type="button"
              onClick={() => {
                if (!physicsRef.current.isJumping) {
                  physicsRef.current.vy = -560;
                  physicsRef.current.isJumping = true;
                  sound.playJump();
                }
              }}
              className="w-12 h-12 rounded-xl bg-neutral-800 active:bg-black text-white flex items-center justify-center text-xs font-bold font-mono select-none"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

            {/* Explore Button (when near landmark) */}
            {(nearbyWorld || isNearOrigin) && (
              <button
                type="button"
                onClick={() => {
                  if (nearbyWorld) onExploreWorld(nearbyWorld);
                  else if (isNearOrigin) onOpenProfile();
                }}
                className="px-3 h-12 rounded-xl bg-amber-500 active:bg-amber-600 text-white flex items-center gap-1 text-xs font-bold font-mono shadow-md animate-pulse"
              >
                <Eye className="w-4 h-4" />
                <span>Explorar</span>
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};
