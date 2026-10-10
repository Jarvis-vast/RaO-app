import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  Users, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Car, 
  Train, 
  Plane, 
  Sparkles,
  Heart,
  Clock,
  Wallet
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/config/business";
import { PhotoCreditsSection } from "@/components/ui/rao/PhotoCreditBadge";
import { FaqAccordion } from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Private Trips from Mumbai | RaO Personal Travel Planner",
  description:
    "Plan private day trips, weekend getaways and family journeys from Mumbai with RaO. Share your dates, group size and budget to begin a customized travel plan.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/private-trips",
  },
  openGraph: {
    title: "Private Trips from Mumbai | RaO Personal Travel Planner",
    description:
      "Plan private day trips, weekend getaways and family journeys from Mumbai with RaO. Share your dates, group size and budget to begin a customized travel plan.",
    url: "https://rao-ashy.vercel.app/private-trips",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "RaO Private Trips" }],
  },
};

const whatsappDirectUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
  "Hi RaO! I would like to inquire about planning a private trip from Mumbai for my group."
)}`;

const FAQS = [
  {
    q: "Can RaO help if I have not decided on a destination?",
    a: "Yes, absolutely! You don't need a fixed destination to start. Share your preferred dates, budget, or desired mood (e.g. 'beach getaway', 'peaceful hill retreat', or 'sacred darshan'), and RaO will recommend suitable options from Mumbai."
  },
  {
    q: "Can I plan a trip only for my family or friends?",
    a: "Yes. RaO specializes in private group travel. Your trip is planned exclusively around your people, so you have your own vehicle, private space, and flexible pace — with no shared public tour groups."
  },
  {
    q: "Can the trip be customized to my budget?",
    a: "Yes. We tailor accommodation tiers, transport options, and itinerary scope to fit your target budget. We provide clear, transparent options before any commitment."
  },
  {
    q: "Can RaO consider road, rail or air travel?",
    a: "Yes. Depending on your destination, travel duration, and comfort preferences, RaO can organize door-to-door private AC road transport (sedan, SUV, or Tempo Traveller), scenic train bookings, or domestic flights."
  },
  {
    q: "How is the quotation calculated?",
    a: "Quotations are developed based on your actual travel dates, group size, transport choice, accommodation category, and selected experiences. We outline all inclusions, exclusions, and payment terms upfront."
  },
  {
    q: "When does a trip become confirmed?",
    a: "A trip becomes confirmed only after you review and approve the proposed itinerary and quotation, supplier availability (hotels/vehicles) is re-verified, and agreed initial deposit terms are completed."
  }
];

export default function PrivateTripsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "RaO Travel Agency - Private Trips",
    "alternateName": "Remarkable Adventure Odyssey",
    "url": "https://rao-ashy.vercel.app/private-trips",
    "logo": "https://rao-ashy.vercel.app/images/Logo.jpeg",
    "description": "Plan private day trips, weekend getaways and family journeys from Mumbai with RaO.",
    "telephone": BUSINESS_CONFIG.contact.phoneDisplay,
    "email": BUSINESS_CONFIG.contact.supportEmail,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen pt-28 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#1C0A0B] text-foreground flex flex-col items-center">
        <div className="max-w-7xl w-full space-y-24">
          
          {/* 1. HERO SECTION */}
          <section className="relative rounded-3xl bg-gradient-to-b from-[#2A1013] via-[#1C0A0B] to-[#1C0A0B] border border-white/10 p-8 sm:p-14 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C88D6A]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#E2B28B] text-xs font-semibold tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-[#C88D6A]" /> PRIVATE TRIPS · PLANNED FROM MUMBAI
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Your group. Your pace. <br />
                <span className="text-[#C88D6A] font-serif italic font-normal">Your journey.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#F2EAE4]/90 font-light leading-relaxed max-w-2xl">
                From a refreshing day out to a weekend escape, RaO helps plan journeys around your people, dates, preferences and budget.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-medium text-[#E2B28B]">
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#C88D6A]" />
                  <span>Private Group Only</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                  <Car className="w-4 h-4 text-[#C88D6A]" />
                  <span>Door-to-Door Transport</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                  <Clock className="w-4 h-4 text-[#C88D6A]" />
                  <span>Your Own Pace</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                  <Wallet className="w-4 h-4 text-[#C88D6A]" />
                  <span>Tailored Budget</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] font-semibold transition-all shadow-xl shadow-[#C88D6A]/20">
                  <Link href="/plan?group=Private%20group" className="flex items-center justify-center gap-2">
                    <span>PLAN MY PRIVATE TRIP</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 bg-black/30 backdrop-blur-sm transition-all text-base font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>CHAT WITH RAO</span>
                </a>
              </div>
            </div>
          </section>

          {/* 2. EXPLAIN THE SERVICE & 4 USE CASES */}
          <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
                TAILORED FOR YOUR PEOPLE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                TRAVEL PLANNED FOR <span className="text-[#C88D6A] font-serif italic">YOUR GROUP</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                We design journeys for private families and close groups who want quality time without commercial group tour constraints.
              </p>
            </div>

            {/* 4 Use Case Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Use Case 1 */}
              <div className="bg-[#180809] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#C88D6A]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] group-hover:scale-105 transition-transform">
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C88D6A]">1-Day Escapes</span>
                  <h3 className="text-xl font-bold text-foreground">Day Trips & Local Breaks</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Quick 1-day private outings to Alibaug, Lonavala, or coastal escapes with private AC vehicles and door-to-door comfort.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] text-[#E2B28B] font-mono">
                  Same-day or weekend option
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="bg-[#180809] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#C88D6A]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] group-hover:scale-105 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C88D6A]">2-3 Days</span>
                  <h3 className="text-xl font-bold text-foreground">Weekend Getaways</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Relaxed 2 to 3-day resets in Mahabaleshwar, Coorg, or Nashik wine country planned specifically around your rest and pace.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] text-[#E2B28B] font-mono">
                  Custom accommodation & meals
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="bg-[#180809] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#C88D6A]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C88D6A]">Private Groups</span>
                  <h3 className="text-xl font-bold text-foreground">Family & Friends Trips</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Multi-generational family get-togethers or multi-family holidays with dedicated vehicles and private villa/resort options.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] text-[#E2B28B] font-mono">
                  Space, privacy & shared memories
                </div>
              </div>

              {/* Use Case 4 */}
              <div className="bg-[#180809] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#C88D6A]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C88D6A]/15 border border-[#C88D6A]/30 flex items-center justify-center text-[#C88D6A] group-hover:scale-105 transition-transform">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C88D6A]">Devotional</span>
                  <h3 className="text-xl font-bold text-foreground">Pilgrimage & Sacred Journeys</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Thoughtful sacred odysseys to Kolhapur, Akkalkot, Ujjain, or Vaishno Devi with senior-citizen comfort and darshan coordination.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] text-[#E2B28B] font-mono">
                  Peaceful devotional scheduling
                </div>
              </div>

            </div>

            {/* Service Scope Banner */}
            <div className="bg-black/40 border border-[#C88D6A]/30 rounded-2xl p-6 text-xs text-muted-foreground font-light leading-relaxed space-y-2 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-[#E2B28B] font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-[#C88D6A]" /> Complete Planning Scope
              </div>
              <p>
                RaO assists with route evaluation, transport recommendations (road, rail, or air), handpicked accommodation options, sightseeing flow, and clear cost estimation — customized around your preferred dates and group requirements.
              </p>
            </div>
          </section>

          {/* 3. DEMONSTRATE THE CUSTOMER EXPERIENCE (4 STEPS) */}
          <section className="bg-[#180809]/90 border border-[#C88D6A]/30 rounded-3xl p-8 sm:p-12 space-y-12 shadow-2xl">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
                SIMPLE & TRANSPARENT
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                HOW WE PLAN YOUR <span className="text-[#C88D6A] font-serif italic">PRIVATE TRIP</span>
              </h2>
              <p className="text-base text-muted-foreground font-light">
                From your initial thought to a confirmed, comfortable journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-3">
                <span className="text-3xl font-mono font-bold text-[#C88D6A]/50">01</span>
                <h3 className="text-lg font-bold text-foreground">Share Your Idea</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Tell us your dates, group size, destination, or simple travel preference.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-3">
                <span className="text-3xl font-mono font-bold text-[#C88D6A]/50">02</span>
                <h3 className="text-lg font-bold text-foreground">Refine Details</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  We discuss vehicle choice, hotel style, meal preferences, and budget.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-3">
                <span className="text-3xl font-mono font-bold text-[#C88D6A]/50">03</span>
                <h3 className="text-lg font-bold text-foreground">Review Proposal</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Receive a clear, itemized proposal with route options and costs.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-3">
                <span className="text-3xl font-mono font-bold text-[#C88D6A]/50">04</span>
                <h3 className="text-lg font-bold text-foreground">Confirm & Travel</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Confirm after itinerary, supplier availability, and terms are agreed.
                </p>
              </div>

            </div>

            <div className="text-center pt-2">
              <span className="text-xs text-muted-foreground font-light italic">
                *Requesting a proposal is a free planning consultation and does not obligate you to book.
              </span>
            </div>
          </section>

          {/* 4. ILLUSTRATIVE JOURNEY EXAMPLES */}
          <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
                SAMPLE CONCEPTS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                ILLUSTRATIVE <span className="text-[#C88D6A] font-serif italic">PRIVATE JOURNEYS</span>
              </h2>
              <p className="text-base text-muted-foreground font-light">
                Ideas of what RaO can design for your family or friends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Example 1 */}
              <div className="bg-[#180809] border border-white/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#C88D6A]/40 transition-all">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#C88D6A]/20 text-[#E2B28B] text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase">
                      Weekend Escape
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">2D / 1N</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-[#C88D6A] transition-colors">
                    Relaxed Sahyadri Weekend
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Private SUV drive from Mumbai to Mahabaleshwar/Panchgani. Estate villa stay, scenic valley viewpoints, and flexible return.
                  </p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="pt-4 border-t border-white/10 text-[11px] text-muted-foreground/80 italic">
                    *Illustrative sample concept.
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-full border-[#C88D6A]/40 text-foreground hover:bg-[#C88D6A]/10 text-xs">
                    <Link href="/plan?idea=Relaxed%20Sahyadri%20Weekend">Plan Similar Trip →</Link>
                  </Button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-[#180809] border border-white/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#C88D6A]/40 transition-all">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#C88D6A]/20 text-[#E2B28B] text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase">
                      Sacred Journey
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">1-Day or Weekend</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-[#C88D6A] transition-colors">
                    Kolhapur Sacred Odyssey
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Door-to-door private AC vehicle for Mahalakshmi Darshan. Rest stops, darshan assistance, and flexible stay/return schedule.
                  </p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="pt-4 border-t border-white/10 text-[11px] text-muted-foreground/80 italic">
                    *Schedule customized to dates & temple queues.
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-full border-[#C88D6A]/40 text-foreground hover:bg-[#C88D6A]/10 text-xs">
                    <Link href="/plan?idea=Kolhapur%20Sacred%20Odyssey">Plan Similar Trip →</Link>
                  </Button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-[#180809] border border-white/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#C88D6A]/40 transition-all">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#C88D6A]/20 text-[#E2B28B] text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase">
                      Family Getaway
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">3D / 2N</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-[#C88D6A] transition-colors">
                    Coastal Villa & Fort Retreat
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Private coastal trip for two families to Alibaug/Murud with private pool villa, fort exploration, and seafood dining.
                  </p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="pt-4 border-t border-white/10 text-[11px] text-muted-foreground/80 italic">
                    *Illustrative sample concept.
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-full border-[#C88D6A]/40 text-foreground hover:bg-[#C88D6A]/10 text-xs">
                    <Link href="/plan?idea=Coastal%20Villa%20Retreat">Plan Similar Trip →</Link>
                  </Button>
                </div>
              </div>

            </div>
          </section>

          {/* 5. TRANSPARENCY & TRUST SECTION */}
          <section className="bg-black/30 border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
                HONEST QUOTATION FACTORS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                HOW YOUR QUOTATION IS <span className="text-[#C88D6A] font-serif italic">DEVELOPED</span>
              </h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We don&apos;t publish fake generic price tags because real travel costs depend on honest operational factors:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs">
              <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-[#C88D6A] font-semibold uppercase tracking-wider font-mono">1. Route & Dates</span>
                <p className="text-muted-foreground font-light">Peak vs. off-peak seasonality, road toll distances, and total travel days.</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-[#C88D6A] font-semibold uppercase tracking-wider font-mono">2. Vehicle Choice</span>
                <p className="text-muted-foreground font-light">Sedan, Ertiga, Innova Crysta, or Tempo Traveller based on group size and luggage.</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-[#C88D6A] font-semibold uppercase tracking-wider font-mono">3. Accommodation</span>
                <p className="text-muted-foreground font-light">Boutique homestays, private estate villas, or luxury hotels matching your preference.</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-[#C88D6A] font-semibold uppercase tracking-wider font-mono">4. Experiences</span>
                <p className="text-muted-foreground font-light">Temple assistance, entry passes, vineyard tours, or local dining arrangements.</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-[#C88D6A] font-semibold uppercase tracking-wider font-mono">5. Clear Terms</span>
                <p className="text-muted-foreground font-light">Explicit itemized inclusions, exclusions, and refund policies before confirmation.</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-[#C88D6A] font-semibold uppercase tracking-wider font-mono">6. Supplier Confirmation</span>
                <p className="text-muted-foreground font-light">Final bookings are confirmed only after live supplier availability checks.</p>
              </div>
            </div>
          </section>

          {/* 6. FAQS SECTION */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C88D6A]/15 border border-[#C88D6A]/30 text-[#C88D6A] text-xs font-semibold tracking-widest uppercase">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                QUESTIONS ABOUT <span className="text-[#C88D6A] font-serif italic">PRIVATE TRIPS</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-[#180809] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
              <FaqAccordion faqs={FAQS} />
            </div>
          </section>

          {/* 7. FINAL CONVERSION CTA */}
          <section className="bg-gradient-to-b from-[#2A1013] to-[#180809] border border-[#C88D6A]/40 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                READY TO PLAN YOUR <span className="text-[#C88D6A] font-serif italic">PRIVATE JOURNEY?</span>
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Tell RaO your group size, dates, and budget. We’ll help shape the right trip from Mumbai for your people.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-10 h-14 bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] text-base font-bold transition-all shadow-xl shadow-[#C88D6A]/20">
                <Link href="/plan?group=Private%20group" className="flex items-center justify-center gap-2">
                  <span>PLAN MY PRIVATE TRIP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 bg-black/40 transition-all text-sm font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span>TALK ON WHATSAPP</span>
              </a>
            </div>

            <p className="text-xs text-muted-foreground font-mono">
              Direct connection with Om Bhagwat: {BUSINESS_CONFIG.contact.phoneDisplay}
            </p>
          </section>

          {/* Photo Credits & Licensing */}
          <PhotoCreditsSection />

        </div>
      </div>

      {/* Mobile Sticky Enquiry Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C0A0B]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center gap-3 md:hidden">
        <Button asChild className="flex-1 rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] py-3 text-xs font-bold shadow-lg">
          <Link href="/plan?group=Private%20group" className="flex items-center justify-center gap-1.5">
            <span>PLAN PRIVATE TRIP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Button>

        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
