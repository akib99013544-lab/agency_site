"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Gauge, Layout, RefreshCw, Search, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Stores",
    description: "Conversion-led storefronts, product templates, app setup, checkout polish, and launch QA.",
    accent: "#14b8a6",
  },
  {
    icon: Code2,
    title: "WordPress Builds",
    description: "Custom themes, editable blocks, WooCommerce, technical SEO, and maintainable admin workflows.",
    accent: "#3b82f6",
  },
  {
    icon: Layout,
    title: "Wix & Squarespace",
    description: "Premium small-business websites with clean structure, responsive sections, and easy content control.",
    accent: "#f59e0b",
  },
  {
    icon: RefreshCw,
    title: "Redesign Systems",
    description: "Sharper messaging, improved page hierarchy, reusable sections, and clean migration support.",
    accent: "#fb7185",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    description: "Performance audits, image strategy, Core Web Vitals fixes, and leaner frontend delivery.",
    accent: "#22c55e",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description: "Metadata, schema, analytics, redirects, internal linking, and launch-ready technical hygiene.",
    accent: "#a78bfa",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Services</p>
            <h2 className="section-title">Full-page thinking, not template filling.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-copy max-w-xl lg:justify-self-end"
          >
            Each build is planned around content hierarchy, trust signals, speed, conversion paths, and the CMS your team will actually use after launch.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3" style={{ borderRadius: 8 }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-[#0f1117] p-6 transition hover:bg-[#141923]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.055]" style={{ color: service.accent }}>
                    <Icon size={21} />
                  </span>
                  <ArrowRight size={18} className="text-white/24 transition group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-black text-white">{service.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-white/52">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
