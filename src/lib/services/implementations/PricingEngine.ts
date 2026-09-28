import { CostBreakdown, IPricingService } from "../interfaces/IPricingService";

export class PricingEngine implements IPricingService {
  private marginPercentage: number;
  private taxPercentage: number;

  constructor(config: { marginPercentage: number; taxPercentage: number }) {
    this.marginPercentage = config.marginPercentage;
    this.taxPercentage = config.taxPercentage;
  }

  async calculateTripCost(itineraryId: string): Promise<CostBreakdown> {
    // In production, this fetches items from the database via itineraryId
    const baseCosts = {
      transportCost: 4000,
      accommodationCost: 12000,
      mealCost: 6000,
      activityCost: 3000,
      sightseeingCost: 1000,
      localCost: 500,
    };

    const contingency = 0.05 * Object.values(baseCosts).reduce((a, b) => a + b, 0);
    const operatingCost = 500; // Fixed operational overhead
    
    const internalCost = Object.values(baseCosts).reduce((a, b) => a + b, 0) + contingency + operatingCost;
    
    const margin = internalCost * (this.marginPercentage / 100);
    const preTaxPrice = internalCost + margin;
    const taxes = preTaxPrice * (this.taxPercentage / 100);
    
    const sellingPrice = preTaxPrice + taxes;

    return {
      ...baseCosts,
      contingency,
      operatingCost,
      internalCost,
      margin,
      taxes,
      sellingPrice
    };
  }

  async generateQuotation(proposalId: string): Promise<any> {
    // Generate an official quote document structure
    return {
      proposalId,
      status: "GENERATED"
    };
  }
}
