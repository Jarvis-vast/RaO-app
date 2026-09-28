export default function CancellationPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 space-y-10 shadow-2xl">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">Cancellation & Refunds</h1>
          <p className="text-muted-foreground text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-relaxed font-light">
          <section className="space-y-4">
            <p className="text-lg">We understand that plans change. Our cancellation policy is designed to be as transparent as possible, reflecting the commitments we make to suppliers on your behalf.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">1. General Principles</h2>
            <p>Exact refund outcomes depend on several factors:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Supplier specific policies (Hotels, Activities)</li>
              <li>Transport booking conditions</li>
              <li>Timing of your cancellation</li>
              <li>RaO's administrative and planning terms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">2. Timeline-Based Rules</h2>
            <p>[Placeholder for configurable business rules, e.g., 30+ days notice, 15-30 days notice, less than 15 days notice percentages]</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">3. Non-Refundable Components</h2>
            <p>Certain components, such as booked flights, specific non-refundable hotel rates, and custom activity deposits, may not be eligible for refunds under any circumstances as per the supplier's rules.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">4. How to Request a Cancellation</h2>
            <p>All cancellation requests must be made in writing by contacting your assigned RaO travel planner or emailing [Email Placeholder].</p>
          </section>
        </div>
      </div>
    </div>
  );
}
