'use client';

import Link from 'next/link';
import { useState } from 'react';

const sections = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Hackathon', href: '#hackathon-stats' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'All IIITs', href: '#all-iiits' },
  { label: 'Leaderboards', href: '#leaderboards' },
  { label: 'Projects', href: '#projects' },
  { label: 'Registration', href: '#registration' },
  { label: 'Teams', href: '#teams' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-lg font-semibold tracking-[0.25em] text-neon-pink">
          INTER · IIIT · HACK
        </Link>
        <nav className="hidden gap-6 text-sm uppercase tracking-[0.25em] md:flex">
          {sections.map((section) => (
            <a key={section.href} href={section.href} className="text-slate-200 transition hover:text-neon-cyan">
              {section.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative h-10 w-10 rounded-full border border-white/20 text-xs uppercase tracking-[0.25em] text-white md:hidden"
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-midnight/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-4 text-sm uppercase tracking-[0.2em]">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="text-slate-200 transition hover:text-neon-cyan"
                onClick={() => setIsOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
