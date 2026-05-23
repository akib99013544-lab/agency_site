"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const channels = [
  {
    icon: Calendar,
    title: "Book a strategy call",
    text: "Free 30-minute project fit session. No commitment required.",
    action: "Schedule now →",
    href: "#",
    color: "#14b8a6",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Fast answers before you commit to anything.",
    action: "Message us →",
    href: "https://wa.me/8801842638473",
    color: "#22c55e",
  },
  {
    icon: Mail,
    title: "Email",
    text: "akibbhuiyan3544@gmail.com",
    action: "Send email →",
    href: "mailto:akibbhuiyan3544@gmail.com",
    color: "#3b82f6",
  },
];

const details = [
  { icon: Phone, label: "+88 01842638473" },
  { icon: Mail, label: "akibbhuiyan3544@gmail.com" },
  { icon: MapPin, label: "USA" },
  { icon: Clock, label: "24/7 — Always available" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {/* Contact channels */}
      {channels.map((channel, index) => {
        const Icon = channel.icon;
        return (
          <motion.a
            key={channel.title}
            href={channel.href}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group flex items-start gap-4 rounded-lg border border-white/10 bg-[#0f1117] p-5 transition hover:border-white/20 hover:bg-[#141923]"
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition group-hover:scale-105"
              style={{ background: `${channel.color}18`, color: channel.color }}
            >
              <Icon size={20} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-white">{channel.title}</p>
              <p className="mt-1 text-sm text-white/46">{channel.text}</p>
              <span
                className="mt-2 inline-block text-sm font-bold transition group-hover:translate-x-0.5"
                style={{ color: channel.color }}
              >
                {channel.action}
              </span>
            </div>
          </motion.a>
        );
      })}

      {/* Contact details */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.28 }}
        className="rounded-lg border border-white/10 bg-[#0f1117] p-5"
      >
        <p className="mb-4 text-sm font-black uppercase tracking-[0.12em] text-white/38">
          Contact details
        </p>
        <div className="space-y-3">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 text-sm text-white/52">
                <Icon size={15} className="shrink-0 text-teal-300" />
                {item.label}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Response time */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.34 }}
        className="rounded-lg border border-teal-300/20 bg-teal-300/[0.06] p-5"
      >
        <div className="flex items-start gap-3">
          <Clock size={18} className="mt-0.5 shrink-0 text-teal-300" />
          <div>
            <p className="font-bold text-white">Typical response time</p>
            <p className="mt-1 text-sm text-white/52">
              We respond to all project inquiries within <span className="font-bold text-teal-300">2 business hours</span> — available <span className="font-bold text-teal-300">24/7</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
