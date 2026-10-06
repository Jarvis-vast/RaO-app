import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata = {
  title: "RaO Destinations | Custom Travel Across Maharashtra & India",
  description:
    "Explore destinations with RaO and discover curated or customized journeys across Maharashtra, India and beyond.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/destinations",
  },
  openGraph: {
    title: "RaO Destinations | Custom Travel Across Maharashtra & India",
    description:
      "Explore destinations with RaO and discover curated or customized journeys across Maharashtra, India and beyond.",
    url: "https://rao-ashy.vercel.app/destinations",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "RaO Destinations" }],
  },
};

const DESTINATIONS = [
  {
    id: "kolhapur",
    name: "Kolhapur",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    desc: "Mahalakshmi Temple Darshan, royal heritage, and authentic Kolhapuri cuisine. Perfect for 1-day return or weekend journeys.",
    moods: "Spiritual • Heritage • 1-Day Return",
    format: "1-Day or Weekend",
  },
  {
    id: "mahabaleshwar",
    name: "Mahabaleshwar & Panchgani",
    image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Mist-covered valleys, strawberry farms, and private hillside retreats overlooking the Sahyadris.",
    moods: "Peace • Family • Nature",
    format: "2 to 3 Days",
  },
  {
    id: "alibaug",
    name: "Alibaug",
    image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Coastal relaxation, private pool villas, coconut groves, and quick speedboat / road escapes.",
    moods: "Beach • Private • Friends",
    format: "1-Day or 2D/1N",
  },
  {
    id: "lonavala",
    name: "Lonavala & Khandala",
    image: "https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Lush green monsoons, secluded private estate villas, and quick refreshing group breaks.",
    moods: "Friends • Family • Reset",
    format: "1-Day or 2D/1N",
  },
  {
    id: "nashik",
    name: "Nashik Wine Country",
    image: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Vineyard estate stays, private barrel tastings, lakeside sunsets, and slow travel living.",
    moods: "Luxury • Romance • Peace",
    format: "2 to 3 Days",
  },
  {
    id: "igatpuri",
    name: "Igatpuri",
    image: "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Cascading waterfalls, dense mountain fog, quiet camping, and refreshing hill trails.",
    moods: "Adventure • Nature • Reset",
    format: "1 to 2 Days",
  },
  {
    id: "ganpatipule",
    name: "Ganpatipule",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    desc: "Pracheen Ganesh seaside temple, tranquil white sands, and authentic Konkani hospitality.",
    moods: "Spiritual • Beach • Family",
    format: "3 to 4 Days",
  },
  {
    id: "tarkarli",
    name: "Tarkarli & Malvan",
    image: "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "White-sand shorelines, certified scuba diving around Sindhudurg reef, and Karli backwaters.",
    moods: "Beach • Adventure • Family",
    format: "3 to 4 Days",
  },
  {
    id: "ujjain",
    name: "Ujjain & Omkareshwar",
    image: "/images/ujjain-hero.jpg",
    desc: "Mahakaleshwar Jyotirlinga, Shipra River Ghat Aarti, and divine temple circuit coordination.",
    moods: "Spiritual • Pilgrimage • Heritage",
    format: "2 to 3 Days",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-16">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
            FLEXIBLE DESTINATION PLANNING
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            START WITH A DESTINATION <br />
            <span className="text-primary font-serif italic font-normal">OR START WITH AN IDEA.</span>
          </h1>
          <div className="text-base md:text-lg text-muted-foreground font-light leading-relaxed space-y-2">
            <p><strong>Already know where you want to go?</strong> Tell RaO.</p>
            <p><strong>Not sure where to go?</strong> Tell RaO what you want.</p>
            <p className="text-primary font-medium">We can start either way.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:border-primary/40 transition-all hover:shadow-2xl flex flex-col justify-between"
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
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-medium text-primary border border-white/10">
                  {dest.format}
                </div>
              </div>

              {/* Destination Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{dest.name}</h3>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary/80">{dest.moods}</p>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{dest.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button asChild variant="link" className="text-primary hover:text-accent p-0 h-auto font-medium text-sm">
                    <Link href={`/plan?dest=${encodeURIComponent(dest.name)}`} className="inline-flex items-center gap-1.5">
                      <span>Plan a trip to {dest.name}</span>
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
