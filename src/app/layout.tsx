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
  title: "AME Prime — Logo Architecture, Brand Systems & Web Engineering",
  description:
    "AME Prime is an elite media atelier engineering bespoke logo marks, institutional brand identity, sub-second Next.js web applications, and algorithmic social communication.",
  keywords: [
    "AME Prime",
    "Logo Design",
    "Logo Architecture",
    "Brand Identity",
    "Bespoke Wordmarks",
    "Next.js Web Development",
    "Social Media Management",
    "Creative Direction",
  ],
  authors: [{ name: "AME Prime Media & Communication" }],
  openGraph: {
    title: "AME Prime — Logo Architecture, Brand Systems & Web Engineering",
    description:
      "Crafting enduring emblems, bespoke typographic marks, and digital architectures for industry pioneers.",
    type: "website",
    locale: "en_US",
    siteName: "AME Prime",
  },
  twitter: {
    card: "summary_large_image",
    title: "AME Prime — Logo Architecture, Brand Systems & Web Engineering",
    description:
      "Crafting enduring emblems, bespoke typographic marks, and digital architectures for industry pioneers.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08120a",
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
      <body className="min-h-screen bg-[#08120a] text-[#f3e8d2] antialiased selection:bg-[#10451d] selection:text-[#f3e8d2]">
        {children}
      </body>
    </html>
  );
}
