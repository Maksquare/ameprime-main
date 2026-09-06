"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Globe, Sparkles, Compass } from "lucide-react";

const partnerLogos = [
  { name: "Vanguard Tech", role: "Autonomous AI" },
  { name: "Solstice Bio", role: "Therapeutics" },
  { name: "Chronos Capital", role: "Sovereign Wealth" },
  { name: "Aethel Atelier", role: "Luxury Maison" },
  { name: "Apex Dynamics", role: "Robotics" },
  { name: "Nova Media", role: "Broadcast" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Signature Deep Imperial Emerald Glow (#10451d) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 h-[480px] w-[90%] max-w-[1020px] atmospheric-wash-emerald opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[300px] w-[300px] atmospheric-wash-gold-emerald opacity-60"
      />

      <div className="mx-auto max-w-[1432px] px-4 sm:px-8 text-center">
        {/* Kicker Tag / Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-[9999px] border border-[#184e27] bg-[#0c1e13]/90 px-4 py-1.5 text-[12px] uppercase font-mono tracking-tight text-[#f3e8d2] shadow-[0_0_20px_rgba(16,69,29,0.3)] backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e]" />
          <span>AME PRIME // LOGO &amp; DIGITAL ATELIER</span>
          <span className="text-[#184e27]">/</span>
          <span className="text-[#22c55e]">DARK EMERALD #10451D</span>
        </motion.div>

        {/* Untitled Serif Display Headline (80px fluid responsive) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-[1240px] font-serif text-[42px] leading-[1.12] tracking-[-0.02em] text-[#f3e8d2] sm:text-[66px] lg:text-[84px] xl:text-[90px] font-normal"
        >
          Engineering iconic logos &amp; digital architectures for industry pioneers.
        </motion.h1>

        {/* Monospace Subtext at 20px */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-7 max-w-[820px] font-mono text-[16px] leading-[1.45] text-[#c5b89f] sm:text-[19px] tracking-tight"
        >
          We construct mathematically flawless logomarks, institutional brand systems, sub-second
          Next.js 15 web architectures, and high-velocity social communication engines.
        </motion.p>

        {/* Action Pills: Deep Forest #10451d + Ghost Champagne */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <a
            href="#inquiry"
            className="group flex h-[52px] w-full sm:w-auto items-center justify-center gap-3 rounded-[100px] bg-[#10451d] border border-[#22c55e]/50 px-9 font-mono text-[14px] uppercase tracking-tight text-[#f3e8d2] transition-all duration-200 hover:bg-[#185e2a] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:scale-[1.02]"
          >
            <span>Commission Studio</span>
            <span className="text-[13px] text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
              ▸
            </span>
          </a>

          <a
            href="#logos"
            className="flex h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-[100px] border border-[#184e27] bg-[#0c1e13] px-8 font-mono text-[14px] uppercase tracking-tight text-[#f3e8d2] transition-all duration-200 hover:border-[#22c55e] hover:bg-[#10451d]/40"
          >
            <Compass className="h-4 w-4 text-[#22c55e]" />
            <span>Inspect Logo Archive</span>
          </a>
        </motion.div>

        {/* Real-time Metric Pill Strip (Obsidian glassmorphic) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-[980px] mx-auto text-left"
        >
          {[
            { label: "Vector Geometry", value: "0.001mm", sub: "Mathematical precision", icon: Compass },
            { label: "Next.js Performance", value: "100/100", sub: "Sub-300ms edge speed", icon: Zap },
            { label: "Reach Velocity", value: "5.2x", sub: "Algorithmic social lift", icon: Globe },
            { label: "Trademark Accolades", value: "18 Won", sub: "Global Identity awards", icon: Sparkles },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-[24px] border border-[#184e27] bg-[#0c1e13]/80 p-4 transition-all hover:border-[#22c55e]/60 backdrop-blur-md"
            >
              <div className="flex items-center justify-between text-[#c5b89f] mb-1">
                <span className="font-mono text-[11px] uppercase tracking-wider">{item.label}</span>
                <item.icon className="h-3.5 w-3.5 text-[#22c55e]" />
              </div>
              <div className="font-serif text-[28px] text-[#f3e8d2] leading-tight font-normal">
                {item.value}
              </div>
              <div className="font-mono text-[11px] text-[#c5b89f]/80 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Desaturated Partner / Client Strip */}
        <div className="mt-20 pt-10 border-t border-[#184e27] text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="font-mono text-[12px] uppercase text-[#c5b89f] tracking-widest">
              Selected Collaborations &amp; Institutional Clients
            </span>
            <span className="font-mono text-[12px] text-[#22c55e]">
              Verified Outcomes 2022—2025
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="group flex flex-col justify-center border-l border-[#184e27] pl-3.5 py-1 opacity-75 hover:opacity-100 transition-opacity"
              >
                <span className="font-mono text-[14px] font-medium tracking-tight text-[#f3e8d2]">
                  {partner.name}
                </span>
                <span className="font-mono text-[11px] text-[#c5b89f]">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
