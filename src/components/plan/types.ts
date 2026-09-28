export type PlannerMode = "guided" | "describe" | null;

export interface PlannerState {
  mode: PlannerMode;
  describeText: string;
  moods: string[];
  customMood: string;
  budgetPerPerson: string;
  budgetTotal: string;
  budgetMode: string; // "Comfortable", "Prefer to stay within it", "Flexible"
  datesOption: string; // "This weekend", "Next weekend", "Flexible", "Choose dates"
  startDate: string;
  endDate: string;
  numTravellers: string;
  groupType: string;
  origin: string;
  destinationContext?: string;
  preferences: string[];
  customPreference: string;
  sharingOption: string; // "Open to a shared trip", "Private trip only", "Let RaO decide"
  rawUserInput?: string;
  modificationNotes?: string[];
  specialRequests?: string;
  selectedProposalId?: string;
}

export const initialPlannerState: PlannerState = {
  mode: null,
  describeText: "",
  moods: [],
  customMood: "",
  budgetPerPerson: "12000",
  budgetTotal: "",
  budgetMode: "Flexible",
  datesOption: "Upcoming Weekend",
  startDate: "",
  endDate: "",
  numTravellers: "2",
  groupType: "Couple",
  origin: "Mumbai",
  destinationContext: "",
  preferences: [],
  customPreference: "",
  sharingOption: "Private trip only",
  rawUserInput: "",
  modificationNotes: [],
  specialRequests: "",
  selectedProposalId: "",
};
