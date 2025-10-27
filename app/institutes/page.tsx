import Link from 'next/link';
import { institutes } from '@/data/institutes';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { NeonCard } from '@/components/NeonCard';

export default function InstitutesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <div className="mb-12 text-center">
          <span className="neon-tag">Participating Nodes</span>
          <h1 className="mt-4 text-4xl text-white">Institute Command Directory</h1>
          <p className="mt-4 text-base text-slate-200/70">
            Access the retro-futuristic dossiers for every IIIT. Each mission hub details coordinators, SPOCs, and active squads.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {institutes.map((inst) => (
            <NeonCard key={inst.slug}>
              <div className="space-y-3 text-sm text-slate-200/70">
                <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{inst.region}</p>
                <h2 className="text-2xl text-white">{inst.name}</h2>
                <p>{inst.summary}</p>
                <Link
                  href={`/institutes/${inst.slug}`}
                  className="inline-flex w-max rounded-full border border-neon-cyan/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-neon-cyan transition hover:border-neon-pink/60 hover:text-neon-pink"
                >
                  Launch Mission
                </Link>
              </div>
            </NeonCard>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
