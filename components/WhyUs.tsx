import { whyUs } from "@/lib/site";
import { SectionHeading } from "./Section";

export function WhyUs() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          label="Proven Strategies. Powerful Results."
          title="Why"
          highlight="Meta Growth Labs?"
          sub="We combine deep Web3 expertise, data-driven strategies, and a results-first mindset to help projects grow faster, raise bigger, and dominate their markets."
        />

        <div className="mt-6 carousel sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="card carousel-item">
              <h3 className="text-base font-bold text-white">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
