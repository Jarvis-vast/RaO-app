/**
 * RaO Central Business Configuration
 * Single source of truth for business contact, operational settings, and legal defaults.
 * Any founder-specific updates can be made here or via environment variables.
 */

export const BUSINESS_CONFIG = {
  // Brand
  brandName: "RaO",
  fullName: "Remarkable Adventure Odyssey",
  tagline: "My personal travel planner.",
  slogan: "Tell RaO your mood, budget, and dates. We'll plan the rest.",

  // Contact Channels
  contact: {
    // E.164 formatted WhatsApp number without spaces or plus (e.g. 919876543210)
    // Overridable via NEXT_PUBLIC_WHATSAPP_NUMBER in production
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
    phoneDisplay: "+91 98765 43210",
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "concierge@raotravel.com",
    supportHours: "Monday to Sunday, 9:00 AM – 9:00 PM IST",
  },

  // Legal & Entity Details (Founder configuration point)
  legal: {
    entityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME || "RaO Travel Experiences",
    registeredCity: "Mumbai",
    state: "Maharashtra",
    country: "India",
    jurisdiction: "Courts of Mumbai, Maharashtra, India",
    addressDisplay: "Bandra West, Mumbai, Maharashtra 400050, India",
    gstinNote: "GST Registered Travel Agency in Maharashtra",
    cancellationPolicy: {
      moreThan30Days: "90% refund (less non-refundable vendor/hotel commitments)",
      between15And30Days: "50% refund (less non-refundable vendor commitments)",
      lessThan15Days: "Non-refundable due to supplier cancellation penalties",
    },
  },

  // Operational Defaults
  operations: {
    leadNotificationEmail: process.env.ADMIN_LEAD_EMAIL || "ops@raotravel.com",
    defaultCurrency: "INR",
    currencySymbol: "₹",
  },
};
