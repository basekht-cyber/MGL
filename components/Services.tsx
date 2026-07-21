import { services } from "@/lib/site";
import { SectionHeading } from "./Section";

export function Services() {
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <SectionHeading
          label="Our Services"
          title="End-to-End"
          highlight="Growth Solutions"
          sub="Designed to increase visibility, drive user acquisition, build communities, and maximize ROI."
        />

        <div className="mt-6 carousel sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.name} className="card carousel-item group">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-300 ring-1 ring-violet-500/20">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-base font-bold text-white group-hover:text-violet-200">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Chips rather than bulleted text: bare wrapped labels leave ragged,
            uneven rows, while pills keep their own shape at any width. */}
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3">
          {["Result Driven Strategies", "Expert Global Marketers", "Data-Backed Decisions", "Transparent & Reliable", "24/7 Support"].map(
            (t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-panel/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-violet-500/40 hover:text-white sm:px-4 sm:text-sm"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-violet-400"
                  aria-hidden="true"
                >
                  <path d="m4 12.5 5.5 5.5L20 6.5" />
                </svg>
                {t}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
