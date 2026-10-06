import type { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact RaO | Travel Planning & Enquiries",
  description:
    "Contact RaO for personal travel planning, curated journeys, customized trips and travel enquiries.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/contact",
  },
  openGraph: {
    title: "Contact RaO | Travel Planning & Enquiries",
    description:
      "Contact RaO for personal travel planning, curated journeys, customized trips and travel enquiries.",
    url: "https://rao-ashy.vercel.app/contact",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "Contact RaO" }],
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
