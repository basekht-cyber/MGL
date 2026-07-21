"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-violet-500/10 bg-ink/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" aria-label="Meta Growth Labs home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-violet-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden lg:inline-flex">
          Schedule a Call
        </a>

        <button
          className="-mr-2 p-2 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-violet-500/10 bg-ink/95 backdrop-blur-md lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-violet-500/10 hover:text-violet-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Schedule a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
