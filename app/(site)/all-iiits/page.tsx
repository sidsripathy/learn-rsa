import Link from 'next/link';
import { institutes } from '@/data/institutes';
import { NeonCard } from '@/components/NeonCard';

export default function InstitutesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Participating institutes</span>
        <h1 className="mt-4 text-4xl font-semibold text-white">Institute command directory</h1>
        <p className="mt-4 text-base text-slate-300">
          Access the dossiers for every IIIT. Each institute page details coordinators, SPOCs, and active squads ready for the
          hackathon.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {institutes.map((inst) => (
          <NeonCard key={inst.slug}>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{inst.region}</p>
              <h2 className="text-2xl font-semibold text-white">{inst.name}</h2>
              <p>{inst.summary}</p>
              <Link
                href={`/institutes/${inst.slug}`}
                className="inline-flex w-max rounded-full border border-white/30 px-5 py-2 text-sm text-slate-200 transition hover:border-white hover:text-white"
              >
                View institute
              </Link>
            </div>
          </NeonCard>
        ))}
      </div>
    </section>
  );
}
