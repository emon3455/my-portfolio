"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";

const menuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-4 z-50 mx-auto max-w-6xl px-4 sm:px-8">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#05060b]/80 px-4 py-3 text-sm text-slate-100 shadow-[0_0_40px_rgba(92,225,230,0.08)] backdrop-blur-xl">
        <div className="flex items-center gap-2 font-semibold tracking-wide text-white">
          <span className="text-cyan-300">◎</span>
          {profile.name}
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-cyan-400/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:bg-cyan-300"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            {(["top", "middle", "bottom"] as const).map((line) => (
              <span
                key={line}
                className={`block h-0.5 w-6 origin-center bg-white transition ${
                  open && line === "middle" ? "opacity-0" : ""
                } ${
                  open && line === "top"
                    ? "translate-y-[6px] rotate-45"
                    : open && line === "bottom"
                      ? "-translate-y-[6px] -rotate-45"
                      : ""
                }`}
              />
            ))}
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mt-3 rounded-2xl border border-white/10 bg-[#05060b]/90 p-4 text-sm text-slate-200 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="mt-2 block rounded-xl bg-cyan-400/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 hover:bg-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
