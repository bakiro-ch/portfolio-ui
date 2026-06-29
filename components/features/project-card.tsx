import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/project";

interface ProjectCardProps {
  project: Project;
  isAboveFold?: boolean;
}

export default function ProjectCard({ project, isAboveFold = false }: ProjectCardProps) {

  const year = new Date(project.createdAt).getFullYear();

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden group">
      
      <div className="relative aspect-video">
        <Image
          src={project.imageUrl || "https://placehold.co/600x400"}
          alt={project.title}
          fill
          className="object-cover brightness-60 grayscale transition-all group-hover:brightness-75 group-hover:grayscale-0"
          
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isAboveFold}
          loading={isAboveFold ? "eager" : "lazy"}
        />
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

        {project.isFeatured && (
          <Badge variant="secondary" className="absolute top-3 left-3 z-10">
            Featured
          </Badge>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
          
          <Badge variant="outline" className="shrink-0 text-xs font-mono">
            {year}
          </Badge>
        </div>
        
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      {project.technologies && project.technologies.length > 0 && (
        <CardContent className="pb-3 pt-0">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px]">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-[10px]">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      )}

      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <Link href={`/projects/${project.slug || project.id}`}>
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}