import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About RaO | Remarkable Adventure Odyssey",
  description: "Learn about RaO's mission to make travel deeply personal: designing bespoke journeys around feelings, intent, and people, not catalog packages.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-16">
        <header className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight">Travel should feel personal.</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Traditional travel planning starts with "Where do you want to go?" <br/>
            RaO starts with <strong className="text-primary font-medium">"How do you want to feel?"</strong>
          </p>
        </header>

        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 space-y-12 shadow-2xl">
          <section className="space-y-6">
            <h2 className="text-3xl font-medium text-primary">The Transformation</h2>
            <p className="text-lg text-foreground/90 font-light leading-relaxed">
              We believe that designing a journey around a package catalog is backwards. Travel is deeply personal. By starting with your intent, we craft experiences that perfectly match your emotional and logistical needs.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center pt-6 opacity-80">
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Mood</span>
              <span>→</span>
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Intent</span>
              <span>→</span>
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Destination</span>
              <span>→</span>
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Experience</span>
              <span>→</span>
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Itinerary</span>
              <span>→</span>
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Booking</span>
            </div>
          </section>

          <section className="space-y-6 pt-8 border-t border-white/10">
            <h2 className="text-3xl font-medium text-primary">Our Mission</h2>
            <p className="text-lg text-foreground/90 font-light leading-relaxed">
              RaO combines human travel planning, curated experiences, and cutting-edge technology to reduce the overwhelming complexity of planning. We make travel personal by designing journeys around people, not packages.
            </p>
          </section>

          <div className="pt-10 flex justify-center">
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg transition-colors font-medium">
              <Link href="/plan">Experience RaO</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
