"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Check, Mail, MapPin, Send, Sparkles, ShieldCheck, Compass } from "lucide-react";

export function ContactSection() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "Logo Architecture",
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#10451d", "#22c55e", "#f3e8d2", "#a7fccd"],
      });
    }, 900);
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 border-t border-[#184e27]">
      <div className="mx-auto max-w-[1432px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-[12px] uppercase text-[#22c55e] tracking-widest block mb-3">
                COMMISSION ATELIER // DIRECT CONTACT
              </span>
              <h2 className="font-serif text-[40px] sm:text-[52px] text-[#f3e8d2] leading-[1.1] font-normal">
                Initiate your flagship transformation.
              </h2>
              <p className="mt-4 font-mono text-[16px] text-[#c5b89f] leading-relaxed">
                We accept a strictly capped number of concurrent commissions each quarter. Whether you
                need a bespoke geometric logo mark or an entire Next.js 15 enterprise web overhaul, our
                partners will reply within 24 hours with an initial strategy brief.
              </p>
            </div>

            {/* Direct Studio Coordinates */}
            <div className="rounded-[32px] border border-[#184e27] bg-[#0c1e13] p-6 space-y-4 shadow-xl">
              <div className="flex items-start gap-3 text-[#f3e8d2]">
                <Mail className="h-5 w-5 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#c5b89f]/70">
                    Direct Inquiries &amp; RFPs
                  </div>
                  <a
                    href="mailto:contact@ameprimemedia.com"
                    className="font-mono text-[15px] font-medium text-[#f3e8d2] hover:text-[#22c55e] transition-colors"
                  >
                    contact@ameprimemedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-[#f3e8d2] border-t border-[#184e27] pt-4">
                <MapPin className="h-5 w-5 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#c5b89f]/70">
                    Global Studio Presence
                  </div>
                  <div className="font-mono text-[14px] text-[#c5b89f]">
                    London / New York / Remote Hubs
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-[#184e27] pt-4 font-mono text-[12px] text-[#a7fccd]">
                <ShieldCheck className="h-4 w-4 text-[#22c55e]" />
                <span>Mutual NDA executed prior to discovery sessions.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[40px] border border-[#184e27] bg-[#0c1e13] p-8 sm:p-12 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#10451d] text-[#22c55e] border border-[#22c55e]/40">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-[32px] text-[#f3e8d2] font-normal">
                    Inquiry Transmitted Successfully.
                  </h3>
                  <p className="font-mono text-[15px] text-[#c5b89f] max-w-[480px] mx-auto leading-relaxed">
                    Thank you, {formData.name || "partner"}. A partner lead from AME Prime has received
                    your requirements and will respond within 24 hours with an initial dossier.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", company: "", email: "", message: "" });
                    }}
                    className="mt-6 rounded-[100px] border border-[#184e27] bg-[#08120a] px-6 py-2.5 font-mono text-[13px] uppercase tracking-tight text-[#f3e8d2] hover:border-[#22c55e] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Discipline Multi-select pills */}
                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#22c55e] block mb-3">
                      Required Practice Areas
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "Logo Architecture",
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
                                ? "border border-[#22c55e] bg-[#10451d] text-[#f3e8d2] shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                                : "border border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60"
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
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#22c55e] block mb-3">
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
                              ? "bg-[#10451d] border border-[#22c55e] text-[#f3e8d2]"
                              : "border border-[#184e27] bg-[#08120a] text-[#c5b89f] hover:border-[#22c55e]/60"
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
                      <label className="font-mono text-[12px] uppercase tracking-widest text-[#c5b89f]/70 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Freja Vance"
                        className="w-full rounded-[16px] border border-[#184e27] bg-[#08120a] px-4 py-3 font-mono text-[14px] text-[#f3e8d2] placeholder:text-[#184e27] focus:border-[#22c55e] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[12px] uppercase tracking-widest text-[#c5b89f]/70 block mb-1.5">
                        Organization / Venture *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full rounded-[16px] border border-[#184e27] bg-[#08120a] px-4 py-3 font-mono text-[14px] text-[#f3e8d2] placeholder:text-[#184e27] focus:border-[#22c55e] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#c5b89f]/70 block mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="fvance@apextech.com"
                      className="w-full rounded-[16px] border border-[#184e27] bg-[#08120a] px-4 py-3 font-mono text-[14px] text-[#f3e8d2] placeholder:text-[#184e27] focus:border-[#22c55e] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-widest text-[#c5b89f]/70 block mb-1.5">
                      Strategic Objectives &amp; Logo Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe target aesthetic, logo ideas (e.g. geometric monogram, emblem), tech stack needs, and expected launch date..."
                      className="w-full rounded-[16px] border border-[#184e27] bg-[#08120a] px-4 py-3 font-mono text-[14px] text-[#f3e8d2] placeholder:text-[#184e27] focus:border-[#22c55e] focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button (Imperial Forest #10451d with arrow ▸) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[100px] bg-[#10451d] border border-[#22c55e]/50 font-mono text-[14px] uppercase tracking-tight text-[#f3e8d2] transition-all hover:bg-[#185e2a] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Dossier...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <span className="text-[#22c55e]">▸</span>
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
