import { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  anchor?: string;
};

export const SectionHeader = ({ eyebrow, title, description, anchor }: SectionHeaderProps) => (
  <div className="mb-8 md:flex md:items-end md:justify-between">
    <div>
      {eyebrow && <span className="neon-tag mb-3 inline-block tracking-[0.3em] text-xs">{eyebrow}</span>}
      <h2 id={anchor} className="section-title text-2xl md:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-2xl text-sm text-slate-200/80 md:text-base">{description}</p>}
    </div>
  </div>
);
