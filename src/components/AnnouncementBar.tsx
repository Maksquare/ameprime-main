"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 w-full bg-[#000000] text-[#f6f3f1] text-[13px] sm:text-[14px] font-mono tracking-tight transition-all duration-300">
      <div className="mx-auto flex h-auto min-h-[40px] max-w-[1432px] flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#a7fccd] animate-pulse" />
          <span className="text-[#a0b5eb] font-medium uppercase text-[11px] sm:text-[12px] tracking-wider">
            [Q3 STUDIO ROSTER]
          </span>
          <span className="text-[#f6f3f1] font-normal">
            Accepting 2 new flagship partners for Brand &amp; Next.js deployments.
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <a
            href="#inquiry"
            className="inline-flex items-center gap-1 rounded-[9999px] border border-[#f6f3f1] px-3 py-1 text-[11px] sm:text-[12px] uppercase tracking-wider text-[#f6f3f1] transition-colors hover:bg-[#f6f3f1] hover:text-[#000000]"
          >
            <span>Reserve Slot</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="rounded-full p-1 text-[#f6f3f1]/70 hover:text-[#f6f3f1] transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
