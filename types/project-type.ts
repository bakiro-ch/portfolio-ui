
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

interface ErrorResponse{
    success: boolean,
    message: string,
    error: string,
    statusCoode: number,
    errors?: string[],
    timestamp: string;
}

interface LoginSuccessResponse{
    success: boolean,
    token: string,
    user: UserPayload
}
interface UserPayload{
    id: string,
    role: 'ADMIN' | 'USER',
    email: string
}