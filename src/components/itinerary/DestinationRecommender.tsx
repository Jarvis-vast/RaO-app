"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, Sparkles, Navigation, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DESTINATION_DB = [
  {
    id: "d1",
    name: "Tarkarli",
    moods: ["Adventure", "Fun", "Nature"],
    matchScore: 98,
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
    description: "Pristine white sand beaches and crystal clear waters. Perfect for scuba diving, parasailing, and vibrant group adventures by the sea.",
    tags: ["Beach", "Water Sports", "Seafood"]
  },
  {
    id: "d2",
    name: "Mahabaleshwar",
    moods: ["Nature", "Romance", "Family Time", "Peace"],
    matchScore: 92,
    image: "https://images.unsplash.com/photo-1596426462947-f27ebaf746e3?auto=format&fit=crop&w=800&q=80",
    description: "Cool mountain air, vast strawberry farms, and serene valley views. A classic retreat to disconnect and bond.",
    tags: ["Mountains", "Cool Climate", "Scenic"]
  },
  {
    id: "d3",
    name: "Igatpuri",
    moods: ["Peace", "Spiritual", "Nature", "Team Bonding"],
    matchScore: 88,
    image: "https://images.unsplash.com/photo-1549429457-3f9fdebc6f66?auto=format&fit=crop&w=800&q=80",
    description: "Lush green valleys, mist-covered peaks, and the famous Vipassana center. Ideal for finding tranquility and focus.",
    tags: ["Wellness", "Trekking", "Monsoon"]
  },
  {
    id: "d4",
    name: "Alibaug",
    moods: ["Luxury", "Celebration", "Romance", "Fun"],
    matchScore: 95,
    image: "https://images.unsplash.com/photo-1589255653896-1d3deebf35f3?auto=format&fit=crop&w=800&q=80",
    description: "Premium coastal villas, exclusive beach clubs, and easy access from Mumbai via RoRo. High-end relaxation.",
    tags: ["Villas", "Coastal", "Premium"]
  },
  {
    id: "d5",
    name: "Nashik",
    moods: ["Exploration", "Romance", "Luxury"],
    matchScore: 90,
    image: "https://images.unsplash.com/photo-1606708682121-689d06b9b168?auto=format&fit=crop&w=800&q=80",
    description: "Rolling vineyards, wine tasting tours, and boutique stays. A sophisticated escape for the curious palate.",
    tags: ["Vineyards", "Culinary", "Heritage"]
  }
];

export function DestinationRecommender({ userMood = "Adventure" }: { userMood?: string }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  // Simple mock logic for recommendation
  const recommended = DESTINATION_DB.filter(d => d.moods.includes(userMood))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  // Fallback if mood isn't perfectly matched
  const finalOptions = recommended.length > 0 ? recommended : DESTINATION_DB.slice(0, 3);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          RaO Intelligence
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-foreground">
          Destinations matching your <span className="font-semibold text-primary">&apos;{userMood}&apos;</span> mood
        </h2>
        <p className="text-muted-foreground text-lg">We analyzed travel patterns, seasonal weather, and group fit.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {finalOptions.map((dest, idx) => (
          <div key={dest.id} className={`bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${idx === 0 ? 'ring-2 ring-primary/50' : ''}`}>
            
            {idx === 0 && (
              <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Top Match
              </div>
            )}
            
            <div className="relative h-56 w-full overflow-hidden">
              <Image 
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur px-2 py-1 rounded text-xs font-mono font-medium">
                {dest.matchScore}% Match
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-primary font-medium mb-3">
                <MapPin className="w-4 h-4" />
                <h3 className="text-2xl text-foreground">{dest.name}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {dest.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {dest.tags.map(tag => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 group-hover:bg-primary transition-colors">
                Select & View Itinerary <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
