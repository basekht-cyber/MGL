# Deploying to Hostinger

The site is exported as plain static files, so it runs on Hostinger's shared
hosting (Apache/LiteSpeed) with no Node.js runtime required.

## Upload

1. Hostinger panel → **Files → File Manager**
2. Open **`public_html`** and delete anything already in it
   (including the default `index.html` / `default.php` placeholder).
3. Upload **`metagrowthlabs-hostinger.zip`**.
4. Right-click the zip → **Extract** → extract into `public_html`.
5. Delete the zip.

`public_html` should now look like this — note the files sit at the **root**,
not inside a nested folder:

```
public_html/
├── .htaccess
├── index.html
├── 404.html
├── icon.svg
├── logo.svg
├── robots.txt
├── sitemap.xml
├── 404/
└── _next/
```

If File Manager hides `.htaccess`, enable **Settings → Show hidden files**.
That file is required — it handles HTTPS redirects, gzip, and caching.

## Point the domain

Hostinger panel → **Domains** → attach `metagrowthlabs.com` to this hosting
plan, then **Advanced → SSL** → issue the free Let's Encrypt certificate.
Wait for SSL to go live before testing, or the `.htaccess` HTTPS redirect will
loop.

## Rebuilding after a content change

Content lives in `lib/site.ts`. After editing:

```bash
npm run build      # regenerates ./out
```

Then repackage and re-upload:

```powershell
.\zip-for-hostinger.ps1
```

**Do not** use "Send to → Compressed folder" or `Compress-Archive`. On Windows
those write ZIP entries with backslash separators; Linux unzip then creates
files literally named `_next\static\...` instead of nested folders and every
asset 404s. The script writes POSIX paths, includes the hidden `.htaccess`, and
verifies both before finishing.

## Changing the domain

`NEXT_PUBLIC_SITE_URL` sets the canonical URL, `sitemap.xml`, and `robots.txt`.
It defaults to `https://metagrowthlabs.com`. To build for a different
domain, create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

…then rebuild. Getting this wrong makes Google index the wrong hostname.

## Contact form

The form does not send mail from the server — it opens Gmail (desktop) or the
device's mail app (mobile) with the enquiry pre-filled, addressed to
`info@metagrowthlabs.com`. That is why no SMTP credentials or Node runtime are
needed.

To switch to true server-side sending later, the site must move to a Node
host (Hostinger VPS, Vercel, or Netlify) — shared hosting cannot run it.
