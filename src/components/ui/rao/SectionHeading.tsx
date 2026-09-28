"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
  highlight,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  highlight?: string;
  align?: "left" | "center" | "right";
}) {
  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={`space-y-4 ${alignClass}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-light text-foreground tracking-tight"
      >
        {title} {highlight && <span className="font-semibold text-primary">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
