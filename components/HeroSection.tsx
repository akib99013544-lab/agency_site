"use client";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Clock3, Globe2, ShoppingBag, Star } from "lucide-react";

const metrics = [
  { label: "Avg. launch time", value: "14 days" },
  { label: "CMS builds shipped", value: "50+" },
  { label: "Client satisfaction", value: "98%" },
];

const platforms = ["Shopify", "WordPress", "Wix", "Squarespace"];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 md:pt-34">
      <div className="absolute inset-x-0 top-0 h-[720px] grid-texture opacity-35" />
      <div className="section-inner relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-kicker"
          >
            CMS agency for growing brands
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-[clamp(3rem,8vw,6.8rem)] font-black leading-[0.92] tracking-normal text-white"
          >
            Websites that look sharp and sell clearly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/62"
          >
            PixelForge builds fast, conversion-focused Shopify, WordPress, Wix, and Squarespace sites for service businesses and ecommerce teams that need a polished web presence without agency drag.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
            >
              Start a Project
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/50 hover:bg-white/7"
            >
              View Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10"
            style={{ borderRadius: 8 }}
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-[#0f1117]/88 p-4">
                <p className="text-xl font-black text-white md:text-2xl">{metric.value}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-white/45">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative pb-14 lg:pb-0"
        >
          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              </div>
              <span className="rounded bg-white/7 px-3 py-1 text-xs text-white/42">pixelforge.dashboard</span>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-[1fr_0.72fr]">
              <div className="bg-[#10131a] p-5 md:p-7">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-teal-300">Storefront redesign</p>
                    <h2 className="mt-2 text-3xl font-black leading-tight text-white">Launch board</h2>
                  </div>
                  <div className="rounded-lg bg-teal-400/12 px-3 py-2 text-sm font-bold text-teal-200">Live</div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: ShoppingBag, title: "Checkout flow", text: "Cart, offers, payment QA" },
                    { icon: Globe2, title: "CMS setup", text: "Editable sections and SEO fields" },
                    { icon: BarChart3, title: "Performance", text: "Core Web Vitals and analytics" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-center gap-4 rounded-lg border border-white/8 bg-white/[0.035] p-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/7 text-teal-300">
                          <Icon size={18} />
                        </span>
                        <div>
                          <p className="font-bold text-white">{item.title}</p>
                          <p className="text-sm text-white/45">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#0c0f15] p-5 md:p-7">
                <div className="mb-6 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="mb-4 flex items-center gap-2 text-amber-300">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-white/68">Clean design, fast launch, and a site our team can actually update.</p>
                </div>

                <div className="space-y-3">
                  {platforms.map((platform) => (
                    <div key={platform} className="flex items-center justify-between border-b border-white/8 pb-3 text-sm">
                      <span className="text-white/62">{platform}</span>
                      <CheckCircle2 size={16} className="text-teal-300" />
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3 rounded-lg bg-blue-400/10 p-4 text-blue-100">
                  <Clock3 size={18} />
                  <span className="text-sm font-semibold">Typical delivery: 7-14 business days</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
