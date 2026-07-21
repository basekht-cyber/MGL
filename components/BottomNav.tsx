"use client";

import { useEffect, useRef, useState } from "react";

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Mirrors the hamburger menu, plus Home. Every id matches a section on the page.
const tabs = [
  {
    id: "top",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V20h13V9.5" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 11v5.5M12 7.8v.4" />
      </svg>
    ),
  },
  {
    id: "services",
    label: "Services",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </svg>
    ),
  },
  {
    id: "process",
    label: "Process",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 6.5h9M4 12h13M4 17.5h7" />
        <circle cx="18.5" cy="6.5" r="2" />
        <circle cx="15.5" cy="17.5" r="2" />
      </svg>
    ),
  },
  {
    id: "industries",
    label: "Industries",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.4-5.4-3.4-8.5S9.8 5.9 12 3.5Z" />
      </svg>
    ),
  },
  {
    id: "case-studies",
    label: "Case Studies",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 20V11M9.3 20V5M14.7 20v-6M20 20V8" />
      </svg>
    ),
  },
  {
    id: "fundraising",
    label: "Fundraising",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M14.5 9.2A2.8 2.8 0 0 0 12 8c-1.4 0-2.5.8-2.5 2s1.1 1.8 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2a2.8 2.8 0 0 1-2.5-1.2M12 6.4v11.2" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-5.1A8 8 0 1 1 21 11.5Z" />
      </svg>
    ),
  },
];

export function BottomNav() {
  const [active, setActive] = useState("top");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  // While a tap is animating to its section, the spy must not steal the
  // highlight and flash through every section passed on the way.
  const lockedRef = useRef<string | null>(null);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const centerRafRef = useRef<number>();

  function selectTab(id: string) {
    setActive(id);
    lockedRef.current = id;

    // Safety net: release the lock even if the target never lands exactly.
    clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      lockedRef.current = null;
    }, 1200);
  }

  useEffect(() => () => clearTimeout(lockTimerRef.current), []);

  // Highlight whichever section is currently under the top of the viewport.
  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const compute = () => {
      let current = sections[0].id;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= 120) current = el.id;
      }
      // The last section is short — snap to it once the page bottoms out.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = tabs[tabs.length - 1].id;
      }

      if (lockedRef.current) {
        // Hand control back to the spy only once the tapped section is reached.
        if (current === lockedRef.current) lockedRef.current = null;
        return;
      }

      setActive(current);
    };

    // Coalesce scroll events into one update per frame so the bar can't jitter.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        compute();
      });
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Keep the active pill centred in the strip, without scrolling the page itself.
  // Hand-rolled rather than scrollTo({behavior:"smooth"}): the native curve is
  // slow and differs per browser, and it cannot be interrupted mid-flight.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const item = itemRefs.current[active];
    if (!scroller || !item) return;

    const max = scroller.scrollWidth - scroller.clientWidth;
    const target = Math.max(
      0,
      Math.min(max, item.offsetLeft - (scroller.clientWidth - item.clientWidth) / 2),
    );

    const from = scroller.scrollLeft;
    const delta = target - from;

    // Ignore sub-pixel corrections — re-centring on every tiny delta reads as jitter.
    if (Math.abs(delta) < 2) return;

    cancelAnimationFrame(centerRafRef.current ?? 0);

    // Longer trips get a little more time, so near and far taps feel alike.
    const duration = Math.min(520, 260 + Math.abs(delta) * 0.35);
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      scroller.scrollLeft = from + delta * eased;
      if (t < 1) centerRafRef.current = requestAnimationFrame(step);
      else centerRafRef.current = undefined;
    };

    centerRafRef.current = requestAnimationFrame(step);
  }, [active]);

  // A touch on the strip cancels the glide so the user is never fought.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cancel = () => {
      cancelAnimationFrame(centerRafRef.current ?? 0);
      centerRafRef.current = undefined;
    };

    scroller.addEventListener("pointerdown", cancel, { passive: true });
    scroller.addEventListener("wheel", cancel, { passive: true });
    return () => {
      scroller.removeEventListener("pointerdown", cancel);
      scroller.removeEventListener("wheel", cancel);
      cancel();
    };
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      {/* fade so page content stays readable as it scrolls behind the bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink via-ink/90 to-transparent" />

      <div
        ref={scrollerRef}
        /* no CSS scroll-snap here: it re-snaps against the per-frame scrollLeft
           writes of the centring animation, which shows up as stutter */
        className="no-scrollbar relative overflow-x-auto overscroll-x-contain"
      >
        {/* w-max is required: without it the ul is capped at the scroller's
            width, the items overflow it, and the trailing padding collapses —
            leaving the last tab flush against the screen edge. */}
        {/* the side padding is exactly half the viewport minus half a tab, so
            the first and last tabs can still reach dead centre */}
        <ul className="flex w-max gap-3 px-[calc(50vw-1.75rem)] py-2">
          {tabs.map((t) => {
            const isActive = active === t.id;

            return (
              <li
                key={t.id}
                ref={(el) => {
                  itemRefs.current[t.id] = el;
                }}
                /* fixed height + bottom alignment: the active pill grows upward
                   only, so the bar itself never shifts while scrolling */
                className="flex h-[76px] w-14 shrink-0 flex-col items-center justify-end gap-1.5"
              >
                <a
                  href={`#${t.id}`}
                  aria-label={t.label}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => selectTab(t.id)}
                  /* the circle is always 56px; scaling (not resizing) keeps the
                     animation on the GPU so nothing reflows mid-scroll */
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] will-change-transform active:scale-90 ${
                    isActive ? "scale-100" : "scale-[0.75]"
                  }`}
                >
                  {/* Two permanent layers cross-fade by opacity. A gradient is a
                      background-image, so it cannot interpolate to a flat colour —
                      swapping classes would pop it in while the scale animates. */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md transition-opacity duration-300 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-glow ring-[3px] ring-ink transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`relative transition-colors duration-300 [&>svg]:h-5 [&>svg]:w-5 ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {t.icon}
                  </span>
                </a>
                <span
                  className={`w-full truncate text-center text-[10px] font-semibold leading-tight transition-colors duration-300 ${
                    isActive ? "text-violet-300" : "text-slate-500"
                  }`}
                >
                  {t.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
