"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Sparkles, CreditCard, ChevronRight, CheckCircle2 } from "lucide-react";

export default function HeroInspoSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-[#f7f9fc]">
      {/* Background Soft Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-700/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. GIANT WATERMARK (Inspired by "PARROT" in inspo) */}
      <div className="absolute top-16 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <h1 className="text-[5.5rem] xs:text-[7rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] font-black tracking-[0.15em] text-slate-900/[0.035] leading-none text-center uppercase whitespace-nowrap">
          AME PRIME
        </h1>
      </div>

      {/* MAIN HERO STAGE CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col">
        {/* CENTER COMPOSITION GRID */}
        <div className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] flex items-center justify-center">

          {/* SVG Connection Circuit Lines (Desktop only for pixel-perfect match to inspo) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              {/* Circuit line to Left Globe Card */}
              <path
                d="M 50% 48% L 35% 48% L 28% 38%"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Circuit line to Top-Right Users Pill */}
              <path
                d="M 50% 48% L 53% 36% L 59% 36%"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1.5"
              />
              {/* Circuit line to Right Stacked Cards */}
              <path
                d="M 50% 48% L 62% 48% L 68% 44%"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Circuit line to Bottom Left Services Pill */}
              <path
                d="M 50% 48% L 40% 65% L 26% 75%"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* 2. CENTRAL 3D MASCOT / EMBLEM (Falcon with bottom fade just like the inspo Parrot) */}
          <div className="relative z-0 w-72 sm:w-96 lg:w-[460px] aspect-square flex items-center justify-center my-4 lg:my-0">
            {/* Soft backdrop shadow */}
            <div className="absolute inset-0 bg-radial from-emerald-600/15 via-transparent to-transparent rounded-full blur-2xl transform scale-90" />
            
            <div className="relative w-full h-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)]">
              <Image
                src="/hero-mascot.jpg"
                alt="AME Prime 3D Falcon Mascot"
                fill
                priority
                className="object-contain object-top drop-shadow-[0_20px_40px_rgba(16,69,29,0.18)] transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Central Connected Circuit Node (Pulsing ring dot) */}
            <div className="absolute top-[46%] left-[49%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto group cursor-pointer">
              <div className="relative w-6 h-6 rounded-full bg-white border-2 border-emerald-600 shadow-[0_0_15px_rgba(16,69,29,0.4)] flex items-center justify-center transition-transform group-hover:scale-125">
                <div className="w-2 h-2 rounded-full bg-[#10451d]" />
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-pulse-ring pointer-events-none" />
              </div>
              
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
                Core Neural Synthesis
              </div>
            </div>
          </div>

          {/* 3. FLOATING LEFT CARD 1 — GLOBE (Worldwide Reach) */}
          <div className="lg:absolute lg:left-4 xl:left-8 lg:top-12 z-20 w-full sm:w-64 max-w-xs mb-4 lg:mb-0">
            <div className="bg-white/90 backdrop-blur-md rounded-[26px] p-5 border border-slate-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative mx-auto mb-4 animate-float">
                <Image
                  src="/globe-3d.jpg"
                  alt="3D Earth Globe"
                  fill
                  className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                />
              </div>
              <h3 className="text-slate-800 font-bold text-sm sm:text-base leading-snug text-center">
                Deploy & Scale Brands Worldwide
              </h3>
              <p className="text-slate-500 text-xs text-center mt-1 leading-relaxed">
                Fast, Iconic, And Friction-Free Global Distribution
              </p>
            </div>
          </div>

          {/* 4. FLOATING TOP-RIGHT PILL — CLIENTS & USERS */}
          <div className="lg:absolute lg:left-[55%] xl:left-[57%] lg:top-16 z-20 mb-4 lg:mb-0">
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 border border-slate-200/90 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all hover:scale-105">
              {/* Overlapping Avatar Stack */}
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  AP
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  JD
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  MK
                </div>
              </div>
              
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                  250k+
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500">
                  Global Audience
                </span>
              </div>
            </div>
          </div>

          {/* 5. FLOATING RIGHT CARD — 3D STACKED STUDIO CARDS (Exact match to Visa cards in inspo!) */}
          <div className="lg:absolute lg:right-4 xl:right-8 lg:top-20 z-20 w-full sm:w-72 max-w-sm mb-4 lg:mb-0">
            <div className="relative perspective-1000 group">
              {/* Stacked Card 3 (Back - White/Silver) */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300/80 shadow-md transform translate-y-[-14px] scale-[0.88] transition-transform duration-500 group-hover:translate-y-[-24px]"
                style={{ height: "155px" }}
              >
                <div className="p-3 flex justify-between items-center text-[10px] text-slate-400 font-semibold">
                  <span>AME PRIME</span>
                  <span>PLATINUM</span>
                </div>
              </div>

              {/* Stacked Card 2 (Middle - Obsidian Black) */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0c120e] to-[#1c241f] border border-emerald-900/40 shadow-lg transform translate-y-[-7px] scale-[0.94] transition-transform duration-500 group-hover:translate-y-[-12px]"
                style={{ height: "155px" }}
              >
                <div className="p-3 flex justify-between items-center text-[10px] text-emerald-400 font-semibold">
                  <span>AME PRIME</span>
                  <span>STUDIO PASS</span>
                </div>
              </div>

              {/* Stacked Card 1 (Front - Imperial Forest Green #10451d with gold chip) */}
              <div
                className="relative rounded-2xl bg-gradient-to-br from-[#10451d] via-[#145624] to-[#0b3315] p-4 text-white shadow-[0_16px_35px_rgba(16,69,29,0.35)] border border-emerald-500/30 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ height: "165px" }}
              >
                {/* Header of card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-400 flex items-center justify-center text-[9px] font-black text-[#10451d]">
                      A
                    </div>
                    <span className="font-display text-xs font-bold tracking-wider">AME PRIME</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-emerald-300 font-bold">
                    ELITE TIER
                  </span>
                </div>

                {/* EMV Chip & Contactless */}
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-7 h-5 rounded bg-gradient-to-r from-amber-200 to-amber-400 border border-amber-500/60 flex items-center justify-center">
                    <div className="w-5 h-3 border border-amber-600/40 rounded-sm" />
                  </div>
                  <div className="text-[10px] text-emerald-300/80 tracking-widest font-mono">
                    •••• 2345
                  </div>
                </div>

                {/* Cardholder details */}
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-[9px] text-emerald-200/70 uppercase tracking-wider">Partner Brand</div>
                    <div className="text-xs font-semibold tracking-wide text-white">Sovereign Enterprise</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] text-emerald-200/70 uppercase tracking-wider">Status</div>
                    <div className="text-xs font-bold text-emerald-300">ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. FLOATING BOTTOM-LEFT SERVICES PILL */}
          <div className="lg:absolute lg:left-4 xl:left-8 lg:bottom-4 z-20 w-full sm:w-72 max-w-sm mt-4 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-md rounded-[24px] p-5 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10451d]" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase ml-1">
                  ATELIER SCOPE
                </span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                Empowering visionary enterprises through brand identity, viral social marketing, high-velocity websites, video editing, and logo designing.
              </p>
              <Link
                href="#disciplines"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-[#10451d] hover:text-emerald-700 tracking-wider uppercase transition-colors"
              >
                <span>Our Disciplines</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 7. FLOATING BOTTOM-RIGHT METRIC BANNER */}
          <div className="lg:absolute lg:right-4 xl:right-8 lg:bottom-4 z-20 w-full sm:w-72 max-w-sm mt-4 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-md rounded-[24px] p-5 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-md transition-all">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-semibold uppercase tracking-wider mb-2">
                Cumulative Impact
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#10451d]">
                  180M+
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                Organic impressions & $40M+ pipeline generated for partner brands.
              </p>
              <Link
                href="#works"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-[#10451d] hover:text-emerald-700 tracking-wider uppercase transition-colors"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* 8. BOTTOM CENTER ACTION & BIG HEADLINE (Directly under mascot like inspo) */}
        <div className="text-center mt-6 sm:mt-8 z-20 max-w-2xl mx-auto flex flex-col items-center">
          {/* Action Button Pill */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/80 font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all hover:scale-105 mb-4 group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#10451d] transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Big Headline (Inspired by FAST SEND, FAST RECEIVE) */}
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight uppercase">
            ICONIC DESIGN, <br className="hidden sm:inline" />
            <span className="text-[#10451d]">HIGH-VELOCITY GROWTH</span>
          </h2>
          
          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-lg">
            A full-stack media and engineering atelier uniting Logo Architecture, Brand Identity, Web Development, Video Editing, and Social Media Marketing.
          </p>
        </div>

      </div>
    </section>
  );
}
