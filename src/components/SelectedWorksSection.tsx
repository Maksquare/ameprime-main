"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Filter } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "Logo" | "Brand" | "Web" | "Video" | "Social";
  categoryLabel: string;
  description: string;
  metrics: string;
  metricLabel: string;
  palette: string[];
}

export default function SelectedWorksSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const caseStudies: CaseStudy[] = [
    {
      id: "veloce",
      title: "Hypercar Brand Identity & Precision 3D Vector Emblem",
      client: "Veloce Automobili",
      category: "Logo",
      categoryLabel: "Logo Architecture",
      description: "Mathematical golden ratio monogram and carbon-fiber embossed badge for an Italian electric hypercar manufacturer.",
      metrics: "100%",
      metricLabel: "Trademark Clearance Granted",
      palette: ["#10451d", "#22c55e", "#0f172a"]
    },
    {
      id: "chronos",
      title: "Sub-250ms Global FinTech Web Platform & Design System",
      client: "Chronos Protocol",
      category: "Web",
      categoryLabel: "Website Development",
      description: "Architected on Next.js 15 App Router with Framer Motion transitions, live financial charting, and 100/100 Core Web Vitals.",
      metrics: "240ms",
      metricLabel: "Global Edge TTFB",
      palette: ["#0f172a", "#38bdf8", "#f8fafc"]
    },
    {
      id: "vanguard",
      title: "4K Cinema Showreel & Commercial Campaign Suite",
      client: "Vanguard Beverly Hills",
      category: "Video",
      categoryLabel: "Video Editing",
      description: "Commercial director cuts, HDR color grading, dynamic sound design, and viral short-form retention sequences.",
      metrics: "84%",
      metricLabel: "Average Video Watch Time",
      palette: ["#581c87", "#c084fc", "#000000"]
    },
    {
      id: "kyoto",
      title: "Omnichannel Social Media Marketing Growth Engine",
      client: "Kyoto Organic Rituals",
      category: "Social",
      categoryLabel: "Social Media Marketing",
      description: "Viral TikTok and Instagram content strategy generating millions of impressions and scaling DTC customer acquisition 4.2x.",
      metrics: "48M+",
      metricLabel: "Organic Social Impressions",
      palette: ["#15803d", "#86efac", "#ffffff"]
    },
    {
      id: "aura",
      title: "Comprehensive Institutional Rebranding & Visual Identity",
      client: "Aura Capital Partners",
      category: "Brand",
      categoryLabel: "Brand Identity",
      description: "Complete overhaul featuring bespoke typography, 120-page brand guidelines manual, executive stationery, and investor portals.",
      metrics: "$1.2B",
      metricLabel: "Fund Assets Under Management",
      palette: ["#10451d", "#e2e8f0", "#1e293b"]
    }
  ];

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section id="works" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f9fb] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Selected Portfolio Works
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Crafted For Industry Pioneers.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {["All", "Logo", "Brand", "Web", "Video", "Social"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#10451d] text-white shadow-md"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {filter === "All" ? "All Projects" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] border border-slate-200/90 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with badge and client */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-[#10451d] border border-emerald-200">
                    {item.categoryLabel}
                  </span>
                  <div className="flex gap-1.5">
                    {item.palette.map((color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-400 mb-1">{item.client}</div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-snug group-hover:text-[#10451d] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom metric & arrow */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-display font-black text-2xl text-[#10451d]">{item.metrics}</div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    {item.metricLabel}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-[#10451d] text-slate-700 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
