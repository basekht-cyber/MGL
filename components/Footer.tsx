import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-violet-500/10 py-12">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.tagline}. We help brands and Web3 projects launch, grow, and dominate their markets.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Scale Faster. <span className="text-violet-400">Grow Smarter.</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-violet-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="font-semibold text-white">Get in touch</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-slate-400 hover:text-violet-300">
              {site.email}
            </a>
            <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-violet-300">
              {site.telegram}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-violet-300">
              LinkedIn — {site.linkedinName}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-violet-500/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
