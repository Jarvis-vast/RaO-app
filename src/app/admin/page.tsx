import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back to the RaO command center.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-sm font-medium">New Requests</p>
          <p className="text-4xl font-semibold text-foreground mt-2">3</p>
        </div>
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-sm font-medium">Proposals in Progress</p>
          <p className="text-4xl font-semibold text-foreground mt-2">5</p>
        </div>
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-sm font-medium">Upcoming Trips</p>
          <p className="text-4xl font-semibold text-foreground mt-2">2</p>
        </div>
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-sm font-medium">Payments Pending</p>
          <p className="text-4xl font-semibold text-foreground mt-2">1</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-medium text-foreground">Tasks Due Today</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-medium text-foreground">Finalize itinerary for Mehta Family</p>
                <p className="text-sm text-muted-foreground">Due 2:00 PM</p>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent border-white/20 hover:bg-white/10 rounded-full">Review</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-medium text-foreground">Confirm Safari Booking</p>
                <p className="text-sm text-muted-foreground">Due 5:00 PM</p>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent border-white/20 hover:bg-white/10 rounded-full">Review</Button>
            </div>
          </div>
        </div>

        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-medium text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button asChild variant="outline" className="h-auto py-6 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl">
              <Link href="/plan">
                <span className="text-2xl">✨</span>
                <span>Open Planner</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl">
              <Link href="/admin/requests">
                <span className="text-2xl">📥</span>
                <span>View Requests</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl">
              <Link href="/admin/trips">
                <span className="text-2xl">✈️</span>
                <span>Active Trips</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl">
              <Link href="/admin/settings">
                <span className="text-2xl">⚙️</span>
                <span>Settings</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
