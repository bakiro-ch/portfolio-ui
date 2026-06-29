'use client';

import { useEffect, useState, useMemo } from 'react';
import { fetcher } from '@/lib/client';
import { Project } from '@/project';

// استيراد الأقسام المعزولة
import HeroSection from '@/components/sections/hero-section';
import ProjectsFilter from '@/components/sections/projects-filter';
import ProjectsGrid from '@/components/sections/projects-grid';
import { Separator } from '@/components/ui/separator';
import SkillsSection from '@/components/sections/skill-section';

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // States للفلترة
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Most recent');

  // جلب البيانات
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const response: any = await fetcher('/projects');
        setProjects(response?.data || response);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  // منطق الفلترة (معزول ومنظم)
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
        selectedTechs.some(tech => p.technologies?.includes(tech))
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
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Projects Section */}
      <section id="projects" className="py-10">
        
        <div className="px-6 lg:px-10 space-y-6">
          
          <Separator className="my-6" />

          {/* Filters */}
          <ProjectsFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTechs={selectedTechs}
            onTechsChange={setSelectedTechs}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <Separator className="my-6" />

          {/* Grid */}
          <ProjectsGrid
            projects={filteredProjects}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </section>
    </main>
  );
}