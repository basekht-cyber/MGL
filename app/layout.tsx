import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = `${site.name} — Performance Marketing, Web3 Growth & Fundraising`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "performance marketing agency",
    "web3 marketing",
    "crypto marketing agency",
    "blockchain marketing",
    "fundraising agency",
    "ICO IDO marketing",
    "KOL influencer marketing",
    "community management",
    "CEX DEX listing",
    "Meta Growth Labs",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Marketing",
};

export const viewport: Viewport = {
  themeColor: "#05020c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  slogan: site.slogan,
  sameAs: [
    site.linkedin,
    site.instagram,
    site.fiverr,
    site.upwork,
    site.telegramUrl,
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "Performance Marketing",
    "Web3 Growth",
    "Fundraising",
    "Crypto Marketing",
    "Community Management",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
