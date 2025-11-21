"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillSections } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="Skills"
        title="Stack for resilient products"
        description="Systems thinking + motion + collaboration."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillSections.map((section, index) => (
          <motion.div
            key={section.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-white/5 bg-white/[0.04] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{section.icon}</span>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                {section.label}
              </p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
              {section.skills.map((skill) => (
                <li
                  key={`${section.label}-${skill}`}
                  className="rounded-full border border-white/10 px-4 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
