"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PlannerCore } from "@/components/plan/PlannerCore";

function PlannerWithParams() {
  const searchParams = useSearchParams();
  const moodParam = searchParams.get("mood");
  const tripParam = searchParams.get("trip");
  const destParam =
    searchParams.get("dest") ||
    searchParams.get("destination") ||
    (tripParam === "ujjain-temple-escape" ? "Ujjain" : null);

  return (
    <PlannerCore
      key={`${moodParam || "none"}-${destParam || "none"}`}
      initialMood={moodParam}
      initialDest={destParam}
    />
  );
}

export default function PlanTrip() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 pb-24 px-6 bg-transparent min-h-screen">
      <Suspense
        fallback={
          <div className="w-full max-w-4xl mx-auto py-20 text-center text-muted-foreground flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
            <span className="text-sm font-light">Loading your personal planner...</span>
          </div>
        }
      >
        <PlannerWithParams />
      </Suspense>
    </main>
  );
}
