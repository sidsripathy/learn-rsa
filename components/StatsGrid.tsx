import { hackathonStats } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

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
        <NeonCard key={key} className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            {key.replace(/([A-Z])/g, ' $1')}
          </p>
          <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
        </NeonCard>
      ))}
    </div>
  </section>
);
