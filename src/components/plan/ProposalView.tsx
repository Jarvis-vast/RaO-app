"use client";

import { PlannerState } from "./types";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Calendar, Users, Activity, Check, MessageSquare, ArrowRight, X, AlertCircle, Bookmark, Share2 } from "lucide-react";
import { useState, useMemo } from "react";
import { ProposalResolver } from "@/lib/services/ProposalResolver";
import { useTripPlanner } from "@/context/TripPlannerContext";

interface ChatMessage {
  sender: "rao" | "user";
  text: string;
}

export function ProposalView({
  state,
  updateState,
}: {
  state: PlannerState;
  updateState?: (updates: Partial<PlannerState>) => void;
}) {
  const { saveCurrentTrip, getShareableLink, savedTrips } = useTripPlanner();
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [hotelTier, setHotelTier] = useState<"standard" | "deluxe" | "luxury">("deluxe");

  // Deterministically resolve the tailored proposal for this state
  const rawResolved = useMemo(() => {
    return ProposalResolver.resolve(state);
  }, [state]);

  const tierMultiplier = hotelTier === "standard" ? 0.85 : hotelTier === "luxury" ? 1.35 : 1.0;
  const proposal = rawResolved.proposal;
  const customWhyItFits = rawResolved.customWhyItFits;
  const estimatedCostPerPerson = Math.round(rawResolved.estimatedCostPerPerson * tierMultiplier);
  const estimatedTotalCost = estimatedCostPerPerson * (parseInt(state.numTravellers || "2", 10) || 2);

  const handleSaveTrip = () => {
    saveCurrentTrip();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleCopyLink = () => {
    const link = getShareableLink();
    if (navigator.clipboard && link) {
      navigator.clipboard.writeText(link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  // Chat conversation state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "rao",
      text: `Hello! I've curated "${proposal.title}" based on your mood and budget. How does this look to you?`,
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Lead Request Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    requestId: string;
    whatsappUrl: string;
  } | null>(null);

  const handleModify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = chatInput.trim();
    if (!clean) return;

    // Append user message
    const newMessages: ChatMessage[] = [...messages, { sender: "user", text: clean }];
    setMessages(newMessages);
    setChatInput("");
    setIsUpdating(true);

    // Save modification note into planner state
    const currentNotes = state.modificationNotes || [];
    const updatedNotes = [...currentNotes, clean];
    updateState?.({ modificationNotes: updatedNotes });

    setTimeout(() => {
      setIsUpdating(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "rao",
          text: `Noted: "${clean}". I have recorded this preference in your trip itinerary. Our travel designer will incorporate it when finalizing availability!`,
        },
      ]);
    }, 600);
  };

  const handleQuickChip = (chipText: string) => {
    setChatInput(chipText);
  };

  const handleOpenModal = () => {
    setErrorMsg("");
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!customerName.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone/WhatsApp number.");
      return;
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/trips/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          phone,
          email: email || undefined,
          specialRequests: specialRequests || undefined,
          moods: state.moods,
          budgetPerPerson: state.budgetPerPerson || String(estimatedCostPerPerson),
          budgetMode: state.budgetMode,
          datesOption: state.datesOption,
          startDate: state.startDate,
          endDate: state.endDate,
          groupType: state.groupType,
          numTravellers: state.numTravellers,
          origin: state.origin,
          destinationContext: state.destinationContext || proposal.primaryDestination,
          preferences: state.preferences,
          sharingOption: state.sharingOption,
          proposalId: proposal.id,
          proposalTitle: proposal.title,
          estimatedTotal: estimatedTotalCost,
          modificationNotes: state.modificationNotes || [],
          rawUserInput: state.rawUserInput,
          source: state.mode === "describe" ? "DESCRIBE_IT" : "PLANNER_WIZARD",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit trip request.");
      }

      setSubmissionSuccess({
        requestId: data.requestId,
        whatsappUrl: data.whatsappUrl,
      });
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start relative">
      {/* Proposal Details Card */}
      <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-8 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-3 border border-primary/20">
              <Check className="w-3.5 h-3.5" /> Tailored Proposal Ready
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-1 tracking-tight">{proposal.title}</h2>
            <p className="text-base md:text-lg text-primary/90 font-medium">{proposal.subtitle}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleSaveTrip}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-foreground transition-all"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "text-emerald-400 fill-emerald-400" : "text-primary"}`} />
              <span>{isSaved ? "Trip Saved!" : "Save Trip"}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-foreground transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-primary" />
              <span>{copiedLink ? "Link Copied!" : "Share Trip"}</span>
            </button>
          </div>
        </div>

        {/* Accommodation Tier Selector */}
        <div className="bg-black/20 border border-white/10 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground uppercase font-medium tracking-wider">Stay & Experience Tier</p>
            <span className="text-xs text-primary font-mono">Dynamic Price Recalculation</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "standard", label: "Boutique Standard", desc: "Handpicked 3-4★ stays" },
              { id: "deluxe", label: "Heritage Deluxe", desc: "Curated 4-5★ estates" },
              { id: "luxury", label: "Ultra Luxury Villa", desc: "Private 5★ pool resorts" },
            ].map((tier) => (
              <button
                key={tier.id}
                onClick={() => setHotelTier(tier.id as any)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  hotelTier === tier.id
                    ? "bg-primary/20 border-primary text-foreground shadow-md"
                    : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                }`}
              >
                <p className="text-xs font-semibold">{tier.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{tier.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Trip Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-primary" /> Dates
            </div>
            <p className="font-medium text-foreground text-sm">
              {state.datesOption === "Choose dates" && state.startDate
                ? `${state.startDate}`
                : state.datesOption || "Flexible"}
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-primary" /> Travellers
            </div>
            <p className="font-medium text-foreground text-sm">
              {state.numTravellers || "2"} ({state.groupType || "Couple"})
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-primary" /> Mood
            </div>
            <p className="font-medium text-foreground text-sm">
              {state.moods.length ? state.moods.slice(0, 2).join(" & ") : proposal.matchingMoods.slice(0, 2).join(" & ")}
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Origin
            </div>
            <p className="font-medium text-foreground text-sm">{state.origin || "Mumbai"}</p>
          </div>
        </div>

        {/* Why It Fits */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium text-foreground">Why this fits your journey</h3>
          <p className="text-muted-foreground leading-relaxed text-sm font-light">{customWhyItFits}</p>
        </div>

        {/* Experience Highlights */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium text-foreground">Curated Highlights</h3>
          <ul className="space-y-2.5">
            {proposal.highlights.map((highlight, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-foreground/80 font-light">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modifications Recorded */}
        {state.modificationNotes && state.modificationNotes.length > 0 && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <p className="text-xs uppercase tracking-wider text-primary font-medium">Your Custom Preferences Attached:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {state.modificationNotes.map((note, idx) => (
                <li key={idx}>• &quot;{note}&quot;</li>
              ))}
            </ul>
          </div>
        )}

        {/* Estimated Price & Primary Action */}
        <div className="bg-[#1C0A0B]/90 rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Estimated Complete Package</p>
            <h4 className="text-3xl font-semibold text-foreground tracking-tight">₹{estimatedTotalCost.toLocaleString()}</h4>
            <p className="text-xs text-primary mt-1 font-medium">
              ≈ ₹{estimatedCostPerPerson.toLocaleString()} per traveller • All-inclusive estimate
            </p>
          </div>
          <Button
            onClick={handleOpenModal}
            size="lg"
            className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-accent transition-colors font-medium shadow-lg hover:shadow-primary/20"
          >
            Request This Trip <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Interactive Trip Modification Drawer/Chat */}
      <div className="bg-[#1C0A0B]/90 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col h-[600px] sticky top-28 shadow-2xl">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            <h3 className="font-medium text-foreground text-base">Personalize Itinerary</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-light">
            Ask for modifications. Everything you say is attached to your trip request.
          </p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3 text-sm">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-2xl max-w-[85%] text-xs leading-relaxed font-light ${
                msg.sender === "user"
                  ? "bg-primary text-primary-foreground ml-auto rounded-tr-sm"
                  : "bg-white/5 border border-white/10 text-foreground rounded-tl-sm"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isUpdating && (
            <div className="flex items-center gap-2 text-xs text-primary p-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Recording your preference...
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 border-t border-white/5 flex flex-wrap gap-1.5 bg-black/20">
          <button
            onClick={() => handleQuickChip("Upgrade to a luxury pool villa")}
            className="text-[11px] border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 px-2.5 py-1 rounded-full transition-colors"
          >
            Upgrade hotel
          </button>
          <button
            onClick={() => handleQuickChip("Keep itinerary light and relaxed")}
            className="text-[11px] border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 px-2.5 py-1 rounded-full transition-colors"
          >
            More relaxed
          </button>
          <button
            onClick={() => handleQuickChip("Extend by one additional day")}
            className="text-[11px] border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 px-2.5 py-1 rounded-full transition-colors"
          >
            +1 Day
          </button>
        </div>

        {/* Message Input */}
        <form onSubmit={handleModify} className="p-3 border-t border-white/10 bg-black/30 rounded-b-3xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="e.g. Prefer veg meals, private car..."
              className="w-full bg-black/40 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-xs text-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <button
              type="submit"
              disabled={!chatInput.trim() || isUpdating}
              className="absolute right-1.5 p-1.5 bg-primary text-primary-foreground rounded-full disabled:opacity-40 hover:bg-accent transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>

      {/* Request This Trip Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1C0A0B] border border-white/15 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl text-foreground space-y-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submissionSuccess ? (
              <>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">Ready to journey</span>
                  <h3 className="text-2xl font-light tracking-tight">Request Your {proposal.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Our travel designer will review your choices, check live partner availability, and contact you with a confirmed quotation.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground font-medium">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rohan Mehta"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground font-medium">WhatsApp / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98200 12345"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground font-medium">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground font-medium">Special Requests or Occasion</label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Anniversary celebration, elderly traveller support, specific diet..."
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary/50 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-accent py-6 text-sm font-medium transition-colors"
                    >
                      {submitting ? "Securing Your Request..." : "Submit Trip Request"}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="space-y-6 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-foreground">Request Received!</h3>
                  <p className="text-xs text-primary font-mono tracking-wider font-semibold">
                    REFERENCE: {submissionSuccess.requestId}
                  </p>
                  <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed pt-2">
                    Your itinerary is logged with our travel team. We typically respond within 2 to 4 hours with finalized dates and availability.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <a
                    href={submissionSuccess.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full rounded-full bg-[#25D366] text-black font-medium py-3 px-6 text-sm hover:bg-[#20ba59] transition-colors gap-2 shadow-lg"
                  >
                    <span>Message Travel Designer on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Button
                    variant="ghost"
                    onClick={() => setIsModalOpen(false)}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Close Window
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
