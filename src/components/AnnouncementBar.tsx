"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 w-full bg-[#10451d] text-[#f3e8d2] text-[13px] sm:text-[14px] font-mono tracking-tight border-b border-[#184e27] transition-all duration-300"
    >
      <div className="mx-auto flex h-auto min-h-[42px] max-w-[1432px] flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="text-[#a7fccd] font-medium uppercase text-[11px] sm:text-[12px] tracking-widest">
            [ATELIER ROSTER // Q3]
          </span>
          <span className="text-[#f3e8d2] font-normal">
            Accepting 2 new commissions for Custom Logo Marks &amp; Next.js 15 Web Systems.
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <a
            href="#inquiry"
            className="inline-flex items-center gap-1 rounded-[9999px] border border-[#f3e8d2]/70 px-3.5 py-1 text-[11px] sm:text-[12px] uppercase tracking-wider text-[#f3e8d2] transition-colors hover:bg-[#f3e8d2] hover:text-[#08120a]"
          >
            <span>Commission Mark</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="rounded-full p-1 text-[#f3e8d2]/70 hover:text-[#f3e8d2] transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
