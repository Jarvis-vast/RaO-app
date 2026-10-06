import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About RaO | Personal Travel Planning & Philosophy",
  description:
    "Learn about RaO (Remarkable Adventure Odyssey) — your personal travel planner for private, family, one-day escapes, and group journeys across India.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-16">
        <header className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
            YOUR PERSONAL TRAVEL PLANNER
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            YOUR JOURNEY. <span className="text-primary font-serif italic font-normal">YOUR WAY.</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Not every beautiful journey needs a big group, a long itinerary or a fixed package.
          </p>
        </header>

        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 space-y-12 shadow-2xl">
          {/* Core Scenario Grid */}
          <section className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/30 border border-white/10 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">Spontaneous</span>
                <p className="text-foreground font-medium text-base">
                  Sometimes it’s a spontaneous day out with the people you love.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">Quick Reset</span>
                <p className="text-foreground font-medium text-base">
                  Sometimes it’s a weekend away to refresh and recharge.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">Full Group</span>
                <p className="text-foreground font-medium text-base">
                  Sometimes it’s a journey for an entire group or celebration.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Statement */}
          <section className="space-y-4 pt-6 border-t border-white/10">
            <p className="text-base md:text-lg text-foreground/90 font-light leading-relaxed">
              Whatever the size, duration or destination, RaO plans the journey around you — with the privacy, pace and experience you actually want.
            </p>
            <p className="text-lg md:text-xl font-semibold text-primary pt-2">
              Curated or customized. Road, rail or air.
            </p>
          </section>

          {/* Mission & Promise */}
          <section className="space-y-4 pt-8 border-t border-white/10 text-center">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" /> The RaO Promise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Tell us your dates and budget. <br />
              <span className="text-primary font-serif italic font-normal">We’ll do the rest.</span>
            </h2>
            <div className="pt-6 flex justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-accent px-10 py-6 text-base font-semibold transition-colors shadow-xl">
                <Link href="/plan" className="flex items-center gap-2">
                  <span>Plan My Trip With RaO</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
