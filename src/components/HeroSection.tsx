"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";

const partnerLogos = [
  { name: "Vanguard Tech", role: "Autonomous AI" },
  { name: "Solstice Bio", role: "Therapeutics" },
  { name: "Chronos Capital", role: "Sovereign Wealth" },
  { name: "Aethel Atelier", role: "Luxury Goods" },
  { name: "Apex Dynamics", role: "Robotics" },
  { name: "Nova Media", role: "Broadcast" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Signature Atmospheric Gradient Wash (Coral -> Sky Blue -> Mint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 h-[380px] w-[90%] max-w-[960px] atmospheric-wash-coral-sky opacity-75"
      />

      <div className="mx-auto max-w-[1432px] px-4 sm:px-8 text-center">
        {/* Kicker Tag / Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-[9999px] border border-[#cecac8] bg-[#f6f3f1]/90 px-4 py-1.5 text-[12px] uppercase font-mono tracking-tight text-[#242424] shadow-sm backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[#2b59d1]" />
          <span>AME PRIME MEDIA &amp; COMMUNICATION</span>
          <span className="text-[#797776]">/</span>
          <span className="text-[#4e4d4d]">EST. 2024</span>
        </motion.div>

        {/* Untitled Serif Display Headline at 80px weight 400 (Fluid responsive) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-[1180px] font-serif text-[42px] leading-[1.12] tracking-[-0.02em] text-[#242424] sm:text-[64px] lg:text-[82px] xl:text-[88px] font-normal"
        >
          Crafting enduring brands &amp; digital architectures for industry pioneers.
        </motion.h1>

        {/* ABC Diatype Mono Subtext at 20px Graphite (#4e4d4d) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-7 max-w-[780px] font-mono text-[16px] leading-[1.4] text-[#4e4d4d] sm:text-[19px] sm:leading-[1.45] tracking-tight"
        >
          We unify institutional brand identity, sub-second Next.js web engineering, and
          high-velocity social media management into a single cohesive growth engine.
        </motion.p>

        {/* Action Pills: Lake Blue + Ghost Off-Black */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <a
            href="#inquiry"
            className="group flex h-[52px] w-full sm:w-auto items-center justify-center gap-3 rounded-[100px] bg-[#2b59d1] px-9 font-mono text-[14px] uppercase tracking-tight text-white transition-all duration-200 hover:bg-[#2045ab] hover:scale-[1.02]"
          >
            <span>Commission Studio</span>
            <span className="text-[13px] transition-transform duration-200 group-hover:translate-x-1">
              ▸
            </span>
          </a>

          <a
            href="#works"
            className="flex h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-[100px] border border-[#242424] bg-transparent px-8 font-mono text-[14px] uppercase tracking-tight text-[#242424] transition-all duration-200 hover:bg-[#242424] hover:text-[#f6f3f1]"
          >
            <span>Explore Index (45+)</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Real-time Metric Pill Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-[960px] mx-auto text-left"
        >
          {[
            { label: "Core Web Vitals", value: "99/100", sub: "Sub-400ms TTFB", icon: Zap },
            { label: "Reach Multiplier", value: "4.8x", sub: "Organic algorithmic lift", icon: Globe },
            { label: "Client Retainers", value: "98.2%", sub: "Quarterly re-engagement", icon: ShieldCheck },
            { label: "Design Awards", value: "14 Won", sub: "AOTD, FWA, Red Dot", icon: Sparkles },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-[24px] border border-[#cecac8] bg-[#f6f3f1]/70 p-4 transition-all hover:bg-white/60 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between text-[#797776] mb-1">
                <span className="font-mono text-[11px] uppercase tracking-wider">{item.label}</span>
                <item.icon className="h-3.5 w-3.5 text-[#2b59d1]" />
              </div>
              <div className="font-serif text-[28px] text-[#242424] leading-tight font-normal">
                {item.value}
              </div>
              <div className="font-mono text-[11px] text-[#797776] mt-0.5">{item.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Desaturated Partner / Client Strip */}
        <div className="mt-20 pt-10 border-t border-[#cecac8]/70 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="font-mono text-[12px] uppercase text-[#797776] tracking-widest">
              Selected Collaborations &amp; Institutional Clients
            </span>
            <span className="font-mono text-[12px] text-[#797776]">
              Verified Outcomes 2022—2025
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="group flex flex-col justify-center border-l border-[#cecac8] pl-3 py-1 opacity-70 hover:opacity-100 transition-opacity"
              >
                <span className="font-mono text-[14px] font-medium tracking-tight text-[#242424]">
                  {partner.name}
                </span>
                <span className="font-mono text-[11px] text-[#797776]">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
