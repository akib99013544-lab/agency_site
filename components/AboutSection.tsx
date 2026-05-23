"use client";
import { motion } from "framer-motion";
import { Award, HeartHandshake, Lightbulb, Target } from "lucide-react";

const values = [
  { icon: Target, title: "Conversion clarity", text: "Every section earns its place and points visitors toward a useful action." },
  { icon: HeartHandshake, title: "Straight communication", text: "Clear scope, clear schedule, and no mystery around what is happening next." },
  { icon: Lightbulb, title: "Modern craft", text: "Current design taste with practical CMS architecture and performance habits." },
  { icon: Award, title: "Launch quality", text: "Responsive QA, content polish, technical checks, and handoff support are part of the work." },
];

const team = [
  ["Alex Rivera", "Creative Director"],
  ["Jordan Kim", "Lead Developer"],
  ["Sam Torres", "UX Strategist"],
  ["Casey Morgan", "SEO Specialist"],
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Senior taste, practical execution.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/58">
            <p>
              PixelForge is a focused CMS studio for businesses that need a polished website without a bloated process. We design the page architecture, build the CMS, clean up the details, and help your team launch with confidence.
            </p>
            <p>
              Our work sits between strategy and production: sharper messaging, better hierarchy, reliable implementation, and a handoff your team can use.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.82fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel p-7"
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-300">Operating principle</p>
            <p className="mt-5 text-2xl font-black leading-tight text-white md:text-3xl">
              A website should be simple to understand, fast to use, and easy to improve after launch.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10" style={{ borderRadius: 8 }}>
              <div className="bg-[#10141d] p-4">
                <p className="text-3xl font-black text-white">5+</p>
                <p className="text-sm text-white/45">Years experience</p>
              </div>
              <div className="bg-[#10141d] p-4">
                <p className="text-3xl font-black text-white">12+</p>
                <p className="text-sm text-white/45">Industries served</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2" style={{ borderRadius: 8 }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="bg-[#0f1117] p-6"
                >
                  <Icon size={22} className="text-teal-300" />
                  <h3 className="mt-5 text-lg font-black text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/52">{value.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-black text-white">Project team</h3>
          <div className="mt-5 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4" style={{ borderRadius: 8 }}>
            {team.map(([name, role]) => (
              <div key={name} className="bg-[#0f1117] p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white/7 text-sm font-black text-teal-200">
                  {name.split(" ").map((part) => part[0]).join("")}
                </div>
                <p className="font-bold text-white">{name}</p>
                <p className="mt-1 text-sm text-white/42">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
