import { processSteps } from "@/lib/site";
import { SectionHeading } from "./Section";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          label="Our Process"
          title="A Proven"
          highlight="Framework"
          sub="That turns data, creativity, and precision into measurable growth."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((p) => (
            <div key={p.step} className="card relative overflow-hidden">
              <span className="absolute right-3 top-1 text-6xl font-black text-violet-500/10">
                {p.step}
              </span>
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm font-semibold gradient-text">{p.sub}</p>
              <ul className="mt-4 space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
