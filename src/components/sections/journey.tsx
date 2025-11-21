"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { JourneyCanvas } from "@/components/three/journey-canvas";
import { SectionHeading } from "@/components/ui/section-heading";
import { journeyMilestones } from "@/data/portfolio";

const circleVariants = {
  inactive: { scale: 1, opacity: 0.4 },
  active: { scale: 1.15, opacity: 1 },
};

export function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const milestoneCount = journeyMilestones.length;
  const activeMilestone = journeyMilestones[activeIndex] ?? journeyMilestones[0];
  const progress = useMemo(() => {
    if (milestoneCount <= 1) return 100;
    return (activeIndex / (milestoneCount - 1)) * 100;
  }, [activeIndex, milestoneCount]);

  useEffect(() => {
    if (milestoneCount <= 1) return () => undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestoneCount);
    }, 5200);
    return () => clearInterval(timer);
  }, [milestoneCount]);

  return (
    <section id="journey" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="Journey"
        title="A stepper through the experiments"
        description="Hover, tap, or let it autoplay to feel how each milestone hands momentum to the next." 
      />
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#03050b] via-[#040917] to-[#020409]">
        <div className="absolute inset-0 opacity-80">
          <JourneyCanvas />
          <div className="absolute inset-0 bg-gradient-to-b from-[#02030a]/90 via-[#050a14]/75 to-[#010207]/95" />
        </div>
        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300/80">
              Experimental Stepper
            </p>
            <div className="relative pl-6">
              <div className="absolute left-1 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/60 via-white/30 to-fuchsia-400/60" />
              <div className="space-y-8">
                {journeyMilestones.map((item, index) => (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="group flex w-full gap-4 text-left"
                  >
                    <div className="relative mt-1 flex flex-col items-center">
                      <motion.span
                        className="z-10 block h-3 w-3 rounded-full bg-white"
                        variants={circleVariants}
                        animate={index === activeIndex ? "active" : "inactive"}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="h-full w-px bg-white/10" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">
                        {item.year}
                      </p>
                      <p className="text-base font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-300/90">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/15">
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeMilestone?.year ?? "journey-active"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur-lg"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
                <span>Step {String(activeIndex + 1).padStart(2, "0")}</span>
                <span>{milestoneCount} phases</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/80">
                  {activeMilestone?.year}
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {activeMilestone?.title}
                </h3>
              </div>
              <p className="text-base text-slate-200/90">
                {activeMilestone?.description}
              </p>
              <div className="grid gap-3 text-sm text-slate-200/90 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">Focus</p>
                  <p className="mt-2 text-slate-200">
                    Translating insight to immersive visuals with Three.js narratives.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">Impact</p>
                  <p className="mt-2 text-slate-200">
                    Fueled the next section&apos;s goals — continue scrolling for proof.
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
