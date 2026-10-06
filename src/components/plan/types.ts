export type PlannerMode = "guided" | "describe" | null;
export type PlannerStep = "intake" | "details" | "summary" | "submitted";
export type StepId = 
  | PlannerStep
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

export interface PlannerState {
  // Phase 2 Intake Fields
  rawIdea: string;
  knowDestination: "yes" | "no";
  destination: string;
  journeyType: "One day" | "Weekend" | "Multi-day" | "Flexible";
  datesOption: "Specific dates" | "Upcoming weekend" | "Next weekend" | "Flexible" | string;
  startDate: string;
  endDate: string;
  isFlexibleDates: boolean;
  groupType: "Couple" | "Family" | "Friends" | "Private group" | "Women-only" | "Corporate" | "Other" | string;
  numTravellers: string;
  budgetType: "per_person" | "total" | "flexible";
  budgetValue: string;
  travelMode: "Road" | "Rail" | "Air" | "Recommend for me";
  origin: string;
  specialRequests: string;

  // Backward Compatibility Fields for Context & Legacy Components
  mode?: PlannerMode;
  describeText?: string;
  moods: string[];
  customMood?: string;
  budgetPerPerson?: string;
  budgetTotal?: string;
  budgetMode?: string;
  destinationContext?: string;
  preferences: string[];
  customPreference?: string;
  sharingOption: string;
  rawUserInput?: string;
  modificationNotes?: string[];
  selectedProposalId?: string;
}

export const initialPlannerState: PlannerState = {
  rawIdea: "",
  knowDestination: "no",
  destination: "",
  journeyType: "Flexible",
  datesOption: "Flexible",
  startDate: "",
  endDate: "",
  isFlexibleDates: true,
  groupType: "Private group",
  numTravellers: "2",
  budgetType: "flexible",
  budgetValue: "",
  travelMode: "Recommend for me",
  origin: "Mumbai",
  specialRequests: "",

  // Legacy field defaults
  mode: null,
  describeText: "",
  moods: [],
  customMood: "",
  budgetPerPerson: "12000",
  budgetTotal: "",
  budgetMode: "Flexible",
  destinationContext: "",
  preferences: [],
  customPreference: "",
  sharingOption: "Private trip only",
  rawUserInput: "",
  modificationNotes: [],
  selectedProposalId: "",
};
