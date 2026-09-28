"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function MoodCard({ mood, index }: { mood: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/plan?mood=${encodeURIComponent(mood)}`}
        className="group relative h-40 md:h-48 rounded-2xl overflow-hidden bg-card border border-border flex items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-300" />
        <span className="relative z-10 text-xl font-medium text-foreground group-hover:text-primary transition-colors">
          {mood}
        </span>
      </Link>
    </motion.div>
  );
}
