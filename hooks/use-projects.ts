import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/client';
import { Project } from '@/project';

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const response: any = await fetcher('/projects');
      return response?.data || response;
    },
  });
}