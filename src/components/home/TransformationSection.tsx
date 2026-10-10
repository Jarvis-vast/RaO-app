import { ArrowRight, MapPin, Anchor, Sunrise, IndianRupee } from "lucide-react";

export function TransformationSection() {
  return (
    <section className="w-full py-32 px-6 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            From feeling to <span className="font-semibold text-primary">reality</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            How a simple thought becomes a complete RaO experience.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm relative group hover:border-primary/50 transition-colors">
              <div className="text-primary font-mono text-sm mb-6 bg-primary/10 inline-block px-3 py-1 rounded-full">Customer Request</div>
              <p className="text-xl font-medium text-foreground italic leading-relaxed">
                &quot;6 friends. ₹7,000 each. We want adventure and the sea.&quot;
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm relative group hover:border-primary/50 transition-colors lg:-translate-y-4 hover:-translate-y-6">
              <div className="text-primary font-mono text-sm mb-6 bg-primary/10 inline-block px-3 py-1 rounded-full">RaO Intelligence</div>
              <p className="text-lg font-light leading-relaxed text-foreground">
                RaO understands the intent, constraints, and group dynamics.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm relative group hover:border-primary/50 transition-colors">
              <div className="text-primary font-mono text-sm mb-6 bg-primary/10 inline-block px-3 py-1 rounded-full">Destination Match</div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Tarkarli</h4>
                  <p className="text-sm text-muted-foreground">Maharashtra, India</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md flex items-center gap-1"><Anchor className="w-3 h-3" /> Beach</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md flex items-center gap-1"><Sunrise className="w-3 h-3" /> Water Sports</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm relative group hover:border-primary/50 transition-colors">
              <div className="text-primary font-mono text-sm mb-6 bg-primary/10 inline-block px-3 py-1 rounded-full">Estimated Package</div>
              <div className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span className="text-4xl font-light text-foreground">6,850</span>
                  <span className="text-sm text-muted-foreground">/ person</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">✓ Beachside Stay (2N)</li>
                  <li className="flex items-center gap-2">✓ Scuba & Parasailing</li>
                  <li className="flex items-center gap-2">✓ Local Malvani Meals</li>
                  <li className="flex items-center gap-2">✓ Mumbai Transfers</li>
                </ul>
                <p className="text-xs text-muted-foreground/70 italic mt-4 pt-4 border-t border-border">
                  Example pricing. Actual costs depend on live availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
