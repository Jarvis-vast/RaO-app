"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function YourJourneyYourWay() {
  return (
    <section className="py-24 px-6 bg-black/40 backdrop-blur-md border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
          BRAND MANIFESTO
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          YOUR JOURNEY. <span className="text-[#C88D6A] font-serif italic font-normal">YOUR WAY.</span>
        </h2>

        {/* Manifesto Content Box */}
        <div className="bg-black/60 backdrop-blur-2xl border border-[#C88D6A]/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl text-left md:text-center max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl font-light text-foreground/90 leading-relaxed italic">
            &ldquo;Not every beautiful journey needs a big group, a long itinerary or a fixed package.&rdquo;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 space-y-2 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C88D6A]">Day Out</span>
              <p className="text-sm font-medium text-foreground">
                Sometimes it is a simple day out with the people you care about.
              </p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 space-y-2 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C88D6A]">Weekend Away</span>
              <p className="text-sm font-medium text-foreground">
                Sometimes it is a weekend away to recharge and reconnect.
              </p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 space-y-2 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C88D6A]">Group Journey</span>
              <p className="text-sm font-medium text-foreground">
                Sometimes it is a journey shared by an entire group.
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed pt-2">
            Whatever the journey, RaO plans around the people taking it.
          </p>

          {/* Privacy Box */}
          <div className="bg-black/40 border border-[#C88D6A]/30 rounded-2xl p-6 space-y-3 text-left md:text-center">
            <p className="text-base sm:text-lg font-medium text-foreground">
              &ldquo;Travelling with your own people should still feel like your own journey.&rdquo;
            </p>
            <p className="text-sm text-[#E2B28B] font-medium tracking-wide">
              Keep your privacy. Keep your pace. Keep your quality time.
            </p>
          </div>

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
