import { hackathonStats } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';

export const StatsGrid = () => (
  <section id="hackathon-stats" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="mission metrics"
      title="Hackathon Numbers"
      description="Live snapshot of the inter IIIT multiverse: from institute rosters to mentor swarms. Updated every sprint sync."
      anchor="hackathon-stats"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {Object.entries(hackathonStats).map(([key, value]) => (
        <div key={key} className="gradient-border">
          <div className="content rounded-[1.15rem] bg-midnight/80 p-6 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan">{key.replace(/([A-Z])/g, ' $1')}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
