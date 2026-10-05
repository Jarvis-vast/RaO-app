"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MapPin, Clock, ShieldCheck, Car } from "lucide-react";

const SUGGESTION_CHIPS = [
  "Sunday in Kolhapur",
  "Weekend with family",
  "Private trip for two families",
  "Temple journey",
  "Beach escape",
  "Corporate offsite",
  "We have a fixed budget",
  "Surprise us",
];

export function WhatInMindSection() {
  const [selectedChip, setSelectedChip] = useState("Sunday in Kolhapur");

  return (
    <section id="mind" className="py-24 px-6 bg-gradient-to-b from-[#1C0A0B] via-[#2A1013]/90 to-[#1C0A0B] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C88D6A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> CONVERSATIONAL PLANNING
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            WHAT DO YOU HAVE <span className="text-[#C88D6A] font-serif italic">IN MIND?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            &ldquo;A destination. A date. A budget. A group. A feeling. Or just an idea.&rdquo;
          </p>
        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {SUGGESTION_CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => setSelectedChip(chip)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                selectedChip === chip
                  ? "bg-[#C88D6A] text-[#1C0A0B] font-semibold shadow-md shadow-[#C88D6A]/20"
                  : "bg-black/30 border border-white/10 text-muted-foreground hover:text-foreground hover:border-[#C88D6A]/40"
              }`}
            >
              &ldquo;{chip}&rdquo;
            </button>
          ))}
        </div>

        {/* Desktop Visual Transformation Grid (YOU SAY -> RAO CREATES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* LEFT SIDE: YOU SAY */}
          <div className="lg:col-span-5 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C88D6A]">
                You Say
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C88D6A] animate-pulse" />
            </div>

            <div className="space-y-4">
              <p className="text-[#F2EAE4] text-lg font-light leading-relaxed italic">
                &ldquo;Sunday. A few people. We want to visit Kolhapur for Mahalakshmi Darshan. Back home by night. We want our own private space and pace.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-muted-foreground font-light">
              You don&apos;t need to solve the transport or itinerary puzzle. Simply tell RaO your idea.
            </div>
          </div>

          {/* ARROW INDICATOR */}
          <div className="lg:col-span-2 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] mx-auto my-2">
              <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2B28B]">
              RaO Plans
            </span>
          </div>

          {/* RIGHT SIDE: RAO CREATES */}
          <div className="lg:col-span-5 bg-[#180809] border border-[#C88D6A]/30 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E2B28B]">
                RaO Creates
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#C88D6A]/10 text-[#C88D6A] border border-[#C88D6A]/20">
                Illustrative Plan
              </span>
            </div>

            <div className="space-y-4">
              <div className="text-xs text-[#E2B28B] font-mono uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C88D6A]" /> MUMBAI → KOLHAPUR → MUMBAI
              </div>

              <h3 className="text-xl font-bold text-foreground">
                One-Day Private Sacred Journey
              </h3>

              <ul className="space-y-2.5 text-xs text-muted-foreground font-light">
                <li className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#C88D6A]" />
                  <span>Door-to-door private AC vehicle for your group</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C88D6A]" />
                  <span>Mahalakshmi Darshan timing & hassle-free parking</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C88D6A]" />
                  <span>Authentic local lunch & return home by nightfall</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-muted-foreground/80 italic">
              *Sample journey concept. Your trip will be built around your specific dates & budget.
            </div>
          </div>
        </div>

        {/* Bottom Tagline & CTA */}
        <div className="text-center space-y-6 pt-4">
          <p className="text-lg md:text-xl font-medium tracking-wide text-[#E2B28B] uppercase">
            FROM A SIMPLE IDEA TO A JOURNEY WORTH REMEMBERING.
          </p>
          <div>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] font-semibold transition-all shadow-xl shadow-[#C88D6A]/20">
              <Link href="/plan" className="flex items-center gap-2">
                <span>START PLANNING</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
