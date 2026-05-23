"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Projects completed", sub: "Across 12+ industries" },
  { value: "98%", label: "Client satisfaction", sub: "Based on post-launch surveys" },
  { value: "2-14d", label: "Typical launch window", sub: "From brief to live site" },
  { value: "5+", label: "Years in practice", sub: "Since 2019" },
];

export default function AboutStats() {
  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <div
          className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderRadius: 8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="bg-[#0f1117] p-7"
            >
              <p className="text-5xl font-black text-white">{stat.value}</p>
              <p className="mt-2 font-bold text-white/70">{stat.label}</p>
              <p className="mt-1 text-sm text-white/36">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
