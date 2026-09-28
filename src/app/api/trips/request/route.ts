import { NextRequest, NextResponse } from "next/server";
import { TripRequestRepository } from "@/lib/services/TripRequestRepository";
import { TripRequestFormatter } from "@/lib/services/TripRequestFormatter";
import { CreateTripRequestInput } from "@/lib/types/trip-request";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateTripRequestInput;

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

    // Persist request in repository
    const savedRequest = await TripRequestRepository.create(body);

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

export async function GET() {
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
