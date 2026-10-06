"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PlannerCore } from "@/components/plan/PlannerCore";

function PlannerWithParams() {
  const searchParams = useSearchParams();
  const ideaParam =
    searchParams.get("idea") ||
    searchParams.get("topic") ||
    searchParams.get("q") ||
    searchParams.get("mood") ||
    null;

  const tripParam = searchParams.get("trip");
  const destParam =
    searchParams.get("dest") ||
    searchParams.get("destination") ||
    (tripParam === "ujjain-temple-escape" ? "Ujjain" : null);

  return (
    <PlannerCore
      key={`${ideaParam || "none"}-${destParam || "none"}`}
      initialIdea={ideaParam}
      initialDest={destParam}
    />
  );
}

export default function PlanTrip() {
  return (
    <main className="flex-1 flex flex-col items-center pt-28 sm:pt-32 pb-24 px-4 sm:px-6 bg-transparent min-h-screen">
      <Suspense
        fallback={
          <div className="w-full max-w-4xl mx-auto py-20 text-center text-muted-foreground flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#C88D6A]/30 border-t-[#C88D6A] animate-spin" />
            <span className="text-sm font-light text-[#F2EAE4]/80">Loading your personal planner...</span>
          </div>
        }
      >
        <PlannerWithParams />
      </Suspense>
    </main>
  );
}
