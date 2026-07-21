import { caseStudies } from "@/lib/site";
import { SectionHeading } from "./Section";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          label="Proven Strategies. Powerful Results."
          title="Case"
          highlight="Studies"
          sub="Real projects. Real strategies. Real results that speak."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((c) => (
            <article key={c.id} className="card flex flex-col">
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-violet-500/10 px-2.5 py-1 text-sm font-bold text-violet-300 ring-1 ring-violet-500/20">
                  {c.id}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{c.name}</h3>
                  <p className="text-sm gradient-text">{c.type}</p>
                </div>
                <span className="ml-auto rounded-full border border-violet-500/30 px-3 py-1 text-xs text-violet-200">
                  {c.campaign}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">{c.body}</p>

              <div className="mt-5 grid grid-cols-4 gap-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg bg-violet-500/5 px-2 py-3 text-center">
                    <p className="text-lg font-extrabold gradient-text">{m.num}</p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-5 border-l-2 border-violet-500/40 pl-4 text-sm italic text-slate-300">
                “{c.quote}”
                <footer className="mt-1 text-xs font-semibold not-italic text-violet-300">
                  — {c.author}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
