"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type TrustCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  index: number;
};

export function TrustCard({ icon, title, desc, index }: TrustCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center space-y-4"
    >
      <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center border border-border shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-medium text-lg text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}
