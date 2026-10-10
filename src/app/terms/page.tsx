import { BUSINESS_CONFIG } from "@/lib/config/business";

export const metadata = {
  title: "Terms & Conditions | RaO",
  description:
    "Review the official terms and conditions for personal travel planning services provided by RaO.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/terms",
  },
  openGraph: {
    title: "Terms & Conditions | RaO",
    description:
      "Review the official terms and conditions for personal travel planning services provided by RaO.",
    url: "https://rao-ashy.vercel.app/terms",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "Terms & Conditions" }],
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 space-y-10 shadow-2xl">
        <header className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Legal Agreement</span>
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">Terms & Conditions</h1>
          <p className="text-muted-foreground text-sm">Last revised: September 2026</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-relaxed font-light text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">1. Introduction</h2>
            <p>
              Welcome to {BUSINESS_CONFIG.legal.entityName} (&quot;RaO&quot;, &quot;we&quot;, &quot;us&quot;). These Terms &amp; Conditions govern your access to our personal travel planning platform and services. By submitting a trip request or confirming an itinerary proposal, you agree to comply with and be bound by these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">2. Operating Entity &amp; Jurisdiction</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li><strong>Operating Brand:</strong> {BUSINESS_CONFIG.brandName} ({BUSINESS_CONFIG.fullName})</li>
              <li><strong>Entity:</strong> {BUSINESS_CONFIG.legal.entityName}</li>
              <li><strong>Headquarters &amp; Support:</strong> {BUSINESS_CONFIG.legal.addressDisplay}</li>
              <li><strong>Official Support:</strong> {BUSINESS_CONFIG.contact.supportEmail}</li>
              <li><strong>Governing Law:</strong> {BUSINESS_CONFIG.legal.jurisdiction}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">3. Trip Planning &amp; Proposals</h2>
            <p>
              Itineraries generated via the RaO platform are curated estimates reflecting typical pricing, seasonal accessibility, and supplier tariffs. Final confirmation of dates, resort room categories, private transport, and licensed activities is subject to written approval and receipt of the agreed booking advance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">4. Payments &amp; Pricing</h2>
            <p>
              All prices are quoted in Indian Rupees (INR) inclusive of applicable taxes unless explicitly noted. To secure hotel stays, private boats, and certified guide reservations, an initial deposit (typically 50%) is payable upon proposal acceptance, with the remaining balance due prior to departure as detailed in your final itinerary invoice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">5. Supplier Dependency &amp; Role</h2>
            <p>
              RaO acts as an expert travel designer and concierge connecting travellers with independently operated boutique hotels, villa owners, licensed transport providers, and adventure operators. While RaO rigorously verifies partner standards, we do not own or directly operate third-party facilities and are not liable for operational disruptions caused by suppliers, though our concierge team actively intervenes to resolve any on-trip issue.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">6. Force Majeure</h2>
            <p>
              Neither party shall be held liable for failure or delay in fulfilling trip arrangements where such failure arises from acts of God, unexpected road/ghat blockages, severe weather, governmental regulations, or other events beyond reasonable human control. In such events, RaO works to reschedule or recover applicable vendor credits on your behalf.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
