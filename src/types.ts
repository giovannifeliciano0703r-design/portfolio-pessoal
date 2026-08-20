export type Language = 'pt' | 'en';

export type WorldKey = 'moss' | 'taupe' | 'islog' | 'ojicra' | 'monoomoi' | 'monoerabi';

export interface Article {
  title: string;
  url: string;
  image: string;
  date: string;
  language: string;
  readTime?: string;
  excerpt?: string;
  tags?: string[];
}

export interface WorldArea {
  key: WorldKey;
  name: string;
  label: string;
  title: string;
  role: string;
  description: string;
  url: string;
  event: string;
  xStart: number;
  xEnd: number;
  color: string;
  accentColor: string;
  skyGradient: string;
  iconName: string;
  themeNote: string;
  articles: Article[];
  landmarkSvgType: 'fercal_monument' | 'fishing_pier' | 'ai_terminal' | 'tea_house' | 'minecraft_castle' | 'gift_atelier' | 'editorial_desk';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  repoUrl: string;
  pypiUrl?: string;
  version: string;
  languages: string[];
  license: string;
  installCommand?: string;
  highlightFeatures: string[];
  metrics?: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  typeBadge: string;
  description: string;
  deliverables: string[];
  suitableFor: string;
  approach: string;
}

export interface Award {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  url: string;
  badgeColor: string;
  badgeBg: string;
}

export interface CharacterState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  direction: 'left' | 'right';
  isWalking: boolean;
  isJumping: boolean;
  isSitting: boolean;
  isActionActive: boolean;
  actionType?: 'fish' | 'code' | 'photo' | 'build' | 'gift' | 'inspect' | 'idle';
  frameIndex: number;
}
