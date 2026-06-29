'use client';

import { Project } from '@/project';
import ProjectCard from '@/components/features/project-card';
import SkeletonToggle from '@/components/features/skeleton-loader';
import { EmptyDemo } from '@/components/features/empty-state';

interface ProjectsGridProps {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
}

export default function ProjectsGrid({ projects, isLoading, error }: ProjectsGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {[...Array(3)].map((_, i) => <SkeletonToggle key={i} />)}
      </div>
    );
  }

  if (error) {
    return (
      <p className="col-span-full text-center text-destructive py-10">
        {error}
      </p>
    );
  }

  if (projects.length === 0) {
    return <EmptyDemo />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} isAboveFold={index < 3} />
      ))}
    </div>
  );
}