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

import WorkProjects from "@/components/work/WorkProjects";

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
            <WorkProjects />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
