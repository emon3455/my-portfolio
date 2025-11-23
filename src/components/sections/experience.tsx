"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experienceTimeline } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-16 scroll-mt-32">
      <SectionHeading
        eyebrow="Experience"
        title="Career milestones"
        description="A journey from dashboards to leading platform teams across healthcare, AI, and enterprise systems."
        align="center"
      />
      
      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/0 via-cyan-400/50 to-cyan-500/0" />
        
        <div className="space-y-24">
          {experienceTimeline.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`grid gap-8 md:grid-cols-2 md:gap-16 ${isLeft ? "" : "md:grid-flow-dense"}`}>
                  {/* Content card */}
                  <div className={isLeft ? "md:text-right" : "md:col-start-2"}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 backdrop-blur-xl transition hover:border-cyan-400/30"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                      
                      <div className="relative space-y-4">
                        <div className={`flex items-start justify-between gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                            <p className="mt-1 text-lg font-semibold text-cyan-400">{exp.company}</p>
                            <p className="mt-1 text-sm text-slate-400">{exp.location}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-bold text-cyan-400">
                            {exp.year}
                          </span>
                        </div>
                        
                        <p className="text-base leading-relaxed text-slate-300">
                          {exp.description}
                        </p>
                        
                        <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                          {exp.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full border border-cyan-400/20 bg-cyan-950/20 px-3 py-1 text-xs font-semibold text-cyan-300"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 top-8 z-10 -translate-x-1/2 ${isLeft ? "md:left-1/2" : "md:left-1/2"}`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                      className="relative"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                      <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-20" />
                    </motion.div>
                  </div>
                  
                  {/* Empty space on opposite side */}
                  <div className={`hidden md:block ${isLeft ? "md:col-start-2" : "md:col-start-1"}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
