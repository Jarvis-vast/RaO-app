import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact RaO Travel Agency — Travel Designer Concierge",
  description:
    "Contact RaO Travel Agency. Connect directly with our personal travel designers via WhatsApp (+91-9326540456), email (raotourplanners@gmail.com), or submit an online inquiry.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/contact",
  },
  openGraph: {
    title: "Contact RaO Travel Agency",
    description: "Connect directly with our personal travel designers via WhatsApp (+91-9326540456) or online inquiry.",
    url: "https://rao-ashy.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
