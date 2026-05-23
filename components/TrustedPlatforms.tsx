"use client";
import { motion } from "framer-motion";

const platforms = [
  "Shopify",
  "WordPress",
  "Wix",
  "Squarespace",
  "Custom Code",
  "SEO",
  "Website Maintenance",
  "Webflow",
];

export default function TrustedPlatforms() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-8">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-[220px_1fr]"
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/42">
            Platforms we build on
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-8" style={{ borderRadius: 8 }}>
            {platforms.map((platform) => (
              <div key={platform} className="bg-[#0f1117]/88 px-3 py-4 text-center text-sm font-bold text-white/68">
                {platform}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
