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
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#09202a] via-[#070b12] to-[#05060a] p-8 text-center"
      >
        <p className="text-lg text-slate-200">
          Ready when you are. Drop a note and I&apos;ll reply within 1 business days.
        </p>
        <Link
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400/90 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          {profile.email}
        </Link>
        <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200 transition hover:border-cyan-300/50"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                {link.label}
              </p>
              <p className="mt-2 font-semibold text-white">{link.value}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
