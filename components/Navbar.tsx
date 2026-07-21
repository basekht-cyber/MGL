"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-violet-500/10 bg-ink/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="Meta Growth Labs home">
          <Logo />
        </a>

        {/* Links take over from the bottom tab bar at exactly the same
            breakpoint, so navigation is never missing at any width. */}
        <ul className="hidden items-center gap-4 md:flex lg:gap-7">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-medium text-slate-300 transition hover:text-violet-300 lg:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* No hamburger on mobile: the bottom tab bar already covers every
            section, so this slot is better spent on the primary action.
            It lands on the form itself, not the top of the contact section. */}
        <a
          href="#contact-form"
          className="btn-primary shrink-0 px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
