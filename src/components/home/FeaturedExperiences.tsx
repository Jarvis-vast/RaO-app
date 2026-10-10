import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceCard } from "@/components/ui/rao/ExperienceCard";
import { SectionHeading } from "@/components/ui/rao/SectionHeading";

const EXPERIENCES = [
  {
    title: "Coastal Escape",
    mood: "Peace + Nature",
    duration: "2D/1N",
    budget: "Customized to your budget",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mountain Reset",
    mood: "Adventure + Spiritual",
    duration: "3D/2N",
    budget: "Tailored to your preference",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Corporate Escape",
    mood: "Team Bonding",
    duration: "2D/1N",
    budget: "Custom itinerary & group rates",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
];

export function FeaturedExperiences() {
  return (
    <section className="w-full py-32 px-6 bg-[#1C0A0B]/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left max-w-xl">
            <SectionHeading 
              title="Curated"
              highlight="Experiences"
              subtitle="Just a glimpse of what's possible. Every trip is designed around you."
            />
          </div>
          <Link href="/experiences" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            View All Experiences <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.title} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
