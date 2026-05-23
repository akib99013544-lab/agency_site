"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Code2,
  Globe2,
  Layers3,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const metrics = [
  { label: "Avg. launch time", value: "14 days" },
  { label: "CMS builds shipped", value: "50+" },
  { label: "Client satisfaction", value: "98%" },
];

const stackItems = [
  { label: "Strategy", icon: Layers3, color: "#14b8a6" },
  { label: "Design", icon: Sparkles, color: "#f59e0b" },
  { label: "Development", icon: Code2, color: "#60a5fa" },
];

const trusted = ["Shopify", "WordPress", "Wix", "Squarespace"];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 md:pt-34">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-28 h-48 w-px bg-gradient-to-b from-transparent via-teal-300/50 to-transparent"
        animate={{ opacity: [0.25, 0.8, 0.25], y: [0, 24, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[12%] top-24 h-px w-56 bg-gradient-to-r from-transparent via-blue-300/45 to-transparent"
        animate={{ opacity: [0.2, 0.7, 0.2], x: [0, -28, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-inner relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-200"
          >
            <Zap size={14} />
            Premium consulting and build studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 max-w-4xl text-[clamp(3.1rem,8vw,7.2rem)] font-black leading-[0.88] tracking-normal text-white"
          >
            Professional consulting for your app &amp; software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/62"
          >
            We plan, design, and build polished CMS websites and product-ready web experiences with clear strategy, premium visuals, and reliable launch execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
            >
              Let&apos;s talk
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/50 hover:bg-white/7"
            >
              <Play size={17} />
              See case studies
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-12 grid max-w-2xl grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10"
            style={{ borderRadius: 8 }}
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-[#0f1117]/90 p-4">
                <p className="text-xl font-black text-white md:text-2xl">{metric.value}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-white/45">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.16 }}
          className="relative"
        >
          <motion.div
            aria-hidden="true"
            className="absolute -inset-5 border border-teal-300/10"
            style={{ borderRadius: 12 }}
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.015, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative overflow-hidden border border-white/10 bg-[#0c0f15] shadow-2xl" style={{ borderRadius: 12 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(20,184,166,0.16),transparent_26rem),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%)]" />

            <div className="relative grid min-h-[620px] lg:grid-cols-[0.72fr_1fr]">
              <div className="flex flex-col justify-between border-b border-white/10 p-5 md:p-7 lg:border-b-0 lg:border-r">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Live project room</span>
                    <span className="rounded-lg bg-teal-300 px-2.5 py-1 text-xs font-black text-[#07100f]">Active</span>
                  </div>

                  <div className="mt-8 space-y-3">
                    {stackItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.45 + index * 0.12 }}
                          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-3"
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/7" style={{ color: item.color }}>
                            <Icon size={18} />
                          </span>
                          <div>
                            <p className="text-sm font-black text-white">{item.label}</p>
                            <p className="text-xs text-white/40">In progress</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 rounded-lg border border-white/10 bg-black/20 p-4">
                  <div className="mb-3 flex gap-1 text-amber-300">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-white/64">
                    Premium layout, strong direction, and fast execution from strategy to launch.
                  </p>
                </div>
              </div>

              <div className="relative p-5 md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                  </div>
                  <span className="text-xs font-semibold text-white/38">consulting.dashboard</span>
                </div>

                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#11151d]">
                  <div className="grid min-h-[330px] md:grid-cols-[1fr_0.74fr]">
                    <div className="p-5">
                      <p className="text-sm font-bold text-teal-200">Software roadmap</p>
                      <h2 className="mt-3 text-4xl font-black leading-none text-white">Build plan</h2>
                      <div className="mt-7 space-y-3">
                        {[
                          ["Discovery", 82],
                          ["UX System", 66],
                          ["Frontend", 74],
                          ["Launch QA", 48],
                        ].map(([label, width]) => (
                          <div key={label}>
                            <div className="mb-2 flex justify-between text-xs font-bold text-white/48">
                              <span>{label}</span>
                              <span>{width}%</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded bg-white/8">
                              <motion.div
                                className="h-full rounded bg-gradient-to-r from-teal-300 to-blue-400"
                                initial={{ width: 0 }}
                                animate={{ width: `${width}%` }}
                                transition={{ duration: 1.2, delay: 0.6 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/10 bg-white/[0.035] p-5 md:border-l md:border-t-0">
                      <div className="flex h-full flex-col justify-between gap-5">
                        <div className="rounded-lg bg-white/[0.045] p-4">
                          <BarChart3 size={20} className="text-teal-300" />
                          <p className="mt-4 text-3xl font-black text-white">+38%</p>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/38">Projected lead lift</p>
                        </div>
                        <div className="space-y-3">
                          {[ShieldCheck, Globe2, Clock3].map((Icon, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-3 text-sm font-semibold text-white/64"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <CheckCircle2 size={16} className="text-teal-300" />
                              <span>{["Secure scope", "Responsive pages", "Launch ready"][index]}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {trusted.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.08 }}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3 text-center text-xs font-black text-white/54"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
