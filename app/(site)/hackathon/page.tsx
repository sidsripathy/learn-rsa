import { NeonCard } from '@/components/NeonCard';
import { StatsGrid } from '@/components/StatsGrid';

const missionPillars = [
  {
    title: 'Round architecture',
    description:
      'Two qualification rounds distil 24 institutes into the top four squads. The championship sprint fuses juried demos, mentor syncs, and live community scoring.'
  },
  {
    title: 'Experience ethos',
    description:
      'Retro-futuristic staging mixes holo-terminals, synthwave scoring, and tactile briefing decks so participants can focus on collaboration without losing the thrill.'
  },
  {
    title: 'Support grid',
    description:
      'Distributed help desks route issues within minutes, while mentors drop in with code reviews, design audits, and pitch drills to keep every build on trajectory.'
  }
];

export default function HackathonPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Hackathon protocol</span>
          <h1 className="mt-4 text-4xl font-semibold text-white">How the Inter IIIT Hackathon unfolds</h1>
          <p className="mt-4 text-base text-slate-300">
            Dive into the mission blueprint: rounds, rituals, and the support systems that keep 24 institutes aligned on the retro-futuristic vision.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {missionPillars.map((pillar) => (
            <NeonCard key={pillar.title}>
              <div className="space-y-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">{pillar.title}</p>
                <p className="text-sm text-slate-300">{pillar.description}</p>
              </div>
            </NeonCard>
          ))}
        </div>
      </section>
      <StatsGrid />
    </>
  );
}
