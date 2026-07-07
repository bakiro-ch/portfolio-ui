import { SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter, SidebarGroupLabel, SidebarGroupAction, SidebarTrigger, Sidebar, SidebarGroupContent, SidebarMenuItem, SidebarMenu, SidebarMenuButton, SidebarMenuBadge, SidebarMenuAction, SidebarSeparator } from "@/components/ui/sidebar";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FiExternalLink } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { ChartNoAxesCombinedIcon, ExternalLink, FolderKanban, LogOut, Settings, Wrench } from "lucide-react";
import Link from "next/link";

export function AdminHeader({title}:{title: string}){
    return (
      <header className="flex justify-between p-4 border-b">
        <div className="flex gap-x-1">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-1 w-[1px] h-7" />
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        </div>

        <div className="flex gap-x-3 items-center">
          <span className="font-medium">Bakiro</span>
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>B</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        </div>
      </header>
  )
}

export default function SideBar ({title}: {title: string}){

  const navBarMenuItems = [
    {
      href: "/admin",
      name: "Dashboard",
      icon: <ChartNoAxesCombinedIcon />
    },
    {
      href: "/admin/projects",
      name: "Projects",
      icon: <FolderKanban />
    },
    {
      href: "#",
      name: "Skills",
      icon: <Wrench />
    },
    {
      href: "#",
      name: "Settings",
      icon: <Settings />
    },
  ];

    return(
    <Sidebar collapsible="offcanvas" variant="sidebar">
      <SidebarHeader className="border-b border-sidebar-border">
        
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={'/admin'}>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                  B
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-sidebar-foreground">Admin Panel</p>
                  <p className="truncate text-xs text-sidebar-foreground/60">bakiroch@gmail.com</p>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
      </SidebarHeader>
        {/* <Separator className="h-[0.25]" /> */}
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarGroupLabel>
                    Menu
                </SidebarGroupLabel>
                <SidebarMenu>
                  {navBarMenuItems.map(item => 
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton className={title === item.name ? "bg-accent" : ''} asChild>
                      <a href={item.href}>
                        {item.icon}
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  )}

                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        {/* <SidebarGroup>
            <SidebarGroupLabel>
                Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
                Dashboard
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup /> */}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <ExternalLink className="size-4" />
                <span>View site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <LogOut className="size-4 text-red-600" />
                <span className="text-red-600">Sign out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    )
}