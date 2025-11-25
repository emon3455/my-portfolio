"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  const serviceColors = [
    {
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      borderColor: "border-cyan-400/20",
      bgGradient: "from-cyan-950/40 via-blue-950/20 to-slate-950/40",
      accentColor: "cyan",
    },
    {
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      borderColor: "border-purple-400/20",
      bgGradient: "from-purple-950/40 via-pink-950/20 to-slate-950/40",
      accentColor: "purple",
    },
    {
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      borderColor: "border-emerald-400/20",
      bgGradient: "from-emerald-950/40 via-teal-950/20 to-slate-950/40",
      accentColor: "emerald",
    },
    {
      gradient: "from-orange-500 via-red-500 to-pink-600",
      borderColor: "border-orange-400/20",
      bgGradient: "from-orange-950/40 via-red-950/20 to-slate-950/40",
      accentColor: "orange",
    },
    {
      gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
      borderColor: "border-violet-400/20",
      bgGradient: "from-violet-950/40 via-purple-950/20 to-slate-950/40",
      accentColor: "violet",
    },
    {
      gradient: "from-pink-500 via-rose-500 to-red-600",
      borderColor: "border-pink-400/20",
      bgGradient: "from-pink-950/40 via-rose-950/20 to-slate-950/40",
      accentColor: "pink",
    },
    {
      gradient: "from-blue-500 via-indigo-500 to-violet-600",
      borderColor: "border-blue-400/20",
      bgGradient: "from-blue-950/40 via-indigo-950/20 to-slate-950/40",
      accentColor: "blue",
    },
    {
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      borderColor: "border-green-400/20",
      bgGradient: "from-green-950/40 via-emerald-950/20 to-slate-950/40",
      accentColor: "green",
    },
  ];

  return (
    <section id="services" className="scroll-mt-32">
      <SectionHeading
        eyebrow="What I Offer"
        title="Services & Solutions"
        description="Building digital products that solve real problems"
        align="center"
      />

      {/* Responsive Grid Layout */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const colors = serviceColors[index % serviceColors.length];
          const spanClass = service.span === "col-span-2" ? "lg:col-span-2" : "lg:col-span-1";
          
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut"
              }}
              className={`group relative overflow-hidden rounded-3xl border ${colors.borderColor} bg-gradient-to-br ${colors.bgGradient} backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${spanClass}`}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10`} />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r ${colors.gradient} opacity-20 blur-3xl`}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-r ${colors.gradient} opacity-20 blur-3xl`}
                />
              </div>

              {/* Content */}
              <div className="relative flex h-full flex-col justify-between p-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                    >
                      <span className="text-2xl">{service.icon}</span>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 200 }}
                      className={`rounded-full bg-gradient-to-r ${colors.gradient} px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md`}
                    >
                      Available
                    </motion.div>
                  </div>

                  <div>
                    <h3 className={`mb-2 bg-gradient-to-r ${colors.gradient} bg-clip-text text-lg font-bold text-transparent`}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Pillars with stagger animation */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className={`h-[2px] w-6 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Key Features
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.pillars.map((pillar, pillarIndex) => (
                      <motion.span
                        key={pillar}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + pillarIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`relative overflow-hidden rounded-lg border ${colors.borderColor} bg-slate-900/60 px-2.5 py-1 text-xs text-slate-400 backdrop-blur-sm transition-all duration-300 hover:text-white hover:shadow-md`}
                      >
                        <span className="relative z-10">{pillar}</span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 transition-opacity duration-300 hover:opacity-20`} />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute right-0 top-0 h-16 w-16 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
                <div className={`absolute right-0 top-0 h-full w-full rounded-bl-full bg-gradient-to-br ${colors.gradient} blur-xl`} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
