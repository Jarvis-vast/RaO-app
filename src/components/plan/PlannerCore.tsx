"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlannerState, initialPlannerState } from "./types";
import { 
  StepModeSelection, 
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

export function PlannerCore() {
  const [state, setState] = useState<PlannerState>(initialPlannerState);
  const [currentStep, setCurrentStep] = useState<StepId>("mode");
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const updateState = (updates: Partial<PlannerState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const navigate = (step: StepId, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setCurrentStep(step);
  };

  const nextStep = (next: StepId) => navigate(next, 1);
  const prevStep = (prev: StepId) => navigate(prev, -1);

  const variants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
    })
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative min-h-[600px]">
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
            <StepModeSelection state={state} updateState={updateState} nextStep={() => nextStep("mood")} />
          )}
          {currentStep === "mood" && (
            <StepMood state={state} updateState={updateState} nextStep={() => nextStep("budget")} prevStep={() => prevStep("mode")} />
          )}
          {currentStep === "budget" && (
            <StepBudget state={state} updateState={updateState} nextStep={() => nextStep("dates")} prevStep={() => prevStep("mood")} />
          )}
          {currentStep === "dates" && (
            <StepDates state={state} updateState={updateState} nextStep={() => nextStep("group")} prevStep={() => prevStep("budget")} />
          )}
          {currentStep === "group" && (
            <StepGroup state={state} updateState={updateState} nextStep={() => nextStep("origin")} prevStep={() => prevStep("dates")} />
          )}
          {currentStep === "origin" && (
            <StepOrigin state={state} updateState={updateState} nextStep={() => nextStep("preferences")} prevStep={() => prevStep("group")} />
          )}
          {currentStep === "preferences" && (
            <StepPreferences state={state} updateState={updateState} nextStep={() => nextStep("sharing")} prevStep={() => prevStep("origin")} />
          )}
          {currentStep === "sharing" && (
            <StepSharing state={state} updateState={updateState} nextStep={() => nextStep("review")} prevStep={() => prevStep("preferences")} />
          )}
          {currentStep === "review" && (
            <StepReview state={state} nextStep={() => nextStep("generating")} prevStep={() => prevStep("sharing")} editStep={(step) => navigate(step, -1)} />
          )}
          {currentStep === "generating" && (
            <ResultState onComplete={() => nextStep("proposal")} />
          )}
          {currentStep === "proposal" && (
            <ProposalView state={state} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
