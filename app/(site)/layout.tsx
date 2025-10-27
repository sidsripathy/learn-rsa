import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
