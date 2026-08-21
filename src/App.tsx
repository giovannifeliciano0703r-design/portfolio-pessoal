import React, { useState, useEffect, useMemo } from 'react';
import { WORLDS_DATA, PROJECTS_DATA } from './data/portfolioData';
import { APP_COPY, localizeProject, localizeWorlds } from './data/translations';
import { WorldArea, Project, Language } from './types';
import { WalkableWorld } from './components/WalkableWorld';
import { DiscoveryCardModal } from './components/DiscoveryCardModal';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { ConstellationKeepsakeModal } from './components/ConstellationKeepsakeModal';
import { ProfileModal } from './components/ProfileModal';
import { AmbientLife } from './components/AmbientLife';

const senaiSiteProject: Project = {
  id: 'site-senai',
  title: 'Site SENAI',
  tagline: 'Site institucional e interativo desenvolvido para apresentar iniciativas, equipes e competições do SENAI',
  description: 'Projeto em desenvolvimento voltado à criação de uma experiência web moderna para o SENAI, com destaque para tecnologia, robótica e competições.',
  fullOverview: 'Estou desenvolvendo um site para o SENAI com foco em uma apresentação moderna, responsiva e visualmente atraente. O projeto reúne informações sobre modalidades, equipes, robótica e competições, buscando valorizar as iniciativas tecnológicas e proporcionar uma boa experiência em computadores e dispositivos móveis.',
  repoUrl: 'https://github.com/giovannifeliciano0703r-design/Site-Senai',
  version: 'em desenvolvimento',
  languages: ['React', 'TypeScript', 'CSS', 'Web Design'],
  license: 'Projeto acadêmico',
  installCommand: 'git clone https://github.com/giovannifeliciano0703r-design/Site-Senai.git',
  highlightFeatures: [
    'Interface moderna e responsiva alinhada à identidade visual do projeto',
    'Seções dedicadas às modalidades, equipes e competições de robótica',
    'Experiência otimizada para computador, tablet e celular',
    'Projeto em evolução contínua com melhorias de conteúdo e usabilidade'
  ],
  metrics: [
    { label: 'Status', value: 'Em Desenvolvimento' },
    { label: 'Instituição', value: 'SENAI' },
    { label: 'Foco', value: 'Web & Robótica' }
  ]
};

if (!PROJECTS_DATA.some((project) => project.id === senaiSiteProject.id)) {
  PROJECTS_DATA.push(senaiSiteProject);
}

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [visitedWorlds, setVisitedWorlds] = useState<Set<string>>(new Set());
  
  // Modals state
  const [activeDiscoveryWorld, setActiveDiscoveryWorld] = useState<WorldArea | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isKeepsakeOpen, setIsKeepsakeOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const localizedWorlds = useMemo(() => localizeWorlds(WORLDS_DATA, language), [language]);
  const localizedProject = useMemo(
    () => (activeProject ? localizeProject(activeProject, language) : null),
    [activeProject, language]
  );

  // O seletor PT/EN passa a controlar também metadados e idioma do documento.
  useEffect(() => {
    const copy = APP_COPY[language];
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title = copy.pageTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = copy.pageDescription;
  }, [language]);

  // Load visited worlds from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('giovanni_visited_worlds');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setVisitedWorlds(new Set(parsed));
        }
      }
    } catch {
      // Ignore local storage parse error
    }
  }, []);

  const handleWorldVisited = (worldKey: string) => {
    setVisitedWorlds((prev) => {
      const updated = new Set(prev);
      updated.add(worldKey);
      try {
        localStorage.setItem('giovanni_visited_worlds', JSON.stringify(Array.from(updated)));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleEndJourney = () => {
    setIsKeepsakeOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#faf8f5] text-[#242424] overflow-x-hidden font-sans">
      <WalkableWorld
        worlds={localizedWorlds}
        language={language}
        visitedWorlds={visitedWorlds}
        onExploreWorld={(world) => setActiveDiscoveryWorld(world)}
        onOpenKeepsake={() => setIsKeepsakeOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onSwitchToAct2={handleEndJourney}
        onLanguageChange={setLanguage}
        onWorldVisited={handleWorldVisited}
      />

      <AmbientLife />

      {/* Profile & Biography Modal */}
      {isProfileOpen && (
        <ProfileModal
          language={language}
          onClose={() => setIsProfileOpen(false)}
        />
      )}

      {/* Discovery World Card Modal */}
      {activeDiscoveryWorld && (
        <DiscoveryCardModal
          world={activeDiscoveryWorld}
          language={language}
          onClose={() => setActiveDiscoveryWorld(null)}
          onJumpToAtlasSection={() => {
            setActiveDiscoveryWorld(null);
            setIsKeepsakeOpen(true);
          }}
        />
      )}

      {/* Project Details Modal */}
      {localizedProject && (
        <ProjectDetailsModal
          project={localizedProject}
          language={language}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Constellation Keepsake Modal */}
      {isKeepsakeOpen && (
        <ConstellationKeepsakeModal
          visitedWorlds={visitedWorlds}
          worlds={localizedWorlds}
          language={language}
          onClose={() => setIsKeepsakeOpen(false)}
        />
      )}
    </div>
  );
}
