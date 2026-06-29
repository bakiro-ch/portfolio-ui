import { Suspense } from 'react';
import HeroSection from '@/components/sections/hero-section';
import SkillsSection from '@/components/sections/skill-section';
import { Separator } from '@/components/ui/separator';
import ProjectsDataFetcher from '@/components/sections/projects-data-fetcher'; // المكون الجديد
import SkeletonToggle from '@/components/features/skeleton-loader';

export default function HomePage() {
  return (
    <main className="min-h-screen">

      <HeroSection />
      {/* <SkillsSection /> */}
      
      <section id="projects" className="py-10">
        <div className="px-6 lg:px-10 space-y-6">
          <Separator className="my-6" />
          
          <Suspense fallback={
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {[...Array(3)].map((_, i) => <SkeletonToggle key={i} />)}
            </div>
          }>
            <ProjectsDataFetcher />
          </Suspense>
          
        </div>
      </section>
    </main>
  );
}