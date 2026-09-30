import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { REPO_URL } from "@/lib/site";

const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Absolute base for Open Graph / Twitter image URLs. On Vercel the production
// domain is provided automatically; NEXT_PUBLIC_SITE_URL overrides it.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const description =
  "Hallo, Deutschland. Ask the Beamten-KI anything about German government — and receive a Wartenummer, a Bescheid and a Termin in 2029. A satire of German bureaucracy. Not affiliated with any government.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deutschland.gov — Hallo, Deutschland",
    template: "%s · Deutschland.gov",
  },
  description,
  applicationName: "Deutschland.gov",
  keywords: ["satire", "parody", "German bureaucracy", "Bürgeramt", "Termin", "Anmeldung", "Beamten-KI", "Deutschland"],
  authors: [{ name: "Melvin Rinkleff", url: REPO_URL }],
  creator: "Melvin Rinkleff",
  category: "entertainment",
  openGraph: {
    type: "website",
    siteName: "Deutschland.gov (Satire)",
    title: "Deutschland.gov — Hallo, Deutschland",
    description,
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutschland.gov — Hallo, Deutschland",
    description: "Whatever you need from government, start here. Then go to Zimmer 4.017. (Satire)",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  other: { "source-code": REPO_URL },
};

export const viewport: Viewport = {
  themeColor: "#f3f2f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
