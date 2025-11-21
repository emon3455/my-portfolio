"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactLinks, profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="space-y-10 scroll-mt-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s build the next chapter"
        description="Tell me about the story you want to tell, the metrics you need to move, or the feelings you want to evoke."
        align="center"
      />
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="rounded-[36px] border border-white/20 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-[2px] shadow-2xl backdrop-blur-xl">
            <div className="rounded-[34px] bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-10 text-center">
              <p className="text-xl text-slate-200">
                Ready when you are. Drop a note and I&apos;ll reply within 2 business days.
              </p>
              <Link
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-500/50"
              >
                {profile.email}
              </Link>
              <div className="mt-10 space-y-3">
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-cyan-400/50 hover:bg-cyan-950/20"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 group-hover:text-cyan-300">
                      {link.label}
                    </span>
                    <span className="text-base font-semibold text-white">{link.value}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
