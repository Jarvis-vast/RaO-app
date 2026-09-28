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
      <div className="relative z-10 w-full max-w-2xl px-6 pb-20 md:pb-0 md:mr-[8%] xl:mr-[12%] text-center md:text-left space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-[#FAF7F4] drop-shadow-md">
            Your trip doesn&apos;t have to start with a <span className="font-semibold text-[#C88D6A]">destination.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#F2EAE4] drop-shadow-sm max-w-xl mx-auto md:mx-0">
            Tell RaO how you want to feel, what you want to spend, and when you want to go. We&apos;ll plan the rest.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] transition-colors w-full sm:w-auto font-medium">
            <Link href="/plan">Plan My Trip</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-[#E8D5C8]/50 text-[#FAF7F4] hover:bg-[#E8D5C8]/10 bg-transparent backdrop-blur-sm transition-colors w-full sm:w-auto">
            <Link href="/experiences">Explore Experiences</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
