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
      <div className="relative overflow-hidden rounded-[40px]">
        <div className="grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-slate-950/50 p-10 md:p-12"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
            <div className="relative space-y-6 text-slate-200">
              <h3 className="text-2xl font-bold text-white">The story</h3>
              <p className="leading-relaxed">
                I architect healthcare, HR, CRM, and AI platforms at Octopi Digital—gathering client requirements and translating vision into scalable reality.
              </p>
              <p className="leading-relaxed">
                Led university mentorship, graduated CSE with 3.86 CGPA, 5 VC awards + 2 Dean&apos;s awards.
              </p>
              <p className="leading-relaxed">
                Current research: human emotion modeling + fuzzification with CNN-based deep learning.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="border-l border-white/10 bg-gradient-to-br from-slate-950 to-[#020306] p-10 md:p-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Quick facts</h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Currently</span>
                  <span className="text-lg font-semibold text-cyan-300">{profile.availability}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Based in</span>
                  <span className="text-lg font-semibold text-white">{profile.location}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Day to day</span>
                  <span className="text-base text-slate-300">
                    Shipping portals, coaching engineers, documenting architectures, diving into ML.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
