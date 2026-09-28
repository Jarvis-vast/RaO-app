import { Hero } from "@/components/home/Hero";
import { MoodSection } from "@/components/home/MoodSection";
import { TransformationSection } from "@/components/home/TransformationSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { Destinations } from "@/components/home/Destinations";
import { CustomerTrust } from "@/components/home/CustomerTrust";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center overflow-x-hidden">
      <Hero />
      <MoodSection />
      <TransformationSection />
      <HowItWorksSection />
      <FeaturedExperiences />
      <Destinations />
      <CustomerTrust />
      <FinalCTA />
    </main>
  );
}
