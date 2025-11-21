"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="About"
        title="Turning requirements into systems"
        description="Leading a 20-person squad bridging client intent, design, and ML research."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 md:grid-cols-2"
      >
        <div className="space-y-4 text-slate-200">
          <p>
            I architect healthcare, HR, CRM, and AI platforms at Octopi Digital—gathering client requirements and translating vision into scalable reality.
          </p>
          <p>
            Led university mentorship, graduated CSE with 3.86 CGPA, 5 VC awards + 2 Dean&apos;s awards.
          </p>
          <p>
            Current research: human emotion modeling + fuzzification with CNN-based deep learning.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-white/5 bg-slate-950/40 p-6 text-sm text-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Currently</span>
            <span className="font-semibold text-white">{profile.availability}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Based in</span>
            <span className="font-semibold text-white">{profile.location}</span>
          </div>
          <p className="pt-2 text-slate-300">
            Shipping portals, coaching engineers, documenting architectures, diving into ML.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
