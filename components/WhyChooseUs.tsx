"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Gauge, ShieldCheck, Smartphone, Star, TrendingUp } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects completed" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3x", label: "Average growth target" },
  { value: "14d", label: "Typical launch window" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Built for handoff",
    description: "Clear CMS editing, reusable sections, and documentation so your team is not locked out after launch.",
  },
  {
    icon: Gauge,
    title: "Performance minded",
    description: "Layouts, media, and scripts are planned to keep pages fast and ready for paid traffic.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first structure",
    description: "Navigation, forms, cards, and content blocks are designed for real browsing patterns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Why PixelForge</p>
            <h2 className="section-title">A calmer way to ship a better website.</h2>
            <p className="section-copy mt-6 max-w-xl">
              We bring the same discipline to a five-page service site that we bring to a conversion-heavy ecommerce build: hierarchy, proof, speed, and maintainability.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2" style={{ borderRadius: 8 }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-[#0f1117] p-6"
              >
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-white/46">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="panel-soft p-5"
                >
                  <Icon size={22} className="text-teal-300" />
                  <h3 className="mt-5 text-lg font-black text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/52">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel p-6"
          >
            <div className="mb-5 flex gap-1 text-amber-300">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-xl font-semibold leading-8 text-white">
              "PixelForge turned a messy site into a clean sales tool. The new layout made our offer obvious and the CMS is finally easy to manage."
            </p>
            <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="font-bold text-white">Sarah Mitchell</p>
                <p className="text-sm text-white/42">CEO, LuxeWear</p>
              </div>
              <TrendingUp size={22} className="text-teal-300" />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
