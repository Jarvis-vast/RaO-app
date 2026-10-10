"use client";

import { useState } from "react";
import { PlannerState } from "../types";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ArrowLeft, Check, RefreshCw } from "lucide-react";

interface StepDescribeProps {
  state: PlannerState;
  updateState?: (updates: Partial<PlannerState>) => void;
  onProceedToProposal?: () => void;
  onProceedToWizard?: () => void;
  prevStep?: () => void;
}

export function StepDescribe({
  state,
  updateState,
  onProceedToProposal,
  onProceedToWizard,
  prevStep,
}: StepDescribeProps) {
  const [inputText, setInputText] = useState(
    state.rawUserInput || state.describeText || ""
  );

  // Quick Prompt Chips
  const samplePrompts = [
    "6 friends, ₹7,000 each, next weekend, want adventure and water sports near the sea.",
    "Quiet couple getaway near Mahabaleshwar, misty weather, budget ₹15,000 per person.",
    "Weekend wine-tasting and luxury villa in Nashik for 4 adults.",
    "Solo reset in pure nature, budget around ₹10,000 from Pune.",
  ];

  // Deterministic intent parser
  const parseIntent = (text: string) => {
    const lower = text.toLowerCase();
    const updates: Partial<PlannerState> = {
      rawUserInput: text,
      describeText: text,
      mode: "describe",
    };

    // 1. Group extraction
    const groupMatch = lower.match(/(\d+)\s*(?:friends|people|travellers|pax|persons|adults)/);
    if (groupMatch) {
      updates.numTravellers = groupMatch[1];
      updates.groupType = "Friends";
    } else if (lower.includes("couple") || lower.includes("anniversary") || lower.includes("partner")) {
      updates.numTravellers = "2";
      updates.groupType = "Couple";
    } else if (lower.includes("solo") || lower.includes("alone") || lower.includes("by myself")) {
      updates.numTravellers = "1";
      updates.groupType = "Solo";
    } else if (lower.includes("family")) {
      updates.groupType = "Family";
      const numMatch = lower.match(/(\d+)\s*(?:family members|people)/);
      if (numMatch) updates.numTravellers = numMatch[1];
    }

    // 2. Budget extraction
    // Look for numbers near k or ₹ or rs
    const budgetKMatch = lower.match(/(?:₹|rs\.?|inr)?\s*(\d+)\s*(?:k|thousand)/);
    const budgetNumMatch = lower.match(/(?:₹|rs\.?|inr)\s*(\d[\d,]*)/);
    if (budgetKMatch) {
      const val = parseInt(budgetKMatch[1], 10) * 1000;
      updates.budgetPerPerson = String(val);
    } else if (budgetNumMatch) {
      const val = parseInt(budgetNumMatch[1].replace(/,/g, ""), 10);
      updates.budgetPerPerson = String(val);
    }

    // 3. Moods extraction
    const detectedMoods: string[] = [];
    if (lower.includes("adventure") || lower.includes("water sports") || lower.includes("scuba") || lower.includes("trek")) {
      detectedMoods.push("Adventure");
    }
    if (lower.includes("quiet") || lower.includes("peace") || lower.includes("serene") || lower.includes("relax")) {
      detectedMoods.push("Peace");
    }
    if (lower.includes("nature") || lower.includes("misty") || lower.includes("hills") || lower.includes("green")) {
      detectedMoods.push("Nature");
    }
    if (lower.includes("luxury") || lower.includes("villa") || lower.includes("5-star") || lower.includes("premium")) {
      detectedMoods.push("Luxury");
    }
    if (lower.includes("romance") || lower.includes("romantic") || lower.includes("couple")) {
      detectedMoods.push("Romance");
    }
    if (lower.includes("wildlife") || lower.includes("safari") || lower.includes("tiger")) {
      detectedMoods.push("Adventure");
      detectedMoods.push("Nature");
    }
    if (detectedMoods.length > 0) {
      updates.moods = detectedMoods;
    }

    // 4. Origin extraction
    if (lower.includes("mumbai") || lower.includes("bombay")) updates.origin = "Mumbai";
    else if (lower.includes("pune")) updates.origin = "Pune";
    else if (lower.includes("nagpur")) updates.origin = "Nagpur";
    else if (lower.includes("nashik")) updates.origin = "Nashik";

    // 5. Destination extraction
    if (lower.includes("alibaug")) updates.destinationContext = "Alibaug";
    else if (lower.includes("tarkarli") || lower.includes("malvan")) updates.destinationContext = "Tarkarli";
    else if (lower.includes("mahabaleshwar") || lower.includes("panchgani")) updates.destinationContext = "Mahabaleshwar";
    else if (lower.includes("lonavala") || lower.includes("khandala")) updates.destinationContext = "Lonavala";
    else if (lower.includes("nashik") || lower.includes("vineyard")) updates.destinationContext = "Nashik";
    else if (lower.includes("tadoba")) updates.destinationContext = "Tadoba";
    else if (lower.includes("matheran")) updates.destinationContext = "Matheran";

    // 6. Dates extraction
    if (lower.includes("next weekend")) updates.datesOption = "Next Weekend";
    else if (lower.includes("this weekend")) updates.datesOption = "This Weekend";
    else if (lower.includes("flexible")) updates.datesOption = "Flexible";

    updateState?.(updates);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInputText(val);
    parseIntent(val);
  };

  const handleSelectSample = (sample: string) => {
    setInputText(sample);
    parseIntent(sample);
  };

  const isInputValid = inputText.trim().length >= 10;

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl space-y-8 shadow-2xl max-w-3xl mx-auto">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider border border-primary/20">
          <Sparkles className="w-3.5 h-3.5" /> Natural Travel Intent
        </div>
        <h2 className="text-3xl font-light text-foreground tracking-tight">Describe your dream trip.</h2>
        <p className="text-muted-foreground font-light text-sm">
          Mention who you&apos;re travelling with, your budget, when you want to go, or what feeling you&apos;re chasing.
        </p>
      </div>

      <div className="space-y-4">
        <textarea
          rows={4}
          value={inputText}
          onChange={handleTextChange}
          placeholder="e.g. 6 friends, around ₹7,000 each, next weekend, something adventurous near the sea..."
          className="w-full bg-black/40 border border-white/15 rounded-2xl p-5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none leading-relaxed placeholder:text-muted-foreground/60"
        />

        {/* Suggestion Chips */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Or try an example:</p>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSample(prompt)}
                className="text-xs text-left bg-white/5 border border-white/10 hover:border-primary/50 text-foreground/80 hover:text-primary px-3 py-1.5 rounded-full transition-colors font-light"
              >
                &quot;{prompt}&quot;
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Extracted Intent Preview */}
      {isInputValid && (
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Understanding Your Request:
            </span>
            <span className="text-[11px] text-muted-foreground">Adjustable anytime</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
              <span className="text-muted-foreground block text-[10px] uppercase">Travellers</span>
              <span className="font-medium text-foreground">{state.numTravellers || "2"} ({state.groupType || "Flexible"})</span>
            </div>
            <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
              <span className="text-muted-foreground block text-[10px] uppercase">Est. Budget</span>
              <span className="font-medium text-foreground">₹{state.budgetPerPerson || "12000"} / person</span>
            </div>
            <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
              <span className="text-muted-foreground block text-[10px] uppercase">Mood Focus</span>
              <span className="font-medium text-foreground">{state.moods.length ? state.moods.join(", ") : "Tailored"}</span>
            </div>
            <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
              <span className="text-muted-foreground block text-[10px] uppercase">Origin</span>
              <span className="font-medium text-foreground">{state.origin || "Mumbai"}</span>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
        <Button
          variant="ghost"
          onClick={prevStep}
          className="text-muted-foreground hover:text-foreground text-sm"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Modes
        </Button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            disabled={!isInputValid}
            onClick={onProceedToWizard}
            className="rounded-full border-white/20 hover:bg-white/10 text-xs px-5 h-11"
          >
            Refine Details <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Button>

          <Button
            disabled={!isInputValid}
            onClick={onProceedToProposal}
            className="rounded-full bg-primary text-primary-foreground hover:bg-accent px-6 h-11 text-xs font-medium shadow-lg"
          >
            Generate Proposal <Sparkles className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
