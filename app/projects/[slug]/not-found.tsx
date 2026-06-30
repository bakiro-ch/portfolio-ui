import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <p className="text-8xl font-bold text-primary/20">404</p>
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="text-muted-foreground">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>
      </div>
    </main>
  );
}