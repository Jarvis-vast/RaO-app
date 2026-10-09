import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhatInMindSection } from "@/components/home/WhatInMindSection";
import { YourJourneyYourWay } from "@/components/home/YourJourneyYourWay";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CuratedCustomizedSection } from "@/components/home/CuratedCustomizedSection";
import { TravelModesSection } from "@/components/home/TravelModesSection";
import { UpcomingTripsSection } from "@/components/home/UpcomingTripsSection";
import { CouplesEscapesSection } from "@/components/home/CouplesEscapesSection";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { Destinations } from "@/components/home/Destinations";
import { CustomerTrust } from "@/components/home/CustomerTrust";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "RaO | Personal Travel Planner in Mumbai",
  description:
    "RaO is your personal travel planner in Mumbai. Tell us your dates, budget, destination or idea and we’ll plan a curated or customized journey by road, rail or air.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/",
  },
  openGraph: {
    title: "RaO | Personal Travel Planner in Mumbai",
    description:
      "RaO is your personal travel planner in Mumbai. Tell us your dates, budget, destination or idea and we’ll plan a curated or customized journey by road, rail or air.",
    url: "https://rao-ashy.vercel.app/",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "RaO Personal Travel Planner" }],
  },
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center overflow-x-hidden">
      {/* 1. HERO */}
      <Hero />

      {/* 2. WHAT DO YOU HAVE IN MIND? */}
      <WhatInMindSection />

      {/* 3. YOUR JOURNEY. YOUR WAY. */}
      <YourJourneyYourWay />

      {/* 4. HOW RAO WORKS */}
      <HowItWorksSection />

      {/* 5. CURATED OR CUSTOMIZED */}
      <CuratedCustomizedSection />

      {/* 6. ROAD • RAIL • AIR */}
      <TravelModesSection />

      {/* 7. UPCOMING JOURNEYS (Kolhapur, Akkalkot, Vaishno Devi, Ujjain) */}
      <UpcomingTripsSection />

      {/* 8. DEDICATED COUPLES ESCAPES (Coorg, Hampi, Gokarna) */}
      <CouplesEscapesSection />

      {/* 9. CURATED EXPERIENCES */}
      <FeaturedExperiences />

      {/* 10. DESTINATIONS */}
      <Destinations />

      {/* 11. TRUST / SUPPORT */}
      <CustomerTrust />

      {/* 12. FINAL CTA */}
      <FinalCTA />
    </main>
  );
}
