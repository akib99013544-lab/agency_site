"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, CheckCircle2, MousePointerClick, Users, type LucideIcon } from "lucide-react";
import { workProjects, type WorkProject, type WorkStatIcon } from "@/lib/work";

const statIcons: Record<WorkStatIcon, LucideIcon> = {
  chart: BarChart3,
  check: CheckCircle2,
  click: MousePointerClick,
  users: Users,
};

const platforms = ["All", "WordPress", "Shopify", "Squarespace", "Wix", "Custom Code"];

export default function WorkProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = workProjects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.platform === activeFilter;
  });

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => setActiveFilter(platform)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 ${
              activeFilter === platform
                ? "bg-teal-400 text-[#08090d]"
                : "border border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            {platform}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="grid overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.95fr_1.05fr]"
            style={{ borderRadius: 8 }}
          >
            {/* ── Left: image mockup ── */}
            <div className="bg-[#0b0e14] p-5 md:p-7">
              {/* Browser chrome */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                </div>
                <div className="mx-3 flex flex-1 items-center gap-2 rounded bg-white/[0.06] px-3 py-1">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: project.accent }} />
                  <span className="text-[10px] font-semibold text-white/30">
                    {project.title.toLowerCase().replace(/\s/g, "")}.com
                  </span>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.14em]" style={{ color: project.accent }}>
                  {project.platform}
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-white/10 md:min-h-[320px]">
                <Image
                  src={project.image}
                  alt={`${project.title} website`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 50%, rgba(11,14,20,0.88) 100%), linear-gradient(135deg, ${project.accent}14 0%, transparent 50%)`,
                  }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-2xl font-black text-white/20">0{index + 1}</span>
                  <span
                    className="rounded-lg px-3 py-1.5 text-xs font-black"
                    style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}30` }}
                  >
                    {project.title}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Right: info ── */}
            <div className="bg-[#0f1117] p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: project.accent }}>
                {project.category}
              </p>
              <h2 className="mt-4 text-4xl font-black text-white">{project.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">{project.summary}</p>

              <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3" style={{ borderRadius: 8 }}>
                {project.stats.map((stat) => {
                  const Icon = statIcons[stat.icon];
                  return (
                    <div key={stat.label} className="bg-[#10141d] p-4">
                      <Icon size={18} style={{ color: project.accent }} />
                      <p className="mt-3 text-2xl font-black text-white">{stat.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/38">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <Link href={`/work/${project.slug}`} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200">
                Open project
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-white/50">
            No projects found for {activeFilter}.
          </div>
        )}
      </div>
    </>
  );
}
