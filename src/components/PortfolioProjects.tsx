'use client';

import { useProjects } from '@/hooks/useProjects';
import { Card } from '@/components/ui/Card';
import { EmptyState } from '@/components/ui/EmptyState';
import { CardSkeleton } from '@/components/ui/Skeleton';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FileJson } from 'lucide-react';

export default function PortfolioProjects({ isAdmin }: { isAdmin: boolean }) {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-lg">
        {error}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <Card className="p-12">
        <EmptyState
          icon={<FileJson size={48} />}
          title="No projects yet"
          description="Check back soon for amazing projects!"
          action={
            isAdmin && (
              <Link href="/dashboard/projects">
                <Button>Go to Dashboard</Button>
              </Link>
            )
          }
        />
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} hoverable className="overflow-hidden flex flex-col">
            {project.image_url && (
              <div className="h-40 bg-zinc-700 overflow-hidden">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4 flex-1">{project.description}</p>
              <p className="text-sm text-zinc-500">
                {new Date(project.created_at).toLocaleDateString()}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {isAdmin && (
        <div className="text-center mt-12 p-6 bg-blue-900/30 rounded-2xl border border-blue-700">
          <p className="text-blue-300 mb-4">Want to manage your projects?</p>
          <Link href="/dashboard/projects">
            <Button className="px-8">Go to Admin Dashboard</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
