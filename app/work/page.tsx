import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BarChart3, CheckCircle2, MousePointerClick, Users, type LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { workProjects, type WorkStatIcon } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work | MODULUS SOFTWARE",
  description:
    "Explore MODULUS SOFTWARE case studies across app consulting, CMS development, ecommerce redesign, and professional software web experiences.",
};

const statIcons: Record<WorkStatIcon, LucideIcon> = {
  chart: BarChart3,
  check: CheckCircle2,
  click: MousePointerClick,
  users: Users,
};

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="site-shell">
        <section className="relative overflow-hidden pt-36 md:pt-42">
          <div className="absolute inset-0 grid-texture opacity-25" />
          <div className="section-inner relative z-10 pb-20 pt-12">
            <p className="section-kicker">Work</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
              <h1 className="text-[clamp(3.25rem,8vw,7rem)] font-black leading-[0.9] tracking-normal text-white">
                Premium work, built with measurable structure.
              </h1>
              <p className="section-copy max-w-xl lg:justify-self-end">
                A focused look at how MODULUS SOFTWARE plans, designs, and ships polished web systems for consulting, ecommerce, and CMS-driven teams.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-white/10 bg-white/[0.02]">
          <div className="section-inner">
            <div className="grid gap-6">
              {workProjects.map((project, index) => (
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
