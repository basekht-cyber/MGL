import { fundraisingServices, fundraisingStats } from "@/lib/site";
import { SectionHeading } from "./Section";

const steps = [
  "Discovery",
  "Strategy & Planning",
  "Investor Targeting",
  "Outreach & Pitching",
  "Negotiation & Closing",
  "Growth & Support",
];

export function Fundraising() {
  return (
    <section id="fundraising" className="section-y">
      <div className="container-x">
        <SectionHeading
          label="Our Fundraising Solutions"
          title="Fundraising"
          highlight="Services"
          sub="We don't just raise funds. We build investor confidence — from strategic planning to closing, helping Web3 projects secure the capital they need."
        />

        <div className="mt-6 carousel sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {fundraisingServices.map((s) => (
            <div key={s.name} className="card carousel-item">
              <h3 className="text-base font-bold text-white">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        {/* process steps */}
        <div className="mt-8 rounded-2xl border border-violet-500/15 bg-panel/50 p-5 sm:p-6">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-violet-300 sm:text-sm sm:tracking-[0.25em]">
            Our Fundraising Process
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 rounded-full border border-violet-500/25 px-3 py-1.5 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm">
                  <span className="text-xs font-bold text-violet-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="hidden text-violet-500/50 sm:inline">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {fundraisingStats.map((s) => (
            <div key={s.label} className="card text-center">
              <p className="text-2xl font-extrabold gradient-text sm:text-3xl">{s.num}</p>
              <p className="mt-1 text-xs leading-tight text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
