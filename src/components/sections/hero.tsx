"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { heroHighlights, heroStats, profile } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-32 overflow-hidden py-20 sm:py-28"
    >
      {/* Animated background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-purple-500/15 blur-[120px]"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-7xl px-6 sm:px-10"
      >
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Left content */}
          <div className="space-y-10">
            <motion.div variants={item} className="space-y-6">
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                {profile.availability}
              </motion.p>
              <p className="text-sm font-medium text-slate-400">{profile.location}</p>
            </motion.div>

            <motion.div variants={item} className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="text-2xl font-semibold text-cyan-400">{profile.title}</p>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                {profile.tagline}
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-500/50"
              >
                Start a project
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#projects"
                className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                See recent work
              </Link>
            </motion.div>
          </div>

          {/* Right stats panel */}
          <motion.div variants={item} className="space-y-6">
            {/* Main stats */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 backdrop-blur-xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                Snapshot
              </p>
              <div className="space-y-6">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-400">{stat.label}</span>
                    <span className="text-4xl font-bold text-white">
                      <AnimatedCounter value={stat.value} suffix="+" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live builds */}
            <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-950/30 to-blue-950/20 p-8 backdrop-blur-xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Live builds
              </p>
              <div className="space-y-3">
                {heroHighlights.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-bold text-cyan-300">
                      <AnimatedCounter value={item.value} suffix={item.value.includes("+") ? "+" : ""} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="rounded-[32px] border border-purple-400/20 bg-gradient-to-br from-purple-950/30 to-slate-950/50 p-6 backdrop-blur-xl"
            >
              <p className="text-sm leading-relaxed text-slate-200">
                Leading a 20+ person team and training 100+ beginners keeps me close to both architecture and people.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
