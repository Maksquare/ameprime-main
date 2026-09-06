import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PackagesDeck } from "@/components/PackagesDeck";
import { LogoShowcase } from "@/components/LogoShowcase";
import { ServicesSection } from "@/components/ServicesSection";
import { SynergyPipeline } from "@/components/SynergyPipeline";
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

      {/* 3. Hero Section (Directly reflecting landing page inspo.jpg) */}
      <HeroSection />

      {/* 4. 3D Fanned-Out Packages Deck (Directly reflecting packages page inspo.jpg) */}
      <PackagesDeck />

      {/* 5. Interactive Logo Architecture Atelier with Geometric Grid Overlays */}
      <LogoShowcase />

      {/* 6. Console-Style Services Showcase with Floor Reflections (Directly reflecting services page inspo.jpg) */}
      <ServicesSection />

      {/* 7. Interactive Process Synergy Pipeline */}
      <SynergyPipeline />

      {/* 8. Selected Works & Case Studies */}
      <CaseStudiesSection />

      {/* 9. Interactive Scope & Cost Calculator */}
      <ProjectCalculator />

      {/* 10. Executive Client Testimonials */}
      <TestimonialsSection />

      {/* 11. Editorial FAQ Accordion */}
      <FaqSection />

      {/* 12. Consultation & Commission Inquiry Form */}
      <ContactSection />

      {/* 13. Monad Editorial Footer */}
      <Footer />
    </main>
  );
}
