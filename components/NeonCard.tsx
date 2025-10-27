import { ReactNode } from 'react';

export const NeonCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={`h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.45)] backdrop-blur ${
      className ?? ''
    }`}
  >
    {children}
  </div>
);
