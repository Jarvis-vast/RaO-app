import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TripRequestRepository } from "@/lib/services/TripRequestRepository";
import { ArrowRight, Inbox, Plane, Settings, CheckCircle2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  const requests = await TripRequestRepository.getAll();
  const newRequestsCount = requests.filter((r) => r.status === "NEW").length;
  const reviewingCount = requests.filter((r) => r.status === "REVIEWING").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2 text-sm">Welcome back to the RaO travel operations command center.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">New Inquiries</p>
          <p className="text-4xl font-semibold text-emerald-400 mt-2">{newRequestsCount}</p>
        </div>
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">In Review</p>
          <p className="text-4xl font-semibold text-amber-400 mt-2">{reviewingCount}</p>
        </div>
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Total Pipeline</p>
          <p className="text-4xl font-semibold text-foreground mt-2">{requests.length}</p>
        </div>
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Active Operations</p>
          <p className="text-4xl font-semibold text-primary mt-2">1</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium text-foreground">Recent Customer Inquiries</h2>
            <Link href="/admin/requests" className="text-xs text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {requests.slice(0, 3).map((req) => (
              <div key={req.requestId} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <p className="font-medium text-foreground text-sm">{req.customerName}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{req.proposalTitle || "Custom Itinerary"} • ₹{req.budgetPerPerson}/person</p>
                </div>
                <Button asChild variant="outline" size="sm" className="bg-transparent border-white/20 hover:bg-white/10 rounded-full text-xs">
                  <Link href="/admin/requests">Review</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-medium text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button asChild variant="outline" className="h-auto py-5 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl text-center">
              <Link href="/plan">
                <span className="text-2xl">✨</span>
                <span className="text-xs font-medium">Test Trip Planner</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-5 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl text-center">
              <Link href="/admin/requests">
                <Inbox className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Trip Requests</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-5 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl text-center">
              <Link href="/admin/trips">
                <Plane className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Active Trips</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-5 bg-transparent border-white/20 hover:bg-white/10 flex flex-col gap-2 rounded-xl text-center">
              <Link href="/admin/settings">
                <Settings className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Configuration</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
