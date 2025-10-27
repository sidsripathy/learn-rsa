import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { institutes } from '@/data/institutes';
import type { Institute } from '@/data/types';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { NeonCard } from '@/components/NeonCard';

const getInstitute = (slug: string): Institute | undefined => institutes.find((inst) => inst.slug === slug);

export const generateStaticParams = () => institutes.map((inst) => ({ slug: inst.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const institute = getInstitute(params.slug);
  if (!institute) {
    return { title: 'Institute Not Found · Inter IIIT Hackathon' };
  }
  return {
    title: `${institute.shortName} · Inter IIIT Hackathon`,
    description: `Mission dashboard for ${institute.name}. Meet the coordinators, SPOCs, and squads representing the institute.`
  };
};

export default function InstitutePage({ params }: { params: { slug: string } }) {
  const institute = getInstitute(params.slug);

  if (!institute) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <div className="mb-12">
          <Link href="/institutes" className="text-xs uppercase tracking-[0.3em] text-neon-cyan">
            ← Back to Directory
          </Link>
          <h1 className="mt-4 text-4xl text-white">{institute.shortName}</h1>
          <p className="mt-3 text-base text-slate-200/70">{institute.summary}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-neon-yellow">{institute.region}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[{ label: 'Coordinating Faculty', person: institute.coordinator }, { label: 'Student SPOC', person: institute.spoc }].map(
            ({ label, person }) => (
              <NeonCard key={person.email}>
                <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-neon-cyan/60">
                    <Image src={person.photo} alt={person.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{label}</p>
                    <h2 className="mt-2 text-xl text-white">{person.name}</h2>
                    <p className="text-sm text-slate-200/70">{person.role}</p>
                    {person.tagline && <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neon-yellow">{person.tagline}</p>}
                    <div className="mt-3 space-y-1 text-xs text-slate-200/60">
                      {person.email && <p>{person.email}</p>}
                      {person.phone && <p>{person.phone}</p>}
                    </div>
                  </div>
                </div>
              </NeonCard>
            )
          )}
        </div>

        <section className="mt-16 space-y-8">
          <div>
            <h2 className="section-title text-2xl text-white">Teams</h2>
            <p className="mt-4 max-w-3xl text-sm text-slate-200/70">
              Explore the teams representing {institute.shortName}. Each dossier includes members, project tracks, and the
              problem statements they are reshaping.
            </p>
          </div>
          <div className="space-y-6">
            {institute.teams.map((team) => (
              <NeonCard key={team.name}>
                <div className="space-y-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Round {team.round} · {team.track}</p>
                      <h3 className="text-2xl text-white">{team.name}</h3>
                      {team.awards && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {team.awards.map((award) => (
                            <span key={award} className="neon-tag">
                              {award}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-right text-xs uppercase tracking-[0.3em] text-neon-yellow">
                      <span>{team.project.title}</span>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3 text-sm text-slate-200/70">
                      <h4 className="text-base text-white">Problem Statement</h4>
                      <p>{team.project.problemStatement}</p>
                      <h4 className="text-base text-white">Project Narrative</h4>
                      <p>{team.project.description}</p>
                      <div>
                        <h4 className="text-base text-white">Tech Stack</h4>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-neon-cyan">
                          {team.project.techStack.map((tech) => (
                            <span key={tech} className="rounded-full border border-neon-cyan/60 px-3 py-1">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base text-white">Highlights</h4>
                        <ul className="mt-2 space-y-2 text-sm text-slate-200/70">
                          {team.project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-neon-pink" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-base text-white">Team Members</h4>
                      <div className="grid gap-3">
                        {team.members.map((member) => (
                          <div key={member.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                              <Image src={member.photo} alt={member.name} fill className="object-cover" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">{member.name}</p>
                              <p className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan">{member.role}</p>
                              {member.tagline && <p className="text-xs text-slate-200/70">{member.tagline}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
