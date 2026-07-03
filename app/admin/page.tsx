import QuickStatsCard from "@/components/sections/admin/quick-stats-card";
import RecentProject from "@/components/sections/admin/recent-projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default function Dashboard(){
    return(
        <main className="">
            <div className="lg:flex justify-between mt-7 mb-5">            
                <div className="mb-5">
                    <p className="text-3xl font-bold">Welcome back, Baki! 👋🏻</p>
                    <p className="text-muted-foreground text-lg">Here's what happening with your portfolio.</p>
                </div>
                
                <Link href="/admin/projects/new">
                    <Button className="mb-10">
                        <IoMdAdd />
                        Add Project
                    </Button>
                </Link>
                
            </div>

            <QuickStatsCard/>
            <RecentProject/>
            
        </main>
    )
}