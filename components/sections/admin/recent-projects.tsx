import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { fetcher } from "@/lib/client";
import { ChartNoAxesCombinedIcon, FolderKanban, Settings, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function fetchRecentProject() {
    try{
        const recentProject = await fetcher<SuccessProjectsResponse>('/admin/projects/?limit=5');
        console.log(recentProject);
        return recentProject.data;
    }catch (error: any){
        console.log(error);
    }
}

export default async function RecentProject(){

    const recentProject = await fetchRecentProject();

    return(
        <div className="mt-10 lg:gap-x-5 gap-y-10 grid grid-cols-1 lg:grid-cols-3">
            <Card className="col-span-2">
                <CardHeader>
                    <CardTitle>
                        <p>Recent Projects</p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardTitle>

                        <Button variant={'ghost'}>
                            <Link href='/admin/projects'>
                            View All →
                            </Link>
                        </Button>
                        
                        <br />
                        {recentProject &&
                            recentProject.map((project)=>
                        <Item key={project.id}>
                            <ItemMedia>
                                <Image className="rounded-lg" alt='icon' src={project.imageUrl || 'https://placehold.co/600x400/1f2937/ffffff?text=%3C/%3E'} width={40} height={40} />
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                                <ItemTitle>
                                    {project.title}
                                </ItemTitle>
                                <ItemDescription className="truncate">
                                    {project.description}
                                </ItemDescription>

                            </ItemContent>
                            <ItemActions>
                                <Badge>
                                    {project.status}
                                </Badge>
                            </ItemActions>
                        </Item>
                            )
                    }
                    </CardTitle>
                </CardContent>
            </Card>
            <Card className="max-h-max">
                <CardHeader>
                    <CardTitle>
                        Quick Actions
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <Link href='/admin' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <ChartNoAxesCombinedIcon className="text-primary" />
                            <p>Dachboard</p>
                        </Button>
                    </Link>
                    <Link href='/admin/projects' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <FolderKanban className="text-primary" />
                            <p>Projects</p>
                        </Button>
                    </Link>
                    <Link href='#' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <Wrench className="text-primary" />
                            <p>Skills</p>
                        </Button>
                    </Link>
                    <Link href='#' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <Settings className="text-primary" />
                            <p>Settings</p>
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}