import { reachStats } from "@/lib/site";
import { SectionHeading } from "./Section";

const benefits = [
  { title: "Maximum Visibility", body: "Get featured across top KOL channels and high-traffic communities." },
  { title: "Targeted Exposure", body: "Reach real, relevant, and highly engaged audiences that convert." },
  { title: "Faster Growth", body: "Leverage network effect to drive rapid awareness, FOMO, and adoption." },
  { title: "Trust & Credibility", body: "Backed by trusted voices and communities that build instant trust." },
  { title: "Long-Term Impact", body: "Stronger community, higher retention, and sustainable project growth." },
];

export function Reach() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          label="Our Network Strength"
          title="Our Reach. Real People."
          highlight="Real Impact."
          sub="We leverage a massive network of KOLs, Telegram communities, and Web3 influencers to put your project in front of the right audience."
        />

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {reachStats.map((s) => (
            <div
              key={s.label}
              className="card flex flex-col items-center justify-center text-center"
            >
              <p className="text-3xl font-extrabold gradient-text sm:text-4xl">{s.num}</p>
              <p className="mt-2 text-sm font-medium text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-violet-500/15 bg-panel/50 p-5">
              <h3 className="text-sm font-bold text-violet-300">{b.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
