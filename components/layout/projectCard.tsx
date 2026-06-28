import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const date = project.createdAt;
  const year = new Date(project.createdAt).getFullYear();

  return (
    <Card className="overflow-hidden pt-0">
      {/* Image */}
      <div className="relative aspect-video">
        <Image
          src={
            project.imageUrl ??
            "https://placehold.co/600x400/1f2937/6b7280?text=%3C/%3E&font=roboto"
          }
          alt={project.title}
          fill
          className="object-cover"
                  />

        {/* <Button
          asChild
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 rounded-full"
        >
          <Link href={`/projects/${project.slug}`}>
            ⇱
          </Link>
        </Button> */}

        {project.isFeatured && (

        <Badge variant={'secondary'} className="absolute top-4 left-4 rounded-full ">
          Featured
        </Badge>
        )}
      </div>

      {/* Header */}
      <CardHeader>
            

            <CardAction>
              <Badge variant={"outline"}>
                {year}
              </Badge>
            </CardAction>

        <CardTitle className="font-semibold text-lg lg:text-xl">
          {project.title}
        </CardTitle>

        <CardDescription>
          {project.description}
        </CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${project.slug}`}>
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}