import Link from "next/link";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="w-full bg-[#1C0A0B]/80 backdrop-blur-xl border-t border-white/10 text-foreground py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-4xl font-bold tracking-tighter text-primary">RaO</span>
          </Link>
          <p className="text-xl font-medium tracking-wide">Remarkable Adventure Odyssey</p>
          <p className="text-muted-foreground font-light text-base mt-2">Your personal travel planner.</p>
          <p className="text-sm font-light text-foreground/90 italic pt-1">
            &ldquo;From a one-day journey for six to a complete journey for fifty, RaO plans around you.&rdquo;
          </p>
          <p className="text-primary font-medium tracking-widest uppercase text-xs pt-2">
            Explore • Experience • Discover
          </p>
          <div className="pt-4">
            <p className="text-xs text-muted-foreground font-medium mb-3 uppercase tracking-wider">Connect With Us</p>
            <SocialLinks />
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Navigation</h4>
          <nav className="flex flex-col gap-3 text-muted-foreground font-light text-sm">
            <Link href="/plan" className="hover:text-primary transition-colors">Plan a Trip</Link>
            <Link href="/upcoming-trips" className="hover:text-primary transition-colors">Upcoming Trips</Link>
            <Link href="/experiences" className="hover:text-primary transition-colors">Experiences</Link>
            <Link href="/destinations" className="hover:text-primary transition-colors">Destinations</Link>
            <Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Legal & Support</h4>
          <nav className="flex flex-col gap-3 text-muted-foreground font-light text-sm">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/cancellation" className="hover:text-primary transition-colors">Cancellation / Refund</Link>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} RaO. All rights reserved.</p>
      </div>
    </footer>
  );
}
