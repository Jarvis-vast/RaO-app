import { Shield, Banknote, PenTool, Users, HeartHandshake } from "lucide-react";
import { TrustCard } from "@/components/ui/rao/TrustCard";
import { SectionHeading } from "@/components/ui/rao/SectionHeading";

export function CustomerTrust() {
  const points = [
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Personal Planning",
      desc: "Every detail crafted around your mood and budget, never a copy-paste template."
    },
    {
      icon: <Banknote className="w-8 h-8 text-primary" />,
      title: "Clear Package Pricing",
      desc: "One transparent price. No hidden fees or surprise upcharges."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Flexible Modifications",
      desc: "Review our proposal and shape it until it feels exactly right."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Human Coordination",
      desc: "Our team handles the suppliers, bookings, and logistical headaches."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Trip Support",
      desc: "We are with you throughout the journey, ensuring a seamless experience."
    }
  ];

  return (
    <section className="w-full py-32 px-6 bg-[#1C0A0B]/50 backdrop-blur-xl border-t border-b border-border/50">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading 
          title="Built on"
          highlight="Trust and Transparency"
        />
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {points.map((point, i) => (
            <TrustCard key={point.title} {...point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
