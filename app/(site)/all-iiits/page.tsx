import { IndiaMap } from '@/components/IndiaMap';
import { institutes } from '@/data/institutes';

export default function InstitutesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Participating institutes</span>
        <h1 className="mt-4 text-4xl font-semibold text-white">Institute command directory</h1>
        <p className="mt-4 text-base text-slate-300">
          Traverse an interactive India grid to locate each IIIT beacon. Select a campus to surface coordinators, SPOCs, and the
          four squads currently featured for the hackathon.
        </p>
      </div>
      <IndiaMap institutes={institutes} />
    </section>
  );
}
