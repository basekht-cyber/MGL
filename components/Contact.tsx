"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { SectionHeading } from "./Section";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Telegram", value: site.telegram, href: site.telegramUrl },
  { label: "LinkedIn", value: site.linkedinName, href: site.linkedin },
  { label: "Website", value: site.website, href: `https://${site.website}` },
  { label: "Location", value: site.location, href: undefined },
];

export function Contact() {
  const [links, setLinks] = useState<{ gmail: string; mailto: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) || "").trim();

    const name = get("name");
    const email = get("email");
    const company = get("company");
    const budget = get("budget");
    const service = get("service");
    const userMessage = get("message");

    const subject = `New Enquiry from ${name}${service ? ` — ${service}` : ""}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Project: ${company || "—"}`,
      `Service Interested In: ${service || "—"}`,
      `Budget: ${budget || "—"}`,
      "",
      "Message:",
      userMessage,
    ].join("\n");

    const to = encodeURIComponent(site.email);
    const su = encodeURIComponent(subject);
    const bd = encodeURIComponent(body);

    // Gmail web compose — /u/0/ + tf=1 keeps the params through multi-account redirects.
    const gmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${to}&su=${su}&body=${bd}`;
    // mailto opens the device's default mail app (Gmail app on Android/iOS).
    const mailto = `mailto:${site.email}?subject=${su}&body=${bd}`;

    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);

    if (isMobile) {
      // Gmail web compose is not supported on mobile browsers — use the native app.
      window.location.href = mailto;
    } else {
      const win = window.open(gmail, "_blank", "noopener,noreferrer");
      if (!win) window.location.href = mailto; // popup blocked
    }

    setLinks({ gmail, mailto });
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          label="Get In Touch"
          title="Let's"
          highlight="Connect."
          sub="Whether you're launching a project, raising funds, or scaling your brand — Meta Growth Labs is your growth partner every step of the way."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl border border-violet-500/15 bg-panel/50 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="break-all text-sm text-slate-200 transition hover:text-violet-300"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-200">{c.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="card lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required placeholder="Your name" />
              <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
              <Field label="Company / Project" name="company" placeholder="Your project" />
              <Field label="Budget (optional)" name="budget" placeholder="e.g. $5k – $20k" />
            </div>

            <div className="mt-4">
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-300">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-violet-500/20 bg-ink/60 px-4 py-2.5 text-sm text-slate-200 outline-none transition focus:border-violet-500/60"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {["Performance Marketing", "Web3 Marketing", "Fundraising", "Community Management", "Exchange Listing (CEX/DEX)", "Other"].map(
                  (o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project and goals…"
                className="w-full resize-none rounded-lg border border-violet-500/20 bg-ink/60 px-4 py-2.5 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-violet-500/60"
              />
            </div>

            {/* honeypot */}
            <input type="text" name="website_hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <button type="submit" className="btn-primary mt-5 w-full">
              Send Message
            </button>

            {links && (
              <div role="status" className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4">
                <p className="text-sm text-emerald-400">
                  Your enquiry is ready — just hit <strong>Send</strong> in your mail app.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Didn&apos;t open? Use one of these:
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold">
                  <a
                    href={links.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                  >
                    Open in Gmail
                  </a>
                  <a
                    href={links.mailto}
                    className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                  >
                    Open in Mail app
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label} {required && <span className="text-violet-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-violet-500/20 bg-ink/60 px-4 py-2.5 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-violet-500/60"
      />
    </div>
  );
}
