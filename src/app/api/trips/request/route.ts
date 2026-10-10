import { NextRequest, NextResponse } from "next/server";
import { TripRequestRepository } from "@/lib/services/TripRequestRepository";
import { TripRequestFormatter } from "@/lib/services/TripRequestFormatter";
import { CreateTripRequestInput } from "@/lib/types/trip-request";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.customerName || !body.customerName.trim()) {
      return NextResponse.json(
        { error: "Customer name is required" },
        { status: 400 }
      );
    }

    if (!body.phone || !body.phone.trim()) {
      return NextResponse.json(
        { error: "Phone / WhatsApp number is required" },
        { status: 400 }
      );
    }

    // Clean phone number: remove non-digits except leading +
    const cleanPhone = body.phone.trim();
    if (cleanPhone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number" },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (body.email && body.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email.trim())) {
        return NextResponse.json(
          { error: "Please enter a valid email address" },
          { status: 400 }
        );
      }
    }

    // Normalize input fields supporting both PlannerCore and ProposalView payloads
    const input: CreateTripRequestInput = {
      customerName: body.customerName.trim(),
      phone: cleanPhone,
      email: body.email?.trim() || undefined,
      moods: Array.isArray(body.moods) && body.moods.length > 0 
        ? body.moods 
        : [body.journeyType || "Custom Trip"],
      budgetPerPerson: body.budgetPerPerson || body.budgetValue || "Flexible",
      budgetMode: body.budgetMode || "Flexible",
      datesOption: body.datesOption || "Flexible",
      startDate: body.startDate,
      endDate: body.endDate,
      groupType: body.groupType || "Private group",
      numTravellers: body.numTravellers || "2",
      origin: body.origin || "Mumbai",
      destinationContext: body.destinationContext || body.destination || undefined,
      preferences: Array.isArray(body.preferences) ? body.preferences : [],
      sharingOption: body.sharingOption || "Private trip only",
      proposalId: body.proposalId,
      proposalTitle: body.proposalTitle,
      estimatedTotal: typeof body.estimatedTotal === "number" ? body.estimatedTotal : undefined,
      modificationNotes: Array.isArray(body.modificationNotes) ? body.modificationNotes : [],
      specialRequests: body.specialRequests,
      rawUserInput: body.rawUserInput || body.rawIdea,
      source: body.source || "PLANNER_WIZARD",
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      landingPage: body.landingPage,
      referrer: body.referrer,
    };

    // Persist request in repository
    const savedRequest = await TripRequestRepository.create(input);

    // Format WhatsApp redirection URL
    const whatsappUrl = TripRequestFormatter.buildWhatsAppUrl(savedRequest);

    return NextResponse.json(
      {
        success: true,
        requestId: savedRequest.requestId,
        status: savedRequest.status,
        whatsappUrl,
        message: "Trip request received successfully. A RaO travel designer is reviewing your itinerary.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to process trip request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while saving your trip request. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Secure endpoint against unauthorized exposure of customer contact details
  const requiredUser = process.env.ADMIN_USER;
  const requiredPass = process.env.ADMIN_PASS;

  if (requiredUser && requiredPass) {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return NextResponse.json({ error: "Unauthorized access to lead store." }, { status: 401 });
    }
    try {
      const decoded = atob(authHeader.split(" ")[1]);
      const [user, pass] = decoded.split(":");
      if (user !== requiredUser || pass !== requiredPass) {
        return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
      }
    } catch {
      return NextResponse.json({ error: "Authentication failed." }, { status: 401 });
    }
  }

  try {
    const requests = await TripRequestRepository.getAll();
    return NextResponse.json({ requests }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch trip requests:", error);
    return NextResponse.json(
      { error: "Failed to fetch trip requests" },
      { status: 500 }
    );
  }
}
