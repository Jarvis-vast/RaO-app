import { PROPOSAL_CATALOG } from "./ProposalCatalog";
import { ProposalPackage } from "../types/proposal";
import { PlannerState } from "@/components/plan/types";

export class ProposalResolver {
  /**
   * Deterministically resolves the best matching proposal from planner state.
   */
  static resolve(state: PlannerState): {
    proposal: ProposalPackage;
    customWhyItFits: string;
    estimatedCostPerPerson: number;
    estimatedTotalCost: number;
  } {
    const selectedMoods = state.moods || [];
    const destinationContext = (state.destinationContext || "").toLowerCase();
    const budgetNum = parseInt(state.budgetPerPerson || "15000", 10) || 15000;
    const travellersNum = parseInt(state.numTravellers || "2", 10) || 2;

    let bestScore = -1;
    let selectedPackage = PROPOSAL_CATALOG[0];

    for (const pkg of PROPOSAL_CATALOG) {
      let score = 0;

      // 1. Direct destination context match (+50 points)
      if (destinationContext) {
        if (
          pkg.primaryDestination.toLowerCase().includes(destinationContext) ||
          pkg.subtitle.toLowerCase().includes(destinationContext) ||
          pkg.state.toLowerCase().includes(destinationContext)
        ) {
          score += 50;
        }
      }

      // 2. Mood matches (+15 points per matched mood)
      for (const mood of selectedMoods) {
        if (pkg.matchingMoods.some((m) => m.toLowerCase() === mood.toLowerCase())) {
          score += 15;
        }
      }

      // 3. Keyword heuristic on customMood or rawUserInput
      const fullText = `${state.customMood || ""} ${state.rawUserInput || ""} ${state.describeText || ""}`.toLowerCase();
      if (fullText.includes("ujjain") || fullText.includes("mahakal") || fullText.includes("bhasma") || fullText.includes("temple") || fullText.includes("jyotirlinga")) {
        if (pkg.id === "ujjain-temple-escape") score += 40;
      }
      if (fullText.includes("varanasi") || fullText.includes("kashi") || fullText.includes("ganga") || fullText.includes("ghat") || fullText.includes("sarnath")) {
        if (pkg.id === "varanasi-sacred-ghats") score += 40;
      }
      if (fullText.includes("kerala") || fullText.includes("houseboat") || fullText.includes("munnar") || fullText.includes("backwater") || fullText.includes("ayurveda")) {
        if (pkg.id === "kerala-backwater-sanctuary") score += 40;
      }
      if (fullText.includes("kashmir") || fullText.includes("gulmarg") || fullText.includes("srinagar") || fullText.includes("snow") || fullText.includes("gondola")) {
        if (pkg.id === "kashmir-alpine-odyssey") score += 40;
      }
      if (fullText.includes("beach") || fullText.includes("sea") || fullText.includes("coast") || fullText.includes("scuba")) {
        if (pkg.id === "coastal-escape") score += 25;
      }
      if (fullText.includes("mountain") || fullText.includes("hill") || fullText.includes("valley")) {
        if (pkg.id === "mountain-sanctuary") score += 25;
      }
      if (fullText.includes("wine") || fullText.includes("vineyard") || fullText.includes("nashik")) {
        if (pkg.id === "vineyard-retreat") score += 25;
      }
      if (fullText.includes("tiger") || fullText.includes("safari") || fullText.includes("jungle") || fullText.includes("tadoba")) {
        if (pkg.id === "wildlife-expedition") score += 25;
      }

      // 4. Budget fit
      if (budgetNum >= pkg.minBudget) {
        score += 10;
      } else {
        score -= 15;
      }

      if (score > bestScore) {
        bestScore = score;
        selectedPackage = pkg;
      }
    }

    // Dynamic "Why it fits" tailored with the traveller's exact inputs
    const originText = state.origin ? ` originating comfortably from ${state.origin}` : "";
    const groupText = state.groupType ? ` for your ${state.groupType.toLowerCase()} of ${travellersNum}` : "";
    const moodListText = selectedMoods.length ? selectedMoods.join(" & ") : "relaxation";

    const customWhyItFits = `${selectedPackage.whyItFitsTemplate} Perfectly tailored for ${moodListText}${groupText}${originText}, keeping well within your planned target of ₹${budgetNum.toLocaleString()} per person.`;

    // Pricing calculation
    const estimatedCostPerPerson = Math.max(
      selectedPackage.basePricePerPerson,
      Math.min(budgetNum, Math.round(selectedPackage.basePricePerPerson * 1.4))
    );
    const estimatedTotalCost = estimatedCostPerPerson * travellersNum;

    return {
      proposal: selectedPackage,
      customWhyItFits,
      estimatedCostPerPerson,
      estimatedTotalCost,
    };
  }
}
