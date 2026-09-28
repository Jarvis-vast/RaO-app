import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EXPERIENCES = [
  { id: "adventure", name: "Adventure", duration: "3-5 Days", desc: "Push your limits with trekking, camping, and thrilling outdoor pursuits.", examples: "Igatpuri, Lonavala" },
  { id: "peace", name: "Peace & Nature", duration: "2-4 Days", desc: "Disconnect from the noise. Quiet valleys, misty mornings, and complete serenity.", examples: "Mahabaleshwar, Matheran" },
  { id: "beach", name: "Beach Escape", duration: "3-6 Days", desc: "Sun, sand, and coastal relaxation away from crowded tourist traps.", examples: "Alibaug, Tarkarli" },
  { id: "romantic", name: "Romantic Getaway", duration: "2-4 Days", desc: "Private dinners, luxury stays, and moments designed for connection.", examples: "Lonavala, Nashik" },
  { id: "family", name: "Family Time", duration: "3-7 Days", desc: "Safe, engaging, and relaxing environments where every generation finds joy.", examples: "Mahabaleshwar, Ganpatipule" },
];

export const metadata = {
  title: "Travel by Feeling | Curated RaO Experiences",
  description: "Browse signature travel experiences curated around your state of mind: Adventure, Peace & Nature, Romantic Getaways, Beach Escapes, and Friends Retreats.",
};

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-16">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight">Travel by feeling.</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Tell us what you want to experience. We'll build the journey around it.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-[#1C0A0B]/90 transition-all hover:border-primary/30 group">
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-medium text-foreground">{exp.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary/70 bg-primary/10 px-3 py-1 rounded-full">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">{exp.desc}</p>
                <p className="text-sm text-foreground/60"><strong className="text-foreground/80 font-medium">Examples:</strong> {exp.examples}</p>
              </div>
              <div className="pt-8">
                <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground rounded-xl transition-all">
                  <Link href={`/plan?mood=${exp.id}`}>
                    Plan This Experience
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
