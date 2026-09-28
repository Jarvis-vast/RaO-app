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
  preferences: string[];
  customPreference: string;
  sharingOption: string; // "Open to a shared trip", "Private trip only", "Let RaO decide"
}

export const initialPlannerState: PlannerState = {
  mode: null,
  describeText: "",
  moods: [],
  customMood: "",
  budgetPerPerson: "",
  budgetTotal: "",
  budgetMode: "Flexible",
  datesOption: "Flexible",
  startDate: "",
  endDate: "",
  numTravellers: "2",
  groupType: "Couple",
  origin: "Mumbai",
  preferences: [],
  customPreference: "",
  sharingOption: "Private trip only",
};
