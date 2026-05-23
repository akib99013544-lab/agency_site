"use client";
import { motion } from "framer-motion";

const team = [
  {
    initials: "AR",
    name: "Alex Rivera",
    role: "Creative Director",
    bio: "10 years designing digital products for SaaS, ecommerce, and service businesses. Leads visual direction and UX strategy on every project.",
    color: "#14b8a6",
    skills: ["Visual design", "UX strategy", "Brand systems"],
  },
  {
    initials: "JK",
    name: "Jordan Kim",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in CMS platforms, performance optimization, and clean frontend architecture.",
    color: "#3b82f6",
    skills: ["WordPress", "Shopify", "Performance"],
  },
  {
    initials: "ST",
    name: "Sam Torres",
    role: "UX Strategist",
    bio: "Conversion-focused strategist who maps content hierarchy, user flows, and messaging architecture before design begins.",
    color: "#f59e0b",
    skills: ["Conversion strategy", "Wireframing", "Content architecture"],
  },
  {
    initials: "CM",
    name: "Casey Morgan",
    role: "SEO & Analytics",
    bio: "Technical SEO specialist handling metadata, schema, analytics configuration, and post-launch performance tracking.",
    color: "#a78bfa",
    skills: ["Technical SEO", "GA4", "Schema markup"],
  },
];

export default function AboutTeam() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">The team</p>
            <h2 className="section-title mt-4">Small team, senior work.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-copy max-w-xl lg:justify-self-end"
          >
            We keep the team small intentionally. Every project is handled by the same four people — no handoffs to junior staff, no outsourcing.
          </motion.p>
        </div>

        <div
          className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2"
          style={{ borderRadius: 8 }}
        >
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-[#0f1117] p-7 transition hover:bg-[#141923]"
            >
              <div className="flex items-start gap-5">
                {/* Avatar */}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-black text-white transition group-hover:scale-105"
                  style={{ background: `${member.color}28` }}
                >
                  {member.initials}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-black text-white">{member.name}</h3>
                    <span
                      className="rounded px-2.5 py-1 text-xs font-bold"
                      style={{ background: `${member.color}18`, color: member.color }}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/52">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Hiring note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] p-5"
        >
          <p className="text-sm leading-6 text-white/52">
            <span className="font-bold text-white">Occasionally hiring:</span> We bring in trusted specialists for specific project needs — copywriters, motion designers, and backend engineers. If you are interested in collaborating, reach out at{" "}
            <a href="mailto:akibbhuiyan3544@gmail.com" className="text-teal-300 hover:underline">
              akibbhuiyan3544@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
