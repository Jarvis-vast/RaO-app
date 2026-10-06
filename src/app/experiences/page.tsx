import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    id: "one-day",
    name: "One-Day Escapes",
    duration: "Flexible (1-Day Return)",
    desc: "Thoughtfully planned single-day journeys that prove a memorable trip doesn't require a week off.",
    examples: "Mumbai → Kolhapur, Mumbai → Alibaug",
  },
  {
    id: "weekend",
    name: "Weekend Journeys",
    duration: "Flexible (2D / 1N)",
    desc: "Quick, refreshing getaways over Saturday and Sunday without taking work leave.",
    examples: "Lonavala, Mahabaleshwar, Igatpuri",
  },
  {
    id: "spiritual",
    name: "Spiritual & Pilgrimage",
    duration: "1 to 4 Days",
    desc: "Sacred temple circuits, Jyotirlinga darshan, and riverfront aarti with thoughtful coordination and travel support.",
    examples: "Ujjain Mahakal, Kolhapur Mahalakshmi, Varanasi Ghats",
  },
  {
    id: "family",
    name: "Family Time",
    duration: "Custom Duration",
    desc: "Safe, engaging, and peaceful environments where every generation travels together in comfort.",
    examples: "Mahabaleshwar, Ganpatipule, Kerala",
  },
  {
    id: "private",
    name: "Private Getaways",
    duration: "Custom Duration",
    desc: "Your own group, your own pace, your own space. Complete privacy without strangers.",
    examples: "Nashik Vineyard Villas, Private Beach Cottages",
  },
  {
    id: "group",
    name: "Friends & Group Trips",
    duration: "Custom Duration",
    desc: "High energy, laughter, and private pool villas designed for close friends and joint families.",
    examples: "Lonavala, Tarkarli, Goa",
  },
  {
    id: "women-only",
    name: "Women-Only Journeys",
    duration: "Custom Duration",
    desc: "Thoughtfully coordinated, safe, and comfortable group trips crafted for women travelers.",
    examples: "Heritage Escapes, Wellness Resorts",
  },
  {
    id: "adventure",
    name: "Adventure & Wilderness",
    duration: "Custom Duration",
    desc: "Push your limits with tiger safaris, open gypsies, river sports, and mountain trails.",
    examples: "Tadoba Safari, Scuba Diving at Malvan",
  },
  {
    id: "beach",
    name: "Nature & Beach",
    duration: "Custom Duration",
    desc: "Sun, sand, backwaters, and coastal relaxation away from crowded tourist traps.",
    examples: "Tarkarli, Kerala Backwaters",
  },
  {
    id: "corporate",
    name: "Corporate Journeys",
    duration: "1 to 3 Days",
    desc: "Professional coordination for team outings, leadership offsites, dealer meets, and group travel.",
    examples: "Lonavala Offsites, Resort Meets",
  },
  {
    id: "custom",
    name: "Custom Journeys",
    duration: "Built Around You",
    desc: "Have a unique idea or destination in mind? Tell RaO your dates and budget, and we'll design it.",
    examples: "Any Destination, Any Scale",
  },
];

export const metadata = {
  title: "RaO Experiences | One-Day, Weekend & Custom Journeys",
  description:
    "Explore RaO journeys from one-day escapes and weekends to pilgrimage, private, family, corporate and customized travel.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/experiences",
  },
  openGraph: {
    title: "RaO Experiences | One-Day, Weekend & Custom Journeys",
    description:
      "Explore RaO journeys from one-day escapes and weekends to pilgrimage, private, family, corporate and customized travel.",
    url: "https://rao-ashy.vercel.app/experiences",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "RaO Experiences" }],
  },
};

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-16">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
            EXPERIENCE-DRIVEN TRAVEL
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight">
            TRAVEL BY WHAT YOU <br />
            <span className="text-primary font-serif italic font-normal">WANT TO EXPERIENCE.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            &ldquo;Some journeys last a day. Some last a week. What matters is how the journey is designed around you.&rdquo;
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-[#1C0A0B]/90 transition-all hover:border-primary/40 group shadow-xl">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.name}</h3>
                  <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{exp.desc}</p>
                <p className="text-xs text-foreground/70"><strong className="text-foreground/90 font-medium">Popular:</strong> {exp.examples}</p>
              </div>
              <div className="pt-8 border-t border-white/10 mt-6">
                <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground rounded-full transition-all">
                  <Link href={`/plan?experience=${exp.id}`}>
                    <span>Plan {exp.name}</span>
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
