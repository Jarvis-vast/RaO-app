import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalVideoBackground } from "@/components/layout/GlobalVideoBackground";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://rao-ashy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RaO Travel Agency — Remarkable Adventure Odyssey",
    template: "%s | RaO Travel Agency",
  },
  description:
    "Tell RaO your mood, budget, and dates. We plan remarkable custom itineraries, Ujjain temple escapes, and group travel odysseys across India.",
  keywords: [
    "RaO Travel Agency",
    "Remarkable Adventure Odyssey",
    "Ujjain temple escape package",
    "Mahakaleshwar Jyotirlinga tour from Mumbai",
    "custom travel planner India",
    "group travel escapes India",
    "Mumbai to Ujjain train package",
    "temple tour package Ujjain",
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
    title: "RaO Travel Agency — Remarkable Adventure Odyssey",
    description:
      "Tell RaO your mood, budget, and dates. We plan remarkable custom itineraries, Ujjain temple escapes, and group travel odysseys across India.",
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
    title: "RaO Travel Agency — Remarkable Adventure Odyssey",
    description:
      "Tell RaO your mood, budget, and dates. We plan remarkable custom itineraries, Ujjain temple escapes, and group travel odysseys across India.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "RaO Travel Agency",
    "alternateName": "Remarkable Adventure Odyssey",
    "url": baseUrl,
    "logo": `${baseUrl}/images/Logo.jpeg`,
    "image": `${baseUrl}/images/Logo.jpeg`,
    "description": "Tell RaO your mood, budget, and dates. We plan remarkable custom itineraries & group travel odysseys across India.",
    "telephone": "+91-9326540456",
    "email": "raotourplanners@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
    },
    "priceRange": "₹₹",
    "sameAs": [baseUrl],
  };

  return (
    <html lang="en" className={`${montserrat.variable} antialiased h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans bg-transparent text-foreground selection:bg-primary/20 selection:text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <GlobalVideoBackground />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
