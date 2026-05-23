"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-28 h-px w-72 bg-gradient-to-r from-transparent via-teal-300/35 to-transparent"
        animate={{ opacity: [0.2, 0.65, 0.2], x: [0, -24, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-inner relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-sm text-white/38" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <span className="text-teal-300">About</span>
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
              The studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="mt-5 text-[clamp(2.8rem,7vw,6rem)] font-black leading-[0.92] tracking-tight text-white"
            >
              Senior taste, practical execution.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/58"
            >
              MODULUS SOFTWARE is a focused consulting and development studio for businesses that need polished software, app strategy, and CMS websites — without a bloated process or a junior team.
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
                Work with us
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

          {/* Right — studio card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="panel overflow-hidden"
          >
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-white/38">Studio profile</span>
                <span className="rounded-lg bg-teal-300 px-2.5 py-1 text-xs font-black text-[#07100f]">Active</span>
              </div>
            </div>
            <div className="p-5 space-y-4">
              {[
                { label: "Founded", value: "2019" },
                { label: "Location", value: "USA" },
                { label: "Speciality", value: "CMS & Software Consulting" },
                { label: "Team size", value: "Focused studio, 4 people" },
                { label: "Projects shipped", value: "50+" },
                { label: "Client satisfaction", value: "98%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-white/6 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-white/38">{item.label}</span>
                  <span className="text-sm font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
