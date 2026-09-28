"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function DestinationCard({ name, image, index }: { name: string; image: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="group relative h-48 md:h-64 rounded-xl overflow-hidden bg-card cursor-pointer">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4 text-background">
          <h3 className="font-medium text-lg tracking-wide">{name}</h3>
        </div>
      </div>
    </motion.div>
  );
}
