"use client";

import { Camera, ExternalLink } from "lucide-react";
import { IMAGE_CREDITS, ImageCredit } from "@/lib/data/imageAttributions";

interface Props {
  creditId: string;
  className?: string;
}

export function PhotoCreditBadge({ creditId, className = "" }: Props) {
  const credit = IMAGE_CREDITS.find((c) => c.id === creditId);

  if (!credit) return null;

  return (
    <div className={`inline-flex items-center gap-1.5 bg-[#1C0A0B]/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] text-muted-foreground/90 font-mono ${className}`}>
      <Camera className="w-3 h-3 text-[#C88D6A]" />
      <span>Photo: {credit.author}</span>
      <span>•</span>
      <a
        href={credit.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E2B28B] hover:underline flex items-center gap-0.5 font-medium"
        title={`${credit.title} (${credit.licenseName})`}
      >
        <span>{credit.sourceName}</span>
        <ExternalLink className="w-2.5 h-2.5" />
      </a>
    </div>
  );
}

export function PhotoCreditsSection() {
  return (
    <div className="bg-[#180809]/90 border border-white/10 rounded-2xl p-6 space-y-4 max-w-4xl mx-auto my-12 text-xs">
      <div className="flex items-center gap-2 text-amber-300 font-semibold uppercase tracking-wider">
        <Camera className="w-4 h-4 text-amber-400" /> Authentic Photograph Credits & Licensing
      </div>
      <p className="text-muted-foreground font-light leading-relaxed">
        RaO strictly enforces a <strong>No AI-Generated Images</strong> policy for destinations. All location photography featured on this site consists of verified authentic photographs sourced under Creative Commons licenses or local agency assets.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        {IMAGE_CREDITS.map((item) => (
          <div key={item.id} className="bg-black/30 border border-white/5 p-3 rounded-xl space-y-1">
            <div className="font-semibold text-foreground">{item.destination}</div>
            <div className="text-muted-foreground text-[11px] font-mono">By {item.author}</div>
            <div className="pt-1 flex items-center justify-between text-[10px]">
              <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#C88D6A] hover:underline">
                {item.sourceName}
              </a>
              <a href={item.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:underline">
                {item.licenseName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
