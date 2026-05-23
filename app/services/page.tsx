import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Code2, Gauge, Globe, Layout, RefreshCw, Search, ShoppingBag, Rocket, Palette, Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | MODULUS SOFTWARE",
  description:
    "Premium web services — Shopify, WordPress, Wix, Squarespace, custom code, full stack development, SEO, website maintenance, landing pages, and redesigns.",
};

const iconMap: Record<string, React.ElementType> = {
  "shopify-development": ShoppingBag,
  "wordpress-development": Code2,
  "wix-development": Layout,
  "squarespace-design": Palette,
  "landing-page-design": Rocket,
  "website-redesign": RefreshCw,
  "speed-optimization": Gauge,
  "seo-setup": Search,
  "custom-code-development": Terminal,
  "full-stack-development": Globe,
  "website-maintenance": Code2,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-36 pb-20">
          <div className="absolute inset-0 grid-texture opacity-30" />
          <div className="section-inner relative z-10">
            <p className="section-kicker">Services</p>
            <h1 className="section-title mt-4 max-w-3xl">
              Every service built around outcomes.
            </h1>
            <p className="section-copy mt-6 max-w-2xl">
              From CMS platforms to custom code, full stack apps, SEO, and ongoing maintenance — we build and grow your digital presence end to end.
            </p>
          </div>
        </section>

        {/* ── Services grid ── */}
        <section className="section-shell border-y border-white/10 bg-white/[0.02]">
          <div className="section-inner">
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4" style={{ borderRadius: 8 }}>
              {servicesData.map((service) => {
                const Icon = iconMap[service.slug] ?? Code2;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex flex-col bg-[#0f1117] p-6 transition hover:bg-[#141923]"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.055]"
                        style={{ color: service.accent }}
                      >
                        <Icon size={21} />
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-white/20 transition group-hover:translate-x-1 group-hover:text-white"
                      />
                    </div>
                    <span
                      className="mb-2 text-xs font-bold uppercase tracking-[0.12em]"
                      style={{ color: service.accent }}
                    >
                      {service.platform}
                    </span>
                    <h2 className="text-xl font-black text-white">{service.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-6 text-white/50">
                      {service.tagline}
                    </p>
                    <span
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition group-hover:gap-2.5"
                      style={{ color: service.accent }}
                    >
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="section-shell">
          <div className="section-inner">
            <div className="panel p-8 md:p-12 text-center">
              <p className="section-kicker justify-center">Get started</p>
              <h2 className="section-title mt-4">Not sure which service fits?</h2>
              <p className="section-copy mt-5 mx-auto max-w-xl">
                Book a free 30-minute strategy call. We will review your current site, understand your goals, and recommend the right path forward.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
                >
                  Book a free call
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/40 hover:bg-white/7"
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
