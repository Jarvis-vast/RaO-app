import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Heart } from "lucide-react";

export const metadata = {
  title: "About RaO | Your Personal Travel Planner",
  description: "RaO is your personal travel planner. We design journeys around people, privacy, and preferences — from a one-day return for 6 to a complete travel plan for 50.",
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
            Travel should feel personal.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Personal travel does not mean expensive travel. It simply means a journey designed around your people, your privacy, and your pace.
          </p>
        </header>

        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 space-y-12 shadow-2xl">
          {/* Core Philosophy Section */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">A Personal Journey Can Be...</h2>
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="bg-black/30 border border-white/10 p-6 rounded-2xl space-y-3">
                <span className="text-xs font-mono uppercase font-semibold text-primary">Small & Focused</span>
                <p className="text-foreground font-medium text-base">
                  Six people, one day, one destination, and one beautiful reason to go.
                </p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  No crowded tour buses, no adjusting to strangers, no rigid itineraries. Just private, quality time with your group.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 p-6 rounded-2xl space-y-3">
                <span className="text-xs font-mono uppercase font-semibold text-primary">Large & Grand</span>
                <p className="text-foreground font-medium text-base">
                  Fifty people, multiple days, multiple cities, complete transport and coordination.
                </p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  End-to-end logistics, train & road bookings, accommodation, and on-ground assistance handled effortlessly.
                </p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" /> Our Mission
            </div>
            <h2 className="text-2xl md:text-4xl font-light text-foreground leading-tight">
              &ldquo;Make travel personal by designing journeys around people, not predefined packages.&rdquo;
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base pt-2">
              RaO stands for <strong>Remarkable Adventure Odyssey</strong>. Whether it is a one-day pilgrimage return to Kolhapur or a multi-day group journey across Kashmir, we make sure the journey feels like an experience, not just transportation from point A to point B.
            </p>
          </section>

          <div className="pt-6 flex justify-center">
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-accent px-10 py-6 text-base font-semibold transition-colors shadow-xl">
              <Link href="/plan">Plan Your Journey With RaO</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
