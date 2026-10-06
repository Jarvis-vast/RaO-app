import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalVideoBackground } from "@/components/layout/GlobalVideoBackground";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { TripPlannerProvider } from "@/context/TripPlannerContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://rao-ashy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RaO Travel | Personal Travel Planner in Mumbai",
    template: "%s | RaO Travel",
  },
  description:
    "RaO is your personal travel planner in Mumbai. Tell us your dates, budget, destination or idea and we’ll plan a curated or customized journey by road, rail or air.",
  keywords: [
    "RaO Travel",
    "Remarkable Adventure Odyssey",
    "Personal Travel Planner Mumbai",
    "custom travel planner India",
    "one day trips from Mumbai",
    "private travel planner",
    "family travel planner",
    "group travel planning",
  ],
  authors: [{ name: "RaO Travel Agency", url: baseUrl }],
  creator: "RaO Travel Agency",
  publisher: "RaO Travel Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/images/Logo.jpeg",
    shortcut: "/images/Logo.jpeg",
    apple: "/images/Logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "RaO Travel Agency",
    title: "RaO Travel | Personal Travel Planner in Mumbai",
    description:
      "RaO is your personal travel planner in Mumbai. Tell us your dates, budget, destination or idea and we’ll plan a curated or customized journey by road, rail or air.",
    images: [
      {
        url: `${baseUrl}/images/Logo.jpeg`,
        width: 800,
        height: 800,
        alt: "RaO Travel Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaO Travel | Personal Travel Planner in Mumbai",
    description:
      "RaO is your personal travel planner in Mumbai. Tell us your dates, budget, destination or idea and we’ll plan a curated or customized journey by road, rail or air.",
    images: [`${baseUrl}/images/Logo.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "p:domain_verify": "ca00a74a8681e1d16955b733fb10cce3",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "RaO Travel Agency",
    "alternateName": "Remarkable Adventure Odyssey",
    "url": baseUrl,
    "logo": `${baseUrl}/images/Logo.jpeg`,
    "image": `${baseUrl}/images/Logo.jpeg`,
    "description": "RaO is your personal travel planner in Mumbai. Tell us your dates, budget, destination or idea and we'll plan a curated or customized journey by road, rail or air.",
    "telephone": "+91-9326540456",
    "email": "raotourplanners@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
    },
    "priceRange": "₹₹",
    "sameAs": [
      baseUrl,
      "https://www.pinterest.com/raotourplanners/",
      "https://www.instagram.com/rao.tour.planners/",
      "https://x.com/RaO__travel",
      "https://www.threads.com/@rao.tour.planners"
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RaO Travel",
    "alternateName": "Remarkable Adventure Odyssey",
    "url": baseUrl,
  };

  return (
    <html lang="en" className={`${montserrat.variable} antialiased h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans bg-transparent text-foreground selection:bg-primary/20 selection:text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TripPlannerProvider>
            <GlobalVideoBackground />
            <Navbar />
            {children}
            <Footer />
          </TripPlannerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
