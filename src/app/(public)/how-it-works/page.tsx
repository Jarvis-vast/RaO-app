import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Compass, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "How It Works | RaO Personal Travel Planner",
  description: "Learn how RaO turns your feelings, budget, and travel dates into a complete, personalized journey without the stress of traditional catalog planning.",
};

export default function HowItWorks() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 pb-24 px-6 bg-transparent">
      <div className="max-w-4xl w-full space-y-16 text-center">
        <header className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">The RaO Method</span>
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">How it Works</h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            We believe travel should be about the feeling, not the logistical headache. Here is how RaO transforms a simple thought into your perfect getaway.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg border border-primary/30">
              1
            </div>
            <h3 className="text-xl font-medium text-foreground">Tell Us Your Feeling</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Start with your mood, budget, and dates — or simply describe your dream weekend in your own words. You don&apos;t need to know the destination yet.
            </p>
          </div>

          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg border border-primary/30">
              2
            </div>
            <h3 className="text-xl font-medium text-foreground">Review & Personalize</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Our intelligent planner matches your criteria with our signature experiences and generates a personalized proposal with transparent package estimates.
            </p>
          </div>

          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg border border-primary/30">
              3
            </div>
            <h3 className="text-xl font-medium text-foreground">Travel Seamlessly</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Once you approve, our human travel designers coordinate directly with trusted suppliers, reserve stays, and provide dedicated support throughout your trip.
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-[#1C0A0B]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-10 space-y-6 max-w-2xl mx-auto shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-3xl font-light text-foreground tracking-tight">Ready to experience travel differently?</h3>
            <p className="text-sm text-muted-foreground font-light">
              It takes less than two minutes to design your bespoke getaway.
            </p>
          </div>
          <div>
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-accent px-10 h-14 text-base font-medium transition-colors shadow-lg">
              <Link href="/plan">
                <span>Plan My Journey</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
