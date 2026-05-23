"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, MousePointerClick, Users } from "lucide-react";

const projects = [
  {
    title: "LuxeWear",
    platform: "Shopify",
    summary: "A premium fashion storefront rebuilt around merchandising, trust, and a cleaner mobile checkout path.",
    accent: "#14b8a6",
    stats: [
      { label: "Revenue lift", value: "+340%", icon: BarChart3 },
      { label: "Conversion", value: "4.8%", icon: MousePointerClick },
      { label: "Visitors", value: "45K", icon: Users },
    ],
  },
  {
    title: "Apex Consulting",
    platform: "WordPress",
    summary: "A B2B site with clearer service pages, lead magnets, CRM routing, and a custom editing workflow.",
    accent: "#3b82f6",
    stats: [
      { label: "Lead growth", value: "+280%", icon: BarChart3 },
      { label: "Speed score", value: "98", icon: CheckCircle2 },
      { label: "Traffic", value: "+190%", icon: Users },
    ],
  },
  {
    title: "FreshMart",
    platform: "Wix",
    summary: "A fresh ecommerce experience with subscription flows, product storytelling, and campaign pages.",
    accent: "#f59e0b",
    stats: [
      { label: "Sales growth", value: "+410%", icon: BarChart3 },
      { label: "Repeat buyers", value: "68%", icon: Users },
      { label: "Cart value", value: "+85%", icon: MousePointerClick },
    ],
  },
];

function Preview({ accent, title, platform }: { accent: string; title: string; platform: string }) {
  return (
    <div className="h-full bg-[#0b0e14] p-4">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
        </div>
        <span className="text-xs font-bold" style={{ color: accent }}>{platform}</span>
      </div>
      <div className="grid h-[300px] gap-3 md:h-[360px] md:grid-cols-[1fr_0.72fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <div className="h-7 w-32 rounded bg-white/10" />
          <div className="mt-5 h-16 rounded" style={{ background: `${accent}22` }} />
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-24 rounded bg-white/7" />
            <div className="h-24 rounded bg-white/7" />
            <div className="h-24 rounded bg-white/7" />
          </div>
          <div className="mt-4 h-3 w-3/4 rounded bg-white/10" />
          <div className="mt-2 h-3 w-1/2 rounded bg-white/10" />
        </div>
        <div className="hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 md:block">
          <p className="text-sm font-bold text-white">{title}</p>
          <div className="mt-5 space-y-3">
            {[82, 64, 92, 48].map((width, index) => (
              <div key={index}>
                <div className="mb-2 h-2 w-20 rounded bg-white/10" />
                <div className="h-3 rounded bg-white/8">
                  <div className="h-3 rounded" style={{ width: `${width}%`, background: accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section id="portfolio" className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Layouts built around outcomes.</h2>
          </div>
          <p className="section-copy max-w-xl lg:justify-self-end">
            These sample engagements show the structure we bring to each site: clearer paths, stronger proof, faster pages, and CMS ownership.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {projects.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActiveProject(index)}
              className={`rounded-lg border px-4 py-2.5 text-sm font-bold transition ${
                activeProject === index
                  ? "border-white bg-white text-[#08090d]"
                  : "border-white/10 text-white/56 hover:border-white/30 hover:text-white"
              }`}
            >
              {item.platform}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.15fr_0.85fr]"
            style={{ borderRadius: 8 }}
          >
            <Preview accent={project.accent} title={project.title} platform={project.platform} />
            <div className="bg-[#0f1117] p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: project.accent }}>
                {project.platform} case study
              </p>
              <h3 className="mt-4 text-4xl font-black text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/58">{project.summary}</p>

              <div className="mt-9 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1" style={{ borderRadius: 8 }}>
                {project.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-4 bg-[#10141d] p-4">
                      <Icon size={19} style={{ color: project.accent }} />
                      <div>
                        <p className="text-2xl font-black text-white">{stat.value}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/38">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/7">
                View case study
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
