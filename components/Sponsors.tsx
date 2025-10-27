import Image from 'next/image';
import { sponsorGroups } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

export const Sponsors = () => (
  <section id="sponsors" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="alliances"
      title="Sponsors"
      description="Partners powering every photon of the hackathon — from compute credits to holo-stage experiences."
      anchor="sponsors"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {sponsorGroups.map((group) => (
        <NeonCard key={group.tier}>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neon-yellow">{group.tier}</p>
            <div className="space-y-4">
              {group.sponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image src={sponsor.logo} alt={sponsor.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{sponsor.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200/70">{sponsor.tagline}</p>
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
