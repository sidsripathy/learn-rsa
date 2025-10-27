import { roundOneLeaderboard, roundThreeLeaderboard, roundTwoLeaderboard } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

const leaderboardData = [
  { title: 'Leaderboard round 1', entries: roundOneLeaderboard },
  { title: 'Leaderboard round 2', entries: roundTwoLeaderboard },
  { title: 'Leaderboard round 3', entries: roundThreeLeaderboard }
];

export const Leaderboards = () => (
  <section id="leaderboards" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="signal boosts"
      title="Leaderboards"
      description="Track the squads bending reality each round. Top four teams auto-warp into the next showdown."
      anchor="leaderboards"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {leaderboardData.map((board) => (
        <NeonCard key={board.title}>
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">{board.title}</h3>
            <ul className="space-y-3 text-sm">
              {board.entries.map((entry) => (
                <li key={entry.team} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">#{entry.position}</p>
                    <p className="mt-1 text-base font-medium text-white">{entry.team}</p>
                    <p className="text-sm text-slate-300">{entry.institute}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-white">{entry.score}</p>
                    {entry.badge && (
                      <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">{entry.badge}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </NeonCard>
      ))}
    </div>
  </section>
);
