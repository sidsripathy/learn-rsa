import Image from 'next/image';
import Link from 'next/link';
import { institutes } from '@/data/institutes';
import { NeonCard } from '@/components/NeonCard';

export default function TeamsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Featured squads</span>
        <h1 className="mt-4 text-4xl font-semibold text-white">Participant teams from every IIIT</h1>
        <p className="mt-4 text-base text-slate-300">
          Discover four flagship teams representing each institute. Jump into their dossiers for deep dives on members, problem statements, and technology stacks.
        </p>
      </div>
      <div className="space-y-6">
        {institutes.map((institute) => (
          <NeonCard key={institute.slug}>
            <div className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{institute.shortName}</p>
                  <h2 className="text-2xl font-semibold text-white">{institute.name}</h2>
                  <p className="mt-2 text-sm text-slate-300">{institute.summary}</p>
                </div>
                <Link
                  href={`/institutes/${institute.slug}`}
                  className="inline-flex w-max items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm text-slate-200 transition hover:border-white hover:text-white"
                >
                  View dossier
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {institute.teams.slice(0, 4).map((team) => (
                  <div key={`${institute.slug}-${team.name}`} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                          Round {team.round} · {team.track}
                        </p>
                        <h3 className="text-lg font-semibold text-white">{team.name}</h3>
                        <p className="mt-2 text-sm text-slate-300">{team.project.title}</p>
                      </div>
                      <div className="flex -space-x-3">
                        {team.members.slice(0, 4).map((member) => (
                          <div key={`${team.name}-${member.name}`} className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10">
                            <Image src={member.photo} alt={member.name} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </NeonCard>
        ))}
      </div>
    </section>
  );
}
