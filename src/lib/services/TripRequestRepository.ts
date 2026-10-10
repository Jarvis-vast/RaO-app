import { getPrismaClient } from "../prisma";
import { TripRequest, CreateTripRequestInput, TripRequestStatus } from "../types/trip-request";
import crypto from "crypto";

// Collision-resistant request ID generator for concurrent safety
function generateRequestId(): string {
  const timestamp = Date.now().toString().slice(-6);
  const randomHex = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `RAO-REQ-${timestamp}-${randomHex}`;
}

// Development-only demo store (used ONLY when explicitly enabled in local dev)
let devDemoStore: TripRequest[] = [
  {
    requestId: "RAO-REQ-1001-DEMO",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    customerName: "Sarah Jenkins (Demo)",
    phone: "+91 98200 11223",
    email: "sarah.j@example.com",
    moods: ["Romance", "Luxury"],
    budgetPerPerson: "25000",
    budgetMode: "Flexible",
    datesOption: "Upcoming Long Weekend",
    groupType: "Couple",
    numTravellers: "2",
    origin: "Mumbai",
    destinationContext: "Nashik",
    preferences: ["Boutique Stays", "Private Dining"],
    sharingOption: "Private trip only",
    proposalId: "vineyard-retreat",
    proposalTitle: "Vineyard Sanctuary",
    estimatedTotal: 50000,
    modificationNotes: ["Prefers villa with valley view"],
    source: "PLANNER_WIZARD",
    status: "NEW",
  },
];

function isLocalDevFallbackAllowed(): boolean {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.ENABLE_LOCAL_DEMO_FALLBACK === "true"
  );
}

export class TripRequestRepository {
  /**
   * Fetches all customer trip requests from PostgreSQL via Prisma 7.
   * Fails closed if database connection is unavailable in production.
   */
  static async getAll(): Promise<TripRequest[]> {
    const prisma = getPrismaClient();

    if (prisma) {
      try {
        const records = await prisma.customerLeadRequest.findMany({
          orderBy: { createdAt: "desc" },
        });

        return records.map((r) => ({
          requestId: r.requestId,
          createdAt: r.createdAt.toISOString(),
          customerName: r.customerName,
          phone: r.phone,
          email: r.email || undefined,
          moods: r.moods,
          budgetPerPerson: r.budgetPerPerson,
          budgetMode: r.budgetMode || undefined,
          datesOption: r.datesOption,
          startDate: r.startDate || undefined,
          endDate: r.endDate || undefined,
          groupType: r.groupType,
          numTravellers: r.numTravellers,
          origin: r.origin,
          destinationContext: r.destinationContext || undefined,
          preferences: r.preferences,
          sharingOption: r.sharingOption,
          proposalId: r.proposalId || undefined,
          proposalTitle: r.proposalTitle || undefined,
          estimatedTotal: r.estimatedTotal || undefined,
          modificationNotes: r.modificationNotes,
          specialRequests: r.specialRequests || undefined,
          rawUserInput: r.rawUserInput || undefined,
          source: r.source as TripRequest["source"],
          status: r.status as TripRequestStatus,
          utmSource: (r as unknown as { utmSource?: string }).utmSource || undefined,
          utmMedium: (r as unknown as { utmMedium?: string }).utmMedium || undefined,
          utmCampaign: (r as unknown as { utmCampaign?: string }).utmCampaign || undefined,
          landingPage: (r as unknown as { landingPage?: string }).landingPage || undefined,
          referrer: (r as unknown as { referrer?: string }).referrer || undefined,
        }));
      } catch (err) {
        console.error("[RaO Repository] Database query error in getAll():", err);
        throw new Error("DATABASE_QUERY_ERROR: Unable to fetch trip requests from PostgreSQL.");
      }
    }

    if (isLocalDevFallbackAllowed()) {
      console.warn("[RaO Repository] Local dev fallback active: returning dev demo array.");
      return [...devDemoStore].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    throw new Error("DATABASE_NOT_CONFIGURED: Production database connection URL (DATABASE_URL) is missing.");
  }

  /**
   * Fetches a single trip request by ID from PostgreSQL.
   */
  static async getById(id: string): Promise<TripRequest | undefined> {
    const prisma = getPrismaClient();

    if (prisma) {
      try {
        const r = await prisma.customerLeadRequest.findUnique({
          where: { requestId: id },
        });
        if (r) {
          return {
            requestId: r.requestId,
            createdAt: r.createdAt.toISOString(),
            customerName: r.customerName,
            phone: r.phone,
            email: r.email || undefined,
            moods: r.moods,
            budgetPerPerson: r.budgetPerPerson,
            budgetMode: r.budgetMode || undefined,
            datesOption: r.datesOption,
            startDate: r.startDate || undefined,
            endDate: r.endDate || undefined,
            groupType: r.groupType,
            numTravellers: r.numTravellers,
            origin: r.origin,
            destinationContext: r.destinationContext || undefined,
            preferences: r.preferences,
            sharingOption: r.sharingOption,
            proposalId: r.proposalId || undefined,
            proposalTitle: r.proposalTitle || undefined,
            estimatedTotal: r.estimatedTotal || undefined,
            modificationNotes: r.modificationNotes,
            specialRequests: r.specialRequests || undefined,
            rawUserInput: r.rawUserInput || undefined,
            source: r.source as TripRequest["source"],
            status: r.status as TripRequestStatus,
            utmSource: (r as unknown as { utmSource?: string }).utmSource || undefined,
            utmMedium: (r as unknown as { utmMedium?: string }).utmMedium || undefined,
            utmCampaign: (r as unknown as { utmCampaign?: string }).utmCampaign || undefined,
            landingPage: (r as unknown as { landingPage?: string }).landingPage || undefined,
            referrer: (r as unknown as { referrer?: string }).referrer || undefined,
          };
        }
        return undefined;
      } catch (err) {
        console.error("[RaO Repository] Database query error in getById():", err);
        throw new Error("DATABASE_QUERY_ERROR: Failed to query trip request from database.");
      }
    }

    if (isLocalDevFallbackAllowed()) {
      return devDemoStore.find((r) => r.requestId === id);
    }

    throw new Error("DATABASE_NOT_CONFIGURED: Production database connection URL (DATABASE_URL) is missing.");
  }

  /**
   * Persists a new customer trip request to PostgreSQL.
   * Throws if database write fails — NEVER falsely succeeds.
   */
  static async create(input: CreateTripRequestInput): Promise<TripRequest> {
    const requestId = generateRequestId();

    const newRequest: TripRequest = {
      requestId,
      createdAt: new Date().toISOString(),
      customerName: input.customerName.trim(),
      phone: input.phone.trim(),
      email: input.email?.trim() || undefined,
      moods: input.moods || [],
      budgetPerPerson: input.budgetPerPerson || "15000",
      budgetMode: input.budgetMode || "Flexible",
      datesOption: input.datesOption || "Flexible",
      startDate: input.startDate,
      endDate: input.endDate,
      groupType: input.groupType || "Couple",
      numTravellers: input.numTravellers || "2",
      origin: input.origin || "Mumbai",
      destinationContext: input.destinationContext,
      preferences: input.preferences || [],
      sharingOption: input.sharingOption || "Private trip only",
      proposalId: input.proposalId,
      proposalTitle: input.proposalTitle,
      estimatedTotal: input.estimatedTotal,
      modificationNotes: input.modificationNotes || [],
      specialRequests: input.specialRequests,
      rawUserInput: input.rawUserInput,
      source: input.source || "PLANNER_WIZARD",
      status: "NEW",
      utmSource: input.utmSource,
      utmMedium: input.utmMedium,
      utmCampaign: input.utmCampaign,
      landingPage: input.landingPage,
      referrer: input.referrer,
    };

    const prisma = getPrismaClient();

    if (prisma) {
      try {
        await prisma.customerLeadRequest.create({
          data: {
            requestId: newRequest.requestId,
            createdAt: new Date(newRequest.createdAt),
            customerName: newRequest.customerName,
            phone: newRequest.phone,
            email: newRequest.email,
            moods: newRequest.moods,
            budgetPerPerson: newRequest.budgetPerPerson,
            budgetMode: newRequest.budgetMode,
            datesOption: newRequest.datesOption,
            startDate: newRequest.startDate,
            endDate: newRequest.endDate,
            groupType: newRequest.groupType,
            numTravellers: newRequest.numTravellers,
            origin: newRequest.origin,
            destinationContext: newRequest.destinationContext,
            preferences: newRequest.preferences,
            sharingOption: newRequest.sharingOption,
            proposalId: newRequest.proposalId,
            proposalTitle: newRequest.proposalTitle,
            estimatedTotal: newRequest.estimatedTotal,
            modificationNotes: newRequest.modificationNotes,
            specialRequests: newRequest.specialRequests,
            rawUserInput: newRequest.rawUserInput,
            source: newRequest.source,
            status: newRequest.status,
            utmSource: newRequest.utmSource,
            utmMedium: newRequest.utmMedium,
            utmCampaign: newRequest.utmCampaign,
            landingPage: newRequest.landingPage,
            referrer: newRequest.referrer,
          },
        });
        return newRequest;
      } catch (err) {
        console.error("[RaO Repository] Database insert error in create():", err);
        throw new Error("DATABASE_WRITE_FAILED: Unable to save trip request to PostgreSQL.");
      }
    }

    if (isLocalDevFallbackAllowed()) {
      console.warn("[RaO Repository] Local dev mode active: saving lead to dev array.");
      devDemoStore.unshift(newRequest);
      return newRequest;
    }

    throw new Error("DATABASE_NOT_CONFIGURED: Cannot persist lead because DATABASE_URL is missing.");
  }

  /**
   * Updates the status of a trip request in PostgreSQL.
   */
  static async updateStatus(id: string, status: TripRequestStatus): Promise<TripRequest | null> {
    const prisma = getPrismaClient();

    if (prisma) {
      try {
        const updated = await prisma.customerLeadRequest.update({
          where: { requestId: id },
          data: { status },
        });
        return {
          requestId: updated.requestId,
          createdAt: updated.createdAt.toISOString(),
          customerName: updated.customerName,
          phone: updated.phone,
          email: updated.email || undefined,
          moods: updated.moods,
          budgetPerPerson: updated.budgetPerPerson,
          budgetMode: updated.budgetMode || undefined,
          datesOption: updated.datesOption,
          startDate: updated.startDate || undefined,
          endDate: updated.endDate || undefined,
          groupType: updated.groupType,
          numTravellers: updated.numTravellers,
          origin: updated.origin,
          destinationContext: updated.destinationContext || undefined,
          preferences: updated.preferences,
          sharingOption: updated.sharingOption,
          proposalId: updated.proposalId || undefined,
          proposalTitle: updated.proposalTitle || undefined,
          estimatedTotal: updated.estimatedTotal || undefined,
          modificationNotes: updated.modificationNotes,
          specialRequests: updated.specialRequests || undefined,
          rawUserInput: updated.rawUserInput || undefined,
          source: updated.source as TripRequest["source"],
          status: updated.status as TripRequestStatus,
        };
      } catch (err) {
        console.error("[RaO Repository] Database update error in updateStatus():", err);
        throw new Error("DATABASE_UPDATE_FAILED: Unable to update request status in PostgreSQL.");
      }
    }

    if (isLocalDevFallbackAllowed()) {
      const req = devDemoStore.find((r) => r.requestId === id);
      if (!req) return null;
      req.status = status;
      return req;
    }

    throw new Error("DATABASE_NOT_CONFIGURED: Production database is missing.");
  }
}
