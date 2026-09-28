"use client";

import { PlannerState } from "./types";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Calendar, Users, Activity, Check, X } from "lucide-react";
import { useState } from "react";

export function ProposalView({ state }: { state: PlannerState }) {
  const [chatInput, setChatInput] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleModify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setIsUpdating(true);
    setChatInput("");
    
    // Mocking an update
    setTimeout(() => {
      setIsUpdating(false);
    }, 2000);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start">
      {/* Proposal Details */}
      <div className="bg-[#1C0A0B]/60 backdrop-blur-xl border border-border p-8 rounded-3xl space-y-8 relative overflow-hidden">
        
        {isUpdating && (
          <div className="absolute inset-0 bg-[#1C0A0B]/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
            <h3 className="text-xl text-primary font-medium">Revising Proposal...</h3>
            <p className="text-muted-foreground">Adjusting based on your feedback.</p>
          </div>
        )}

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Check className="w-4 h-4" /> Proposal Ready
          </div>
          <h2 className="text-4xl font-light text-foreground mb-2">The Coastal Reset</h2>
          <p className="text-xl text-muted-foreground">Tarkarli, Maharashtra</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border/50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground text-sm"><Calendar className="w-4 h-4" /> Dates</div>
            <p className="font-medium text-foreground">{state.datesOption === "Choose dates" ? `${state.startDate}` : state.datesOption}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground text-sm"><Users className="w-4 h-4" /> Travellers</div>
            <p className="font-medium text-foreground">{state.numTravellers} {state.groupType}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground text-sm"><Activity className="w-4 h-4" /> Mood</div>
            <p className="font-medium text-foreground">Peace & Adventure</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground text-sm"><MapPin className="w-4 h-4" /> Origin</div>
            <p className="font-medium text-foreground">{state.origin}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-light text-foreground">Why it fits</h3>
          <p className="text-muted-foreground leading-relaxed">
            Tarkarli offers the perfect blend of pristine, quiet beaches (Peace) and scuba diving/water sports (Adventure). It perfectly fits your budget of ₹{state.budgetPerPerson} per person while providing a premium seaside stay.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-light text-foreground">Experience Highlights</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-muted-foreground"><Check className="w-5 h-5 text-primary shrink-0" /> Premium beachfront cottage stay at Malvan Coast.</li>
            <li className="flex gap-3 text-muted-foreground"><Check className="w-5 h-5 text-primary shrink-0" /> Private scuba diving session at Sindhudurg Fort.</li>
            <li className="flex gap-3 text-muted-foreground"><Check className="w-5 h-5 text-primary shrink-0" /> Authentic Konkani seafood dinner curated by a local chef.</li>
          </ul>
        </div>

        <div className="bg-[#1C0A0B]/50 rounded-2xl p-6 border border-border">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-muted-foreground mb-1">Estimated Total Price</p>
              <h4 className="text-3xl font-medium text-foreground">₹{(parseInt(state.budgetPerPerson || "15000") * parseInt(state.numTravellers || "2")).toLocaleString()}</h4>
              <p className="text-sm text-primary mt-1">₹{state.budgetPerPerson} per person</p>
            </div>
            <Button className="rounded-full px-8 bg-primary text-background hover:bg-primary/90">Request This Trip</Button>
          </div>
        </div>
      </div>

      {/* Chat Modification Interface */}
      <div className="bg-[#1C0A0B]/80 backdrop-blur-2xl border border-border rounded-3xl flex flex-col h-[600px] sticky top-24 shadow-2xl">
        <div className="p-6 border-b border-border/50">
          <h3 className="font-medium text-foreground text-lg">Modify Trip</h3>
          <p className="text-sm text-muted-foreground">Chat with your RaO planner to adjust details.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-[#FAF7F4]/5 border border-border/50 rounded-2xl p-4 rounded-tl-sm w-[85%]">
            <p className="text-sm text-foreground">Here is your tailored proposal for Tarkarli. How does this look?</p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-4">
            <button onClick={() => setChatInput("Make the hotel more premium.")} className="text-xs border border-border/50 bg-[#1C0A0B] text-muted-foreground hover:text-primary hover:border-primary px-3 py-1.5 rounded-full transition-colors">
              Make hotel premium
            </button>
            <button onClick={() => setChatInput("Can we reduce the activities?")} className="text-xs border border-border/50 bg-[#1C0A0B] text-muted-foreground hover:text-primary hover:border-primary px-3 py-1.5 rounded-full transition-colors">
              Reduce activities
            </button>
            <button onClick={() => setChatInput("Add one more night.")} className="text-xs border border-border/50 bg-[#1C0A0B] text-muted-foreground hover:text-primary hover:border-primary px-3 py-1.5 rounded-full transition-colors">
              Add one night
            </button>
          </div>
        </div>

        <form onSubmit={handleModify} className="p-4 border-t border-border/50 bg-[#1C0A0B]/50 rounded-b-3xl">
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              placeholder="e.g. Make this more relaxed..."
              className="w-full bg-transparent border border-border rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-primary transition-colors text-foreground text-sm"
              disabled={isUpdating}
            />
            <button 
              type="submit" 
              disabled={!chatInput.trim() || isUpdating}
              className="absolute right-2 p-2 bg-primary text-background rounded-full disabled:opacity-50 hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
