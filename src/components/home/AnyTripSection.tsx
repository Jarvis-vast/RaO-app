"use client";

import { Users, Shield, Heart, Building2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GROUP_SCALES = [
  {
    scale: "2 – 4 People",
    title: "Couples & Small Families",
    desc: "Intimate, quiet getaways built entirely around your own schedule.",
  },
  {
    scale: "6 – 10 People",
    title: "Two Families or Friends Circle",
    desc: "Private joint journeys without adjusting to strangers or rigid tour buses.",
  },
  {
    scale: "15 – 30 People",
    title: "Extended Families & Celebrations",
    desc: "Dedicated transport, coordinated stays, and custom milestone itineraries.",
  },
  {
    scale: "45 – 50+ People",
    title: "Corporate & Large Outings",
    desc: "End-to-end logistics, offsite planning, dealer meets, and group coordination.",
  },
];

export function AnyTripSection() {
  return (
    <section id="any-trip" className="py-24 px-6 bg-black/40 backdrop-blur-md border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
            ANY TRIP • ANY SIZE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            ANY TRIP. <span className="text-[#C88D6A] font-serif italic">ANY SIZE.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            &ldquo;Not every journey needs a package. Sometimes it is six people, one day and one beautiful reason to go.&rdquo;
          </p>
        </div>

        {/* Group Scales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROUP_SCALES.map((item) => (
            <div
              key={item.scale}
              className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#C88D6A]/40 transition-all duration-300 group"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-[#C88D6A]/20 text-[#E2B28B] text-xs font-mono font-semibold">
                {item.scale}
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-[#C88D6A] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Philosophy Card */}
        <div className="bg-black/60 backdrop-blur-2xl border border-[#C88D6A]/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 text-[#C88D6A] text-xs uppercase tracking-widest font-semibold">
              <Shield className="w-4 h-4" /> Privacy & Personal Space
            </div>
            <h3 className="text-2xl md:text-4xl font-light text-foreground leading-tight">
              Your group size should never decide whether your trip gets personal.
            </h3>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Two families can travel together without having to adjust to each other. Keep your privacy. Keep your pace. Keep your quality time. <span className="text-[#C88D6A] font-medium">Remember RaO.</span>
            </p>
            <div className="pt-2">
              <Button asChild className="rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] px-8 py-6 text-sm font-semibold transition-colors">
                <Link href="/plan">Plan Your Group Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
