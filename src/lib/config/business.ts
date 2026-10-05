/**
 * RaO Central Business Configuration
 * Single source of truth for business contact, operational settings, and legal defaults.
 * Any founder-specific updates can be made here or via environment variables.
 */

export const BUSINESS_CONFIG = {
  // Brand
  brandName: "RaO",
  fullName: "Remarkable Adventure Odyssey",
  tagline: "Your personal travel planner.",
  slogan: "Tell us your dates and budget, and RaO will do the rest.",

  // Contact Channels
  contact: {
    // E.164 formatted WhatsApp number without spaces or plus (919326540456)
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919326540456",
    contactPerson: "Om Bhagwat",
    phoneDisplay: "+91 93265 40456",
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "raotourplanners@gmail.com",
    supportHours: "Monday to Sunday, 9:00 AM – 9:00 PM IST",
  },

  // Social Links
  social: {
    pinterest: "https://www.pinterest.com/raotourplanners/",
    instagram: "https://www.instagram.com/rao.tour.planners/",
    twitter: "https://x.com/RaO__travel",
    threads: "https://www.threads.com/@rao.tour.planners",
    email: "mailto:raotourplanners@gmail.com",
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
