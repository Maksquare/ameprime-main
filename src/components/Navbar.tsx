"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "SERVICES", href: "#services" },
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
            ? "bg-[#f6f3f1]/90 backdrop-blur-md border-b border-[#cecac8]/60 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            : "bg-[#f6f3f1] py-5"
        }`}
      >
        <div className="mx-auto flex h-[48px] max-w-[1432px] items-center justify-between px-4 sm:px-8">
          {/* Brand Wordmark with signature circular dot mark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-[#242424] no-underline focus:outline-none"
          >
            <span className="font-mono text-[17px] sm:text-[19px] font-medium tracking-tight uppercase">
              AME PRIME
            </span>
            <span className="h-2 w-2 rounded-full bg-[#2b59d1] transition-transform duration-300 group-hover:scale-125" />
            <span className="hidden lg:inline-block text-[11px] font-mono text-[#797776] uppercase tracking-widest pl-1 border-l border-[#cecac8]">
              Media &amp; Comm
            </span>
          </a>

          {/* Desktop Navigation Links — ABC Diatype Mono uppercase style */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[13px] lg:text-[14px] uppercase tracking-tight text-[#4e4d4d] transition-colors duration-200 hover:text-[#242424] relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#242424] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Ghost button + Primary Lake Blue pill button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#works"
              className="inline-flex h-[44px] items-center justify-center rounded-[100px] border border-[#242424] px-5 font-mono text-[13px] uppercase tracking-tight text-[#242424] transition-all duration-200 hover:bg-[#242424] hover:text-[#f6f3f1]"
            >
              Selected Works
            </a>

            <a
              href="#inquiry"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[100px] bg-[#2b59d1] px-6 font-mono text-[13px] uppercase tracking-tight text-white transition-all duration-200 hover:bg-[#244cb5] hover:shadow-[0_4px_14px_rgba(43,89,209,0.35)]"
            >
              <span>Start a Project</span>
              <span className="text-[12px]">▸</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#inquiry"
              className="inline-flex h-[36px] items-center justify-center rounded-[100px] bg-[#2b59d1] px-3.5 font-mono text-[11px] uppercase tracking-tight text-white"
            >
              Inquire ▸
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cecac8] bg-[#f6f3f1] text-[#242424] transition-colors hover:bg-[#cfdaf5]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer with smooth animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[90px] z-30 sm:hidden border-b border-[#cecac8] bg-[#f6f3f1] px-6 py-8 shadow-xl"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[11px] font-mono text-[#797776] uppercase tracking-widest border-b border-[#cecac8] pb-2">
                Navigation Index
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-[26px] text-[#242424] hover:text-[#2b59d1] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-[#797776]" />
                </a>
              ))}

              <div className="pt-4 border-t border-[#cecac8] flex flex-col gap-3">
                <a
                  href="#estimator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-[100px] border border-[#242424] font-mono text-[13px] uppercase tracking-tight text-[#242424]"
                >
                  <Sparkles className="h-4 w-4 text-[#2b59d1]" />
                  <span>Scope &amp; Price Calculator</span>
                </a>
                <a
                  href="#inquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-[100px] bg-[#2b59d1] font-mono text-[13px] uppercase tracking-tight text-white"
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
