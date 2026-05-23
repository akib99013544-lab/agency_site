import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessPhases from "@/components/process/ProcessPhases";
import ProcessPrinciples from "@/components/process/ProcessPrinciples";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ProcessFaq from "@/components/process/ProcessFaq";

export const metadata: Metadata = {
  title: "Our Process | MODULUS SOFTWARE",
  description:
    "A clear, disciplined 5-step process from discovery to launch. No ambiguity, no scope creep — just purposeful execution.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <ProcessHero />
        <ProcessPhases />
        <ProcessPrinciples />
        <ProcessTimeline />
        <ProcessFaq />

        {/* ── Bottom CTA ── */}
        <section className="section-shell border-t border-white/10 bg-white/[0.025]">
          <div className="section-inner text-center">
            <p className="section-kicker justify-center">Start the process</p>
            <h2 className="section-title mt-4 mx-auto max-w-2xl">
              Ready to move from idea to launch?
            </h2>
            <p className="section-copy mt-5 mx-auto max-w-xl">
              Book a free 30-minute discovery call. We will map out your project, set a realistic timeline, and give you a clear path forward.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
              >
                Book a free call
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
