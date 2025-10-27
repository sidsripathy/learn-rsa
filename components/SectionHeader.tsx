import { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  anchor?: string;
};

export const SectionHeader = ({ eyebrow, title, description, anchor }: SectionHeaderProps) => (
  <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">{eyebrow}</span>
      )}
      <h2 id={anchor} className="mt-2 text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 max-w-2xl text-base text-slate-300">{description}</p>}
    </div>
  </div>
);
