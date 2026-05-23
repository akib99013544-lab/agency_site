"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ServiceData } from "@/lib/services";

export default function ServiceFaqs({ service }: { service: ServiceData }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title mt-4">
              Common questions about {service.title}.
            </h2>
            <p className="section-copy mt-5 max-w-sm">
              Straight answers to the questions we hear most before a project starts.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-2">
            {service.faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
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
                      className="shrink-0 text-white/40 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? service.accent : undefined,
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
