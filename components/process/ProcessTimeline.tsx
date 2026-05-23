"use client";
import { motion } from "framer-motion";

const days = [
  { day: "1", label: "Discovery call", color: "#14b8a6", phase: "Discovery" },
  { day: "2", label: "Sitemap draft", color: "#14b8a6", phase: "Structure" },
  { day: "3", label: "Wireframes", color: "#3b82f6", phase: "Structure" },
  { day: "4", label: "Design begins", color: "#f59e0b", phase: "Design" },
  { day: "5", label: "Desktop layouts", color: "#f59e0b", phase: "Design" },
  { day: "6", label: "Mobile layouts", color: "#f59e0b", phase: "Design" },
  { day: "7", label: "Design review", color: "#f59e0b", phase: "Design" },
  { day: "8", label: "CMS setup", color: "#fb7185", phase: "Build" },
  { day: "9", label: "Frontend build", color: "#fb7185", phase: "Build" },
  { day: "10", label: "Integrations", color: "#fb7185", phase: "Build" },
  { day: "11", label: "Content load", color: "#fb7185", phase: "Build" },
  { day: "12", label: "QA testing", color: "#fb7185", phase: "Build" },
  { day: "13", label: "Performance", color: "#a78bfa", phase: "Launch" },
  { day: "14", label: "Go live", color: "#a78bfa", phase: "Launch" },
];

const phases = [
  { label: "Discovery", color: "#14b8a6", span: 1 },
  { label: "Structure", color: "#3b82f6", span: 2 },
  { label: "Design", color: "#f59e0b", span: 4 },
  { label: "Build", color: "#fb7185", span: 5 },
  { label: "Launch", color: "#a78bfa", span: 2 },
];

export default function ProcessTimeline() {
  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <div className="max-w-3xl">
          <p className="section-kicker">14-day view</p>
          <h2 className="section-title mt-4">Day-by-day breakdown.</h2>
          <p className="section-copy mt-5">
            This is what a typical 14-day project looks like. Complex builds may extend to 3–4 weeks, but the phase structure stays the same.
          </p>
        </div>

        {/* Phase bar */}
        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[640px]">
            {/* Phase labels */}
            <div className="mb-3 flex gap-1">
              {phases.map((phase) => (
                <div
                  key={phase.label}
                  className="flex items-center justify-center rounded py-1.5 text-xs font-black"
                  style={{
                    flex: phase.span,
                    background: `${phase.color}18`,
                    color: phase.color,
                  }}
                >
                  {phase.label}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-14 gap-1" style={{ gridTemplateColumns: "repeat(14, 1fr)" }}>
              {days.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0f1117] p-3 text-center transition hover:border-white/20 hover:bg-[#141923]"
                >
                  <div
                    className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black"
                    style={{ background: `${day.color}20`, color: day.color }}
                  >
                    {day.day}
                  </div>
                  <p className="text-[10px] font-bold leading-tight text-white/40 group-hover:text-white/70">
                    {day.label}
                  </p>
                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: day.color, opacity: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-5 flex flex-wrap gap-4">
              {phases.map((phase) => (
                <div key={phase.label} className="flex items-center gap-2 text-xs font-semibold text-white/40">
                  <div className="h-2 w-2 rounded-full" style={{ background: phase.color }} />
                  {phase.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <p className="text-sm leading-6 text-white/52">
            <span className="font-bold text-white">Note:</span> Timelines depend on how quickly feedback and content are provided. Projects with fast client response consistently launch in 10–12 days. We will set clear response windows at the start of every project.
          </p>
        </div>
      </div>
    </section>
  );
}
