import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#10451d] text-emerald-300 font-bold text-sm flex items-center justify-center">
                  A
                </div>
                <span className="font-display font-extrabold text-slate-900 tracking-wider text-base">
                  AME PRIME
                </span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                AME Prime is a premier media, design architecture, and software engineering atelier crafting category-defining brand identities, viral video productions, and sub-300ms digital platforms.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Studios Active • Accepting Q3/Q4 Sprints</span>
            </div>
          </div>

          {/* Disciplines Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-4">
              Core Disciplines
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="#disciplines" className="hover:text-[#10451d] transition-colors">
                  Logo Designing
                </Link>
              </li>
              <li>
                <Link href="#disciplines" className="hover:text-[#10451d] transition-colors">
                  Brand Identity Systems
                </Link>
              </li>
              <li>
                <Link href="#disciplines" className="hover:text-[#10451d] transition-colors">
                  Website Development (Next.js)
                </Link>
              </li>
              <li>
                <Link href="#disciplines" className="hover:text-[#10451d] transition-colors">
                  4K Video Editing & Reels
                </Link>
              </li>
              <li>
                <Link href="#disciplines" className="hover:text-[#10451d] transition-colors">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Hubs (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-4">
              Studio Locations
            </span>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 mb-6">
              <div>
                <div className="font-bold text-slate-800">London</div>
                <div className="text-slate-400">Mayfair Atelier</div>
              </div>
              <div>
                <div className="font-bold text-slate-800">New York</div>
                <div className="text-slate-400">SoHo Creative Lab</div>
              </div>
              <div>
                <div className="font-bold text-slate-800">Dubai</div>
                <div className="text-slate-400">DIFC Innovation Hub</div>
              </div>
              <div>
                <div className="font-bold text-slate-800">Direct Inquiries</div>
                <div className="text-emerald-700 font-semibold">inquiry@ameprime.com</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-800 mb-1">
                Looking to elevate your brand?
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                Schedule a confidential 30-minute strategic consultation.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10451d] hover:text-emerald-700 uppercase tracking-wider"
              >
                <span>Initiate Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} AME Prime Media & Communication. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-slate-600">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-slate-600">Terms of Engagement</Link>
            <Link href="#contact" className="hover:text-slate-600">IP Protection</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
