"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Gauge, Globe, Layout, Palette, RefreshCw, Rocket, Search, ShoppingBag, Terminal, Server } from "lucide-react";

// Service definitions – includes original and newly requested services
const services = [
  { slug: "shopify-development", icon: ShoppingBag, title: "Shopify Stores", description: "Conversion‑led storefronts, product templates, app setup, checkout polish, and launch QA.", accent: "#14b8a6" },
  { slug: "wordpress-development", icon: Code2, title: "WordPress Builds", description: "Custom themes, editable blocks, WooCommerce, technical SEO, and maintainable admin workflows.", accent: "#3b82f6" },
  { slug: "wix-development", icon: Layout, title: "Wix Websites", description: "Premium small‑business sites with clean structure, responsive sections, and easy content control.", accent: "#f59e0b" },
  { slug: "squarespace-design", icon: Palette, title: "Squarespace Design", description: "Elegant portfolio and service sites with custom CSS, refined typography, and brand polish.", accent: "#a78bfa" },
  { slug: "custom-code-development", icon: Terminal, title: "Custom Code", description: "Bespoke frontend and full‑stack development – React, Next.js, Node.js, APIs, and custom web apps.", accent: "#06b6d4" },
  { slug: "full-stack-development", icon: Globe, title: "Full Stack Development", description: "End‑to‑end web application development with modern stack — frontend, backend, database, and deployment.", accent: "#8b5cf6" },
  { slug: "seo-setup", icon: Search, title: "SEO & Growth", description: "Technical SEO, metadata, schema, analytics, Core Web Vitals, and organic growth foundations.", accent: "#10b981" },
  { slug: "landing-page-design", icon: Rocket, title: "Landing Pages", description: "High‑converting pages built for a single goal – lead gen, product launches, or ad campaigns.", accent: "#fb7185" },
  { slug: "website-redesign", icon: RefreshCw, title: "Redesign Systems", description: "Sharper messaging, improved page hierarchy, reusable sections, and clean migration support.", accent: "#22c55e" },
  { slug: "speed-optimization", icon: Gauge, title: "Speed Optimization", description: "Performance audits, image strategy, Core Web Vitals fixes, and leaner frontend delivery.", accent: "#f97316" },
  { slug: "website-maintenance", icon: Code2, title: "Website Maintenance", description: "Ongoing updates, security patches, content changes, plugin management, and monthly health checks.", accent: "#64748b" },
  // Newly requested services
  { slug: "custom-web-development", icon: Server, title: "Custom Web Development", description: "Tailored full‑stack web solutions with React, Next.js, Node.js, APIs, and scalable architecture.", accent: "#0ea5e9" },
  { slug: "frontend-development", icon: Code2, title: "Frontend Development", description: "Pixel‑perfect UI/UX, responsive design, React components, and performance‑focused front‑ends.", accent: "#e11d48" },
  { slug: "backend-development", icon: Server, title: "Backend Development", description: "Robust APIs, database design, authentication, serverless functions, and cloud deployment.", accent: "#34d399" },
  { slug: "seo-website-maintenance", icon: Search, title: "SEO & Website Maintenance", description: "Ongoing SEO audits, content updates, security patches, and performance monitoring.", accent: "#f59e0b" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-kicker">Services</p>
            <h2 className="section-title">Full‑page thinking, not template filling.</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-copy max-w-xl lg:justify-self-end">
            Each build is planned around content hierarchy, trust signals, speed, conversion paths, and the CMS your team will actually use after launch.
          </motion.p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3" style={{ borderRadius: 8 }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <Link href={`/services/${service.slug}`} className="group flex flex-col bg-[#0f1117] p-6 transition hover:bg-[#141923]">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.055]" style={{ color: service.accent }}>
                      <Icon size={21} />
                    </span>
                    <ArrowRight size={18} className="text-white/24 transition group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 min-h-24 flex-1 text-sm leading-6 text-white/52">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold opacity-0 transition group-hover:opacity-100" style={{ color: service.accent }}>
                    View service <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-teal-300/40 hover:bg-white/7">
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
