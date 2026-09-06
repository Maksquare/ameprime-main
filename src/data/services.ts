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
    id: "logo-design",
    tag: "PRACTICE 01 // LOGOMARK",
    title: "Bespoke Logo Design & Mark Architecture",
    subtitle: "Enduring emblems, geometric monograms, and custom typographic wordmarks.",
    description:
      "A logo is your enterprise's visual signature. We engineer timeless marks using golden-ratio geometric grids, optical counter-balancing, and bespoke letterforms designed to command prestige across high-resolution screens, debossed leather, and global trademarks.",
    isElevated: false,
    deliverables: [
      "Golden-Ratio Vector Masterfiles (.SVG, .EPS)",
      "Custom Monograms, Emblems & Wordmarks",
      "Responsive Multi-Scale Marks (16px to 100ft)",
      "Dark, Light, and Monochrome Colorway Inversions",
      "Negative Space & Co-Branding Clearance",
      "Complete Trademark Registration Asset Kit",
    ],
    metrics: [
      { label: "Vector Precision", value: "0.001mm" },
      { label: "Scalability Test", value: "16px to 8K" },
    ],
    process: [
      {
        step: "01",
        title: "Symbolic & Geometric Discovery",
        description: "Deconstructing category archetypes and discovering distinct geometric angles and silhouettes.",
      },
      {
        step: "02",
        title: "Optical Refinement & Vector Craft",
        description: "Handcrafting curves in Glyphs & Illustrator with mathematical grid constraints and optical balance.",
      },
      {
        step: "03",
        title: "Multi-Surface Stress Audits",
        description: "Testing legibility on micro mobile app icons, physical metal stamping, and giant architectural signage.",
      },
    ],
    techStack: ["Glyphs 3", "Adobe Illustrator", "Figma Enterprise", "Vector Geometry Engine"],
  },
  {
    id: "branding",
    tag: "PRACTICE 02 // IDENTITY",
    title: "Institutional Brand Strategy & Design Systems",
    subtitle: "Codifying your company's aesthetic moat into exhaustive guidelines and tokens.",
    description:
      "Beyond the logo, we formulate the entire visual universe: proprietary color harmonies anchored in our signature imperial forest green (#10451d), tactile packaging architecture, and editorial layout systems that exude quiet authority.",
    isElevated: false,
    deliverables: [
      "Comprehensive Brand Narrative & Voice Matrix",
      "Curated Typography & Editorial Pairings",
      "Tactile Packaging, Print & Foil Diellines",
      "Figma Tokens & Multi-Platform Component Guides",
      "Executive Stationery & Investor Deck Suites",
    ],
    metrics: [
      { label: "Brand Recall Lift", value: "+210%" },
      { label: "Design Consistency", value: "99.8%" },
    ],
    process: [
      {
        step: "01",
        title: "Competitive Landscape Dissection",
        description: "Uncovering your industry's aesthetic clichés and establishing a defensible visual moat.",
      },
      {
        step: "02",
        title: "Systemic Formulation",
        description: "Architecting color spectrums, type hierarchies, and physical texture guidelines.",
      },
      {
        step: "03",
        title: "Brand Governance Handoff",
        description: "Delivering living design books, cloud token repositories, and internal team enablement.",
      },
    ],
    techStack: ["Figma Design Tokens", "InDesign", "Adobe CC", "Pantone Formula Guides"],
  },
  {
    id: "web-development",
    tag: "PRACTICE 03 // ARCHITECTURE",
    title: "High-Performance Next.js Web Engineering",
    subtitle: "Ultra-low latency web applications engineered on edge infrastructure with bespoke motion.",
    description:
      "A flagship website is your primary digital headquarters. We engineer sub-300ms web platforms utilizing Next.js 15 App Router, edge server components, custom Framer Motion micro-interactions, and flawless mobile responsiveness.",
    isElevated: true, // Signature elevated card in dark imperial forest theme!
    deliverables: [
      "Next.js 15 Server Components & Streaming SSR",
      "Sub-300ms First Contentful Paint (FCP)",
      "Bespoke Framer Motion Micro-Interactions",
      "Headless CMS Integration (Sanity / Strapi / Payload)",
      "Mobile-First Touch Architecture & PWA",
      "Security Auditing & Global Edge Deployment",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "100/100" },
      { label: "Conversion Velocity", value: "+340%" },
    ],
    process: [
      {
        step: "01",
        title: "Digital Architecture Blueprint",
        description: "Mapping user decision funnels, interaction nodes, and edge caching strategies.",
      },
      {
        step: "02",
        title: "Pixel-Perfect Component Build",
        description: "Developing atomic Tailwind UI components with accessible ARIA standards.",
      },
      {
        step: "03",
        title: "Performance & Stress Benchmarking",
        description: "Auditing Core Web Vitals, device responsiveness, and edge cache hit ratios.",
      },
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel Edge"],
  },
  {
    id: "social-media",
    tag: "PRACTICE 04 // BROADCAST",
    title: "Social Media & Algorithmic Communication",
    subtitle: "Data-driven media narratives turning passive observers into loyal brand evangelists.",
    description:
      "Modern visibility requires algorithmic precision. We direct cinema-grade short-form video reels, executive ghostwriting for LinkedIn and X, and strategic content cadence that establishes your leadership without cheap tactics.",
    isElevated: false,
    deliverables: [
      "Cinema-Grade Short-Form Video & Motion Graphics",
      "Executive Narrative & Thought-Leadership Threads",
      "Targeted Distribution & Velocity Testing",
      "Daily Audience Moderation & Community Engagement",
      "Monthly Pipeline Attribution & Reach Dashboards",
    ],
    metrics: [
      { label: "Reach Multiplier", value: "5.2x" },
      { label: "Executive Inbounds", value: "+185%" },
    ],
    process: [
      {
        step: "01",
        title: "Cultural Relevance Mapping",
        description: "Identifying high-resonance industry talking points and algorithmic timing windows.",
      },
      {
        step: "02",
        title: "Studio Production Sprint",
        description: "Directing cinematic shoots, sound design, and variant motion hooks.",
      },
      {
        step: "03",
        title: "Omnichannel Deployment",
        description: "Broadcasting synchronized assets across X, LinkedIn, Instagram, and YouTube.",
      },
    ],
    techStack: ["DaVinci Resolve Studio", "Adobe After Effects", "Figma", "Sprout Social Enterprise"],
  },
];
