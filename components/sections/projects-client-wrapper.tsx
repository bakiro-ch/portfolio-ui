'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/project';
import ProjectsFilter from './projects-filter';
import ProjectsGrid from './projects-grid';
import { Separator } from '../ui/separator';

interface ProjectsClientWrapperProps {
  initialProjects: Project[];
}

export default function ProjectsClientWrapper({ initialProjects }: ProjectsClientWrapperProps) {

    const [projects] = useState<Project[]>(initialProjects);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState('Most recent');
  
    const [isLoading] = useState(false); 
    const [error] = useState<string | null>(null);

    const filteredProjects = useMemo(() => {
        let result = [...projects];

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(p => 
            p.title.toLowerCase().includes(q) || 
            p.description?.toLowerCase().includes(q)
        );
        }
        
        if (selectedTechs.length > 0) {
            result = result.filter(p => 
            selectedTechs.every(tech => p.technologies?.includes(tech))
        );
        }
        
        if (sortBy === 'A → Z') {
            result.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'Most recent') {
            result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }
        
        return result;
    }, [projects, searchQuery, selectedTechs, sortBy]);

  return (
    <>
      <ProjectsFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTechs={selectedTechs}
        onTechsChange={setSelectedTechs}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <Separator/>

      <ProjectsGrid
        projects={filteredProjects}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}