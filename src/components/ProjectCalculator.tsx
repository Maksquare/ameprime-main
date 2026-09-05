"use client";

import { useState } from "react";
import { Sparkles, Calculator, Clock, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  weeks: number;
  description: string;
}

const brandingOptions: ServiceOption[] = [
  { id: "brand-none", name: "None / Retain Existing", basePrice: 0, weeks: 0, description: "Use current brand tokens." },
  { id: "brand-core", name: "Brand Identity Refresh", basePrice: 4500, weeks: 2, description: "Type system, color tokens, basic guidelines." },
  { id: "brand-flagship", name: "Institutional Overhaul", basePrice: 9500, weeks: 4, description: "Exhaustive tokens, voice playbook, packaging, motion logo." },
];

const webOptions: ServiceOption[] = [
  { id: "web-none", name: "None / Not Needed", basePrice: 0, weeks: 0, description: "Skip web engineering." },
  { id: "web-landing", name: "High-Speed Flagship Landing", basePrice: 5500, weeks: 3, description: "Next.js 15, sub-400ms FCP, bespoke micro-interactions." },
  { id: "web-full", name: "Full Web Architecture + CMS", basePrice: 11000, weeks: 5, description: "Multi-page Next.js, Headless CMS, search, custom design system." },
  { id: "web-app", name: "Custom Web Application / E-Com", basePrice: 18000, weeks: 8, description: "Auth, database, Stripe, headless commerce, edge API." },
];

const socialOptions: ServiceOption[] = [
  { id: "social-none", name: "None / Self-Managed", basePrice: 0, weeks: 0, description: "No social retainer." },
  { id: "social-starter", name: "Growth Cadence (Monthly)", basePrice: 3500, weeks: 0, description: "8 cinema short-form reels + 12 executive threads/mo." },
  { id: "social-omni", name: "Omnichannel Dominance", basePrice: 7500, weeks: 0, description: "20 reels, weekly video filming, podcast cutting, community management." },
];

export function ProjectCalculator() {
  const [selectedBrand, setSelectedBrand] = useState(brandingOptions[1].id);
  const [selectedWeb, setSelectedWeb] = useState(webOptions[1].id);
  const [selectedSocial, setSelectedSocial] = useState(socialOptions[1].id);
  const [isAccelerated, setIsAccelerated] = useState(false);

  const brandObj = brandingOptions.find((b) => b.id === selectedBrand)!;
  const webObj = webOptions.find((w) => w.id === selectedWeb)!;
  const socialObj = socialOptions.find((s) => s.id === selectedSocial)!;

  const rawBase = brandObj.basePrice + webObj.basePrice + socialObj.basePrice;
  const multiplier = isAccelerated ? 1.25 : 1.0;
  const finalPrice = Math.round(rawBase * multiplier);

  const rawWeeks = Math.max(brandObj.weeks + webObj.weeks, 2);
  const finalWeeks = isAccelerated ? Math.max(Math.round(rawWeeks * 0.65), 2) : rawWeeks;

  const handleApplyToInquiry = () => {
    const el = document.getElementById("inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 border-t border-[#cecac8]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[800px] mb-14">
          <div className="inline-flex items-center gap-2 rounded-[9999px] border border-[#cecac8] bg-[#f6f3f1] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#797776] mb-4">
            <Calculator className="h-3.5 w-3.5 text-[#2b59d1]" />
            <span>TRANSPARENCY // REAL-TIME SCOPE ESTIMATOR</span>
          </div>
          <h2 className="font-serif text-[38px] sm:text-[50px] text-[#242424] leading-[1.12] font-normal">
            Configure your strategic scope &amp; estimated velocity.
          </h2>
          <p className="mt-4 font-mono text-[16px] text-[#4e4d4d] leading-relaxed">
            Select the required fidelity across our three core pillars to view immediate budget
            estimates and sprint timelines. No hidden charges, strict deliverable benchmarks.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Branding Selector */}
            <div className="rounded-[36px] border border-[#cecac8] bg-[#f6f3f1] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-[#797776]">
                  01 // Brand Identity &amp; Creative Direction
                </span>
                <span className="font-serif text-[18px] text-[#242424]">
                  {brandObj.basePrice === 0 ? "$0" : `$${brandObj.basePrice.toLocaleString()}`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {brandingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedBrand(opt.id)}
                    className={`rounded-[24px] border p-4 text-left transition-all ${
                      selectedBrand === opt.id
                        ? "border-[#242424] bg-[#242424] text-white shadow-sm"
                        : "border-[#cecac8] bg-white/70 text-[#242424] hover:border-[#242424]"
                    }`}
                  >
                    <div className="font-serif text-[18px] font-normal">{opt.name}</div>
                    <div
                      className={`font-mono text-[11px] mt-1 line-clamp-2 ${
                        selectedBrand === opt.id ? "text-neutral-300" : "text-[#797776]"
                      }`}
                    >
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Web Engineering Selector */}
            <div className="rounded-[36px] border border-[#cecac8] bg-[#f6f3f1] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-[#797776]">
                  02 // Web Engineering &amp; Next.js 15
                </span>
                <span className="font-serif text-[18px] text-[#242424]">
                  {webObj.basePrice === 0 ? "$0" : `$${webObj.basePrice.toLocaleString()}`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {webOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedWeb(opt.id)}
                    className={`rounded-[24px] border p-4 text-left transition-all ${
                      selectedWeb === opt.id
                        ? "border-[#2b59d1] bg-[#2b59d1] text-white shadow-sm"
                        : "border-[#cecac8] bg-white/70 text-[#242424] hover:border-[#2b59d1]"
                    }`}
                  >
                    <div className="font-serif text-[18px] font-normal">{opt.name}</div>
                    <div
                      className={`font-mono text-[11px] mt-1 ${
                        selectedWeb === opt.id ? "text-blue-100" : "text-[#797776]"
                      }`}
                    >
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Social Media Management Selector */}
            <div className="rounded-[36px] border border-[#cecac8] bg-[#f6f3f1] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-[#797776]">
                  03 // Social Media &amp; Strategic Broadcast
                </span>
                <span className="font-serif text-[18px] text-[#242424]">
                  {socialObj.basePrice === 0 ? "$0" : `$${socialObj.basePrice.toLocaleString()}/mo`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socialOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedSocial(opt.id)}
                    className={`rounded-[24px] border p-4 text-left transition-all ${
                      selectedSocial === opt.id
                        ? "border-[#242424] bg-[#242424] text-white shadow-sm"
                        : "border-[#cecac8] bg-white/70 text-[#242424] hover:border-[#242424]"
                    }`}
                  >
                    <div className="font-serif text-[18px] font-normal">{opt.name}</div>
                    <div
                      className={`font-mono text-[11px] mt-1 ${
                        selectedSocial === opt.id ? "text-neutral-300" : "text-[#797776]"
                      }`}
                    >
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Velocity Speed Option */}
            <div className="flex items-center justify-between gap-4 rounded-[24px] border border-[#cecac8] bg-white/80 p-5">
              <div>
                <span className="font-serif text-[18px] text-[#242424] font-normal block">
                  Accelerated Fast-Track Sprint (35% Velocity Boost)
                </span>
                <span className="font-mono text-[12px] text-[#797776]">
                  Dedicated double-shift pod for expedited launches.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsAccelerated(!isAccelerated)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isAccelerated ? "bg-[#2b59d1]" : "bg-[#cecac8]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    isAccelerated ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Real-time Summary Card (4 cols) — Signature Elevated Periwinkle Mist Card! */}
          <div className="lg:col-span-4 sticky top-28 rounded-[40px] border border-[#a0b5eb] bg-[#cfdaf5] p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between border-b border-[#a0b5eb]/70 pb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#242424]">
                ESTIMATED BLUEPRINT
              </span>
              <span className="inline-flex items-center gap-1 rounded-[9999px] bg-[#242424] px-2.5 py-0.5 font-mono text-[11px] text-white">
                Live Model
              </span>
            </div>

            {/* Price Figure */}
            <div className="mt-6">
              <div className="font-mono text-[12px] uppercase text-[#4e4d4d] tracking-wider">
                Target Investment Benchmark
              </div>
              <div className="font-serif text-[44px] sm:text-[50px] text-[#242424] leading-none mt-1 font-normal">
                ${finalPrice.toLocaleString()}
              </div>
              <div className="font-mono text-[12px] text-[#4e4d4d] mt-1">
                {socialObj.basePrice > 0 ? "Includes initial monthly retainer" : "Full turnkey fixed-scope"}
              </div>
            </div>

            {/* Timeline Figure */}
            <div className="mt-6 flex items-center gap-3 rounded-[20px] bg-white/60 p-4 border border-[#cecac8]/60">
              <Clock className="h-5 w-5 text-[#2b59d1]" />
              <div>
                <div className="font-mono text-[11px] uppercase text-[#797776]">
                  Estimated Delivery Window
                </div>
                <div className="font-serif text-[20px] text-[#242424]">
                  {finalWeeks} — {finalWeeks + 2} Weeks
                </div>
              </div>
            </div>

            {/* Scope inclusions check list */}
            <div className="mt-6 space-y-2.5">
              <div className="font-mono text-[11px] uppercase text-[#797776] tracking-wider mb-2">
                Included in this scope:
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#242424]">
                <Check className="h-3.5 w-3.5 text-[#2b59d1]" />
                <span>Next.js 15 Server-Rendered Stack</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#242424]">
                <Check className="h-3.5 w-3.5 text-[#2b59d1]" />
                <span>Editorial Design &amp; Type Hierarchy</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#242424]">
                <Check className="h-3.5 w-3.5 text-[#2b59d1]" />
                <span>Sub-400ms Performance Guarantee</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#242424]">
                <Check className="h-3.5 w-3.5 text-[#2b59d1]" />
                <span>Dedicated Production Pod Handover</span>
              </div>
            </div>

            {/* CTA to lock in inquiry */}
            <button
              onClick={handleApplyToInquiry}
              className="mt-8 flex h-[50px] w-full items-center justify-center gap-2 rounded-[100px] bg-[#242424] font-mono text-[13px] uppercase tracking-tight text-white transition-all hover:bg-black"
            >
              <span>Pre-fill Consultation Form</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-3 text-center">
              <span className="font-mono text-[11px] text-[#4e4d4d]">
                NDA signed before project kickoff.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
