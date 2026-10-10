import type { Metadata } from "next";
import { Suspense } from "react";
import { PlannerWithParams } from "@/components/plan/PlannerWithParams";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan a Journey with RaO | Personal Travel Planner",
  description:
    "Tell RaO what you have in mind — your dates, budget, destination, group or simply an idea. We’ll help shape the journey around you.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/plan",
  },
  openGraph: {
    title: "Plan a Journey with RaO | Personal Travel Planner",
    description:
      "Tell RaO what you have in mind — your dates, budget, destination, group or simply an idea. We’ll help shape the journey around you.",
    url: "https://rao-ashy.vercel.app/plan",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "Plan a Journey with RaO" }],
  },
};

function PlannerCrawlableFallback() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Static Crawlable Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" /> YOUR PERSONAL TRAVEL PLANNER
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          PLAN A JOURNEY <span className="text-[#C88D6A] font-serif italic font-normal">WITH RAO</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          “Tell us what you have in mind. Start with whatever you know — we’ll help shape the rest.”
        </p>
      </div>

      <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
        <div className="w-8 h-8 rounded-full border-2 border-[#C88D6A]/30 border-t-[#C88D6A] animate-spin mx-auto" />
        <p className="text-sm font-light text-[#F2EAE4]/80">
          Loading interactive planner...
        </p>
      </div>
    </div>
  );
}

export default function PlanTripPage() {
  return (
    <main className="flex-1 flex flex-col items-center pt-28 sm:pt-32 pb-24 px-4 sm:px-6 bg-transparent min-h-screen w-full">
      <Suspense fallback={<PlannerCrawlableFallback />}>
        <PlannerWithParams />
      </Suspense>
    </main>
  );
}
