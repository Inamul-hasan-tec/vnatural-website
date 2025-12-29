import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VNatural - Nature • Nutrition • Technology • Wellness",
  description: "Next-generation wellness ecosystem delivering pure natural products, MedTel consultations, AI Virtual Doctor, and personalized nutrition. Direct sourcing, verified quality, 24/7 health support.",
  keywords: ["natural products", "organic wellness", "MedTel", "AI doctor", "nutrition", "healthy living", "direct sourcing", "preventive healthcare", "wellness ecosystem"],
  authors: [{ name: "VNatural" }],
  creator: "VNatural",
  publisher: "VNatural",
  metadataBase: new URL('https://vnatural.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VNatural - Complete Wellness Ecosystem",
    description: "Pure products, transparent sourcing, smart commerce, and continuous health support—all under one trusted platform.",
    url: 'https://vnatural.com',
    siteName: 'VNatural',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VNatural - Nature, Nutrition, Technology, Wellness',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNatural - Complete Wellness Ecosystem',
    description: 'Pure products, MedTel consultations, AI Virtual Doctor, and personalized nutrition.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
