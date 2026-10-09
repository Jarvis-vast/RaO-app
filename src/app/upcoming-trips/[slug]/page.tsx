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
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://rao-ashy.vercel.app";
  const url = `${baseUrl}/upcoming-trips/${trip.slug}`;

  const title = resolvedParams.slug === "ujjain-temple-escape"
    ? "Ujjain Temple Escape | RaO Personal Travel Planner"
    : `${trip.title} | RaO Personal Travel Planner`;

  const description = resolvedParams.slug === "ujjain-temple-escape"
    ? "Explore RaO’s Ujjain Temple Escape concept, a 2D/1N spiritual journey from Mumbai planned for after Diwali 2026."
    : trip.overview;

  return {
    title,
    description,
    keywords: [
      trip.title,
      trip.location,
      "Mahakaleshwar Jyotirlinga package",
      "Ujjain tour package from Mumbai",
      "Harsiddhi Mata temple",
      "Kal Bhairav Ujjain",
      "RaO group escapes",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url: url,
      siteName: "RaO Travel Agency",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${baseUrl}${trip.heroImage}`,
          width: 1200,
          height: 630,
          alt: trip.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${trip.heroImage}`],
    },
  };
}

export default async function TripDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const trip = UPCOMING_TRIPS.find((t) => t.slug === resolvedParams.slug);

  if (!trip) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://rao-ashy.vercel.app";
  const url = `${baseUrl}/upcoming-trips/${trip.slug}`;

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": trip.title,
    "description": trip.overview,
    "provider": {
      "@type": "TravelAgency",
      "name": "RaO Travel Agency",
      "url": baseUrl,
    },
    "touristType": "Spiritual / Pilgrimage Travelers",
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": trip.itinerary?.length || 0,
      "itemListElement": trip.itinerary?.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": item.title,
        "description": item.description,
      })) || [],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Upcoming Journeys",
        "item": `${baseUrl}/upcoming-trips`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": trip.title,
        "item": url,
      },
    ],
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#1C0A0B] text-foreground relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl min-h-[460px] flex flex-col justify-end p-8 md:p-12 group bg-gradient-to-br from-[#2A1013] to-[#180809]">
          {trip.heroImage ? (
            <>
              <Image
                src={trip.heroImage}
                alt={trip.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0B] via-[#1C0A0B]/60 to-black/30" />
            </>
          ) : (
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <div className="text-xs font-mono uppercase text-amber-400 tracking-widest">Verified RaO Concept</div>
            </div>
          )}

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

          {/* Floating Planning Stage Card */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-8 lg:right-8 bg-[#180809]/95 backdrop-blur-xl border border-amber-500/30 p-6 rounded-2xl text-left space-y-4 shadow-2xl z-20 max-w-sm">
            <div className="text-xs text-amber-300 uppercase tracking-widest font-semibold">{trip.badge}</div>
            <div>
              <div className="text-xl font-bold text-foreground">{trip.status}</div>
              <p className="text-xs text-amber-200/80 mt-1 font-light">
                Targeting {trip.nextBatchDate}. Exact dates & costing will be finalized upon batch availability.
              </p>
            </div>
            <p className="text-xs text-muted-foreground font-light border-t border-white/10 pt-3">
              Covers round-trip transport options, stays, meal planning & guided itinerary.
            </p>
            <Button
              asChild
              className="w-full rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold py-5 transition-all shadow-lg shadow-amber-500/20"
            >
              <a
                href={`https://wa.me/919326540456?text=${encodeURIComponent(
                  `Hi RaO, I want to express interest for the ${trip.title} (${trip.nextBatchDate}). Please keep me updated!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span>REGISTER INTEREST ON WHATSAPP</span>
              </a>
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
                <div className="text-xs font-medium text-foreground">Transport</div>
                <div className="text-[11px] text-muted-foreground">Rail / Road</div>
              </div>
              <div className="bg-[#180809] border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                <Hotel className="w-5 h-5 text-amber-400 mx-auto" />
                <div className="text-xs font-medium text-foreground">Stay Options</div>
                <div className="text-[11px] text-muted-foreground">Comfort Hotel</div>
              </div>
              <div className="bg-[#180809] border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                <Utensils className="w-5 h-5 text-amber-400 mx-auto" />
                <div className="text-xs font-medium text-foreground">Meals</div>
                <div className="text-[11px] text-muted-foreground">Planned Meals</div>
              </div>
              <div className="bg-[#180809] border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                <Building2 className="w-5 h-5 text-amber-400 mx-auto" />
                <div className="text-xs font-medium text-foreground">Circuit</div>
                <div className="text-[11px] text-muted-foreground">Guided Stops</div>
              </div>
            </div>
          </section>

          {/* Temples Showcase */}
          {trip.temples && trip.temples.length > 0 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-amber-300">Sacred Temple Circuit</h2>
                <p className="text-xs text-muted-foreground font-light mt-1">
                  The primary spiritual pillars of the journey.
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
          {trip.itinerary && trip.itinerary.length > 0 && (
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
          )}

          {/* Authentic Photo Gallery */}
          {trip.galleryImages && trip.galleryImages.length > 0 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-amber-300">Authentic Destination Gallery</h2>
                <p className="text-xs text-muted-foreground font-light mt-1">
                  A glimpse into the heritage atmosphere.
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
            {trip.includes && trip.includes.length > 0 && (
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
            )}

            {/* Excludes */}
            {trip.excludes && trip.excludes.length > 0 && (
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
            )}
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Expressions of Interest Card */}
          <div className="bg-[#180809] border border-amber-500/30 p-8 rounded-3xl space-y-6 sticky top-28 shadow-2xl">
            <div>
              <div className="text-xs uppercase font-semibold text-amber-400 tracking-wider">Planning Stage</div>
              <h3 className="text-2xl font-semibold text-foreground mt-1">Express Interest</h3>
              <p className="text-xs text-muted-foreground font-light mt-2">
                This trip concept is currently in the planning stage for after Diwali 2026. Register early to receive batch updates and lock in preferred dates.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Target Timeline</span>
                <span className="text-amber-300 font-medium">Nov 11, 2026 Onward</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Duration</span>
                <span className="text-foreground font-medium">2D / 1N</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Origin</span>
                <span className="text-foreground font-medium">Mumbai</span>
              </div>
              <div className="flex justify-between text-muted-foreground border-t border-white/10 pt-2 font-medium text-amber-300">
                <span>Pricing</span>
                <span>Estimate on Request</span>
              </div>
            </div>

            <Button
              asChild
              className="w-full rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold py-6 text-base transition-all shadow-lg shadow-amber-500/20"
            >
              <a
                href={`https://wa.me/919326540456?text=${encodeURIComponent(
                  `Hi RaO, I want to express interest for the ${trip.title} (Planning for after Diwali 2026). Please keep me updated!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span>REGISTER INTEREST ON WHATSAPP</span>
              </a>
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
