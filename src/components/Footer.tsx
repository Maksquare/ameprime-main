"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Compass } from "lucide-react";

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
    <footer className="border-t border-[#184e27] bg-[#08120a] pt-16 pb-12 text-[#f3e8d2]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#184e27]">
          {/* Brand Info & Mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[20px] font-medium tracking-tight uppercase">
                AME PRIME
              </span>
              <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
            </div>
            <p className="font-mono text-[13px] text-[#c5b89f] leading-relaxed max-w-[340px]">
              Logo Architecture, Brand Systems &amp; Web Engineering. Unifying mathematical vector marks
              with sub-300ms Next.js edge performance.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="font-mono text-[12px] text-[#22c55e]">
                All Systems Operational // Edge Fleet 99.98%
              </span>
            </div>
          </div>

          {/* Nav Links Column 1: Practices */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#22c55e]">
              Core Disciplines
            </div>
            <ul className="space-y-2 font-mono text-[13px] text-[#c5b89f]">
              <li>
                <a href="#logos" className="hover:text-[#f3e8d2] transition-colors">
                  Logo Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f3e8d2] transition-colors">
                  Brand Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f3e8d2] transition-colors">
                  Web Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f3e8d2] transition-colors">
                  Social Communication
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2: Index */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#22c55e]">
              Atelier Index
            </div>
            <ul className="space-y-2 font-mono text-[13px] text-[#c5b89f]">
              <li>
                <a href="#works" className="hover:text-[#f3e8d2] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#f3e8d2] transition-colors">
                  Scope Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#f3e8d2] transition-colors">
                  Client Protocols
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#f3e8d2] transition-colors">
                  Commission RFP
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#22c55e]">
              Editorial Dispatch // Quarterly Brief
            </div>
            <p className="font-mono text-[13px] text-[#c5b89f] leading-relaxed">
              Curated essays on golden-ratio logo construction, edge web architectures, and executive media reach.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-[13px] font-mono text-[#22c55e]">
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
                  className="flex-1 rounded-[100px] border border-[#184e27] bg-[#0c1e13] px-4 py-2 text-[13px] font-mono text-[#f3e8d2] placeholder:text-[#184e27] focus:border-[#22c55e] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-[100px] bg-[#10451d] border border-[#22c55e]/40 px-4 py-2 font-mono text-[12px] uppercase text-[#f3e8d2] hover:bg-[#185e2a] transition-colors flex items-center gap-1"
                >
                  <span>Join</span>
                  <ArrowRight className="h-3 w-3 text-[#22c55e]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Locations, Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[12px] text-[#c5b89f]">
          <div>
            &copy; {new Date().getFullYear()} AME Prime Media &amp; Communication Ltd. All rights
            reserved.
          </div>

          <div className="flex items-center gap-6 text-[#c5b89f]">
            <span className="hover:text-[#f3e8d2] cursor-pointer">London / Mayfair</span>
            <span className="hover:text-[#f3e8d2] cursor-pointer">New York / Tribeca</span>
            <span className="hover:text-[#f3e8d2] cursor-pointer">Zurich / Enge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
