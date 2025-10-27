import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { NeonCard } from '@/components/NeonCard';

const quickLinks = [
  {
    label: 'Dashboard',
    description: 'Monitor live rounds, announcements, and mentor relays in the command console.',
    href: '/dashboard'
  },
  {
    label: 'Hackathon',
    description: 'Understand the mission timeline, stats, and retro-futuristic format shaping the event.',
    href: '/hackathon'
  },
  {
    label: 'Sponsors',
    description: 'Meet the visionary partners powering prototypes, mentorship, and infrastructure.',
    href: '/sponsors'
  },
  {
    label: 'All IIITs',
    description: 'Jump to dossiers for every institute with coordinator, SPOC, and squad intel.',
    href: '/all-iiits'
  },
  {
    label: 'Leaderboards',
    description: 'Track standings across tracks and rounds as juries and mentors evaluate builds.',
    href: '/leaderboards'
  },
  {
    label: 'Projects',
    description: 'Explore project spotlights, problem statements, and tech stacks from standout teams.',
    href: '/projects'
  },
  {
    label: 'Registration',
    description: 'Review submission gates, readiness checks, and policies for each phase.',
    href: '/registration'
  },
  {
    label: 'Teams',
    description: 'Browse featured squads from every IIIT including member roles and accolades.',
    href: '/teams'
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Navigate the mission</span>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Choose your control surface</h2>
          <p className="mt-4 text-base text-slate-300">
            Every page distills a facet of the Inter IIIT Hackathon. Select where you need clarity and the console will take you there.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((item) => (
            <NeonCard key={item.href}>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  Enter module
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </NeonCard>
          ))}
        </div>
      </section>
    </>
  );
}
