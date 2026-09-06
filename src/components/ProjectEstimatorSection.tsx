"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Zap, Clock, ShieldCheck } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  timeframe: string;
  description: string;
}

export default function ProjectEstimatorSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "logo",
    "web"
  ]);
  const [speed, setSpeed] = useState<"standard" | "priority">("standard");

  const services: ServiceOption[] = [
    {
      id: "logo",
      name: "Logo Designing",
      basePrice: 1800,
      timeframe: "1-2 Weeks",
      description: "Golden ratio vector mark, monograms, variations, trademark assets"
    },
    {
      id: "brand",
      name: "Brand Identity",
      basePrice: 3200,
      timeframe: "2-3 Weeks",
      description: "Comprehensive 80+ pg manual, color science, typography & collateral"
    },
    {
      id: "web",
      name: "Website Development",
      basePrice: 4800,
      timeframe: "3-4 Weeks",
      description: "Next.js 15, sub-300ms edge speed, responsive mobile-first, animations"
    },
    {
      id: "video",
      name: "Video Editing",
      basePrice: 2400,
      timeframe: "1-2 Weeks",
      description: "4K commercial grade, viral retention cuts, sound design & motion graphics"
    },
    {
      id: "social",
      name: "Social Media Marketing",
      basePrice: 2900,
      timeframe: "Monthly Retainer",
      description: "Omnichannel content creation, algorithmic growth, community & ad funnels"
    }
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const rawTotal = selectedServices.reduce((sum, id) => {
    const s = services.find((srv) => srv.id === id);
    return sum + (s ? s.basePrice : 0);
  }, 0);

  // Bundle discount if 3 or more services selected
  const bundleDiscount = selectedServices.length >= 3 ? 0.15 : 0;
  const speedMultiplier = speed === "priority" ? 1.25 : 1.0;
  const finalPrice = Math.round(rawTotal * (1 - bundleDiscount) * speedMultiplier);

  return (
    <section id="estimator" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#10451d] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            Transparent Atelier Scope & Calculator
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Estimate Your Creative Investment.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select the disciplines you require to calculate approximate investment and turnaround schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Checklist (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Desired Studio Disciplines:
            </div>

            {services.map((item) => {
              const isSelected = selectedServices.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleService(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-emerald-50/60 border-emerald-500 shadow-sm"
                      : "bg-[#f8fafc] border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#10451d] text-white"
                          : "border-2 border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{item.description}</div>
                    </div>
                  </div>

                  <div className="text-right pl-3 shrink-0">
                    <div className="font-mono font-bold text-xs sm:text-sm text-[#10451d]">
                      from ${item.basePrice.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 font-semibold">{item.timeframe}</div>
                  </div>
                </div>
              );
            })}

            {/* Velocity Toggle */}
            <div className="pt-4 flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <div>
                  <div className="text-xs font-bold text-slate-800">Fast-Track Delivery Priority</div>
                  <div className="text-[11px] text-slate-500">Accelerated sprint turnaround</div>
                </div>
              </div>

              <div className="flex items-center bg-slate-200/80 p-1 rounded-xl">
                <button
                  onClick={() => setSpeed("standard")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    speed === "standard" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setSpeed("priority")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    speed === "priority" ? "bg-[#10451d] text-white shadow-sm" : "text-slate-600"
                  }`}
                >
                  Fast-Track (+25%)
                </button>
              </div>
            </div>
          </div>

          {/* Investment Summary (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg sticky top-28">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <span className="font-display font-extrabold text-slate-900 text-base">
                  Estimated Summary
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  {selectedServices.length} Selected
                </span>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Base Studio Cost:</span>
                  <span className="font-mono font-medium">${rawTotal.toLocaleString()}</span>
                </div>
                {bundleDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Bundle Synergy Discount (15%):</span>
                    <span>-${Math.round(rawTotal * bundleDiscount).toLocaleString()}</span>
                  </div>
                )}
                {speed === "priority" && (
                  <div className="flex justify-between text-amber-700 font-semibold">
                    <span>Fast-Track Sprint Fee:</span>
                    <span>+${Math.round(rawTotal * 0.25).toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200 mb-6">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Estimated Investment
                </div>
                <div className="font-display font-black text-4xl text-[#10451d]">
                  ${finalPrice.toLocaleString()}
                  <span className="text-sm font-normal text-slate-500 font-sans ml-1">USD</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Includes full vector IP rights & source code ownership</span>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#10451d] hover:bg-[#165a26] text-white text-sm font-bold transition-all shadow-md hover:shadow-xl group"
              >
                <span>Lock In Scope & Reserve Sprint</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
