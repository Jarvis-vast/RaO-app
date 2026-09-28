import { TripRequestRepository } from "@/lib/services/TripRequestRepository";
import { MessageCircle, ExternalLink, Calendar, Users, MapPin, IndianRupee } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminRequestsPage() {
  const requests = await TripRequestRepository.getAll();

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">Customer Trip Requests</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Live operational backlog of incoming trip requests from the RaO planner and contact channels.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-medium px-3 py-1.5 rounded-full">
            {requests.length} Total Inquiries
          </span>
        </div>
      </div>

      <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-muted-foreground text-xs uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-medium">Customer &amp; ID</th>
                <th className="px-6 py-4 font-medium">Proposal / Intent</th>
                <th className="px-6 py-4 font-medium">Mood &amp; Origin</th>
                <th className="px-6 py-4 font-medium">Budget &amp; Pax</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Quick Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {requests.map((req) => {
                const waUrl = `https://wa.me/${req.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                  `Hi ${req.customerName}, this is your RaO travel designer regarding your request (${req.requestId}) for "${req.proposalTitle || "Bespoke Journey"}".`
                )}`;

                return (
                  <tr key={req.requestId} className="hover:bg-white/5 transition-colors">
                    {/* Customer Info */}
                    <td className="px-6 py-4">
                      <p className="font-medium text-foreground">{req.customerName}</p>
                      <p className="text-xs text-primary font-mono mt-0.5">{req.requestId}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">{req.phone}</p>
                      {req.email && <p className="text-[11px] text-muted-foreground/70">{req.email}</p>}
                    </td>

                    {/* Proposal Details */}
                    <td className="px-6 py-4 max-w-xs">
                      <p className="font-medium text-foreground text-sm">{req.proposalTitle || "Custom Itinerary"}</p>
                      {req.destinationContext && (
                        <p className="text-xs text-primary/90 mt-0.5">Context: {req.destinationContext}</p>
                      )}
                      {req.modificationNotes && req.modificationNotes.length > 0 && (
                        <div className="mt-1.5 p-2 rounded bg-black/30 border border-white/5 text-[11px] text-foreground/80 space-y-0.5">
                          <span className="text-[10px] text-primary uppercase block font-medium">Custom Requests:</span>
                          {req.modificationNotes.map((note, i) => (
                            <p key={i} className="line-clamp-1">• &quot;{note}&quot;</p>
                          ))}
                        </div>
                      )}
                      {req.specialRequests && (
                        <p className="text-xs text-muted-foreground/80 italic mt-1 line-clamp-2">
                          Note: {req.specialRequests}
                        </p>
                      )}
                    </td>

                    {/* Mood & Origin */}
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 max-w-[160px]">
                        {req.moods.map((m) => (
                          <span key={m} className="bg-white/10 px-2 py-0.5 rounded text-[11px] text-foreground/80">
                            {m}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" /> {req.origin || "Not specified"}
                      </p>
                    </td>

                    {/* Budget & Travellers */}
                    <td className="px-6 py-4 text-foreground/80">
                      <p className="font-medium text-foreground">₹{req.budgetPerPerson} <span className="text-xs text-muted-foreground">/ person</span></p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Users className="w-3 h-3" /> {req.numTravellers} ({req.groupType})
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {req.datesOption}
                      </p>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                        req.status === 'NEW' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        req.status === 'REVIEWING' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                        'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }`}>
                        {req.status}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-1.5">
                        {new Date(req.createdAt).toLocaleDateString()}
                      </p>
                    </td>

                    {/* WhatsApp Action */}
                    <td className="px-6 py-4 text-right">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-colors text-xs font-medium"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
