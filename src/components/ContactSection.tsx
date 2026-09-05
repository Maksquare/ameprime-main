"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Check, Mail, MapPin, Send, Sparkles, ShieldCheck } from "lucide-react";

export function ContactSection() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "Brand Identity",
    "Web Engineering",
  ]);
  const [selectedBudget, setSelectedBudget] = useState("$25k – $50k");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleDiscipline = (disc: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc) ? prev.filter((d) => d !== disc) : [...prev, disc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API submission & trigger confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2b59d1", "#cfdaf5", "#a7fccd", "#ff9473"],
      });
    }, 900);
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 border-t border-[#cecac8]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-[12px] uppercase text-[#797776] tracking-widest block mb-3">
                COMMISSION STUDIO // DIRECT CONTACT
              </span>
              <h2 className="font-serif text-[40px] sm:text-[52px] text-[#242424] leading-[1.1] font-normal">
                Initiate your flagship transformation.
              </h2>
              <p className="mt-4 font-mono text-[16px] text-[#4e4d4d] leading-relaxed">
                We accept a strictly capped number of concurrent commissions each quarter to preserve
                uncompromising craft. Tell us about your vision, and our partners will reply within 24
                hours with an initial strategy brief.
              </p>
            </div>

            {/* Direct Studio Coordinates */}
            <div className="rounded-[32px] border border-[#cecac8] bg-[#f6f3f1] p-6 space-y-4">
              <div className="flex items-start gap-3 text-[#242424]">
                <Mail className="h-5 w-5 text-[#2b59d1] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#797776]">
                    Direct Inquiries &amp; RFPs
                  </div>
                  <a
                    href="mailto:contact@ameprimemedia.com"
                    className="font-mono text-[15px] font-medium text-[#242424] hover:text-[#2b59d1]"
                  >
                    contact@ameprimemedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-[#242424] border-t border-[#cecac8]/60 pt-4">
                <MapPin className="h-5 w-5 text-[#2b59d1] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#797776]">
                    Global Studio Presence
                  </div>
                  <div className="font-mono text-[14px] text-[#4e4d4d]">
                    London / New York / Remote Hubs
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-[#cecac8]/60 pt-4 font-mono text-[12px] text-[#797776]">
                <ShieldCheck className="h-4 w-4 text-[#2b59d1]" />
                <span>Mutual NDA executed prior to discovery sessions.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[40px] border border-[#cecac8] bg-white p-8 sm:p-12 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#a7fccd]/40 text-[#2b59d1]">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-[32px] text-[#242424] font-normal">
                    Inquiry Transmitted Successfully.
                  </h3>
                  <p className="font-mono text-[15px] text-[#4e4d4d] max-w-[480px] mx-auto leading-relaxed">
                    Thank you, {formData.name || "partner"}. A partner lead from AME Prime has received
                    your project requirements and will respond within 24 hours with an initial dossier.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", company: "", email: "", message: "" });
                    }}
                    className="mt-6 rounded-[100px] border border-[#242424] px-6 py-2.5 font-mono text-[13px] uppercase tracking-tight text-[#242424] hover:bg-[#242424] hover:text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Discipline Multi-select pills */}
                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#797776] block mb-3">
                      Required Practice Areas
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "Brand Identity",
                        "Web Engineering",
                        "Social Media Retainer",
                        "Turnkey Growth Suite",
                      ].map((disc) => {
                        const active = selectedDisciplines.includes(disc);
                        return (
                          <button
                            type="button"
                            key={disc}
                            onClick={() => toggleDiscipline(disc)}
                            className={`rounded-[9999px] px-4 py-2 font-mono text-[12px] uppercase tracking-tight transition-all ${
                              active
                                ? "border border-[#2b59d1] bg-[#2b59d1] text-white shadow-sm"
                                : "border border-[#cecac8] bg-[#f6f3f1] text-[#4e4d4d] hover:border-[#242424]"
                            }`}
                          >
                            {disc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#797776] block mb-3">
                      Target Budget Allocation
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {["$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`rounded-[100px] py-2 text-center font-mono text-[12px] uppercase transition-all ${
                            selectedBudget === b
                              ? "bg-[#242424] text-white"
                              : "border border-[#cecac8] bg-[#f6f3f1] text-[#4e4d4d] hover:border-[#242424]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-[12px] uppercase tracking-widest text-[#797776] block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Freja Vance"
                        className="w-full rounded-[16px] border border-[#cecac8] bg-[#f6f3f1] px-4 py-3 font-mono text-[14px] text-[#242424] placeholder:text-[#cecac8] focus:border-[#2b59d1] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[12px] uppercase tracking-widest text-[#797776] block mb-1.5">
                        Organization / Venture *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full rounded-[16px] border border-[#cecac8] bg-[#f6f3f1] px-4 py-3 font-mono text-[14px] text-[#242424] placeholder:text-[#cecac8] focus:border-[#2b59d1] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#797776] block mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="fvance@apextech.com"
                      className="w-full rounded-[16px] border border-[#cecac8] bg-[#f6f3f1] px-4 py-3 font-mono text-[14px] text-[#242424] placeholder:text-[#cecac8] focus:border-[#2b59d1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#797776] block mb-1.5">
                      Strategic Objectives &amp; Timeline
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe current pain points, existing tech stack or brand assets, and target go-live date..."
                      className="w-full rounded-[16px] border border-[#cecac8] bg-[#f6f3f1] px-4 py-3 font-mono text-[14px] text-[#242424] placeholder:text-[#cecac8] focus:border-[#2b59d1] focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button (Lake Blue Pill with arrow ▸) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[100px] bg-[#2b59d1] font-mono text-[14px] uppercase tracking-tight text-white transition-all hover:bg-[#2045ab] disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Dossier...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <span>▸</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
