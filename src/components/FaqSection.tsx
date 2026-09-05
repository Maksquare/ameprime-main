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
    <section id="faq" className="py-20 sm:py-28 border-t border-[#cecac8]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-[760px] mb-12">
          <span className="font-mono text-[12px] uppercase text-[#797776] tracking-widest block mb-3">
            INQUIRY PROTOCOLS // FREQUENTLY ADDRESSED
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#242424] leading-[1.15] font-normal">
            Clarity across scope, engineering &amp; execution.
          </h2>
        </div>

        {/* Accordion Rows — strictly matching DESIGN.md:
            Full-width row, 40px vertical padding, 1px Ash (#cecac8) bottom border only.
            Question text in Untitled Serif at 24px weight 400, Off-Black.
            Trailing down-chevron icon (↓) in Off-Black, 20px, right-aligned.
            No background fill change on hover.
        */}
        <div className="border-t border-[#cecac8]">
          {faqsData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-[#cecac8]">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between text-left py-10 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[22px] sm:text-[24px] text-[#242424] font-normal pr-6">
                    {item.question}
                  </span>
                  <div className="shrink-0 ml-4">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#242424]"
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
                        <p className="font-mono text-[16px] text-[#4e4d4d] leading-[1.45]">
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
