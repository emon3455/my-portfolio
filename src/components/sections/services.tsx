"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="Services"
        title="How we collaborate"
        description="Zero-to-one builds or scaling platforms—where clarity & taste matter most."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c111c] to-[#05060b] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">{service.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {service.pillars.map((pillar) => (
                <li key={`${service.title}-${pillar}`} className="flex items-center gap-2">
                  <span className="text-cyan-300">•</span>
                  {pillar}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
              Available now
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
