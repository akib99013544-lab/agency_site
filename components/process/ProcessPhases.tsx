"use client";
import { motion } from "framer-motion";
import { Code2, Map, Palette, Phone, Rocket } from "lucide-react";

const phases = [
  {
    step: "01",
    icon: Phone,
    title: "Discovery",
    time: "Day 1",
    color: "#14b8a6",
    summary: "Goals, audience, offer, content gaps, and must-have CMS needs.",
    details: [
      "30-minute strategy call to understand your business and goals",
      "Audit of your current site — structure, messaging, and conversion gaps",
      "CMS platform recommendation based on your team's workflow",
      "Scope definition, timeline, and project brief sign-off",
    ],
    output: "Project brief + scope document",
  },
  {
    step: "02",
    icon: Map,
    title: "Structure",
    time: "Day 2–3",
    color: "#3b82f6",
    summary: "Sitemap, section order, conversion paths, and technical launch plan.",
    details: [
      "Full sitemap with page hierarchy and content priorities",
      "Section-by-section wireframe for key pages",
      "Conversion path mapping — where visitors go and what they do",
      "Technical requirements: integrations, forms, tracking, redirects",
    ],
    output: "Sitemap + wireframe deck",
  },
  {
    step: "03",
    icon: Palette,
    title: "Design",
    time: "Day 4–7",
    color: "#f59e0b",
    summary: "Responsive page layouts with brand polish and reusable design patterns.",
    details: [
      "High-fidelity Figma mockups for all key page templates",
      "Desktop and mobile layouts for every section",
      "Typography system, color palette, and component library",
      "One round of design revisions included",
    ],
    output: "Figma design file + component system",
  },
  {
    step: "04",
    icon: Code2,
    title: "Build",
    time: "Day 8–12",
    color: "#fb7185",
    summary: "CMS setup, frontend implementation, integrations, tracking, and QA.",
    details: [
      "CMS platform setup and theme/template implementation",
      "Content migration and population",
      "Third-party integrations: CRM, email, analytics, booking",
      "Cross-browser and cross-device QA testing",
    ],
    output: "Staging site ready for review",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch",
    time: "Day 13–14",
    color: "#a78bfa",
    summary: "Deployment, redirects, performance pass, training, and support handoff.",
    details: [
      "Domain connection and DNS configuration",
      "301 redirect mapping for SEO preservation",
      "Performance pass: images, scripts, Core Web Vitals",
      "Team training session and CMS documentation handoff",
    ],
    output: "Live site + handoff documentation",
  },
];

export default function ProcessPhases() {
  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.02]">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">The five phases</p>
            <h2 className="section-title mt-4">Every step has a clear output.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-copy max-w-xl lg:justify-self-end"
          >
            Each phase ends with a concrete deliverable so you always know exactly where the project stands and what comes next.
          </motion.p>
        </div>

        <div className="mt-14 space-y-3">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group overflow-hidden border border-white/10 bg-[#0f1117] transition hover:border-white/16 hover:bg-[#141923]"
                style={{ borderRadius: 8 }}
              >
                <div className="grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                  {/* Step + icon */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-white/14">{phase.step}</span>
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${phase.color}18`, color: phase.color }}
                    >
                      <Icon size={22} />
                    </span>
                  </div>

                  {/* Title + summary */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-black text-white">{phase.title}</h3>
                      <span
                        className="rounded px-2.5 py-1 text-xs font-bold"
                        style={{ background: `${phase.color}18`, color: phase.color }}
                      >
                        {phase.time}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-white/52">{phase.summary}</p>
                  </div>

                  {/* Output badge */}
                  <div className="hidden md:block">
                    <div className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-right">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/30">Output</p>
                      <p className="mt-1 text-sm font-bold text-white">{phase.output}</p>
                    </div>
                  </div>
                </div>

                {/* Expanded details */}
                <div className="border-t border-white/8 px-6 pb-6 pt-5">
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {phase.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-white/52">
                        <div
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: phase.color }}
                        />
                        {detail}
                      </div>
                    ))}
                  </div>
                  {/* Mobile output */}
                  <div className="mt-4 flex items-center gap-2 md:hidden">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/30">Output:</span>
                    <span className="text-sm font-bold text-white">{phase.output}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
