import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, MousePointerClick, Users, type LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { getWorkProject, workProjects, type WorkStatIcon } from "@/lib/work";

type WorkDetailProps = {
  params: Promise<{ slug: string }>;
};

const statIcons: Record<WorkStatIcon, LucideIcon> = {
  chart: BarChart3,
  check: CheckCircle2,
  click: MousePointerClick,
  users: Users,
};

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    return {
      title: "Work | MODULUS SOFTWARE",
    };
  }

  return {
    title: `${project.title} Case Study | MODULUS SOFTWARE`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject =
    workProjects[(workProjects.findIndex((item) => item.slug === project.slug) + 1) % workProjects.length];

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="site-shell">
        <section className="relative overflow-hidden pt-36 md:pt-42">
          <div className="absolute inset-0 grid-texture opacity-25" />
          <div className="section-inner relative z-10 pb-16 pt-10">
            <Link href="/work" className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-4 py-2.5 text-sm font-bold text-white/72 transition hover:bg-white/7 hover:text-white">
              <ArrowLeft size={16} />
              Back to work
            </Link>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
              <div>
                <p className="section-kicker">{project.platform} case study</p>
                <h1 className="mt-5 text-[clamp(3.25rem,8vw,7rem)] font-black leading-[0.9] tracking-normal text-white">
                  {project.title}
                </h1>
              </div>
              <p className="section-copy max-w-xl lg:justify-self-end">{project.summary}</p>
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-white/10 bg-white/[0.02]">
          <div className="section-inner">
            <div className="grid overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.1fr_0.9fr]" style={{ borderRadius: 8 }}>

              {/* ── Left: full image mockup ── */}
              <div className="bg-[#0b0e14] p-5 md:p-8">
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
                    {project.category}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-white/10 md:min-h-[420px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} website`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 660px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 45%, rgba(11,14,20,0.9) 100%), linear-gradient(135deg, ${project.accent}12 0%, transparent 50%)`,
                    }}
                  />
                  {/* Platform badge */}
                  <div className="absolute bottom-5 left-5">
                    <span
                      className="rounded-lg px-3 py-1.5 text-xs font-black"
                      style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}35` }}
                    >
                      {project.platform}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Right: stats + services ── */}
              <aside className="bg-[#0f1117] p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: project.accent }}>
                  Project results
                </p>
                <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10" style={{ borderRadius: 8 }}>
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

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/58">
                      {service}
                    </span>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3" style={{ borderRadius: 8 }}>
              {[
                ["Challenge", project.challenge],
                ["Solution", project.solution],
                ["Outcome", project.outcome],
              ].map(([title, text]) => (
                <article key={title} className="bg-[#0f1117] p-6 md:p-8">
                  <h2 className="text-2xl font-black text-white">{title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/56">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/36">Next project</p>
                <p className="mt-2 text-2xl font-black text-white">{nextProject.title}</p>
              </div>
              <Link href={`/work/${nextProject.slug}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200">
                View next case
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
