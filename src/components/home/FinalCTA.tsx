"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/config/business";

export function FinalCTA() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi RaO, I'm interested in planning a trip. Here are my thoughts..."
  )}`;

  return (
    <section className="w-full py-28 px-6 bg-gradient-to-b from-[#1C0A0B]/90 via-[#2A1013] to-[#1C0A0B] backdrop-blur-xl border-t border-white/10 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
          YOUR PERSONAL TRAVEL PLANNER
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight">
          Tell us your dates & budget. <br />
          <span className="text-primary font-serif italic font-normal">RaO will plan the rest.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto">
          From a 6-person one-day return journey to a 50-person group odyssey. Curated or customized for you.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-base bg-primary text-primary-foreground hover:bg-accent transition-all font-semibold shadow-xl w-full sm:w-auto">
            <Link href="/plan" className="flex items-center justify-center gap-2">
              <span>PLAN WITH RAO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 bg-black/30 backdrop-blur-sm transition-all w-full sm:w-auto font-medium">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
