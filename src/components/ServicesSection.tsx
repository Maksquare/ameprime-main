"use client";

import { useState } from "react";
import { servicesData, ServicePillar } from "@/data/services";
import { ArrowRight, Check, Compass, Laptop, Megaphone, Sparkles, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pillarIcons = {
  "logo-design": Compass,
  branding: Shield,
  "web-development": Laptop,
  "social-media": Megaphone,
};

export function ServicesSection() {
  const [activeModalPillar, setActiveModalPillar] = useState<ServicePillar | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 border-t border-[#184e27]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#184e27] pb-10">
          <div className="max-w-[800px]">
            <span className="font-mono text-[12px] uppercase text-[#22c55e] tracking-widest block mb-3">
              FOUR DISCIPLINES // ENDURING AUTHORITY
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] text-[#f3e8d2] leading-[1.12] font-normal">
              Bespoke practices engineered for category dominance.
            </h2>
          </div>

          <div className="font-mono text-[13px] text-[#c5b89f] max-w-[340px]">
            From vector-perfect logo geometry to sub-300ms Next.js web applications, every discipline
            operates under one unified standard of perfection.
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = pillarIcons[service.id as keyof typeof pillarIcons] || Sparkles;
            const isElevated = service.isElevated;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-[40px] p-7 sm:p-8 transition-all duration-300 ${
                  isElevated
                    ? "bg-[#10451d] text-[#f3e8d2] border border-[#22c55e]/60 shadow-[0_0_35px_rgba(16,69,29,0.5)]"
                    : "bg-[#0c1e13] border border-[#184e27] text-[#f3e8d2] hover:border-[#22c55e]/60 hover:shadow-[0_0_20px_rgba(16,69,29,0.3)]"
                }`}
              >
                {/* Decorative Gradient Glow inside the Elevated Card */}
                {isElevated && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -bottom-10 h-[240px] w-[240px] rounded-full atmospheric-wash-emerald opacity-60 -z-0"
                  />
                )}

                <div className="relative z-10">
                  {/* Tag & Icon Lockup */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#a7fccd] bg-[#08120a]/80 px-2.5 py-1 rounded-[9999px] border border-[#184e27]">
                      {service.tag}
                    </span>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isElevated
                          ? "bg-[#08120a] text-[#22c55e] border border-[#22c55e]/40"
                          : "bg-[#10451d] border border-[#184e27] text-[#f3e8d2]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[24px] sm:text-[26px] text-[#f3e8d2] leading-[1.2] font-normal mb-3">
                    {service.title}
                  </h3>

                  {/* Body */}
                  <p className="font-mono text-[14px] leading-[1.45] text-[#c5b89f] mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables preview */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[12px] font-mono text-[#f3e8d2]">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-[#22c55e]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions & Metrics */}
                <div className="relative z-10 pt-5 border-t border-[#184e27] flex items-center justify-between gap-3">
                  <div>
                    <div className="font-serif text-[20px] text-[#f3e8d2] leading-none">
                      {service.metrics[0]?.value}
                    </div>
                    <div className="font-mono text-[10px] text-[#22c55e] uppercase tracking-tight mt-1">
                      {service.metrics[0]?.label}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalPillar(service)}
                    className={`inline-flex items-center gap-1.5 rounded-[100px] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-tight transition-all ${
                      isElevated
                        ? "bg-[#08120a] text-[#f3e8d2] border border-[#22c55e]/40 hover:bg-[#10451d]"
                        : "border border-[#184e27] bg-[#08120a] text-[#f3e8d2] hover:border-[#22c55e]"
                    }`}
                  >
                    <span>Blueprint</span>
                    <ArrowRight className="h-3 w-3 text-[#22c55e]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal for Deep-Dive */}
      <AnimatePresence>
        {activeModalPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[820px] max-h-[90vh] overflow-y-auto rounded-[40px] border border-[#22c55e]/50 bg-[#0c1e13] p-6 sm:p-10 shadow-[0_0_50px_rgba(16,69,29,0.8)] text-[#f3e8d2]"
            >
              <button
                onClick={() => setActiveModalPillar(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#184e27] bg-[#08120a] text-[#f3e8d2] hover:border-[#22c55e] transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-mono text-[11px] uppercase tracking-widest text-[#22c55e] block mb-2">
                {activeModalPillar.tag}
              </span>
              <h3 className="font-serif text-[32px] sm:text-[40px] text-[#f3e8d2] font-normal leading-tight">
                {activeModalPillar.title}
              </h3>
              <p className="mt-3 font-mono text-[15px] text-[#c5b89f] leading-relaxed">
                {activeModalPillar.subtitle}
              </p>

              {/* Verified Deliverables List */}
              <div className="mt-8 border-t border-[#184e27] pt-6">
                <span className="font-mono text-[12px] uppercase text-[#22c55e] tracking-widest block mb-4">
                  Full Deliverables Suite
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalPillar.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-[9999px] border border-[#184e27] bg-[#08120a] px-4 py-2 text-[13px] font-mono text-[#f3e8d2]"
                    >
                      <Check className="h-3.5 w-3.5 text-[#22c55e]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Process Steps */}
              <div className="mt-8 border-t border-[#184e27] pt-6">
                <span className="font-mono text-[12px] uppercase text-[#22c55e] tracking-widest block mb-4">
                  Three-Stage Sprint Sequence
                </span>
                <div className="space-y-4">
                  {activeModalPillar.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-[24px] border border-[#184e27] bg-[#08120a]/80 p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10451d] border border-[#22c55e]/40 font-mono text-[12px] text-[#f3e8d2]">
                        {step.step}
                      </span>
                      <div>
                        <div className="font-serif text-[18px] text-[#f3e8d2] font-normal">
                          {step.title}
                        </div>
                        <div className="font-mono text-[13px] text-[#c5b89f] mt-1">
                          {step.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="mt-10 pt-6 border-t border-[#184e27] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="font-mono text-[12px] text-[#c5b89f]">
                  Lead: Master Creative &amp; Technical Pod
                </div>
                <a
                  href="#inquiry"
                  onClick={() => setActiveModalPillar(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#10451d] border border-[#22c55e]/50 px-6 py-3 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] hover:bg-[#185e2a]"
                >
                  <span>Request Scope for this Practice</span>
                  <span>▸</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
