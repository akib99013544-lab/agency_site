"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Gauge, Layout, Palette, RefreshCw, Rocket, Search, ShoppingBag } from "lucide-react";
import type { ServiceData } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  "shopify-development": ShoppingBag,
  "wordpress-development": Code2,
  "wix-development": Layout,
  "squarespace-design": Palette,
  "landing-page-design": Rocket,
  "website-redesign": RefreshCw,
  "speed-optimization": Gauge,
  "seo-setup": Search,
};

export default function ServiceRelated({
  services,
  currentAccent,
}: {
  services: ServiceData[];
  currentAccent: string;
}) {
  if (!services.length) return null;

  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-kicker">Related services</p>
          <h2 className="section-title mt-4 max-w-xl">
            Often paired with this service.
          </h2>
        </motion.div>

        <div
          className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3"
          style={{ borderRadius: 8 }}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] ?? Code2;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
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
                      size={17}
                      className="text-white/20 transition group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                  <span
                    className="mb-2 text-xs font-bold uppercase tracking-[0.12em]"
                    style={{ color: service.accent }}
                  >
                    {service.platform}
                  </span>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{service.tagline}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
