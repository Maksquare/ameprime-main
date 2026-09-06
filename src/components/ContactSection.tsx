"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Shield, Clock, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "Brand Identity",
    "Website Development"
  ]);

  const allDisciplines = [
    "Logo Designing",
    "Brand Identity",
    "Website Development",
    "Video Editing",
    "Social Media Marketing"
  ];

  const toggleDiscipline = (item: string) => {
    if (selectedDisciplines.includes(item)) {
      setSelectedDisciplines(selectedDisciplines.filter((d) => d !== item));
    } else {
      setSelectedDisciplines([...selectedDisciplines, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10451d", "#22c55e", "#4ade80", "#0f172a"]
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f9fb] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#10451d] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Direct Consultation
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Initiate Your Project Sprint.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Speak directly with our creative directors and lead digital architects. We respond within 24 business hours.
          </p>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-200 p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-2">
                Inquiry Received.
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Our creative strategy team is reviewing your project brief. We will reach out within 24 hours to schedule your executive consultation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Disciplines Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Disciplines Required (Select All That Apply):
                </label>
                <div className="flex flex-wrap gap-2">
                  {allDisciplines.map((d) => {
                    const isSelected = selectedDisciplines.includes(d);
                    return (
                      <button
                        type="button"
                        key={d}
                        onClick={() => toggleDiscipline(d)}
                        className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-[#10451d] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#10451d] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#10451d] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Company & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Global Ventures"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#10451d] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Target Budget Scope
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#10451d] focus:bg-white transition-all">
                    <option value="5k-10k">$5,000 – $10,000 USD</option>
                    <option value="10k-25k">$10,000 – $25,000 USD</option>
                    <option value="25k-50k">$25,000 – $50,000 USD</option>
                    <option value="50k+">$50,000+ USD (Institutional)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Project Vision & Scope Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your brand objectives, timeline, or key challenges..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#10451d] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Reassurances */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 gap-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Mutual NDA upon request</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Guaranteed response under 24 hours</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#10451d] hover:bg-[#165a26] text-white font-bold text-sm transition-all shadow-md hover:shadow-xl cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
