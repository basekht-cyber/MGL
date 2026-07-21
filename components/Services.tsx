import { services } from "@/lib/site";
import { SectionHeading } from "./Section";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          label="Our Services"
          title="End-to-End"
          highlight="Growth Solutions"
          sub="Designed to increase visibility, drive user acquisition, build communities, and maximize ROI."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.name} className="card group">
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

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-center text-sm text-slate-400">
          {["Result Driven Strategies", "Expert Global Marketers", "Data-Backed Decisions", "Transparent & Reliable", "24/7 Support"].map(
            (t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                {t}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
