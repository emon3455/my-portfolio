"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { technicalSkills } from "@/data/portfolio";

export function TechnicalSkillsSection() {
  const skillCategories = [
    {
      title: "Expertise",
      icon: "⚡",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-400/30",
      bgColor: "bg-cyan-950/20",
      skills: technicalSkills.expertise,
    },
    {
      title: "Familiar",
      icon: "🔧",
      color: "from-purple-500 to-pink-600",
      borderColor: "border-purple-400/30",
      bgColor: "bg-purple-950/20",
      skills: technicalSkills.familiar,
    },
    {
      title: "Tools",
      icon: "🛠️",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-400/30",
      bgColor: "bg-emerald-950/20",
      skills: technicalSkills.tools,
    },
    {
      title: "DevOps & Infrastructure",
      icon: "🚀",
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-400/30",
      bgColor: "bg-orange-950/20",
      skills: technicalSkills.devops,
    },
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-400/30",
      bgColor: "bg-green-950/20",
      skills: technicalSkills.languages,
    },
  ];

  return (
    <section id="skills" className="scroll-mt-32">
      <SectionHeading
        eyebrow="Technical Arsenal"
        title="My Tech Stack"
        description="Technologies and tools I work with daily"
        align="center"
      />

      <div className="mt-12 space-y-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border ${category.borderColor} ${category.bgColor} backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-${category.color}/10`}
          >
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`bg-gradient-to-r ${category.color} bg-clip-text text-lg font-bold text-transparent`}>
                  {category.title}
                </h3>
                <div className="ml-auto rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                  {category.skills.length} skills
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="group/skill relative overflow-hidden rounded-lg border border-white/10 bg-slate-900/50 px-3 py-1.5 text-sm text-slate-300 transition-all duration-300 hover:border-white/30 hover:bg-slate-800/80 hover:text-white hover:shadow-md"
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 transition-opacity duration-300 group-hover/skill:opacity-10`} />
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Decorative gradient bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${category.color} opacity-50 transition-opacity duration-500 group-hover:opacity-100`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
