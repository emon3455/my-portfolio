"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left"
      )}
      variants={variants}
    >
      <p className="text-sm font-semibold tracking-[0.3em] text-slate-300 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">{title}</h2>
      {description && (
        <p className="text-base text-slate-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
