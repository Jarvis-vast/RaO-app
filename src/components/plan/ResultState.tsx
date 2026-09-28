"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statuses = [
  "Understanding your request...",
  "Finding suitable destinations...",
  "Building the experience...",
  "Estimating the trip...",
  "Preparing your proposal..."
];

export function ResultState({ onComplete }: { onComplete: () => void }) {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    if (currentStatusIndex < statuses.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStatusIndex(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStatusIndex, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-8">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      
      <div className="space-y-4">
        <h2 className="text-3xl font-light text-foreground">RaO is designing your journey</h2>
        <div className="h-6 overflow-hidden relative">
          {statuses.map((status, index) => (
            <motion.p
              key={status}
              initial={{ y: 24, opacity: 0 }}
              animate={{ 
                y: currentStatusIndex === index ? 0 : currentStatusIndex > index ? -24 : 24,
                opacity: currentStatusIndex === index ? 1 : 0 
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 text-muted-foreground text-lg"
            >
              {status}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
