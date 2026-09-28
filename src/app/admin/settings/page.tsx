import { Button } from "@/components/ui/button";
import { BUSINESS_CONFIG } from "@/lib/config/business";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">System Settings</h1>
        <p className="text-muted-foreground mt-2 text-sm">Configure RaO business logic, contact channels, and operational thresholds.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 items-start">
        <aside className="space-y-2">
          <Button variant="ghost" className="w-full justify-start bg-white/5 text-foreground text-xs font-medium">Business Profile</Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground text-xs font-medium">Pricing Engine (Stub)</Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground text-xs font-medium">WhatsApp Gateway</Button>
        </aside>

        <div className="md:col-span-3 space-y-6">
          <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl">
            <h2 className="text-xl font-medium text-foreground">Operational Configuration</h2>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground px-1 font-medium">Legal Company Name</label>
                <input 
                  type="text" 
                  readOnly
                  className="w-full max-w-md bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none" 
                  defaultValue={BUSINESS_CONFIG.legal.entityName} 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground px-1 font-medium">Support Email</label>
                <input 
                  type="email" 
                  readOnly
                  className="w-full max-w-md bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none" 
                  defaultValue={BUSINESS_CONFIG.contact.supportEmail} 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground px-1 font-medium">WhatsApp Concierge Number</label>
                <input 
                  type="tel" 
                  readOnly
                  className="w-full max-w-md bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none" 
                  defaultValue={BUSINESS_CONFIG.contact.whatsappNumber} 
                />
                <p className="text-[11px] text-muted-foreground px-1">Configurable via NEXT_PUBLIC_WHATSAPP_NUMBER in production.</p>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground px-1 font-medium">Registered Jurisdiction</label>
                <input 
                  type="text" 
                  readOnly
                  className="w-full max-w-md bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none" 
                  defaultValue={BUSINESS_CONFIG.legal.jurisdiction} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
