"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-[#cecac8] bg-[#f6f3f1] pt-16 pb-12 text-[#242424]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#cecac8]">
          {/* Brand Info & Mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[20px] font-medium tracking-tight uppercase">
                AME PRIME
              </span>
              <span className="h-2 w-2 rounded-full bg-[#2b59d1]" />
            </div>
            <p className="font-mono text-[13px] text-[#4e4d4d] leading-relaxed max-w-[340px]">
              Media, Web Engineering &amp; Strategic Communication. Unifying institutional brand
              authority with Next.js sub-second performance.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="h-2 w-2 rounded-full bg-[#a7fccd] animate-pulse" />
              <span className="font-mono text-[12px] text-[#4e4d4d]">
                All Systems Operational // Edge Fleet 99.98%
              </span>
            </div>
          </div>

          {/* Nav Links Column 1: Practices */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#797776]">
              Core Disciplines
            </div>
            <ul className="space-y-2 font-mono text-[13px] text-[#4e4d4d]">
              <li>
                <a href="#services" className="hover:text-[#242424] transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#242424] transition-colors">
                  Web Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#242424] transition-colors">
                  Social Communication
                </a>
              </li>
              <li>
                <a href="#synergy" className="hover:text-[#242424] transition-colors">
                  Synergy Pipeline
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2: Index */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#797776]">
              Studio Index
            </div>
            <ul className="space-y-2 font-mono text-[13px] text-[#4e4d4d]">
              <li>
                <a href="#works" className="hover:text-[#242424] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#242424] transition-colors">
                  Scope Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#242424] transition-colors">
                  Client Protocols
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#242424] transition-colors">
                  Commission RFP
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#797776]">
              Editorial Dispatch // Quarterly Brief
            </div>
            <p className="font-mono text-[13px] text-[#4e4d4d] leading-relaxed">
              Curated essays on typography, edge web architecture, and algorithmic audience dynamics.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-[13px] font-mono text-[#2b59d1]">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscription Confirmed. Welcome to the Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="executive@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-[100px] border border-[#cecac8] bg-white px-4 py-2 text-[13px] font-mono text-[#242424] placeholder:text-[#cecac8] focus:border-[#2b59d1] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-[100px] bg-[#242424] px-4 py-2 font-mono text-[12px] uppercase text-white hover:bg-black transition-colors flex items-center gap-1"
                >
                  <span>Join</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Locations, Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[12px] text-[#797776]">
          <div>
            &copy; {new Date().getFullYear()} AME Prime Media &amp; Communication Ltd. All rights
            reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#242424] cursor-pointer">London / Mayfair</span>
            <span className="hover:text-[#242424] cursor-pointer">New York / Tribeca</span>
            <span className="hover:text-[#242424] cursor-pointer">Zurich / Enge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
