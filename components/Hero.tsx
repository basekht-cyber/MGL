import { heroFeatures, site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-36">
      {/* Decorative glow. Painted as radial gradients rather than blurred
          circles: filter:blur() needs a full offscreen buffer plus a gaussian
          pass every frame, while a gradient is effectively free and looks
          identical at this softness. */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.20),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(192,38,211,0.12),transparent_70%)]" />

      <div className="container-x relative">
        <p className="section-label animate-fade-up">
          Performance Marketing • Web3 Growth • Fundraising
        </p>

        <h1 className="max-w-4xl animate-fade-up text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Scaling Brands with <span className="gradient-text">Data-Driven Growth.</span>
        </h1>

        <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-slate-400 sm:text-lg">
          {site.description}
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-primary">
            Start Growing
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#services" className="btn-ghost">
            Explore Services
          </a>
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm sm:tracking-[0.3em]">
          Scale Faster. <span className="text-violet-400">Grow Smarter.</span>
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {heroFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-violet-500/15 bg-panel/50 px-4 py-4"
            >
              <p className="text-sm font-bold text-violet-300">{f.title}</p>
              <p className="text-xs text-slate-400">{f.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
