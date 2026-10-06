import { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Plane, Users, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "RaO Operations Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card/30 backdrop-blur-md hidden md:flex flex-col p-6 space-y-6">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Operations</h3>
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center gap-3 text-foreground p-2 rounded-md hover:bg-muted transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Overview
          </Link>
          <Link href="/admin/requests" className="flex items-center gap-3 text-foreground p-2 rounded-md hover:bg-muted transition-colors">
            <Users className="w-4 h-4" /> Requests
          </Link>
          <Link href="/admin/trips" className="flex items-center gap-3 text-primary bg-primary/10 p-2 rounded-md transition-colors font-medium">
            <Plane className="w-4 h-4" /> Active Trips
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 text-foreground p-2 rounded-md hover:bg-muted transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
