export interface Project {
  id: string;
  title: string;
  client: string;
  category: "all" | "branding" | "web-development" | "social-media";
  categoryLabel: string;
  year: string;
  tagline: string;
  summary: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
  gradientWash: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "elysian-fintech",
    title: "Elysian Sovereign Capital",
    client: "Elysian Global Partners",
    category: "web-development",
    categoryLabel: "Web Engineering & Identity",
    year: "2024",
    tagline: "Ultra-low latency institutional investor portal on Next.js edge infrastructure.",
    summary:
      "Engineered an institutional dashboard and marketing portal handling multi-asset data feeds with sub-300ms interaction latency and strict editorial typography.",
    impactMetrics: [
      { label: "Global TTFB", value: "85ms" },
      { label: "LP Capital Commitment", value: "+$48M" },
      { label: "Mobile Bounce Rate", value: "-42%" },
    ],
    tags: ["Next.js 15", "Edge Caching", "Design System", "Financial Data API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    gradientWash: "from-[#cfdaf5]/40 via-[#a0b5eb]/20 to-transparent",
    testimonial: {
      quote:
        "AME Prime delivered an interface that feels like an editorial Swiss timepiece. Our institutional clients immediately noted the unprecedented velocity and clarity.",
      author: "Julian Vance",
      role: "Managing Director, Elysian",
    },
  },
  {
    id: "aethel-botanicals",
    title: "Aethel Atelier & Laboratory",
    client: "Aethel Natural Sciences",
    category: "branding",
    categoryLabel: "Brand Strategy & Packaging",
    year: "2024",
    tagline: "Rebranding a heritage Nordic botanical maison for global luxury e-commerce expansion.",
    summary:
      "Created a unified identity system spanning custom typography, tactile embossed glass packaging, and a responsive digital editorial catalog.",
    impactMetrics: [
      { label: "Direct-to-Consumer GMV", value: "+280%" },
      { label: "Packaging Design Accolades", value: "3 Global" },
      { label: "Average Order Value", value: "+$64" },
    ],
    tags: ["Typography Design", "Packaging Architecture", "E-Commerce", "Art Direction"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    gradientWash: "from-[#a7fccd]/30 via-[#cfdaf5]/20 to-transparent",
    testimonial: {
      quote:
        "They transformed our heritage narrative into an obsession-worthy aesthetic. The typography and packaging have become our signature moat.",
      author: "Freja Lindqvist",
      role: "Founder & Creative Director",
    },
  },
  {
    id: "kinetix-ai",
    title: "Kinetix Neural Systems",
    client: "Kinetix AI Corp",
    category: "social-media",
    categoryLabel: "Social Narrative & Content Engine",
    year: "2024",
    tagline: "Synthesizing complex autonomous agent research into explosive organic virality.",
    summary:
      "Orchestrated a 360-degree editorial content pipeline on X and LinkedIn featuring cinematic 3D product renders, technical white-paper breakdowns, and founder interviews.",
    impactMetrics: [
      { label: "Organic Impressions (Q3)", value: "14.2M" },
      { label: "Developer Signups", value: "+18,400" },
      { label: "Series A Inbound Inquiries", value: "32 Funds" },
    ],
    tags: ["Technical Narrative", "Short-Form Video", "X / LinkedIn Strategy", "Community Growth"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    gradientWash: "from-[#ff9473]/30 via-[#ecda98]/20 to-transparent",
    testimonial: {
      quote:
        "In six months, AME Prime made Kinetix the most cited autonomous systems startup on executive feeds. Their editorial precision is unmatched.",
      author: "Dr. Marcus Chen",
      role: "Chief Technology Officer",
    },
  },
  {
    id: "valkyrie-sound",
    title: "Valkyrie Acoustic Instruments",
    client: "Valkyrie Audio Labs",
    category: "web-development",
    categoryLabel: "E-Commerce & Digital Experience",
    year: "2024",
    tagline: "Spatial audio showroom with real-time browser frequency visualization.",
    summary:
      "Architected a bespoke digital commerce engine with zero layout shift, Web Audio API sound previews, and seamless mobile checkout integration.",
    impactMetrics: [
      { label: "Conversion Rate", value: "4.85%" },
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Return Customer Rate", value: "+54%" },
    ],
    tags: ["Next.js 15", "Web Audio API", "Shopify Storefront", "Micro-Interactions"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    gradientWash: "from-[#cfdaf5]/40 via-[#a7fccd]/25 to-transparent",
  },
];
