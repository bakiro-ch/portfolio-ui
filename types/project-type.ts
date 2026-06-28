
interface Project{
    id: string;
    title: string;
    slug: string;
    description: string | null;
    status: "draft" | "published" | "archived";
    isFeatured: boolean;
    imageUrl: string | null;
    demoLink: string;
    githubLink: string | null;
    technologies: string[];
    setupGuide: string | null;
    createdAt: string;
    updatedAt: string;    
}