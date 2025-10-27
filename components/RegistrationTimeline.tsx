import Link from 'next/link';
import { registrationWindows } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

export const RegistrationTimeline = () => (
  <section id="registration" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="sync windows"
      title="Registration"
      description="Stay on cadence. Each window unlocks assets, mentors, and logistics for the next round."
      anchor="registration"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {registrationWindows.map((window) => (
        <NeonCard key={window.title}>
          <div className="space-y-3 text-sm text-slate-200/70">
            <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{window.opens} — {window.closes}</p>
            <h3 className="text-lg text-white">{window.title}</h3>
            <p>{window.description}</p>
            <Link
              href={window.link}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-neon-cyan/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-neon-cyan transition hover:border-neon-pink/60 hover:text-neon-pink"
            >
              {window.cta}
            </Link>
          </div>
        </NeonCard>
      ))}
    </div>
  </section>
);
