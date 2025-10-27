'use client';

import Link from 'next/link';
import { useState } from 'react';

const sections = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Hackathon', href: '/hackathon' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'All IIITs', href: '/all-iiits' },
  { label: 'Leaderboards', href: '/leaderboards' },
  { label: 'Projects', href: '/projects' },
  { label: 'Registration', href: '/registration' },
  { label: 'Teams', href: '/teams' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Inter IIIT Hackathon
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="transition hover:text-white">
              {section.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative h-10 w-10 rounded-full border border-white/20 text-xs uppercase tracking-[0.1em] text-white md:hidden"
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-slate-950 px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-slate-200">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
