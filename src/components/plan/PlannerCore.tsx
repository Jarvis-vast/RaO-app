"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlannerState, initialPlannerState } from "./types";
import { 
  StepModeSelection, 
  StepDescribe,
  StepMood, 
  StepBudget, 
  StepDates, 
  StepGroup, 
  StepOrigin, 
  StepPreferences, 
  StepSharing, 
  StepReview 
} from "./steps";
import { ResultState } from "./ResultState";
import { ProposalView } from "./ProposalView";
import { RotateCcw } from "lucide-react";

export type StepId = 
  | "mode"
  | "describe"
  | "mood" 
  | "budget" 
  | "dates" 
  | "group" 
  | "origin" 
  | "preferences" 
  | "sharing" 
  | "review"
  | "generating"
  | "proposal";

const STORAGE_KEY = "rao_planner_state_v1";

interface PlannerCoreProps {
  initialMood?: string | null;
  initialDest?: string | null;
}

export function PlannerCore({ initialMood, initialDest }: PlannerCoreProps) {
  const [state, setState] = useState<PlannerState>(() => {
    const base = { ...initialPlannerState };
    if (initialMood) {
      base.moods = [initialMood];
    }
    if (initialDest) {
      base.destinationContext = initialDest;
    }
    return base;
  });

  const [currentStep, setCurrentStep] = useState<StepId>(() => {
    // If a mood or destination parameter was supplied via URL, skip mode selection directly into budget
    if (initialMood || initialDest) {
      return "budget";
    }
    return "mode";
  });

  const [direction, setDirection] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Restore active journey from sessionStorage after client mount
  useEffect(() => {
    setMounted(true);

    // If query params were passed, they take priority over cached storage
    if (initialMood || initialDest) {
      return;
    }

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.state) setState(parsed.state);
        if (parsed.step && parsed.step !== "generating") setCurrentStep(parsed.step);
      }
    } catch (e) {
      console.warn("Could not read planner from sessionStorage:", e);
    }
  }, [initialMood, initialDest]);

  // Sync to sessionStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ state, step: currentStep })
      );
    } catch (e) {
      console.warn("Could not persist to sessionStorage:", e);
    }
  }, [state, currentStep, mounted]);

  const updateState = (updates: Partial<PlannerState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const navigate = (step: StepId, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setCurrentStep(step);
  };

  const nextStep = (next: StepId) => navigate(next, 1);
  const prevStep = (prev: StepId) => navigate(prev, -1);

  const resetJourney = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setState(initialPlannerState);
    setCurrentStep("mode");
  };

  const variants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }
    })
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative min-h-[600px]">
      {/* Top Breadcrumb & Reset Action */}
      {currentStep !== "mode" && currentStep !== "generating" && (
        <div className="flex items-center justify-between pb-6 px-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary font-medium uppercase tracking-wider">
              {currentStep === "proposal" ? "Bespoke Itinerary" : "Planning Your Escape"}
            </span>
            {state.destinationContext && (
              <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-foreground/80">
                Destination: {state.destinationContext}
              </span>
            )}
          </div>
          <button
            onClick={resetJourney}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Start Fresh</span>
          </button>
        </div>
      )}

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {currentStep === "mode" && (
            <StepModeSelection 
              state={state} 
              onSelectGuided={() => {
                updateState({ mode: "guided" });
                nextStep("mood");
              }}
              onSelectDescribe={() => {
                updateState({ mode: "describe" });
                nextStep("describe");
              }}
            />
          )}

          {currentStep === "describe" && (
            <StepDescribe
              state={state}
              updateState={updateState}
              onProceedToProposal={() => nextStep("generating")}
              onProceedToWizard={() => nextStep("budget")}
              prevStep={() => prevStep("mode")}
            />
          )}

          {currentStep === "mood" && (
            <StepMood 
              state={state} 
              updateState={updateState} 
              nextStep={() => nextStep("budget")} 
              prevStep={() => prevStep("mode")} 
            />
          )}

          {currentStep === "budget" && (
            <StepBudget 
              state={state} 
              updateState={updateState} 
              nextStep={() => nextStep("dates")} 
              prevStep={() => prevStep(state.mode === "describe" ? "describe" : "mood")} 
            />
          )}

          {currentStep === "dates" && (
            <StepDates 
              state={state} 
              updateState={updateState} 
              nextStep={() => nextStep("group")} 
              prevStep={() => prevStep("budget")} 
            />
          )}

          {currentStep === "group" && (
            <StepGroup 
              state={state} 
              updateState={updateState} 
              nextStep={() => nextStep("origin")} 
              prevStep={() => prevStep("dates")} 
            />
          )}

          {currentStep === "origin" && (
            <StepOrigin 
              state={state} 
              updateState={updateState} 
              nextStep={() => nextStep("preferences")} 
              prevStep={() => prevStep("group")} 
            />
          )}

          {currentStep === "preferences" && (
            <StepPreferences 
              state={state} 
              updateState={updateState} 
              nextStep={() => nextStep("sharing")} 
              prevStep={() => prevStep("origin")} 
            />
          )}

          {currentStep === "sharing" && (
            <StepSharing 
              state={state} 
              updateState={updateState} 
              nextStep={() => nextStep("review")} 
              prevStep={() => prevStep("preferences")} 
            />
          )}

          {currentStep === "review" && (
            <StepReview 
              state={state} 
              nextStep={() => nextStep("generating")} 
              prevStep={() => prevStep("sharing")} 
              editStep={(step) => navigate(step, -1)} 
            />
          )}

          {currentStep === "generating" && (
            <ResultState onComplete={() => nextStep("proposal")} />
          )}

          {currentStep === "proposal" && (
            <ProposalView state={state} updateState={updateState} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
