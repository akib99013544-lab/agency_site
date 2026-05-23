"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";

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
              Tell us what you are building. We will respond with next steps,
              timeline expectations, and a practical path for your project.
            </p>

            <div className="mt-9 grid gap-3">
              {[
                { icon: Calendar, label: "Book a strategy call", text: "Free 30-minute project fit session", highlight: false, href: "" },
                { icon: MessageCircle, label: "Message the team", text: "Fast answers before you commit", highlight: false, href: "" },
                { icon: Mail, label: "Email us", text: "akibbhuiyan3544@gmail.com", highlight: true, href: "mailto:akibbhuiyan3544@gmail.com" },
                { icon: MessageCircle, label: "WhatsApp", text: "+88 01842638473", highlight: true, href: "https://wa.me/8801842638473" },
              ].map((item) => {
                const Icon = item.icon;
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 ${
                      item.highlight
                        ? "border-teal-300/35 bg-teal-300/[0.07] hover:border-teal-300/65 hover:bg-teal-300/[0.12] cursor-pointer"
                        : "border-white/10 bg-white/[0.035]"
                    }`}
                  >
                    <Icon size={20} className="shrink-0 text-teal-300" />
                    <div>
                      <p className={`font-bold ${item.highlight ? "text-teal-300" : "text-white"}`}>
                        {item.label}
                      </p>
                      <p className={`mt-0.5 ${item.highlight ? "text-base font-black text-white" : "text-sm text-white/45"}`}>
                        {item.text}
                      </p>
                    </div>
                  </Tag>
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

/* ─── Contact Form ─────────────────────────────────────── */
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const [platform, setPlatform] = useState("");
  const [budget, setBudget] = useState("");
  const [customBudget, setCustomBudget] = useState("");

  const finalBudget = budget === "Custom budget..." ? customBudget : budget;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const message = fd.get("message") as string;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      platform ? `Platform: ${platform}` : "",
      finalBudget ? `Budget: ${finalBudget}` : "",
      "",
      "Project Details:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(
      `New inquiry from ${name} — ${platform || "General"}`
    );
    const bodyEnc = encodeURIComponent(body);

    window.location.href = `mailto:akibbhuiyan3544@gmail.com?subject=${subject}&body=${bodyEnc}`;

    formRef.current?.reset();
    setPlatform("");
    setBudget("");
    setCustomBudget("");
    setStatus("success");
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {status === "success" && (
        <div className="flex items-center gap-3 rounded-lg border border-teal-300/25 bg-teal-300/[0.08] p-4 text-sm text-teal-300">
          <CheckCircle2 size={18} className="shrink-0" />
          Your email client is opening with a pre-filled message. Just hit Send!
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name">
          <input
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="form-field"
          />
        </Field>
        <Field label="Email address">
          <input
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className="form-field"
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Service needed">
          <CustomSelect
            placeholder="Select service"
            options={[
              "Shopify",
              "WordPress",
              "Wix",
              "Squarespace",
              "Custom Code",
              "Full Stack Development",
              "SEO & Growth",
              "Website Maintenance",
              "Other",
            ]}
            value={platform}
            onChange={setPlatform}
            required
          />
        </Field>
        <Field label="Budget range">
          <CustomSelect
            placeholder="Select budget"
            options={[
              "$1,000 – $3,000",
              "$3,000 – $7,000",
              "$7,000 – $15,000",
              "$15,000+",
              "Custom budget...",
            ]}
            value={budget}
            onChange={setBudget}
          />
        </Field>
      </div>

      {budget === "Custom budget..." && (
        <Field label="Enter your budget">
          <input
            type="text"
            required
            placeholder="e.g. $500, $2,500, negotiable..."
            value={customBudget}
            onChange={(e) => setCustomBudget(e.target.value)}
            className="form-field"
          />
        </Field>
      )}

      <Field label="Project details">
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your goals, timeline, and current website..."
          className="form-field resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200 disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Opening email…
          </>
        ) : (
          <>
            Send message <ArrowRight size={17} />
          </>
        )}
      </button>
    </form>
  );
}

/* ─── Field wrapper ────────────────────────────────────── */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white/58">{label}</span>
      {children}
    </label>
  );
}

/* ─── Custom Select ────────────────────────────────────── */
function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
  required = false,
}: {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hidden input for native form validation */}
      <input
        tabIndex={-1}
        aria-hidden="true"
        required={required}
        value={value}
        onChange={() => undefined}
        className="pointer-events-none absolute h-px w-px opacity-0"
      />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
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
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`block w-full px-4 py-3 text-left text-sm font-semibold transition ${
                option === value
                  ? "bg-teal-300 text-[#07100f]"
                  : "text-white/78 hover:bg-white/8 hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
