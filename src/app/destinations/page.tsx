import Link from "next/link";
import { Button } from "@/components/ui/button";

const DESTINATIONS = [
  { id: "mahabaleshwar", name: "Mahabaleshwar", desc: "Mist-covered valleys, strawberry farms, and heritage charm.", moods: "Peace, Family, Romance", format: "3-4 Days" },
  { id: "alibaug", name: "Alibaug", desc: "Coastal luxury, private villas, and pristine beach sunsets.", moods: "Beach, Friends, Luxury", format: "2-3 Days" },
  { id: "lonavala", name: "Lonavala", desc: "Lush green monsoons, secluded retreats, and easy access.", moods: "Adventure, Romance, Friends", format: "2 Days" },
  { id: "nashik", name: "Nashik", desc: "Vineyard tours, wine tasting, and relaxed luxury.", moods: "Luxury, Romance, Peace", format: "2-3 Days" },
  { id: "igatpuri", name: "Igatpuri", desc: "Waterfalls, dense forests, and raw nature trails.", moods: "Adventure, Nature", format: "2 Days" },
  { id: "tarkarli", name: "Tarkarli", desc: "White sand, scuba diving, and authentic coastal culture.", moods: "Beach, Adventure, Family", format: "4-5 Days" }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-16">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight">Where could your mood take you?</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            With RaO, the destination comes after the feeling. Here are a few places we love to design around.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="bg-transparent border border-white/10 rounded-3xl overflow-hidden group">
              <div className="h-48 bg-black/40 flex items-center justify-center relative overflow-hidden">
                {/* Fallback pattern since we don't have images */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
                <span className="text-2xl text-white/50 font-light relative z-10">{dest.name}</span>
              </div>
              <div className="p-6 bg-[#1C0A0B]/90 backdrop-blur-xl border-t border-white/5 space-y-4">
                <div>
                  <h3 className="text-2xl font-medium text-foreground">{dest.name}</h3>
                  <p className="text-sm text-primary/80 mt-1">{dest.moods}</p>
                </div>
                <p className="text-muted-foreground font-light text-sm line-clamp-2">{dest.desc}</p>
                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                  <span className="text-xs text-foreground/50">{dest.format}</span>
                  <Button asChild variant="link" className="text-primary hover:text-accent p-0 h-auto">
                    <Link href="/plan">Plan a trip here</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
