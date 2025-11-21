"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/portfolio";

const dotVariants = {
  inactive: { scale: 1, opacity: 0.3 },
  active: { scale: 1.2, opacity: 1 },
};

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];
  const progress = useMemo(() => {
    if (featuredProjects.length <= 1) return 100;
    return (activeIndex / (featuredProjects.length - 1)) * 100;
  }, [activeIndex]);

  return (
    <section id="projects" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="Projects"
        title="Live builds, one after another"
        description="Step through the products powering clinicians, teams, and businesses."
      />
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#0a0f1a] via-[#05080e] to-[#030508]">
        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Left stepper column */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300/80">
              Project Stepper
            </p>
            <div className="relative pl-6">
              <div className="absolute left-1.5 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/50 via-purple-500/40 to-pink-400/50" />
              <div className="space-y-6">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="group flex w-full gap-3 text-left transition"
                  >
                    <div className="relative mt-1.5 flex flex-col items-center">
                      <motion.span
                        className="z-10 block h-2.5 w-2.5 rounded-full bg-white shadow-lg shadow-cyan-400/50"
                        variants={dotVariants}
                        animate={index === activeIndex ? "active" : "inactive"}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white group-hover:text-cyan-200">
                        {project.title}
                      </p>
                      <p className="text-xs text-slate-400">{project.stack[0]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-slate-400">
              {activeIndex + 1} of {featuredProjects.length} projects
            </p>
          </div>

          {/* Right detail panel */}
          <motion.article
            key={activeProject.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900/50">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
              <span>Case {activeIndex + 1}</span>
              <span>{activeProject.stack[0]}</span>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-white">{activeProject.title}</h3>
              <p className="mt-2 text-base text-slate-300">{activeProject.description}</p>
            </div>
            <p className="rounded-2xl border border-cyan-400/20 bg-cyan-950/20 p-4 text-sm text-cyan-100">
              {activeProject.highlight}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {activeProject.stack.map((tech) => (
                <span
                  key={`${activeProject.title}-${tech}`}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={activeProject.link}
              target="_blank"
              rel="noreferrer"
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-purple-500"
            >
              View live build
              <span className="transition group-hover:translate-x-1">↗</span>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
