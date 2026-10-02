import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  Phone,
  Mail,
  Globe,
  Sparkles,
  Train,
  Hotel,
  Utensils,
  ShieldCheck,
  Building2,
  FileText,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UPCOMING_TRIPS } from "@/lib/data/upcomingTrips";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return UPCOMING_TRIPS.map((trip) => ({
    slug: trip.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const trip = UPCOMING_TRIPS.find((t) => t.slug === resolvedParams.slug);
  if (!trip) return {};
  return {
    title: `${trip.title} — ${trip.subtitle} | RaO Travel Agency`,
    description: trip.overview,
  };
}

export default async function TripDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const trip = UPCOMING_TRIPS.find((t) => t.slug === resolvedParams.slug);

  if (!trip) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#1C0A0B] text-foreground relative">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <Link
          href="/upcoming-trips"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Upcoming Escapes
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl min-h-[460px] flex flex-col justify-end p-8 md:p-12 group">
          <Image
            src={trip.heroImage}
            alt={trip.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0B] via-[#1C0A0B]/60 to-black/30" />

          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-amber-500 text-black text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                {trip.badge}
              </span>
              <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3.5 py-1 rounded-full backdrop-blur-md">
                {trip.status}
              </span>
              <span className="text-xs text-amber-200/90 font-serif italic">{trip.tagline}</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{trip.title}</h1>
              <p className="text-xl md:text-2xl text-amber-400 font-serif italic mt-2">{trip.subtitle}</p>
            </div>

            {/* Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-amber-100">
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
                <MapPin className="w-4 h-4 text-amber-400" /> {trip.location}
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-amber-400" /> {trip.duration}
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
                <Calendar className="w-4 h-4 text-amber-400" /> {trip.nextBatchDate}
              </span>
            </div>
          </div>

          {/* Floating Price Card */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-8 lg:right-8 bg-[#180809]/95 backdrop-blur-xl border border-amber-500/30 p-6 rounded-2xl text-left space-y-3 shadow-2xl z-20 max-w-sm">
            <div className="text-xs text-amber-200/70 uppercase tracking-widest font-medium">All-Inclusive Fixed Price</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-amber-400">₹{trip.price.toLocaleString("en-IN")}</span>
              {trip.originalPrice && (
                <span className="text-sm text-white/40 line-through">₹{trip.originalPrice.toLocaleString("en-IN")}</span>
              )}
              <span className="text-xs text-white/70">{trip.priceUnit}</span>
            </div>
            <p className="text-xs text-muted-foreground font-light">
              Includes R/T train, hotel stay, all 6 meals & local transport.
            </p>
            <Button
              asChild
              className="w-full rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold py-5 transition-all shadow-lg shadow-amber-500/20"
            >
              <Link href={`/plan?trip=${trip.slug}`}>Reserve Spot Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Detailed Column */}
        <div className="lg:col-span-8 space-y-16">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Trip Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base font-light">{trip.overview}</p>

            {/* Quick Feature Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-[#180809] border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                <Train className="w-5 h-5 text-amber-400 mx-auto" />
                <div className="text-xs font-medium text-foreground">Train Travel</div>
                <div className="text-[11px] text-muted-foreground">R/T Mumbai</div>
              </div>
              <div className="bg-[#180809] border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                <Hotel className="w-5 h-5 text-amber-400 mx-auto" />
                <div className="text-xs font-medium text-foreground">Hotel Stay</div>
                <div className="text-[11px] text-muted-foreground">1 Night Included</div>
              </div>
              <div className="bg-[#180809] border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                <Utensils className="w-5 h-5 text-amber-400 mx-auto" />
                <div className="text-xs font-medium text-foreground">All Meals</div>
                <div className="text-[11px] text-muted-foreground">2B + 2L + 2D</div>
              </div>
              <div className="bg-[#180809] border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                <Building2 className="w-5 h-5 text-amber-400 mx-auto" />
                <div className="text-xs font-medium text-foreground">3 Temples</div>
                <div className="text-[11px] text-muted-foreground">Guided Circuit</div>
              </div>
            </div>
          </section>

          {/* Temples Showcase */}
          {trip.temples && trip.temples.length > 0 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-amber-300">Sacred 3-Temple Circuit</h2>
                <p className="text-xs text-muted-foreground font-light mt-1">
                  The primary spiritual pillars of the Ujjain odyssey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trip.temples.map((temple) => (
                  <div
                    key={temple.number}
                    className="bg-[#180809] border border-amber-500/20 rounded-2xl p-6 space-y-3 relative hover:border-amber-500/40 transition-all"
                  >
                    <div className="text-3xl font-bold text-amber-500/40 font-serif">{temple.number}</div>
                    <h3 className="text-xl font-semibold text-foreground">{temple.name}</h3>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {temple.tagline}
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{temple.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Timeline Itinerary */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-amber-300">Detailed Day-by-Day Itinerary</h2>
              <p className="text-xs text-muted-foreground font-light mt-1">
                Designed for comfortable pace, darshan timings, group leisure, and smooth logistics.
              </p>
            </div>

            <div className="space-y-6 relative border-l-2 border-amber-500/30 ml-4 pl-6">
              {trip.itinerary.map((node, index) => (
                <div key={index} className="relative space-y-2 group">
                  {/* Dot Marker */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#1C0A0B] shadow-md group-hover:scale-125 transition-transform" />

                  <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    {node.period}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{node.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{node.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Authentic Photo Gallery */}
          {trip.galleryImages && trip.galleryImages.length > 0 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-amber-300">Authentic Destination Gallery</h2>
                <p className="text-xs text-muted-foreground font-light mt-1">
                  A glimpse into Shri Mahakal Lok Corridor & Ujjain heritage atmosphere.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trip.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-64 rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg group"
                  >
                    <Image
                      src={img}
                      alt={`${trip.title} Photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Inclusions & Exclusions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Includes */}
            <div className="bg-[#180809]/90 border border-emerald-500/30 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> What's Included
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground font-light">
                {trip.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excludes */}
            <div className="bg-[#180809]/90 border border-red-500/30 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-red-300 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" /> Not Included
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground font-light">
                {trip.excludes.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Booking Card */}
          <div className="bg-[#180809] border border-amber-500/30 p-8 rounded-3xl space-y-6 sticky top-28 shadow-2xl">
            <div>
              <div className="text-xs uppercase font-semibold text-amber-400 tracking-wider">Group Booking</div>
              <h3 className="text-2xl font-semibold text-foreground mt-1">Reserve Your Seats</h3>
              <p className="text-xs text-muted-foreground font-light mt-2">
                Seats are limited for each batch to ensure comfortable group management.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Per Person Price</span>
                <span className="text-foreground font-medium">₹3,499</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Duration</span>
                <span className="text-foreground font-medium">2D / 1N</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Departure Point</span>
                <span className="text-foreground font-medium">Mumbai Railway Station</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground border-t border-white/10 pt-2 font-medium text-amber-300">
                <span>Total Budget</span>
                <span>₹3,499 / person</span>
              </div>
            </div>

            <Button
              asChild
              className="w-full rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold py-6 text-base transition-all shadow-lg shadow-amber-500/20"
            >
              <Link href={`/plan?trip=${trip.slug}`}>Book This Escape</Link>
            </Button>

            {trip.pdfUrl && (
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-amber-500/40 text-amber-200 hover:bg-amber-500/10 py-5 text-xs font-medium flex items-center justify-center gap-2"
              >
                <a href={trip.pdfUrl} target="_blank" rel="noopener noreferrer" download>
                  <FileText className="w-4 h-4 text-amber-400" />
                  Download Official PDF Brochure
                  <Download className="w-3.5 h-3.5 ml-auto text-amber-400" />
                </a>
              </Button>
            )}

            {/* Organizer Box */}
            <div className="border-t border-white/10 pt-6 space-y-3 text-xs">
              <div className="font-semibold text-amber-300 uppercase tracking-wider">Trip Organizer</div>
              <div className="space-y-1.5 text-muted-foreground font-light">
                <div className="font-medium text-foreground text-sm">{trip.organizer.name}</div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <a href={`tel:${trip.organizer.phone}`} className="hover:text-amber-300 transition-colors">
                    {trip.organizer.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href={`mailto:${trip.organizer.email}`} className="hover:text-amber-300 transition-colors">
                    {trip.organizer.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>{trip.organizer.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
