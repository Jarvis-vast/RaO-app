import fs from "fs";
import path from "path";
import { TripRequest, CreateTripRequestInput } from "../types/trip-request";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "trip_requests.json");

// In-memory cache for fast access and fallback
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

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(inMemoryStore, null, 2), "utf-8");
    } else {
      const fileData = fs.readFileSync(DATA_FILE, "utf-8");
      inMemoryStore = JSON.parse(fileData);
    }
  } catch (err) {
    console.warn("Could not sync with filesystem, using in-memory store:", err);
  }
}

// Initial sync
ensureDataFile();

export class TripRequestRepository {
  static getAll(): TripRequest[] {
    ensureDataFile();
    return [...inMemoryStore].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  static getById(id: string): TripRequest | undefined {
    ensureDataFile();
    return inMemoryStore.find((r) => r.requestId === id);
  }

  static create(input: CreateTripRequestInput): TripRequest {
    ensureDataFile();

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

    inMemoryStore.unshift(newRequest);

    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(DATA_FILE, JSON.stringify(inMemoryStore, null, 2), "utf-8");
    } catch (err) {
      console.warn("Failed to persist trip request to disk:", err);
    }

    return newRequest;
  }

  static updateStatus(id: string, status: TripRequest["status"]): TripRequest | null {
    ensureDataFile();
    const req = inMemoryStore.find((r) => r.requestId === id);
    if (!req) return null;

    req.status = status;

    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(inMemoryStore, null, 2), "utf-8");
    } catch (err) {
      console.warn("Failed to persist status update:", err);
    }

    return req;
  }
}
