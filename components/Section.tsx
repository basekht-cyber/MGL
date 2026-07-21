export function SectionHeading({
  label,
  title,
  highlight,
  sub,
  center = false,
}: {
  label?: string;
  title: string;
  highlight?: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {label && <span className="section-label mb-2 sm:mb-3">{label}</span>}
      <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {sub && (
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">{sub}</p>
      )}
    </div>
  );
}
