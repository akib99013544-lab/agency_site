"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What do you need from me before the project starts?",
    a: "A completed project brief, access to your current site (if applicable), brand assets (logo, fonts, colors), and any content you want to carry over. We will send a checklist after the discovery call.",
  },
  {
    q: "How many revision rounds are included?",
    a: "One structured revision round is included in the design phase. Additional revisions are scoped and quoted separately. Most clients find one round is enough because we align on direction early.",
  },
  {
    q: "What happens if the project runs over 14 days?",
    a: "Delays almost always come from waiting on client feedback or content. We set clear response windows at the start. If we miss a deadline on our end, we will communicate proactively and adjust the timeline.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer monthly retainer support for content updates, performance monitoring, and CMS changes. Details are discussed at handoff.",
  },
  {
    q: "Can I change the scope mid-project?",
    a: "Scope changes are handled with a simple change order — a short document that defines the addition, cost, and timeline impact. Nothing is added without your approval.",
  },
  {
    q: "What if I am not happy with the design?",
    a: "We align on direction before full design begins using wireframes and a style reference. If the final design misses the mark after the revision round, we will work with you to resolve it — we do not ship work we are not both proud of.",
  },
];

export default function ProcessFaq() {
  const [open, setOpen] = useState<number | null>(0);

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
            <h2 className="section-title mt-4">Process questions, answered.</h2>
            <p className="section-copy mt-5 max-w-sm">
              The most common questions we hear before a project kicks off.
            </p>
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
