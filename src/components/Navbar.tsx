"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Disciplines", href: "#disciplines" },
    { label: "Logo Atelier", href: "#logo-atelier" },
    { label: "Web & Video", href: "#web-video" },
    { label: "Case Studies", href: "#works" },
    { label: "Estimator", href: "#estimator" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 transition-all duration-300">
      <div
        className={`w-full max-w-6xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        }`}
      >
        {/* Brand Name / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#10451d] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_10px_rgba(16,69,29,0.3)] transition-transform group-hover:scale-105">
            <span className="font-display tracking-tight text-emerald-300">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-slate-900 tracking-wider text-sm sm:text-base leading-none">
              AME PRIME
            </span>
            <span className="text-[10px] text-emerald-800 font-semibold tracking-widest uppercase">
              STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#10451d] hover:bg-[#165a26] text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_4px_16px_rgba(16,69,29,0.25)] hover:shadow-[0_6px_22px_rgba(16,69,29,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#10451d] text-white text-sm font-semibold shadow-md"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
