import type { Metadata, Viewport } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AME Prime — Media, Web Engineering & Strategic Communication",
  description:
    "AME Prime is an elite media and communication atelier orchestrating institutional brand identity, high-performance Next.js web architectures, and algorithmic social growth.",
  keywords: [
    "AME Prime",
    "Branding Agency",
    "Next.js Web Development",
    "Social Media Management",
    "Creative Direction",
    "Digital Communication",
  ],
  authors: [{ name: "AME Prime Media & Communication" }],
  openGraph: {
    title: "AME Prime — Media & Strategic Communication",
    description:
      "Crafting enduring brands and digital architectures for industry pioneers. Specializing in Branding, High-Velocity Web Development, and Social Media Management.",
    type: "website",
    locale: "en_US",
    siteName: "AME Prime",
  },
  twitter: {
    card: "summary_large_image",
    title: "AME Prime — Media & Strategic Communication",
    description:
      "Crafting enduring brands and digital architectures for industry pioneers. Branding, Web Engineering, and Social Media Growth.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f3f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f6f3f1] text-[#242424] antialiased selection:bg-[#cfdaf5] selection:text-[#242424]">
        {children}
      </body>
    </html>
  );
}
