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
    name: 'Marco 7.4 km',
    label: 'marco / 7.4 km',
    title: 'Marco 7.4 km',
    role: 'Ponto de parada e observação',
    description: 'Marco de observação e parada localizado no quilômetro 7.4 da caminhada.',
    url: '#',
    event: 'connect',
    xStart: 6400,
    xEnd: 8400,
    color: '#6c584c',
    accentColor: '#a98467',
    skyGradient: 'from-[#f9f7f4] via-[#ede7df] to-[#faf8f5]',
    iconName: 'Cpu',
    themeNote: 'Marco de parada e observação ao longo do percurso.',
    landmarkSvgType: 'ai_terminal',
    articles: []
  },
  {
    key: 'islog',
    name: 'Marco 9.9 km',
    label: 'marco / 9.9 km',
    title: 'Marco 9.9 km',
    role: 'Ponto de descanso no percurso',
    description: 'Espaço de descanso e contemplação localizado no quilômetro 9.9 da caminhada.',
    url: '#',
    event: 'capture',
    xStart: 9000,
    xEnd: 10800,
    color: '#b86236',
    accentColor: '#d68054',
    skyGradient: 'from-[#fbf6f2] via-[#f7eae1] to-[#faf5f0]',
    iconName: 'Compass',
    themeNote: 'Espaço de descanso e contemplação ao longo do percurso.',
    landmarkSvgType: 'tea_house',
    articles: []
  },
  {
    key: 'ojicra',
    name: 'Marco 12.4 km',
    label: 'marco / 12.4 km',
    title: 'Marco 12.4 km',
    role: 'Mirante e fortificação no percurso',
    description: 'Torre de vigia e mirante com visão panorâmica do trajeto no quilômetro 12.4.',
    url: '#',
    event: 'build',
    xStart: 11400,
    xEnd: 13400,
    color: '#2a5a7b',
    accentColor: '#4f83a8',
    skyGradient: 'from-[#f2f6fa] via-[#e2ecf5] to-[#f4f7fa]',
    iconName: 'Box',
    themeNote: 'Torre de vigia e mirante com visão panorâmica do trajeto.',
    landmarkSvgType: 'minecraft_castle',
    articles: []
  },
  {
    key: 'monoomoi',
    name: 'Marco 14.6 km',
    label: 'marco / 14.6 km',
    title: 'Marco 14.6 km',
    role: 'Ponto de parada e reflexão',
    description: 'Espaço acolhedor e atelier de parada localizado no quilômetro 14.6 da caminhada.',
    url: '#',
    event: 'unwrap',
    xStart: 13900,
    xEnd: 15300,
    color: '#8b3a4a',
    accentColor: '#b85d6e',
    skyGradient: 'from-[#fbf4f5] via-[#f7e6e9] to-[#faf5f6]',
    iconName: 'Gift',
    themeNote: 'Espaço acolhedor e atelier de parada ao longo do percurso.',
    landmarkSvgType: 'gift_atelier',
    articles: []
  },
  {
    key: 'monoerabi',
    name: 'Marco 16.4 km',
    label: 'marco / 16.4 km',
    title: 'Marco 16.4 km',
    role: 'Ponto de observação final',
    description: 'Último marco de observação antes do portal que conduz ao final da jornada no quilômetro 16.4.',
    url: '#',
    event: 'choose',
    xStart: 15600,
    xEnd: 17200,
    color: '#2b626d',
    accentColor: '#458b99',
    skyGradient: 'from-[#f2f7f8] via-[#e1eff2] to-[#f4f8f9]',
    iconName: 'Layers',
    themeNote: 'Último marco de observação antes do portal que conduz ao final da jornada.',
    landmarkSvgType: 'editorial_desk',
    articles: []
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
  }
};
