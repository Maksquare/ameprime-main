import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AME Prime — Brand Identity, Social Media Marketing, Web Development, Video Editing & Logo Design",
  description:
    "AME Prime is an elite creative and digital engineering studio crafting iconic brand systems, precision logo architecture, sub-300ms web applications, viral social engines, and high-impact video productions.",
  keywords: [
    "Brand Identity",
    "Social Media Marketing",
    "Website Development",
    "Video Editing",
    "Logo Designing",
    "AME Prime",
    "Next.js Development",
    "Creative Agency",
  ],
  openGraph: {
    title: "AME Prime — Brand Identity, Social Media Marketing, Web Development, Video Editing & Logo Design",
    description: "Crafting iconic brand systems, precision logo design, high-velocity websites, video production, and social marketing.",
    type: "website",
    siteName: "AME Prime",
  },
};

export const viewport: Viewport = {
  themeColor: "#10451d",
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
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f7f9fb] text-slate-900 font-sans antialiased selection:bg-[#10451d] selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
