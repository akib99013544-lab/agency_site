"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle2, HeartHandshake, Lightbulb, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Conversion clarity",
    text: "Every section earns its place and points visitors toward a useful action. We design for outcomes, not aesthetics alone.",
    color: "#14b8a6",
  },
  {
    icon: HeartHandshake,
    title: "Straight communication",
    text: "Clear scope, clear schedule, and no mystery around what is happening next. You always know where the project stands.",
    color: "#3b82f6",
  },
  {
    icon: Lightbulb,
    title: "Modern craft",
    text: "Current design taste with practical CMS architecture and performance habits. We stay current so you don't have to.",
    color: "#f59e0b",
  },
  {
    icon: Award,
    title: "Launch quality",
    text: "Responsive QA, content polish, technical checks, and handoff support are part of the work — not extras.",
    color: "#fb7185",
  },
  {
    icon: Zap,
    title: "Speed without shortcuts",
    text: "14-day launches are possible because we have a disciplined process — not because we cut corners on quality.",
    color: "#a78bfa",
  },
  {
    icon: CheckCircle2,
    title: "Ownership after launch",
    text: "We build CMS systems your team can actually use. You should never need a developer to update your own website.",
    color: "#22c55e",
  },
];

export default function AboutValues() {
  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">What we stand for</p>
            <h2 className="section-title mt-4">The values behind the work.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-copy max-w-xl lg:justify-self-end"
          >
            These are not aspirational statements. They are the habits and decisions that show up in every project we take on.
          </motion.p>
        </div>

        <div
          className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3"
          style={{ borderRadius: 8 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group bg-[#0f1117] p-6 transition hover:bg-[#141923]"
              >
                <div
                  className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl transition group-hover:scale-105"
                  style={{ background: `${value.color}18`, color: value.color }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-black text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/52">{value.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
