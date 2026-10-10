"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Train,
  Hotel,
  Utensils,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UPCOMING_TRIPS, UpcomingTrip } from "@/lib/data/upcomingTrips";
import { BUSINESS_CONFIG } from "@/lib/config/business";

import { PhotoCreditBadge } from "@/components/ui/rao/PhotoCreditBadge";

export function UpcomingTripsSection() {
  const [activeTripId, setActiveTripId] = useState<string>(UPCOMING_TRIPS[0].id);

  const activeTrip = UPCOMING_TRIPS.find((t) => t.id === activeTripId) || UPCOMING_TRIPS[0];

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi RaO, I am interested in the ${activeTrip.title} concept (${activeTrip.nextBatchDate}). Please notify me when dates are announced!`
  )}`;

  return (
    <section className="w-full py-28 px-6 bg-gradient-to-b from-[#1C0A0B]/80 via-[#2A1013]/90 to-[#1C0A0B]/80 backdrop-blur-xl border-y border-amber-500/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Upcoming Odyssey Concepts
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              UPCOMING <span className="text-amber-400 font-serif italic">JOURNEYS</span>
            </h2>
            <p className="text-muted-foreground font-light text-base md:text-lg">
              Explore RaO&apos;s upcoming travel projects in the planning stage. Express your interest early or request a private edition for your group.
            </p>
          </div>
          <Link
            href="/upcoming-trips"
            className="flex items-center gap-2 text-[#C88D6A] hover:text-[#E2B28B] transition-colors font-medium text-sm"
          >
            View All Upcoming Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Navigation Selector Chips */}
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-6">
          {UPCOMING_TRIPS.map((trip) => (
            <button
              key={trip.id}
              onClick={() => setActiveTripId(trip.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeTripId === trip.id
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-amber-500/30"
              }`}
            >
              <span>{trip.title}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                activeTripId === trip.id ? "bg-black/20 text-black" : "bg-white/10 text-amber-300"
              }`}>
                {trip.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Active Concept Card Showcase */}
        {activeTrip && (
          <div className="bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-gradient-to-br from-neutral-900 to-black">
              {activeTrip.heroImage ? (
                <>
                  <Image
                    src={activeTrip.heroImage}
                    alt={activeTrip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 lg:bg-gradient-to-r lg:from-transparent lg:to-black/80" />
                </>
              ) : (
                /* Image-less text-led showcase per Rule 5 */
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif text-xl">
                    RaO
                  </div>
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase text-amber-400 tracking-widest">Text-Led Concept Card</div>
                    <h3 className="text-3xl font-bold text-foreground font-serif italic text-amber-100">{activeTrip.title}</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{activeTrip.subtitle}</p>
                  </div>
                  <div className="text-[10px] font-mono text-amber-300/60 uppercase">Verified Travel Concept</div>
                </div>
              )}

              {/* Status Badges */}
              <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2 z-20">
                <span className="bg-amber-500 text-black text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                  {activeTrip.badge}
                </span>
                <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3.5 py-1 rounded-full backdrop-blur-md">
                  {activeTrip.category}
                </span>
              </div>

              {/* Status Note Overlay */}
              <div className="absolute bottom-5 left-5 z-20 bg-black/90 backdrop-blur-md border border-amber-500/30 px-5 py-3.5 rounded-2xl max-w-xs">
                <div className="text-[10px] text-amber-300/80 uppercase tracking-widest font-semibold">Target Timeline</div>
                <div className="text-sm font-semibold text-foreground mt-0.5">
                  {activeTrip.nextBatchDate}
                </div>
                <div className="text-[11px] text-amber-200/90 mt-1 font-mono">
                  STATUS: {activeTrip.status}
                </div>
                {activeTrip.heroImage && (
                  <div className="pt-2 border-t border-amber-500/20 mt-2">
                    <PhotoCreditBadge creditId={activeTrip.id.replace("-escape", "").replace("-pilgrimage", "").replace("-yatra", "")} />
                  </div>
                )}
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-amber-200/90">
                  <span className="flex items-center gap-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> {activeTrip.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {activeTrip.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> {activeTrip.startingFrom} Departure
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight group-hover:text-amber-300 transition-colors uppercase">
                    {activeTrip.title}
                  </h3>
                  <p className="text-amber-400/90 text-sm font-serif italic mt-1">{activeTrip.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mt-4">
                    {activeTrip.overview}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="space-y-3">
                  <div className="text-xs uppercase font-semibold text-amber-300 tracking-wider">Planned Experience Highlights</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground font-light">
                    {activeTrip.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold shrink-0 mt-0.5">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  asChild
                  className="w-full sm:w-auto flex-1 rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold transition-all py-6 shadow-lg shadow-amber-500/20"
                >
                  <a href={whatsappInquiryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4 text-black" />
                    <span>ENQUIRE NOW / REGISTER INTEREST</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto rounded-full border-amber-500/40 text-amber-200 hover:bg-amber-500/10 hover:text-amber-100 py-6 px-6 font-medium"
                >
                  <Link href={`/plan?dest=${encodeURIComponent(activeTrip.location.split(',')[0])}&idea=${encodeURIComponent(activeTrip.title)}`}>
                    PLAN MY EDITION
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Small Cards Grid for Quick Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UPCOMING_TRIPS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTripId(t.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 ${
                activeTripId === t.id
                  ? "bg-black/90 border-amber-500/50 shadow-xl"
                  : "bg-black/60 border-white/10 hover:border-amber-500/30"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                    {t.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{t.duration}</span>
                </div>
                <h4 className="font-semibold text-sm text-foreground">{t.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2 font-light">{t.tagline}</p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-medium">
                <span>{t.status}</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
