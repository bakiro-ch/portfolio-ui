'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        
        
        <p className="text-8xl lg:text-9xl font-bold text-primary/20">
          404
        </p>
        
        
        <div className="space-y-2">
          <h1 className="text-2xl lg:text-3xl font-semibold text-foreground">
            page is not found
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            the route that you're searching about is not available
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#projects">Browse projects</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}