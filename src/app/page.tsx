import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import PortfolioProjects from '@/components/PortfolioProjects';
import { AuroraHeroSection } from '@/components/ui/aurora-hero-section';

async function getAdmin() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const { data: admin } = await supabase
      .from('admin')
      .select('id')
      .eq('admin_id', user.id)
      .single();

    return admin ? user : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const admin = await getAdmin();

  return (
    <div className="min-h-screen bg-zinc-900 dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Portfolio
          </Link>
          <div className="flex gap-2 sm:gap-4">
            {admin ? (
              <>
                <span className="text-zinc-300 self-center text-xs sm:text-sm truncate">{admin.email}</span>
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <Button>Admin Login</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Aurora Hero Section */}
      <AuroraHeroSection />

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-300 text-lg">
            Check out some of my recent work and projects
          </p>
        </div>

        {/* Projects Grid */}
        <PortfolioProjects isAdmin={!!admin} />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-900 border-t border-zinc-800 text-zinc-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Portfolio</h3>
              <p className="text-sm">Showcasing my best work and creative projects</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#projects" className="hover:text-white transition">Projects</Link></li>
                <li><Link href="/login" className="hover:text-white transition">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition">GitHub</a>
                <a href="#" className="hover:text-white transition">LinkedIn</a>
                <a href="#" className="hover:text-white transition">Email</a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-sm">
            <p>&copy; 2026 My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
