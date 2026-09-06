import React from "react";
import Navbar from "@/components/Navbar";
import HeroInspoSection from "@/components/HeroInspoSection";
import DisciplinesSection from "@/components/DisciplinesSection";
import SelectedWorksSection from "@/components/SelectedWorksSection";
import ProjectEstimatorSection from "@/components/ProjectEstimatorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fb] text-slate-900 selection:bg-[#10451d] selection:text-emerald-200">
      {/* Floating Modern Pill Navbar */}
      <Navbar />

      {/* Hero Section Recreated Directly From landing page inspo.jpg */}
      <HeroInspoSection />

      {/* 5 Core Disciplines (Brand Identity, Social Media Marketing, Web Development, Video Editing, Logo Designing) */}
      <DisciplinesSection />

      {/* Selected Case Studies & Portfolio */}
      <SelectedWorksSection />

      {/* Interactive Project Estimator & Scope Calculator */}
      <ProjectEstimatorSection />

      {/* Executive Contact & Brief Submission */}
      <ContactSection />

      {/* Studio Footer */}
      <Footer />
    </main>
  );
}
