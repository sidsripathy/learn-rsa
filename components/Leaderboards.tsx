import { roundOneLeaderboard, roundThreeLeaderboard, roundTwoLeaderboard } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

const leaderboardData = [
  { title: 'Leaderboard Round 1', entries: roundOneLeaderboard, gradient: 'from-neon-pink/30 via-transparent to-transparent' },
  { title: 'Leaderboard Round 2', entries: roundTwoLeaderboard, gradient: 'from-neon-cyan/30 via-transparent to-transparent' },
  { title: 'Leaderboard Round 3', entries: roundThreeLeaderboard, gradient: 'from-neon-yellow/30 via-transparent to-transparent' }
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{board.title}</h3>
            <div className={`rounded-xl border border-white/10 bg-gradient-to-br ${board.gradient} p-4`}>
              <ul className="space-y-3 text-sm">
                {board.entries.map((entry) => (
                  <li key={entry.team} className="flex items-center justify-between gap-4 rounded-lg bg-white/5 p-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">#{entry.position}</p>
                      <p className="text-base text-white">{entry.team}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-200/70">{entry.institute}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-neon-yellow">{entry.score}</p>
                      {entry.badge && <p className="text-[10px] uppercase tracking-[0.3em] text-neon-pink">{entry.badge}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NeonCard>
      ))}
    </div>
  </section>
);
