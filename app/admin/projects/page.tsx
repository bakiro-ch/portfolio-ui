import ProjectsSection from "@/components/sections/admin/projects-section";
import { fetcher } from "@/lib/client";

async function fetchProjects() {
    const projects =  await fetcher<SuccessProjectsResponse>('/admin/projects');
    return projects.data;
}

export default async function Projects() {

    const projects = await fetchProjects();

    return(
        <main className="">
            <div>
                <p className="text-3xl font-bold">Projects</p>
                <span className="text-lg text-muted-foreground">Manage your portfolio projects — add, edit, or remove entries.</span>
                <ProjectsSection projects={projects} />
            </div>
        </main>
    )
}