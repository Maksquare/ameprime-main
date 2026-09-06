"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AME Prime engineered an emblem that immediately positioned our firm alongside century-old European institutions. Our enterprise valuation grew by $48M within two quarters.",
    author: "Elena Rostova",
    role: "Founding Partner, Solstice Bio-Therapeutics",
    metrics: "+340% Series B Traction",
    discipline: "Logo Architecture & Platform",
  },
  {
    quote:
      "The precision of their vector math and Next.js engineering is visceral. Our previous site was sluggish; AME Prime’s edge deployment loads under 120ms, and our organic reach multiplied 5x.",
    author: "Marcus Aurelius Vance",
    role: "CEO, Chronos Sovereign Capital",
    metrics: "14.2M Monthly Impressions",
    discipline: "Web & Social Media",
  },
  {
    quote:
      "Their typographic rigor and geometric logo construction remind me of classic Swiss design brought to life with 120fps fluid web animations. Simply unmatched.",
    author: "Sophie Laurent",
    role: "VP Brand Strategy, Aethel Natural Sciences",
    metrics: "4.85% E-Commerce Conversion",
    discipline: "Logomark & Packaging",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-[#184e27]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-[720px] mb-14">
          <span className="font-mono text-[12px] uppercase text-[#22c55e] tracking-widest block mb-3">
            TESTAMENT // EXECUTIVE ENDORSEMENTS
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#f3e8d2] leading-[1.15] font-normal">
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
              className="flex flex-col justify-between rounded-[40px] border border-[#184e27] bg-[#0c1e13] p-8 sm:p-10 transition-all hover:border-[#22c55e]/70 hover:shadow-[0_0_30px_rgba(16,69,29,0.3)]"
            >
              <div>
                <Quote className="h-8 w-8 text-[#22c55e] mb-6 opacity-80" />
                <p className="font-serif text-[21px] sm:text-[23px] text-[#f3e8d2] leading-[1.35] font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#184e27]">
                <div className="font-serif text-[18px] text-[#f3e8d2]">{t.author}</div>
                <div className="font-mono text-[12px] text-[#c5b89f] mt-0.5">{t.role}</div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-[9999px] bg-[#10451d] border border-[#184e27] px-3 py-1 font-mono text-[11px] text-[#a7fccd]">
                    {t.metrics}
                  </span>
                  <span className="font-mono text-[11px] text-[#22c55e] uppercase">
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
