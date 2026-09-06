"use client";

import { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 border-t border-[#184e27]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-[760px] mb-12">
          <span className="font-mono text-[12px] uppercase text-[#22c55e] tracking-widest block mb-3">
            INQUIRY PROTOCOLS // FREQUENTLY ADDRESSED
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#f3e8d2] leading-[1.15] font-normal">
            Clarity across logo architecture, code &amp; execution.
          </h2>
        </div>

        {/* Accordion Rows */}
        <div className="border-t border-[#184e27]">
          {faqsData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-[#184e27]">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between text-left py-10 transition-colors focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[22px] sm:text-[24px] text-[#f3e8d2] font-normal pr-6 group-hover:text-[#22c55e] transition-colors">
                    {item.question}
                  </span>
                  <div className="shrink-0 ml-4">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#22c55e]"
                    >
                      <ArrowDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-1 max-w-[920px]">
                        <p className="font-mono text-[16px] text-[#c5b89f] leading-[1.45]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
