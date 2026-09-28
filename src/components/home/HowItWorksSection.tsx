export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Tell us",
      desc: "Mood + budget + dates + group"
    },
    {
      num: "02",
      title: "We plan",
      desc: "Destination + experience + itinerary"
    },
    {
      num: "03",
      title: "You shape it",
      desc: "Review + modify + approve"
    },
    {
      num: "04",
      title: "We handle it",
      desc: "Booking + coordination + support"
    }
  ];

  return (
    <section className="w-full py-32 px-6 bg-[#1C0A0B]/40 backdrop-blur-xl border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
              How <span className="font-semibold text-primary">RaO</span> works
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-lg leading-relaxed">
              We replace endless research and chaotic group chats with a streamlined, personal planning experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="space-y-4">
                <span className="text-5xl font-light text-border">{step.num}</span>
                <h3 className="text-2xl font-medium text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
