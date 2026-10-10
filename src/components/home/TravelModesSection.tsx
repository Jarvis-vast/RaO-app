"use client";

import { Car, Train, Plane } from "lucide-react";

export function TravelModesSection() {
  const modes = [
    {
      title: "ROADWAYS",
      subtitle: "Private Cars, Tempo Travellers & Coaches",
      desc: "Door-to-door comfort for family day trips, hill station getaways, and private group travel.",
      icon: Car,
      tag: "Road",
    },
    {
      title: "RAILWAYS",
      subtitle: "Train-Based Journeys & Scenic Routes",
      desc: "Comfortable rail connections and train itineraries for scenic, relaxed travel across India.",
      icon: Train,
      tag: "Rail",
    },
    {
      title: "AIRWAYS",
      subtitle: "Domestic Flights & Regional Connections",
      desc: "Fast, efficient flight travel planning when maximizing time at your destination matters most.",
      icon: Plane,
      tag: "Air",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black/40 backdrop-blur-md border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
            ROAD • RAIL • AIR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            HOW YOU TRAVEL <span className="text-[#C88D6A] font-serif italic">IS UP TO YOU.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            &ldquo;RaO can plan your journey by road, railway or air — based on your destination, dates, budget and preferences.&rdquo;
          </p>
        </div>

        {/* Travel Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.title}
                className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 hover:border-[#C88D6A]/40 transition-all duration-300 relative group shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono uppercase font-semibold text-[#E2B28B] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {mode.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-[#C88D6A] transition-colors">
                    {mode.title}
                  </h3>
                  <p className="text-[#E2B28B] text-xs font-medium uppercase tracking-wider">{mode.subtitle}</p>
                </div>

                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {mode.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
