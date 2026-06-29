import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { StatCard } from '@/components/features/stat-card';
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
            I'm Alex — a software engineer focused on building performant, accessible products end-to-end. 
            I work with React, TypeScript, and modern backend systems to take ideas from prototype to production.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="#projects">
                View selected work →
              </Link>
            </Button>
            <Button variant="secondary" size="lg">
              Read the blog
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
          <StatCard title="50+" description="Projects Completed" />
          <StatCard title="100%" description="Client Satisfaction" />
          <StatCard title="5+" description="Years Experience" />
          <StatCard title="Global" description="Remote Friendly" />
        </div>
        
      </div>
    </section>
  );
}