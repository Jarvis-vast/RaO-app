"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlannerState, PlannerStep, StepId, initialPlannerState } from "./types";
export type { StepId };
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  MapPin, 
  Calendar, 
  Users, 
  Wallet, 
  Car, 
  Train, 
  Plane, 
  MessageSquare, 
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Compass
} from "lucide-react";
import Link from "next/link";

interface PlannerCoreProps {
  initialIdea?: string | null;
  initialDest?: string | null;
}

const SAMPLE_CHIPS = [
  "Sunday trip from Mumbai",
  "Weekend with family",
  "Private temple journey",
  "Beach trip under my budget",
  "Corporate offsite",
  "Help me choose a destination",
  "Sunday in Kolhapur",
  "Surprise us"
];

export function PlannerCore({ initialIdea, initialDest }: PlannerCoreProps) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<PlannerStep>("intake");
  const [state, setState] = useState<PlannerState>(() => {
    const base = { ...initialPlannerState };
    if (initialIdea) {
      base.rawIdea = initialIdea;
    }
    if (initialDest) {
      base.destination = initialDest;
      base.knowDestination = "yes";
    }
    return base;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parse natural language idea into smart defaults
  const handleIdeaChange = (text: string) => {
    const lower = text.toLowerCase();
    const updates: Partial<PlannerState> = { rawIdea: text };

    // Destination detection
    if (lower.includes("kolhapur")) {
      updates.destination = "Kolhapur";
      updates.knowDestination = "yes";
    } else if (lower.includes("ujjain")) {
      updates.destination = "Ujjain";
      updates.knowDestination = "yes";
    } else if (lower.includes("goa")) {
      updates.destination = "Goa";
      updates.knowDestination = "yes";
    } else if (lower.includes("nashik")) {
      updates.destination = "Nashik";
      updates.knowDestination = "yes";
    } else if (lower.includes("alibaug")) {
      updates.destination = "Alibaug";
      updates.knowDestination = "yes";
    } else if (lower.includes("mahabaleshwar")) {
      updates.destination = "Mahabaleshwar";
      updates.knowDestination = "yes";
    } else if (lower.includes("help me choose") || lower.includes("surprise us") || lower.includes("don't know")) {
      updates.knowDestination = "no";
      updates.destination = "";
    }

    // Journey Type detection
    if (lower.includes("sunday") || lower.includes("one day") || lower.includes("same day") || lower.includes("day out")) {
      updates.journeyType = "One day";
    } else if (lower.includes("weekend")) {
      updates.journeyType = "Weekend";
    } else if (lower.includes("multi-day") || lower.includes("week") || lower.includes("holiday")) {
      updates.journeyType = "Multi-day";
    }

    // Group Type detection
    if (lower.includes("family")) {
      updates.groupType = "Family";
    } else if (lower.includes("corporate") || lower.includes("offsite") || lower.includes("company") || lower.includes("team")) {
      updates.groupType = "Corporate";
    } else if (lower.includes("friends")) {
      updates.groupType = "Friends";
    } else if (lower.includes("couple") || lower.includes("two of us") || lower.includes("anniversary")) {
      updates.groupType = "Couple";
      updates.numTravellers = "2";
    } else if (lower.includes("women") || lower.includes("ladies")) {
      updates.groupType = "Women-only";
    } else if (lower.includes("private")) {
      updates.groupType = "Private group";
    }

    // Number of travellers detection
    const numMatch = lower.match(/(\d+)\s*(?:people|travellers|persons|pax|adults|members)/);
    if (numMatch) {
      updates.numTravellers = numMatch[1];
    }

    // Travel Mode detection
    if (lower.includes("car") || lower.includes("drive") || lower.includes("road") || lower.includes("bus") || lower.includes("vehicle")) {
      updates.travelMode = "Road";
    } else if (lower.includes("train") || lower.includes("rail") || lower.includes("vande bharat")) {
      updates.travelMode = "Rail";
    } else if (lower.includes("flight") || lower.includes("air") || lower.includes("fly")) {
      updates.travelMode = "Air";
    }

    // Budget detection
    const budgetMatch = lower.match(/(?:₹|rs\.?|inr)?\s*(\d[\d,]*)\s*(?:k|thousand)?/);
    if (budgetMatch) {
      const rawNum = budgetMatch[1].replace(/,/g, "");
      let val = parseInt(rawNum, 10);
      if (lower.includes("k") || lower.includes("thousand")) val *= 1000;
      if (val > 500) {
        updates.budgetValue = `₹${val.toLocaleString("en-IN")}`;
      }
    }

    setState((prev) => ({ ...prev, ...updates }));
  };

  const updateState = (updates: Partial<PlannerState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const handleChipClick = (chip: string) => {
    handleIdeaChange(chip);
  };

  const resetAll = () => {
    setState(initialPlannerState);
    setStep("intake");
  };

  // Build WhatsApp prefilled URL
  const buildWhatsAppUrl = () => {
    const lines = [
      "Hi RaO, I want to plan a trip.",
      "",
      `Idea: ${state.rawIdea || "Custom journey request"}`,
      `Destination: ${state.knowDestination === "yes" && state.destination ? state.destination : "Help me choose"}`,
      `Duration: ${state.journeyType}`,
      `Dates: ${state.isFlexibleDates ? "Flexible dates" : state.datesOption}`,
      `Travellers: ${state.numTravellers} people (${state.groupType})`,
      `Budget: ${state.budgetValue || "Flexible / Custom"}`,
      `Travel Mode: ${state.travelMode}`,
      `Preferences: ${state.specialRequests || "None specified"}`,
      "",
      "Please help me plan it."
    ];
    const text = lines.join("\n");
    return `https://wa.me/919326540456?text=${encodeURIComponent(text)}`;
  };

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto py-20 text-center text-muted-foreground flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#C88D6A]/30 border-t-[#C88D6A] animate-spin" />
        <span className="text-sm font-light">Initializing RaO Travel Planner...</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" /> YOUR PERSONAL TRAVEL PLANNER
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          PLAN A JOURNEY <span className="text-[#C88D6A] font-serif italic font-normal">WITH RAO</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          “Tell us what you have in mind. Start with whatever you know — we’ll help shape the rest.”
        </p>
      </div>

      {/* Progress Breadcrumbs */}
      {step !== "submitted" && (
        <div className="flex items-center justify-between border-b border-white/10 pb-4 px-2 text-xs">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full font-medium transition-colors ${step === "intake" ? "bg-[#C88D6A] text-[#1C0A0B]" : "bg-white/5 text-muted-foreground"}`}>
              1. Your Idea
            </span>
            <span className="text-white/20">→</span>
            <span className={`px-3 py-1 rounded-full font-medium transition-colors ${step === "details" ? "bg-[#C88D6A] text-[#1C0A0B]" : "bg-white/5 text-muted-foreground"}`}>
              2. Refine Details
            </span>
            <span className="text-white/20">→</span>
            <span className={`px-3 py-1 rounded-full font-medium transition-colors ${step === "summary" ? "bg-[#C88D6A] text-[#1C0A0B]" : "bg-white/5 text-muted-foreground"}`}>
              3. Review & Request
            </span>
          </div>

          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors hover:underline text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start Fresh</span>
          </button>
        </div>
      )}

      {/* STEP 1: INTAKE */}
      {step === "intake" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="bg-[#1C0A0B]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl"
        >
          <div className="space-y-3">
            <label htmlFor="rawIdeaInput" className="block text-xl font-semibold text-foreground">
              Tell RaO what you&apos;re thinking…
            </label>
            <p className="text-xs text-muted-foreground font-light">
              Start with a destination, a budget, dates, a group, or just a sentence describing how you want to travel.
            </p>
            <textarea
              id="rawIdeaInput"
              rows={4}
              value={state.rawIdea}
              onChange={(e) => handleIdeaChange(e.target.value)}
              placeholder="e.g. Sunday trip from Mumbai for Mahalakshmi Darshan, weekend with family, private trip for two families, beach escape under budget..."
              className="w-full bg-black/40 border border-white/15 rounded-2xl p-5 text-base text-foreground focus:outline-none focus:border-[#C88D6A] transition-colors resize-none leading-relaxed placeholder:text-muted-foreground/60"
            />
          </div>

          {/* Suggestion Chips */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E2B28B]">
              Or select a starting idea:
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => handleChipClick(chip)}
                  className={`text-xs px-3.5 py-2 rounded-full border transition-all duration-300 ${
                    state.rawIdea === chip
                      ? "bg-[#C88D6A] text-[#1C0A0B] border-[#C88D6A] font-semibold"
                      : "bg-black/30 border-white/10 text-muted-foreground hover:text-foreground hover:border-[#C88D6A]/50"
                  }`}
                >
                  &ldquo;{chip}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Quick Detected Summary Badge */}
          {state.rawIdea.trim().length > 0 && (
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#E2B28B] uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C88D6A]" /> What RaO Picked Up:
                </span>
                <span className="text-[11px] text-muted-foreground font-normal">All details can be refined next</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                  <span className="text-muted-foreground text-[10px] uppercase block">Destination</span>
                  <span className="font-medium text-foreground">{state.knowDestination === "yes" ? state.destination : "Help me choose"}</span>
                </div>
                <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                  <span className="text-muted-foreground text-[10px] uppercase block">Duration</span>
                  <span className="font-medium text-foreground">{state.journeyType}</span>
                </div>
                <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                  <span className="text-muted-foreground text-[10px] uppercase block">Travellers</span>
                  <span className="font-medium text-foreground">{state.numTravellers} pax ({state.groupType})</span>
                </div>
                <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                  <span className="text-muted-foreground text-[10px] uppercase block">Travel Mode</span>
                  <span className="font-medium text-foreground">{state.travelMode}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <span className="text-xs text-muted-foreground font-light">
              You don&apos;t need to know all details upfront.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setStep("summary")}
                disabled={!state.rawIdea.trim()}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-xs font-medium text-foreground hover:bg-white/10 transition-colors disabled:opacity-40"
              >
                Skip to Summary →
              </button>
              <button
                type="button"
                onClick={() => setStep("details")}
                disabled={!state.rawIdea.trim()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] text-xs font-bold transition-all shadow-lg shadow-[#C88D6A]/20 flex items-center justify-center gap-2 disabled:opacity-40"
              >
                <span>Refine Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* STEP 2: DETAILS */}
      {step === "details" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="bg-[#1C0A0B]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl"
        >
          <div className="space-y-2 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Compass className="w-6 h-6 text-[#C88D6A]" /> Refine Your Requirements
            </h2>
            <p className="text-xs text-muted-foreground font-light">
              All fields are optional. Fill in what matters most to your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. WHERE */}
            <div className="space-y-4 bg-black/30 border border-white/10 rounded-2xl p-5">
              <label className="text-sm font-semibold text-[#E2B28B] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C88D6A]" /> 1. WHERE ARE YOU HEADING?
              </label>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => updateState({ knowDestination: "yes" })}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-medium border transition-colors ${
                    state.knowDestination === "yes"
                      ? "bg-[#C88D6A]/20 border-[#C88D6A] text-[#F2EAE4]"
                      : "bg-black/20 border-white/10 text-muted-foreground"
                  }`}
                >
                  Destination Known
                </button>
                <button
                  type="button"
                  onClick={() => updateState({ knowDestination: "no", destination: "" })}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-medium border transition-colors ${
                    state.knowDestination === "no"
                      ? "bg-[#C88D6A]/20 border-[#C88D6A] text-[#F2EAE4]"
                      : "bg-black/20 border-white/10 text-muted-foreground"
                  }`}
                >
                  Help Me Choose
                </button>
              </div>

              {state.knowDestination === "yes" && (
                <input
                  type="text"
                  value={state.destination}
                  onChange={(e) => updateState({ destination: e.target.value })}
                  placeholder="e.g. Kolhapur, Goa, Ujjain, Nashik..."
                  className="w-full bg-black/40 border border-white/15 rounded-xl p-3 text-sm text-foreground focus:outline-none focus:border-[#C88D6A]"
                />
              )}
            </div>

            {/* 2. WHEN & DURATION */}
            <div className="space-y-4 bg-black/30 border border-white/10 rounded-2xl p-5">
              <label className="text-sm font-semibold text-[#E2B28B] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C88D6A]" /> 2. WHEN & DURATION
              </label>

              <div className="space-y-2">
                <span className="text-[11px] text-muted-foreground font-mono uppercase block">Journey Type</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {(["One day", "Weekend", "Multi-day", "Flexible"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateState({ journeyType: type })}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                        state.journeyType === type
                          ? "bg-[#C88D6A]/20 border-[#C88D6A] text-[#F2EAE4]"
                          : "bg-black/20 border-white/10 text-muted-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <span className="text-[11px] text-muted-foreground font-mono uppercase block">Date Flexibility</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => updateState({ isFlexibleDates: true, datesOption: "Flexible" })}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      state.isFlexibleDates
                        ? "bg-[#C88D6A]/20 border-[#C88D6A] text-[#F2EAE4]"
                        : "bg-black/20 border-white/10 text-muted-foreground"
                    }`}
                  >
                    Flexible Dates
                  </button>
                  <button
                    type="button"
                    onClick={() => updateState({ isFlexibleDates: false, datesOption: "Specific dates" })}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      !state.isFlexibleDates
                        ? "bg-[#C88D6A]/20 border-[#C88D6A] text-[#F2EAE4]"
                        : "bg-black/20 border-white/10 text-muted-foreground"
                    }`}
                  >
                    Fixed Dates
                  </button>
                </div>
              </div>
            </div>

            {/* 3. WHO */}
            <div className="space-y-4 bg-black/30 border border-white/10 rounded-2xl p-5">
              <label className="text-sm font-semibold text-[#E2B28B] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C88D6A]" /> 3. WHO IS TRAVELLING?
              </label>

              <div className="space-y-2">
                <span className="text-[11px] text-muted-foreground font-mono uppercase block">Travel Group</span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(["Couple", "Family", "Friends", "Private group", "Women-only", "Corporate"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => updateState({ groupType: g })}
                      className={`py-2 px-2.5 rounded-xl border text-[11px] font-medium transition-colors ${
                        state.groupType === g
                          ? "bg-[#C88D6A]/20 border-[#C88D6A] text-[#F2EAE4]"
                          : "bg-black/20 border-white/10 text-muted-foreground"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-foreground font-medium">Number of Travellers</span>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={state.numTravellers}
                  onChange={(e) => updateState({ numTravellers: e.target.value })}
                  className="w-20 bg-black/40 border border-white/15 rounded-xl p-2 text-center text-sm font-semibold text-foreground focus:outline-none focus:border-[#C88D6A]"
                />
              </div>
            </div>

            {/* 4. BUDGET & TRAVEL MODE */}
            <div className="space-y-4 bg-black/30 border border-white/10 rounded-2xl p-5">
              <label className="text-sm font-semibold text-[#E2B28B] flex items-center gap-2">
                <Wallet className="w-4 h-4 text-[#C88D6A]" /> 4. BUDGET & TRAVEL MODE
              </label>

              <div className="space-y-2">
                <span className="text-[11px] text-muted-foreground font-mono uppercase block">Travel Mode</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { mode: "Road", icon: Car, label: "Roadways" },
                    { mode: "Rail", icon: Train, label: "Railways" },
                    { mode: "Air", icon: Plane, label: "Airways" },
                    { mode: "Recommend for me", icon: Compass, label: "Recommend" },
                  ].map((m) => {
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.mode}
                        type="button"
                        onClick={() => updateState({ travelMode: m.mode as any })}
                        className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center gap-2 transition-colors ${
                          state.travelMode === m.mode
                            ? "bg-[#C88D6A]/20 border-[#C88D6A] text-[#F2EAE4]"
                            : "bg-black/20 border-white/10 text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#C88D6A]" />
                        <span>{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <span className="text-[11px] text-muted-foreground font-mono uppercase block">Approx. Budget (Optional)</span>
                <input
                  type="text"
                  value={state.budgetValue}
                  onChange={(e) => updateState({ budgetValue: e.target.value })}
                  placeholder="e.g. ₹5,000 per person or ₹30,000 total"
                  className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-sm text-foreground focus:outline-none focus:border-[#C88D6A]"
                />
              </div>
            </div>
          </div>

          {/* 5. PREFERENCES */}
          <div className="space-y-3 bg-black/30 border border-white/10 rounded-2xl p-5">
            <label htmlFor="specialRequestsInput" className="text-sm font-semibold text-[#E2B28B] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#C88D6A]" /> 5. ANYTHING ELSE RAO SHOULD KNOW?
            </label>
            <textarea
              id="specialRequestsInput"
              rows={3}
              value={state.specialRequests}
              onChange={(e) => updateState({ specialRequests: e.target.value })}
              placeholder="e.g. Privacy preferences, specific temple darshan, vegetarian food, senior citizens, hotel style, return by nightfall..."
              className="w-full bg-black/40 border border-white/15 rounded-xl p-4 text-sm text-foreground focus:outline-none focus:border-[#C88D6A] resize-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setStep("intake")}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Idea
            </button>
            <button
              type="button"
              onClick={() => setStep("summary")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] text-xs font-bold transition-all shadow-lg shadow-[#C88D6A]/20 flex items-center justify-center gap-2"
            >
              <span>Review RaO Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* STEP 3: SUMMARY */}
      {step === "summary" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="bg-[#1C0A0B]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl"
        >
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-wider uppercase">
              SUMMARY CONFIRMATION
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              YOUR <span className="text-[#C88D6A] font-serif italic">RAO REQUEST</span>
            </h2>
            <p className="text-sm text-muted-foreground font-light">
              “Here’s what we’ve understood.”
            </p>
          </div>

          {/* Summary Card */}
          <div className="bg-[#180809] border border-[#C88D6A]/30 rounded-2xl p-6 space-y-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C88D6A]">Initial Request / Idea</span>
              <p className="text-base text-[#F2EAE4] italic bg-black/40 p-4 rounded-xl border border-white/5">
                &ldquo;{state.rawIdea || "Custom journey request"}&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-muted-foreground text-[10px] uppercase font-mono block">Destination</span>
                <span className="font-semibold text-foreground text-sm">
                  {state.knowDestination === "yes" && state.destination ? state.destination : "Help me choose"}
                </span>
              </div>

              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-muted-foreground text-[10px] uppercase font-mono block">Duration & Type</span>
                <span className="font-semibold text-foreground text-sm">{state.journeyType}</span>
              </div>

              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-muted-foreground text-[10px] uppercase font-mono block">Dates</span>
                <span className="font-semibold text-foreground text-sm">
                  {state.isFlexibleDates ? "Flexible dates" : state.datesOption}
                </span>
              </div>

              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-muted-foreground text-[10px] uppercase font-mono block">Travellers</span>
                <span className="font-semibold text-foreground text-sm">
                  {state.numTravellers} pax ({state.groupType})
                </span>
              </div>

              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-muted-foreground text-[10px] uppercase font-mono block">Budget</span>
                <span className="font-semibold text-foreground text-sm">
                  {state.budgetValue || "Flexible / Custom"}
                </span>
              </div>

              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-muted-foreground text-[10px] uppercase font-mono block">Travel Mode</span>
                <span className="font-semibold text-foreground text-sm">{state.travelMode}</span>
              </div>
            </div>

            {state.specialRequests && (
              <div className="space-y-1 pt-2 border-t border-white/10 text-xs">
                <span className="text-muted-foreground text-[10px] uppercase font-mono block">Special Preferences</span>
                <p className="text-foreground/90 font-light">{state.specialRequests}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setStep("details")}
              className="px-6 py-3 rounded-full border border-white/20 text-xs font-medium text-foreground hover:bg-white/10 transition-colors"
            >
              ← EDIT REQUIREMENTS
            </button>

            <button
              type="button"
              onClick={() => setStep("submitted")}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] text-sm font-bold transition-all shadow-xl shadow-[#C88D6A]/20 flex items-center justify-center gap-2"
            >
              <span>SEND TO RAO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* STEP 4: SUBMITTED */}
      {step === "submitted" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#180809] border border-[#C88D6A]/40 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-2xl relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-full bg-[#C88D6A]/20 border border-[#C88D6A]/40 flex items-center justify-center text-[#C88D6A] mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Your journey is with <span className="text-[#C88D6A] font-serif italic">RaO now.</span>
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              We’ll review your requirements and shape the right journey around your dates, budget and preferences.
            </p>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-xs text-muted-foreground font-light space-y-2 max-w-lg mx-auto text-left sm:text-center">
            <div className="flex items-center gap-2 text-[#E2B28B] font-semibold justify-start sm:justify-center">
              <ShieldCheck className="w-4 h-4 text-[#C88D6A]" /> No Instant Bot Bookings
            </div>
            <p>
              Om Bhagwat from RaO will review your planning request personally and respond with thoughtful options tailored specifically to you.
            </p>
          </div>

          {/* Primary WhatsApp Conversion Link */}
          <div className="pt-2 space-y-4 max-w-md mx-auto">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all shadow-xl shadow-emerald-900/30"
            >
              <span>CONTINUE ON WHATSAPP</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-muted-foreground font-mono">
              Direct connection with Om Bhagwat: +91 93265 40456
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-6">
            <button
              onClick={resetAll}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Start Another Request
            </button>
            <Link
              href="/"
              className="text-xs text-[#C88D6A] hover:text-[#E2B28B] transition-colors"
            >
              Back to Homepage →
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
