import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { CouplesEscapesSection } from "@/components/home/CouplesEscapesSection";

const EXPERIENCES = [
  {
    id: "couples-escapes",
    name: "Couples Escapes",
    duration: "Flexible (3 to 4 Days)",
    desc: "Scenic stays, privacy, beautiful sunsets, and unhurried discoveries made for two.",
    examples: "Coorg Coffee Estates, Hampi Sunsets, Gokarna Beaches",
    featured: true,
  },
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
    duration: "1 to 5 Days",
    desc: "Sacred temple circuits, Jyotirlinga darshan, and riverfront aarti with thoughtful coordination and travel support.",
    examples: "Ujjain Mahakal, Kolhapur Mahalakshmi, Akkalkot, Vaishno Devi",
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
    examples: "Gokarna, Tarkarli, Kerala Backwaters",
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
  title: "RaO Experiences | Couples Escapes, One-Day, Pilgrimage & Custom Trips",
  description:
    "Explore RaO travel experiences: Couples Escapes (Coorg, Hampi, Gokarna), One-Day Escapes (Kolhapur), Pilgrimage Yatras (Ujjain, Akkalkot, Vaishno Devi), and custom trips.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/experiences",
  },
  openGraph: {
    title: "RaO Experiences | Couples Escapes, One-Day, Pilgrimage & Custom Trips",
    description:
      "Explore RaO travel experiences: Couples Escapes (Coorg, Hampi, Gokarna), One-Day Escapes (Kolhapur), Pilgrimage Yatras (Ujjain, Akkalkot, Vaishno Devi), and custom trips.",
    url: "https://rao-ashy.vercel.app/experiences",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "RaO Experiences" }],
  },
};

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-20 px-6">
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

        {/* Featured Dedicated Experience: Couples Escapes */}
        <CouplesEscapesSection />

        {/* All Experiences Grid */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground">All Travel Categories</h2>
            <p className="text-sm text-muted-foreground font-light">
              Explore the full spectrum of journey styles planned by RaO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className={`backdrop-blur-xl border rounded-3xl p-8 flex flex-col justify-between transition-all group shadow-xl ${
                  exp.featured
                    ? "bg-black/60 border-[#C88D6A]/50 hover:border-[#C88D6A]"
                    : "bg-black/40 border-white/10 hover:bg-black/60 hover:border-primary/40"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.name}
                      </h3>
                      {exp.featured && <Heart className="w-4 h-4 text-[#C88D6A] fill-[#C88D6A]/40" />}
                    </div>
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{exp.desc}</p>
                  <p className="text-xs text-foreground/70">
                    <strong className="text-foreground/90 font-medium">Popular:</strong> {exp.examples}
                  </p>
                </div>
                <div className="pt-8 border-t border-white/10 mt-6">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground rounded-full transition-all"
                  >
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
    </div>
  );
}
