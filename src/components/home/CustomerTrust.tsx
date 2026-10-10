import { Shield, Banknote, PenTool, Users, HeartHandshake } from "lucide-react";
import { TrustCard } from "@/components/ui/rao/TrustCard";

export function CustomerTrust() {
  const points = [
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Personal Planning",
      desc: "Every detail is crafted around your dates, budget and the journey you want to take.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Private Space & Pace",
      desc: "Travel with your own group without adjusting to strangers or rigid tour groups.",
    },
    {
      icon: <Banknote className="w-8 h-8 text-primary" />,
      title: "Transparent Pricing",
      desc: "Clear budget breakdowns with transparent costs upfront.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Road, Rail or Air",
      desc: "Customized transport logistics tailored to your exact dates and destination preferences.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "End-to-End Support",
      desc: "From initial idea to your return home, RaO takes care of all bookings and coordination.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-black/40 backdrop-blur-md border-t border-b border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
            WHY PEOPLE CHOOSE RAO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            BUILT ON <span className="text-primary font-serif italic">TRUST & PERSONAL CARE</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((point, i) => (
            <TrustCard key={point.title} {...point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
