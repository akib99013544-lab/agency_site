"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Clock, MessageCircle, Zap } from "lucide-react";

const signals = [
  { icon: Clock, text: "Response within 2 business hours" },
  { icon: MessageCircle, text: "Free 30-min strategy call available" },
  { icon: Zap, text: "Most projects launch in 14 days" },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-32 h-48 w-px bg-gradient-to-b from-transparent via-teal-300/40 to-transparent"
        animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-inner relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-sm text-white/38" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <span className="text-teal-300">Contact</span>
        </nav>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-200"
          >
            Get in touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="mt-5 text-[clamp(2.8rem,7vw,6rem)] font-black leading-[0.92] tracking-tight text-white"
          >
            Ready for a cleaner, stronger site?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/58"
          >
            Tell us what you are building. We will respond with next steps, timeline expectations, and a practical path for your CMS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {signals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.text}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5"
                >
                  <Icon size={15} className="text-teal-300" />
                  <span className="text-sm font-semibold text-white/64">{signal.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
