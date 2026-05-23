"use client";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, MessageSquare, Shield, Timer, Users } from "lucide-react";

const principles = [
  {
    icon: FileText,
    title: "Scope before design",
    text: "We define exactly what is being built before a single pixel is designed. This prevents scope creep and keeps timelines honest.",
  },
  {
    icon: MessageSquare,
    title: "One point of contact",
    text: "You work directly with the person doing the work — no account managers, no relay chains, no lost context.",
  },
  {
    icon: Timer,
    title: "Decisions move fast",
    text: "We present clear options with a recommendation. You decide. We build. No endless revision loops.",
  },
  {
    icon: Shield,
    title: "No surprise invoices",
    text: "Fixed-scope pricing means you know the cost before we start. Changes outside scope are quoted separately, always.",
  },
  {
    icon: Users,
    title: "Built for your team",
    text: "Every CMS is set up so your team can edit content, add pages, and manage campaigns without a developer.",
  },
  {
    icon: CheckCircle2,
    title: "QA is not optional",
    text: "Every project goes through a structured QA checklist — responsive, cross-browser, performance, and content — before launch.",
  },
];

export default function ProcessPrinciples() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">How we operate</p>
            <h2 className="section-title mt-4">The principles behind the process.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-copy max-w-xl lg:justify-self-end"
          >
            The process is only as good as the habits behind it. These are the operating principles that keep every project on track.
          </motion.p>
        </div>

        <div
          className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3"
          style={{ borderRadius: 8 }}
        >
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group bg-[#0f1117] p-6 transition hover:bg-[#141923]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.055] text-teal-300 transition group-hover:bg-teal-300/10">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/52">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
