import Link from 'next/link';
import { NeonCard } from './NeonCard';

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.18),_transparent_60%)]" />
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:py-28">
      <div className="md:w-3/5">
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Retro Futurism 2024</span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
          Inter IIIT Hackathon Mission Control
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Track every institute, discover top projects, and stay aligned with announcements from a single, thoughtfully
          curated dashboard tailored for the Inter IIIT Hackathon.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/leaderboards" className="rounded-full bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-200">
            View leaderboards
          </Link>
          <Link
            href="/registration"
            className="rounded-full border border-white/30 px-6 py-3 text-slate-200 transition hover:border-white hover:text-white"
          >
            Registration timeline
          </Link>
        </div>
      </div>
      <div className="md:w-2/5">
        <NeonCard>
          <div className="space-y-5 text-sm text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">Round two in progress</p>
            <h3 className="text-2xl font-semibold text-white">Immersive prototype trials</h3>
            <p>
              Twenty-four institutes are presenting their builds live. Follow the mentor syncs, community voting, and track the
              projects poised to reach the championship stage.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Next sync</p>
                <p className="text-base font-semibold text-white">20:00 IST</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Top track</p>
                <p className="text-base font-semibold text-white">Smart cities</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Live mentors</p>
                <p className="text-base font-semibold text-white">14</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Spectator nodes</p>
                <p className="text-base font-semibold text-white">3.8k</p>
              </div>
            </div>
          </div>
        </NeonCard>
      </div>
    </div>
  </section>
);
