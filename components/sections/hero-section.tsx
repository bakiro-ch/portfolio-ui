import Link from "next/link";
import { Button } from "../ui/button";
import { StatCard } from "../features/stat-card";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 p-6 lg:p-10 mx-auto max-w-7xl">
        
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Building thoughtful software for the{' '}
            <span className="underline text-secondary">modern web.</span>
          </h1>
          
          <p className="text-muted-foreground text-lg">
            I'm <strong>Baki</strong> — a Junior Full-Stack Developer specializing in 
            <strong> React, TypeScript, and NestJS</strong>. I build performant, 
            accessible web applications from concept to deployment.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work →
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://github.com/bakiro-ch" target="_blank">
                GitHub Profile
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
          <StatCard 
            title="2026" 
            description="CS Graduate" 
          />
          <StatCard 
            title="NestJS/React" 
            description="Tech Stack" 
          />
          <StatCard 
            title="Algeria" 
            description="Based In" 
          />
          <StatCard 
            title="Open to Work" 
            description="Job Opportunities" 
          />
        </div>
        
      </div>
    </section>
  );
}