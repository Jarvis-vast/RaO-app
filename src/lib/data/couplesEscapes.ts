export interface CouplesEscape {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  location: string;
  duration: string;
  category: string;
  status: "Custom Planning Available" | "Enquire Now" | "Under Development";
  heroImage?: string;
  imageAttribution?: {
    sourceName: string;
    sourceUrl: string;
    license: string;
  };
  highlights: string[];
  romanticFeatures: string[];
  idealFor: string;
}

export const COUPLES_ESCAPES_HEADER = {
  badge: "Dedicated Category",
  title: "Couples Escapes",
  subtitle: "Beautiful places. Meaningful moments. Journeys made for two.",
  description:
    "A romantic and sophisticated travel category by RaO. Whether celebrating an anniversary, a quiet weekend away, or exploring historic ruins together, RaO plans scenic stays, privacy, and unhurried discoveries.",
  ctaText: "Plan Your Escape",
};

export const COUPLES_ESCAPES: CouplesEscape[] = [
  {
    id: "coorg",
    slug: "coorg-couples-getaway",
    name: "Coorg",
    tagline: "The Scotland of India",
    positioning: "Coffee estates, lush green landscapes, scenic stays, and slow romantic getaways.",
    description:
      "Nestled amidst mist-covered hills and scented spice plantations, Coorg offers tranquil privacy, private pool villas overlooking green valleys, and peaceful walks through coffee estates.",
    location: "Kodagu (Coorg), Karnataka",
    duration: "3 to 4 Days",
    category: "Estate & Nature Escape",
    status: "Custom Planning Available",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/0/09/Plantation_road_Coorg_Karnataka.jpg",
    imageAttribution: {
      sourceName: "Wikimedia Commons (Dcrjsr)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Plantation_road_Coorg_Karnataka.jpg",
      license: "CC BY 3.0",
    },
    highlights: [
      "Private Estate Cottages & Heritage Homestays",
      "Sunset views at Raja's Seat & Abbey Falls walks",
      "Guided Coffee Plantation & Tasting Walks",
      "Candlelight dinners surrounded by lush greenery",
    ],
    romanticFeatures: [
      "Secluded hill-view balconies",
      "Private vehicle for leisurely drives",
      "Curated local organic dining experiences",
    ],
    idealFor: "Couples seeking misty mountain air, coffee estates, and serene togetherness.",
  },
  {
    id: "hampi",
    slug: "hampi-couples-exploration",
    name: "Hampi",
    tagline: "Timeless Ruins & Golden Sunsets",
    positioning: "Ancient heritage, dramatic boulder landscapes, beautiful sunsets, and memorable explorations together.",
    description:
      "Step into a mystical landscape of ancient stone temples, surreal granite boulders, and quiet river banks. Watch golden sunsets over Matanga Hill and cross the Tungabhadra River together.",
    location: "Hampi, Vijayanagara District, Karnataka",
    duration: "3 to 4 Days",
    category: "Heritage & Sunset Odyssey",
    status: "Custom Planning Available",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Hampi_Vitthala_Temple_3465.jpg",
    imageAttribution: {
      sourceName: "Wikimedia Commons (Basavaraj M)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hampi_Vitthala_Temple_3465.jpg",
      license: "CC BY-SA 4.0",
    },
    highlights: [
      "Vitthala Temple & Stone Chariot Explorations",
      "Matanga Hill panoramic golden hour sunsets",
      "Traditional Coracle ride across Tungabhadra River",
      "Boutique heritage resort stay in Anegundi / Hospet",
    ],
    romanticFeatures: [
      "Private guided walks away from crowds",
      "Riverside dining and sunset spots",
      "Paced exploration with private vehicle",
    ],
    idealFor: "Couples who love art, history, dramatic photography, and atmospheric evenings.",
  },
  {
    id: "gokarna",
    slug: "gokarna-couples-beach-escape",
    name: "Gokarna",
    tagline: "Tranquil Shorelines & Coastal Serenity",
    positioning: "Peaceful beaches, coastal sunsets, relaxed stays, and laid-back seaside escapes.",
    description:
      "A peaceful coastal alternative to crowded beach destinations. Stroll along crescent-shaped beaches, relax in cliffside cafes, and watch spectacular Arabian Sea sunsets in calm seclusion.",
    location: "Gokarna, Uttara Kannada, Karnataka",
    duration: "3 to 4 Days",
    category: "Seaside & Coastal Reset",
    status: "Custom Planning Available",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Om_beach_Gokarna.JPG",
    imageAttribution: {
      sourceName: "Wikimedia Commons (Axis of eran)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Om_beach_Gokarna.JPG",
      license: "CC0 1.0",
    },
    highlights: [
      "Om Beach & Kudle Beach quiet sunset walks",
      "Private oceanview cottage stays",
      "Beach trekking between Half Moon & Paradise Beaches",
      "Relaxed coastal dining & seafood delicacies",
    ],
    romanticFeatures: [
      "Uncrowded beach access & sea-facing stays",
      "Private transfers & flexible daily schedule",
      "Stargazing by the shoreline",
    ],
    idealFor: "Couples looking for laid-back ocean breeze, quiet beach walks, and cozy sunset cafes.",
  },
];
