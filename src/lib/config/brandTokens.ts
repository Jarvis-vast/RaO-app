/**
 * RaO Brand System v1.0 — Design Tokens & Identity System
 * Remarkable Adventure Odyssey (RaO)
 * Core Positioning: "Have the date. We'll help with the journey."
 * Descriptor: "Personal Travel Planner · Mumbai"
 */

export const BRAND_TOKENS = {
  colors: {
    mahogany: "#1C0A0B",   // Primary Dark / Canvas Background / Strong Brand Moments
    copper: "#C88D6A",     // Primary Brand Color & Button Accent
    warmSand: "#E2B28B",   // Secondary Accent & Warm Highlights
    softIvory: "#E8D5C8",  // Body Text Secondary & Muted Contrast
    offWhite: "#FAF7F4",   // Crisp Text Primary & Clean Accents
  },
  typography: {
    fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
    serifFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
  },
  descriptors: {
    brandName: "RaO",
    fullName: "Remarkable Adventure Odyssey",
    tagline: "Have the date. We'll help with the journey.",
    descriptor: "Your Personal Travel Planner · Mumbai",
    pillars: ["Explore", "Experience", "Discover"],
  },
  rules: {
    aesthetic: "Editorial travel aesthetic: spacious, warm, premium and human.",
    colorUsage: "Use mahogany (#1C0A0B) for canvas backgrounds and strong brand moments; copper (#C88D6A) as an accent rather than making every component dark or gold.",
    logoUsage: "Use the existing RaO logo consistently with 'Personal Travel Planner' as the descriptor.",
    buttons: "Pill-shaped rounded-full buttons with clear hierarchy (Copper primary, bordered glass secondary).",
    inputs: "10-digit mobile number validation for WhatsApp contact; clean dark glass input cards with copper focus borders.",
  },
} as const;
