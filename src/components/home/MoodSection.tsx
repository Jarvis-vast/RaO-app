import { MoodCard } from "@/components/ui/rao/MoodCard";
import { SectionHeading } from "@/components/ui/rao/SectionHeading";

const MOODS = [
  "Adventure",
  "Peace",
  "Romance",
  "Nature",
  "Spiritual",
  "Fun",
  "Luxury",
  "Family Time",
  "Team Bonding",
  "Exploration",
  "Celebration",
  "Surprise Me",
];

export function MoodSection() {
  return (
    <section className="w-full py-32 px-6 bg-[#1C0A0B]/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading 
          title="How do you want to"
          highlight="feel?"
          subtitle="Select a mood to begin designing your bespoke journey."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {MOODS.map((mood, i) => (
            <MoodCard key={mood} mood={mood} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
