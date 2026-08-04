import React from "react";
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CalendlyWidget } from "@/components/calendly-widget";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const title = "SEQR — Cloud Security Audits & Penetration Testing";
const description =
  "Enterprise cloud security audits, penetration testing, and incident response for AWS, Azure, and GCP. Book a free audit or email us for a scoped quote.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | SEQR",
  },
  description,
  keywords: [
    "cloud security audit",
    "penetration testing",
    "AWS security",
    "Azure security",
    "GCP security",
    "cloud hardening",
    "incident response",
  ],
  authors: [{ name: "SEQR" }],
  creator: "SEQR",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "SEQR",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/seqr-icon.svg?v=2",
    apple: "/seqr-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <JsonLd />
        {children}
        <CalendlyWidget />
        <Analytics />
      </body>
    </html>
  );
}
