import { z } from 'zod';

export const CustomerRequestSchema = z.object({
  rawInput: z.string(),
  mode: z.enum(["guided", "describe"]),
});

export const ExtractedIntentSchema = z.object({
  moods: z.array(z.string()),
  budgetPerPerson: z.number().nullable(),
  durationDays: z.number().nullable(),
  groupSize: z.number().nullable(),
  groupType: z.string().nullable(),
  origin: z.string().nullable(),
  preferences: z.array(z.string()),
});

export const DestinationCandidateSchema = z.object({
  destinationId: z.string(),
  name: z.string(),
  matchScore: z.number().min(0).max(100),
  rationale: z.string(), // AI must separate verified facts from recommendations
  warnings: z.array(z.string()),
});

export const ItineraryDraftSchema = z.object({
  title: z.string(),
  overview: z.string(),
  days: z.array(z.object({
    dayIndex: z.number(),
    theme: z.string(),
    items: z.array(z.object({
      type: z.enum(["ACCOMMODATION", "TRANSPORT", "ACTIVITY", "MEAL", "NOTE"]),
      title: z.string(),
      description: z.string(),
      estimatedCost: z.number().optional(),
    }))
  }))
});
