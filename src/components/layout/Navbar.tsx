"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/upcoming-trips", label: "Upcoming Trips" },
  { href: "/experiences", label: "Experiences" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#1C0A0B]/90 backdrop-blur-md border-b border-border/20 py-2 shadow-sm"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/Logo.jpeg"
              alt="RaO Travel Agency"
              width={52}
              height={52}
              className="rounded-full object-cover"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#F2EAE4]/90">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#C88D6A] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Button
              asChild
              className="hidden md:inline-flex rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] px-6 transition-colors font-medium"
            >
              <Link href="/plan">Plan My Trip</Link>
            </Button>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 text-[#FAF7F4] rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-xs bg-[#1C0A0B] border-l border-white/10 flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/images/Logo.jpeg"
                    alt="RaO Travel Agency"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#FAF7F4] rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-[#F2EAE4] font-medium text-lg hover:bg-white/10 hover:text-[#C88D6A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="px-6 pb-10">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#C88D6A] text-[#1C0A0B] hover:bg-[#E2B28B] py-6 text-lg font-semibold transition-colors"
                >
                  <Link href="/plan" onClick={() => setMobileOpen(false)}>
                    Plan My Trip
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
