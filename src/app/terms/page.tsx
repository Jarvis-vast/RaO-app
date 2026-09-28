export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 space-y-10 shadow-2xl">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">Terms & Conditions</h1>
          <p className="text-muted-foreground text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-relaxed font-light">
          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">1. Introduction</h2>
            <p>Welcome to [Company Legal Name Placeholder] ("RaO"). These Terms & Conditions govern your use of our platform and travel planning services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">2. Company Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Company Name:</strong> [Legal Name Placeholder]</li>
              <li><strong>Registered Address:</strong> [Address Placeholder]</li>
              <li><strong>Contact:</strong> [Email Placeholder]</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">3. Booking Terms</h2>
            <p>[Configurable business rules regarding confirmation of proposals, payment deadlines, and acceptance of itineraries.]</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">4. Payment Terms</h2>
            <p>[Details regarding upfront payments, installment options, and accepted payment methods.]</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">5. Supplier Dependency</h2>
            <p>RaO acts as an agent connecting travellers with third-party suppliers (hotels, transport, activities). We are not liable for the direct operational failures of these suppliers, though we will assist in resolving disputes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">6. Force Majeure</h2>
            <p>[Standard clauses covering events beyond reasonable control such as natural disasters, pandemics, or government travel restrictions.]</p>
          </section>
        </div>
      </div>
    </div>
  );
}
