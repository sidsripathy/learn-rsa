import Link from 'next/link';
import { NeonCard } from './NeonCard';

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,106,213,0.35),_transparent_55%)]" />
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:py-24">
      <div className="md:w-3/5">
        <span className="neon-tag">Retro Futurism 2024</span>
        <h1 className="mt-6 text-4xl leading-tight text-white md:text-6xl">
          Inter IIIT Hackathon · <span className="text-neon-cyan">Mission Control</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200/80 md:text-lg">
          Navigate the entire hackathon universe — track leaders, explore institute squads, and sync with sponsors — all in a
          single neon-clad dashboard built for agility and awe.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link
            href="#leaderboards"
            className="rounded-full bg-neon-pink px-6 py-3 font-medium uppercase tracking-[0.3em] text-midnight shadow-glow transition hover:bg-neon-yellow"
          >
            View Leaderboards
          </Link>
          <Link
            href="#registration"
            className="rounded-full border border-neon-cyan/60 px-6 py-3 font-medium uppercase tracking-[0.3em] text-neon-cyan transition hover:border-neon-pink/60 hover:text-neon-pink"
          >
            Registration Grid
          </Link>
        </div>
      </div>
      <div className="md:w-2/5">
        <NeonCard>
          <div className="space-y-4 text-sm text-slate-200/80">
            <p className="text-neon-yellow uppercase tracking-[0.35em]">Round 2 in progress</p>
            <h3 className="text-2xl text-white">Immersive Prototype Trials</h3>
            <p>
              24 institutes are streaming their prototypes live. Mission Control monitors flux in crowd votes, mentor syncs, and
              telemetry from hybrid hardware labs.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs uppercase tracking-[0.2em] text-white/70">
              <div>
                <p className="text-neon-cyan">Next Sync</p>
                <p className="text-base text-white">20:00 IST</p>
              </div>
              <div>
                <p className="text-neon-cyan">Top Track</p>
                <p className="text-base text-white">Smart Cities</p>
              </div>
              <div>
                <p className="text-neon-cyan">Live Mentors</p>
                <p className="text-base text-white">14</p>
              </div>
              <div>
                <p className="text-neon-cyan">Spectator Nodes</p>
                <p className="text-base text-white">3.8k</p>
              </div>
            </div>
          </div>
        </NeonCard>
      </div>
    </div>
  </section>
);
