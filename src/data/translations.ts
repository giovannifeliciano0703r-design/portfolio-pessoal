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

type WorldTranslation = Pick<WorldArea, 'name' | 'label' | 'title' | 'role' | 'description' | 'themeNote'>;

const WORLD_PT: Record<WorldKey, WorldTranslation> = {
  moss: {
    name: 'Fercal, DF',
    label: 'origens / natureza / silêncio',
    title: 'Fercal & Sobradinho, Distrito Federal',
    role: 'Nascido em Sobradinho, criado na Fercal',
    description: 'Sou brasileiro, nascido no Hospital Regional de Sobradinho e criado na Fercal, no Distrito Federal, onde vivo até hoje. Cresci próximo da natureza e de ambientes tranquilos, algo que valorizo e que também influencia a forma paciente e constante como encaro meus estudos.',
    themeNote: 'A tranquilidade do cerrado, o silêncio da natureza e o foco nos estudos com paciência e constância.'
  },
  taupe: {
    name: 'Marco 7.4 km',
    label: 'formação / certificados / projetos',
    title: 'Marco 7.4 km — Desenvolvimento em Tecnologia',
    role: 'Cursos, certificados e projetos',
    description: 'Este marco reúne minha evolução em tecnologia: cursos em andamento, certificados concluídos e projetos práticos que estou desenvolvendo para fortalecer meus conhecimentos.',
    themeNote: 'Um ponto dedicado ao aprendizado técnico, às certificações e à construção de projetos reais.'
  },
  islog: {
    name: 'Marco 9.9 km',
    label: 'marco / 9.9 km',
    title: 'Marco 9.9 km',
    role: 'Ponto de descanso no percurso',
    description: 'Espaço de descanso e contemplação localizado no quilômetro 9.9 da caminhada.',
    themeNote: 'Espaço de descanso e contemplação ao longo do percurso.'
  },
  ojicra: {
    name: 'Marco 12.4 km',
    label: 'marco / 12.4 km',
    title: 'Marco 12.4 km',
    role: 'Mirante e fortificação no percurso',
    description: 'Torre de vigia e mirante com visão panorâmica do trajeto no quilômetro 12.4.',
    themeNote: 'Torre de vigia e mirante com visão panorâmica do trajeto.'
  },
  monoomoi: {
    name: 'Marco 14.6 km',
    label: 'marco / 14.6 km',
    title: 'Marco 14.6 km',
    role: 'Ponto de parada e reflexão',
    description: 'Espaço acolhedor e atelier de parada localizado no quilômetro 14.6 da caminhada.',
    themeNote: 'Espaço acolhedor e atelier de parada ao longo do percurso.'
  },
  monoerabi: {
    name: 'Marco 16.4 km',
    label: 'marco / 16.4 km',
    title: 'Marco 16.4 km',
    role: 'Ponto de observação final',
    description: 'Último marco de observação antes do portal que conduz ao final da jornada no quilômetro 16.4.',
    themeNote: 'Último marco de observação antes do portal que conduz ao final da jornada.'
  }
};

const WORLD_EN: Record<WorldKey, WorldTranslation> = {
  moss: {
    name: 'Fercal, Federal District',
    label: 'origins / nature / quiet',
    title: 'Fercal & Sobradinho, Federal District',
    role: 'Born in Sobradinho, raised in Fercal',
    description: 'I am Brazilian, born at the Regional Hospital of Sobradinho and raised in Fercal, in the Federal District, where I still live today. I grew up close to nature and quiet surroundings, something I value and that also influences the patient and consistent way I approach my studies.',
    themeNote: 'The calm of the Cerrado, the quiet of nature and a patient, consistent approach to learning.'
  },
  taupe: {
    name: 'Milestone 7.4 km',
    label: 'education / certificates / projects',
    title: 'Milestone 7.4 km — Technology Development',
    role: 'Courses, certificates and projects',
    description: 'This milestone brings together my growth in technology: courses in progress, completed certificates and practical projects I am developing to strengthen my skills.',
    themeNote: 'A checkpoint dedicated to technical learning, certifications and building real projects.'
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

const PROJECT_PT: Record<string, Partial<Project>> = {
  'rpg-app': {
    title: 'Aplicativo de RPG',
    tagline: 'Aplicativo de RPG interativo com atributos, personagens e mecânicas de combate',
    description: 'Projeto prático de programação focado no desenvolvimento de um sistema de RPG e lógica de jogos.',
    fullOverview: 'Projeto desenvolvido durante minha jornada em TI para praticar estruturas de dados, progressão, classes, atributos de personagens e narrativa interativa.',
    languages: ['Python', 'Lógica de Programação', 'Estruturas de Dados'],
    highlightFeatures: ['Criação e gerenciamento de personagens', 'Cálculo de atributos e combate', 'Estrutura modular para expansão', 'Foco em legibilidade e boas práticas'],
    metrics: [{ label: 'Status', value: 'Em Desenvolvimento' }, { label: 'Foco', value: 'Lógica & RPG' }, { label: 'Autor', value: 'Giovanni.FJ' }]
  },
  'site-senai': {
    title: 'Site SENAI',
    tagline: 'Site institucional e interativo para apresentar iniciativas, equipes e competições do SENAI',
    description: 'Projeto em desenvolvimento com foco em tecnologia, robótica e competições do SENAI.',
    fullOverview: 'Estou desenvolvendo um site moderno e responsivo para o SENAI, reunindo informações sobre modalidades, equipes, robótica e competições e buscando uma experiência de qualidade em computadores e dispositivos móveis.',
    license: 'Projeto acadêmico',
    highlightFeatures: ['Interface moderna e responsiva', 'Seções de modalidades, equipes e competições', 'Experiência otimizada para diferentes telas', 'Evolução contínua de conteúdo e usabilidade'],
    metrics: [{ label: 'Status', value: 'Em Desenvolvimento' }, { label: 'Instituição', value: 'SENAI' }, { label: 'Foco', value: 'Web & Robótica' }]
  },
  'codex-healthkit': {
    tagline: 'Verificações de integridade baseadas em metadados para ambientes locais do Codex CLI e agentes',
    description: 'Ferramenta de diagnóstico que evita credenciais e conteúdo de conversas.',
    fullOverview: 'Realiza diagnósticos não intrusivos em ambientes locais de LLM, validando processos e disponibilidade sem analisar prompts privados ou chaves secretas.',
    highlightFeatures: ['Telemetria sem exposição de credenciais', 'Verificações rápidas de processos', 'Saída JSON para automação', 'Compatibilidade com macOS, Linux e Docker']
  },
  'public-source-extractor': {
    tagline: 'CLI que converte páginas públicas em Markdown limpo ou JSON versionado para fluxos com IA',
    description: 'Ferramenta que transforma páginas públicas em conteúdo estruturado para pesquisa e IA.',
    fullOverview: 'Extrai conteúdo de alto valor, removendo elementos desnecessários e preservando hierarquia, código e metadados úteis.',
    highlightFeatures: ['Extração semântica', 'Snapshots JSON versionados', 'Preservação de tabelas e matemática', 'Extração paralela de URLs']
  },
  'walkable-atlas-engine': {
    tagline: 'Motor 2D com paralaxe e gerenciamento de estado para portfólios interativos',
    description: 'Motor visual e máquina de estados que alimentam a experiência caminhável do portfólio.',
    fullOverview: 'Motor TypeScript de alto desempenho com paralaxe, áudio procedural, controles por toque e transições de interface.',
    highlightFeatures: ['Renderização fluida', 'Áudio procedural', 'Gerenciamento de jornada', 'Geração de lembranças visuais']
  }
};

const PROJECT_EN: Record<string, Partial<Project>> = {
  'rpg-app': {
    title: 'RPG Application',
    tagline: 'Interactive RPG application with attributes, characters and combat mechanics',
    description: 'Practical programming project focused on developing an RPG system and game logic.',
    fullOverview: 'A project developed during my IT journey to practice data structures, progression, classes, character attributes and interactive narrative.',
    languages: ['Python', 'Programming Logic', 'Data Structures'],
    highlightFeatures: ['Character creation and management', 'Attribute and combat calculations', 'Modular structure for expansion', 'Focus on readability and best practices'],
    metrics: [{ label: 'Status', value: 'In Development' }, { label: 'Focus', value: 'Logic & RPG' }, { label: 'Author', value: 'Giovanni.FJ' }]
  },
  'site-senai': {
    title: 'SENAI Website',
    tagline: 'Institutional and interactive website presenting SENAI initiatives, teams and competitions',
    description: 'Project in development focused on SENAI technology, robotics and competitions.',
    fullOverview: 'I am developing a modern responsive website for SENAI, bringing together information about modalities, teams, robotics and competitions while providing a strong experience on desktop and mobile devices.',
    license: 'Academic project',
    highlightFeatures: ['Modern responsive interface', 'Sections for modalities, teams and competitions', 'Experience optimized across screen sizes', 'Continuous content and usability improvements'],
    metrics: [{ label: 'Status', value: 'In Development' }, { label: 'Institution', value: 'SENAI' }, { label: 'Focus', value: 'Web & Robotics' }]
  },
  'codex-healthkit': {
    tagline: 'Metadata-only health checks for local Codex CLI and agent environments',
    description: 'Diagnostic tooling that avoids credentials and conversation content.',
    fullOverview: 'Performs non-intrusive diagnostics on local LLM environments, validating processes and availability without scanning private prompts or secret keys.',
    highlightFeatures: ['Zero-credential telemetry', 'Fast process checks', 'JSON output for automation', 'macOS, Linux and Docker compatibility']
  },
  'public-source-extractor': {
    tagline: 'CLI converting public pages into clean Markdown or versioned JSON for AI workflows',
    description: 'Tool that converts public pages into structured content for research and AI.',
    fullOverview: 'Extracts high-value content while removing unnecessary elements and preserving hierarchy, code and useful metadata.',
    highlightFeatures: ['Semantic extraction', 'Versioned JSON snapshots', 'Table and math preservation', 'Parallel URL extraction']
  },
  'walkable-atlas-engine': {
    tagline: '2D parallax engine and state manager for interactive portfolios',
    description: 'Visual engine and character state machine powering the portfolio’s walkable experience.',
    fullOverview: 'High-performance TypeScript engine with parallax, procedural audio, touch controls and interface transitions.',
    highlightFeatures: ['Fluid rendering', 'Procedural audio', 'Journey state management', 'Visual keepsake generation']
  }
};

export function localizeWorld(world: WorldArea, language: Language): WorldArea {
  const translation = language === 'pt' ? WORLD_PT[world.key] : WORLD_EN[world.key];
  return { ...world, ...translation };
}

export function localizeWorlds(worlds: WorldArea[], language: Language): WorldArea[] {
  return worlds.map((world) => localizeWorld(world, language));
}

export function localizeProject(project: Project, language: Language): Project {
  const dictionary = language === 'pt' ? PROJECT_PT : PROJECT_EN;
  return { ...project, ...(dictionary[project.id] || {}) };
}
