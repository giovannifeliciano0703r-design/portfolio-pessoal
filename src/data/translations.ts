import { Language, Project, WorldArea, WorldKey } from '../types';

export const APP_COPY = {
  pt: {
    quickTravelTitle: 'Viagem Rápida / Marcos do Mundo',
    landmarks: 'Marcos',
    origin: 'Origem',
    biography: 'Biografia',
    walk: 'Andar',
    jump: 'Pular',
    sprint: 'Correr',
    explore: 'Explorar',
    viewBiography: 'Ver Biografia',
    keepExploring: 'Continuar Explorando',
    worldJourney: 'Jornada do Mundo',
    stoppingPoint: 'Ponto de Parada',
    stoppingPointText: 'Você alcançou este marco ao longo da caminhada. Siga em frente pelo percurso para descobrir os próximos trechos e monumentos.',
    milestone: 'marco',
    originPhotos: 'Fotografias de Origem • Fercal, Distrito Federal',
    twoPhotos: '2 fotos',
    citySign: 'Letreiro da Cidade',
    aerialView: 'Vista Aérea',
    fercalMonument: 'Monumento "Eu ❤️ Fercal"',
    fercalMonumentText: 'Foto original do letreiro da Fercal. Clique para abrir a publicação no Instagram.',
    fercalPanorama: 'Vista Panorâmica da Fercal',
    fercalPanoramaText: 'Vista aérea da Fercal. Clique para abrir a publicação original no Instagram.',
    openFercalSign: 'Abrir a foto do letreiro da Fercal no Instagram',
    openFercalPanorama: 'Abrir a vista panorâmica da Fercal no Instagram',
    openInstagram: 'Abrir esta foto no Instagram',
    signAlt: 'Letreiro Eu amo Fercal em meio ao verde da cidade',
    panoramaAlt: 'Vista aérea panorâmica da Fercal com relevo, cidade e área de mineração',
    closeCard: 'Fechar cartão',
    close: 'Fechar',
    act2Gate: 'ATO II // ATLAS VIVO',
    enter: 'ENTRAR ➔',
    livingAtlas: 'ATLAS VIVO',
    projectArchitecture: 'Arquitetura do Sistema & Decisões',
    projectCapabilities: 'Principais Capacidades Técnicas',
    githubRepository: 'Repositório no GitHub',
    pypiPackage: 'Pacote PyPI',
    license: 'Licença',
    copyClipboard: 'Copiar para a área de transferência',
    keepsakeTitle: 'GIOVANNI.FJ  //  CONSTELAÇÃO DO ATLAS CAMINHÁVEL',
    keepsakeSubtitle: 'REGISTRO DOS CAMINHOS PERCORRIDOS PELOS 6 MUNDOS CRIATIVOS',
    walked: '★ PERCORRIDO',
    explorerStamp: 'REGISTRO DO EXPLORADOR',
    worldsDiscovered: 'MUNDOS DESCOBERTOS',
    date: 'DATA',
    keepsakeMemory: 'memórias arquivadas no seu cartão de constelação.',
    profileEyebrow: 'PERFIL DO DESENVOLVEDOR',
    age: '19 anos',
    role: 'Estudante de Tecnologia & Desenvolvedor',
    biographyTitle: 'Biografia',
    bio1: 'Meu nome é Giovanni Feliciano de Jesus, tenho 19 anos e estou construindo minha trajetória em Tecnologia da Informação. Já concluí formações em Redes, Python e Linux, e sigo ampliando meus conhecimentos com cursos práticos voltados a programação, inteligência artificial e uso profissional de computadores.',
    bio2: 'Meu foco é evoluir como desenvolvedor por meio de projetos reais. Entre eles estão um aplicativo de RPG e um site para o SENAI, que uso para praticar lógica, desenvolvimento web, organização de interfaces e resolução de problemas.',
    education: 'Formação & Certificações',
    networkBasics: 'Fundamentos de Redes',
    pythonBasics: 'Python Básico',
    linuxCourse: 'Linux',
    microAi: 'Operador de Microcomputador com IA',
    python2: 'Python 2',
    completed: 'Concluído',
    inProgress: 'Em andamento',
    featuredProject: 'PROJETO PRÁTICO EM DESENVOLVIMENTO',
    rpgApp: 'Aplicativo de RPG',
    rpgDescription: 'Projeto prático de programação focado em um sistema interativo de RPG, com lógica de atributos, mecânicas de jogo, progressão de personagens e experiência imersiva.',
    creating: 'v0.1 / Em Criação',
    logic: 'Python / Lógica',
    gameDesign: 'Design de Jogos',
    rpgSystems: 'Sistemas de RPG',
    learningDaily: 'Construindo conhecimento todos os dias',
    pageTitle: 'Giovanni.FJ — Portfólio Interativo',
    pageDescription: 'Portfólio interativo de Giovanni Feliciano de Jesus, com projetos, formação, certificações e uma jornada navegável.'
  },
  en: {
    quickTravelTitle: 'Fast Travel / World Milestones',
    landmarks: 'Milestones',
    origin: 'Origin',
    biography: 'Biography',
    walk: 'Walk',
    jump: 'Jump',
    sprint: 'Sprint',
    explore: 'Explore',
    viewBiography: 'View Biography',
    keepExploring: 'Keep Exploring',
    worldJourney: 'World Journey',
    stoppingPoint: 'Stopping Point',
    stoppingPointText: 'You reached this milestone during the journey. Keep moving forward to discover the next areas and monuments.',
    milestone: 'milestone',
    originPhotos: 'Origin Photography • Fercal, Federal District',
    twoPhotos: '2 photos',
    citySign: 'City Sign',
    aerialView: 'Aerial View',
    fercalMonument: '"I ❤️ Fercal" Monument',
    fercalMonumentText: 'Original photo of the Fercal city sign. Click to open the Instagram post.',
    fercalPanorama: 'Panoramic View of Fercal',
    fercalPanoramaText: 'Aerial view of Fercal. Click to open the original Instagram post.',
    openFercalSign: 'Open the Fercal sign photo on Instagram',
    openFercalPanorama: 'Open the panoramic Fercal view on Instagram',
    openInstagram: 'Open this photo on Instagram',
    signAlt: 'I love Fercal city sign surrounded by the city’s greenery',
    panoramaAlt: 'Panoramic aerial view of Fercal showing terrain, city and mining area',
    closeCard: 'Close card',
    close: 'Close',
    act2Gate: 'ACT II // LIVING ATLAS',
    enter: 'ENTER ➔',
    livingAtlas: 'LIVING ATLAS',
    projectArchitecture: 'System Architecture & Rationale',
    projectCapabilities: 'Key Technical Capabilities',
    githubRepository: 'GitHub Repository',
    pypiPackage: 'PyPI Package',
    license: 'License',
    copyClipboard: 'Copy to clipboard',
    keepsakeTitle: 'GIOVANNI.FJ  //  WALKABLE ATLAS CONSTELLATION',
    keepsakeSubtitle: 'RECORD OF PATHS WALKED ACROSS 6 CREATIVE WORLDS',
    walked: '★ WALKED',
    explorerStamp: 'EXPLORER STAMP',
    worldsDiscovered: 'WORLDS DISCOVERED',
    date: 'DATE',
    keepsakeMemory: 'memories archived into your constellation card.',
    profileEyebrow: 'DEVELOPER PROFILE',
    age: '19 years old',
    role: 'Technology Student & Developer',
    biographyTitle: 'Biography',
    bio1: 'My name is Giovanni Feliciano de Jesus, I am 19 years old and I am building my path in Information Technology. I have completed training in Networking, Python and Linux, and I continue expanding my skills through practical courses focused on programming, artificial intelligence and professional computer use.',
    bio2: 'My focus is to grow as a developer through real projects. These include an RPG application and a website for SENAI, which I use to practice logic, web development, interface organization and problem solving.',
    education: 'Education & Certifications',
    networkBasics: 'Networking Basics',
    pythonBasics: 'Python Basics',
    linuxCourse: 'Linux',
    microAi: 'Computer Operator with AI',
    python2: 'Python 2',
    completed: 'Completed',
    inProgress: 'In progress',
    featuredProject: 'FEATURED PROJECT IN PROGRESS',
    rpgApp: 'RPG Application',
    rpgDescription: 'Practical programming project focused on an interactive RPG system with attribute logic, game mechanics, character progression and an immersive experience.',
    creating: 'v0.1 / In Development',
    logic: 'Python / Logic',
    gameDesign: 'Game Design',
    rpgSystems: 'RPG Systems',
    learningDaily: 'Building knowledge every day',
    pageTitle: 'Giovanni.FJ — Interactive Portfolio',
    pageDescription: 'Interactive portfolio of Giovanni Feliciano de Jesus, featuring projects, education, certifications and a walkable journey.'
  }
} as const;

const WORLD_EN: Record<WorldKey, Partial<WorldArea>> = {
  moss: {
    name: 'Fercal, Federal District',
    label: 'origins / nature / quiet',
    title: 'Fercal & Sobradinho, Federal District',
    role: 'Born in Sobradinho, raised in Fercal',
    description: 'I am Brazilian, born at the Regional Hospital of Sobradinho and raised in Fercal, a city in the Federal District where I still live today. I grew up close to nature and quiet surroundings, something I still value — I prefer calm places that let me think clearly and reconnect with myself. That calm also reflects how I approach my studies: patiently and consistently, one step at a time.',
    event: 'origins',
    themeNote: 'The calm of the Cerrado, the quiet of nature and a patient, consistent approach to learning.'
  },
  taupe: {
    name: 'Milestone 7.4 km',
    label: 'milestone / 7.4 km',
    title: 'Milestone 7.4 km',
    role: 'Projects, courses and certifications',
    description: 'A milestone dedicated to my technical growth, where I bring together courses, certifications and projects that represent my progress in technology.',
    event: 'connect',
    themeNote: 'A checkpoint for technical growth, learning and practical development.'
  },
  islog: {
    name: 'Milestone 9.9 km',
    label: 'milestone / 9.9 km',
    title: 'Milestone 9.9 km',
    role: 'Rest point along the journey',
    description: 'A space for rest and contemplation located at kilometer 9.9 of the journey.',
    themeNote: 'A place to rest and reflect along the route.'
  },
  ojicra: {
    name: 'Milestone 12.4 km',
    label: 'milestone / 12.4 km',
    title: 'Milestone 12.4 km',
    role: 'Lookout and stronghold along the route',
    description: 'A watchtower and lookout with a panoramic view of the route at kilometer 12.4.',
    themeNote: 'A watchtower and lookout with a panoramic view of the journey.'
  },
  monoomoi: {
    name: 'Milestone 14.6 km',
    label: 'milestone / 14.6 km',
    title: 'Milestone 14.6 km',
    role: 'A place to stop and reflect',
    description: 'A welcoming atelier and stopping point located at kilometer 14.6 of the journey.',
    themeNote: 'A welcoming atelier and stopping point along the route.'
  },
  monoerabi: {
    name: 'Milestone 16.4 km',
    label: 'milestone / 16.4 km',
    title: 'Milestone 16.4 km',
    role: 'Final observation point',
    description: 'The final observation milestone before the portal that leads to the end of the journey at kilometer 16.4.',
    themeNote: 'The final observation point before the portal to the end of the journey.'
  }
};

const PROJECT_EN: Record<string, Partial<Project>> = {
  'rpg-app': {
    title: 'RPG Application',
    tagline: 'Interactive RPG application with attributes, characters and combat mechanics',
    description: 'My first practical programming project, focused on building a complete RPG system and game logic.',
    fullOverview: 'Developed by Giovanni Feliciano de Jesus, this RPG application is one of the first practical projects in my IT journey. It explores data structures, level progression, classes, character attributes and interactive narrative.',
    highlightFeatures: [
      'Character sheet creation and management system',
      'Dynamic attribute calculations and combat formulas',
      'Modular structure for expanding quests and items',
      'Focus on programming best practices and code readability'
    ],
    metrics: [
      { label: 'Status', value: 'In Development' },
      { label: 'Focus', value: 'Logic & RPG' },
      { label: 'Author', value: 'Giovanni.FJ' }
    ]
  },
  'site-senai': {
    title: 'SENAI Website',
    tagline: 'Institutional and interactive website presenting SENAI initiatives, teams and competitions',
    description: 'A website in development with a modern experience focused on technology, robotics and competitions at SENAI.',
    fullOverview: 'I am developing a website for SENAI with a modern, responsive and visually engaging presentation. The project brings together information about modalities, teams, robotics and competitions while highlighting technology initiatives and providing a strong experience on desktop and mobile devices.',
    languages: ['React', 'TypeScript', 'CSS', 'Web Design'],
    license: 'Academic project',
    highlightFeatures: [
      'Modern responsive interface aligned with the project identity',
      'Sections dedicated to modalities, teams and robotics competitions',
      'Optimized experience for desktop, tablet and mobile',
      'Continuous evolution with content and usability improvements'
    ],
    metrics: [
      { label: 'Status', value: 'In Development' },
      { label: 'Institution', value: 'SENAI' },
      { label: 'Focus', value: 'Web & Robotics' }
    ]
  },
  'codex-healthkit': {
    tagline: 'Metadata-only health checks for local Codex CLI and agent environments',
    description: 'A metadata-only health check for local Codex CLI environments that avoids credentials and conversation content.',
    fullOverview: 'codex-healthkit conducts non-intrusive diagnostics on local LLM runtimes, validating token pipelines, process memory footprints and daemon availability without scanning private prompt sessions or secret keys.'
  },
  'public-source-extractor': {
    tagline: 'CLI that converts public web pages into clean Markdown or versioned JSON for LLM RAG pipelines',
    description: 'A fast CLI that converts public HTTP and HTTPS pages into structured Markdown or versioned JSON for research and AI workflows.'
  },
  'walkable-atlas-engine': {
    tagline: 'Micro 2D parallax physics engine and Living Atlas state manager for web portfolios',
    description: 'The open-source interactive canvas and character state machine powering the Walkable Atlas experience.'
  }
};

const PROJECT_PT: Record<string, Partial<Project>> = {
  'codex-healthkit': {
    tagline: 'Verificações de integridade baseadas apenas em metadados para ambientes locais do Codex CLI e agentes',
    description: 'Verificação de integridade para ambientes locais do Codex CLI que evita credenciais e conteúdo de conversas.',
    fullOverview: 'O codex-healthkit realiza diagnósticos não intrusivos em ambientes locais de LLM, validando pipelines, uso de memória e disponibilidade de processos sem analisar prompts privados ou chaves secretas.',
    highlightFeatures: ['Telemetria sem exposição de credenciais', 'Verificações rápidas de memória e processos', 'Saída JSON estruturada para automação', 'Compatível com macOS, Linux e contêineres Docker']
  },
  'public-source-extractor': {
    tagline: 'CLI que converte páginas públicas em Markdown limpo ou JSON versionado para pipelines RAG com LLMs',
    description: 'CLI rápido que transforma páginas HTTP e HTTPS públicas em Markdown estruturado ou JSON versionado para pesquisa e fluxos de IA.',
    fullOverview: 'Ferramenta criada para fornecer contexto de alta qualidade a modelos de IA, removendo elementos desnecessários e preservando hierarquia, blocos de código e metadados relevantes.',
    highlightFeatures: ['Extração semântica para janelas de contexto de LLM', 'Snapshots JSON determinísticos e versionados', 'Preservação automática de tabelas e matemática', 'Extração paralela de múltiplas URLs com respeito a limites']
  },
  'walkable-atlas-engine': {
    tagline: 'Motor 2D de física com paralaxe e gerenciador de estado para portfólios interativos',
    description: 'Canvas interativo e máquina de estados do personagem que alimentam a experiência do Walkable Atlas.',
    fullOverview: 'Motor TypeScript de alto desempenho com rolagem horizontal em paralaxe, áudio procedural, controles por toque e transições para layouts de portfólio.',
    highlightFeatures: ['Renderização leve e fluida', 'Sintetizador procedural com Web Audio API', 'Gerenciamento de jornada em múltiplas etapas', 'Gerador de constelação para lembranças visuais']
  }
};

export function localizeWorld(world: WorldArea, language: Language): WorldArea {
  if (language === 'pt') return world;
  return { ...world, ...WORLD_EN[world.key] };
}

export function localizeWorlds(worlds: WorldArea[], language: Language): WorldArea[] {
  return worlds.map((world) => localizeWorld(world, language));
}

export function localizeProject(project: Project, language: Language): Project {
  const dictionary = language === 'en' ? PROJECT_EN : PROJECT_PT;
  return { ...project, ...(dictionary[project.id] || {}) };
}
