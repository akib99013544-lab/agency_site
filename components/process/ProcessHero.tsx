"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function ProcessHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-32 h-px w-64 bg-gradient-to-r from-transparent via-teal-300/40 to-transparent"
        animate={{ opacity: [0.2, 0.7, 0.2], x: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-48 h-40 w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
        animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-inner relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-sm text-white/38" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <span className="text-teal-300">Process</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-200"
            >
              How we work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="mt-5 text-[clamp(2.8rem,7vw,6rem)] font-black leading-[0.92] tracking-tight text-white"
            >
              A clear path from brief to launch.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/58"
            >
              Every project follows the same disciplined five-step process. No ambiguity, no scope creep — just purposeful execution from discovery to handoff.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
              >
                Start a project
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/40 hover:bg-white/7"
              >
                View services
              </Link>
            </motion.div>
          </div>

          {/* Right — timeline preview card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="panel overflow-hidden"
          >
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-white/38">Project timeline</span>
                <span className="rounded-lg bg-teal-300 px-2.5 py-1 text-xs font-black text-[#07100f]">14 days</span>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: "Discovery", days: "Day 1", pct: 100, color: "#14b8a6" },
                { label: "Structure", days: "Day 2–3", pct: 85, color: "#3b82f6" },
                { label: "Design", days: "Day 4–7", pct: 70, color: "#f59e0b" },
                { label: "Build", days: "Day 8–12", pct: 50, color: "#fb7185" },
                { label: "Launch", days: "Day 13–14", pct: 30, color: "#a78bfa" },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-white/40">
                    <span className="text-white/70">{item.label}</span>
                    <span>{item.days}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded bg-white/8">
                    <motion.div
                      className="h-full rounded"
                      style={{ background: item.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.pct}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.12 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 px-5 py-4">
              <p className="text-xs text-white/38">Typical project: <span className="font-bold text-teal-300">10–14 business days</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
