'use client'

import SideBar, { AdminHeader } from "@/components/layout/side-bar"
import { SidebarInset, SidebarProvider, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  
  const pathname = usePathname()
  const title = getPageTitle(pathname)

  return (
    <SidebarProvider>
      <SideBar title={title} />
      <SidebarInset>
        <AdminHeader title={title} />
        <main className="flex-1 p-10 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

function getPageTitle(pathname: string) {
  if(pathname === '/admin') return "Dashboard"
  if (pathname.startsWith("/admin/projects")) return "Projects"
  if (pathname.startsWith("/admin/skills")) return "Skills"
  if (pathname.startsWith("/admin/settings")) return "Settings"

  throw new Error("Function not implemented.")
}
