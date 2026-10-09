import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Calendar, CheckCircle2, Sparkles, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UPCOMING_TRIPS } from "@/lib/data/upcomingTrips";
import { BUSINESS_CONFIG } from "@/lib/config/business";
import { PhotoCreditsSection } from "@/components/ui/rao/PhotoCreditBadge";

export const metadata = {
  title: "Upcoming Journeys | Kolhapur, Akkalkot, Vaishno Devi & Ujjain | RaO Travel",
  description:
    "Explore upcoming RaO travel projects including Kolhapur Sacred & Heritage Escape, Akkalkot Devotional Pilgrimage, Vaishno Devi Yatra, and Ujjain Temple Escape.",
  alternates: {
    canonical: "https://rao-ashy.vercel.app/upcoming-trips",
  },
  openGraph: {
    title: "Upcoming Journeys | RaO Personal Travel Planner",
    description:
      "Explore upcoming RaO travel projects including Kolhapur, Akkalkot, Vaishno Devi, and Ujjain.",
    url: "https://rao-ashy.vercel.app/upcoming-trips",
    siteName: "RaO Travel Agency",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rao-ashy.vercel.app/images/Logo.jpeg", width: 800, height: 800, alt: "Upcoming Journeys" }],
  },
};

export default function UpcomingTripsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center bg-[#1C0A0B] text-foreground relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full space-y-16 relative z-10">
        {/* Header */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Planned Odysseys & Projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Upcoming <span className="text-amber-400 font-serif italic">Travel Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Upcoming RaO travel projects currently being developed or prepared for departure. Express your interest early or request a private journey tailored to your dates.
          </p>
        </header>

        {/* Trips Grid */}
        <div className="space-y-12">
          {UPCOMING_TRIPS.map((trip) => {
            const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hi RaO, I am interested in the ${trip.title} concept (${trip.nextBatchDate}). Please keep me updated!`
            )}`;

            return (
              <div
                key={trip.id}
                className="bg-[#180809]/80 backdrop-blur-xl border border-amber-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
              >
                {/* Visual Section */}
                <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full overflow-hidden bg-gradient-to-br from-[#2A1013] to-[#180809]">
                  {trip.heroImage ? (
                    <>
                      <Image
                        src={trip.heroImage}
                        alt={trip.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#180809] via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#180809]" />
                    </>
                  ) : (
                    /* Image-less text-led card rendering for verified unphotographed destinations per Rule 5 */
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                          {trip.category}
                        </span>
                        <Info className="w-4 h-4 text-amber-400/60" />
                      </div>
                      <div className="space-y-3">
                        <div className="text-[10px] font-mono uppercase text-amber-400 tracking-widest">Verified Concept</div>
                        <h3 className="text-3xl font-bold text-foreground font-serif italic text-amber-100">{trip.title}</h3>
                        <p className="text-xs text-muted-foreground font-light leading-relaxed">{trip.subtitle}</p>
                      </div>
                      <div className="text-[11px] text-amber-300/70 border-t border-amber-500/20 pt-3">
                        Text-led visual card enforcing RaO authentic photograph policy.
                      </div>
                    </div>
                  )}

                  {/* Badges */}
                  <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2 z-20">
                    <span className="bg-amber-500/90 text-[#1C0A0B] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
                      {trip.badge}
                    </span>
                    <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-md">
                      {trip.status}
                    </span>
                  </div>

                  {/* Timeline Tag */}
                  <div className="absolute bottom-5 left-5 z-20 bg-[#1C0A0B]/95 backdrop-blur-md border border-amber-500/30 px-5 py-3 rounded-2xl max-w-xs">
                    <div className="text-[10px] text-amber-200/70 uppercase tracking-widest font-medium">Operational Status</div>
                    <div className="text-sm font-semibold text-amber-400 mt-0.5">
                      {trip.nextBatchDate}
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-amber-200/90">
                      <span className="flex items-center gap-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" /> {trip.location}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-amber-400" /> {trip.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" /> {trip.startingFrom} Departure
                      </span>
                    </div>

                    <div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight group-hover:text-amber-300 transition-colors">
                        {trip.title}
                      </h2>
                      <p className="text-amber-400/90 text-sm font-serif italic mt-1">{trip.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light mt-4">
                        {trip.overview}
                      </p>
                    </div>

                    {/* Highlights Grid */}
                    <div className="space-y-3">
                      <div className="text-xs uppercase font-semibold text-amber-300 tracking-wider">Planned Highlights</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground font-light">
                        {trip.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      asChild
                      className="w-full sm:w-auto flex-1 rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold transition-all py-6 shadow-lg shadow-amber-500/20"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4 text-black" />
                        <span>ENQUIRE NOW / REGISTER INTEREST</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto rounded-full border-amber-500/40 text-amber-200 hover:bg-amber-500/10 py-6 px-6 font-medium"
                    >
                      <Link href={`/plan?dest=${encodeURIComponent(trip.location.split(',')[0])}&idea=${encodeURIComponent(trip.title)}`}>
                        Plan Custom Trip
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Group Banner */}
        <div className="bg-[#2A1013]/60 border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-300">Want a private journey for your own group?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto font-light text-sm">
            Whether it is a sacred temple circuit, a family weekend getaway, or a private group escape, RaO will plan around your exact dates and budget.
          </p>
          <div>
            <Button
              asChild
              className="rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] px-8 py-6 text-base font-semibold"
            >
              <Link href="/plan">Plan My Private Trip</Link>
            </Button>
          </div>
        </div>

        {/* Photo Credits & Licensing Transparency Section */}
        <PhotoCreditsSection />
      </div>
    </div>
  );
}
