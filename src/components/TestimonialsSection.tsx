"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AME Prime doesn’t design templates; they engineer cultural artifacts. Our enterprise valuation tripled following the rebrand and Next.js platform overhaul.",
    author: "Elena Rostova",
    role: "Founding Partner, Solstice Bio-Therapeutics",
    metrics: "+340% Series B Traction",
    discipline: "Full Architecture & Brand",
  },
  {
    quote:
      "The speed difference was visceral. Our previous site was bloated and slow. AME Prime’s Next.js edge build loads instantaneously, and our social video reach jumped 5x in 90 days.",
    author: "Marcus Aurelius Vance",
    role: "CEO, Chronos Sovereign Capital",
    metrics: "14.2M Monthly Impressions",
    discipline: "Web & Social Media",
  },
  {
    quote:
      "Their typographic rigor and editorial standards remind me of classic Swiss print design brought to life with 120fps fluid web animations. Simply unmatched.",
    author: "Sophie Laurent",
    role: "VP Brand Strategy, Aethel Natural Sciences",
    metrics: "4.85% E-Commerce Conversion",
    discipline: "Packaging & E-Commerce",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-[#cecac8]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-[700px] mb-14">
          <span className="font-mono text-[12px] uppercase text-[#797776] tracking-widest block mb-3">
            TESTAMENT // EXECUTIVE ENDORSEMENTS
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#242424] leading-[1.15] font-normal">
            Enduring proof from those who expect perfection.
          </h2>
        </div>

        {/* Testimonials 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-[40px] border border-[#cecac8] bg-[#f6f3f1] p-8 sm:p-10 transition-all hover:border-[#242424]"
            >
              <div>
                <Quote className="h-8 w-8 text-[#a0b5eb] mb-6" />
                <p className="font-serif text-[21px] sm:text-[23px] text-[#242424] leading-[1.35] font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#cecac8]/60">
                <div className="font-serif text-[18px] text-[#242424]">{t.author}</div>
                <div className="font-mono text-[12px] text-[#797776] mt-0.5">{t.role}</div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-[9999px] bg-[#cfdaf5] px-3 py-1 font-mono text-[11px] text-[#242424]">
                    {t.metrics}
                  </span>
                  <span className="font-mono text-[11px] text-[#797776] uppercase">
                    {t.discipline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
