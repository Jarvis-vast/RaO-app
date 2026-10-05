"use client";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "1. TELL US",
      desc: "Dates + budget + people + preferences",
    },
    {
      num: "02",
      title: "2. WE PLAN",
      desc: "Destination + transport + itinerary + stay/experience",
    },
    {
      num: "03",
      title: "3. YOU SHAPE IT",
      desc: "Review, modify and approve",
    },
    {
      num: "04",
      title: "4. WE HANDLE IT",
      desc: "Bookings + coordination + support",
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-[#1C0A0B]/80 backdrop-blur-xl border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
              THOUGHTFUL PLANNING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              HOW <span className="font-serif italic text-primary">RaO</span> WORKS
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              You don&apos;t need to know the destination. You don&apos;t need to compare twenty hotels. You don&apos;t need to solve the transport puzzle. Start with what you want. RaO will work out the journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-black/30 border border-white/10 rounded-2xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                <span className="text-4xl font-mono font-bold text-primary/40">{step.num}</span>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
