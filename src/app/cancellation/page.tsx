import { BUSINESS_CONFIG } from "@/lib/config/business";

export const metadata = {
  title: "Cancellation & Refund Policy | RaO",
  description:
    "Clear, transparent cancellation and refund policy for travel bookings and custom itineraries with RaO.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/cancellation",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | RaO",
    description:
      "Clear, transparent cancellation and refund policy for travel bookings and custom itineraries with RaO.",
    url: "https://rao-ashy.vercel.app/cancellation",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "Cancellation & Refund Policy" }],
  },
};

export default function CancellationPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 space-y-10 shadow-2xl">
        <header className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Customer Transparency</span>
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">Cancellation &amp; Refunds</h1>
          <p className="text-muted-foreground text-sm">Last revised: September 2026</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-relaxed font-light text-sm">
          <section className="space-y-3">
            <p className="text-base text-foreground">
              We understand that unforeseen life events happen. Our cancellation and refund policy is designed to be clear, equitable, and transparent, reflecting the financial commitments made to private villa owners, guides, and boutique properties on your behalf.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">1. Standard Timeline Guidelines</h2>
            <div className="grid gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-primary font-medium block mb-1">More than 30 Days before Departure:</span>
                <span className="text-muted-foreground">{BUSINESS_CONFIG.legal.cancellationPolicy.moreThan30Days}</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-primary font-medium block mb-1">Between 15 and 30 Days before Departure:</span>
                <span className="text-muted-foreground">{BUSINESS_CONFIG.legal.cancellationPolicy.between15And30Days}</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-primary font-medium block mb-1">Fewer than 15 Days before Departure:</span>
                <span className="text-muted-foreground">{BUSINESS_CONFIG.legal.cancellationPolicy.lessThan15Days}</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">2. Non-Refundable Components</h2>
            <p>
              Certain custom components—including peak holiday resort tariffs, private boat permits, scuba instructor reservations, and specialized safari entry permits issued in traveller names—are non-refundable once committed as per statutory park and vendor guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">3. Date Modifications &amp; Rescheduling</h2>
            <p>
              Where possible, RaO prioritizes flexible rescheduling over cancellation penalties. If you notify us at least 14 days in advance, we will make every effort to transfer your itinerary balance to alternate travel dates within a 6-month window, subject only to vendor seasonal price differences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">4. How to Submit a Cancellation Request</h2>
            <p>
              All cancellation and adjustment requests must be communicated in writing from your registered phone or email address to{" "}
              <a href={`mailto:${BUSINESS_CONFIG.contact.supportEmail}`} className="text-primary hover:underline font-medium">
                {BUSINESS_CONFIG.contact.supportEmail}
              </a>{" "}
              or via your dedicated WhatsApp concierge at{" "}
              <span className="text-foreground font-medium">{BUSINESS_CONFIG.contact.phoneDisplay}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
