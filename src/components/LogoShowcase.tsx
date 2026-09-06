"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Compass,
  Layers,
  CheckCircle2,
  Eye,
  Sliders,
  Maximize2,
  Grid,
} from "lucide-react";

interface LogoMark {
  id: string;
  name: string;
  client: string;
  category: string;
  geometryType: string;
  description: string;
  spec: {
    ratio: string;
    strokeWidth: string;
    gridBasis: string;
    angles: string;
  };
  svgContent: (showGrid: boolean) => React.ReactNode;
}

const logoMarks: LogoMark[] = [
  {
    id: "ame-monogram",
    name: "AME Imperial Monogram",
    client: "AME Prime Flagship Mark",
    category: "Geometric Monogram",
    geometryType: "Fibonacci Spiral & Hexagonal Grid",
    description:
      "Crafted with interconnected interlocking letterforms 'A', 'M', and 'E', symbolizing the triple convergence of Logo Architecture, Digital Engineering, and Media Reach.",
    spec: {
      ratio: "1 : 1.618 (Golden)",
      strokeWidth: "2.4pt Hairline",
      gridBasis: "64-point Cartesian",
      angles: "60° Isometric",
    },
    svgContent: (showGrid) => (
      <div className="relative flex h-48 w-48 items-center justify-center">
        {/* Geometric Grid Overlay */}
        {showGrid && (
          <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-40">
            <circle cx="96" cy="96" r="80" fill="none" stroke="#22c55e" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="96" cy="96" r="50" fill="none" stroke="#22c55e" strokeWidth="0.75" strokeDasharray="2 2" />
            <line x1="16" y1="96" x2="176" y2="96" stroke="#22c55e" strokeWidth="0.75" />
            <line x1="96" y1="16" x2="96" y2="176" stroke="#22c55e" strokeWidth="0.75" />
            <line x1="32" y1="32" x2="160" y2="160" stroke="#f3e8d2" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="160" y1="32" x2="32" y2="160" stroke="#f3e8d2" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        )}
        {/* The Vector Mark */}
        <svg viewBox="0 0 100 100" className="h-32 w-32 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <polygon
            points="50,12 88,34 88,78 50,98 12,78 12,34"
            fill="none"
            stroke="#f3e8d2"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M50,18 L50,92 M22,38 L78,74 M78,38 L22,74"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="50" r="10" fill="#10451d" stroke="#f3e8d2" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="3.5" fill="#f3e8d2" />
        </svg>
      </div>
    ),
  },
  {
    id: "chronos-emblem",
    name: "Sovereign Apex Crest",
    client: "Chronos Capital Partners",
    category: "Financial Emblem",
    geometryType: "Circular Tangent Geometry",
    description:
      "A reductionist crest engineered for global sovereign wealth, featuring mathematically concentric arcs that maintain clarity down to a 16px digital icon.",
    spec: {
      ratio: "1 : 1 Symmetrical",
      strokeWidth: "3.0pt Constant",
      gridBasis: "Concentric Polar",
      angles: "45° Radial",
    },
    svgContent: (showGrid) => (
      <div className="relative flex h-48 w-48 items-center justify-center">
        {showGrid && (
          <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-40">
            <circle cx="96" cy="96" r="85" fill="none" stroke="#22c55e" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="96" cy="96" r="60" fill="none" stroke="#22c55e" strokeWidth="0.75" />
            <circle cx="96" cy="96" r="30" fill="none" stroke="#f3e8d2" strokeWidth="0.75" strokeDasharray="2 2" />
            <line x1="96" y1="10" x2="96" y2="182" stroke="#22c55e" strokeWidth="0.75" />
            <line x1="10" y1="96" x2="182" y2="96" stroke="#22c55e" strokeWidth="0.75" />
          </svg>
        )}
        <svg viewBox="0 0 100 100" className="h-32 w-32 drop-shadow-[0_0_20px_rgba(243,232,210,0.25)]">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#10451d" strokeWidth="6" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#f3e8d2" strokeWidth="2.5" />
          <path
            d="M50 16 L60 38 L84 42 L66 60 L70 84 L50 72 L30 84 L34 60 L16 42 L40 38 Z"
            fill="#10451d"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="52" r="5" fill="#f3e8d2" />
        </svg>
      </div>
    ),
  },
  {
    id: "aethel-botanical",
    name: "Nordic Leaf & Prism",
    client: "Aethel Natural Sciences",
    category: "Luxury Logomark",
    geometryType: "Bézier Curve Continuity (G2)",
    description:
      "A delicate botanical silhouette formed from continuous G2 curvature, balancing pharmaceutical rigor with organic elegance for gold foil embossing.",
    spec: {
      ratio: "1 : 1.414 (Root-2)",
      strokeWidth: "2.0pt Tapered",
      gridBasis: "Curvilinear Mesh",
      angles: "32° Organic Axis",
    },
    svgContent: (showGrid) => (
      <div className="relative flex h-48 w-48 items-center justify-center">
        {showGrid && (
          <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-40">
            <rect x="26" y="26" width="140" height="140" fill="none" stroke="#22c55e" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="96" y1="20" x2="96" y2="172" stroke="#22c55e" strokeWidth="0.75" />
            <line x1="20" y1="96" x2="172" y2="96" stroke="#22c55e" strokeWidth="0.75" />
          </svg>
        )}
        <svg viewBox="0 0 100 100" className="h-32 w-32 drop-shadow-[0_0_20px_rgba(34,197,94,0.35)]">
          <path
            d="M50,15 C75,15 85,45 85,75 C85,82 78,88 70,88 C40,88 15,65 15,35 C15,22 25,15 50,15 Z"
            fill="#10451d"
            stroke="#f3e8d2"
            strokeWidth="2.5"
          />
          <path
            d="M50,22 C65,38 72,58 72,78 M32,48 C45,55 58,62 70,72"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "kinetix-glyph",
    name: "Neural Nexus Monolith",
    client: "Kinetix Neural Systems",
    category: "AI & DeepTech Mark",
    geometryType: "Orthogonal Hyper-Cube",
    description:
      "A multidimensional kinetic glyph representing autonomous neural clustering, designed to rotate fluidly in 3D motion packages and digital headers.",
    spec: {
      ratio: "3D Isometric Cube",
      strokeWidth: "2.8pt Sharp",
      gridBasis: "Axonometric Matrix",
      angles: "120° Tri-axial",
    },
    svgContent: (showGrid) => (
      <div className="relative flex h-48 w-48 items-center justify-center">
        {showGrid && (
          <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-40">
            <polygon points="96,20 162,58 162,134 96,172 30,134 30,58" fill="none" stroke="#22c55e" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="96" y1="20" x2="96" y2="172" stroke="#22c55e" strokeWidth="0.75" />
          </svg>
        )}
        <svg viewBox="0 0 100 100" className="h-32 w-32 drop-shadow-[0_0_20px_rgba(243,232,210,0.3)]">
          <path
            d="M50,15 L85,35 L85,75 L50,95 L15,75 L15,35 Z"
            fill="none"
            stroke="#f3e8d2"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M50,15 L50,55 M50,55 L85,75 M50,55 L15,75"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="55" r="4" fill="#f3e8d2" />
        </svg>
      </div>
    ),
  },
];

export function LogoShowcase() {
  const [selectedMark, setSelectedMark] = useState<LogoMark>(logoMarks[0]);
  const [showGrid, setShowGrid] = useState(true);
  const [invertCanvas, setInvertCanvas] = useState(false);

  return (
    <section id="logos" className="py-20 sm:py-28 border-t border-[#184e27] relative overflow-hidden">
      {/* Ambient Emerald Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/3 -translate-x-1/2 -z-10 h-[420px] w-[420px] atmospheric-wash-emerald opacity-50"
      />

      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 rounded-[9999px] border border-[#184e27] bg-[#0c1e13] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#22c55e] mb-4">
              <Compass className="h-3.5 w-3.5" />
              <span>LOGOMARK &amp; EMBLEM ARCHITECTURE</span>
            </div>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] text-[#f3e8d2] leading-[1.12] font-normal">
              Bespoke Logos Built on Strict Mathematical Geometry.
            </h2>
            <p className="mt-4 font-mono text-[16px] text-[#c5b89f] leading-relaxed">
              We design marks that endure for decades. Every logo is constructed with golden-ratio
              proportions, optical counter-balancing, and rigorous multi-scale testing to command
              respect on everything from an iPhone app icon to architectural stone engraving.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`flex items-center gap-2 rounded-[100px] border px-4 py-2 font-mono text-[12px] uppercase tracking-wider transition-all ${
                showGrid
                  ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  : "border-[#184e27] bg-[#0c1e13] text-[#c5b89f] hover:border-[#22c55e]"
              }`}
            >
              <Grid className="h-3.5 w-3.5 text-[#22c55e]" />
              <span>{showGrid ? "Grid: Active" : "Grid: Hidden"}</span>
            </button>

            <button
              onClick={() => setInvertCanvas(!invertCanvas)}
              className={`flex items-center gap-2 rounded-[100px] border px-4 py-2 font-mono text-[12px] uppercase tracking-wider transition-all ${
                invertCanvas
                  ? "border-[#f3e8d2] bg-[#f3e8d2] text-[#08120a]"
                  : "border-[#184e27] bg-[#0c1e13] text-[#c5b89f] hover:border-[#f3e8d2]"
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{invertCanvas ? "Canvas: Light" : "Canvas: Obsidian"}</span>
            </button>
          </div>
        </div>

        {/* The Interactive Mark Inspection Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Mark Selector Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#c5b89f]/70 mb-1">
              Select Vector Mark Archive:
            </span>
            {logoMarks.map((mark) => {
              const isSelected = selectedMark.id === mark.id;
              return (
                <button
                  key={mark.id}
                  onClick={() => setSelectedMark(mark)}
                  className={`rounded-[28px] border p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_25px_rgba(16,69,29,0.5)] translate-x-1"
                      : "border-[#184e27] bg-[#0c1e13] text-[#c5b89f] hover:border-[#22c55e]/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#22c55e]">
                      {mark.category}
                    </span>
                    <span className="font-mono text-[11px] opacity-70">{mark.spec.ratio}</span>
                  </div>
                  <div className="font-serif text-[22px] text-[#f3e8d2] font-normal leading-snug">
                    {mark.name}
                  </div>
                  <div className="font-mono text-[12px] text-[#c5b89f] mt-1">{mark.client}</div>
                </button>
              );
            })}
          </div>

          {/* Mark Viewer Canvas (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-[40px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Viewport Display Box */}
            <div
              className={`relative flex min-h-[340px] sm:min-h-[420px] w-full items-center justify-center rounded-[32px] border transition-all duration-500 overflow-hidden ${
                invertCanvas
                  ? "bg-[#f3e8d2] border-[#c5b89f] text-[#08120a]"
                  : "bg-[#08120a] border-[#184e27] text-[#f3e8d2]"
              }`}
            >
              {/* Background Cartesian Coordinates */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `linear-gradient(${
                    invertCanvas ? "#10451d" : "#22c55e"
                  } 1px, transparent 1px), linear-gradient(90deg, ${
                    invertCanvas ? "#10451d" : "#22c55e"
                  } 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Central Vector Mark Render */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMark.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedMark.svgContent(showGrid)}
                </motion.div>
              </AnimatePresence>

              {/* Status Pill in Corner */}
              <div className="absolute top-4 left-4 rounded-[9999px] border border-[#184e27] bg-[#0c1e13]/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#22c55e] backdrop-blur-md">
                Vector Precision Mode
              </div>
              <div className="absolute bottom-4 right-4 rounded-[9999px] bg-black/40 px-3 py-1 font-mono text-[11px] text-[#c5b89f] backdrop-blur-md">
                {selectedMark.geometryType}
              </div>
            </div>

            {/* Spec Footprint Grid */}
            <div className="mt-8 border-t border-[#184e27] pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase text-[#c5b89f]/70">Mathematical Ratio</div>
                <div className="font-serif text-[18px] text-[#f3e8d2] mt-0.5">{selectedMark.spec.ratio}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#c5b89f]/70">Stroke Weight</div>
                <div className="font-serif text-[18px] text-[#f3e8d2] mt-0.5">{selectedMark.spec.strokeWidth}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#c5b89f]/70">Grid Basis</div>
                <div className="font-serif text-[18px] text-[#f3e8d2] mt-0.5">{selectedMark.spec.gridBasis}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#c5b89f]/70">Axis &amp; Angle</div>
                <div className="font-serif text-[18px] text-[#f3e8d2] mt-0.5">{selectedMark.spec.angles}</div>
              </div>
            </div>

            {/* Description & Action */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-mono text-[13px] text-[#c5b89f] leading-relaxed max-w-[500px]">
                {selectedMark.description}
              </p>

              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#10451d] px-6 py-3 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] hover:bg-[#185e2a] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all"
              >
                <span>Commission Custom Mark</span>
                <span>▸</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
