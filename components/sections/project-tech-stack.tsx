'use client';

import { Layers, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ALL_TECHNOLOGIES, getTechByName } from '@/constants/technologies';

interface ProjectTechStackProps {
  technologies: string[] | null;
}

export default function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="space-y-6">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold">Tech Stack</h2>
        </div>
        
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((techName) => {
            const tech = getTechByName(techName);
            const Icon = tech?.icon || Layers;
            const colorClass = tech?.color || 'text-muted-foreground';

            return (
              <Tooltip key={techName}>
                <TooltipTrigger asChild>
                  <div
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card hover:bg-accent/50 hover:border-primary/50 transition-all duration-200 cursor-pointer group"
                  >
                    <div className={`${colorClass} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground text-center line-clamp-1">
                      {techName}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{techName}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </section>
  );
}