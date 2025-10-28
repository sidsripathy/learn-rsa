'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { Institute } from '@/data/types';
import { NeonCard } from './NeonCard';

const MAP_BOUNDS = {
  minLat: 6,
  maxLat: 37.5,
  minLng: 68,
  maxLng: 97.5
};

const VIEWBOX_WIDTH = 420;
const VIEWBOX_HEIGHT = 460;

const mainlandPath =
  'M152 12L170 38L188 70L200 106L214 150L222 196L220 228L226 260L220 300L204 332L186 358L160 378L142 410L118 436L92 426L72 438L52 422L54 388L44 352L38 320L44 286L38 250L46 214L58 186L62 154L72 120L90 92L110 70L126 44Z';

const northeastPath =
  'M248 136L258 150L272 170L282 190L288 210L286 230L270 220L254 210L244 190L238 166Z';

const islandsPath = 'M182 420L190 438L184 450L170 440Z';

const normalise = (lat: number, lng: number) => {
  const x = ((lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)) * VIEWBOX_WIDTH;
  const y = ((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * VIEWBOX_HEIGHT;
  return { x, y };
};

export const IndiaMap = ({ institutes }: { institutes: Institute[] }) => {
  const [activeSlug, setActiveSlug] = useState(institutes[0]?.slug ?? '');
  const [hoverSlug, setHoverSlug] = useState<string | null>(null);

  const instituteBySlug = useMemo(() => {
    const lookup = new Map<string, Institute>();
    institutes.forEach((inst) => lookup.set(inst.slug, inst));
    return lookup;
  }, [institutes]);

  const activeInstitute = instituteBySlug.get(activeSlug) ?? institutes[0];
  const hoveredInstitute = hoverSlug ? instituteBySlug.get(hoverSlug) : null;
  const hoveredPosition = hoveredInstitute
    ? normalise(hoveredInstitute.coordinates.lat, hoveredInstitute.coordinates.lng)
    : null;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.5)]">
          <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-br from-slate-800/40 via-slate-900/20 to-slate-950/60" />
          <div className="relative" style={{ aspectRatio: '21 / 23' }}>
            <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className="h-full w-full text-slate-700">
              <defs>
                <radialGradient id="india-glow" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                  <stop offset="45%" stopColor="#6366f1" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
                </radialGradient>
                <linearGradient id="india-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <g>
                <path d={mainlandPath} fill="url(#india-glow)" stroke="url(#india-stroke)" strokeWidth={2.4} strokeLinejoin="round" />
                <path d={northeastPath} fill="url(#india-glow)" stroke="url(#india-stroke)" strokeWidth={2.2} strokeLinejoin="round" />
                <path d={islandsPath} fill="url(#india-glow)" stroke="url(#india-stroke)" strokeWidth={2} strokeLinejoin="round" />
              </g>
            </svg>
            {institutes.map((inst) => {
              const { x, y } = normalise(inst.coordinates.lat, inst.coordinates.lng);
              const isActive = inst.slug === activeInstitute?.slug;
              const isHovered = inst.slug === hoveredInstitute?.slug;
              return (
                <button
                  key={inst.slug}
                  type="button"
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/70 bg-emerald-500/80 p-1.5 transition focus:outline-none focus:ring-2 focus:ring-emerald-300/80 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    isActive ? 'scale-[1.05]' : 'opacity-90'
                  }`}
                  style={{ left: `${(x / VIEWBOX_WIDTH) * 100}%`, top: `${(y / VIEWBOX_HEIGHT) * 100}%` }}
                  onMouseEnter={() => setHoverSlug(inst.slug)}
                  onMouseLeave={() => setHoverSlug(null)}
                  onFocus={() => setHoverSlug(inst.slug)}
                  onBlur={() => setHoverSlug(null)}
                  onClick={() => setActiveSlug(inst.slug)}
                  aria-pressed={isActive}
                  aria-label={`View ${inst.shortName}`}
                >
                  <span className={`block h-2.5 w-2.5 rounded-full bg-white ${isHovered || isActive ? 'shadow-[0_0_0_6px_rgba(16,185,129,0.35)]' : ''}`} />
                  <span
                    className={`pointer-events-none absolute inset-0 rounded-full transition ${
                      isActive || isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/40" />
                  </span>
                </button>
              );
            })}
            {hoveredInstitute && hoveredPosition && (
              <div
                className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-2xl border border-white/20 bg-slate-900/90 px-4 py-3 text-left shadow-xl"
                style={{
                  left: `${(hoveredPosition.x / VIEWBOX_WIDTH) * 100}%`,
                  top: `calc(${(hoveredPosition.y / VIEWBOX_HEIGHT) * 100}% - 1.25rem)`
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">{hoveredInstitute.region}</p>
                <p className="mt-1 text-sm font-medium text-white">{hoveredInstitute.shortName}</p>
              </div>
            )}
          </div>
          <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
            <p className="uppercase tracking-[0.3em]">Tap a beacon to lock focus</p>
            <p className="flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Active IIIT signal
            </p>
          </div>
        </div>
      </div>
      {activeInstitute && (
        <NeonCard className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-indigo-500/10" />
          <div className="relative space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">{activeInstitute.region}</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{activeInstitute.shortName}</h2>
              <p className="mt-3 text-sm text-slate-200/90">{activeInstitute.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Coordinator</p>
                <p className="mt-2 text-base font-semibold text-white">{activeInstitute.coordinator.name}</p>
                <p className="text-sm text-slate-300">{activeInstitute.coordinator.tagline}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">SPOC</p>
                <p className="mt-2 text-base font-semibold text-white">{activeInstitute.spoc.name}</p>
                <p className="text-sm text-slate-300">{activeInstitute.spoc.tagline}</p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Featured teams</p>
              <ul className="mt-3 grid gap-2 text-sm text-slate-200">
                {activeInstitute.teams.slice(0, 4).map((team) => (
                  <li key={team.name} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <div>
                      <p className="font-medium text-white">{team.name}</p>
                      <p className="text-xs text-slate-300">{team.project.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/institutes/${activeInstitute.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm text-slate-100 transition hover:border-white hover:text-white"
              >
                View full dossier
                <span aria-hidden className="text-base">↗</span>
              </Link>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-500">4 squads deployed</span>
            </div>
          </div>
        </NeonCard>
      )}
    </div>
  );
};
