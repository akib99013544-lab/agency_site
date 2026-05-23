"use client";
import { motion } from "framer-motion";
import { Code2, Map, Palette, Phone, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, title: "Discovery", text: "Goals, audience, offer, content gaps, and must-have CMS needs.", time: "Day 1" },
  { icon: Map, title: "Structure", text: "Sitemap, section order, conversion paths, and technical launch plan.", time: "Day 2-3" },
  { icon: Palette, title: "Design", text: "Responsive page layouts with brand polish and reusable design patterns.", time: "Day 4-7" },
  { icon: Code2, title: "Build", text: "CMS setup, frontend implementation, integrations, tracking, and QA.", time: "Day 8-12" },
  { icon: Rocket, title: "Launch", text: "Deployment, redirects, performance pass, training, and support handoff.", time: "Day 13-14" },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <div className="max-w-3xl">
          <p className="section-kicker">Process</p>
          <h2 className="section-title">A clear path from idea to launch.</h2>
          <p className="section-copy mt-6">
            A professional layout is mostly decision-making. We remove ambiguity early so design and development move with purpose.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5" style={{ borderRadius: 8 }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="bg-[#0f1117] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-black text-white/26">0{index + 1}</span>
                  <span className="rounded bg-white/7 px-2.5 py-1 text-xs font-bold text-teal-200">{step.time}</span>
                </div>
                <Icon size={24} className="mt-10 text-teal-300" />
                <h3 className="mt-5 text-xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/52">{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
