
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

interface ProjectsMeta {
    page: number,
    limit: number,
    total: number,
    totalPages: number
}

interface SuccessProjectsResponse {
    sucess: boolean,
    data: Project[],
    meta: ProjectsMeta
}
interface SuccessProjectResponse {
    sucess: boolean,
    data: Project
}