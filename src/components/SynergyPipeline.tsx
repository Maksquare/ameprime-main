"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Code2,
  Share2,
  Database,
  Cpu,
  Radio,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Compass,
} from "lucide-react";

interface PipelineNode {
  id: string;
  category: "input" | "core" | "output";
  title: string;
  icon: any;
  tech: string;
  description: string;
  deliverables: string[];
}

const nodes: PipelineNode[] = [
  // Inputs
  {
    id: "input-geometry",
    category: "input",
    title: "Geometry & Archetype",
    icon: Compass,
    tech: "Vector Math & Proportions",
    description: "Fibonacci spirals, root-2 diagonals, and optical balance parameters extracted from your market category.",
    deliverables: ["Golden-Ratio Blueprints", "Optical Counter-Balance", "Silhouette Stress Audit"],
  },
  {
    id: "input-brand",
    category: "input",
    title: "Brand Narrative & DNA",
    icon: Layers,
    tech: "Identity Vectors",
    description: "Raw institutional positioning, stakeholder doctrine, and competitor visual divergence audits.",
    deliverables: ["Voice Spectrum", "Typographic Thesis", "Editorial Hierarchy"],
  },
  {
    id: "input-market",
    category: "input",
    title: "Algorithmic & Social Signals",
    icon: Radio,
    tech: "Social Velocity",
    description: "Cultural resonance patterns across executive feeds, short-form video algorithms, and visual search.",
    deliverables: ["Thumbnail Saliency", "Hook Retention Maps", "Audience Frequency"],
  },

  // Core Hub
  {
    id: "core-hub",
    category: "core",
    title: "AME Imperial Synthesis Hub",
    icon: Cpu,
    tech: "Core Engine #10451D",
    description: "The proprietary synthesis where vector logomarks, Next.js server component trees, and video pacing synchronize.",
    deliverables: [
      "Vector Token Synchronizer",
      "Dynamic Headless Content Graph",
      "Multi-Surface Asset Compiler",
    ],
  },

  // Outputs
  {
    id: "output-logo",
    category: "output",
    title: "Bespoke Logomark Fleet",
    icon: Sparkles,
    tech: "Multi-Scale Vector Kit",
    description: "Master vector files (.SVG, .EPS, .PDF) calibrated for high-density OLED screens down to 16px and architectural signage.",
    deliverables: ["Monogram & Emblem Suite", "Glyph Fonts & Favicons", "Trademark Asset Dossier"],
  },
  {
    id: "output-web",
    category: "output",
    title: "Sub-300ms Web Platform",
    icon: Code2,
    tech: "Next.js 15 Edge Fleet",
    description: "Fluid React 19 web app deployed globally with zero layout shift and 100/100 Lighthouse speed scores.",
    deliverables: ["Edge SSR Streaming", "Framer Motion Micro-Interactions", "Headless CMS Bridge"],
  },
  {
    id: "output-social",
    category: "output",
    title: "Algorithmic Media Flow",
    icon: Share2,
    tech: "Multi-Channel Broadcast",
    description: "Continuous cinema short-form reels, high-engagement threads, and community conversion loops.",
    deliverables: ["Weekly Video Drops", "Executive Ghostwriting", "Attribution Dashboards"],
  },
];

export function SynergyPipeline() {
  const [selectedNode, setSelectedNode] = useState<PipelineNode>(nodes[3]); // Default to core hub

  const inputNodes = nodes.filter((n) => n.category === "input");
  const outputNodes = nodes.filter((n) => n.category === "output");
  const coreNode = nodes.find((n) => n.category === "core")!;

  return (
    <section id="synergy" className="relative py-20 sm:py-28 border-t border-[#184e27]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[800px] mb-16">
          <div className="inline-flex items-center gap-2 rounded-[9999px] border border-[#184e27] bg-[#0c1e13] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#22c55e] mb-4">
            <span>UNIFIED PROCESS // SYNCHRONIZED EXECUTION</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[54px] text-[#f3e8d2] leading-[1.15] font-normal">
            The Quad-Pillar Synergy Engine.
          </h2>
          <p className="mt-4 font-mono text-[16px] text-[#c5b89f] leading-[1.45]">
            Why work with disconnected agencies? At AME Prime, the geometric proportions crafted for
            your logo flow directly into Next.js responsive design tokens and dictate the visual pacing
            of your short-form video releases.
          </p>
        </div>

        {/* Pipeline Diagram Canvas */}
        <div className="relative rounded-[40px] border border-[#184e27] bg-[#0c1e13] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          {/* Ambient Emerald Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full atmospheric-wash-emerald opacity-60"
          />

          {/* Diagram Architecture Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Input Nodes */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#c5b89f]/70 mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#184e27]" />
                STAGE 01 // DISCOVERY &amp; MATH
              </span>
              {inputNodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`group flex items-center justify-between gap-3 rounded-[9999px] border px-5 py-3 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_20px_rgba(34,197,94,0.3)] scale-[1.02]"
                        : "border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60 hover:text-[#f3e8d2]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-4 w-4 ${
                          isSelected ? "text-[#22c55e]" : "text-[#10451d] text-[#22c55e]/80"
                        }`}
                      />
                      <span className="font-mono text-[13px] uppercase tracking-tight font-medium">
                        {node.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isSelected ? "rotate-90 text-[#22c55e]" : "text-[#184e27]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Middle Column: Central Hub */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
              <button
                onClick={() => setSelectedNode(coreNode)}
                className={`relative w-full max-w-[390px] rounded-[40px] border p-8 text-center transition-all duration-300 ${
                  selectedNode.id === coreNode.id
                    ? "border-[#22c55e] bg-[#10451d]/90 shadow-[0_0_40px_rgba(16,69,29,0.8)] ring-2 ring-[#22c55e]/30"
                    : "border-[#184e27] bg-[#08120a] hover:border-[#22c55e]"
                }`}
              >
                {/* Central Emerald Glow Badge */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#10451d] text-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.4)] border border-[#22c55e]/40">
                  <Cpu className="h-8 w-8 animate-pulse" />
                </div>
                <div className="inline-block rounded-[9999px] bg-[#184e27] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#a7fccd] mb-2">
                  NORMALIZATION &amp; ORCHESTRATION
                </div>
                <h3 className="font-serif text-[24px] text-[#f3e8d2] font-normal">
                  {coreNode.title}
                </h3>
                <p className="mt-2 font-mono text-[12px] text-[#c5b89f] leading-relaxed">
                  Logomark vector curves, Next.js server components, and multi-channel video content synced on an unbroken cadence.
                </p>

                <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] text-[#22c55e] uppercase tracking-wider">
                  <span>Inspect Engine</span>
                  <span>▸</span>
                </div>
              </button>
            </div>

            {/* Right Column: Output Nodes */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#c5b89f]/70 mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                STAGE 03 // DISPATCH &amp; IMPACT
              </span>
              {outputNodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`group flex items-center justify-between gap-3 rounded-[9999px] border px-5 py-3 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_20px_rgba(34,197,94,0.3)] scale-[1.02]"
                        : "border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60 hover:text-[#f3e8d2]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-4 w-4 ${
                          isSelected ? "text-[#22c55e]" : "text-[#22c55e]/80"
                        }`}
                      />
                      <span className="font-mono text-[13px] uppercase tracking-tight font-medium">
                        {node.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isSelected ? "rotate-90 text-[#22c55e]" : "text-[#184e27]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Node Telemetry Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-8 rounded-[28px] border border-[#184e27] bg-[#08120a]/90 p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#184e27] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10451d] text-[#22c55e] border border-[#22c55e]/40">
                    <selectedNode.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#22c55e]">
                      [TELEMETRY BLUEPRINT // {selectedNode.category.toUpperCase()}]
                    </span>
                    <h4 className="font-serif text-[22px] text-[#f3e8d2] font-normal">
                      {selectedNode.title}
                    </h4>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-[100px] border border-[#184e27] bg-[#0c1e13] px-4 py-1 font-mono text-[12px] text-[#f3e8d2]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-ping" />
                  <span>Protocol: {selectedNode.tech}</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6">
                  <div className="font-mono text-[11px] uppercase text-[#c5b89f]/70 mb-1">
                    Telemetry &amp; Mechanism
                  </div>
                  <p className="font-mono text-[14px] text-[#c5b89f] leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <div className="font-mono text-[11px] uppercase text-[#c5b89f]/70 mb-2">
                    Verified Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-[9999px] border border-[#184e27] bg-[#0c1e13] px-3.5 py-1 font-mono text-[12px] text-[#f3e8d2]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#22c55e]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
