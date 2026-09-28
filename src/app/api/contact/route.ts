import { NextRequest, NextResponse } from "next/server";
import { TripRequestRepository } from "@/lib/services/TripRequestRepository";
import { TripRequestFormatter } from "@/lib/services/TripRequestFormatter";
import { CreateTripRequestInput } from "@/lib/types/trip-request";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const planningType = body.planningType?.trim() || "General Inquiry";
    const message = body.message?.trim();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!phone || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "A valid 10-digit phone number is required" }, { status: 400 });
    }

    // Persist as a CONTACT_PAGE request in the repository
    const input: CreateTripRequestInput = {
      customerName: name,
      phone,
      email: email || undefined,
      moods: [planningType],
      budgetPerPerson: "Flexible",
      datesOption: "To be discussed",
      groupType: planningType,
      numTravellers: "To be confirmed",
      origin: "Inquiry",
      preferences: [],
      sharingOption: "Private trip only",
      specialRequests: message || "General enquiry from contact page",
      source: "CONTACT_PAGE",
    };

    const saved = TripRequestRepository.create(input);
    const whatsappUrl = TripRequestFormatter.buildWhatsAppUrl(saved);

    return NextResponse.json({
      success: true,
      requestId: saved.requestId,
      whatsappUrl,
      message: "Thank you! Your inquiry has been sent to our travel designers.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: "Failed to submit message" }, { status: 500 });
  }
}
