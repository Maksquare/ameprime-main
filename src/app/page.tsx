import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
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
    <main className="min-h-screen bg-[#f6f3f1] text-[#242424]">
      {/* 1. Monad Top Announcement Strip */}
      <AnnouncementBar />

      {/* 2. Primary Navigation Bar with Mobile Drawer */}
      <Navbar />

      {/* 3. Pure Typographic Hero Section with Gradient Wash */}
      <HeroSection />

      {/* 4. Interactive Synergy Pipeline (Curved flow lines, glowing hub, telemetry) */}
      <SynergyPipeline />

      {/* 5. The Three Disciplines (Including the signature elevated Periwinkle Mist Card) */}
      <ServicesSection />

      {/* 6. Selected Works & Verified Outcomes */}
      <CaseStudiesSection />

      {/* 7. Interactive Real-Time Scope & Price Estimator */}
      <ProjectCalculator />

      {/* 8. Executive Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Editorial FAQ Accordion Rows */}
      <FaqSection />

      {/* 10. Consultation & Commission Inquiry Form */}
      <ContactSection />

      {/* 11. Monad Editorial Footer */}
      <Footer />
    </main>
  );
}
