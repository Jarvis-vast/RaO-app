"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Clock, Train, Hotel, Utensils, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/rao/SectionHeading";
import { Button } from "@/components/ui/button";
import { UPCOMING_TRIPS } from "@/lib/data/upcomingTrips";

export function UpcomingTripsSection() {
  const flagshipTrip = UPCOMING_TRIPS[0]; // Ujjain Temple Escape

  return (
    <section className="w-full py-28 px-6 bg-gradient-to-b from-[#1C0A0B]/80 via-[#2A1013]/90 to-[#1C0A0B]/80 backdrop-blur-xl border-y border-amber-500/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Scheduled Group Departure
            </div>
            <SectionHeading
              title="Upcoming"
              highlight="Escapes"
              subtitle="Hand-crafted group odysseys with guaranteed departures, curated itineraries, and seamless on-ground coordination."
            />
          </div>
          <Link
            href="/upcoming-trips"
            className="flex items-center gap-2 text-[#C88D6A] hover:text-[#E2B28B] transition-colors font-medium text-sm"
          >
            View All Upcoming Trips <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Flagship Trip: Ujjain */}
        {flagshipTrip && (
          <div className="bg-[#180809]/90 border border-amber-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden">
              <Image
                src={flagshipTrip.heroImage}
                alt={flagshipTrip.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180809] via-transparent to-black/40 lg:bg-gradient-to-r lg:from-transparent lg:to-[#180809]" />
              
              {/* Status Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="bg-amber-500/90 text-[#1C0A0B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  {flagshipTrip.badge}
                </span>
                <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
                  {flagshipTrip.status}
                </span>
              </div>

              {/* Price Tag Overlay */}
              <div className="absolute bottom-5 left-5 bg-[#1C0A0B]/90 backdrop-blur-md border border-amber-500/30 px-4 py-2.5 rounded-2xl">
                <div className="text-xs text-amber-200/70 uppercase tracking-widest font-medium">Starting at</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-amber-400">₹{flagshipTrip.price.toLocaleString("en-IN")}</span>
                  {flagshipTrip.originalPrice && (
                    <span className="text-sm text-white/40 line-through">₹{flagshipTrip.originalPrice.toLocaleString("en-IN")}</span>
                  )}
                  <span className="text-xs text-white/70">{flagshipTrip.priceUnit}</span>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-amber-200/80">
                  <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> {flagshipTrip.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {flagshipTrip.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> {flagshipTrip.nextBatchDate}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight group-hover:text-amber-300 transition-colors">
                    {flagshipTrip.title}
                  </h3>
                  <p className="text-amber-400/90 text-sm font-serif italic mt-1">{flagshipTrip.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mt-4">
                    {flagshipTrip.overview}
                  </p>
                </div>

                {/* Inclusion Quick Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-foreground/80">
                    <Train className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>R/T Train Included</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-foreground/80">
                    <Hotel className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>1-Night Hotel Stay</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-foreground/80">
                    <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>All Meals (2B/2L/2D)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-foreground/80">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>3 Temples Circuit</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs uppercase font-semibold text-amber-300 tracking-wider">Trip Highlights</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground font-light">
                    {flagshipTrip.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  asChild
                  className="w-full sm:w-auto flex-1 rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold transition-all py-6 shadow-lg shadow-amber-500/20"
                >
                  <Link href={`/upcoming-trips/${flagshipTrip.slug}`}>
                    Explore Ujjain Itinerary & Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto rounded-full border-amber-500/40 text-amber-200 hover:bg-amber-500/10 hover:text-amber-100 py-6 px-6 font-medium"
                >
                  <Link href={`/plan?trip=${flagshipTrip.slug}`}>
                    Reserve Spot (₹3,499)
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
