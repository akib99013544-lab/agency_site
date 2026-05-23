"use client";
import { motion } from "framer-motion";

const story = [
  "MODULUS SOFTWARE started as a response to a common problem: businesses with strong products and services being held back by websites that didn't reflect their quality. Generic templates, unclear messaging, and CMS systems nobody could actually use.",
  "We built the studio around a different approach — start with strategy, design with purpose, build with craft, and hand off something your team can actually manage. No bloated process, no junior handoffs, no mystery around what is happening next.",
  "Today we work with businesses across the USA on Shopify stores, WordPress builds, Wix and Squarespace sites, landing pages, and full redesigns. The work sits between strategy and production: sharper messaging, better hierarchy, reliable implementation.",
];

export default function AboutMission() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Our story</p>
            <h2 className="section-title mt-4">Built to fix a real problem.</h2>
          </motion.div>

          <div className="space-y-5">
            {story.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="text-base leading-8 text-white/58"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Operating principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 panel p-8 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-300">Operating principle</p>
              <p className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl lg:text-4xl">
                &ldquo;A website should be simple to understand, fast to use, and easy to improve after launch.&rdquo;
              </p>
            </div>
            <div className="shrink-0">
              <div
                className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10"
                style={{ borderRadius: 8, minWidth: 220 }}
              >
                {[
                  { v: "12+", l: "Industries" },
                  { v: "3x", l: "Avg. growth" },
                  { v: "USA", l: "Focused" },
                  { v: "100%", l: "Custom code" },
                ].map((item) => (
                  <div key={item.l} className="bg-[#10141d] p-4 text-center">
                    <p className="text-2xl font-black text-white">{item.v}</p>
                    <p className="mt-1 text-xs font-semibold text-white/38">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
