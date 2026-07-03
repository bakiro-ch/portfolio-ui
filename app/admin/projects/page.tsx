'use client'

import Search from "@/components/features/search";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ProjectsTable from "../../../components/sections/admin/projects-table";

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState('');
    
    return(
        <main className="">
            <div>
                <p className="text-3xl font-bold">Projects</p>
                <span className="text-lg text-muted-foreground">Manage your portfolio projects — add, edit, or remove entries.</span>
                <div className="mt-10 flex gap-5">
                    <Search 
                        value={searchQuery}
                        onSearchChange={setSearchQuery}
                        placeholder="Search Project..."
                     />
                     <Select >
                        <SelectTrigger className="w-50">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="published">Published</SelectItem>
                                <SelectItem value="draft">Draft</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                     </Select>
                    <Link href="/admin/projects/new">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Project
                        </Button>
                    </Link>
                </div>
                <div className="mt-10">
                    <ProjectsTable/>
                </div>
            </div>
        </main>
    )
}