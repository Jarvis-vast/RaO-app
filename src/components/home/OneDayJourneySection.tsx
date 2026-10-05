"use client";

import { Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function OneDayJourneySection() {
  return (
    <section className="py-24 px-6 bg-black/40 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
            <Clock className="w-3.5 h-3.5" /> ONE-DAY RETURN JOURNEYS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            EVEN ONE DAY <span className="text-primary font-serif italic">CAN BECOME A MEMORY.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            &ldquo;A beautiful journey does not need a week. It can be six people, one destination, one day — thoughtfully planned by RaO.&rdquo;
          </p>
        </div>

        {/* Inspirational One-Day Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Kolhapur Mahalakshmi */}
          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 hover:border-primary/40 transition-all duration-300 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between text-xs text-primary font-mono font-semibold uppercase tracking-wider">
              <span>Pilgrimage & Sacred Return</span>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">Sample Journey</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Mumbai → Kolhapur → Mumbai</h3>
              <p className="text-[#E2B28B] text-sm font-medium">Mahalakshmi Darshan • One-Day Private Return</p>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              6 family members leave Mumbai early morning in a private AC vehicle, complete comfortable temple darshan at Kolhapur, enjoy an authentic local lunch, and return home by nightfall. No crowded tour buses. No rigid schedules.
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
              <span>Private Transport + Darshan Assistance</span>
              <span className="text-foreground font-medium">100% Customized</span>
            </div>
          </div>

          {/* Example 2: Coastal / Nature Reset */}
          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 hover:border-primary/40 transition-all duration-300 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between text-xs text-primary font-mono font-semibold uppercase tracking-wider">
              <span>Weekend & Leisure Reset</span>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">Sample Journey</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Mumbai → Alibaug / Lonavala → Mumbai</h3>
              <p className="text-[#E2B28B] text-sm font-medium">One-Day Group Escape • Friends & Corporate</p>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Whether it is a fast speedboat ride to Alibaug for a beachside lunch or a hilltop valley drive for tea and waterfalls, RaO coordinates your transport, meals, and activities seamlessly in a single day.
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
              <span>Speedboat / Car + Meal Planning</span>
              <span className="text-foreground font-medium">100% Customized</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-black/30 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto space-y-4">
          <p className="text-lg text-foreground font-medium">
            &ldquo;Tell us what you have in mind. We’ll build the journey around it.&rdquo;
          </p>
          <div>
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-accent px-8 py-5 text-sm font-semibold transition-colors">
              <Link href="/plan" className="inline-flex items-center gap-2">
                <span>Plan Your One-Day Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
