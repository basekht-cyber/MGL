# Meta Growth Labs — Website

A SEO-friendly marketing website for **Meta Growth Labs** built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, featuring a working contact form that sends email via **Nodemailer**.

## Features

- ⚡ Next.js 14 App Router + TypeScript
- 🎨 Dark, futuristic UI matching the brand deck (violet/purple gradients)
- 🔍 SEO-ready: Open Graph, Twitter cards, JSON-LD `Organization` schema, `sitemap.xml`, `robots.txt`, semantic HTML
- 📱 Fully responsive with mobile nav
- ✉️ Contact form with a Nodemailer API route (`/api/contact`) — validation, honeypot anti-spam, and rate limiting
- Sections: Hero, About, Services, Process, Industries, Case Studies, Network Reach, Fundraising, Why Us, Contact

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your SMTP credentials
npm run dev                  # http://localhost:3000
```

## Email configuration

The contact form sends mail through SMTP. Copy `.env.example` to `.env.local` and set:

| Variable       | Description                                                    |
| -------------- | ------------------------------------------------------------- |
| `SMTP_HOST`    | e.g. `smtp.gmail.com`                                          |
| `SMTP_PORT`    | `465` (SSL) or `587` (TLS)                                     |
| `SMTP_SECURE`  | `true` for port 465, `false` for 587                          |
| `SMTP_USER`    | Sending mailbox, e.g. `labsmetagrowth@gmail.com`              |
| `SMTP_PASS`    | SMTP password / **Gmail App Password**                        |
| `CONTACT_TO`   | Where submissions are delivered                               |

> **Gmail:** enable 2FA and create an App Password at
> https://myaccount.google.com/apppasswords — use it as `SMTP_PASS`.

If SMTP is not configured, the form returns a friendly "email us directly" message instead of crashing.

## Build & deploy

```bash
npm run build
npm start
```

Deploys cleanly to **Vercel** — add the `SMTP_*`, `CONTACT_TO`, and
`NEXT_PUBLIC_SITE_URL` environment variables in the project settings.

## Project structure

```
app/
  layout.tsx        # SEO metadata, fonts, JSON-LD
  page.tsx          # section composition
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
  api/contact/route.ts  # Nodemailer email endpoint
components/         # UI sections
lib/site.ts         # all site content (edit copy here)
```

Edit all text/stats in [`lib/site.ts`](lib/site.ts).
