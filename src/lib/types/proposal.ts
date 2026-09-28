export interface ProposalExperience {
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ProposalPackage {
  id: string;
  title: string;
  subtitle: string;
  primaryDestination: string;
  state: string;
  bestFor: string;
  matchingMoods: string[];
  minBudget: number;
  typicalDuration: string;
  whyItFitsTemplate: string;
  highlights: string[];
  experiences: ProposalExperience[];
  basePricePerPerson: number;
  heroImage?: string;
}
