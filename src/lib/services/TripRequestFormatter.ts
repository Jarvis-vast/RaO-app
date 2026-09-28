import { TripRequest } from "../types/trip-request";
import { BUSINESS_CONFIG } from "../config/business";

export class TripRequestFormatter {
  /**
   * Generates a concise, structured WhatsApp text message for the travel designer.
   */
  static formatWhatsAppMessage(request: TripRequest): string {
    const lines: string[] = [
      `🌟 *New RaO Trip Request* [${request.requestId}]`,
      `---------------------------------`,
      `👤 *Name:* ${request.customerName}`,
      `📞 *Phone:* ${request.phone}`,
    ];

    if (request.email) {
      lines.push(`✉️ *Email:* ${request.email}`);
    }

    lines.push(
      `---------------------------------`,
      `✨ *Proposal / Intent:* ${request.proposalTitle || "Custom Planning"}`,
      `🎭 *Moods:* ${request.moods.length ? request.moods.join(", ") : "Flexible"}`,
      `📍 *Origin:* ${request.origin}`,
      `👥 *Travellers:* ${request.numTravellers} (${request.groupType})`,
      `📅 *Dates:* ${request.startDate && request.endDate ? `${request.startDate} to ${request.endDate}` : request.datesOption}`,
      `💰 *Budget:* ₹${request.budgetPerPerson} / person (${request.budgetMode || "Standard"})`,
      `🔒 *Trip Type:* ${request.sharingOption}`
    );

    if (request.destinationContext) {
      lines.push(`🗺️ *Destination Context:* ${request.destinationContext}`);
    }

    if (request.preferences && request.preferences.length > 0) {
      lines.push(`🏷️ *Preferences:* ${request.preferences.join(", ")}`);
    }

    if (request.modificationNotes && request.modificationNotes.length > 0) {
      lines.push(
        `📝 *Customer Notes:*`,
        ...request.modificationNotes.map((note) => `  • ${note}`)
      );
    }

    if (request.specialRequests) {
      lines.push(`💬 *Special Request:* ${request.specialRequests}`);
    }

    lines.push(
      `---------------------------------`,
      `_Sent via RaO Personal Travel Planner_`
    );

    return lines.join("\n");
  }

  /**
   * Builds the direct wa.me link with URL-encoded structured message.
   */
  static buildWhatsAppUrl(request: TripRequest): string {
    const number = BUSINESS_CONFIG.contact.whatsappNumber;
    const message = this.formatWhatsAppMessage(request);
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }
}
