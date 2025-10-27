export const Footer = () => (
  <footer className="border-t border-white/10 bg-midnight/80">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs uppercase tracking-[0.2em] text-slate-200/60 md:flex-row">
      <span>© {new Date().getFullYear()} Inter IIIT Hackathon Mission Control</span>
      <span>Crafted in a retro-futuristic orbit · Stay neon</span>
    </div>
  </footer>
);
