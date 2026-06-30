import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import { Project } from '@/project';
import { FaGithub } from 'react-icons/fa';

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const year = new Date(project.createdAt).getFullYear();

  return (
    <header className="space-y-6">

      <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
        <Image
          src={project.imageUrl || 'https://placehold.co/600x400/1f2937/6b7280?text=%3C/%3E&font=roboto'}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 70vw, 1200px"
        />
        
        {project.isFeatured && (
          <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur">
            ⭐ Featured
          </Badge>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{year}</span>
          <Badge variant="outline" className="capitalize">
            {project.status}
          </Badge>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          {project.title}
        </h1>

        {/* <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p> */}
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        {project.demoLink && (
          <Button asChild size="lg">
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
        )}

        {project.githubLink && (
          <Button asChild variant="outline" size="lg">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-4 h-4 mr-2" />
              Source Code
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}