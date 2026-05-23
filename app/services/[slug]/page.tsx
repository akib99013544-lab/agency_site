import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gauge,
  Layout,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceFaqs from "@/components/service/ServiceFaqs";
import ServiceRelated from "@/components/service/ServiceRelated";
import { getServiceBySlug, getRelatedServices, servicesData } from "@/lib/services";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | MODULUS SOFTWARE`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      <Navbar />
      <main className="site-shell">
        <ServiceHero service={service} />

        {/* ── Overview + Stats ── */}
        <section className="section-shell border-y border-white/10 bg-white/[0.02]">
          <div className="section-inner">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-start">
              <div>
                <p className="section-kicker">Overview</p>
                <h2 className="section-title mt-4 max-w-xl">
                  What this service actually delivers.
                </h2>
                <p className="section-copy mt-6 max-w-xl">{service.overview}</p>

                {/* Deliverables */}
                <div className="mt-10">
                  <p className="mb-5 text-sm font-black uppercase tracking-[0.14em] text-white">
                    What&apos;s included
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/64">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: service.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10"
                style={{ borderRadius: 8 }}
              >
                {service.stats.map((stat) => (
                  <div key={stat.label} className="bg-[#0f1117] p-6">
                    <p
                      className="text-4xl font-black"
                      style={{ color: service.accent }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/46">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceFeatures service={service} />
        <ServiceProcess service={service} />
        <ServiceFaqs service={service} />
        <ServiceRelated services={related} currentAccent={service.accent} />

        {/* ── Bottom CTA ── */}
        <section className="section-shell border-t border-white/10 bg-white/[0.025]">
          <div className="section-inner text-center">
            <p className="section-kicker justify-center">Ready to start?</p>
            <h2 className="section-title mt-4 mx-auto max-w-2xl">
              Let&apos;s build your {service.platform} site.
            </h2>
            <p className="section-copy mt-5 mx-auto max-w-xl">
              Book a free 30-minute strategy call. We will review your goals and map out a clear path to launch.
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
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/40 hover:bg-white/7"
              >
                All services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
