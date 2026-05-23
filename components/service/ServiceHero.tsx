"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ServiceData } from "@/lib/services";

export default function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 grid-texture opacity-30" />

      {/* Accent glow */}
      <div
        className="pointer-events-none absolute left-[10%] top-24 h-72 w-72 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${service.accent}, transparent 70%)`,
          filter: "blur(72px)",
        }}
      />

      <div className="section-inner relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center gap-1.5 text-sm text-white/38"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <Link href="/services" className="transition hover:text-white">Services</Link>
          <ChevronRight size={14} />
          <span style={{ color: service.accent }}>{service.title}</span>
        </motion.nav>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: service.accent }}
            >
              {service.heroLabel}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="mt-5 text-[clamp(2.8rem,7vw,6rem)] font-black leading-[0.92] tracking-tight text-white"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/58"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
              >
                Start this project
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/40 hover:bg-white/7"
              >
                All services
              </Link>
            </motion.div>
          </div>

          {/* Right — platform card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="panel overflow-hidden"
          >
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              </div>
              <span
                className="rounded-lg px-2.5 py-1 text-xs font-black"
                style={{ background: `${service.accent}22`, color: service.accent }}
              >
                {service.platform}
              </span>
            </div>

            {/* Card body */}
            <div className="p-5">
              {/* Mock browser content */}
              <div
                className="mb-4 h-3 w-28 rounded"
                style={{ background: `${service.accent}30` }}
              />
              <div className="mb-5 h-6 w-48 rounded bg-white/10" />

              {/* Progress bars */}
              <div className="space-y-3">
                {[
                  { label: "Discovery", pct: 100 },
                  { label: "Design", pct: 82 },
                  { label: "Development", pct: 66 },
                  { label: "Launch", pct: 48 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-1.5 flex justify-between text-xs font-bold text-white/40">
                      <span>{bar.label}</span>
                      <span>{bar.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded bg-white/8">
                      <motion.div
                        className="h-full rounded"
                        style={{ background: service.accent }}
                        initial={{ width: 0 }}
                        animate={{ width: `${bar.pct}%` }}
                        transition={{ duration: 1.1, delay: 0.5 + bar.pct * 0.003 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div
                className="mt-5 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10"
                style={{ borderRadius: 6 }}
              >
                {service.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="bg-[#0f1117] p-4">
                    <p
                      className="text-2xl font-black"
                      style={{ color: service.accent }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white/38">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
