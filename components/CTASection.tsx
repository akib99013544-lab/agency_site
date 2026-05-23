"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown, Mail, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="section-shell border-y border-white/10 bg-white/[0.025]">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Ready for a cleaner, stronger site?</h2>
            <p className="section-copy mt-6">
              Tell us what you are building. We will respond with next steps, timeline expectations, and a practical path for your CMS.
            </p>

            <div className="mt-9 grid gap-3">
              {[
                { icon: Calendar, label: "Book a strategy call", text: "Free 30-minute project fit session" },
                { icon: MessageCircle, label: "Message the team", text: "Fast answers before you commit" },
                { icon: Mail, label: "Email", text: "hello@pixelforgestudio.com" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                    <Icon size={20} className="text-teal-300" />
                    <div>
                      <p className="font-bold text-white">{item.label}</p>
                      <p className="text-sm text-white/45">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel p-5 md:p-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("Message sent. We will be in touch within 2 business hours.");
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name">
          <input type="text" required placeholder="John Smith" className="form-field" />
        </Field>
        <Field label="Email address">
          <input type="email" required placeholder="john@company.com" className="form-field" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Platform">
          <CustomSelect
            name="platform"
            placeholder="Select platform"
            options={["Shopify", "WordPress", "Wix", "Squarespace", "Other"]}
            required
          />
        </Field>
        <Field label="Budget range">
          <CustomSelect
            name="budget"
            placeholder="Select budget"
            options={["$1,000 - $3,000", "$3,000 - $7,000", "$7,000 - $15,000", "$15,000+"]}
          />
        </Field>
      </div>

      <Field label="Project details">
        <textarea rows={5} placeholder="Tell us about your goals, timeline, and current website..." className="form-field resize-none" />
      </Field>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200"
      >
        Send message
        <ArrowRight size={17} />
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white/58">{label}</span>
      {children}
    </label>
  );
}

function CustomSelect({
  name,
  placeholder,
  options,
  required = false,
}: {
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        tabIndex={-1}
        aria-hidden="true"
        required={required}
        name={name}
        value={value}
        onChange={() => undefined}
        className="pointer-events-none absolute h-px w-px opacity-0"
      />
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`form-field flex items-center justify-between text-left ${
          value ? "text-white" : "text-white/42"
        }`}
        aria-expanded={open}
      >
        <span>{value || placeholder}</span>
        <ChevronDown
          size={17}
          className={`text-white/70 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-30 overflow-hidden border border-white/12 bg-[#0d1119] shadow-2xl"
          style={{ borderRadius: 8 }}
        >
          {options.map((option) => {
            const selected = option === value;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-3 text-left text-sm font-semibold transition ${
                  selected
                    ? "bg-teal-300 text-[#07100f]"
                    : "text-white/78 hover:bg-white/8 hover:text-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
