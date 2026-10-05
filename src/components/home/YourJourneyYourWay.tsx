"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function YourJourneyYourWay() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1C0A0B] via-[#2A1013]/90 to-[#1C0A0B] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C88D6A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" /> BRAND MANIFESTO
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          YOUR JOURNEY. <span className="text-[#C88D6A] font-serif italic font-normal">YOUR WAY.</span>
        </h2>

        {/* Manifesto Content Box */}
        <div className="bg-[#180809]/90 backdrop-blur-2xl border border-[#C88D6A]/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl text-left md:text-center max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl font-light text-foreground/90 leading-relaxed italic">
            &ldquo;Not every beautiful journey needs a big group, a long itinerary or a fixed package.&rdquo;
          </p>

          {/* 3 Scenario Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-2 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C88D6A]">1-Day Return</span>
              <p className="text-sm font-medium text-foreground">
                Sometimes it’s a spontaneous day out with the people you love.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-2 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C88D6A]">Weekend Escapes</span>
              <p className="text-sm font-medium text-foreground">
                Sometimes it’s a weekend away to refresh and reconnect.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-2 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C88D6A]">Group Odysseys</span>
              <p className="text-sm font-medium text-foreground">
                Sometimes it’s a journey for an entire group or celebration.
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed pt-2">
            Whatever the size, duration or destination, RaO plans the journey around you — with the privacy, pace and experience you actually want.
          </p>

          {/* Highlights & Core Promise */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-[#E2B28B] text-base md:text-lg font-semibold tracking-wide">
              Curated or customized. Road, rail or air.
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Tell us your dates and budget. We’ll do the rest.
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 flex justify-center">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] font-semibold transition-all shadow-xl shadow-[#C88D6A]/20">
              <Link href="/plan" className="flex items-center justify-center gap-2">
                <span>Plan Your Journey With RaO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
