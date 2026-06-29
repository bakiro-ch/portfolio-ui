import { Card } from '@/components/ui/card';

export function StatCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="flex flex-col justify-center items-center p-6 text-center">
      <p className="text-2xl lg:text-4xl font-bold text-primary">{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </Card>
  );
}