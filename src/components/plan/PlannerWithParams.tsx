"use client";

import { useSearchParams } from "next/navigation";
import { PlannerCore } from "@/components/plan/PlannerCore";

export function PlannerWithParams() {
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
