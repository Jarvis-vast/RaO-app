import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RaO Travel Agency — Remarkable Adventure Odyssey",
    short_name: "RaO Travel",
    description:
      "Tell RaO your mood, budget, and dates. We plan remarkable custom itineraries, Ujjain temple escapes, and group travel odysseys across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#1A0B0E",
    theme_color: "#D49A7A",
    icons: [
      {
        src: "/images/Logo.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/Logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
