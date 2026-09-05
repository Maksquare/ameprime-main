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
    id: "input-brand",
    category: "input",
    title: "Brand DNA & Heritage",
    icon: Layers,
    tech: "Identity Vectors",
    description: "Raw institutional positioning, stakeholder interviews, competitor dissonance audits.",
    deliverables: ["Archetype Formulation", "Voice Spectrum", "Typographic Thesis"],
  },
  {
    id: "input-data",
    category: "input",
    title: "User Behavior & Telemetry",
    icon: Database,
    tech: "Telemetry Feeds",
    description: "Real-time user friction heatmaps, dropoff analysis, and intent segmentation.",
    deliverables: ["Conversion Funnel Maps", "Latency Targets", "Device Demographics"],
  },
  {
    id: "input-market",
    category: "input",
    title: "Algorithmic Trends",
    icon: Radio,
    tech: "Social Velocity",
    description: "Cultural relevance vectors across TikTok, X, YouTube, and LinkedIn executive channels.",
    deliverables: ["Topical Hook Formulas", "Audio Saliency", "Audience Frequency"],
  },

  // Core Hub
  {
    id: "core-hub",
    category: "core",
    title: "AME Unified Synthesis Hub",
    icon: Cpu,
    tech: "Core Engine",
    description: "The proprietary synthesis where design tokens, Next.js component trees, and video pacing synchronize.",
    deliverables: [
      "Atomic Token Synchronizer",
      "Dynamic Headless Content Graph",
      "Unified Cross-Platform Asset Compiler",
    ],
  },

  // Outputs
  {
    id: "output-identity",
    category: "output",
    title: "Enduring Identity System",
    icon: Sparkles,
    tech: "Global Asset Suite",
    description: "Exhaustive vector tokens, physical print guidelines, and tactile brand guidelines.",
    deliverables: ["Typeface Licenses", "Figma Design System", "Packaging Diellines"],
  },
  {
    id: "output-web",
    category: "output",
    title: "Sub-400ms Web Platform",
    icon: Code2,
    tech: "Next.js Edge Fleet",
    description: "Fluid React 19 web app deployed globally with zero layout shift and 99/100 Lighthouse speed.",
    deliverables: ["Edge SSR Pipeline", "PWA Offline Caching", "Stripe / CMS API Bridge"],
  },
  {
    id: "output-social",
    category: "output",
    title: "Algorithmic Media Flow",
    icon: Share2,
    tech: "Multi-Channel Broadcast",
    description: "Continuous short-form video reels, high-engagement threads, and community conversion loops.",
    deliverables: ["Weekly Video Drops", "Executive Ghostwriting", "Retention Dashboards"],
  },
];

export function SynergyPipeline() {
  const [selectedNode, setSelectedNode] = useState<PipelineNode>(nodes[3]); // Default to core hub

  const inputNodes = nodes.filter((n) => n.category === "input");
  const outputNodes = nodes.filter((n) => n.category === "output");
  const coreNode = nodes.find((n) => n.category === "core")!;

  return (
    <section id="synergy" className="relative py-20 sm:py-28 border-t border-[#cecac8]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[780px] mb-16">
          <div className="inline-flex items-center gap-2 rounded-[9999px] border border-[#cecac8] bg-[#f6f3f1] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#797776] mb-4">
            <span>OPERATIONAL BLUEPRINT // SYNCHRONIZATION</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[54px] text-[#242424] leading-[1.15] font-normal">
            The Three-Pillar Synergy Engine.
          </h2>
          <p className="mt-4 font-mono text-[16px] text-[#4e4d4d] leading-[1.4]">
            Why settle for fragmented vendors? AME Prime unites brand identity, digital code, and
            social amplification through an unbroken algorithmic workflow. Click any node to inspect
            the live telemetry.
          </p>
        </div>

        {/* Pipeline Diagram Canvas */}
        <div className="relative rounded-[40px] border border-[#cecac8] bg-[#f6f3f1] p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#a7fccd]/25 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-12 top-10 h-[250px] w-[250px] rounded-full bg-[#a0b5eb]/20 blur-[80px]"
          />

          {/* Diagram Architecture Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Input Nodes */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#797776] mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#cecac8]" />
                STAGE 01 // INGESTION
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
                        ? "border-[#242424] bg-[#242424] text-white shadow-md scale-[1.02]"
                        : "border-[#cecac8] bg-[#f6f3f1] text-[#242424] hover:border-[#242424]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-4 w-4 ${
                          isSelected ? "text-[#a7fccd]" : "text-[#2b59d1]"
                        }`}
                      />
                      <span className="font-mono text-[13px] uppercase tracking-tight font-medium">
                        {node.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isSelected ? "rotate-90 text-white" : "text-[#797776]"
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
                className={`relative w-full max-w-[380px] rounded-[40px] border p-8 text-center transition-all duration-300 ${
                  selectedNode.id === coreNode.id
                    ? "border-[#2b59d1] bg-white shadow-[0_0_35px_rgba(43,89,209,0.15)] ring-2 ring-[#2b59d1]/20"
                    : "border-[#cecac8] bg-[#f6f3f1] hover:border-[#2b59d1]"
                }`}
              >
                {/* Central Soft Green Radial Glow Badge */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#a7fccd]/40 text-[#2b59d1] shadow-inner">
                  <Cpu className="h-8 w-8 animate-pulse" />
                </div>
                <div className="inline-block rounded-[9999px] bg-[#cfdaf5] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#242424] mb-2">
                  NORMALIZATION &amp; ORCHESTRATION
                </div>
                <h3 className="font-serif text-[24px] text-[#242424] font-normal">
                  {coreNode.title}
                </h3>
                <p className="mt-2 font-mono text-[12px] text-[#797776] leading-relaxed">
                  Design tokens, Next.js server components, and multi-channel video content synced on an unbroken cadence.
                </p>

                <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] text-[#2b59d1] uppercase tracking-wider">
                  <span>Inspect Engine</span>
                  <span>▸</span>
                </div>
              </button>
            </div>

            {/* Right Column: Output Nodes */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#797776] mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b59d1]" />
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
                        ? "border-[#2b59d1] bg-[#2b59d1] text-white shadow-md scale-[1.02]"
                        : "border-[#cecac8] bg-[#f6f3f1] text-[#242424] hover:border-[#2b59d1]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-4 w-4 ${
                          isSelected ? "text-[#a7fccd]" : "text-[#2b59d1]"
                        }`}
                      />
                      <span className="font-mono text-[13px] uppercase tracking-tight font-medium">
                        {node.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isSelected ? "rotate-90 text-white" : "text-[#797776]"
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
              className="mt-8 rounded-[28px] border border-[#cecac8] bg-white/90 p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#cecac8]/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cfdaf5] text-[#242424]">
                    <selectedNode.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#797776]">
                      [NODE SPECIFICATION // {selectedNode.category.toUpperCase()}]
                    </span>
                    <h4 className="font-serif text-[22px] text-[#242424] font-normal">
                      {selectedNode.title}
                    </h4>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-[100px] border border-[#cecac8] bg-[#f6f3f1] px-4 py-1 font-mono text-[12px] text-[#4e4d4d]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b59d1] animate-ping" />
                  <span>Protocol: {selectedNode.tech}</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6">
                  <div className="font-mono text-[11px] uppercase text-[#797776] mb-1">
                    Telemetry &amp; Mechanism
                  </div>
                  <p className="font-mono text-[14px] text-[#4e4d4d] leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <div className="font-mono text-[11px] uppercase text-[#797776] mb-2">
                    Verified Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-[9999px] border border-[#cecac8] bg-[#f6f3f1] px-3.5 py-1 font-mono text-[12px] text-[#242424]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#2b59d1]" />
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
