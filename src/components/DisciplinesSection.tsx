"use client";

import React, { useState } from "react";
import {
  PenTool,
  Share2,
  Code2,
  Video,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Gauge,
  Play,
  Pause,
  Maximize2,
  TrendingUp,
  Grid,
  Eye,
  Sliders,
  Award
} from "lucide-react";

interface Discipline {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  metric: { value: string; label: string };
  badgeColor: string;
}

export default function DisciplinesSection() {
  const [activeTab, setActiveTab] = useState<string>("logo");

  // State for interactive widgets
  const [logoMode, setLogoMode] = useState<"grid" | "light" | "dark">("grid");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(42);
  const [socialAudience, setSocialAudience] = useState<number>(50);

  const disciplines: Discipline[] = [
    {
      id: "logo",
      name: "Logo Designing",
      tagline: "Sacred Geometry & Vector Architecture",
      description:
        "We construct unforgettable brand marks designed with mathematical precision. Every anchor point, kerning curve, and golden ratio curve is engineered to look iconic on a smartwatch screen or a skyscraper billboard.",
      icon: PenTool,
      deliverables: [
        "Primary & Secondary Logo Architecture",
        "Mathematical Golden-Ratio Grid Blueprints",
        "Micro-Favicon & App Icon Systems (16px to 4K)",
        "Monograms, Wordmarks & Dynamic Responsive Marks",
        "Production Vector Exports (SVG, EPS, AI, PDF)"
      ],
      metric: { value: "100%", label: "Vector Precision & Trademark-Ready" },
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      id: "brand",
      name: "Brand Identity",
      tagline: "Institutional Visual Systems & Brand Guidelines",
      description:
        "A logo is just the beginning. We forge cohesive visual ecosystems with bespoke typography hierarchies, curated color palettes, institutional brand guidelines, stationery, packaging, and distinctive tone of voice.",
      icon: Layers,
      deliverables: [
        "Comprehensive 80+ Page Brand Guideline Manual",
        "Custom Color Science & Accessible Contrast Schemes",
        "Curated Editorial Typography Systems",
        "3D Packaging, Merchandise & Stationery Suites",
        "Voice, Narrative & Strategic Positioning Playbook"
      ],
      metric: { value: "3.4x", label: "Average Brand Perception Lift" },
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300"
    },
    {
      id: "web",
      name: "Website Development",
      tagline: "Sub-300ms Next.js 15 & Digital Engineering",
      description:
        "Ultra-performant web applications engineered for seamless conversion. Built with modern Next.js 15, React 19, Tailwind CSS, and Framer Motion, delivering instant page transitions and 100/100 Core Web Vitals.",
      icon: Code2,
      deliverables: [
        "Next.js 15 Server-Side Rendering (SSR) & Edge Caching",
        "Fluid Micro-Animations with Framer Motion",
        "Mobile-First Responsive Layouts Tested on 20+ Screens",
        "Full SEO Schema, OpenGraph & Performance Optimization",
        "Interactive Calculators, Portals & Booking Flows"
      ],
      metric: { value: "< 280ms", label: "Global Edge Page Load Speed" },
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300"
    },
    {
      id: "video",
      name: "Video Editing",
      tagline: "4K Commercial Production & Viral Motion",
      description:
        "High-octane visual storytelling tailored for modern attention spans. From cinematic brand commercials and 3D product animations to viral short-form Reels and TikTok sequences that stop the scroll.",
      icon: Video,
      deliverables: [
        "4K Commercial Editing & Hollywood Color Grading",
        "Viral Short-Form Retention Cuts (Reels / TikTok / Shorts)",
        "Dynamic 3D Motion Graphics & Typography Animations",
        "Immersive Sound Design, SFX & Audio Sweetening",
        "Multi-Platform Aspect Ratio Delivery (9:16, 16:9, 1:1)"
      ],
      metric: { value: "78%", label: "Average 3-Second Hook Retention" },
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300"
    },
    {
      id: "social",
      name: "Social Media Marketing",
      tagline: "Algorithmic Growth Engines & Viral Campaigns",
      description:
        "Transforming casual followers into brand evangelists. We deploy data-driven content calendars, algorithmic trend hacking, influencer amplification, and paid customer acquisition funnels.",
      icon: Share2,
      deliverables: [
        "Monthly Omnichannel Content Architecture",
        "Algorithmic Trend Hacking & Viral Scriptwriting",
        "Community Growth, Moderation & Engagement Protocol",
        "High-ROI Meta & TikTok Paid Ads Management",
        "Comprehensive Real-Time Analytics & Attribution Dashboard"
      ],
      metric: { value: "180M+", label: "Organic Viral Impressions Generated" },
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300"
    }
  ];

  const current = disciplines.find((d) => d.id === activeTab) || disciplines[0];

  return (
    <section id="disciplines" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background soft grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#10451d] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Our Core Studio Disciplines
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Five Disciplines. <br />
            <span className="text-[#10451d]">One Integrated Creative Engine.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything your brand requires to dominate its category — seamlessly engineered under a single unified roof.
          </p>
        </div>

        {/* 5-Tab Navigation Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="inline-flex p-1.5 bg-slate-100/80 rounded-full border border-slate-200/80 shadow-inner">
            {disciplines.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#10451d] text-white shadow-[0_4px_16px_rgba(16,69,29,0.3)] scale-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-300" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Stage Box */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Information & Deliverables */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${current.badgeColor}`}>
                {current.tagline}
              </span>
              <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tier 1 Studio Standard</span>
              </div>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              {current.name}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {current.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Included Deliverables:
              </span>
              {current.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Metric Banner + CTA */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-[#10451d]">
                  {current.metric.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {current.metric.label}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#10451d] hover:bg-[#165a26] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <span>Commission {current.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Showcase Widget */}
          <div className="lg:col-span-6">
            
            {/* 1. LOGO DESIGN INTERACTIVE WIDGET */}
            {activeTab === "logo" && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Interactive Logo Grid Atelier
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                    <button
                      onClick={() => setLogoMode("grid")}
                      className={`px-2 py-1 text-[11px] font-semibold rounded ${
                        logoMode === "grid" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500"
                      }`}
                    >
                      Grid
                    </button>
                    <button
                      onClick={() => setLogoMode("light")}
                      className={`px-2 py-1 text-[11px] font-semibold rounded ${
                        logoMode === "light" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500"
                      }`}
                    >
                      Light
                    </button>
                    <button
                      onClick={() => setLogoMode("dark")}
                      className={`px-2 py-1 text-[11px] font-semibold rounded ${
                        logoMode === "dark" ? "bg-[#10451d] text-white shadow-sm" : "text-slate-500"
                      }`}
                    >
                      Dark
                    </button>
                  </div>
                </div>

                {/* Canvas Display */}
                <div
                  className={`h-64 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500 ${
                    logoMode === "dark"
                      ? "bg-[#0b140e]"
                      : logoMode === "light"
                      ? "bg-slate-50 border border-slate-200"
                      : "bg-[#f1f5f9] border border-dashed border-emerald-300"
                  }`}
                >
                  {/* Grid Lines Overlay */}
                  {logoMode === "grid" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Golden Ratio Circles */}
                      <div className="w-44 h-44 rounded-full border border-emerald-400/50 absolute" />
                      <div className="w-28 h-28 rounded-full border border-emerald-400/60 absolute" />
                      <div className="w-16 h-16 rounded-full border border-emerald-400/70 absolute" />
                      {/* Diagonal and cross lines */}
                      <div className="w-full h-px bg-emerald-400/40 absolute" />
                      <div className="h-full w-px bg-emerald-400/40 absolute" />
                      <div className="w-60 h-px bg-emerald-400/30 rotate-45 absolute" />
                      <div className="w-60 h-px bg-emerald-400/30 -rotate-45 absolute" />
                    </div>
                  )}

                  {/* Logo Mark */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center font-display font-black text-4xl shadow-xl transition-transform hover:scale-110 ${
                        logoMode === "dark"
                          ? "bg-gradient-to-br from-emerald-500 to-[#10451d] text-white"
                          : "bg-gradient-to-br from-[#10451d] to-emerald-700 text-white"
                      }`}
                    >
                      A
                    </div>
                    <span
                      className={`mt-4 font-display font-black text-lg tracking-[0.25em] uppercase ${
                        logoMode === "dark" ? "text-white" : "text-slate-900"
                      }`}
                    >
                      AME PRIME
                    </span>
                    <span
                      className={`text-[10px] tracking-widest font-semibold uppercase ${
                        logoMode === "dark" ? "text-emerald-400" : "text-emerald-700"
                      }`}
                    >
                      Iconic Vector Mark
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Golden Ratio: 1.618 φ</span>
                  <span className="font-mono text-emerald-700 font-bold">100% Scalable Vector</span>
                </div>
              </div>
            )}

            {/* 2. BRAND IDENTITY INTERACTIVE WIDGET */}
            {activeTab === "brand" && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Design Tokens & Typography Stack
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Active System
                  </span>
                </div>

                {/* Color Palette Chips */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Primary Brand Color Scheme
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="rounded-xl p-3 bg-[#10451d] text-white flex flex-col justify-between h-20 shadow-sm">
                      <span className="text-[10px] opacity-80">Imperial</span>
                      <span className="font-mono text-[10px] font-bold">#10451D</span>
                    </div>
                    <div className="rounded-xl p-3 bg-[#22c55e] text-slate-900 flex flex-col justify-between h-20 shadow-sm">
                      <span className="text-[10px] opacity-80">Neon Mint</span>
                      <span className="font-mono text-[10px] font-bold">#22C55E</span>
                    </div>
                    <div className="rounded-xl p-3 bg-[#0a0f0c] text-white flex flex-col justify-between h-20 shadow-sm">
                      <span className="text-[10px] opacity-80">Obsidian</span>
                      <span className="font-mono text-[10px] font-bold">#0A0F0C</span>
                    </div>
                    <div className="rounded-xl p-3 bg-[#f8fafc] border border-slate-200 text-slate-800 flex flex-col justify-between h-20 shadow-sm">
                      <span className="text-[10px] text-slate-400">Pure Canvas</span>
                      <span className="font-mono text-[10px] font-bold text-slate-700">#F8FAFC</span>
                    </div>
                  </div>
                </div>

                {/* Typography Hierarchy Demo */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Display Typography — Plus Jakarta Sans 800
                  </span>
                  <p className="font-display font-black text-xl text-slate-900 tracking-tight">
                    Exponential Authority & Presence
                  </p>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-3 mb-1">
                    Body Typography — Inter 400
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engineered for supreme legibility across mobile retina screens and print publications.
                  </p>
                </div>
              </div>
            )}

            {/* 3. WEBSITE DEVELOPMENT INTERACTIVE WIDGET */}
            {activeTab === "web" && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Core Web Vitals Audit
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    100 / 100 Verified
                  </span>
                </div>

                {/* 4 Green Perfect Score Gauges */}
                <div className="grid grid-cols-4 gap-3 text-center">
                  {[
                    { label: "Performance", score: "100" },
                    { label: "Accessibility", score: "100" },
                    { label: "Best Practices", score: "100" },
                    { label: "SEO Rating", score: "100" }
                  ].map((gauge) => (
                    <div key={gauge.label} className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center font-display font-black text-base text-[#10451d] mb-1">
                        {gauge.score}
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">{gauge.label}</span>
                    </div>
                  ))}
                </div>

                {/* Code Snippet Box */}
                <div className="bg-slate-900 rounded-2xl p-4 text-white font-mono text-xs overflow-x-auto">
                  <div className="flex items-center gap-1.5 mb-2 border-b border-slate-800 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-400 ml-2">page.tsx — Next.js 15 Server Component</span>
                  </div>
                  <pre className="text-[11px] text-emerald-400 leading-relaxed">
                    <code>{`export const runtime = "edge";\nexport const revalidate = 3600;\n\n// Sub-300ms Global Fast Route\nexport default async function Page() {\n  return <UltraVelocityApp />;\n}`}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* 4. VIDEO EDITING INTERACTIVE WIDGET */}
            {activeTab === "video" && (
              <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-2xl flex flex-col gap-4 text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Cinema Studio Timeline
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-900/50 text-purple-300 text-[10px] font-mono font-semibold border border-purple-500/30">
                      4K ProRes 60fps
                    </span>
                  </div>
                </div>

                {/* Video Monitor Simulator */}
                <div className="relative h-44 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-black overflow-hidden flex items-center justify-center border border-purple-900/40">
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span>REC: 00:14:28:04</span>
                  </div>

                  <button
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                  >
                    {isPlayingVideo ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>

                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-purple-300">
                    HDR10+ / Rec.709 Color Grade
                  </div>
                </div>

                {/* Timeline Multi-track Scrubber */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>V1: Commercial_Master_A01</span>
                    <span>{videoProgress}% Rendered</span>
                  </div>
                  {/* Video Track */}
                  <div className="h-6 rounded bg-purple-900/60 border border-purple-700/50 relative overflow-hidden">
                    <div
                      className="h-full bg-purple-500/50 transition-all duration-300"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>
                  {/* Audio Waveform Track */}
                  <div className="h-4 rounded bg-emerald-950/60 border border-emerald-800/40 flex items-center px-1 gap-1">
                    <div className="text-[9px] text-emerald-400 font-mono">A1: 5.1 Stereo Master</div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. SOCIAL MEDIA MARKETING INTERACTIVE WIDGET */}
            {activeTab === "social" && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Algorithmic Reach Simulator
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Viral Index: 9.4/10
                  </span>
                </div>

                {/* Interactive Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700">Campaign Scale:</span>
                    <span className="font-mono text-sm font-bold text-[#10451d]">
                      {socialAudience}k Target Reach / Week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={socialAudience}
                    onChange={(e) => setSocialAudience(Number(e.target.value))}
                    className="w-full accent-[#10451d] cursor-pointer"
                  />
                </div>

                {/* Projected Results Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 font-semibold block">Est. Impressions</span>
                    <span className="font-display font-black text-lg text-slate-900">
                      {(socialAudience * 14.5).toFixed(0)}k
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 font-semibold block">Avg. Engagement</span>
                    <span className="font-display font-black text-lg text-emerald-700">8.4%</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 font-semibold block">Audience Conversion</span>
                    <span className="font-display font-black text-lg text-[#10451d]">3.8x</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-xs text-emerald-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Integrated multi-channel distribution across Meta, TikTok, LinkedIn, and YouTube Shorts.</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
