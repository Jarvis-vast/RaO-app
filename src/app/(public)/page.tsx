import { Hero } from "@/components/home/Hero";
import { YourJourneyYourWay } from "@/components/home/YourJourneyYourWay";
import { AnyTripSection } from "@/components/home/AnyTripSection";
import { OneDayJourneySection } from "@/components/home/OneDayJourneySection";
import { PlanningCategoriesSection } from "@/components/home/PlanningCategoriesSection";
import { TravelModesSection } from "@/components/home/TravelModesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MoodSection } from "@/components/home/MoodSection";
import { UpcomingTripsSection } from "@/components/home/UpcomingTripsSection";
import { CustomerTrust } from "@/components/home/CustomerTrust";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center overflow-x-hidden">
      <Hero />
      <YourJourneyYourWay />
      <AnyTripSection />
      <OneDayJourneySection />
      <PlanningCategoriesSection />
      <TravelModesSection />
      <HowItWorksSection />
      <MoodSection />
      <UpcomingTripsSection />
      <CustomerTrust />
      <FinalCTA />
    </main>
  );
}
