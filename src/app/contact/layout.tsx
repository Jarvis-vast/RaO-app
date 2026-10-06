import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact RaO | Personal Travel Support & Enquiries",
  description:
    "Get in touch with RaO (Remarkable Adventure Odyssey). Connect via WhatsApp, phone, or email to discuss your personal travel planning needs.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
