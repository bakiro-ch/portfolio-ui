import { fetcher } from "@/lib/client";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Project } from "@/project";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  let project: Project | null = null;
  let error: string | null = null;

  try {
    project = await fetcher<Project>(`/projects/${slug}`);
  } catch (err: any) {
    if (err.message?.includes("404") || err.message?.toLowerCase().includes("not found")) {
      notFound(); // يعرض صفحة 404 الافتراضية
    }
    error = err.message || "فشل في تحميل بيانات المشروع";
  }

  if (error) {
    return <div className="container mx-auto py-10 text-destructive text-center">⚠️ {error}</div>;
  }
  if (!project) return null;

  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Card className="overflow-hidden">
        {/* صورة المشروع */}
        <div className="w-full h-64 md:h-96 bg-muted relative">
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">بدون صورة</div>
          )}
        </div>

        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <Badge variant={project.status === "published" ? "default" : "secondary"}>
              {project.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            تاريخ النشر: {new Date(project.createdAt).toLocaleDateString("ar-DZ")}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* الوصف */}
          <div className="prose max-w-none">
            <p className="whitespace-pre-wrap text-muted-foreground">
              {project.description || "لا يوجد وصف متاح."}
            </p>
          </div>

          {/* التقنيات */}
          <div>
            <h3 className="text-lg font-semibold mb-2">التقنيات المستخدمة</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
          </div>

          {/* دليل التثبيت */}
          {project.setupGuide && (
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">📖 دليل التثبيت / التشغيل</h3>
              <pre className="whitespace-pre-wrap text-sm font-mono bg-background p-4 rounded-md border">
                {project.setupGuide}
              </pre>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-wrap gap-3 p-6 pt-0">
          {project.demoLink && (
            <Button asChild>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">🌐 معاينة حية</a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="outline" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">💻 كود المصدر (GitHub)</a>
            </Button>
          )}
          <Button variant="ghost" asChild>
            <Link href="/">← العودة للقائمة</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}