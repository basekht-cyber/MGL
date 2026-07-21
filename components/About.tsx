import { aboutStats, pillars } from "@/lib/site";
import { SectionHeading } from "./Section";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading label="About Us" title="Who We" highlight="Are" />

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-slate-300">
              Meta Growth Labs is a performance-driven marketing agency specializing in
              Performance Marketing, Web3 Growth, and Fundraising for innovative brands and
              blockchain projects.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              We combine data, creativity, and cutting-edge strategies to help brands acquire
              users, build communities, and raise capital successfully.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {aboutStats.map((s) => (
                <div key={s.label}>
                  <p className="stat-num">{s.num}</p>
                  <p className="mt-1 text-xs leading-tight text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {pillars.map((p) => (
              <div key={p.title} className="card">
                <h3 className="text-lg font-bold text-white">
                  {p.title.split(" ")[0]}{" "}
                  <span className="gradient-text">
                    {p.title.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
