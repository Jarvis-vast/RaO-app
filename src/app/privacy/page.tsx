import { BUSINESS_CONFIG } from "@/lib/config/business";

export const metadata = {
  title: "Privacy Policy | RaO Travel Planner",
  description: "How RaO protects your personal contact details, trip preferences, and customer data with industry-standard security.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 space-y-10 shadow-2xl">
        <header className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Data Protection</span>
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last revised: September 2026</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-relaxed font-light text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">1. Personal Information We Collect</h2>
            <p>To design, price, and fulfill your custom travel itinerary, RaO collects:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li><strong>Contact Information:</strong> Full name, verified mobile/WhatsApp number, and email address.</li>
              <li><strong>Trip Parameters:</strong> Travel mood, dates, origin, group composition, dietary requirements, and budget constraints.</li>
              <li><strong>Payment Records:</strong> Encrypted transaction identifiers managed via certified RBI-compliant Indian payment gateways.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">2. Responsible Data &amp; AI Usage</h2>
            <p>
              We use software algorithms and deterministic travel engines to match your constraints with our catalog of verified experiences. Your personal data is stored securely and is never sold, shared with advertising networks, or used to train public global AI models.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">3. Third-Party Service Providers</h2>
            <p>
              To fulfill your reservations, necessary details (traveller names, dates, and vehicle pickup details) are shared strictly with confirmed boutique hotels, licensed transport operators, and activity partners. All partners are bound by confidentiality agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">4. Data Retention &amp; Security</h2>
            <p>
              We retain customer trip records only for as long as necessary to provide seamless on-trip concierge assistance and comply with statutory accounting requirements. We implement modern HTTPS encryption and secure server access boundaries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-primary">5. Your Privacy Rights</h2>
            <p>
              You have the right to review, update, or request the deletion of your personal data at any time. To exercise these rights, please write directly to our privacy officer at{" "}
              <a href={`mailto:${BUSINESS_CONFIG.contact.supportEmail}`} className="text-primary hover:underline font-medium">
                {BUSINESS_CONFIG.contact.supportEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
