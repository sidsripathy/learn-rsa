import { DashboardPanel } from '@/components/DashboardPanel';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { InstituteGrid } from '@/components/InstituteGrid';
import { Leaderboards } from '@/components/Leaderboards';
import { Navigation } from '@/components/Navigation';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { RegistrationTimeline } from '@/components/RegistrationTimeline';
import { Sponsors } from '@/components/Sponsors';
import { StatsGrid } from '@/components/StatsGrid';
import { TeamsSection } from '@/components/TeamsSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <DashboardPanel />
        <StatsGrid />
        <Sponsors />
        <InstituteGrid />
        <Leaderboards />
        <ProjectsShowcase />
        <RegistrationTimeline />
        <TeamsSection />
      </main>
      <Footer />
    </div>
  );
}
