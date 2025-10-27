import { topProjects } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

export const ProjectsShowcase = () => (
  <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="mission dossiers"
      title="Projects"
      description="A glimpse into the prototypes turning imagination into infrastructure. Dive deeper inside institute pages."
      anchor="projects"
    />
    <div className="grid gap-6 md:grid-cols-2">
      {topProjects.map((project) => (
        <NeonCard key={project.title}>
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{project.institute}</p>
              <h3 className="text-xl text-white">{project.title}</h3>
              <p className="text-sm text-slate-200/70">{project.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neon-yellow">
              <span>{project.media}</span>
              <span className="text-slate-200/70">{project.team}</span>
            </div>
          </div>
        </NeonCard>
      ))}
    </div>
  </section>
);
