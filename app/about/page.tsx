import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutStats from "@/components/about/AboutStats";

export const metadata: Metadata = {
  title: "About | MODULUS SOFTWARE",
  description:
    "MODULUS SOFTWARE is a focused consulting and development studio for businesses that need polished software, app strategy, and CMS websites.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutValues />
        <AboutTeam />

        {/* ── Bottom CTA ── */}
        <section className="section-shell border-t border-white/10 bg-white/[0.025]">
          <div className="section-inner text-center">
            <p className="section-kicker justify-center">Work with us</p>
            <h2 className="section-title mt-4 mx-auto max-w-2xl">
              Let&apos;s build something worth showing.
            </h2>
            <p className="section-copy mt-5 mx-auto max-w-xl">
              We take on a limited number of projects each month to keep quality high. If you have a project in mind, let&apos;s talk.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
              >
                Start a project
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/40 hover:bg-white/7"
              >
                View services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
