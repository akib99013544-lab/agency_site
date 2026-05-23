"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceData } from "@/lib/services";

export default function ServiceFeatures({ service }: { service: ServiceData }) {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">What we deliver</p>
            <h2 className="section-title mt-4">
              Built with purpose, not just pixels.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-copy max-w-xl lg:justify-self-end"
          >
            Every feature in our {service.title} service is chosen because it moves the needle — not because it looks good on a spec sheet.
          </motion.p>
        </div>

        <div
          className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3"
          style={{ borderRadius: 8 }}
        >
          {service.features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group bg-[#0f1117] p-6 transition hover:bg-[#141923]"
            >
              {/* Accent dot */}
              <div
                className="mb-8 h-2 w-2 rounded-full"
                style={{ background: service.accent }}
              />
              <h3 className="text-xl font-black text-white">{feature.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-white/52">
                {feature.description}
              </p>
              <div
                className="mt-5 flex items-center gap-1.5 text-xs font-bold opacity-0 transition group-hover:opacity-100"
                style={{ color: service.accent }}
              >
                Included <ArrowRight size={12} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
