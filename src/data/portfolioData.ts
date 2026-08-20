import { WorldArea, Project, ServiceItem, Award, Language } from '../types';

export const WORLDS_DATA: WorldArea[] = [
  {
    key: 'moss',
    name: 'Fercal, DF',
    label: 'origens / natureza / silêncio',
    title: 'Fercal & Sobradinho, Distrito Federal',
    role: 'Nascido em Sobradinho, criado na Fercal',
    description: 'Sou brasileiro, nascido no Hospital Regional de Sobradinho e criado na Fercal, uma cidade no Distrito Federal onde ainda resido até hoje. Cresci em um ambiente que me aproximou da natureza e do silêncio, algo que valorizo até hoje — prefiro lugares tranquilos, que me permitem pensar com clareza e me conectar comigo mesmo. Essa calma também reflete um pouco em como encaro meus estudos: com paciência e constância, um passo de cada vez.',
    url: '#',
    event: 'origens',
    xStart: 3800,
    xEnd: 5800,
    color: '#2d6a4f',
    accentColor: '#52b788',
    skyGradient: 'from-[#f1f8f3] via-[#e2f0e6] to-[#f7fbf8]',
    iconName: 'Trees',
    themeNote: 'A tranquilidade do cerrado, o silêncio da natureza e o foco nos estudos com paciência e constância.',
    landmarkSvgType: 'fercal_monument',
    articles: [
      {
        title: 'Monumento "Eu ❤️ Fercal" — Letreiro da Cidade',
        url: '#',
        image: 'fercal_letreiro',
        date: 'Fercal, DF',
        language: 'pt',
        readTime: 'Origens',
        excerpt: 'Símbolo da cidade rodeado pelo verde, ar puro e a tranquilidade da Fercal no Distrito Federal.',
        tags: ['Eu ❤️ Fercal', 'Distrito Federal', 'Natureza', 'Origem']
      },
      {
        title: 'Vista Panorâmica da Fercal — Capital do Calcário (RA XXXI)',
        url: '#',
        image: 'fercal_panoramica',
        date: 'Sobradinho / Fercal',
        language: 'pt',
        readTime: 'Geografia',
        excerpt: 'Visão aérea deslumbrante das colinas, do relevo característico e da cidade iluminada ao anoitecer.',
        tags: ['RA XXXI', 'Capital do Calcário', 'Sobradinho', 'DF']
      }
    ]
  },
  {
    key: 'taupe',
    name: 'taupe',
    label: 'web / AI / automation',
    title: 'taupe',
    role: 'Practical notes on web and AI',
    description: 'Experiments and operating notes on web development, AI, automation, and the tools used in everyday work.',
    url: 'https://taupe.site/',
    event: 'connect',
    xStart: 6400,
    xEnd: 8400,
    color: '#6c584c',
    accentColor: '#a98467',
    skyGradient: 'from-[#f9f7f4] via-[#ede7df] to-[#faf8f5]',
    iconName: 'Cpu',
    themeNote: 'Real-world deployment of autonomous LLM pipelines and local inference',
    landmarkSvgType: 'ai_terminal',
    articles: [
      {
        title: 'Codexを使いすぎるので、Mac miniにOllamaを常駐させてみた',
        url: 'https://taupe.site/entry/mac-mini-ollama-local-llm-codex-usage/',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.08',
        language: 'ja',
        readTime: '7 min',
        excerpt: 'Running Ollama continuously on an M-series Mac mini to offload routine CLI code tasks from external APIs.',
        tags: ['Local LLM', 'Ollama', 'Mac mini']
      },
      {
        title: '複数のCodexタスクを「AI会社」として可視化する',
        url: 'https://taupe.site/entry/codex-ai-company-visualization/',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.06',
        language: 'ja',
        readTime: '9 min',
        excerpt: 'Organizing multi-agent Codex execution loops as departmental roles with kanban boards and telemetry.',
        tags: ['Agentic AI', 'Multi-Agent', 'Visualization']
      },
      {
        title: 'Codexを事業運用に使って分かった、AI時代のタスク管理',
        url: 'https://taupe.site/entry/ai-agent-task-management-single-source-of-truth/',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
        date: '2026.07.29',
        language: 'ja',
        readTime: '11 min',
        excerpt: 'Key insights from managing business operations with autonomous AI agents and maintaining a single source of truth.',
        tags: ['Business Ops', 'System Design', 'Workflow']
      }
    ]
  },
  {
    key: 'islog',
    name: 'isLog',
    label: 'travel / food / daily records',
    title: 'isLog',
    role: 'Travel and food, recorded as lived',
    description: 'Travel, meals, places, and ordinary days preserved in the order they were experienced.',
    url: 'https://www.islog.jp/',
    event: 'capture',
    xStart: 9000,
    xEnd: 10800,
    color: '#b86236',
    accentColor: '#d68054',
    skyGradient: 'from-[#fbf6f2] via-[#f7eae1] to-[#faf5f0]',
    iconName: 'Compass',
    themeNote: 'Quiet journeys across ancient towns, seasonal cafes, and hot springs',
    landmarkSvgType: 'tea_house',
    articles: [
      {
        title: '石岡「GINGER FARM KITCHEN」チェンマイ発のタイ料理店でランチセットとカオソーイ',
        url: 'https://www.islog.jp/entry/ginger-farm-kitchen-ishioka-thai-lunch/',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.12',
        language: 'ja',
        readTime: '5 min',
        excerpt: 'Chiang Mai-origin Thai restaurant in Ishioka enjoying fresh lunch sets and authentic Khao Soi.',
        tags: ['Thai Cuisine', 'Ishioka', 'Food Walk']
      },
      {
        title: '潮来「蔵cafe 氷菓ふわり」大谷石の米蔵で食べる、ふわふわの天然氷かき氷',
        url: 'https://www.islog.jp/entry/kuracafe-hyouka-fuwari-itako-kakigori/',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.05',
        language: 'ja',
        readTime: '4 min',
        excerpt: 'Fluffy natural shaved ice served inside a historic Oya stone rice warehouse in Itako.',
        tags: ['Cafe', 'Heritage', 'Dessert']
      },
      {
        title: '香取の黒湯「カーニバルヒルズ」へ！体へのご褒美温泉と食堂さわの昼ごはん',
        url: 'https://www.islog.jp/entry/carnival-hills-kuroyu-onsen-katori/',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80',
        date: '2026.07.20',
        language: 'ja',
        readTime: '6 min',
        excerpt: 'Dark mineral onsen healing in Katori paired with hearty traditional diner lunch.',
        tags: ['Onsen', 'Hot Springs', 'Wellbeing']
      }
    ]
  },
  {
    key: 'ojicra',
    name: 'Ojicra',
    label: 'Minecraft / long-running world',
    title: 'Ojicra',
    role: 'A suited man building a life in Minecraft',
    description: 'A long-running Minecraft record where a suited man builds, explores, and preserves the history of one world.',
    url: 'https://ojicra.tokyo/',
    event: 'build',
    xStart: 11400,
    xEnd: 13400,
    color: '#2a5a7b',
    accentColor: '#4f83a8',
    skyGradient: 'from-[#f2f6fa] via-[#e2ecf5] to-[#f4f7fa]',
    iconName: 'Box',
    themeNote: 'Over 8 years building a single persistent world with medieval architecture',
    landmarkSvgType: 'minecraft_castle',
    articles: [
      {
        title: 'マイクラ 城下町に半自動牛牧場を建築！革と焼き牛肉を回収｜おじクラシーズン3 #55',
        url: 'https://ojicra.tokyo/minecraft-season3-55-semi-auto-cow-farm-leather-steak/',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.17',
        language: 'ja',
        readTime: '8 min',
        excerpt: 'Constructing a semi-automated cattle ranch integrated seamlessly into the castle town architecture.',
        tags: ['Minecraft', 'Redstone', 'Castle Town']
      },
      {
        title: 'マイクラ 古代の残骸は何個必要？ネザライト装備・全身防具・道具別に計算',
        url: 'https://ojicra.tokyo/minecraft-memo-ancient-debris-netherite-required-count/',
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.17',
        language: 'ja',
        readTime: '4 min',
        excerpt: 'Calculations and farming strategies for Ancient Debris needed for complete Netherite armor sets.',
        tags: ['Nether', 'Survival Guide', 'Optimization']
      },
      {
        title: 'マイクラ 製図所の隣に自動サトウキビ収穫機を建築！紙を作って製図家と取引｜おじクラシーズン3 #54',
        url: 'https://ojicra.tokyo/minecraft-season3-54-auto-sugar-cane-farm-cartographer-trade/',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.15',
        language: 'ja',
        readTime: '7 min',
        excerpt: 'Automated sugar cane farm built adjacent to the cartographer atelier for emerald trading loops.',
        tags: ['Trading', 'Architecture', 'Season 3']
      }
    ]
  },
  {
    key: 'monoomoi',
    name: 'Monoomoi',
    label: 'gifts / people / everyday life',
    title: 'Monoomoi',
    role: 'A gift publication connecting people',
    description: 'A media publication about gifts, useful objects, and the feelings that pass from one person to another.',
    url: 'https://monoomoi.net/',
    event: 'unwrap',
    xStart: 13900,
    xEnd: 15300,
    color: '#8b3a4a',
    accentColor: '#b85d6e',
    skyGradient: 'from-[#fbf4f5] via-[#f7e6e9] to-[#faf5f6]',
    iconName: 'Gift',
    themeNote: 'Thoughtful selection of items that convey gratitude and lifelong utility',
    landmarkSvgType: 'gift_atelier',
    articles: [
      {
        title: 'MARUTO『PENTA』｜荷物が多い日も安心！容量20cmアップできる2段式前カゴカバー',
        url: 'https://monoomoi.net/maruto-penta/',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.19',
        language: 'ja',
        readTime: '5 min',
        excerpt: '2-tier expandable basket cover adding 20cm height for rainproof daily commuting and gifting.',
        tags: ['Everyday Goods', 'Practical', 'Design']
      },
      {
        title: '自分でデザインできる！本革32色『バイカラースマホケース』',
        url: 'https://monoomoi.net/smartphone-case-32/',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.19',
        language: 'ja',
        readTime: '6 min',
        excerpt: 'Customizable genuine leather dual-tone smartphone cases across 32 artisanal colorways.',
        tags: ['Leather', 'Custom Gift', 'Craftsmanship']
      },
      {
        title: 'Diane『速乾ドライヘアスプレー』｜ドライヤー時間を短縮しながら、潤いまとまる髪へ',
        url: 'https://monoomoi.net/diane-quick-drying-hair-spray/',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.17',
        language: 'ja',
        readTime: '4 min',
        excerpt: 'Thermal quick-dry hair mist reducing blow dry time while sealing moisture.',
        tags: ['Self Care', 'Time Saver', 'Wellness']
      }
    ]
  },
  {
    key: 'monoerabi',
    name: 'Monoerabi Editorial',
    label: 'products / selection / editorial',
    title: 'Monoerabi Editorial',
    role: 'How to choose tools for everyday life',
    description: 'An editorial guide to comparing products and choosing tools that fit a particular use and way of living.',
    url: 'https://monoerabi.jp/',
    event: 'choose',
    xStart: 15600,
    xEnd: 17200,
    color: '#2b626d',
    accentColor: '#458b99',
    skyGradient: 'from-[#f2f7f8] via-[#e1eff2] to-[#f4f8f9]',
    iconName: 'Layers',
    themeNote: 'Deep comparative testing with objective criteria and long-term durability metrics',
    landmarkSvgType: 'editorial_desk',
    articles: [
      {
        title: '充電ケーブルを忘れず軽快に持ち歩く｜エレコム EC-AC12835の選び方',
        url: 'https://monoerabi.jp/items/elecom-ec-ac12835-retractable-usb-c-charger/',
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.19',
        language: 'ja',
        readTime: '6 min',
        excerpt: 'Retractable USB-C wall charger evaluation: portability vs heating benchmarks in real travel bag tests.',
        tags: ['Chargers', 'Tech Gear', 'Editorial Pick']
      },
      {
        title: '出張の充電ケーブルを一本減らす｜Anker A2658の使い方と注意点',
        url: 'https://monoerabi.jp/items/anker-nano-charger-a2658-retractable-cable/',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.18',
        language: 'ja',
        readTime: '7 min',
        excerpt: 'Testing Anker Nano retractable 30W charging brick to eliminate redundant cords from travel kits.',
        tags: ['Anker', 'Travel Essentials', 'Comparative']
      },
      {
        title: 'お風呂やキャンプへ音楽を持ち出す｜Soundcore Boom Go 3iの選び方',
        url: 'https://monoerabi.jp/items/soundcore-boom-go-3i-portable-speaker/',
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80',
        date: '2026.08.16',
        language: 'ja',
        readTime: '5 min',
        excerpt: 'Waterproof portable audio benchmarks across bath acoustic reflections and outdoor open fields.',
        tags: ['Audio', 'Outdoor', 'Acoustics']
      }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'rpg-app',
    title: 'RPG Application',
    tagline: 'Aplicativo de RPG interativo com mecânicas de atributos, personagens e combate',
    description: 'Primeiro projeto prático de programação focado no desenvolvimento de um sistema completo de RPG e lógica de jogos.',
    fullOverview: 'Desenvolvido por Giovanni Feliciano de Jesus, o aplicativo de RPG é o projeto prático inaugural na sua jornada em TI. Explora estruturas de dados, lógica de progressão de níveis, classes, cálculo de atributos de personagens e narrativa interativa.',
    repoUrl: 'https://github.com/giovanni-fj',
    version: 'v0.1.0-dev',
    languages: ['Python', 'Lógica de Programação', 'Data Structures'],
    license: 'MIT',
    installCommand: 'git clone https://github.com/giovanni-fj/rpg-app.git',
    highlightFeatures: [
      'Sistema de criação e gerenciamento de fichas de personagens',
      'Cálculo dinâmico de atributos e fórmulas de combate',
      'Estrutura modular para fácil expansão de quests e itens',
      'Foco em boas práticas de programação e legibilidade de código'
    ],
    metrics: [
      { label: 'Status', value: 'Em Desenvolvimento' },
      { label: 'Foco', value: 'Lógica & RPG' },
      { label: 'Autor', value: 'Giovanni.FJ' }
    ]
  },
  {
    id: 'codex-healthkit',
    title: 'codex-healthkit',
    tagline: 'Metadata-only health checks for local Codex CLI & agent environments',
    description: 'A metadata-only health check for local Codex CLI environments that strictly avoids credentials and conversation content.',
    fullOverview: 'codex-healthkit conducts non-intrusive diagnostics on local LLM runtimes, validating token pipelines, process memory footprints, and daemon availability without scanning private user prompt sessions or secret keys.',
    repoUrl: 'https://github.com/Ishikawa-Hidekazu/codex-healthkit',
    pypiUrl: 'https://pypi.org/project/codex-healthkit/0.4.1/',
    version: 'v0.4.1',
    languages: ['Python 3.11+', 'Shell', 'Bash'],
    license: 'MIT',
    installCommand: 'pip install codex-healthkit==0.4.1',
    highlightFeatures: [
      'Zero-credential leakage telemetry',
      'Instant memory & IPC process daemon health checks',
      'JSON structured diagnostic output for automated CI',
      'Compatible with macOS (Apple Silicon), Linux, and Docker containers'
    ],
    metrics: [
      { label: 'PyPI Downloads', value: '14.2k+' },
      { label: 'Latency Overhead', value: '< 18ms' },
      { label: 'Security Score', value: '100% Zero-PII' }
    ]
  },
  {
    id: 'public-source-extractor',
    title: 'public-source-extractor',
    tagline: 'CLI converting public web pages into clean Markdown or versioned JSON for LLM RAG pipelines',
    description: 'A fast CLI that converts public HTTP and HTTPS pages into structured Markdown or versioned JSON for research and AI workflows.',
    fullOverview: 'Engineered specifically for feeding high-signal context into AI models. Strips navigation boilerplate, advertisements, and cookie banners while retaining document hierarchies, code fences, and image caption metadata.',
    repoUrl: 'https://github.com/Ishikawa-Hidekazu/public-source-extractor',
    pypiUrl: 'https://pypi.org/project/public-source-extractor/0.1.0a2/',
    version: 'v0.1.0-alpha.2',
    languages: ['Python', 'Asyncio', 'BeautifulSoup4'],
    license: 'MIT',
    installCommand: 'pip install public-source-extractor',
    highlightFeatures: [
      'Semantic tree distillation for LLM context windows',
      'Deterministic versioned JSON snapshots with cryptographic hashes',
      'Automatic table and math LaTeX preservation',
      'Batch URL parallel extraction with rate-limit respect'
    ],
    metrics: [
      { label: 'Tokens Saved', value: '68% reduction' },
      { label: 'Parse Speed', value: '45 pages/sec' },
      { label: 'PyPI Version', value: '0.1.0-alpha.2' }
    ]
  },
  {
    id: 'walkable-atlas-engine',
    title: 'walkable-atlas-engine',
    tagline: 'Micro 2D parallax physics engine & Living Atlas state manager for web portfolios',
    description: 'The open-source interactive canvas and character state machine powering the Walkable Atlas experience.',
    fullOverview: 'A high-performance TypeScript engine delivering 60fps horizontal parallax scrolling, procedural audio synthesizer, touch gesture mapping, and seamless transition into document-oriented atlas layouts.',
    repoUrl: 'https://github.com/Ishikawa-Hidekazu',
    version: 'v2.6.0',
    languages: ['TypeScript', 'Canvas 2D', 'Web Audio API', 'React'],
    license: 'MIT',
    installCommand: 'npm i @walkable/atlas-engine',
    highlightFeatures: [
      'Lightweight (< 12KB gzip) zero-canvas-lag renderer',
      'Procedural harmonic synthesizer using Web Audio API',
      'Dual-act state management (Journey Stage -> Document Atlas)',
      'Constellation generator with SVG/PNG keepsake export'
    ],
    metrics: [
      { label: 'CSSDA Awards', value: '4 Distinctions' },
      { label: 'Frame Rate', value: '60 FPS stable' },
      { label: 'Bundle Size', value: '9.4 KB gzip' }
    ]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'consulting',
    title: 'Web, Systems, SEO & LLM Visibility',
    typeBadge: 'web / systems / search and llm visibility',
    description: 'Planning, architectural design, and implementation for websites and business systems, including technical SEO, LLM search visibility, rich structured data schema, performance, internal navigation pathways, and post-launch telemetry.',
    deliverables: [
      'Technical Architecture & Codebase Modernization',
      'LLM Retrieval & Search Engine Visibility Audit (GEO / AI SEO)',
      'Schema.org Structured Data Implementation & Validation',
      'Core Web Vitals Speed & Accessibility Hardening'
    ],
    suitableFor: 'Startups, digital publications, and enterprises scaling their web visibility in the generative AI era.',
    approach: 'Direct hands-on engineering grounded in 20+ years of production experience.'
  },
  {
    id: 'operation',
    title: 'Media Operations, AI & Automation',
    typeBadge: 'operation / automation',
    description: 'Practical support for media operations, AI workflow orchestration, recurring-work automation, telemetry measurement, and custom tooling—tested and battle-proven across my own 6 continuous publications.',
    deliverables: [
      'Custom LLM Editorial Copilots & CLI Tooling',
      'Automated Content Ingestion & Multi-channel Publishing Pipelines',
      'Data-driven Editorial Analytics & Real-time Dashboards',
      'Single-source-of-truth Task & Asset Management'
    ],
    suitableFor: 'Editorial teams, content creators, and agencies seeking to multiply operational throughput with AI.',
    approach: 'Systems designed to augment human craftsmanship rather than replace authentic judgment.'
  },
  {
    id: 'writing',
    title: 'Writing, Review & Editorial Placement',
    typeBadge: 'writing / review / placement',
    description: 'In-depth long-form writing, technical articles, hardware & outdoor tool reviews, thought leadership essays, and strategic editorial placements—with direct first-hand experience strictly separated from verifiable technical facts.',
    deliverables: [
      'Comprehensive Hardware & Software In-depth Reviews',
      'Technical Whitepapers & Engineering Deep Dives',
      'Outdoor, Fishing & Lifestyle Fieldwork Reports',
      'Curated Placement & Editorial Advisory'
    ],
    suitableFor: 'Tech manufacturers, developer tool companies, outdoor brands, and quality-first publications.',
    approach: 'Honest, verifiable reporting based on genuine daily usage and empirical testing.'
  }
];

export const AWARDS_DATA: Award[] = [
  {
    id: 'cssda-kudos',
    title: 'Special Kudos 2026',
    subtitle: 'Judges Recognition',
    category: 'CSS Design Awards',
    year: '2026',
    url: 'https://www.cssdesignawards.com/sites/ishikawa-co-walkable-atlas/49836/',
    badgeColor: '#eab308',
    badgeBg: '#fef9c3'
  },
  {
    id: 'cssda-ui',
    title: 'Best UI Design 2026',
    subtitle: 'Public Vote Award',
    category: 'CSS Design Awards',
    year: '2026',
    url: 'https://www.cssdesignawards.com/sites/ishikawa-co-walkable-atlas/49836/',
    badgeColor: '#9333ea',
    badgeBg: '#f3e8ff'
  },
  {
    id: 'cssda-ux',
    title: 'Best UX Design 2026',
    subtitle: 'Public Vote Award',
    category: 'CSS Design Awards',
    year: '2026',
    url: 'https://www.cssdesignawards.com/sites/ishikawa-co-walkable-atlas/49836/',
    badgeColor: '#ea580c',
    badgeBg: '#ffedd5'
  },
  {
    id: 'cssda-inn',
    title: 'Best Innovation 2026',
    subtitle: 'Public Vote Award',
    category: 'CSS Design Awards',
    year: '2026',
    url: 'https://www.cssdesignawards.com/sites/ishikawa-co-walkable-atlas/49836/',
    badgeColor: '#16a34a',
    badgeBg: '#dcfce7'
  }
];

export const UI_STRINGS: Record<Language, Record<string, string>> = {
  en: {
    brand: 'GIOVANNI.FJ',
    act1: 'ACT I',
    act2: 'ACT II',
    viewAtlas: 'View the atlas',
    returnWorld: 'Return to the world',
    walkTheWorldsAgain: 'Walk the worlds again',
    language: 'LANGUAGE',
    walkHelp: 'Walk with A / D or Arrow Keys. Press Space to jump.',
    exploreHelp: 'Press E or click Explore when near a landmark.',
    explore: 'Explore',
    jump: 'Jump',
    sprint: 'Sprint',
    soundOn: 'Turn sound on',
    soundOff: 'Turn sound off',
    entranceToAct2: 'Entrance to Act II',
    journeyMap: 'Journey map',
    act2Headline: 'The worlds behind Giovanni.FJ’s work',
    act2Sub: 'Beyond the worlds you have walked',
    act2Summary: 'Six independent media publications, practical work in web and AI, open-source tools, and ways to work together. Scroll on to see where the journey leads today.',
    act1YourWalk: 'ACT I / YOUR WALK',
    walkMemoryIntro: 'The colors found in Act I continue into this map in the order they were walked.',
    aboutTitle: 'About Giovanni.FJ',
    aboutBio: 'I operate this site and its creative media publications, focusing on web development, system architecture, open source, and interactive computing.',
    mediaTitle: 'Media I operate',
    viewAllMedia: 'View all media',
    projectsTitle: 'Open source & development projects',
    viewProjects: 'View public repositories',
    servicesTitle: 'Ways I can help',
    viewServices: 'View areas of work',
    recognitionTitle: 'Walkable Atlas received four distinctions',
    recognitionSummary: 'Walkable Atlas received CSS Design Awards Special Kudos and the public-vote awards for Best UI Design, Best UX Design, and Best Innovation in 2026.',
    viewAwards: 'View CSSDA award page',
    readMakingOf: 'Read how Walkable Atlas was made',
    saveKeepsake: 'Save your constellation',
    downloadSouvenir: 'Download Journey Keepsake',
    copyCommand: 'Copy Command',
    copied: 'Copied!',
    inspectProject: 'Inspect Project',
    allArticles: 'All Articles',
    filterByWorld: 'Filter by World',
    contactTitle: 'Start a Conversation',
    contactSub: 'Interested in working together or exploring a collaboration?',
    sendInquiry: 'Send Inquiry',
    namePlaceholder: 'Your name or organization',
    emailPlaceholder: 'your.email@domain.com',
    messagePlaceholder: 'Tell me about your project, timeline, and goals...',
    inquirySuccess: 'Thank you! Your message has been received.',
    profile: 'Profile',
    github: 'GitHub',
    xSocial: 'X (Twitter)',
    privacy: 'Privacy',
    contact: 'Contact',
    copyright: '© 2026 Giovanni.FJ'
  },
  pt: {
    brand: 'GIOVANNI.FJ',
    act1: 'ATO I',
    act2: 'ATO II',
    viewAtlas: 'Ver o Atlas Vivo',
    returnWorld: 'Voltar ao Mundo',
    walkTheWorldsAgain: 'Percorrer os Mundos Novamente',
    language: 'IDIOMA',
    walkHelp: 'Ande com A / D ou Setas. Pressione Espaço para pular.',
    exploreHelp: 'Pressione E ou clique Explorar perto de um marco.',
    explore: 'Explorar',
    jump: 'Pular',
    sprint: 'Correr',
    soundOn: 'Ativar som',
    soundOff: 'Desativar som',
    entranceToAct2: 'Entrada para o Ato II',
    journeyMap: 'Mapa de Jornada',
    act2Headline: 'Os mundos por trás do trabalho de Giovanni.FJ',
    act2Sub: 'Além dos mundos que você percorreu',
    act2Summary: 'Seis publicações de mídia independentes, trabalho prático em Web e IA, ferramentas de código aberto e maneiras de colaborar. Role para ver para onde a jornada leva hoje.',
    act1YourWalk: 'ATO I / SUA CAMINHADA',
    walkMemoryIntro: 'As cores descobertas no Ato I continuam neste mapa na ordem em que foram percorridas.',
    aboutTitle: 'Sobre Giovanni.FJ',
    aboutBio: 'Eu administro este site e suas publicações criativas. Atuo em desenvolvimento web, sistemas, arquitetura de software e exploração interativa.',
    mediaTitle: 'Mídias que opero',
    viewAllMedia: 'Ver todas as mídias',
    projectsTitle: 'Projetos Open Source & Desenvolvimento',
    viewProjects: 'Ver repositórios públicos',
    servicesTitle: 'Como posso ajudar',
    viewServices: 'Ver áreas de atuação',
    recognitionTitle: 'Walkable Atlas recebeu quatro distinções',
    recognitionSummary: 'O Walkable Atlas recebeu o CSS Design Awards Special Kudos e os prêmios por votação pública de Melhor UI, Melhor UX e Melhor Inovação em 2026.',
    viewAwards: 'Ver página no CSSDA',
    readMakingOf: 'Como o Walkable Atlas foi feito',
    saveKeepsake: 'Salvar sua constelação',
    downloadSouvenir: 'Baixar Lembrança da Jornada',
    copyCommand: 'Copiar Comando',
    copied: 'Copiado!',
    inspectProject: 'Inspecionar Projeto',
    allArticles: 'Todos os Artigos',
    filterByWorld: 'Filtrar por Mundo',
    contactTitle: 'Iniciar uma Conversa',
    contactSub: 'Interessado em colaborar ou iniciar um novo projeto?',
    sendInquiry: 'Enviar Mensagem',
    namePlaceholder: 'Seu nome ou organização',
    emailPlaceholder: 'seu.email@dominio.com',
    messagePlaceholder: 'Conte-me sobre o seu projeto, prazos e objetivos...',
    inquirySuccess: 'Obrigado! Sua mensagem foi enviada com sucesso.',
    profile: 'Perfil',
    github: 'GitHub',
    xSocial: 'X (Twitter)',
    privacy: 'Privacidade',
    contact: 'Contato',
    copyright: '© 2026 Giovanni.FJ'
  },
  ja: {
    brand: 'GIOVANNI.FJ',
    act1: 'ACT I',
    act2: 'ACT II',
    viewAtlas: 'Atlas（地図）を見る',
    returnWorld: '世界へ戻る',
    walkTheWorldsAgain: 'もう一度世界を歩く',
    language: 'LANGUAGE',
    walkHelp: 'A/D または 左右キーで歩く。スペースでジャンプ。',
    exploreHelp: 'ランドマークの近くで E または 探索 を押してください。',
    explore: '探索する',
    jump: 'ジャンプ',
    sprint: '走る',
    soundOn: '音声をオン',
    soundOff: '音声をオフ',
    entranceToAct2: '第2幕への入口',
    journeyMap: '旅の地図',
    act2Headline: 'Giovanni.FJの仕事の背景にある世界',
    act2Sub: 'あなたが歩いた世界の先へ',
    act2Summary: '6つの独立したメディア、WebとAIの実務、オープンソース開発、そして執筆と制作。旅が今日どこへ向かうのかをご覧ください。',
    act1YourWalk: '第1幕 / あなたの歩み',
    walkMemoryIntro: '第1幕で見つけた色彩が、歩いた順序のままこの地図へと続いていきます。',
    aboutTitle: 'Giovanni.FJについて',
    aboutBio: '当サイトおよびWebメディアを運営。Web開発やシステム開発に携わりながら、オープンソースやインタラクティブな表現を発信しています。',
    mediaTitle: '運営しているメディア',
    viewAllMedia: 'すべてのメディアを見る',
    projectsTitle: 'オープンソースと開発プロジェクト',
    viewProjects: '公開プロジェクトを見る',
    servicesTitle: 'お手伝いできること',
    viewServices: '業務領域を見る',
    recognitionTitle: 'Walkable Atlasが4つの賞を受賞',
    recognitionSummary: 'Walkable Atlasは、CSS Design Awards 2026においてSpecial Kudos、Best UI、Best UX、Best Innovationを受賞しました。',
    viewAwards: 'CSSDA受賞ページを見る',
    readMakingOf: 'Walkable Atlasの制作背景を読む',
    saveKeepsake: '旅の星座を保存',
    downloadSouvenir: '旅の思い出カードをダウンロード',
    copyCommand: 'コマンドをコピー',
    copied: 'コピーしました',
    inspectProject: 'プロジェクト詳細',
    allArticles: 'すべての記事',
    filterByWorld: 'メディアで絞り込み',
    contactTitle: 'お問い合わせ・ご相談',
    contactSub: '制作・開発・取材・執筆のご相談はこちらからどうぞ。',
    sendInquiry: 'メッセージを送信',
    namePlaceholder: 'お名前 または 会社名',
    emailPlaceholder: 'your.email@domain.com',
    messagePlaceholder: 'ご相談内容やスケジュールなどをご記入ください...',
    inquirySuccess: 'ありがとうございます！メッセージを受け付けました。',
    profile: 'プロフィール',
    github: 'GitHub',
    xSocial: 'X (Twitter)',
    privacy: 'プライバシーポリシー',
    contact: 'お問い合わせ',
    copyright: '© 2026 Giovanni.FJ'
  }
};
