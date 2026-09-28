"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, IndianRupee, MapPin, GripVertical, ChevronUp, ChevronDown, RefreshCw, Plus, Edit3 } from "lucide-react";

export type Activity = {
  id: string;
  time: string;
  title: string;
  description: string;
  cost: number;
  location: string;
  category: "Activity" | "Meal" | "Stay" | "Transport";
};

type DayPlan = {
  day: number;
  date: string;
  activities: Activity[];
};

const INITIAL_ITINERARY: DayPlan[] = [
  {
    day: 1,
    date: "Saturday, 14 Oct",
    activities: [
      { id: "a1", time: "07:00 AM", title: "Private SUV from Mumbai", description: "Pickup from your location in Mumbai. 4-hour scenic drive.", cost: 4500, location: "Mumbai to Tarkarli", category: "Transport" },
      { id: "a2", time: "11:30 AM", title: "Check-in at Blue Water Resort", description: "Premium sea-facing cottage with private access to the beach.", cost: 6000, location: "Tarkarli Beach", category: "Stay" },
      { id: "a3", time: "01:00 PM", title: "Authentic Malvani Lunch", description: "Pre-booked table at a local famous seafood restaurant.", cost: 1200, location: "Gajalee, Tarkarli", category: "Meal" },
      { id: "a4", time: "04:00 PM", title: "Sunset Parasailing", description: "Private boat for your group. 30 mins of parasailing.", cost: 3000, location: "Tsunami Island", category: "Activity" },
    ]
  },
  {
    day: 2,
    date: "Sunday, 15 Oct",
    activities: [
      { id: "b1", time: "08:00 AM", title: "Scuba Diving Expedition", description: "Guided scuba diving near Sindhudurg Fort with PADI certified instructors.", cost: 5000, location: "Sindhudurg Fort", category: "Activity" },
      { id: "b2", time: "01:00 PM", title: "Farewell Lunch & Departure", description: "Leisurely lunch before heading back to Mumbai.", cost: 1000, location: "Resort", category: "Meal" },
      { id: "b3", time: "03:00 PM", title: "Return to Mumbai", description: "Private SUV drop off.", cost: 4500, location: "Tarkarli to Mumbai", category: "Transport" },
    ]
  }
];

export function ItineraryBuilder() {
  const [itinerary, setItinerary] = useState<DayPlan[]>(INITIAL_ITINERARY);

  const calculateTotalCost = () => {
    return itinerary.reduce((total, day) => {
      return total + day.activities.reduce((sum, act) => sum + act.cost, 0);
    }, 0);
  };

  const moveActivity = (dayIndex: number, actIndex: number, direction: 'up' | 'down') => {
    const newItinerary = [...itinerary];
    const day = newItinerary[dayIndex];
    if (direction === 'up' && actIndex > 0) {
      const temp = day.activities[actIndex];
      day.activities[actIndex] = day.activities[actIndex - 1];
      day.activities[actIndex - 1] = temp;
    } else if (direction === 'down' && actIndex < day.activities.length - 1) {
      const temp = day.activities[actIndex];
      day.activities[actIndex] = day.activities[actIndex + 1];
      day.activities[actIndex + 1] = temp;
    }
    setItinerary(newItinerary);
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
      {/* Left Column: Itinerary */}
      <div className="lg:col-span-2 space-y-12">
        <div>
          <h2 className="text-3xl font-light text-foreground mb-2">Review Your Itinerary</h2>
          <p className="text-muted-foreground">Modify timings, swap activities, and shape the perfect flow for your group.</p>
        </div>

        <div className="space-y-10">
          {itinerary.map((day, dIdx) => (
            <div key={day.day} className="space-y-6">
              <div className="sticky top-20 bg-background/95 backdrop-blur z-10 py-4 border-b border-border flex items-center justify-between">
                <h3 className="text-2xl font-medium">Day {day.day} <span className="text-muted-foreground text-lg ml-2 font-light">{day.date}</span></h3>
              </div>
              
              <div className="space-y-4">
                {day.activities.map((act, aIdx) => (
                  <div key={act.id} className="group relative bg-card border border-border rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-md flex gap-6">
                    {/* Reorder controls */}
                    <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-1 text-muted-foreground absolute -left-12 h-full top-0">
                      <button onClick={() => moveActivity(dIdx, aIdx, 'up')} disabled={aIdx === 0} className="hover:text-primary disabled:opacity-30"><ChevronUp className="w-6 h-6" /></button>
                      <button onClick={() => moveActivity(dIdx, aIdx, 'down')} disabled={aIdx === day.activities.length - 1} className="hover:text-primary disabled:opacity-30"><ChevronDown className="w-6 h-6" /></button>
                    </div>

                    <div className="w-24 shrink-0 flex flex-col gap-2">
                      <div className="flex items-center gap-1 text-sm font-medium text-primary">
                        <Clock className="w-4 h-4" /> {act.time}
                      </div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground bg-muted inline-flex px-2 py-1 rounded w-fit">
                        {act.category}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-medium text-foreground">{act.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{act.description}</p>
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" /> {act.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-foreground ml-auto">
                          <IndianRupee className="w-4 h-4 text-primary" /> {act.cost}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                       <button className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" title="Replace Activity">
                         <RefreshCw className="w-4 h-4" />
                       </button>
                       <button className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" title="Add Note">
                         <Edit3 className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full border-dashed border-2 py-6 text-muted-foreground hover:text-foreground">
                <Plus className="w-4 h-4 mr-2" /> Add custom activity to Day {day.day}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Pricing & Approval */}
      <div className="lg:col-span-1 relative">
        <div className="sticky top-32 bg-foreground text-background rounded-3xl p-8 space-y-8 shadow-2xl">
          <div>
            <h3 className="text-xl font-medium mb-1">Estimated Cost</h3>
            <p className="text-sm text-background/60">Live calculation based on your itinerary</p>
          </div>
          
          <div className="flex items-baseline gap-1 border-b border-background/20 pb-8">
            <IndianRupee className="w-8 h-8 text-primary" />
            <span className="text-6xl font-light">{calculateTotalCost().toLocaleString()}</span>
          </div>

          <div className="space-y-3 text-sm text-background/80">
            <div className="flex justify-between">
              <span>Group Size</span>
              <span className="font-medium text-background">6 persons</span>
            </div>
            <div className="flex justify-between">
              <span>Per Person Cost</span>
              <span className="font-medium text-background">₹{(calculateTotalCost()/6).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-primary pt-2">
              <span>Your Budget Limit</span>
              <span>₹42,000</span>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg rounded-xl">
              Approve & Request Booking
            </Button>
            <Button variant="outline" className="w-full h-14 text-lg rounded-xl border-background/20 hover:bg-background/10 bg-transparent text-background">
              Chat with RaO Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
