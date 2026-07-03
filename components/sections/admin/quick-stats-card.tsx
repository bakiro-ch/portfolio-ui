import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Eye, FolderKanban, Settings, Star } from "lucide-react";
import { title } from "process";


interface statsCardType {
        title: string,
        number: string,
        description: string,
        icon: any
}

const statsDetails : statsCardType[] = [
    {
        title: 'Total Project',
        description: '6 published',
        number: '6',
        icon: <FolderKanban />
    },
    {
        title: 'Total Skills',
        description: 'across 5 categories',
        number: '40+',
        icon: <Settings />
    },
    {
        title: 'Total Stars',
        description: 'across all projects',
        number: '8,644',
        icon: <Star/>
    },
    {
        title: 'Profile views',
        description: 'last 30 days',
        number: '1.2k',
        icon: <Eye />
    },
]

export default function QuickStatsCard() {
    return(
        <div className="grid lg:grid-cols-4 gap-5">
            {
                statsDetails.map(stat => {
                    return(       
                        <Card key={stat.title} className="min-h-40 justify-center lg:px-1 px-5" size="sm">
                            <CardContent>
                                <div className="flex-1 ">
                                    <CardTitle>{stat.title}</CardTitle>
                                <CardAction className="absolute" >
                                    <Badge asChild variant={'secondary'} className="rounded-lg size-10 text-primary" >
                                        {stat.icon}
                                    </Badge>
                                </CardAction>
                                    <p className="text-3xl font-bold">{stat.number}</p>
                                    <CardDescription>{stat.description}</CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                        )
                    })
            }
        </div>
    )
}