import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://rao-ashy.vercel.app";
  const now = new Date();

  const routes = [
    "",
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/plan" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/plan" ? 0.9 : 0.7,
  }));
}
