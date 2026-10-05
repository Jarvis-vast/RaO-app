"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[660px] flex items-end md:items-center justify-center md:justify-end overflow-hidden"
    >
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1C0A0B] via-[#1C0A0B]/60 to-transparent md:bg-gradient-to-l md:from-[#1C0A0B] md:via-[#1C0A0B]/75 md:to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-3xl px-6 pb-16 md:pb-0 md:mr-[6%] xl:mr-[10%] 2xl:mr-[16%] text-center md:text-left space-y-8">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#F2EAE4] text-xs font-semibold tracking-widest uppercase">
            YOUR PERSONAL TRAVEL PLANNER
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-md">
            YOUR JOURNEY, <br />
            <span className="text-[#C88D6A] font-serif italic font-normal">PLANNED AROUND YOU.</span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#F2EAE4]/90 drop-shadow-sm max-w-2xl mx-auto md:mx-0">
            Tell us what you have in mind — your dates, budget, destination, group or simply an idea. RaO will plan the rest.
          </p>
          <p className="text-sm md:text-base font-medium text-[#E2B28B] tracking-wide">
            Curated or customized. Road, rail or air.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-2">
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-base bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] transition-all font-semibold w-full sm:w-auto shadow-lg shadow-[#C88D6A]/20">
            <Link href="/plan" className="flex items-center justify-center gap-2">
              <span>PLAN WITH RAO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-[#C88D6A]/40 text-white hover:bg-[#C88D6A]/10 bg-black/20 backdrop-blur-sm transition-all w-full sm:w-auto font-medium">
            <Link href="#mind">EXPLORE JOURNEYS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
