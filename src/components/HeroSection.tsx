"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Compass,
  CheckCircle2,
  CreditCard,
  Wifi,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[920px] overflow-hidden pt-8 pb-20 bg-[#08120a] text-[#f3e8d2]">
      {/* 1. Giant Background Ghost Watermark Typography (from landing page inspo.jpg) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[12vw] sm:text-[14vw] font-serif tracking-[0.18em] text-[#10451d]/25 opacity-40 -z-10"
      >
        AME PRIME
      </div>

      {/* 2. Ambient Imperial Emerald Glow behind the Centerpiece */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full atmospheric-wash-emerald opacity-75 -z-10"
      />

      {/* 3. Hairline Circuit Connecting Lines (from landing page inspo.jpg) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30 -z-10"
      >
        <path
          d="M 220 380 H 680 V 520 H 940"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="680" cy="520" r="4" fill="#22c55e" />
        <circle cx="220" cy="380" r="3" fill="#f3e8d2" />
        <circle cx="940" cy="520" r="3" fill="#f3e8d2" />
      </svg>

      <div className="mx-auto max-w-[1432px] px-4 sm:px-8 relative z-10">
        {/* Main Interactive Composition Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[760px]">
          {/* ================= LEFT WIDGETS (3.5 cols) ================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            {/* Left Card 1: Globe / Global Reach Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[36px] border border-[#184e27] bg-[#0c1e13]/85 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#22c55e]/60 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#10451d] text-[#22c55e] border border-[#22c55e]/40 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <Globe className="h-7 w-7 animate-[spin_25s_linear_infinite]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#22c55e]">
                    GLOBAL REACH
                  </span>
                  <div className="font-serif text-[18px] text-[#f3e8d2] font-normal">
                    Worldwide Authority
                  </div>
                </div>
              </div>
              <p className="font-mono text-[13px] text-[#c5b89f] leading-relaxed">
                Design and launch marks, Next.js web applications, and social media ecosystems fast,
                secure, and distinctive.
              </p>
            </motion.div>

            {/* Left Card 2: Mission Statement & Direct Services Link */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-[36px] border border-[#184e27] bg-[#0c1e13]/85 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#22c55e]/60 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e]" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#a7fccd]">
                  AME PRIME ATELIER
                </span>
              </div>
              <p className="font-mono text-[13px] text-[#c5b89f] leading-relaxed mb-4">
                Empowering industry pioneers to scale iconic logos, sub-300ms digital platforms, and
                high-retention audience networks.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#22c55e] hover:text-[#f3e8d2] transition-colors"
              >
                <span>OUR PRACTICES</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>

          {/* ================= CENTER HERO PIECE (4 cols) ================= */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center order-1 lg:order-2 py-8 lg:py-0">
            {/* The Floating Centerpiece: 3D Emblem with Halo (matching Parrot inspo) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center mb-6"
            >
              {/* Outer Circular Pulse Rings */}
              <div className="absolute h-64 w-64 rounded-full border border-[#22c55e]/25 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute h-52 w-52 rounded-full border border-[#184e27] bg-[#10451d]/40 backdrop-blur-md" />

              {/* Central Vector Sovereign Emblem */}
              <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-b from-[#10451d] to-[#08120a] border-2 border-[#22c55e] shadow-[0_0_60px_rgba(16,69,29,0.9)]">
                <svg viewBox="0 0 100 100" className="h-28 w-28 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                  <polygon
                    points="50,12 88,34 88,78 50,98 12,78 12,34"
                    fill="none"
                    stroke="#f3e8d2"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50,18 L50,92 M22,38 L78,74 M78,38 L22,74"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="50" cy="50" r="12" fill="#10451d" stroke="#f3e8d2" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="4.5" fill="#22c55e" />
                </svg>

                {/* Pulsing Central Node Point */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <span className="h-3 w-3 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e]" />
                </div>
              </div>
            </motion.div>

            {/* Bottom-Center Callout Pill & Action (from landing page inspo.jpg) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 rounded-[9999px] border border-[#22c55e]/50 bg-[#0c1e13] px-5 py-2 font-mono text-[12px] uppercase tracking-wider text-[#f3e8d2] shadow-md hover:bg-[#10451d] hover:border-[#22c55e] transition-all"
              >
                <span>Commission Account</span>
                <span className="text-[#22c55e]">→</span>
              </a>

              <h2 className="font-serif text-[32px] sm:text-[38px] text-[#f3e8d2] font-normal leading-tight">
                FAST DELIVERY, ENDURING MARKS.
              </h2>
            </motion.div>
          </div>

          {/* ================= RIGHT WIDGETS (4.5 cols) ================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3">
            {/* Top-Right: 500k+ Audience Pill with Stacked Avatars (from inspo) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="self-start lg:self-end inline-flex items-center gap-3 rounded-[9999px] border border-[#184e27] bg-[#0c1e13]/85 px-5 py-2 backdrop-blur-xl shadow-lg"
            >
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-[#10451d] border border-[#22c55e] flex items-center justify-center text-[10px] font-mono text-white">
                  FR
                </div>
                <div className="h-7 w-7 rounded-full bg-[#184e27] border border-[#f3e8d2] flex items-center justify-center text-[10px] font-mono text-[#f3e8d2]">
                  MV
                </div>
                <div className="h-7 w-7 rounded-full bg-[#22c55e] border border-[#08120a] flex items-center justify-center text-[10px] font-mono text-[#08120a] font-bold">
                  AP
                </div>
              </div>
              <div className="font-mono text-[12px] text-[#f3e8d2]">
                <span className="text-[#22c55e] font-medium">500k+</span> Executive Audience
              </div>
            </motion.div>

            {/* Middle-Right: Overlapping 3D Stacked Metallic Cards (from landing page inspo.jpg) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative h-[230px] w-full max-w-[360px] self-start lg:self-end perspective-1000 group cursor-pointer"
            >
              {/* Back Card: Black Sovereign Obsidian */}
              <div className="absolute inset-x-0 top-0 h-[170px] rounded-[24px] border border-[#184e27] bg-gradient-to-br from-[#0c1e13] to-black p-5 shadow-xl transform rotate-[-4deg] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:-translate-y-2">
                <div className="flex justify-between items-start text-neutral-400">
                  <span className="font-mono text-[11px] uppercase tracking-wider">AME BLACK</span>
                  <span className="font-serif italic text-[14px]">Sovereign</span>
                </div>
              </div>

              {/* Middle Card: Champagne Gold */}
              <div className="absolute inset-x-2 top-4 h-[170px] rounded-[24px] border border-[#c5b89f]/40 bg-gradient-to-br from-[#2a2820] to-[#12110c] p-5 shadow-xl transform rotate-[2deg] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:-translate-y-1">
                <div className="flex justify-between items-start text-[#f3e8d2]">
                  <span className="font-mono text-[11px] uppercase tracking-wider">AME ATELIER</span>
                  <Wifi className="h-4 w-4 text-[#c5b89f]" />
                </div>
              </div>

              {/* Front Card: Imperial Emerald #10451d Card with Chip & Embossed Detail */}
              <div className="absolute inset-x-4 top-8 h-[175px] rounded-[24px] border border-[#22c55e]/60 bg-gradient-to-br from-[#10451d] via-[#0d2e16] to-[#08120a] p-5 shadow-[0_15px_40px_rgba(16,69,29,0.7)] transition-transform duration-300 group-hover:scale-[1.03]">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[12px] font-medium tracking-tight text-[#f3e8d2] uppercase">
                      AME PRIME
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <Wifi className="h-4 w-4 text-[#22c55e]" />
                </div>

                {/* Metallic Gold Chip */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-7 w-9 rounded-[6px] bg-gradient-to-br from-[#f3e8d2] to-[#c5b89f] border border-[#f3e8d2] shadow-inner opacity-90" />
                  <span className="font-mono text-[10px] text-[#22c55e] uppercase tracking-widest">
                    EMERALD TIER
                  </span>
                </div>

                <div className="mt-4 font-mono text-[14px] tracking-[0.18em] text-[#f3e8d2]">
                  •••• •••• •••• 2345
                </div>

                <div className="mt-2 flex justify-between items-end text-[10px] font-mono text-[#c5b89f]">
                  <span>EXP: 09/30</span>
                  <span className="text-[#22c55e] font-medium">VERIFIED CLIENT</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom-Right: Total Stats Card (from landing page inspo.jpg) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-[36px] border border-[#184e27] bg-[#0c1e13]/85 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] self-start lg:self-end w-full max-w-[360px]"
            >
              <div className="inline-block rounded-[9999px] border border-[#184e27] bg-[#08120a] px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#a7fccd] mb-2">
                TOTAL IMPRESSIONS
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[38px] text-[#f3e8d2] font-normal leading-none">
                  120M+
                </span>
                <span className="font-mono text-[12px] text-[#c5b89f] leading-tight">
                  Media &amp; Reach Processed
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-[#184e27] flex justify-between items-center">
                <a
                  href="#works"
                  className="inline-flex items-center gap-1 font-mono text-[12px] uppercase text-[#22c55e] hover:text-[#f3e8d2] transition-colors"
                >
                  <span>VIEW CASE STATS</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <span className="font-mono text-[11px] text-[#c5b89f]">99.8% Retention</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
