"use client";

import { useState } from "react";
import { servicesData, ServicePillar } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Laptop,
  Megaphone,
  Shield,
  Star,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

const serviceMeta: Record<
  string,
  {
    rating: string;
    reviews: string;
    price: string;
    color: string;
    badge: string;
    icon: any;
    glow: string;
  }
> = {
  "logo-design": {
    rating: "4.9",
    reviews: "148 Reviews",
    price: "$3,800",
    color: "from-[#10451d] to-[#041a0b]",
    badge: "VECTOR GEOMETRY",
    icon: Compass,
    glow: "rgba(34,197,94,0.4)",
  },
  branding: {
    rating: "4.8",
    reviews: "96 Reviews",
    price: "$6,500",
    color: "from-[#184e27] to-[#0c1e13]",
    badge: "INSTITUTIONAL BRAND",
    icon: Shield,
    glow: "rgba(16,69,29,0.5)",
  },
  "web-development": {
    rating: "5.0",
    reviews: "244 Reviews",
    price: "$9,500",
    color: "from-[#13331f] to-[#08120a]",
    badge: "NEXT.JS 15 FLEET",
    icon: Laptop,
    glow: "rgba(34,197,94,0.5)",
  },
  "social-media": {
    rating: "4.8",
    reviews: "82 Reviews",
    price: "$5,500/mo",
    color: "from-[#1a3822] to-[#0a180e]",
    badge: "ALGORITHMIC REACH",
    icon: Megaphone,
    glow: "rgba(22,101,52,0.4)",
  },
};

export function ServicesSection() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("web-development");
  const activeService = servicesData.find((s) => s.id === selectedPillarId) || servicesData[0];
  const activeMeta = serviceMeta[activeService.id] || serviceMeta["web-development"];

  return (
    <section id="services" className="py-20 sm:py-28 border-t border-[#184e27] bg-[#08120a] relative overflow-hidden">
      {/* Ambient Radial Washes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/4 -translate-x-1/2 -z-10 h-[450px] w-[450px] atmospheric-wash-emerald opacity-60"
      />

      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Console Header (from services page inspo.jpg) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-[9999px] border border-[#184e27] bg-[#0c1e13] px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-[#22c55e] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>CONSOLE // PRACTICE SHOWCASE</span>
            </div>
            <h2 className="font-serif text-[36px] sm:text-[48px] text-[#f3e8d2] font-normal leading-tight">
              Curated Architectural Disciplines.
            </h2>
          </div>

          {/* Category Filter Pills (from services page inspo) */}
          <div className="flex flex-wrap items-center gap-2">
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedPillarId(s.id)}
                className={`rounded-[9999px] px-4 py-2 font-mono text-[12px] uppercase tracking-tight transition-all ${
                  selectedPillarId === s.id
                    ? "bg-[#10451d] border border-[#22c55e] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    : "border border-[#184e27] bg-[#0c1e13] text-[#c5b89f] hover:border-[#22c55e]/60"
                }`}
              >
                {s.tag.split("//")[1] || s.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel / Curved Stage with Organic Asymmetric Cards & Floor Reflections (from inspo) */}
        <div className="relative pt-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {servicesData.map((service) => {
              const meta = serviceMeta[service.id];
              const isSelected = selectedPillarId === service.id;
              const Icon = meta.icon;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setSelectedPillarId(service.id)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative rounded-[40px_24px_38px_24px] border-2 p-7 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "border-[#22c55e] bg-gradient-to-b from-[#10451d] to-[#08120a] shadow-[0_10px_40px_rgba(16,69,29,0.7)] scale-[1.03] z-20"
                      : "border-[#184e27] bg-[#0c1e13] hover:border-[#22c55e]/60 shadow-lg z-10 opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Floor Reflection Underneath */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 inset-x-4 h-8 bg-gradient-to-b from-[#10451d]/40 to-transparent blur-md opacity-70"
                  />

                  {/* Pop-Out 3D Icon Element */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#08120a] border border-[#22c55e]/40 text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-1 font-mono text-[11px] text-[#f3e8d2] bg-black/40 px-2.5 py-1 rounded-[9999px] border border-[#184e27]">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span>{meta.rating}</span>
                    </div>
                  </div>

                  {/* Service Title in Serif */}
                  <h3 className="font-serif text-[22px] sm:text-[24px] text-[#f3e8d2] font-normal leading-tight mb-2">
                    {service.title}
                  </h3>

                  <p className="font-mono text-[12px] text-[#c5b89f] line-clamp-3 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom Footprint Pill with Price Badge (from services inspo) */}
                  <div className="pt-4 border-t border-[#184e27] flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase text-[#22c55e] tracking-wider">
                        {meta.reviews}
                      </div>
                      <div className="font-serif text-[20px] text-[#f3e8d2] mt-0.5">
                        {meta.price}
                      </div>
                    </div>

                    <span
                      className={`h-8 w-8 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#22c55e] text-[#08120a] border-[#22c55e]"
                          : "border-[#184e27] text-[#c5b89f] group-hover:border-[#22c55e]"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Synchronized Lower Dossier Detail Pane (from services page inspo.jpg) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-[40px] border border-[#22c55e]/50 bg-[#0c1e13] p-8 sm:p-12 shadow-[0_0_50px_rgba(16,69,29,0.5)] relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-[#184e27] pb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#22c55e]">
                    {activeService.tag}
                  </span>
                  <span className="text-[#184e27]">•</span>
                  <div className="flex items-center gap-1 font-mono text-[12px] text-[#f3e8d2]">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span>{activeMeta.rating}</span>
                    <span className="text-[#c5b89f]">({activeMeta.reviews})</span>
                  </div>
                </div>

                <h3 className="font-serif text-[32px] sm:text-[42px] text-[#f3e8d2] font-normal leading-tight">
                  {activeService.title}
                </h3>
                <p className="mt-2 font-mono text-[15px] text-[#c5b89f] max-w-[720px] leading-relaxed">
                  {activeService.subtitle}
                </p>
              </div>

              {/* Price & Primary Commission CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#22c55e]">Target Investment</div>
                  <div className="font-serif text-[36px] text-[#f3e8d2] leading-none mt-1">
                    {activeMeta.price}
                  </div>
                </div>

                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#10451d] border border-[#22c55e]/50 px-7 py-3.5 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] hover:bg-[#185e2a] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all"
                >
                  <span>Commission Practice</span>
                  <ArrowRight className="h-4 w-4 text-[#22c55e]" />
                </a>
              </div>
            </div>

            {/* Deliverables Suite */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeService.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-[9999px] border border-[#184e27] bg-[#08120a] px-4 py-2.5 text-[13px] font-mono text-[#f3e8d2]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#22c55e] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
