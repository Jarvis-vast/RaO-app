"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[600px] flex items-end md:items-center justify-center md:justify-end overflow-hidden"
    >
      {/* Cinematic Gradient Overlay for readability */}
      {/* Mobile: dark at bottom. Desktop: dark at right. The car/road is on the left. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1C0A0B] via-[#1C0A0B]/60 to-transparent md:bg-gradient-to-l md:from-[#1C0A0B] md:via-[#1C0A0B]/60 md:to-transparent pointer-events-none" />

      {/* Content Placed Over the Ocean (Center-Right Desktop, Bottom-Center Mobile) */}
      <div className="relative z-10 w-full max-w-2xl px-6 pb-20 md:pb-0 md:mr-[8%] xl:mr-[14%] 2xl:mr-[20%] text-center md:text-left space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D49A7A]/10 border border-[#D49A7A]/30 text-[#F5D6B8] text-xs font-semibold tracking-widest uppercase">
            EXPLORE • EXPERIENCE • DISCOVER
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
            YOUR MOOD. <br className="hidden sm:inline" />
            <span className="text-[#D49A7A] font-serif italic">YOUR TRIP.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#F5D6B8]/90 drop-shadow-sm max-w-xl mx-auto md:mx-0">
            Tell RaO how you want to feel, what you want to spend, and when you want to go. We&apos;ll plan the rest with bespoke precision.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg bg-[#D49A7A] text-[#1A0B0E] hover:bg-[#F5D6B8] transition-all font-semibold w-full sm:w-auto shadow-lg shadow-[#D49A7A]/20">
            <Link href="/plan">Plan My Trip</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-[#D49A7A]/40 text-white hover:bg-[#D49A7A]/10 bg-transparent backdrop-blur-sm transition-all w-full sm:w-auto font-medium">
            <Link href="/experiences">Explore Experiences</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
