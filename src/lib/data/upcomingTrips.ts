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
  status: "Planning Stage" | "Expressions of Interest" | "Upcoming" | "Coming Soon";
  category: "Spiritual Escape" | "Heritage Journey" | "Spiritual Pilgrimage" | "Upcoming Journey" | "Pilgrimage Odyssey";
  nextBatchDate: string;
  heroImage?: string;
  imageAttribution?: {
    sourceName: string;
    sourceUrl: string;
    license: string;
  };
  galleryImages?: string[];
  overview: string;
  highlights: string[];
  temples?: {
    number: string;
    name: string;
    tagline: string;
    description: string;
  }[];
  itinerary?: {
    period: string;
    title: string;
    description: string;
  }[];
  includes?: string[];
  excludes?: string[];
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
    category: "Spiritual Escape",
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
  {
    id: "kolhapur-escape",
    slug: "kolhapur-escape",
    title: "Kolhapur Sacred & Heritage Escape",
    subtitle: "Divine Mahalakshmi Darshan & Royal Culture",
    tagline: "A thoughtfully planned 1-Day Return or weekend yatra from Mumbai.",
    location: "Kolhapur, Maharashtra",
    startingFrom: "Mumbai",
    duration: "1 Day Return / 2D 1N",
    badge: "Coming Soon",
    status: "Planning Stage",
    category: "Spiritual Escape",
    nextBatchDate: "Dates to be announced upon batch confirmation",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Mahalakshmi_temple%2C_Kolhapur.jpg",
    imageAttribution: {
      sourceName: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mahalakshmi_temple,_Kolhapur.jpg",
      license: "Public Domain",
    },
    overview:
      "A thoughtfully planned spiritual and heritage journey from Mumbai to Kolhapur centered around the iconic Shri Mahalakshmi (Ambabai) Temple, Bhavani Mandap, New Palace, Rankala Lake, and authentic Kolhapuri local culinary experiences.",
    highlights: [
      "Shri Mahalakshmi (Ambabai) Temple Darshan",
      "Bhavani Mandap Historic Heritage Stopover",
      "New Palace (Chhatrapati Shahu Museum) Royal Exterior",
      "Rankala Lake Evening Relaxation & Lakeside Time",
      "Authentic Kolhapuri Thali Culinary Experience",
      "Comfortable Private Vehicle or Train Logistics",
    ],
    includes: [
      "Round-trip transportation planning from Mumbai",
      "Darshan timing coordination & local support",
      "Authentic Kolhapuri meal arrangement",
      "Planned stops at Bhavani Mandap & Rankala Lake",
    ],
    excludes: [
      "Personal shopping (Kolhapuri chappals, jaggery, spices)",
      "Special darshan or puja donation tickets",
      "Extra meals or personal refreshments",
    ],
    organizer: {
      name: "Om Bhagwat",
      phone: "9326540456",
      email: "raotourplanners@gmail.com",
      website: "rao-ashy.vercel.app",
    },
  },
  {
    id: "akkalkot-pilgrimage",
    slug: "akkalkot-pilgrimage",
    title: "Akkalkot Devotional Pilgrimage",
    subtitle: "Shri Swami Samarth Devotional Journey",
    tagline: "Peaceful devotional retreat with seamless travel coordination.",
    location: "Akkalkot, Solapur, Maharashtra",
    startingFrom: "Mumbai",
    duration: "1 to 2 Days",
    badge: "Coming Soon",
    status: "Expressions of Interest",
    category: "Spiritual Pilgrimage",
    nextBatchDate: "Dates to be announced upon batch confirmation",
    // Intentionally no heroImage: Text-led card design enforced per Rule 5 (unverified photo policy)
    overview:
      "A peaceful devotional pilgrimage dedicated to Shri Swami Samarth Maharaj at Akkalkot. Designed for families and devotees seeking quiet prayer, spiritual solace, and comfortable hassle-free travel arrangements.",
    highlights: [
      "Shri Swami Samarth Maharaj Math Darshan",
      "Vatavruksha Temple Quiet Prayer & Meditation Time",
      "Serene Devotional Atmosphere & Mahaprasad Guidance",
      "Solapur Regional Heritage Connections",
      "Comfortable Private Vehicle or Train Logistics",
      "Personalized RaO On-Ground Trip Coordination",
    ],
    includes: [
      "Transport logistics from Mumbai to Akkalkot",
      "Peaceful itinerary pacing for senior citizens & families",
      "Hotel / lodging reservation assistance",
      "On-ground guidance for darshan timings",
    ],
    excludes: [
      "Personal donations or specific puja offerings",
      "Personal shopping & individual expenses",
    ],
    organizer: {
      name: "Om Bhagwat",
      phone: "9326540456",
      email: "raotourplanners@gmail.com",
      website: "rao-ashy.vercel.app",
    },
  },
  {
    id: "vaishno-devi-yatra",
    slug: "vaishno-devi-yatra",
    title: "Vaishno Devi Sacred Yatra",
    subtitle: "Holy Cave Shrine & Trikuta Mountains",
    tagline: "Soul-enriching pilgrimage journey from Katra base camp.",
    location: "Katra & Trikuta Hills, Jammu & Kashmir",
    startingFrom: "Delhi / Mumbai",
    duration: "5 Days / 4 Nights",
    badge: "Upcoming Journey",
    status: "Planning Stage",
    category: "Pilgrimage Odyssey",
    nextBatchDate: "Targeting Winter Yatra (Dec 2026)",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Shri_Mata_Vaishno_Devi_Bhawan%2C_Katra_Jammu_%26_Kashmir_INDIA.jpg",
    imageAttribution: {
      sourceName: "Wikimedia Commons (KDhruv406)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shri_Mata_Vaishno_Devi_Bhawan,_Katra_Jammu_%26_Kashmir_INDIA.jpg",
      license: "CC BY 4.0",
    },
    overview:
      "A divine pilgrimage to the sacred cave shrine of Shri Mata Vaishno Devi nestled in the majestic Trikuta Mountains. Covers Katra base camp coordination, Yatra registration pass support, and options for helicopter or pony/palki arrangements.",
    highlights: [
      "Shri Mata Vaishno Devi Bhawan Sacred Darshan",
      "Trikuta Mountains Scenic Trek or Helicopter Ascent",
      "Katra Base Camp Accommodations & Logistics",
      "Optional Stopovers in Amritsar (Golden Temple) & Patnitop",
      "Yatra Slip (RFID Token) & Registration Assistance",
      "Complete Group Safety & End-to-End RaO Support",
    ],
    includes: [
      "Delhi to Katra train / road transport planning",
      "Hotel stays in Katra & en-route stops",
      "Yatra registration pass guidance",
      "Helicopter / pony booking assistance on request",
    ],
    excludes: [
      "Individual helicopter / pony / battery car ticket costs",
      "Personal offerings, prasadam, and personal shopping",
    ],
    organizer: {
      name: "Om Bhagwat",
      phone: "9326540456",
      email: "raotourplanners@gmail.com",
      website: "rao-ashy.vercel.app",
    },
  },
];

