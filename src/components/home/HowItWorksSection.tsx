"use client";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "TELL US",
      desc: "Your dates, budget, people, destination or idea.",
    },
    {
      num: "02",
      title: "WE PLAN",
      desc: "Transport, itinerary, stays, experiences and the details.",
    },
    {
      num: "03",
      title: "YOU SHAPE IT",
      desc: "Review it, refine it and make it yours.",
    },
    {
      num: "04",
      title: "WE HANDLE IT",
      desc: "Bookings, coordination and trip support.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-black/40 backdrop-blur-xl border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
              THOUGHTFUL PLANNING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              HOW <span className="font-serif italic text-[#C88D6A]">RaO</span> WORKS
            </h2>
            <p className="text-xl md:text-2xl text-[#E2B28B] font-medium tracking-wide">
              YOU BRING THE IDEA. RAO BUILDS THE JOURNEY.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              You don&apos;t need to figure out every booking, compare twenty hotels, or solve transport puzzles. Start with your idea, and RaO handles the complete travel plan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-black/30 border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#C88D6A]/40 transition-colors">
                <span className="text-4xl font-mono font-bold text-[#C88D6A]/40">{step.num}</span>
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
