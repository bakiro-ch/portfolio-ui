import { 
  SiTypescript, SiJavascript, SiNodedotjs, SiReact, 
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiNestjs, SiExpress, SiRedis,
  SiPrisma, SiVercel, SiLinux, SiFigma
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface TechInfo {
  name: string;
  icon: IconType;
  color?: string;
}

export const ALL_TECHNOLOGIES: TechInfo[] = [
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-foreground' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-red-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-violet-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-foreground' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-600' },
  { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
];

export const getTechByName = (name: string): TechInfo | undefined => {
  return ALL_TECHNOLOGIES.find(t => t.name.toLowerCase() === name.toLowerCase());
};