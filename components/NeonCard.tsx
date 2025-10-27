import { ReactNode } from 'react';

export const NeonCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`gradient-border card-glow ${className ?? ''}`}>
    <div className="content h-full rounded-[1.15rem] bg-midnight/80 p-6 backdrop-blur-xl">
      {children}
    </div>
  </div>
);
