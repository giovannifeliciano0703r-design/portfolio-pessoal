import React, { useRef, useEffect } from 'react';
import { WorldArea, Language } from '../types';
import { UI_STRINGS } from '../data/portfolioData';
import { APP_COPY } from '../data/translations';
import { X, Download, Sparkles } from 'lucide-react';

interface ConstellationKeepsakeModalProps {
  visitedWorlds: Set<string>;
  worlds: WorldArea[];
  language: Language;
  onClose: () => void;
}

export const ConstellationKeepsakeModal: React.FC<ConstellationKeepsakeModalProps> = ({
  visitedWorlds,
  worlds,
  language,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = UI_STRINGS[language];
  const copy = APP_COPY[language];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 2;
    const width = 600;
    const height = 400;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#12151c');
    bgGradient.addColorStop(0.5, '#181e28');
    bgGradient.addColorStop(1, '#0e1017');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 20; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 20; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(16, 16, width - 32, height - 32);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.strokeRect(22, 22, width - 44, height - 44);

    ctx.fillStyle = '#faf8f5';
    ctx.font = 'bold 16px "Cinzel", "Newsreader", serif';
    ctx.textAlign = 'center';
    ctx.fillText(copy.keepsakeTitle, width / 2, 55);

    ctx.fillStyle = '#a1a1aa';
    ctx.font = '10px monospace';
    ctx.fillText(copy.keepsakeSubtitle, width / 2, 72);

    const getWorldLabel = (key: string, fallback: string) => {
      const match = worlds.find((world) => world.key === key);
      return match?.name || fallback;
    };

    const nodeCoords: { x: number; y: number; key: string; color: string; label: string }[] = [
      { x: 90, y: 180, key: 'moss', color: '#386641', label: getWorldLabel('moss', 'Fercal, DF') },
      { x: 180, y: 260, key: 'taupe', color: '#a98467', label: getWorldLabel('taupe', '7.4 km') },
      { x: 280, y: 150, key: 'islog', color: '#b86236', label: getWorldLabel('islog', '9.9 km') },
      { x: 380, y: 250, key: 'ojicra', color: '#4f83a8', label: getWorldLabel('ojicra', '12.4 km') },
      { x: 470, y: 160, key: 'monoomoi', color: '#b85d6e', label: getWorldLabel('monoomoi', '14.6 km') },
      { x: 530, y: 240, key: 'monoerabi', color: '#458b99', label: getWorldLabel('monoerabi', '16.4 km') },
    ];

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    nodeCoords.forEach((node, index) => {
      if (index === 0) ctx.moveTo(node.x, node.y);
      else ctx.lineTo(node.x, node.y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    nodeCoords.forEach((node) => {
      const isVisited = visitedWorlds.has(node.key);

      ctx.beginPath();
      ctx.arc(node.x, node.y, isVisited ? 14 : 9, 0, Math.PI * 2);
      ctx.fillStyle = isVisited ? `${node.color}55` : 'rgba(255, 255, 255, 0.08)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, isVisited ? 7 : 4, 0, Math.PI * 2);
      ctx.fillStyle = isVisited ? node.color : '#52525b';
      ctx.fill();
      ctx.strokeStyle = isVisited ? '#ffffff' : '#3f3f46';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = isVisited ? '#fef08a' : '#71717a';
      ctx.font = isVisited ? 'bold 10px monospace' : '9px monospace';
      ctx.textAlign = 'center';
      const shortLabel = node.label.length > 18 ? `${node.label.slice(0, 16)}…` : node.label;
      ctx.fillText(shortLabel, node.x, node.y + (node.y > 200 ? 25 : -18));

      if (isVisited) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '8px monospace';
        ctx.fillText(copy.walked, node.x, node.y + (node.y > 200 ? 36 : -7));
      }
    });

    const now = new Date();
    const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

    ctx.fillStyle = '#71717a';
    ctx.font = '9px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`${copy.explorerStamp}: ${visitedWorlds.size} / 6 ${copy.worldsDiscovered}`, 35, height - 35);

    ctx.textAlign = 'right';
    ctx.fillText(`${copy.date}: ${dateStr} // GIOVANNI.FJ`, width - 35, height - 35);
  }, [visitedWorlds, worlds, language, copy]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'giovanni-constellation-keepsake.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div
      id="constellation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="constellation-modal"
        className="relative w-full max-w-2xl bg-[#181a20] border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-neutral-100 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-constellation-modal"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          aria-label={copy.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-amber-300">
          <Sparkles className="w-5 h-5" />
          <h3 className="text-xl font-serif tracking-wide text-neutral-100">{t.saveKeepsake}</h3>
        </div>
        <p className="text-xs text-neutral-400 font-mono mb-6 text-center">
          {visitedWorlds.size} / 6 — {copy.keepsakeMemory}
        </p>

        <div className="w-full max-w-[600px] overflow-hidden rounded-xl border border-amber-400/20 shadow-2xl mb-6 bg-black">
          <canvas ref={canvasRef} className="w-full h-auto block" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-mono font-bold tracking-wider flex items-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadSouvenir}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono transition-colors cursor-pointer"
          >
            {t.returnWorld}
          </button>
        </div>
      </div>
    </div>
  );
};
