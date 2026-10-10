"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Sparkles, Compass, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COUPLES_ESCAPES, COUPLES_ESCAPES_HEADER } from "@/lib/data/couplesEscapes";
import { BUSINESS_CONFIG } from "@/lib/config/business";
import { PhotoCreditBadge } from "@/components/ui/rao/PhotoCreditBadge";

export function CouplesEscapesSection() {
  return (
    <section className="w-full py-28 px-6 bg-gradient-to-b from-[#1C0A0B] via-[#2D1215]/95 to-[#1C0A0B] border-t border-[#C88D6A]/20 relative overflow-hidden">
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#C88D6A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E2B28B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#E2B28B] text-xs font-semibold tracking-widest uppercase">
              <Heart className="w-3.5 h-3.5 text-[#C88D6A] fill-[#C88D6A]/30" /> {COUPLES_ESCAPES_HEADER.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
              COUPLES <span className="text-[#C88D6A] font-serif italic font-normal text-3xl md:text-5xl">ESCAPES</span>
            </h2>
            <p className="text-xl font-serif italic text-[#E2B28B] font-light">
              &ldquo;{COUPLES_ESCAPES_HEADER.subtitle}&rdquo;
            </p>
            <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
              {COUPLES_ESCAPES_HEADER.description}
            </p>
          </div>
          <div>
            <Button
              asChild
              className="rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] px-8 py-6 text-sm font-semibold transition-all shadow-xl shadow-[#C88D6A]/15"
            >
              <Link href="/plan?category=couples" className="flex items-center gap-2">
                <span>PLAN YOUR COUPLES TRIP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Dynamic Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUPLES_ESCAPES.map((item) => {
            const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hi RaO, I am interested in planning a Couples Escape to ${item.name}. Please share details and suggestions!`
            )}`;

            return (
              <div
                key={item.id}
                className="bg-black/60 backdrop-blur-xl border border-[#C88D6A]/25 rounded-3xl overflow-hidden shadow-2xl hover:border-[#C88D6A]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image or Text-Led Visual */}
                {item.heroImage ? (
                  <div className="relative h-64 w-full overflow-hidden bg-black/40">
                    <Image
                      src={item.heroImage}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="bg-black/80 border border-[#C88D6A]/40 text-[#E2B28B] text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-md">
                        {item.category}
                      </span>
                      <span className="bg-[#C88D6A]/90 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 z-10">
                      <h3 className="text-3xl font-bold text-foreground group-hover:text-[#E2B28B] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#C88D6A] font-serif italic mt-0.5">{item.tagline}</p>
                    </div>

                    {/* Photo Credit Badge — Accessible on mobile and desktop */}
                    <PhotoCreditBadge creditId={item.id} className="absolute bottom-3 right-3 z-20 flex" />
                  </div>
                ) : (
                  /* Text-led card styling for image-less entries */
                  <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border-b border-[#C88D6A]/20 relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C88D6A]/10 rounded-full blur-xl pointer-events-none" />
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#E2B28B] text-[11px] font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-mono text-[#C88D6A]">{item.duration}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-[#E2B28B] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#C88D6A] font-serif italic mt-1">{item.tagline}</p>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs text-[#E2B28B] font-medium leading-relaxed uppercase tracking-wider">
                      {item.positioning}
                    </p>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] uppercase font-semibold text-[#C88D6A] tracking-wider">
                        Couples Experience Highlights
                      </div>
                      <ul className="space-y-1.5 text-xs text-muted-foreground/90 font-light">
                        {item.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#C88D6A] font-bold mt-0.5">✦</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <Button
                      asChild
                      className="w-full rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] font-semibold py-5 transition-all text-xs shadow-md shadow-[#C88D6A]/10"
                    >
                      <Link href={`/plan?dest=${encodeURIComponent(item.name)}&category=couples`}>
                        {COUPLES_ESCAPES_HEADER.ctaText} →
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="ghost"
                      className="w-full rounded-full text-xs text-[#E2B28B] hover:bg-white/5 py-4 font-normal"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Enquire via WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future-proof Note */}
        <div className="bg-black/40 border border-[#C88D6A]/20 rounded-2xl p-6 text-center text-xs text-muted-foreground font-light max-w-2xl mx-auto space-y-2">
          <p className="text-[#E2B28B] font-medium">Have a specific romantic destination in mind?</p>
          <p>
            Whether it is Kerala backwaters, Udaipur lake palaces, or a private hillside cottage in Maharashtra, RaO designs customized escapes around your dates, budget, and travel mood.
          </p>
        </div>
      </div>
    </section>
  );
}
