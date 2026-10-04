"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { PlannerState, initialPlannerState } from "@/components/plan/types";
import { ProposalPackage } from "@/lib/types/proposal";
import { ProposalResolver } from "@/lib/services/ProposalResolver";

interface ResolvedProposalResult {
  proposal: ProposalPackage;
  customWhyItFits: string;
  estimatedCostPerPerson: number;
  estimatedTotalCost: number;
}

interface SavedTripItem {
  id: string;
  createdAt: string;
  proposalTitle: string;
  destination: string;
  totalCost: number;
  travellers: number;
  plannerState: PlannerState;
}

interface TripPlannerContextType {
  plannerState: PlannerState;
  setPlannerState: React.Dispatch<React.SetStateAction<PlannerState>>;
  updatePlannerState: (partial: Partial<PlannerState>) => void;
  resetPlannerState: () => void;
  resolvedProposal: ResolvedProposalResult;
  savedTrips: SavedTripItem[];
  saveCurrentTrip: () => SavedTripItem;
  removeSavedTrip: (id: string) => void;
  getShareableLink: () => string;
}

const STORAGE_KEY = "rao_planner_draft_v1";
const SAVED_TRIPS_KEY = "rao_saved_trips_v1";

const TripPlannerContext = createContext<TripPlannerContextType | undefined>(undefined);

export function TripPlannerProvider({ children }: { children: React.ReactNode }) {
  const [plannerState, setPlannerState] = useState<PlannerState>(initialPlannerState);
  const [savedTrips, setSavedTrips] = useState<SavedTripItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load draft & saved trips from localStorage on mount
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem(STORAGE_KEY);
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        setPlannerState((prev) => ({ ...prev, ...parsed }));
      }

      const savedList = localStorage.getItem(SAVED_TRIPS_KEY);
      if (savedList) {
        setSavedTrips(JSON.parse(savedList));
      }
    } catch (e) {
      console.warn("Failed to load planner state from storage", e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save draft to localStorage on change
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plannerState));
    } catch (e) {
      console.warn("Failed to persist planner state", e);
    }
  }, [plannerState, isInitialized]);

  const updatePlannerState = (partial: Partial<PlannerState>) => {
    setPlannerState((prev) => ({ ...prev, ...partial }));
  };

  const resetPlannerState = () => {
    setPlannerState(initialPlannerState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn("Failed to clear draft", e);
    }
  };

  const resolvedProposal = useMemo(() => {
    return ProposalResolver.resolve(plannerState);
  }, [plannerState]);

  const saveCurrentTrip = (): SavedTripItem => {
    const newItem: SavedTripItem = {
      id: `saved-${Date.now()}`,
      createdAt: new Date().toISOString(),
      proposalTitle: resolvedProposal.proposal.title,
      destination: resolvedProposal.proposal.primaryDestination,
      totalCost: resolvedProposal.estimatedTotalCost,
      travellers: parseInt(plannerState.numTravellers || "2", 10),
      plannerState: { ...plannerState },
    };

    const updated = [newItem, ...savedTrips.filter((t) => t.proposalTitle !== newItem.proposalTitle)];
    setSavedTrips(updated);
    try {
      localStorage.setItem(SAVED_TRIPS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Failed to save trip", e);
    }
    return newItem;
  };

  const removeSavedTrip = (id: string) => {
    const updated = savedTrips.filter((item) => item.id !== id);
    setSavedTrips(updated);
    try {
      localStorage.setItem(SAVED_TRIPS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Failed to update saved trips", e);
    }
  };

  const getShareableLink = () => {
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams();
    if (plannerState.destinationContext) params.set("dest", plannerState.destinationContext);
    if (plannerState.budgetPerPerson) params.set("budget", plannerState.budgetPerPerson);
    if (plannerState.numTravellers) params.set("pax", plannerState.numTravellers);
    if (plannerState.moods.length) params.set("moods", plannerState.moods.join(","));
    if (plannerState.origin) params.set("origin", plannerState.origin);
    return `${window.location.origin}/plan?${params.toString()}`;
  };

  return (
    <TripPlannerContext.Provider
      value={{
        plannerState,
        setPlannerState,
        updatePlannerState,
        resetPlannerState,
        resolvedProposal,
        savedTrips,
        saveCurrentTrip,
        removeSavedTrip,
        getShareableLink,
      }}
    >
      {children}
    </TripPlannerContext.Provider>
  );
}

export function useTripPlanner() {
  const context = useContext(TripPlannerContext);
  if (!context) {
    throw new Error("useTripPlanner must be used within a TripPlannerProvider");
  }
  return context;
}
