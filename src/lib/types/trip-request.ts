export type TripRequestStatus = 
  | "NEW" 
  | "REVIEWING" 
  | "PROPOSAL_READY" 
  | "CONTACTED" 
  | "BOOKED" 
  | "CANCELLED";

export interface TripRequest {
  requestId: string;
  createdAt: string;
  customerName: string;
  phone: string;
  email?: string;
  moods: string[];
  budgetPerPerson: string;
  budgetMode?: string;
  datesOption: string;
  startDate?: string;
  endDate?: string;
  groupType: string;
  numTravellers: string;
  origin: string;
  destinationContext?: string;
  preferences: string[];
  sharingOption: string;
  proposalId?: string;
  proposalTitle?: string;
  estimatedTotal?: number;
  modificationNotes?: string[];
  specialRequests?: string;
  rawUserInput?: string;
  source: "PLANNER_WIZARD" | "DESCRIBE_IT" | "DIRECT_EXPERIENCE" | "CONTACT_PAGE" | string;
  status: TripRequestStatus;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  landingPage?: string;
  referrer?: string;
}

export interface CreateTripRequestInput {
  customerName: string;
  phone: string;
  email?: string;
  moods: string[];
  budgetPerPerson: string;
  budgetMode?: string;
  datesOption: string;
  startDate?: string;
  endDate?: string;
  groupType: string;
  numTravellers: string;
  origin: string;
  destinationContext?: string;
  preferences: string[];
  sharingOption: string;
  proposalId?: string;
  proposalTitle?: string;
  estimatedTotal?: number;
  modificationNotes?: string[];
  specialRequests?: string;
  rawUserInput?: string;
  source?: "PLANNER_WIZARD" | "DESCRIBE_IT" | "DIRECT_EXPERIENCE" | "CONTACT_PAGE" | string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  landingPage?: string;
  referrer?: string;
}
