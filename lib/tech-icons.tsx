import { 
  SiTypescript, SiJavascript, SiNodedotjs, SiReact, SiNextdotjs, 
  SiNestjs, SiDocker, SiPostgresql, SiGit, SiGithub, SiLinux, 
  SiTailwindcss, SiPrisma, SiExpress, SiMongodb, SiVercel, SiRedis 
} from 'react-icons/si';
import { FaJava, FaPython, FaPhp, FaAws } from 'react-icons/fa';
import { DiDatabase, DiResponsive, DiJavascript1, DiNodejsSmall } from 'react-icons/di';
import { CgFigma } from 'react-icons/cg';

export const TECH_ICONS: Record<string, React.ElementType> = {
  // JavaScript & TS
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'JS': SiJavascript,
  'TS': SiTypescript,
  
  // Frameworks & Libraries
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Next': SiNextdotjs,
  'NestJS': SiNestjs,
  'Tailwind CSS': SiTailwindcss,
  'Tailwind': SiTailwindcss,
  'Express': SiExpress,
  'Prisma': SiPrisma,
  
  // Backend & DB
  'Node.js': SiNodedotjs,
  'PostgreSQL': SiPostgresql,
  'Postgres': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Database': DiDatabase,
  
  // Tools & DevOps
  'Docker': SiDocker,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Linux': SiLinux,
  'Vercel': SiVercel,
  'AWS': FaAws,
  'Figma': CgFigma,
  
  // Other
  'Java': FaJava,
  'Python': FaPython,
  'PHP': FaPhp,
  'HTML': DiResponsive,
  'CSS': DiResponsive,
};

export const DEFAULT_TECH_ICON = SiNodedotjs;