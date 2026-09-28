// IPricingService.ts
export interface CostBreakdown {
  transportCost: number;
  accommodationCost: number;
  mealCost: number;
  activityCost: number;
  sightseeingCost: number;
  localCost: number;
  contingency: number;
  operatingCost: number;
  internalCost: number;
  margin: number;
  taxes: number;
  sellingPrice: number;
}

export interface IPricingService {
  calculateTripCost(itineraryId: string): Promise<CostBreakdown>;
  generateQuotation(proposalId: string): Promise<any>;
}
