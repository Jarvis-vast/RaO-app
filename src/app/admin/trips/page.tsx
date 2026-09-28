export default function AdminTripsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">Active Trips</h1>
        <p className="text-muted-foreground mt-2">Manage ongoing operations and bookings.</p>
      </div>

      <div className="bg-card/50 border border-border rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">✈️</span>
        </div>
        <h3 className="text-xl font-medium text-foreground">No active trips</h3>
        <p className="text-muted-foreground mt-2 max-w-sm">When a customer confirms a proposal and makes a payment, the active trip will appear here.</p>
      </div>
    </div>
  );
}
