/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits a plain HTML/CSS/JS bundle into ./out — Hostinger's shared hosting
  // runs Apache/LiteSpeed with PHP, not Node, so there is no server to render on.
  output: "export",

  // The image optimiser is a server feature; without this the export fails.
  images: { unoptimized: true },

  // Produces /index.html rather than extensionless routes, which Apache serves
  // directly without any rewrite rules.
  trailingSlash: true,

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
