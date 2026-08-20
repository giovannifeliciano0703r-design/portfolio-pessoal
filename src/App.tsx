import React, { useState, useEffect } from 'react';
import { WORLDS_DATA, PROJECTS_DATA } from './data/portfolioData';
import { WorldArea, Project, Language } from './types';
import { WalkableWorld } from './components/WalkableWorld';
import { DiscoveryCardModal } from './components/DiscoveryCardModal';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { ConstellationKeepsakeModal } from './components/ConstellationKeepsakeModal';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [visitedWorlds, setVisitedWorlds] = useState<Set<string>>(new Set(['moss']));
  
  // Modals state
  const [activeDiscoveryWorld, setActiveDiscoveryWorld] = useState<WorldArea | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isKeepsakeOpen, setIsKeepsakeOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
        worlds={WORLDS_DATA}
        language={language}
        visitedWorlds={visitedWorlds}
        onExploreWorld={(world) => setActiveDiscoveryWorld(world)}
        onOpenKeepsake={() => setIsKeepsakeOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onSwitchToAct2={handleEndJourney}
        onLanguageChange={setLanguage}
        onWorldVisited={handleWorldVisited}
      />

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
      {activeProject && (
        <ProjectDetailsModal
          project={activeProject}
          language={language}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Constellation Keepsake Modal */}
      {isKeepsakeOpen && (
        <ConstellationKeepsakeModal
          visitedWorlds={visitedWorlds}
          worlds={WORLDS_DATA}
          language={language}
          onClose={() => setIsKeepsakeOpen(false)}
        />
      )}
    </div>
  );
}
