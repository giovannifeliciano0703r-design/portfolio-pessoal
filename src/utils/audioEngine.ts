class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted = false;
  private ambientGain: GainNode | null = null;
  private tonalGain: GainNode | null = null;
  private textureGain: GainNode | null = null;
  private noiseGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private textureOsc: OscillatorNode | null = null;
  private noiseSource: AudioBufferSourceNode | null = null;
  private noiseFilter: BiquadFilterNode | null = null;
  private isInitialized = false;
  private currentRegion = '';

  public init() {
    if (this.isInitialized || typeof window === 'undefined') return;

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.isInitialized = true;
      this.startAmbient();
    } catch {
      // Navegadores podem bloquear Web Audio até a primeira interação do usuário.
    }
  }

  public ensureReady() {
    this.init();
    if (this.ctx?.state === 'suspended') {
      void this.ctx.resume().catch(() => undefined);
    }
  }

  public toggleMute(): boolean {
    this.ensureReady();
    this.isMuted = !this.isMuted;

    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.034, this.ctx.currentTime, 0.16);
    }

    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  private createNoiseBuffer(context: AudioContext) {
    const frameCount = context.sampleRate * 2;
    const buffer = context.createBuffer(1, frameCount, context.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;

    for (let i = 0; i < frameCount; i += 1) {
      const white = Math.random() * 2 - 1;
      last = last * 0.985 + white * 0.015;
      data[i] = last * 2.4;
    }

    return buffer;
  }

  private startAmbient() {
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.034, now);
      this.ambientGain.connect(this.ctx.destination);

      this.tonalGain = this.ctx.createGain();
      this.tonalGain.gain.setValueAtTime(0.58, now);
      this.tonalGain.connect(this.ambientGain);

      const droneFilter = this.ctx.createBiquadFilter();
      droneFilter.type = 'lowpass';
      droneFilter.frequency.setValueAtTime(520, now);
      droneFilter.Q.setValueAtTime(0.7, now);
      droneFilter.connect(this.tonalGain);

      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(118, now);
      this.droneOsc1.connect(droneFilter);

      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'triangle';
      this.droneOsc2.frequency.setValueAtTime(177, now);
      this.droneOsc2.connect(droneFilter);

      this.textureGain = this.ctx.createGain();
      this.textureGain.gain.setValueAtTime(0.05, now);
      this.textureGain.connect(this.ambientGain);

      const textureFilter = this.ctx.createBiquadFilter();
      textureFilter.type = 'bandpass';
      textureFilter.frequency.setValueAtTime(420, now);
      textureFilter.Q.setValueAtTime(1.2, now);
      textureFilter.connect(this.textureGain);

      this.textureOsc = this.ctx.createOscillator();
      this.textureOsc.type = 'sine';
      this.textureOsc.frequency.setValueAtTime(330, now);
      this.textureOsc.connect(textureFilter);

      this.noiseGain = this.ctx.createGain();
      this.noiseGain.gain.setValueAtTime(0.005, now);
      this.noiseGain.connect(this.ambientGain);

      this.noiseFilter = this.ctx.createBiquadFilter();
      this.noiseFilter.type = 'lowpass';
      this.noiseFilter.frequency.setValueAtTime(900, now);
      this.noiseFilter.Q.setValueAtTime(0.45, now);
      this.noiseFilter.connect(this.noiseGain);

      this.noiseSource = this.ctx.createBufferSource();
      this.noiseSource.buffer = this.createNoiseBuffer(this.ctx);
      this.noiseSource.loop = true;
      this.noiseSource.connect(this.noiseFilter);

      this.droneOsc1.start();
      this.droneOsc2.start();
      this.textureOsc.start();
      this.noiseSource.start();
    } catch {
      // Se o áudio ambiente falhar, a navegação continua funcionando normalmente.
    }
  }

  public playFootstep() {
    if (this.isMuted || !this.ctx || this.ctx.state !== 'running') return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'triangle';
      const baseFreq = 76 + Math.random() * 30;
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.055);

      gain.gain.setValueAtTime(0.014, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.06);
    } catch {
      // Ignora falhas pontuais de áudio.
    }
  }

  public playJump() {
    if (this.isMuted || !this.ctx || this.ctx.state !== 'running') return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.15);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.15);
    } catch {
      // Ignora falhas pontuais de áudio.
    }
  }

  public playWhoosh() {
    this.ensureReady();
    if (this.isMuted || !this.ctx || this.ctx.state !== 'running') return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.25);
      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.25);
    } catch {
      // Ignora falhas pontuais de áudio.
    }
  }

  public playDiscoveryChime(worldKey: string) {
    this.ensureReady();
    if (this.isMuted || !this.ctx || this.ctx.state !== 'running') return;
    try {
      const keyFrequencies: Record<string, number[]> = {
        moss: [523.25, 659.25, 783.99, 1046.5],
        taupe: [440, 554.37, 659.25, 880],
        islog: [392, 493.88, 587.33, 783.99],
        ojicra: [349.23, 440, 523.25, 698.46],
        monoomoi: [493.88, 622.25, 739.99, 987.77],
        monoerabi: [587.33, 739.99, 880, 1174.66],
        default: [523.25, 659.25, 783.99, 1046.5],
      };

      const notes = keyFrequencies[worldKey] || keyFrequencies.default;
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = this.ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);
        gain.gain.setValueAtTime(0, noteTime);
        gain.gain.linearRampToValueAtTime(0.052, noteTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(noteTime);
        osc.stop(noteTime + 0.8);
      });
    } catch {
      // Ignora falhas pontuais de áudio.
    }
  }

  private getRegionConfig(x: number) {
    if (x < 3000) return { key: 'origin', base: 118, texture: 250, noise: 0.004, cutoff: 720, type: 'sine' as OscillatorType };
    if (x < 6000) return { key: 'moss', base: 108, texture: 330, noise: 0.009, cutoff: 1180, type: 'sine' as OscillatorType };
    if (x < 8800) return { key: 'taupe', base: 136, texture: 520, noise: 0.003, cutoff: 1550, type: 'square' as OscillatorType };
    if (x < 11200) return { key: 'islog', base: 124, texture: 392, noise: 0.006, cutoff: 980, type: 'triangle' as OscillatorType };
    if (x < 13700) return { key: 'ojicra', base: 145, texture: 293.66, noise: 0.007, cutoff: 1320, type: 'sine' as OscillatorType };
    if (x < 15500) return { key: 'monoomoi', base: 116, texture: 261.63, noise: 0.004, cutoff: 820, type: 'triangle' as OscillatorType };
    if (x < 17500) return { key: 'monoerabi', base: 154, texture: 466.16, noise: 0.005, cutoff: 1450, type: 'sine' as OscillatorType };
    return { key: 'final', base: 166, texture: 523.25, noise: 0.003, cutoff: 1650, type: 'sine' as OscillatorType };
  }

  private updateVisualEnvironment(x: number, totalLength: number) {
    if (typeof document === 'undefined') return;

    const progress = Math.min(Math.max(x / totalLength, 0), 1);
    const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
    const warmRise = clamp01((progress - 0.38) / 0.3);
    const warmFall = 1 - clamp01((progress - 0.8) / 0.2);
    const warmth = warmRise * warmFall;
    const night = clamp01((progress - 0.7) / 0.3);
    const stars = clamp01((progress - 0.8) / 0.2);
    const morning = 1 - clamp01(progress / 0.22);
    const root = document.documentElement;

    root.style.setProperty('--journey-progress', progress.toFixed(3));
    root.style.setProperty('--journey-warmth', warmth.toFixed(3));
    root.style.setProperty('--journey-night', night.toFixed(3));
    root.style.setProperty('--journey-stars', stars.toFixed(3));
    root.style.setProperty('--journey-morning', morning.toFixed(3));
    root.style.setProperty('--journey-sun-x', `${12 + progress * 74}%`);
    root.style.setProperty('--journey-sun-y', `${17 + progress * 17}%`);

    root.dataset.journeyTime = progress < 0.2
      ? 'morning'
      : progress < 0.55
        ? 'day'
        : progress < 0.82
          ? 'sunset'
          : 'night';
  }

  public updateWorldPosition(x: number, totalLength: number) {
    this.updateVisualEnvironment(x, totalLength);

    if (!this.ctx || !this.droneOsc1 || !this.droneOsc2 || !this.textureOsc) return;

    try {
      const config = this.getRegionConfig(x);
      const now = this.ctx.currentTime;

      this.droneOsc1.frequency.setTargetAtTime(config.base, now, 0.9);
      this.droneOsc2.frequency.setTargetAtTime(config.base * 1.5, now, 0.9);
      this.textureOsc.frequency.setTargetAtTime(config.texture, now, 0.8);

      if (this.currentRegion !== config.key) {
        this.textureOsc.type = config.type;
        this.currentRegion = config.key;
      }

      if (this.noiseGain) {
        this.noiseGain.gain.setTargetAtTime(config.noise, now, 1.2);
      }
      if (this.noiseFilter) {
        this.noiseFilter.frequency.setTargetAtTime(config.cutoff, now, 1.1);
      }
    } catch {
      // A ambientação visual continua ativa mesmo se Web Audio não estiver disponível.
    }
  }
}

export const sound = new AudioEngine();