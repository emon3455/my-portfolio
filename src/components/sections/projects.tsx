"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/portfolio";
import { useState, useEffect } from "react";

export function ProjectsSection() {
  // Split projects into two rows and duplicate for seamless infinite scroll
  const midPoint = Math.ceil(featuredProjects.length / 2);
  const row1Base = featuredProjects.slice(0, midPoint);
  const row2Base = featuredProjects.slice(midPoint);
  
  // Triple duplicate for seamless infinite loop
  const row1Projects = [...row1Base, ...row1Base, ...row1Base];
  const row2Projects = [...row2Base, ...row2Base, ...row2Base];

  // Calculate total width for animation (500px card width + 24px gap)
  const row1Width = row1Base.length * (500 + 24);
  const row2Width = row2Base.length * (500 + 24);

  return (
    <section id="projects" className="space-y-12 scroll-mt-32">
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects in motion"
        description="Hover to explore each build."
        align="center"
      />
      
      <div className="space-y-6">
        {/* Row 1 - Scrolling Right */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#020409] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#020409] to-transparent" />
          
          <div className="flex gap-6 py-4">
            <motion.div
              className="flex shrink-0 gap-6"
              animate={{
                x: [0, -row1Width],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {row1Projects.map((project, index) => (
                <ProjectCard key={`row1-${project.title}-${index}`} project={project} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2 - Scrolling Left */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#020409] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#020409] to-transparent" />
          
          <div className="flex gap-6 py-4">
            <motion.div
              className="flex shrink-0 gap-6"
              animate={{
                x: [-row2Width, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {row2Projects.map((project, index) => (
                <ProjectCard key={`row2-${project.title}-${index}`} project={project} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs uppercase tracking-widest text-slate-500"
      >
        Hover to pause & explore
      </motion.p>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof featuredProjects[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2000); // Change image every 2 seconds on hover

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <article
      className="group relative h-[300px] w-[500px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-slate-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      {/* Background Images with cycling */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-110 group-hover:blur-sm"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient overlay - always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-800/30" />
      </div>

      {/* Image indicator dots */}
      {project.images.length > 1 && (
        <div className="absolute top-4 right-4 z-20 flex gap-1.5">
          {project.images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? "bg-cyan-400 w-4"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}

      {/* Hover overlay with content */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/98 to-slate-950/80 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="space-y-3 translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>
          
          <p className="text-xs leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="rounded-lg border border-cyan-400/30 bg-cyan-950/30 px-3 py-2 text-xs text-cyan-200">
            {project.highlight}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-500/50"
          >
            <span>View Project</span>
            <svg className="h-4 w-4 transition group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 rounded-[24px] opacity-0 ring-2 ring-cyan-400/50 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
