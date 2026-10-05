export interface UpcomingTrip {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  startingFrom: string;
  duration: string;
  price?: number;
  originalPrice?: number;
  priceUnit?: string;
  badge: string;
  status: "Planning Stage" | "Expressions of Interest" | "Upcoming" | "Confirmed Batch";
  nextBatchDate: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  temples?: {
    number: string;
    name: string;
    tagline: string;
    description: string;
  }[];
  itinerary: {
    period: string;
    title: string;
    description: string;
  }[];
  includes: string[];
  excludes: string[];
  pdfUrl?: string;
  organizer: {
    name: string;
    phone: string;
    email: string;
    website: string;
  };
}

export const UPCOMING_TRIPS: UpcomingTrip[] = [
  {
    id: "ujjain-temple-escape",
    slug: "ujjain-temple-escape",
    title: "Ujjain Temple Escape",
    subtitle: "Sacred Jyotirlinga & Spiritual Circuit",
    tagline: "Tell us your dates and budget, and RaO will do the rest.",
    location: "Ujjain, Madhya Pradesh",
    startingFrom: "Mumbai",
    duration: "2 Days / 1 Night",
    badge: "Planning Stage",
    status: "Expressions of Interest",
    nextBatchDate: "Planning for after Diwali 2026 (From Nov 11, 2026 onward)",
    heroImage: "/images/ujjain-hero.jpg",
    galleryImages: [
      "/images/ujjain-hero.jpg",
      "/images/ujjain-mahakal.png",
    ],
    overview:
      "A sacred 2-Day spiritual itinerary concept from Mumbai to Ujjain covering Mahakaleshwar Jyotirlinga, Harsiddhi Mata Temple, and Kal Bhairav Temple. Train travel, hotel stay, meals, and local coordination will be arranged upon final batch confirmation.",
    highlights: [
      "Mahakaleshwar Jyotirlinga Darshan — Sacred Eternal Jyotirlinga",
      "Harsiddhi Mata Temple Visit — Ancient Shakti Peeth blessings",
      "Kal Bhairav Temple Experience — Divine guardian of Ujjain",
      "Round-Trip Rail / Road Transport Options (Mumbai – Ujjain)",
      "Comfortable Hotel Accommodation & All Meals Included",
      "Full Local Coordination & RaO On-Ground Trip Assistance",
    ],
    temples: [
      {
        number: "01",
        name: "Mahakaleshwar",
        tagline: "THE ETERNAL JYOTIRLINGA",
        description:
          "The main temple stop of the Ujjain circuit. One of the twelve sacred Jyotirlingas, Mahakaleshwar is known for its powerful energy, ancient history, and deep spiritual significance.",
      },
      {
        number: "02",
        name: "Harsiddhi Mata",
        tagline: "THE POWERFUL BLESSINGS",
        description:
          "The second spiritual stop in the circuit, Harsiddhi Mata Temple is known for its vibrant energy, rich history, and the unwavering faith of devotees.",
      },
      {
        number: "03",
        name: "Kal Bhairav",
        tagline: "THE GUARDIAN OF UJJAIN",
        description:
          "Dedicated to Lord Bhairav, a fierce form of Lord Shiva, completing the primary Ujjain spiritual journey. Famous for its unique offerings and deep local devotion.",
      },
    ],
    itinerary: [
      {
        period: "NIGHT BEFORE",
        title: "DEPARTURE — MUMBAI TO UJJAIN",
        description:
          "Meet the group at the designated Mumbai railway station or board private road transport to Ujjain.",
      },
      {
        period: "DAY 1 MORNING",
        title: "ARRIVAL & CHECK-IN SUPPORT",
        description:
          "Morning arrival in Ujjain, local transfer to hotel, freshen-up, and breakfast before starting the temple circuit.",
      },
      {
        period: "DAY 1 AFTERNOON",
        title: "MAHAKALESHWAR DARSHAN",
        description:
          "Visit the sacred Mahakaleshwar Jyotirlinga temple, followed by lunch and hotel check-in.",
      },
      {
        period: "DAY 1 EVENING",
        title: "TEMPLE CIRCUIT & LOCAL TIME",
        description:
          "Harsiddhi Mata & Kal Bhairav Temple visits, evening heritage market walks, followed by dinner.",
      },
      {
        period: "DAY 2 MORNING",
        title: "RELAXED UJJAIN EXPLORATION",
        description:
          "Breakfast, hotel checkout, and free time for local shopping and Ram Ghat exploration.",
      },
      {
        period: "DAY 2 AFTERNOON",
        title: "RETURN JOURNEY TO MUMBAI",
        description:
          "Lunch, final souvenirs, and transfer to Ujjain station for the return journey to Mumbai.",
      },
    ],
    includes: [
      "Transport options from Mumbai to Ujjain and return",
      "Comfortable hotel accommodation",
      "Breakfast, Lunch, and Dinner as per itinerary",
      "Local transportation for planned itinerary",
      "Three-temple Ujjain guided circuit",
      "Complete RaO trip planning and group coordination",
    ],
    excludes: [
      "Personal shopping and personal expenses",
      "Special VIP darshan / puja donation fees",
      "Room upgrades or additional stay nights",
      "Activities outside agreed itinerary",
    ],
    pdfUrl: "/docs/RAO_UJJAIN_TEMPLE_ESCAPE_PRINT_READY.pdf",
    organizer: {
      name: "Om Bhagwat",
      phone: "9326540456",
      email: "raotourplanners@gmail.com",
      website: "rao-ashy.vercel.app",
    },
  },
];
