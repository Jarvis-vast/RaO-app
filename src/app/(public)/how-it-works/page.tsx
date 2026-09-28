export default function HowItWorks() {
  return (
    <main className="flex-1 flex flex-col items-center py-24 px-6 bg-transparent">
      <div className="max-w-4xl w-full space-y-12 text-center">
        <h1 className="text-5xl font-light text-foreground">How it Works</h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
          We believe travel should be about the experience, not the logistics. Here is how RaO takes the stress out of planning.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">1</div>
            <h3 className="text-xl font-medium">Tell Us Your Mood</h3>
            <p className="text-muted-foreground">Start by sharing your intent, group size, and budget. No need to know the destination yet.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">2</div>
            <h3 className="text-xl font-medium">Review Proposal</h3>
            <p className="text-muted-foreground">Our intelligent planner designs a bespoke itinerary and matches it with real suppliers.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">3</div>
            <h3 className="text-xl font-medium">Travel Seamlessly</h3>
            <p className="text-muted-foreground">Approve, pay, and pack your bags. We handle the bookings and provide 24/7 on-trip support.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
