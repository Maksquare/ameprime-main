"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All Disciplines" },
  { id: "logos", label: "Logo Architecture" },
  { id: "branding", label: "Brand Systems" },
  { id: "web-development", label: "Web Engineering" },
  { id: "social-media", label: "Social Media" },
];

export function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="py-20 sm:py-28 border-t border-[#184e27]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-[12px] uppercase text-[#22c55e] tracking-widest block mb-3">
              ARCHIVE &amp; VERIFIED OUTCOMES // 2024—2025
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] text-[#f3e8d2] leading-[1.12] font-normal">
              Selected Works &amp; Case Studies.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-[9999px] px-4 py-2 font-mono text-[12px] uppercase tracking-tight transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#10451d] border border-[#22c55e] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    : "border border-[#184e27] bg-[#0c1e13] text-[#c5b89f] hover:border-[#22c55e]/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-[40px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-8 transition-all hover:border-[#22c55e]/70 hover:shadow-[0_0_30px_rgba(16,69,29,0.4)]"
              >
                {/* Project Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-[#184e27] bg-[#08120a] mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradientWash}`}
                  />
                  <div className="absolute top-4 left-4 rounded-[9999px] bg-[#08120a]/80 border border-[#184e27] backdrop-blur-md px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#22c55e]">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute top-4 right-4 rounded-[9999px] bg-[#0c1e13]/90 border border-[#184e27] backdrop-blur-md px-3 py-1 font-mono text-[11px] text-[#f3e8d2]">
                    {project.year}
                  </div>
                </div>

                {/* Project Meta */}
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#22c55e] tracking-widest mb-1">
                    {project.client}
                  </div>
                  <h3 className="font-serif text-[28px] sm:text-[32px] text-[#f3e8d2] font-normal leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-[14px] text-[#c5b89f] leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Impact Metric Chips */}
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#184e27] pt-4">
                    {project.impactMetrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="font-serif text-[20px] text-[#f3e8d2]">{metric.value}</div>
                        <div className="font-mono text-[10px] uppercase text-[#22c55e] tracking-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-[#184e27] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-[9999px] bg-[#10451d] border border-[#184e27] px-2.5 py-0.5 font-mono text-[11px] text-[#f3e8d2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1 font-mono text-[13px] text-[#f3e8d2] uppercase tracking-tight hover:text-[#22c55e] transition-colors"
                  >
                    <span>Read Case</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#22c55e]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-[860px] max-h-[90vh] overflow-y-auto rounded-[40px] border border-[#22c55e]/50 bg-[#0c1e13] p-6 sm:p-10 shadow-[0_0_60px_rgba(16,69,29,0.8)] text-[#f3e8d2]"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#184e27] bg-[#08120a] text-[#f3e8d2] hover:border-[#22c55e] transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="font-mono text-[12px] uppercase tracking-widest text-[#22c55e] mb-2">
                {activeProjectModal.categoryLabel} // {activeProjectModal.year}
              </div>
              <h3 className="font-serif text-[34px] sm:text-[44px] text-[#f3e8d2] font-normal leading-tight">
                {activeProjectModal.title}
              </h3>
              <p className="mt-3 font-mono text-[16px] text-[#c5b89f] leading-relaxed">
                {activeProjectModal.summary}
              </p>

              {/* Verified Metrics Strip */}
              <div className="my-8 rounded-[28px] border border-[#184e27] bg-[#08120a] p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activeProjectModal.impactMetrics.map((m, idx) => (
                  <div key={idx} className="border-l-2 border-[#22c55e] pl-4">
                    <div className="font-serif text-[32px] text-[#f3e8d2] font-normal">{m.value}</div>
                    <div className="font-mono text-[11px] uppercase text-[#22c55e]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Client Testimonial */}
              {activeProjectModal.testimonial && (
                <div className="my-8 rounded-[28px] bg-[#10451d]/70 border border-[#184e27] p-6 sm:p-8">
                  <p className="font-serif italic text-[20px] sm:text-[22px] text-[#f3e8d2] leading-relaxed">
                    &ldquo;{activeProjectModal.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 font-mono text-[12px] text-[#a7fccd] uppercase tracking-wider">
                    — {activeProjectModal.testimonial.author},{" "}
                    <span className="text-[#c5b89f]">{activeProjectModal.testimonial.role}</span>
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="border-t border-[#184e27] pt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-[9999px] border border-[#184e27] bg-[#08120a] px-3.5 py-1 font-mono text-[12px] text-[#f3e8d2]"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#22c55e]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="#inquiry"
                  onClick={() => setActiveProjectModal(null)}
                  className="inline-flex items-center gap-2 rounded-[100px] bg-[#10451d] border border-[#22c55e]/50 px-6 py-3 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] hover:bg-[#185e2a]"
                >
                  <span>Commission Similar Scope</span>
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
