"use client";

import { useState } from "react";
import { Sparkles, Calculator, Clock, Check, ArrowRight, Compass } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  weeks: number;
  description: string;
}

const logoOptions: ServiceOption[] = [
  { id: "logo-none", name: "None / Existing Asset", basePrice: 0, weeks: 0, description: "Utilize existing vector marks." },
  { id: "logo-monogram", name: "Bespoke Geometric Mark", basePrice: 3800, weeks: 2, description: "Custom mathematical monogram, emblem, or wordmark with vector masterfiles." },
  { id: "logo-fleet", name: "Full Multi-Scale Mark Fleet", basePrice: 7500, weeks: 3, description: "Monograms, emblems, responsive 16px to 8K marks, negative space audits, trademark toolkit." },
];

const brandingOptions: ServiceOption[] = [
  { id: "brand-none", name: "None / Current Tokens", basePrice: 0, weeks: 0, description: "Use current typography and colors." },
  { id: "brand-core", name: "Brand Guidelines & Tokens", basePrice: 4500, weeks: 2, description: "Type system, dark/light colorways, basic packaging specs." },
  { id: "brand-flagship", name: "Institutional Overhaul", basePrice: 8500, weeks: 4, description: "Exhaustive tokens, voice playbook, packaging diellines, physical stationery." },
];

const webOptions: ServiceOption[] = [
  { id: "web-none", name: "None / External Code", basePrice: 0, weeks: 0, description: "Skip web engineering." },
  { id: "web-landing", name: "High-Speed Flagship Landing", basePrice: 5500, weeks: 3, description: "Next.js 15, sub-300ms FCP, bespoke micro-interactions." },
  { id: "web-full", name: "Full Web Platform + CMS", basePrice: 11500, weeks: 5, description: "Multi-page Next.js, Headless CMS, search, custom component library." },
  { id: "web-app", name: "Custom Web Application / E-Com", basePrice: 18500, weeks: 8, description: "Auth, database, Stripe, headless commerce, edge API." },
];

const socialOptions: ServiceOption[] = [
  { id: "social-none", name: "None / In-House", basePrice: 0, weeks: 0, description: "No social media retainer." },
  { id: "social-starter", name: "Growth Cadence (Monthly)", basePrice: 3500, weeks: 0, description: "8 cinema short-form reels + 12 executive threads/mo." },
  { id: "social-omni", name: "Omnichannel Dominance", basePrice: 7500, weeks: 0, description: "20 reels, weekly studio filming, podcast editing, executive ghostwriting." },
];

export function ProjectCalculator() {
  const [selectedLogo, setSelectedLogo] = useState(logoOptions[1].id);
  const [selectedBrand, setSelectedBrand] = useState(brandingOptions[1].id);
  const [selectedWeb, setSelectedWeb] = useState(webOptions[1].id);
  const [selectedSocial, setSelectedSocial] = useState(socialOptions[1].id);
  const [isAccelerated, setIsAccelerated] = useState(false);

  const logoObj = logoOptions.find((l) => l.id === selectedLogo)!;
  const brandObj = brandingOptions.find((b) => b.id === selectedBrand)!;
  const webObj = webOptions.find((w) => w.id === selectedWeb)!;
  const socialObj = socialOptions.find((s) => s.id === selectedSocial)!;

  const rawBase = logoObj.basePrice + brandObj.basePrice + webObj.basePrice + socialObj.basePrice;
  const multiplier = isAccelerated ? 1.25 : 1.0;
  const finalPrice = Math.round(rawBase * multiplier);

  const rawWeeks = Math.max(logoObj.weeks + brandObj.weeks + webObj.weeks, 2);
  const finalWeeks = isAccelerated ? Math.max(Math.round(rawWeeks * 0.65), 2) : rawWeeks;

  const handleApplyToInquiry = () => {
    const el = document.getElementById("inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 border-t border-[#184e27]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[820px] mb-14">
          <div className="inline-flex items-center gap-2 rounded-[9999px] border border-[#184e27] bg-[#0c1e13] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#22c55e] mb-4">
            <Calculator className="h-3.5 w-3.5" />
            <span>TRANSPARENCY // REAL-TIME SCOPE ESTIMATOR</span>
          </div>
          <h2 className="font-serif text-[38px] sm:text-[50px] text-[#f3e8d2] leading-[1.12] font-normal">
            Configure your strategic scope &amp; estimated velocity.
          </h2>
          <p className="mt-4 font-mono text-[16px] text-[#c5b89f] leading-relaxed">
            Select the required fidelity across our Logo Architecture, Brand Systems, Next.js Web
            Engineering, and Social Media Management practices to view immediate budget estimates.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column (8 cols) */}
          <div className="lg:col-span-8 space-y-7">
            {/* 1. Logo Architecture Selector */}
            <div className="rounded-[36px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-[#22c55e] flex items-center gap-2">
                  <Compass className="h-3.5 w-3.5" />
                  01 // Logo Design &amp; Mark Architecture
                </span>
                <span className="font-serif text-[18px] text-[#f3e8d2]">
                  {logoObj.basePrice === 0 ? "$0" : `$${logoObj.basePrice.toLocaleString()}`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {logoOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedLogo(opt.id)}
                    className={`rounded-[24px] border p-4 text-left transition-all ${
                      selectedLogo === opt.id
                        ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        : "border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60"
                    }`}
                  >
                    <div className="font-serif text-[18px] font-normal">{opt.name}</div>
                    <div
                      className={`font-mono text-[11px] mt-1 line-clamp-2 ${
                        selectedLogo === opt.id ? "text-neutral-200" : "text-[#c5b89f]/70"
                      }`}
                    >
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Brand Identity Selector */}
            <div className="rounded-[36px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-[#22c55e]">
                  02 // Brand Strategy &amp; Design Systems
                </span>
                <span className="font-serif text-[18px] text-[#f3e8d2]">
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
                        ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        : "border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60"
                    }`}
                  >
                    <div className="font-serif text-[18px] font-normal">{opt.name}</div>
                    <div
                      className={`font-mono text-[11px] mt-1 line-clamp-2 ${
                        selectedBrand === opt.id ? "text-neutral-200" : "text-[#c5b89f]/70"
                      }`}
                    >
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Web Engineering Selector */}
            <div className="rounded-[36px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-[#22c55e]">
                  03 // High-Performance Web Engineering (Next.js 15)
                </span>
                <span className="font-serif text-[18px] text-[#f3e8d2]">
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
                        ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        : "border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60"
                    }`}
                  >
                    <div className="font-serif text-[18px] font-normal">{opt.name}</div>
                    <div
                      className={`font-mono text-[11px] mt-1 ${
                        selectedWeb === opt.id ? "text-emerald-100" : "text-[#c5b89f]/70"
                      }`}
                    >
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Social Media Management Selector */}
            <div className="rounded-[36px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-[#22c55e]">
                  04 // Social Media &amp; Strategic Broadcast
                </span>
                <span className="font-serif text-[18px] text-[#f3e8d2]">
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
                        ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        : "border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60"
                    }`}
                  >
                    <div className="font-serif text-[18px] font-normal">{opt.name}</div>
                    <div
                      className={`font-mono text-[11px] mt-1 ${
                        selectedSocial === opt.id ? "text-neutral-200" : "text-[#c5b89f]/70"
                      }`}
                    >
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Velocity Speed Option */}
            <div className="flex items-center justify-between gap-4 rounded-[24px] border border-[#184e27] bg-[#0c1e13] p-5">
              <div>
                <span className="font-serif text-[18px] text-[#f3e8d2] font-normal block">
                  Accelerated Fast-Track Sprint (35% Velocity Boost)
                </span>
                <span className="font-mono text-[12px] text-[#c5b89f]">
                  Dedicated double-shift pod for urgent launches.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsAccelerated(!isAccelerated)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isAccelerated ? "bg-[#22c55e]" : "bg-[#184e27]"
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

          {/* Real-time Summary Card (4 cols) — Rich Imperial Forest Green #10451d Surface! */}
          <div className="lg:col-span-4 sticky top-28 rounded-[40px] border border-[#22c55e]/50 bg-[#10451d] p-6 sm:p-8 shadow-[0_0_35px_rgba(16,69,29,0.6)]">
            <div className="flex items-center justify-between border-b border-[#184e27] pb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#a7fccd]">
                ESTIMATED BLUEPRINT
              </span>
              <span className="inline-flex items-center gap-1 rounded-[9999px] bg-[#08120a] px-2.5 py-0.5 font-mono text-[11px] text-[#22c55e] border border-[#184e27]">
                Live Model
              </span>
            </div>

            {/* Price Figure */}
            <div className="mt-6">
              <div className="font-mono text-[12px] uppercase text-[#c5b89f] tracking-wider">
                Target Investment Benchmark
              </div>
              <div className="font-serif text-[44px] sm:text-[52px] text-[#f3e8d2] leading-none mt-1 font-normal">
                ${finalPrice.toLocaleString()}
              </div>
              <div className="font-mono text-[12px] text-[#a7fccd] mt-1">
                {socialObj.basePrice > 0 ? "Includes initial monthly retainer" : "Full turnkey fixed-scope"}
              </div>
            </div>

            {/* Timeline Figure */}
            <div className="mt-6 flex items-center gap-3 rounded-[20px] bg-[#08120a]/80 p-4 border border-[#184e27]">
              <Clock className="h-5 w-5 text-[#22c55e]" />
              <div>
                <div className="font-mono text-[11px] uppercase text-[#c5b89f]">
                  Estimated Delivery Window
                </div>
                <div className="font-serif text-[20px] text-[#f3e8d2]">
                  {finalWeeks} — {finalWeeks + 2} Weeks
                </div>
              </div>
            </div>

            {/* Scope inclusions check list */}
            <div className="mt-6 space-y-2.5">
              <div className="font-mono text-[11px] uppercase text-[#c5b89f] tracking-wider mb-2">
                Included in this scope:
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#f3e8d2]">
                <Check className="h-3.5 w-3.5 text-[#22c55e]" />
                <span>Golden-Ratio Vector Logo Masterfiles</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#f3e8d2]">
                <Check className="h-3.5 w-3.5 text-[#22c55e]" />
                <span>Next.js 15 Server-Rendered Stack</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#f3e8d2]">
                <Check className="h-3.5 w-3.5 text-[#22c55e]" />
                <span>Sub-300ms Performance Guarantee</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#f3e8d2]">
                <Check className="h-3.5 w-3.5 text-[#22c55e]" />
                <span>Dedicated Production Pod Handover</span>
              </div>
            </div>

            {/* CTA to lock in inquiry */}
            <button
              onClick={handleApplyToInquiry}
              className="mt-8 flex h-[50px] w-full items-center justify-center gap-2 rounded-[100px] bg-[#08120a] border border-[#22c55e]/40 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] transition-all hover:bg-black hover:border-[#22c55e]"
            >
              <span>Pre-fill Consultation Form</span>
              <ArrowRight className="h-4 w-4 text-[#22c55e]" />
            </button>

            <div className="mt-3 text-center">
              <span className="font-mono text-[11px] text-[#c5b89f]/80">
                NDA signed before project discovery.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
