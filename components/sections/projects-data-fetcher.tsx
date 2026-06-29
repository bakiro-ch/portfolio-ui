import { fetcher } from '@/lib/client';
import ProjectsClientWrapper from './projects-client-wrapper';
import { EmptyDemo } from '../features/empty-state';

export default async function ProjectsDataFetcher() {

    const response: any = await fetcher('/projects');
    const projects = response?.data || response;
    
    if(!projects || projects.length === 0){
      return <EmptyDemo/>
    }

  return <ProjectsClientWrapper initialProjects={projects} />;
}