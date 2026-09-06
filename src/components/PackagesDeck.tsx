"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, Star, ArrowRight, Compass, Shield, Laptop, Megaphone, Zap } from "lucide-react";

interface PackageCard {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  billing: string;
  rating: string;
  reviewsCount: string;
  colorGradient: string;
  borderColor: string;
  accentColor: string;
  rotation: number;
  yOffset: number;
  icon: any;
  deliverables: string[];
}

const packages: PackageCard[] = [
  {
    id: "pkg-logo",
    name: "Logo Architecture",
    category: "MARK & EMBLEM",
    tagline: "Mathematical vector marks and golden-ratio geometric assets.",
    price: "$3,800",
    billing: "One-time investment",
    rating: "4.9",
    reviewsCount: "38",
    colorGradient: "from-[#2e1065] via-[#1e1b4b] to-[#0f0728]",
    borderColor: "border-[#a855f7]/50",
    accentColor: "text-[#c084fc]",
    rotation: -12,
    yOffset: 24,
    icon: Compass,
    deliverables: [
      "Custom Monograms & Emblems",
      "Golden-Ratio Vector Masterfiles",
      "Responsive 16px to 8K Favicons",
      "Trademark Clearance Dossier",
    ],
  },
  {
    id: "pkg-brand",
    name: "Brand Identity Book",
    category: "IDENTITY SYSTEM",
    tagline: "Codifying typography, colorways, and luxury packaging diellines.",
    price: "$6,500",
    billing: "One-time investment",
    rating: "4.8",
    reviewsCount: "44",
    colorGradient: "from-[#831843] via-[#4c0519] to-[#1f020a]",
    borderColor: "border-[#f43f5e]/50",
    accentColor: "text-[#fb7185]",
    rotation: -6,
    yOffset: 12,
    icon: Shield,
    deliverables: [
      "Typography & Lettering Pairing",
      "Editorial Design Book (120+ pgs)",
      "Packaging & Foil Stamp Specs",
      "Multi-Platform Figma Tokens",
    ],
  },
  {
    id: "pkg-synergy",
    name: "Flagship Synergy Suite",
    category: "MOST POPULAR // COMPLETE",
    tagline: "Unifying Logo, Next.js 15 web platform, and social broadcast.",
    price: "$14,800",
    billing: "Turnkey fixed-scope",
    rating: "5.0",
    reviewsCount: "82",
    colorGradient: "from-[#10451d] via-[#0b2413] to-[#06140a]",
    borderColor: "border-[#22c55e]",
    accentColor: "text-[#22c55e]",
    rotation: 0,
    yOffset: 0,
    icon: Zap,
    deliverables: [
      "Full Logo & Mark Architecture",
      "Institutional Brand System",
      "Next.js 15 Sub-300ms Platform",
      "Initial 8-Reel Video Campaign",
      "Dedicated 2-Week Launch Pod",
    ],
  },
  {
    id: "pkg-web",
    name: "Next.js Web Platform",
    category: "WEB ENGINEERING",
    tagline: "Sub-300ms FCP, React 19, edge caching, and bespoke motion.",
    price: "$9,500",
    billing: "One-time investment",
    rating: "4.9",
    reviewsCount: "61",
    colorGradient: "from-[#083344] via-[#042f2e] to-[#021817]",
    borderColor: "border-[#06b6d4]/50",
    accentColor: "text-[#22d3ee]",
    rotation: 6,
    yOffset: 12,
    icon: Laptop,
    deliverables: [
      "Next.js 15 App Router & SSR",
      "Sub-300ms Core Web Vitals",
      "Custom Framer Motion UX",
      "Headless CMS & Stripe Setup",
    ],
  },
  {
    id: "pkg-social",
    name: "Social Media Fleet",
    category: "GROWTH CADENCE",
    tagline: "Cinema short-form video and executive thought leadership.",
    price: "$5,500",
    billing: "Per month retainer",
    rating: "4.8",
    reviewsCount: "29",
    colorGradient: "from-[#451a03] via-[#291002] to-[#120601]",
    borderColor: "border-[#f59e0b]/50",
    accentColor: "text-[#fbbf24]",
    rotation: 12,
    yOffset: 24,
    icon: Megaphone,
    deliverables: [
      "12 Cinema-Grade Short Reels",
      "Weekly Filming & Motion Hooks",
      "Executive Ghostwriting on X",
      "Monthly Conversion Analytics",
    ],
  },
];

export function PackagesDeck() {
  const [activePackageId, setActivePackageId] = useState<string>("pkg-synergy");
  const activePackage = packages.find((p) => p.id === activePackageId)!;

  return (
    <section id="packages" className="py-20 sm:py-28 border-t border-[#184e27] bg-[#08120a] relative overflow-hidden">
      {/* Background Subtle Cartesian Grid (from packages inspo) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: "linear-gradient(#184e27 1px, transparent 1px), linear-gradient(90deg, #184e27 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-[1432px] px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-[9999px] border border-[#184e27] bg-[#0c1e13] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#22c55e] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>CURATED SUITES // FLAGSHIP TIERS</span>
          </div>

          <h2 className="font-serif text-[38px] sm:text-[52px] lg:text-[60px] text-[#f3e8d2] leading-[1.12] font-normal">
            Select Your Transformation Package.
          </h2>

          <p className="mt-4 font-mono text-[16px] text-[#c5b89f] leading-relaxed">
            Inspired by high-performance console interfaces. Hover or tap any card in our 3D fanned-out deck to inspect exact inclusions and pricing.
          </p>
        </div>

        {/* 3D Fanned-Out Card Deck Container (from packages page inspo.jpg) */}
        <div className="relative pt-6 pb-20 flex justify-center items-end min-h-[520px] perspective-2000">
          <div className="relative flex items-end justify-center w-full max-w-[1100px] h-[460px]">
            {packages.map((pkg, idx) => {
              const isSelected = activePackageId === pkg.id;
              const Icon = pkg.icon;

              return (
                <motion.div
                  key={pkg.id}
                  layout
                  onClick={() => setActivePackageId(pkg.id)}
                  whileHover={{ y: -30, rotate: 0, scale: 1.05, zIndex: 50 }}
                  animate={{
                    rotate: isSelected ? 0 : pkg.rotation,
                    y: isSelected ? -35 : pkg.yOffset,
                    scale: isSelected ? 1.06 : 0.96,
                    zIndex: isSelected ? 40 : 10 + (idx > 2 ? 5 - idx : idx),
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`absolute w-[260px] sm:w-[290px] h-[410px] rounded-[36px] border-2 ${pkg.borderColor} bg-gradient-to-b ${pkg.colorGradient} p-6 shadow-2xl cursor-pointer select-none flex flex-col justify-between overflow-hidden transition-shadow ${
                    isSelected ? "shadow-[0_20px_60px_rgba(16,69,29,0.8)] ring-2 ring-[#22c55e]/40" : "shadow-lg opacity-85 hover:opacity-100"
                  }`}
                  style={{
                    transformOrigin: "bottom center",
                    left: `calc(50% - 140px + ${(idx - 2) * 125}px)`,
                  }}
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[9999px] bg-black/40 text-white backdrop-blur-md">
                        {pkg.category}
                      </span>
                      <div className="flex items-center gap-1 font-mono text-[11px] text-white/90 bg-black/30 px-2 py-0.5 rounded-[9999px]">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-[24px] text-[#f3e8d2] font-normal leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="font-mono text-[11px] text-[#c5b89f] mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Card 3D Pop-Out Icon & Deliverables Preview */}
                  <div className="my-auto py-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/30 border border-white/15 mb-3 shadow-inner">
                      <Icon className={`h-7 w-7 ${pkg.accentColor}`} />
                    </div>

                    <div className="space-y-1.5">
                      {pkg.deliverables.slice(0, 3).map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[11px] font-mono text-[#f3e8d2]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Price Footprint */}
                  <div className="pt-3 border-t border-white/15 flex items-end justify-between">
                    <div>
                      <div className="font-serif text-[26px] text-white leading-none">
                        {pkg.price}
                      </div>
                      <div className="font-mono text-[10px] text-[#c5b89f] mt-0.5">
                        {pkg.billing}
                      </div>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#22c55e] flex items-center gap-1">
                      <span>Select</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Dossier for the Selected Package */}
        <motion.div
          key={activePackage.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-[36px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10451d] text-[#22c55e] border border-[#22c55e]/40">
              <activePackage.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#22c55e]">
                ACTIVE SELECTION // {activePackage.category}
              </div>
              <div className="font-serif text-[24px] text-[#f3e8d2] font-normal">
                {activePackage.name} — <span className="text-[#22c55e]">{activePackage.price}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <span className="font-mono text-[12px] text-[#c5b89f]">
              Guaranteed Sprint Window: 2–6 Weeks
            </span>
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#10451d] border border-[#22c55e]/50 px-6 py-3 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] hover:bg-[#185e2a] transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <span>Lock In Package</span>
              <ArrowRight className="h-4 w-4 text-[#22c55e]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
