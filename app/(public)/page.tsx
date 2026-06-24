import { fetcher } from "@/lib/client";
import { Project } from "@/project";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function HomePage() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    // جلب البيانات من الـ Backend
    projects = await fetcher<Project[]>("/projects");
  } catch (err: any) {
    error = err.message || "فشل في تحميل المشاريع";
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold text-destructive">⚠️ خطأ في الاتصال بالخادم</h1>
        <p className="text-muted-foreground mt-2">{error}</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">أحدث المشاريع</h1>

      {projects.length === 0 ? (
        <p className="text-muted-foreground text-center py-10">لا توجد مشاريع منشورة حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-muted-foreground text-sm">بدون صورة</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold truncate">{project.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description || "بدون وصف متاح"}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex justify-between gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projects/${project.slug}`}>التفاصيل</Link>
                </Button>
                
                {project.demoLink && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      معاينة حية
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}