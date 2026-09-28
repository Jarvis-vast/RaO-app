import { getPrismaClient } from "../prisma";
import { TripRequest, CreateTripRequestInput, TripRequestStatus } from "../types/trip-request";

// Demo in-memory fallback for local development without DATABASE_URL
let inMemoryStore: TripRequest[] = [
  {
    requestId: "RAO-REQ-1001",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    customerName: "Sarah Jenkins",
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
  {
    requestId: "RAO-REQ-1002",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    customerName: "Rahul Sharma",
    phone: "+91 99300 44556",
    email: "rahul.sharma@example.com",
    moods: ["Adventure", "Peace"],
    budgetPerPerson: "8000",
    budgetMode: "Strict",
    datesOption: "Next Month",
    groupType: "Friends",
    numTravellers: "5",
    origin: "Pune",
    destinationContext: "Mahabaleshwar",
    preferences: ["Trekking", "Local Food"],
    sharingOption: "Private trip only",
    proposalId: "mountain-sanctuary",
    proposalTitle: "Misty Mountain Sanctuary",
    estimatedTotal: 40000,
    source: "DESCRIBE_IT",
    status: "REVIEWING",
  },
];

export class TripRequestRepository {
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
        }));
      } catch (err) {
        console.error("Database query error in getAll():", err);
      }
    }

    console.warn("DATABASE_URL is not configured. Falling back to local demo array.");
    return [...inMemoryStore].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

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
          };
        }
      } catch (err) {
        console.error("Database query error in getById():", err);
      }
    }

    return inMemoryStore.find((r) => r.requestId === id);
  }

  static async create(input: CreateTripRequestInput): Promise<TripRequest> {
    const timestamp = Date.now().toString().slice(-4);
    const randomHex = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    const requestId = `RAO-REQ-${timestamp}-${randomHex}`;

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
          },
        });
        return newRequest;
      } catch (err) {
        console.error("Database create error in create():", err);
        throw new Error("Failed to persist trip request to production database.");
      }
    }

    console.warn("DATABASE_URL is not configured. Saving lead in memory for demo session.");
    inMemoryStore.unshift(newRequest);
    return newRequest;
  }

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
        console.error("Database update error in updateStatus():", err);
        return null;
      }
    }

    const req = inMemoryStore.find((r) => r.requestId === id);
    if (!req) return null;
    req.status = status;
    return req;
  }
}

