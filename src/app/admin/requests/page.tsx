import { Button } from "@/components/ui/button";

const MOCK_REQUESTS = [
  { id: "REQ-001", customer: "Sarah Jenkins", trip: "Romantic Getaway", mood: "Romance", budget: "₹45,000", dates: "Oct 12-15", travellers: 2, status: "New", planner: "Unassigned" },
  { id: "REQ-002", customer: "Rahul Sharma", trip: "Family Weekend", mood: "Family", budget: "₹60,000", dates: "Nov 1-4", travellers: 4, status: "Reviewing", planner: "Agent 1" },
  { id: "REQ-003", customer: "Priya Patel", trip: "Solo Escape", mood: "Peace", budget: "₹20,000", dates: "Oct 20-22", travellers: 1, status: "Proposal Sent", planner: "Agent 2" },
];

export default function AdminRequestsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">Trip Requests</h1>
          <p className="text-muted-foreground mt-2">Manage incoming AI-generated trip requests.</p>
        </div>
        <div className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/30">
          Showing Demo Data
        </div>
      </div>

      <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/10 flex gap-4">
          <select className="bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary/50 appearance-none">
            <option>All Statuses</option>
            <option>New</option>
            <option>Reviewing</option>
            <option>Proposal Sent</option>
          </select>
          <select className="bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary/50 appearance-none">
            <option>All Planners</option>
            <option>Unassigned</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Mood</th>
                <th className="px-6 py-4 font-medium">Budget</th>
                <th className="px-6 py-4 font-medium">Dates</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {MOCK_REQUESTS.map((req) => (
                <tr key={req.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-foreground">{req.customer}</p>
                    <p className="text-xs text-muted-foreground">{req.travellers} Travellers</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-white/10 px-2 py-1 rounded text-xs">{req.mood}</span>
                  </td>
                  <td className="px-6 py-4 text-foreground/80">{req.budget}</td>
                  <td className="px-6 py-4 text-foreground/80">{req.dates}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      req.status === 'New' ? 'bg-green-500/20 text-green-400' :
                      req.status === 'Reviewing' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="hover:bg-white/10 text-primary">Open</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
