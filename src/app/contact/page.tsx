import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-5xl font-semibold text-foreground tracking-tight">Let's plan your next escape.</h1>
            <p className="text-xl text-muted-foreground font-light">Have questions before starting? Our travel designers are here to help.</p>
          </header>

          <div className="space-y-6 pt-4">
            <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-primary mb-2">WhatsApp</h3>
              <p className="text-foreground/80 font-light mb-4">Chat directly with a human planner.</p>
              <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white/20 hover:bg-white/10 rounded-full">
                Message us on WhatsApp
              </Button>
            </div>
            
            <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-primary mb-2">Ready to go?</h3>
              <p className="text-foreground/80 font-light mb-4">Jump straight into our interactive planner.</p>
              <Button asChild className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors">
                <Link href="/plan">Plan My Trip</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[#1C0A0B]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <h2 className="text-2xl font-medium text-foreground mb-6">Send an Enquiry</h2>
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground px-1">Name</label>
              <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground px-1">Phone / WhatsApp</label>
                <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="+91" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground px-1">Email</label>
                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground px-1">What are you planning? (Optional)</label>
              <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                <option value="">Select an option</option>
                <option value="friends">Friends Getaway</option>
                <option value="family">Family Trip</option>
                <option value="couple">Couple / Romance</option>
                <option value="corporate">Office / Corporate</option>
                <option value="women">Women-only</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground px-1">Message</label>
              <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell us about your plans..."></textarea>
            </div>
            <Button type="button" className="w-full rounded-full bg-white/10 hover:bg-white/20 text-foreground py-6 mt-2">
              Send Message
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}
