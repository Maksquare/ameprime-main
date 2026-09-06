export interface Project {
  id: string;
  title: string;
  client: string;
  category: "all" | "logos" | "branding" | "web-development" | "social-media";
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
    id: "aethel-botanicals",
    title: "Aethel Atelier & Maison",
    client: "Aethel Natural Sciences",
    category: "logos",
    categoryLabel: "Logo Architecture & Packaging",
    year: "2024",
    tagline: "Engineering a bespoke G2-continuous botanical mark for gold-foil debossing and luxury e-commerce.",
    summary:
      "Engineered an iconic emblem constructed on root-2 proportion grids, paired with custom typographic kerning and tactile luxury packaging architecture.",
    impactMetrics: [
      { label: "Direct-to-Consumer GMV", value: "+280%" },
      { label: "Packaging Design Accolades", value: "3 Global" },
      { label: "Average Order Value", value: "+$64" },
    ],
    tags: ["Logo Mark", "Vector Math", "Packaging Architecture", "Art Direction"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    gradientWash: "from-[#10451d]/70 via-[#184e27]/40 to-transparent",
    testimonial: {
      quote:
        "AME Prime crafted a mark that feels like it has existed for a century. The vector balance and debossing detail on our packaging have become our signature competitive moat.",
      author: "Freja Lindqvist",
      role: "Founder & Creative Director",
    },
  },
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
    gradientWash: "from-[#10451d]/80 via-[#08120a]/60 to-transparent",
    testimonial: {
      quote:
        "AME Prime delivered an interface that feels like an editorial Swiss timepiece. Our institutional clients immediately noted the unprecedented velocity and clarity.",
      author: "Julian Vance",
      role: "Managing Director, Elysian",
    },
  },
  {
    id: "kinetix-ai",
    title: "Kinetix Neural Systems",
    client: "Kinetix AI Corp",
    category: "social-media",
    categoryLabel: "Social Narrative & Kinetic Glyph",
    year: "2024",
    tagline: "Synthesizing complex autonomous agent research into explosive organic virality.",
    summary:
      "Constructed a dynamic 3D kinetic logomark and orchestrated a 360-degree editorial content pipeline on X and LinkedIn with technical white-paper breakdowns.",
    impactMetrics: [
      { label: "Organic Impressions (Q3)", value: "14.2M" },
      { label: "Developer Signups", value: "+18,400" },
      { label: "Series A Inbounds", value: "32 Funds" },
    ],
    tags: ["Dynamic Logomark", "Short-Form Video", "X / LinkedIn Strategy", "Community Growth"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    gradientWash: "from-[#184e27]/80 via-[#10451d]/50 to-transparent",
    testimonial: {
      quote:
        "In six months, AME Prime made Kinetix the most cited autonomous systems startup on executive feeds. Their editorial precision is unmatched.",
      author: "Dr. Marcus Chen",
      role: "Chief Technology Officer",
    },
  },
  {
    id: "valkyrie-sound",
    title: "Valkyrie Acoustic Showroom",
    client: "Valkyrie Audio Labs",
    category: "branding",
    categoryLabel: "Brand Strategy & Monogram",
    year: "2024",
    tagline: "Spatial audio showroom with real-time browser frequency visualization.",
    summary:
      "Architected a bespoke digital commerce engine with zero layout shift, Web Audio API sound previews, and custom brass-debossed monogram emblems.",
    impactMetrics: [
      { label: "Conversion Rate", value: "4.85%" },
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Return Customer Rate", value: "+54%" },
    ],
    tags: ["Custom Monogram", "Next.js 15", "Web Audio API", "Shopify Headless"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    gradientWash: "from-[#10451d]/70 via-[#0c1e13]/80 to-transparent",
  },
];
