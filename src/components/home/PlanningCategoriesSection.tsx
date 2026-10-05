"use client";

import { UserCheck, Users, Clock, CalendarDays, Compass, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "PRIVATE",
    subtitle: "Your own group. Your own pace. Your own space.",
    icon: UserCheck,
    tag: "Exclusive",
  },
  {
    title: "SMALL GROUPS",
    subtitle: "From a few people to a larger circle of friends or family.",
    icon: Users,
    tag: "Friends & Family",
  },
  {
    title: "ONE-DAY",
    subtitle: "Return journeys that prove a memorable trip does not need several days.",
    icon: Clock,
    tag: "1-Day Return",
  },
  {
    title: "WEEKEND",
    subtitle: "Quick 2D/1N escapes to refresh and recharge without taking leave.",
    icon: CalendarDays,
    tag: "2D / 1N Escapes",
  },
  {
    title: "MULTI-DAY",
    subtitle: "Longer, deeper journeys across India and beyond.",
    icon: Compass,
    tag: "3D+ Odysseys",
  },
  {
    title: "CORPORATE",
    subtitle: "Team outings, offsites, dealer meets and group travel requirements.",
    icon: Building2,
    tag: "Outings & Meets",
  },
];

export function PlanningCategoriesSection() {
  return (
    <section className="py-24 px-6 bg-[#1C0A0B]/90 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
            VERSATILE TRAVEL PLANNING
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            HOW CAN RAO <span className="text-primary font-serif italic">PLAN FOR YOU?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Every traveler and occasion is unique. RaO builds the journey structure that matches your exact travel style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`/plan?category=${encodeURIComponent(cat.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-accent transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Plan {cat.title} Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
