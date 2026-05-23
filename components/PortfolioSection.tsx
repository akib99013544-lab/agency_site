"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, MousePointerClick, Users, type LucideIcon } from "lucide-react";
import { workProjects, type WorkStatIcon } from "@/lib/work";

const statIcons: Record<WorkStatIcon, LucideIcon> = {
  chart: BarChart3,
  check: CheckCircle2,
  click: MousePointerClick,
  users: Users,
};

function Preview({ accent, title, platform, image }: {
  accent: string;
  title: string;
  platform: string;
  image: string;
}) {
  return (
    <div className="h-full bg-[#0b0e14] p-4">
      {/* Browser chrome */}
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
        </div>
        {/* URL bar */}
        <div className="mx-3 flex flex-1 items-center gap-2 rounded bg-white/[0.06] px-3 py-1">
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
          <span className="text-[10px] font-semibold text-white/30">
            {title.toLowerCase().replace(/\s/g, "")}.com
          </span>
        </div>
        <span className="text-xs font-bold" style={{ color: accent }}>{platform}</span>
      </div>

      {/* Website screenshot mockup */}
      <div className="relative h-[300px] overflow-hidden rounded-lg border border-white/10 md:h-[360px]">
        <Image
          src={image}
          alt={`${title} website preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 600px"
        />
        {/* Overlay gradient — dark at bottom for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 55%, rgba(11,14,20,0.85) 100%), linear-gradient(135deg, ${accent}18 0%, transparent 50%)`,
          }}
        />
        {/* Site name overlay */}
        <div className="absolute bottom-4 left-4">
          <span
            className="rounded-lg px-3 py-1.5 text-xs font-black"
            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}30` }}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);
  const project = workProjects[activeProject];

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
          {workProjects.map((item, index) => (
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
            <Preview accent={project.accent} title={project.title} platform={project.platform} image={project.image} />
            <div className="bg-[#0f1117] p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: project.accent }}>
                {project.platform} case study
              </p>
              <h3 className="mt-4 text-4xl font-black text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/58">{project.summary}</p>

              <div className="mt-9 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1" style={{ borderRadius: 8 }}>
                {project.stats.map((stat) => {
                  const Icon = statIcons[stat.icon];
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

              <Link href={`/work/${project.slug}`} className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/7">
                View case study
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center">
          <Link href="/work" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200">
            Explore all work
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
