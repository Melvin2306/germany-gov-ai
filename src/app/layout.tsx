import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Hallo, Deutschland. Ask the Beamten-KI anything about German government — and receive a Wartenummer, a Bescheid and a Termin in 2029. A satire of German bureaucracy. Not affiliated with any government.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Deutschland.gov — Hallo, Deutschland",
    template: "%s · Deutschland.gov",
  },
  description,
  applicationName: "Deutschland.gov",
  keywords: ["satire", "parody", "German bureaucracy", "Bürgeramt", "Termin", "Anmeldung", "Beamten-KI", "Deutschland"],
  authors: [{ name: "Beamten-KI, i. A." }],
  category: "entertainment",
  openGraph: {
    type: "website",
    siteName: "Deutschland.gov (Satire)",
    title: "Deutschland.gov — Hallo, Deutschland",
    description,
    locale: "en_US",
    alternateLocale: ["de_DE"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutschland.gov — Hallo, Deutschland",
    description: "Whatever you need from government, start here. Then go to Zimmer 4.017. (Satire)",
  },
  robots: { index: true, follow: true },
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
