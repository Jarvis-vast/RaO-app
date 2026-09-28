import { DestinationCard } from "@/components/ui/rao/DestinationCard";
import { SectionHeading } from "@/components/ui/rao/SectionHeading";

const DESTINATIONS = [
  { name: "Lonavala", image: "https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Mahabaleshwar", image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Alibaug", image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Matheran", image: "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Igatpuri", image: "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Ganpatipule", image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Tarkarli", image: "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Nashik", image: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

export function Destinations() {
  return (
    <section className="w-full py-32 px-6 bg-[#1C0A0B]/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading 
          title="Explore"
          highlight="Maharashtra"
          subtitle="A diverse landscape ready to host your next escape. These are just a few possibilities."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.name} {...dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
