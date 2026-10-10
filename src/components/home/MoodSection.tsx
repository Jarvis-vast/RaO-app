"use client";

import { MoodCard } from "@/components/ui/rao/MoodCard";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const MOODS = [
  "Peace & Reconnection",
  "Spiritual Darshan",
  "One-Day Escape",
  "Nature & Outdoors",
  "Family Time",
  "Friends Getaway",
  "Luxury Villa Reset",
  "Adventure & Wildlife",
  "Romance",
  "Corporate Outing",
  "Cultural Heritage",
  "Surprise Me",
];

const SAMPLE_STARTS = [
  { text: "I want a peaceful one-day temple trip", params: "dest=Kolhapur&moods=Spiritual" },
  { text: "I have ₹5,000 per person budget", params: "budget=5000" },
  { text: "We are 6 people looking for privacy", params: "pax=6&sharing=Private" },
  { text: "We are free this upcoming Sunday", params: "dates=Upcoming+Weekend" },
  { text: "We want to go somewhere by train", params: "mode=train" },
  { text: "We want a private family weekend trip", params: "group=Family&moods=Family+Time" },
];

export function MoodSection() {
  return (
    <section className="w-full py-24 px-6 bg-black/40 backdrop-blur-md border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
            START YOUR PLANNING
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            START WITH A FEELING, A DESTINATION, <span className="text-[#C88D6A] font-serif italic">A DATE, OR A BUDGET.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            There is no single right way to begin. Whether you have an exact vision or just a open weekend, RaO adapts to your starting point.
          </p>
        </div>

        {/* Quick Example Starts */}
        <div className="space-y-4">
          <p className="text-xs uppercase font-mono font-semibold tracking-wider text-center text-[#E2B28B]">
            Popular Ways People Start Planning:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SAMPLE_STARTS.map((sample) => (
              <Link
                key={sample.text}
                href={`/plan?${sample.params}`}
                className="px-4 py-2.5 rounded-full bg-black/40 border border-white/10 hover:border-[#C88D6A]/40 text-xs md:text-sm text-foreground/90 hover:text-[#C88D6A] transition-all flex items-center gap-2 group"
              >
                <span>&ldquo;{sample.text}&rdquo;</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C88D6A] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mood Selection Grid */}
        <div className="space-y-6">
          <p className="text-xs uppercase font-mono font-semibold tracking-wider text-center text-muted-foreground">
            Or Choose By Travel Mood:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {MOODS.map((mood, i) => (
              <MoodCard key={mood} mood={mood} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
