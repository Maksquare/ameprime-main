"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Sparkles, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "LOGOMARKS", href: "#logos" },
  { label: "DISCIPLINES", href: "#services" },
  { label: "SYNERGY", href: "#synergy" },
  { label: "SELECTED WORKS", href: "#works" },
  { label: "ESTIMATOR", href: "#estimator" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#08120a]/90 backdrop-blur-md border-b border-[#184e27]/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#08120a] py-5 border-b border-[#184e27]/40"
        }`}
      >
        <div className="mx-auto flex h-[48px] max-w-[1432px] items-center justify-between px-4 sm:px-8">
          {/* Brand Wordmark with signature circular emerald dot mark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-[#f3e8d2] no-underline focus:outline-none"
          >
            <span className="font-mono text-[17px] sm:text-[19px] font-medium tracking-tight uppercase">
              AME PRIME
            </span>
            <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] transition-transform duration-300 group-hover:scale-125" />
            <span className="hidden lg:inline-block text-[11px] font-mono text-[#c5b89f] uppercase tracking-widest pl-2 border-l border-[#184e27]">
              Logo &amp; Brand Systems
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[13px] lg:text-[14px] uppercase tracking-tight text-[#c5b89f] transition-colors duration-200 hover:text-[#f3e8d2] relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#22c55e] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Ghost button + Primary Imperial Forest #10451d pill button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#works"
              className="inline-flex h-[44px] items-center justify-center rounded-[100px] border border-[#184e27] bg-[#0c1e13] px-5 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] transition-all duration-200 hover:border-[#22c55e] hover:text-white"
            >
              Selected Works
            </a>

            <a
              href="#inquiry"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[100px] bg-[#10451d] border border-[#22c55e]/40 px-6 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] transition-all duration-200 hover:bg-[#185e2a] hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]"
            >
              <span>Start a Project</span>
              <span className="text-[12px] text-[#22c55e]">▸</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#inquiry"
              className="inline-flex h-[36px] items-center justify-center rounded-[100px] bg-[#10451d] border border-[#22c55e]/50 px-3.5 font-mono text-[11px] uppercase tracking-tight text-[#f3e8d2]"
            >
              Inquire ▸
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#184e27] bg-[#0c1e13] text-[#f3e8d2] transition-colors hover:border-[#22c55e]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[90px] z-30 sm:hidden border-b border-[#184e27] bg-[#08120a] px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[11px] font-mono text-[#c5b89f]/70 uppercase tracking-widest border-b border-[#184e27] pb-2">
                Navigation Index
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-[26px] text-[#f3e8d2] hover:text-[#22c55e] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-[#c5b89f]" />
                </a>
              ))}

              <div className="pt-4 border-t border-[#184e27] flex flex-col gap-3">
                <a
                  href="#logos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-[100px] border border-[#184e27] bg-[#0c1e13] font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2]"
                >
                  <Compass className="h-4 w-4 text-[#22c55e]" />
                  <span>Interactive Logo Marks</span>
                </a>
                <a
                  href="#inquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-[100px] bg-[#10451d] font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2]"
                >
                  <span>Start a Project</span>
                  <span>▸</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
