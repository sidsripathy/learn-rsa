import Image from 'next/image';
import { organisingUnits } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

export const TeamsSection = () => (
  <section id="teams" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="organising constellations"
      title="Teams"
      description="Meet the crews orchestrating everything from mission control to neon-infused storytelling."
      anchor="teams"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {organisingUnits.map((unit) => (
        <NeonCard key={unit.name}>
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-lg text-white">{unit.name}</h3>
              <p className="text-sm text-slate-200/70">{unit.description}</p>
            </div>
            <div className="mt-6 space-y-3">
              {unit.leads.map((lead) => (
                <div key={lead.email} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={lead.photo} alt={lead.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{lead.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan">{lead.role}</p>
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
