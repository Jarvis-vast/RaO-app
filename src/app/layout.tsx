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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://rao-ashy.vercel.app"),
  title: "RaO - Personal Travel Planner",
  description: "Tell RaO your mood, budget, and dates. We'll plan the rest.",
  icons: {
    icon: "/images/Logo.jpeg",
    shortcut: "/images/Logo.jpeg",
    apple: "/images/Logo.jpeg",
  },
  openGraph: {
    title: "RaO - Personal Travel Planner",
    description: "Tell RaO your mood, budget, and dates. We'll plan the rest.",
    images: [{ url: "/images/Logo.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-transparent text-foreground selection:bg-primary/20 selection:text-foreground">
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
