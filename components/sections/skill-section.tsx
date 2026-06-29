// components/sections/skills-section.tsx
import { Badge } from '@/components/ui/badge';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
];

export default function SkillsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}