export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 space-y-10 shadow-2xl">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-relaxed font-light">
          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">1. Personal Information We Collect</h2>
            <p>To design your personal travel experience, we collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact Information (Name, Email, Phone/WhatsApp)</li>
              <li>Trip Preferences (Mood, Budget, Dates)</li>
              <li>Payment Information (Processed securely via our payment partners)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">2. AI Processing</h2>
            <p>We use Artificial Intelligence to understand your travel preferences and design proposals. Your data is processed securely and is not used to train global AI models.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">3. Third-Party Service Providers</h2>
            <p>We share necessary booking details with hotels, transport providers, and activity operators strictly to fulfill your requested itinerary.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">4. Data Retention & Security</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy and to comply with legal obligations. We use industry-standard encryption to protect your data.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">5. Your Rights</h2>
            <p>You have the right to request access, modification, or deletion of your personal data. Contact us at [Email Placeholder] to exercise these rights.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
