"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillSections } from "@/data/portfolio";

const cardHeights = [
  "md:row-span-2",
  "md:row-span-3",
  "md:row-span-2",
  "md:row-span-3",
  "md:row-span-2",
  "md:row-span-3",
  "md:row-span-2",
  "md:row-span-2",
];

export function SkillsSection() {
  return (
    <section id="strength" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="Expertise"
        title="Eight domains, one mindset"
        description="From mobile to ML, leadership to launches."
        align="center"
      />
      <div className="grid auto-rows-[80px] gap-4 md:grid-cols-4">
        {skillSections.map((section, index) => (
          <motion.div
            key={section.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/80 p-6 transition hover:border-white/30 ${cardHeights[index]}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 transition duration-700 group-hover:opacity-[0.15]`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-5 blur-xl`}
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className="text-5xl transition duration-500 group-hover:scale-125">
                  {section.icon}
                </span>
                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${section.gradient}`} />
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-white">
                {section.label}
              </h3>
              <div className="mt-auto space-y-2">
                {section.skills.map((skill, idx) => (
                  <motion.div
                    key={`${section.label}-${skill}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + idx * 0.03, duration: 0.3 }}
                    className="flex items-center gap-2 text-xs text-slate-400"
                  >
                    <span className={`h-1 w-1 rounded-full bg-gradient-to-r ${section.gradient} opacity-60`} />
                    <span className="transition group-hover:text-slate-200">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
