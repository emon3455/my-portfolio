"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroHighlights, heroStats, profile } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-32 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-900 to-[#05060b] px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[110px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]"
        variants={container}
      >
        <div className="space-y-8">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-slate-200 uppercase">
            {profile.availability}
          </p>
          <div className="space-y-5">
            <p className="text-sm text-slate-300">{profile.location}</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="text-xl text-slate-300">{profile.title}</p>
            <p className="max-w-2xl text-lg text-slate-300/90">
              {profile.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Start a project
              <span className="transition group-hover:translate-x-1">↗</span>
            </Link>
            <Link
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
            >
              See recent work
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-[#060a13]/80 p-6 backdrop-blur-xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Snapshot
              </p>
              <ul className="mt-4 space-y-4">
                {heroStats.map((stat) => (
                  <li key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{stat.label}</span>
                    <span className="text-2xl font-semibold text-white">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Live builds
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {heroHighlights.map((item) => (
                  <li key={item.label} className="flex items-center justify-between">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              Leading a 20+ person team and training 100+ beginners keeps me close to both architecture and people.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
