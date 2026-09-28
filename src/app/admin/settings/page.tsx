import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">System Settings</h1>
        <p className="text-muted-foreground mt-2">Configure RaO business logic, pricing, and integrations.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 items-start">
        <aside className="space-y-2">
          <Button variant="ghost" className="w-full justify-start bg-white/5 text-foreground">Business Profile</Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">Pricing Rules</Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">Integrations</Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">Users & Roles</Button>
        </aside>

        <div className="md:col-span-3 space-y-6">
          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
            <h2 className="text-xl font-medium text-foreground">Business Profile</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground px-1">Legal Company Name</label>
                <input type="text" className="w-full max-w-md bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-foreground focus:outline-none focus:border-primary/50" defaultValue="RaO Travels Pvt Ltd" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground px-1">Support Email</label>
                <input type="email" className="w-full max-w-md bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-foreground focus:outline-none focus:border-primary/50" defaultValue="hello@raotravel.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground px-1">Support Phone (WhatsApp)</label>
                <input type="tel" className="w-full max-w-md bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-foreground focus:outline-none focus:border-primary/50" defaultValue="+91 9876543210" />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button className="bg-primary text-primary-foreground hover:bg-accent rounded-full px-8">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
