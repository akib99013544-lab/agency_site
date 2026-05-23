"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What happens after I send a message?",
    a: "We review your project details and respond within 2 business hours with a short summary of our understanding, any clarifying questions, and suggested next steps — usually a 30-minute discovery call.",
  },
  {
    q: "Is the strategy call really free?",
    a: "Yes. The 30-minute discovery call is free with no obligation. We use it to understand your project, answer your questions, and determine if we are a good fit. If we are not the right team for your project, we will say so.",
  },
  {
    q: "Do you work with clients outside the USA?",
    a: "We primarily serve US-based businesses, but we work with international clients when the project is a strong fit. All communication is in English.",
  },
  {
    q: "What information should I have ready before reaching out?",
    a: "A rough idea of what you need (platform, goals, timeline), your current website URL if you have one, and a sense of your budget range. You do not need a full brief — we will help you build one.",
  },
  {
    q: "How do you handle pricing?",
    a: "We provide fixed-scope quotes after the discovery call. You will know the exact cost before any work begins. We do not bill hourly for project work.",
  },
  {
    q: "Can I see examples of your work first?",
    a: "Yes. Visit our portfolio page to see case studies with project details, platform breakdowns, and outcome metrics.",
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title mt-4">Before you reach out.</h2>
            <p className="section-copy mt-5 max-w-sm">
              Quick answers to the questions we hear most before a first conversation.
            </p>
            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-teal-300/40 hover:bg-white/7"
            >
              See our work
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="overflow-hidden border border-white/10 bg-[#0f1117] transition hover:border-white/16"
                  style={{ borderRadius: 8 }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-white">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 transition-transform duration-300 text-white/40"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? "#14b8a6" : undefined,
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      >
                        <div className="border-t border-white/8 px-5 pb-5 pt-4">
                          <p className="text-sm leading-7 text-white/58">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
