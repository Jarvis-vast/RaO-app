"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DestinationCard({ name, image, index }: { name: string; image: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link 
        href={`/plan?dest=${encodeURIComponent(name)}`}
        className="group relative block h-48 md:h-64 rounded-2xl overflow-hidden bg-card border border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
      >
        <Image 
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0B]/90 via-[#1C0A0B]/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4 text-foreground flex items-center justify-between">
          <h3 className="font-medium text-lg tracking-wide text-foreground group-hover:text-primary transition-colors">{name}</h3>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
}
