import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Destinations in Maharashtra | RaO Travel Planner",
  description: "Explore curated Maharashtra destinations tailored to your mood: from misty Western Ghat valleys to secluded Konkan beaches and lush vineyards.",
};

const DESTINATIONS = [
  {
    id: "mahabaleshwar",
    name: "Mahabaleshwar",
    image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Mist-covered valleys, strawberry farms, and heritage hillside retreats overlooking the Sahyadris.",
    moods: "Peace • Family • Romance",
    format: "3-4 Days",
  },
  {
    id: "alibaug",
    name: "Alibaug",
    image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Coastal luxury, private pool villas, coconut groves, and tranquil sunset boat transfers.",
    moods: "Beach • Friends • Luxury",
    format: "2-3 Days",
  },
  {
    id: "lonavala",
    name: "Lonavala",
    image: "https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Lush green monsoons, secluded private estate retreats, and quick refreshing weekend breaks.",
    moods: "Adventure • Romance • Friends",
    format: "2 Days",
  },
  {
    id: "nashik",
    name: "Nashik",
    image: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Vineyard estate stays, private barrel tastings, lakeside sunsets, and slow travel living.",
    moods: "Luxury • Romance • Peace",
    format: "2-3 Days",
  },
  {
    id: "igatpuri",
    name: "Igatpuri",
    image: "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Thunderous waterfalls, dense mountain forests, fog-draped peaks, and raw hiking trails.",
    moods: "Adventure • Nature • Reset",
    format: "2 Days",
  },
  {
    id: "tarkarli",
    name: "Tarkarli",
    image: "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "White-sand shorelines, certified scuba diving, Karli backwaters, and genuine Konkan seafood.",
    moods: "Beach • Adventure • Family",
    format: "4-5 Days",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-16">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Bespoke Landscapes</span>
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            Where could your mood take you?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            With RaO, the destination comes after the feeling. Here are signature landscapes our travel designers craft bespoke journeys around.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:border-primary/40 transition-all hover:shadow-2xl flex flex-col"
            >
              {/* Destination Visual */}
              <div className="h-56 relative overflow-hidden bg-black/40">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0B] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-primary border border-white/10">
                  {dest.format}
                </div>
              </div>

              {/* Destination Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-foreground">{dest.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary/80">{dest.moods}</p>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{dest.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Button asChild variant="link" className="text-primary hover:text-accent p-0 h-auto font-medium text-sm">
                    <Link href={`/plan?dest=${encodeURIComponent(dest.name)}`} className="inline-flex items-center gap-1.5">
                      <span>Plan around {dest.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
