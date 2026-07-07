'use client'

import Search from "@/components/features/search";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ProjectsTable from "../../../components/sections/admin/projects-table";
import Filter from "@/components/features/filter";
import { SelectItem } from "@/components/ui/select";

export default function ProjectsSection({projects}: {projects: Project[]}) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('');

    const filteredProjects = projects.filter((project) => {
        const query = searchQuery.toLowerCase();
        
        const matchesSearch = 
        project.title.toLowerCase().includes(query) || 
        project.description?.toLowerCase().includes(query);
        
        const matchesStatus = !statusFilter || statusFilter === 'all' || project.status.toLowerCase() === statusFilter;

    return matchesSearch && matchesStatus ;
  });


    return(
        <div>
            <div className="mt-10 flex gap-5">
                    
                <Search 
                    value={searchQuery}
                    onSearchChange={setSearchQuery}
                    placeholder="Search Project..."
                 />

                <Filter className="w-xs" statusFilter={statusFilter} setStatusFilter={setStatusFilter}>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                </Filter>
                    
                <Link href="/admin/projects/new">
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                    </Button>                    
                </Link>
                
            </div>
            <div className="mt-10">
                <ProjectsTable projects={filteredProjects}/>
            </div>
        </div>
    )
}