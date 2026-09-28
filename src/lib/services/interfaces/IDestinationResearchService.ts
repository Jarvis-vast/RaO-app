// IDestinationResearchService.ts
export interface IDestinationResearchService {
  evaluateSuitability(destinationId: string, constraints: any): Promise<any>;
  findCandidates(mood: string[], constraints: any): Promise<string[]>;
}
