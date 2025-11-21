"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/portfolio";

const gradients = [
  "from-emerald-600/20 via-teal-500/10 to-transparent",
  "from-violet-600/20 via-purple-500/10 to-transparent",
  "from-orange-600/20 via-amber-500/10 to-transparent",
];

export function ServicesSection() {
  return (
    <section id="services" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="Services"
        title="How we collaborate"
        description="Zero-to-one builds or scaling platforms—where clarity & taste matter most."
      />
      <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-12">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${gradients[index]} p-8 backdrop-blur-sm transition hover:border-white/30 ${
              index === 0 ? "md:col-span-6 lg:col-span-5" : index === 1 ? "md:col-span-6 lg:col-span-7" : "md:col-span-6 lg:col-span-12"
            }`}
          >
            <div className="absolute inset-0 bg-[#030609]/80" />
            <div className="relative space-y-4">
              <div className="flex items-start justify-between">
                <span className="text-6xl opacity-80 transition group-hover:scale-110">{service.icon}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">Available</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-base text-slate-300">{service.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.pillars.map((pillar) => (
                  <span
                    key={`${service.title}-${pillar}`}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
