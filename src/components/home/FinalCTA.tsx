import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="w-full py-32 px-6 bg-[#1C0A0B]/40 backdrop-blur-xl">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-5xl md:text-7xl font-light text-foreground tracking-tight">
          Don&apos;t know where to go?
        </h2>
        <p className="text-2xl text-primary font-medium tracking-wide">
          That&apos;s exactly what RaO is here for.
        </p>
        <div className="pt-8">
          <Button asChild size="lg" className="rounded-full px-12 h-16 text-xl bg-foreground text-background hover:bg-foreground/90">
            <Link href="/plan">Plan My Trip</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
