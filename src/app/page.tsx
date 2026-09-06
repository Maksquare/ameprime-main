import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoShowcase } from "@/components/LogoShowcase";
import { SynergyPipeline } from "@/components/SynergyPipeline";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ProjectCalculator } from "@/components/ProjectCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08120a] text-[#f3e8d2]">
      {/* 1. Top Announcement Strip in Imperial Emerald #10451d */}
      <AnnouncementBar />

      {/* 2. Primary Navigation Bar with Dark Glassmorphic Styling & Mobile Drawer */}
      <Navbar />

      {/* 3. Pure Typographic Hero Section with Deep Imperial Emerald Wash */}
      <HeroSection />

      {/* 4. Interactive Logo & Mark Architecture Showcase with Geometric Construction Toggle */}
      <LogoShowcase />

      {/* 5. Interactive Quad-Pillar Synergy Pipeline */}
      <SynergyPipeline />

      {/* 6. The Four Disciplines (Including Elevated Next.js Card with #10451d Emerald Satin) */}
      <ServicesSection />

      {/* 7. Selected Works & Case Studies with Logo & Platform Filters */}
      <CaseStudiesSection />

      {/* 8. Interactive Real-Time Scope & Price Estimator with Logo Design Tiers */}
      <ProjectCalculator />

      {/* 9. Executive Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Editorial FAQ Accordion Rows */}
      <FaqSection />

      {/* 11. Consultation & Commission Inquiry Form */}
      <ContactSection />

      {/* 12. Monad Editorial Footer */}
      <Footer />
    </main>
  );
}
