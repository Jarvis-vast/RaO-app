import { ItineraryBuilder } from "@/components/itinerary/ItineraryBuilder";

export default function ItineraryPage() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 pb-24 px-6 min-h-screen bg-transparent">
      <ItineraryBuilder />
    </main>
  );
}
