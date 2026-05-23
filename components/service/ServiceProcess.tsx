"use client";
import { motion } from "framer-motion";
import type { ServiceData } from "@/lib/services";

export default function ServiceProcess({ service }: { service: ServiceData }) {
  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <div className="max-w-3xl">
          <p className="section-kicker">How it works</p>
          <h2 className="section-title mt-4">
            A clear path from brief to launch.
          </h2>
          <p className="section-copy mt-5">
            No ambiguity, no scope creep. Every {service.title} project follows the same disciplined process so you always know where things stand.
          </p>
        </div>

        <div
          className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5"
          style={{ borderRadius: 8 }}
        >
          {service.process.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#0f1117] p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-black text-white/22">{step.step}</span>
                <span
                  className="rounded px-2 py-1 text-xs font-bold"
                  style={{ background: `${service.accent}18`, color: service.accent }}
                >
                  Step {index + 1}
                </span>
              </div>

              {/* Accent line */}
              <div
                className="mt-8 mb-5 h-px w-8"
                style={{ background: service.accent }}
              />

              <h3 className="text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/52">{step.text}</p>
            </motion.article>
          ))}
        </div>

        {/* Timeline connector — desktop only */}
        <div className="mt-6 hidden items-center justify-between px-6 lg:flex">
          {service.process.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-center">
              <div
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: service.accent }}
              />
              {index < service.process.length - 1 && (
                <div
                  className="h-px flex-1"
                  style={{ background: `${service.accent}30` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
