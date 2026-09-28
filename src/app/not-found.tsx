import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-md w-full bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center space-y-6">
        <h1 className="text-4xl font-semibold text-primary">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium text-foreground">Looks like this road doesn't lead anywhere.</h2>
          <p className="text-muted-foreground">Let's get you back on the journey.</p>
        </div>
        
        <div className="pt-6 flex flex-col gap-3">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-medium rounded-full py-6">
            <Link href="/plan">Plan My Trip</Link>
          </Button>
          <Button asChild variant="outline" className="w-full bg-transparent border-white/20 text-foreground hover:bg-white/10 hover:text-foreground font-medium rounded-full py-6">
            <Link href="/">Back to RaO</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
