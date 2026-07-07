'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveUpRight, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

interface MockProject {
  id: number;
  title: string;
  description: string;
  status: string;
}

const mockProjects: MockProject[] = [
  { id: 1, title: "E-Commerce Platform", description: "A full-stack e-commerce app built with Next.js and Stripe.", status: "Published" },
  { id: 2, title: "Task Manager", description: "A Kanban-style task management tool with drag and drop.", status: "Draft" },
  { id: 3, title: "Portfolio Website", description: "A personal portfolio showcasing projects and skills.", status: "Published" },
  { id: 4, title: "Chat Application", description: "Real-time messaging app using WebSockets and React.", status: "Draft" },
];

export default function ProjectsTable({projects }:{projects:Project[]}) {
  
  return (
    <div className="max-h-[500px] overflow-auto border rounded-md">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-muted">
          <TableRow>
            {["Title", "Status", "Links", "Actions"].map((head) => (
              <TableHead className="text-center" key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <Item>
                    <ItemMedia>
                      <Image className="rounded-lg bg-cover" src={project.imageUrl || "https://placehold.co/600x400/1f2937/ffffff?text=%3C/%3E"} alt="icon" height={50} width={50} />
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemHeader>
                        <ItemTitle>{project.title}</ItemTitle>
                      </ItemHeader>
                      <ItemDescription className="lg:max-w-lg max-w-xs truncate">
                        {project.description}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </TableCell>

                <TableCell className="text-center"><Badge variant={'default'}>{project.status}</Badge></TableCell>

                <TableCell className="text-center">
                  <div className="flex justify-center gap-1">
                    
                      <a href={project.demoLink}>
                        <Button size="xs" variant="outline">
                          <MoveUpRight />
                        </Button>
                      </a>

                    {
                      project.githubLink &&
                      <a target="_blank" href={project.githubLink}>
                        <Button size="xs" variant="outline">
                          <FiGithub />
                        </Button>
                      </a>
                    }

                  </div>
                </TableCell>

                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/projects/${project.slug}/edit`}>
                        <Pencil className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-red-600">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                No projects found matching your criteria.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}