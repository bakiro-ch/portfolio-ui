import { fetcher } from '@/lib/client';
import { Project } from '@/project';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import ProjectHeader from '@/components/sections/project-header';
import ProjectContent from '@/components/sections/project-content';
import ProjectTechStack from '@/components/sections/project-tech-stack';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Baki Portfolio`,
    description: project.description || `Project built with ${project.technologies?.join(', ')}`,
    openGraph: {
      title: project.title,
      description: project.description || '',
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description || '',
      images: project.imageUrl ? [project.imageUrl] : [],
    },
  };
}

async function getProject(slug: string): Promise<Project | null> {
  try {
    const response: any = await fetcher(`/projects/${slug}`);
    return response?.data || response;
  } catch (error) {
    console.error(`Failed to fetch project ${slug}:`, error);
    return null;
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-10">
      <article className="container mx-auto px-6 lg:px-10 max-w-5xl">
        
        <Button asChild size="sm" className="gap-2 mb-5">
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </Button>

        <ProjectHeader project={project} />

        <Separator className="my-10" />

        <ProjectContent project={project} />

        <Separator className="my-10" />

        <ProjectTechStack technologies={project.technologies} />

      </article>
    </main>
  );
}