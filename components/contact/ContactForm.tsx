"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // controlled select values
  const [platform, setPlatform] = useState("");
  const [budget, setBudget] = useState("");
  const [customBudget, setCustomBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [source, setSource] = useState("");

  const finalBudget = budget === "Custom budget..." ? customBudget : budget;

  const resetForm = () => {
    formRef.current?.reset();
    setPlatform("");
    setBudget("");
    setCustomBudget("");
    setTimeline("");
    setSource("");
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const name    = fd.get("name") as string;
    const email   = fd.get("email") as string;
    const company = fd.get("company") as string;
    const phone   = fd.get("phone") as string;
    const message = fd.get("message") as string;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company  ? `Company: ${company}`   : "",
      phone    ? `Phone: ${phone}`       : "",
      platform ? `Platform: ${platform}` : "",
      budget   ? `Budget: ${finalBudget}` : "",
      timeline ? `Timeline: ${timeline}` : "",
      source   ? `Source: ${source}`     : "",
      "",
      "Project Details:",
      message,
    ].filter(Boolean).join("\n");

    const subject = encodeURIComponent(`New inquiry from ${name} — ${platform || "General"}`);
    const bodyEnc = encodeURIComponent(body);

    window.location.href = `mailto:akibbhuiyan3544@gmail.com?subject=${subject}&body=${bodyEnc}`;

    // Reset form
    formRef.current?.reset();
    setPlatform("");
    setBudget("");
    setCustomBudget("");
    setTimeline("");
    setSource("");
    setStatus("success");
  };

  return (
    <div className="panel p-6 md:p-8">
      <div className="mb-7">
        <p className="section-kicker">Send a message</p>
        <h2 className="mt-3 text-2xl font-black text-white">Tell us about your project.</h2>
        <p className="mt-2 text-sm text-white/46">We respond within 2 business hours.</p>
      </div>

      {/* Success state */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="mb-6 flex items-start gap-4 rounded-xl border border-teal-300/25 bg-teal-300/8 p-5"
          >
            <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-teal-300" />
            <div>
              <p className="font-bold text-white">Your email client is opening!</p>
              <p className="mt-1 text-sm text-white/52">
                A pre-filled email to <span className="text-teal-300">akibbhuiyan3544@gmail.com</span> is ready to send. Just hit Send in your email app.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name">
            <input name="name" type="text" required placeholder="John Smith" className="form-field" />
          </Field>
          <Field label="Email address">
            <input name="email" type="email" required placeholder="john@company.com" className="form-field" />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Company / website">
            <input name="company" type="text" placeholder="acme.com" className="form-field" />
          </Field>
          <Field label="Phone (optional)">
            <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className="form-field" />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Platform needed">
            <CustomSelect
              placeholder="Select platform"
              options={["Shopify", "WordPress", "Wix", "Squarespace", "Landing page", "Not sure yet"]}
              value={platform}
              onChange={setPlatform}
              required
            />
          </Field>
          <Field label="Budget range">
            <CustomSelect
              placeholder="Select budget"
              options={["$1,000 – $3,000", "$3,000 – $7,000", "$7,000 – $15,000", "$15,000+", "Custom budget..."]}
              value={budget}
              onChange={setBudget}
            />
          </Field>
        </div>

        {/* Custom budget input */}
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

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Timeline">
            <CustomSelect
              placeholder="When do you need this?"
              options={["ASAP", "Within 1 month", "1–3 months", "Just exploring"]}
              value={timeline}
              onChange={setTimeline}
            />
          </Field>
          <Field label="How did you find us?">
            <CustomSelect
              placeholder="Select source"
              options={["Google search", "Referral", "Social media", "Other"]}
              value={source}
              onChange={setSource}
            />
          </Field>
        </div>

        <Field label="Project details">
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about your goals, current site, and what you want to achieve..."
            className="form-field resize-none"
          />
        </Field>

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-extrabold text-[#08090d] transition hover:bg-teal-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight size={17} />
            </>
          )}
        </button>

        {status === "success" && (
          <button
            type="button"
            onClick={resetForm}
            className="w-full rounded-lg border border-white/12 py-3 text-sm font-bold text-white/60 transition hover:text-white hover:bg-white/5"
          >
            Send another message
          </button>
        )}

        <p className="text-center text-xs text-white/28">
          No spam. No sales calls unless you ask for one. Just a real reply.
        </p>
      </form>
    </div>
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
      {/* Hidden native input for form validation */}
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
        className={`form-field flex items-center justify-between text-left ${value ? "text-white" : "text-white/42"}`}
        aria-expanded={open}
      >
        <span>{value || placeholder}</span>
        <ChevronDown size={17} className={`text-white/70 transition-transform ${open ? "rotate-180" : ""}`} />
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
              onClick={() => { onChange(option); setOpen(false); }}
              className={`block w-full px-4 py-3 text-left text-sm font-semibold transition ${
                option === value ? "bg-teal-300 text-[#07100f]" : "text-white/78 hover:bg-white/8 hover:text-white"
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
