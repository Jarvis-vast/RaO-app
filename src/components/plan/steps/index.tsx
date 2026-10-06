"use client";

import { PlannerState } from "../types";
import { Button } from "@/components/ui/button";
import { StepId } from "../PlannerCore";
import { ArrowRight, ArrowLeft } from "lucide-react";

export { StepDescribe } from "./StepDescribe";

interface StepProps {
  state: PlannerState;
  updateState?: (updates: Partial<PlannerState>) => void;
  nextStep?: () => void;
  prevStep?: () => void;
  editStep?: (step: StepId) => void;
  onSelectGuided?: () => void;
  onSelectDescribe?: () => void;
}

export function StepModeSelection({ onSelectGuided, onSelectDescribe }: StepProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-light text-foreground tracking-tight">Tell us how you want to travel.</h2>
        <p className="text-muted-foreground text-lg font-light">You don&apos;t need to know where to go. We&apos;ll figure that part out.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        <button 
          onClick={onSelectGuided}
          className="bg-[#1C0A0B]/40 backdrop-blur-xl border border-border p-8 rounded-3xl hover:border-primary transition-all text-left flex flex-col gap-4 group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform font-semibold">
            1
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground mb-2">Step-by-step</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Answer a few simple questions regarding mood, dates, and budget to design your journey.
            </p>
          </div>
        </button>

        <button 
          onClick={onSelectDescribe}
          className="bg-[#1C0A0B]/40 backdrop-blur-xl border border-border p-8 rounded-3xl hover:border-primary transition-all text-left flex flex-col gap-4 group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="text-2xl">✨</span>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground mb-2">Describe it</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              &quot;6 friends, around ₹7,000 each, next weekend, something adventurous near the sea.&quot;
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

const Moods = ["Adventure", "Peace", "Romance", "Nature", "Spiritual", "Fun", "Luxury", "Family Time", "Team Bonding", "Exploration", "Celebration", "Surprise Me"];

export function StepMood({ state, updateState, nextStep, prevStep }: StepProps) {
  const toggleMood = (mood: string) => {
    if (state.moods.includes(mood)) {
      updateState?.({ moods: state.moods.filter(m => m !== mood) });
    } else {
      updateState?.({ moods: [...state.moods, mood] });
    }
  };

  const isValid = state.moods.length > 0 || (state.customMood && state.customMood.trim().length > 0);

  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">How do you want to feel?</h2>
        <p className="text-muted-foreground">Select one or more moods to anchor your experience.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Moods.map(mood => (
          <button
            key={mood}
            onClick={() => toggleMood(mood)}
            className={`p-4 rounded-xl border transition-all text-center ${
              state.moods.includes(mood) 
                ? "border-primary bg-primary/10 text-primary font-medium" 
                : "border-border text-foreground hover:border-primary/50"
            }`}
          >
            {mood}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">Something else (optional)</label>
        <input 
          type="text" 
          value={state.customMood}
          onChange={(e) => updateState?.({ customMood: e.target.value })}
          placeholder="e.g. A digital detox"
          className="w-full bg-transparent border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors text-foreground"
        />
      </div>

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} disabled={!isValid} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90 disabled:opacity-40">
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export function StepBudget({ state, updateState, nextStep, prevStep }: StepProps) {
  const budgetVal = parseInt(state.budgetPerPerson || "0", 10);
  const isValid = !isNaN(budgetVal) && budgetVal >= 1000;

  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">What&apos;s your budget?</h2>
        <p className="text-muted-foreground">Your budget helps us design the right experience without artificial restrictions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="text-sm font-medium text-foreground">Budget per person (₹) *</label>
          <input 
            type="number" 
            value={state.budgetPerPerson}
            onChange={(e) => updateState?.({ budgetPerPerson: e.target.value })}
            placeholder="e.g. 15000"
            className="w-full bg-transparent border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors text-foreground text-2xl"
            min="1000"
          />
        </div>
        <div className="space-y-4">
          <label className="text-sm font-medium text-foreground">Total group budget (Optional)</label>
          <input 
            type="number" 
            value={state.budgetTotal}
            onChange={(e) => updateState?.({ budgetTotal: e.target.value })}
            placeholder="e.g. 60000"
            className="w-full bg-transparent border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors text-foreground text-2xl"
          />
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <label className="text-sm font-medium text-foreground">How strict is this budget?</label>
        <div className="grid md:grid-cols-3 gap-4">
          {["Comfortable", "Prefer to stay within it", "Flexible"].map(mode => (
            <button
              key={mode}
              onClick={() => updateState?.({ budgetMode: mode })}
              className={`p-4 rounded-xl border transition-all text-center ${
                state.budgetMode === mode
                  ? "border-primary bg-primary/10 text-primary font-medium" 
                  : "border-border text-foreground hover:border-primary/50"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} disabled={!isValid} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90 disabled:opacity-40">
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export function StepDates({ state, updateState, nextStep, prevStep }: StepProps) {
  const isDatesValid = state.datesOption !== "Choose dates" || (Boolean(state.startDate) && Boolean(state.endDate));

  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">When are you going?</h2>
        <p className="text-muted-foreground">Select a timeframe or specify exact calendar days.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {["This weekend", "Next weekend", "Flexible", "Choose dates"].map(opt => (
          <button
            key={opt}
            onClick={() => updateState?.({ datesOption: opt })}
            className={`p-4 rounded-xl border transition-all text-center ${
              state.datesOption === opt
                ? "border-primary bg-primary/10 text-primary font-medium" 
                : "border-border text-foreground hover:border-primary/50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {state.datesOption === "Choose dates" && (
        <div className="grid grid-cols-2 gap-4 pt-4 animate-in fade-in slide-in-from-top-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Start Date *</label>
            <input type="date" value={state.startDate} onChange={e => updateState?.({ startDate: e.target.value })} className="w-full bg-transparent border border-border rounded-xl p-4 focus:border-primary text-foreground [color-scheme:dark]" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">End Date *</label>
            <input type="date" value={state.endDate} onChange={e => updateState?.({ endDate: e.target.value })} className="w-full bg-transparent border border-border rounded-xl p-4 focus:border-primary text-foreground [color-scheme:dark]" />
          </div>
        </div>
      )}

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} disabled={!isDatesValid} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90 disabled:opacity-40">
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export function StepGroup({ state, updateState, nextStep, prevStep }: StepProps) {
  const count = parseInt(state.numTravellers || "0", 10);
  const isValid = !isNaN(count) && count >= 1;

  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">Who is travelling?</h2>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-foreground">Number of travellers *</label>
        <input 
          type="number" 
          value={state.numTravellers}
          onChange={(e) => updateState?.({ numTravellers: e.target.value })}
          className="w-full max-w-xs bg-transparent border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors text-foreground text-2xl"
          min="1"
        />
      </div>

      <div className="space-y-4 pt-4">
        <label className="text-sm font-medium text-foreground">Traveller type</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Friends", "Family", "Couple", "Women", "Men", "Office / Corporate", "Other"].map(type => (
            <button
              key={type}
              onClick={() => updateState?.({ groupType: type })}
              className={`p-4 rounded-xl border transition-all text-center ${
                state.groupType === type
                  ? "border-primary bg-primary/10 text-primary font-medium" 
                  : "border-border text-foreground hover:border-primary/50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} disabled={!isValid} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90 disabled:opacity-40">
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export function StepOrigin({ state, updateState, nextStep, prevStep }: StepProps) {
  const isValid = Boolean(state.origin && state.origin.trim().length > 0);

  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">Where are you travelling from?</h2>
        <p className="text-muted-foreground">This helps us calculate travel time and logistics accurately.</p>
      </div>

      <div className="space-y-4">
        <input 
          type="text" 
          value={state.origin}
          onChange={(e) => updateState?.({ origin: e.target.value })}
          placeholder="e.g. Mumbai, Pune, Nagpur"
          className="w-full bg-transparent border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors text-foreground text-2xl"
        />
      </div>

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} disabled={!isValid} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90 disabled:opacity-40">
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

const Prefs = ["Beach", "Mountains", "Nature", "Water sports", "Food", "Nightlife", "Spiritual places", "Luxury stay", "Budget stay", "Relaxed itinerary", "Packed itinerary", "Photography", "Adventure activities"];

export function StepPreferences({ state, updateState, nextStep, prevStep }: StepProps) {
  const togglePref = (pref: string) => {
    if (state.preferences.includes(pref)) {
      updateState?.({ preferences: state.preferences.filter(p => p !== pref) });
    } else {
      updateState?.({ preferences: [...state.preferences, pref] });
    }
  };

  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">Any specific preferences?</h2>
        <p className="text-muted-foreground">Optional details to help refine accommodation and activities.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {Prefs.map(pref => (
          <button
            key={pref}
            onClick={() => togglePref(pref)}
            className={`px-4 py-2 rounded-full border transition-all ${
              state.preferences.includes(pref) 
                ? "border-primary bg-primary/10 text-primary font-medium" 
                : "border-border text-foreground hover:border-primary/50"
            }`}
          >
            {pref}
          </button>
        ))}
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">Other preferences (optional)</label>
        <input 
          type="text" 
          value={state.customPreference}
          onChange={(e) => updateState?.({ customPreference: e.target.value })}
          placeholder="e.g. Vegetarian meals only, balcony rooms"
          className="w-full bg-transparent border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors text-foreground"
        />
      </div>

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90">Next <ArrowRight className="ml-2 w-4 h-4" /></Button>
      </div>
    </div>
  );
}

export function StepSharing({ state, updateState, nextStep, prevStep }: StepProps) {
  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">Trip Privacy</h2>
        <p className="text-muted-foreground">Do you prefer complete exclusivity or are you open to curated group sharing?</p>
      </div>

      <div className="grid gap-4 max-w-lg">
        {[
          { id: "Private trip only", desc: "Exclusive experience for your group." },
          { id: "Open to a shared trip", desc: "Join other like-minded travellers for cost sharing." },
          { id: "Let RaO decide", desc: "We'll suggest what works best for this specific plan." }
        ].map(opt => (
          <button
            key={opt.id}
            onClick={() => updateState?.({ sharingOption: opt.id })}
            className={`p-6 rounded-xl border transition-all text-left flex flex-col gap-1 ${
              state.sharingOption === opt.id
                ? "border-primary bg-primary/10" 
                : "border-border hover:border-primary/50"
            }`}
          >
            <span className={`font-medium ${state.sharingOption === opt.id ? "text-primary" : "text-foreground"}`}>{opt.id}</span>
            <span className="text-sm text-muted-foreground">{opt.desc}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90">Review <ArrowRight className="ml-2 w-4 h-4" /></Button>
      </div>
    </div>
  );
}

export function StepReview({ state, nextStep, prevStep, editStep }: StepProps) {
  const SummaryRow = ({ label, value, stepId }: { label: string, value: string, stepId: StepId }) => (
    <div className="flex justify-between py-4 border-b border-border/30 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex items-center gap-4">
        <span className="text-foreground font-medium text-right max-w-[200px] md:max-w-md">{value}</span>
        <button onClick={() => editStep?.(stepId)} className="text-primary text-sm hover:underline">Edit</button>
      </div>
    </div>
  );

  const formatMoods = () => {
    const all = [...state.moods];
    if (state.customMood) all.push(state.customMood);
    return all.join(", ") || "Flexible";
  };

  const formatPrefs = () => {
    const all = [...state.preferences];
    if (state.customPreference) all.push(state.customPreference);
    return all.join(", ") || "Standard curated";
  };

  return (
    <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-light text-foreground">Review your request</h2>
        <p className="text-muted-foreground">Make sure everything looks right before we generate your proposal.</p>
      </div>

      <div className="bg-[#1C0A0B]/50 rounded-2xl p-6 border border-border">
        <SummaryRow label="Mood" value={formatMoods()} stepId="mood" />
        <SummaryRow label="Budget" value={`₹${state.budgetPerPerson || "12000"} / person (${state.budgetMode})`} stepId="budget" />
        <SummaryRow label="Dates" value={state.datesOption === "Choose dates" && state.startDate ? `${state.startDate} to ${state.endDate}` : state.datesOption} stepId="dates" />
        <SummaryRow label="Travellers" value={`${state.numTravellers} (${state.groupType})`} stepId="group" />
        <SummaryRow label="Origin" value={state.origin} stepId="origin" />
        {state.destinationContext && (
          <SummaryRow label="Destination Context" value={state.destinationContext} stepId="origin" />
        )}
        <SummaryRow label="Preferences" value={formatPrefs()} stepId="preferences" />
        <SummaryRow label="Privacy" value={state.sharingOption} stepId="sharing" />
      </div>

      <div className="flex justify-between pt-6 border-t border-border/50">
        <Button variant="ghost" onClick={prevStep} className="text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
        <Button onClick={nextStep} className="rounded-full px-8 bg-primary text-background hover:bg-primary/90 font-medium">
          Create My Trip Plan <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
