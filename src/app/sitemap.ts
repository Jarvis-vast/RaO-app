import { MetadataRoute } from "next";
import { UPCOMING_TRIPS } from "@/lib/data/upcomingTrips";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://rao-ashy.vercel.app";
  const now = new Date();

  // Static core routes
  const staticRoutes = [
    "",
    "/upcoming-trips",
    "/plan",
    "/experiences",
    "/destinations",
    "/how-it-works",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
    "/cancellation",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/upcoming-trips" || route === "/plan" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/upcoming-trips" || route === "/plan" ? 0.9 : 0.7,
  }));

  // Dynamic trip routes (e.g. /upcoming-trips/ujjain-temple-escape)
  const tripEntries: MetadataRoute.Sitemap = UPCOMING_TRIPS.map((trip) => ({
    url: `${baseUrl}/upcoming-trips/${trip.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticEntries, ...tripEntries];
}
