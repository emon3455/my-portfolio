"use client";

import { motion } from "framer-motion";
import { JourneyCanvas } from "@/components/three/journey-canvas";

interface JourneyConnectorProps {
  label: string;
  sublabel?: string;
}

export function JourneyConnector({ label, sublabel }: JourneyConnectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-hidden
      className="relative h-[260px] overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#03050b] via-[#050812] to-[#060910]"
    >
      <div className="absolute inset-0">
        <JourneyCanvas />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-slate-200">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-200/80">{label}</p>
        {sublabel && <p className="text-sm text-slate-300">{sublabel}</p>}
      </div>
    </motion.div>
  );
}
