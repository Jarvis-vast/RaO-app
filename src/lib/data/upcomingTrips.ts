export interface UpcomingTrip {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  startingFrom: string;
  duration: string;
  price: number;
  originalPrice?: number;
  priceUnit: string;
  badge: string;
  status: "Upcoming" | "Filling Fast" | "Sold Out";
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
    subtitle: "The Sacred Jyotirlinga & Spiritual Circuit",
    tagline: "Tell us your mood. We'll plan the trip.",
    location: "Ujjain, Madhya Pradesh",
    startingFrom: "Mumbai",
    duration: "2 Days / 1 Night",
    price: 3499,
    originalPrice: 4499,
    priceUnit: "per person",
    badge: "Upcoming Group Escape",
    status: "Filling Fast",
    nextBatchDate: "Oct 18 - Oct 20, 2026",
    heroImage: "/images/ujjain-hero.jpg",
    galleryImages: [
      "/images/ujjain-hero.jpg",
      "/images/ujjain-mahakal.png",
    ],
    overview:
      "A sacred 2-Day spiritual escape from Mumbai to Ujjain covering Mahakaleshwar Jyotirlinga, Harsiddhi Mata Temple, and Kal Bhairav Temple. All train travel, hotel stay, meals, and local coordination included for an effortless, serene journey.",
    highlights: [
      "Mahakaleshwar Jyotirlinga Darshan — Sacred Eternal Jyotirlinga",
      "Harsiddhi Mata Temple Visit — Ancient Shakti Peeth blessings",
      "Kal Bhairav Temple Experience — Divine guardian of Ujjain",
      "Round-Trip Train Tickets (Mumbai – Ujjain – Mumbai)",
      "1-Night Comfortable Hotel Accommodation",
      "All Meals Included (2 Breakfasts, 2 Lunches, 2 Dinners)",
      "Full Local Transport & RaO On-Ground Coordination",
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
          "Meet the group at the designated Mumbai railway station and board the confirmed train to Ujjain. Travel together and arrive ready for the temple circuit.",
      },
      {
        period: "DAY 1 MORNING",
        title: "ARRIVAL & CHECK-IN SUPPORT",
        description:
          "Morning arrival in Ujjain, local transfer to hotel, freshen-up/luggage arrangement, and a wholesome group breakfast before starting sightseeing.",
      },
      {
        period: "DAY 1 AFTERNOON",
        title: "MAHAKALESHWAR DARSHAN",
        description:
          "Visit the sacred Mahakaleshwar Jyotirlinga temple, followed by a group lunch and hotel check-in / rest window.",
      },
      {
        period: "DAY 1 EVENING",
        title: "TEMPLE CIRCUIT & LOCAL TIME",
        description:
          "Harsiddhi Mata Temple & Kal Bhairav Temple circuit visits. Enjoy evening group time in Ujjain's heritage markets, followed by dinner.",
      },
      {
        period: "DAY 2 MORNING",
        title: "RELAXED UJJAIN EXPLORATION",
        description:
          "Breakfast, hotel checkout, and free time for local shopping, temple markets, or riverside relaxation near Ram Ghat.",
      },
      {
        period: "DAY 2 AFTERNOON",
        title: "RETURN JOURNEY TO MUMBAI",
        description:
          "Group lunch, final souvenirs, early dinner, and transfer to Ujjain railway station for the return journey to Mumbai.",
      },
    ],
    includes: [
      "Railway tickets from Mumbai to Ujjain and return (based on selected option)",
      "1-night comfortable hotel accommodation",
      "Breakfast on Day 1 & Day 2",
      "Lunch on Day 1 & Day 2",
      "Dinner on Day 1 & Day 2",
      "Local transportation for planned itinerary",
      "Three-temple Ujjain guided circuit",
      "Complete RaO trip planning and group coordination",
    ],
    excludes: [
      "Personal shopping and personal expenses",
      "Special VIP darshan / puja donation fees",
      "Room upgrades or additional stay nights",
      "Activities outside agreed itinerary",
      "Alcohol, illegal drugs or prohibited substances",
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
