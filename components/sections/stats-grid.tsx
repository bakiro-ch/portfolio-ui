import { StatCard } from '@/components/features/stat-card';

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 lg:p-10">
      <StatCard title="50+" description="Projects Completed" />
      <StatCard title="100%" description="Client Satisfaction" />
      <StatCard title="5+" description="Years Experience" />
      <StatCard title="Global" description="Remote Friendly" />
    </div>
  );
}