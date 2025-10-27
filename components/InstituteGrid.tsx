import Link from 'next/link';
import { institutes } from '@/data/institutes';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

export const InstituteGrid = () => (
  <section id="all-iiits" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="participating nodes"
      title="All IIITs"
      description="Browse every institute command center. Tap into coordinator intel, SPOC channels, and team dossiers."
      anchor="all-iiits"
    />
    <div className="grid gap-6 md:grid-cols-2">
      {institutes.map((inst) => (
        <NeonCard key={inst.slug}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{inst.region}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{inst.shortName}</h3>
              <p className="mt-3 text-sm text-slate-300">{inst.summary}</p>
            </div>
            <Link
              href={`/institutes/${inst.slug}`}
              className="self-start rounded-full border border-white/30 px-5 py-2 text-sm text-slate-200 transition hover:border-white hover:text-white"
            >
              View institute
            </Link>
          </div>
        </NeonCard>
      ))}
    </div>
  </section>
);
