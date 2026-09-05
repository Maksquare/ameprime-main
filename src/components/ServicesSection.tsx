"use client";

import { useState } from "react";
import { servicesData, ServicePillar } from "@/data/services";
import { ArrowRight, Check, Compass, Laptop, Megaphone, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pillarIcons = {
  branding: Compass,
  "web-development": Laptop,
  "social-media": Megaphone,
};

export function ServicesSection() {
  const [activeModalPillar, setActiveModalPillar] = useState<ServicePillar | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#cecac8] pb-10">
          <div className="max-w-[800px]">
            <span className="font-mono text-[12px] uppercase text-[#797776] tracking-widest block mb-3">
              PILLARS OF EXCELLENCE // THREE PRACTICES
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] text-[#242424] leading-[1.12] font-normal">
              Bespoke disciplines engineered for category leadership.
            </h2>
          </div>

          <div className="font-mono text-[13px] text-[#797776] max-w-[340px]">
            Every discipline operates at highest fidelity, with zero vendor fragmentation. Click any
            service card for full technical methodology.
          </div>
        </div>

        {/* Feature Cards Grid (40px border-radius, 40px padding, 1px Ash border) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = pillarIcons[service.id as keyof typeof pillarIcons] || Sparkles;
            const isElevated = service.isElevated;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-[40px] p-8 sm:p-10 transition-all duration-300 ${
                  isElevated
                    ? "bg-[#cfdaf5] text-[#242424] border border-[#a0b5eb]/70 shadow-sm"
                    : "bg-[#f6f3f1] border border-[#cecac8] text-[#242424] hover:border-[#242424]"
                }`}
              >
                {/* Decorative Gradient Wash inside the Elevated Card */}
                {isElevated && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -bottom-10 h-[260px] w-[260px] rounded-full atmospheric-wash-coral-sky opacity-85 -z-0"
                  />
                )}

                <div className="relative z-10">
                  {/* Tag & Icon Lockup */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#4e4d4d] bg-white/70 px-3 py-1 rounded-[9999px] border border-[#cecac8]/60">
                      {service.tag}
                    </span>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        isElevated
                          ? "bg-[#2b59d1] text-white"
                          : "bg-[#f6f3f1] border border-[#cecac8] text-[#242424]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title in Untitled Serif 24px weight 400 */}
                  <h3 className="font-serif text-[26px] sm:text-[30px] text-[#242424] leading-[1.2] font-normal mb-4">
                    {service.title}
                  </h3>

                  {/* Body in ABC Diatype Mono 16px Graphite */}
                  <p className="font-mono text-[15px] sm:text-[16px] leading-[1.45] text-[#4e4d4d] mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables preview pills */}
                  <div className="space-y-2 mb-8">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[13px] font-mono text-[#242424]">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2b59d1]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions & Metrics */}
                <div className="relative z-10 pt-6 border-t border-[#cecac8]/60 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-serif text-[22px] text-[#242424] leading-none">
                      {service.metrics[0]?.value}
                    </div>
                    <div className="font-mono text-[11px] text-[#797776] uppercase tracking-tight mt-1">
                      {service.metrics[0]?.label}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalPillar(service)}
                    className={`inline-flex items-center gap-1.5 rounded-[100px] px-4 py-2 font-mono text-[12px] uppercase tracking-tight transition-colors ${
                      isElevated
                        ? "bg-[#242424] text-white hover:bg-black"
                        : "border border-[#242424] text-[#242424] hover:bg-[#242424] hover:text-white"
                    }`}
                  >
                    <span>Blueprint</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[40px] border border-[#cecac8] bg-[#f6f3f1] p-6 sm:p-10 shadow-2xl"
            >
              <button
                onClick={() => setActiveModalPillar(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#cecac8] bg-[#f6f3f1] text-[#242424] hover:bg-[#242424] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-mono text-[11px] uppercase tracking-widest text-[#2b59d1] block mb-2">
                {activeModalPillar.tag}
              </span>
              <h3 className="font-serif text-[32px] sm:text-[40px] text-[#242424] font-normal leading-tight">
                {activeModalPillar.title}
              </h3>
              <p className="mt-3 font-mono text-[15px] text-[#4e4d4d] leading-relaxed">
                {activeModalPillar.subtitle}
              </p>

              {/* Verified Deliverables List */}
              <div className="mt-8 border-t border-[#cecac8] pt-6">
                <span className="font-mono text-[12px] uppercase text-[#797776] tracking-widest block mb-4">
                  Full Deliverables Suite
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalPillar.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-[9999px] border border-[#cecac8] bg-white px-4 py-2 text-[13px] font-mono text-[#242424]"
                    >
                      <Check className="h-3.5 w-3.5 text-[#2b59d1]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Process Steps */}
              <div className="mt-8 border-t border-[#cecac8] pt-6">
                <span className="font-mono text-[12px] uppercase text-[#797776] tracking-widest block mb-4">
                  Three-Stage Sprint Sequence
                </span>
                <div className="space-y-4">
                  {activeModalPillar.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-[24px] border border-[#cecac8] bg-white/60 p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#cfdaf5] font-mono text-[12px] text-[#242424]">
                        {step.step}
                      </span>
                      <div>
                        <div className="font-serif text-[18px] text-[#242424] font-normal">
                          {step.title}
                        </div>
                        <div className="font-mono text-[13px] text-[#797776] mt-1">
                          {step.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="mt-10 pt-6 border-t border-[#cecac8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="font-mono text-[12px] text-[#797776]">
                  Production Lead: Multi-Disciplinary Pod
                </div>
                <a
                  href="#inquiry"
                  onClick={() => setActiveModalPillar(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#2b59d1] px-6 py-3 font-mono text-[13px] uppercase tracking-tight text-white hover:bg-[#2045ab]"
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
