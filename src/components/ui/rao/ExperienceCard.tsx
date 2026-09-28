"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ExperienceCardProps = {
  title: string;
  mood: string;
  duration: string;
  budget: string;
  image: string;
  index: number;
};

export function ExperienceCard({ title, mood, duration, budget, image, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href="/plan" className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
        <div className="relative h-64 w-full overflow-hidden">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
            {duration}
          </div>
        </div>
        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-primary text-sm font-medium tracking-wide mb-2 uppercase">{mood}</div>
            <h3 className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors">{title}</h3>
          </div>
          <div className="pt-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
            <span>Starts from {budget}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
