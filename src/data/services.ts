export interface ServicePillar {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  isElevated?: boolean;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack?: string[];
}

export const servicesData: ServicePillar[] = [
  {
    id: "branding",
    tag: "PILLAR 01 // IDENTITY",
    title: "Brand Strategy & Visual Direction",
    subtitle: "Distilling institutional authority into enduring typographic & visual systems.",
    description:
      "We build brands that whisper with confidence rather than shouting for attention. From proprietary typographic hierarchies and tactile packaging to comprehensive design systems, we define how modern enterprises are remembered.",
    isElevated: false,
    deliverables: [
      "Brand Narrative & Positioning Playbook",
      "Custom Typography & Font Pairing Systems",
      "Comprehensive Digital & Physical Guidelines",
      "Packaging, Editorial & Collateral Design",
      "Motion Identity & Sonic Signatures",
    ],
    metrics: [
      { label: "Client Equity Increase", value: "+180%" },
      { label: "Consistency Score", value: "99.4%" },
    ],
    process: [
      {
        step: "01",
        title: "Dissection & Cultural Audit",
        description: "Uncovering your category's blind spots and extracting your authentic differentiation point.",
      },
      {
        step: "02",
        title: "Typographic & Aesthetic Synthesis",
        description: "Formulating strict color harmonies, mathematical grids, and timeless editorial character.",
      },
      {
        step: "03",
        title: "Ecosystem Codification",
        description: "Exporting exhaustive Figma tokens, component guidelines, and multi-channel asset suites.",
      },
    ],
    techStack: ["Figma Enterprise", "Glyphs 3", "Adobe Creative Suite", "Design Tokens Spec"],
  },
  {
    id: "web-development",
    tag: "PILLAR 02 // ARCHITECTURE",
    title: "High-Performance Web Engineering",
    subtitle: "Fluid digital experiences built on Next.js, sub-second latency, and bespoke motion.",
    description:
      "A website is your primary digital headquarters. We engineer blazingly fast, accessible web platforms utilizing modern edge rendering, tailored micro-animations, and bulletproof responsive foundations that elevate conversion rates.",
    isElevated: true, // The Monad elevated periwinkle card!
    deliverables: [
      "Next.js App Router & Server Components",
      "Sub-400ms First Contentful Paint (FCP)",
      "Bespoke Framer Motion Micro-Interactions",
      "Headless CMS (Sanity / Strapi / Payload)",
      "Conversion Rate Optimization (CRO)",
      "Comprehensive Mobile-First PWA Support",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Conversion Lift", value: "+310%" },
    ],
    process: [
      {
        step: "01",
        title: "Information Architecture",
        description: "Mapping seamless user journeys, interaction nodes, and mobile viewport hierarchies.",
      },
      {
        step: "02",
        title: "Component Engineering",
        description: "Developing atomic Tailwind UI components, accessible ARIA patterns, and state machines.",
      },
      {
        step: "03",
        title: "Edge Optimization & Testing",
        description: "Benchmarking core web vitals, latency caching, responsive stresses, and automated QA.",
      },
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel Edge"],
  },
  {
    id: "social-media",
    tag: "PILLAR 03 // REACH",
    title: "Social Media & Algorithmic Communication",
    subtitle: "Data-orchestrated content narratives that turn passive viewers into active evangelists.",
    description:
      "True social reach is not noise—it is precision editorial cadence. We produce cinema-grade short-form video, thought-leadership text threads, and targeted community campaigns that outpace algorithm shifts across LinkedIn, X, Instagram, and YouTube.",
    isElevated: false,
    deliverables: [
      "Executive Narrative & Thought Leadership",
      "Cinema-Grade Reel & Short-Form Video Production",
      "Algorithmic Distribution & Velocity Testing",
      "Interactive Community Moderation & Outreach",
      "Quarterly Attribution & Pipeline Analytics",
    ],
    metrics: [
      { label: "Average Reach Multiplier", value: "4.8x" },
      { label: "Qualified Lead Volume", value: "+225%" },
    ],
    process: [
      {
        step: "01",
        title: "Audience Frequency Analysis",
        description: "Deciphering high-affinity search queries, cultural hooks, and peak engagement windows.",
      },
      {
        step: "02",
        title: "Studio Production & Storyboarding",
        description: "Filming, editorial sound design, motion typography, and thumbnail variant generation.",
      },
      {
        step: "03",
        title: "Live Tuning & Amplification",
        description: "Monitoring early traction signals and scaling viral velocity with targeted distribution.",
      },
    ],
    techStack: ["DaVinci Resolve Studio", "Metricool Enterprise", "Figma", "Custom Analytics Dashboard"],
  },
];
