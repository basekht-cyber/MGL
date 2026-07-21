# Meta Growth Labs — Website

A SEO-friendly marketing website for **Meta Growth Labs** built with **Next.js 14
(App Router)**, **TypeScript**, and **Tailwind CSS**. It builds to a fully static
site, so it can be hosted anywhere — including Hostinger shared hosting.

## Features

- ⚡ Next.js 14 App Router + TypeScript, exported as static HTML/CSS/JS
- 🎨 Dark, futuristic UI matching the brand deck (violet/purple gradients)
- 🔍 SEO-ready: Open Graph, Twitter cards, JSON-LD `Organization` schema,
  `sitemap.xml`, `robots.txt`, semantic HTML
- 📱 Mobile-first: swipeable card carousels and an app-style bottom tab bar
  below `md`, classic navbar above it
- ✉️ Contact form that opens Gmail (desktop) or the native mail app (mobile)
  with the enquiry pre-filled
- Sections: Hero, About, Services, Process, Industries, Case Studies,
  Network Reach, Fundraising, Why Us, Contact

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

## Contact form

There is no mail server and no API route. On submit the form builds a
pre-filled message addressed to `info@metagrowthlabs.com` and opens it:

- **Desktop** → Gmail web compose in a new tab
- **Mobile** → `mailto:`, which hands off to the Gmail / Mail app

A fallback panel with both links appears after submit, so a blocked popup or a
missing mail app never leaves the user stuck. This is what keeps the site
deployable to static hosting.

> To send mail server-side instead, the site must move to a Node host
> (Hostinger VPS, Vercel, Netlify) and regain an API route.

## Build

```bash
npm run build   # writes the static site to ./out
```

`output: "export"` in [`next.config.mjs`](next.config.mjs) means the build
produces plain files — there is no `npm start` server to run.

Set the canonical domain (affects `sitemap.xml`, `robots.txt`, and Open Graph
URLs) via `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://metagrowthlabs.com
```

## Deploy

See [DEPLOY.md](DEPLOY.md) for Hostinger upload steps and the re-zip command.

## Project structure

```
app/
  layout.tsx     # SEO metadata, fonts, JSON-LD
  page.tsx       # section composition
  globals.css    # design tokens, .card / .carousel / .section-y utilities
  icon.svg       # favicon
  sitemap.ts     # /sitemap.xml
  robots.ts      # /robots.txt
components/      # UI sections + Navbar / BottomNav
public/
  logo.svg
  .htaccess      # Apache config, copied into the build output
lib/site.ts      # all site content
```

Edit all copy, stats, links, and contact details in
[`lib/site.ts`](lib/site.ts) — it is the single source for every section.
