import { industries } from "@/lib/site";
import { SectionHeading } from "./Section";

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          label="Industries We Serve"
          title="Partnering Across"
          highlight="Multiple Industries"
          sub="Helping innovative brands scale, grow, and lead their markets with data-driven marketing strategies."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.name} className="card">
              <h3 className="text-base font-bold text-white">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{ind.body}</p>
            </div>
          ))}
          <div className="card flex flex-col justify-center bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10">
            <p className="stat-num">10</p>
            <p className="mt-1 text-sm font-semibold text-white">Industries Empowered</p>
            <p className="mt-1 text-xs text-slate-400">1 Goal — Your Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
