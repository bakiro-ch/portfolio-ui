import { Project } from '@/project';

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="space-y-8">

      {project.description && (
        <section>
          <h2 className="text-2xl font-bold mb-4">About this project</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </section>
      )}

      {project.setupGuide && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Setup Guide</h2>
          <div className="rounded-lg border bg-muted/30 p-6">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap font-mono">
              {project.setupGuide}
            </pre>
          </div>
        </section>
      )}
    </div>
  );
}