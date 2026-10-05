"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, SlidersHorizontal } from "lucide-react";

export function CuratedCustomizedSection() {
  return (
    <section className="py-24 px-6 bg-black/40 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
            TWO WAYS TO TRAVEL WITH RAO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            CURATED <span className="text-[#C88D6A] font-serif italic">+</span> CUSTOMIZED
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Whether you want a pre-designed odyssey ready to go or a completely bespoke journey built from scratch, RaO delivers both with equal care.
          </p>
        </div>

        {/* Dual Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CURATED */}
          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 hover:border-[#C88D6A]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#C88D6A]/20 text-[#E2B28B] text-xs font-mono font-semibold">
                Option 01
              </div>
              <h3 className="text-3xl font-bold text-foreground group-hover:text-[#C88D6A] transition-colors">
                CURATED
              </h3>
              <p className="text-lg text-foreground/90 font-light leading-relaxed">
                &ldquo;Thoughtfully planned journeys, ready to discover.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Handcrafted itineraries designed by our travel experts with pre-arranged stays, experiences, and transport highlights ready for instant booking or group departure.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Button asChild variant="outline" className="w-full rounded-full border-[#C88D6A]/40 text-foreground hover:bg-[#C88D6A]/10 py-6 text-sm font-medium">
                <Link href="/experiences" className="flex items-center justify-center gap-2">
                  <span>Explore Curated Journeys</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* CUSTOMIZED */}
          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 hover:border-[#C88D6A]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] group-hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-7 h-7" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#C88D6A]/20 text-[#E2B28B] text-xs font-mono font-semibold">
                Option 02
              </div>
              <h3 className="text-3xl font-bold text-foreground group-hover:text-[#C88D6A] transition-colors">
                CUSTOMIZED
              </h3>
              <p className="text-lg text-foreground/90 font-light leading-relaxed">
                &ldquo;A journey built specifically around your people, dates, budget and preferences.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Start with a clean slate. Tell us your exact constraints, dates, vehicle choices, and accommodation preferences — RaO crafts every single detail around you.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Button asChild className="w-full rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] py-6 text-sm font-semibold shadow-lg">
                <Link href="/plan" className="flex items-center justify-center gap-2">
                  <span>Start Customized Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
