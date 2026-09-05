export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "collaboration" | "engineering" | "branding" | "timeline";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does AME Prime integrate branding, web engineering, and social communication?",
    answer:
      "Most agencies silo design, code, and distribution into separate departments that pass files without cohesion. At AME Prime, our three pillars operate under a unified design system. The typography designed for your brand translates directly into CSS tokens for Next.js, which then dictates the visual cadence of your social media video production. This eliminates friction and produces unmatched consistency.",
    category: "collaboration",
  },
  {
    id: "faq-2",
    question: "Why do you use Next.js and sub-second architecture for web development?",
    answer:
      "Modern audiences abandon sites that take longer than 1.5 seconds to render. By leveraging Next.js App Router, edge server components, and streaming SSR, we guarantee sub-400ms First Contentful Paint and 99+ Lighthouse performance. Fast websites convert 3x higher, improve SEO rankings organically, and provide a tactile, instantaneous feel across all mobile devices.",
    category: "engineering",
  },
  {
    id: "faq-3",
    question: "What is the typical timeline for an end-to-end transformation project?",
    answer:
      "A complete flagship deployment typically spans 6 to 12 weeks depending on scope complexity. Week 1–3 focuses on foundational brand architecture and typographic systems; Week 4–8 covers interactive UI/UX design and Next.js engineering; Week 9–12 executes pre-launch social media buildup, testing, and public deployment.",
    category: "timeline",
  },
  {
    id: "faq-4",
    question: "How do you manage ongoing social media growth after website launch?",
    answer:
      "We operate as an embedded editorial newsroom for your brand. We schedule monthly filming and asset generation sprints, script cinema-grade short reels and technical whitepaper breakdowns, manage daily community interactions, and continuously analyze attribution analytics to turn attention into measurable inbound revenue.",
    category: "branding",
  },
  {
    id: "faq-5",
    question: "Can our existing internal engineering team maintain the codebase?",
    answer:
      "Absolutely. We write clean, strictly-typed TypeScript with atomic Tailwind styling, comprehensive README documentation, and modular component architecture. We also provide handover sessions, Storybook/Figma token syncs, and optional quarterly retainers for ongoing feature expansion.",
    category: "engineering",
  },
  {
    id: "faq-6",
    question: "What are your engagement models and fee structures?",
    answer:
      "We offer two primary collaboration models: Flagship Fixed-Scope Engagements (structured sprints with guaranteed milestone deliverables) and Monthly Strategic Retainers (dedicated multidisciplinary pods for continuous brand, engineering, and social growth). Use our interactive project calculator below to explore exact estimates.",
    category: "collaboration",
  },
];
