"use client";

import Link from "next/link";
import { navLinks, contactLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-16 rounded-3xl border border-white/5 bg-[#05060b]/80 p-6 text-sm text-slate-300 backdrop-blur-xl">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{profile.name}</p>
          <p className="text-lg font-semibold text-white">Building expressive web stories since 2016.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-400 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
        {contactLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-300/60"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{link.label}</p>
            <p className="mt-2 font-semibold text-white">{link.value}</p>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Crafted with motion, WebGL, and way too much coffee.
      </p>
    </footer>
  );
}
