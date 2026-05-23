"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Code2,
  Globe2,
  Layers3,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */
const metrics = [
  { label: "Avg. launch time", value: "2–14 days" },
  { label: "CMS builds shipped", value: "500+" },
  { label: "Client satisfaction", value: "98%" },
];

const stackItems = [
  { label: "Strategy",    icon: Layers3,  color: "#14b8a6", bars: [100, 82, 66, 48] },
  { label: "Design",      icon: Sparkles, color: "#f59e0b", bars: [100, 100, 74, 48] },
  { label: "Development", icon: Code2,    color: "#60a5fa", bars: [100, 100, 100, 48] },
];

const roadmapBars = [
  { label: "Discovery", pct: 82 },
  { label: "UX System",  pct: 66 },
  { label: "Frontend",   pct: 74 },
  { label: "Launch QA",  pct: 48 },
];

const platforms = [
  "Shopify", "WordPress", "Wix", "Squarespace",
  "Custom Code", "SEO", "Website Maintenance", "Webflow",
  "Shopify", "WordPress", "Wix", "Squarespace",
  "Custom Code", "SEO", "Website Maintenance", "Webflow",
];

const headlineLines = [
  "Professional",
  "consulting for",
  "your app &",
  "software.",
];

/* ─── Magnetic button ───────────────────────────────────── */
function MagneticBtn({ children, className, onClick }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.28;
    const dy = (e.clientY - cy) * 0.28;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)" }}
    >
      {children}
    </button>
  );
}

/* ─── Scroll-triggered progress bar ────────────────────── */
function AnimBar({ pct, color, delay = 0 }: { pct: number; color: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="h-[3px] overflow-hidden rounded-full bg-white/8">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, #3b82f6)` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

/* ─── Main component ────────────────────────────────────── */
export default function HeroSection() {
  const [activeStack, setActiveStack] = useState<number | null>(null);
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);
  const [marqueeHovered, setMarqueeHovered] = useState(false);

  /* active bars = driven by hovered stack item, else default */
  const activeBars = activeStack !== null
    ? stackItems[activeStack].bars
    : roadmapBars.map((b) => b.pct);

  const activeColor = activeStack !== null ? stackItems[activeStack].color : "#14b8a6";

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 68% 38%, rgba(20,184,166,0.09) 0%, rgba(59,130,246,0.07) 40%, transparent 72%)",
        }}
      />
      {/* Ambient vertical line left */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[7%] top-32 h-52 w-px bg-gradient-to-b from-transparent via-teal-300/45 to-transparent"
        animate={{ opacity: [0.2, 0.75, 0.2], y: [0, 22, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Ambient horizontal line right */}
      <motion.div
        aria-hidden="true"
        className="absolute right-[10%] top-28 h-px w-52 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"
        animate={{ opacity: [0.15, 0.65, 0.15], x: [0, -22, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-inner relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[0.62fr_1.38fr]">

        {/* ══════════════ LEFT ══════════════ */}
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-200"
          >
            <Zap size={13} />
            Premium consulting and build studio
          </motion.div>

          {/* ── Staggered headline reveal ── */}
          <h1
            className="mt-6 text-[clamp(1.9rem,4.2vw,3.6rem)] font-black leading-[0.92] tracking-[-0.03em] text-white"
            aria-label="Professional consulting for your app & software."
          >
            {headlineLines.map((line, i) => (
              <span key={i} className="reveal-line">
                <span style={{ animationDelay: `${0.08 + i * 0.11}s` }}>{line}</span>
              </span>
            ))}
          </h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mt-5 max-w-sm text-sm leading-7 text-white/55"
          >
            We plan, design, and build polished CMS websites and product-ready web
            experiences with clear strategy, premium visuals, and reliable launch execution.
          </motion.p>

          {/* ── CTA buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.64 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            {/* Magnetic primary */}
            <MagneticBtn
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#08090d] transition-colors hover:bg-teal-200"
            >
              Let&apos;s talk
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </MagneticBtn>

            <button
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 px-6 py-4 text-sm font-bold text-white transition hover:border-teal-300/50 hover:bg-white/7"
            >
              <Play size={16} />
              See case studies
            </button>
          </motion.div>

          {/* ── Metrics bento ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.76 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07]"
            style={{ borderRadius: 10 }}
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[#0f1117]/90 p-4 backdrop-blur-sm"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                <p className="text-xl font-black text-white md:text-2xl">{m.value}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-white/40">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════ RIGHT — Bento dashboard ══════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Outer glow ring */}
          <motion.div
            aria-hidden="true"
            className="absolute -inset-4 rounded-2xl border border-teal-300/10"
            animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.012, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main card */}
          <div
            className="relative overflow-hidden border border-white/[0.07] bg-[#0c0f15] shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
            style={{ borderRadius: 14 }}
          >
            {/* Mesh gradient inside card */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 75% 15%, rgba(20,184,166,0.14) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)",
              }}
            />

            <div className="relative grid min-h-[620px] lg:grid-cols-[0.72fr_1fr]">

              {/* ── Left panel: Live project room ── */}
              <div className="flex flex-col justify-between border-b border-white/[0.07] p-5 md:p-6 lg:border-b-0 lg:border-r">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
                      Live project room
                    </span>
                    {/* Dual-ring pulse badge */}
                    <span className="badge-pulse relative inline-flex items-center rounded-full bg-teal-300 px-2.5 py-1 text-[10px] font-black text-[#07100f]">
                      Active
                    </span>
                  </div>

                  {/* Stack items — interactive */}
                  <div className="mt-7 space-y-2.5">
                    {stackItems.map((item, i) => {
                      const Icon = item.icon;
                      const isActive = activeStack === i;
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          onMouseEnter={() => setActiveStack(i)}
                          onMouseLeave={() => setActiveStack(null)}
                          className="flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all duration-300"
                          style={{
                            borderColor: isActive ? `${item.color}40` : "rgba(255,255,255,0.07)",
                            background: isActive ? `${item.color}10` : "rgba(255,255,255,0.03)",
                            boxShadow: isActive ? `0 0 18px ${item.color}18` : "none",
                          }}
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300"
                            style={{
                              background: isActive ? `${item.color}22` : "rgba(255,255,255,0.06)",
                              color: item.color,
                            }}
                          >
                            <Icon size={17} />
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-black text-white">{item.label}</p>
                            <p className="text-xs text-white/38">In progress</p>
                          </div>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ background: item.color }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Testimonial */}
                <div
                  className="mt-6 rounded-xl border border-white/[0.07] bg-black/25 p-4"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
                >
                  <div className="mb-2.5 flex gap-0.5 text-amber-300">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-sm leading-6 text-white/60">
                    Premium layout, strong direction, and fast execution from strategy to launch.
                  </p>
                </div>
              </div>

              {/* ── Right panel: Dashboard ── */}
              <div className="relative p-5 md:p-6">
                {/* Browser chrome */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-400/80" />
                  </div>
                  <span className="text-[10px] font-semibold text-white/30">consulting.dashboard</span>
                </div>

                {/* Inner SaaS card */}
                <div
                  className="overflow-hidden border border-white/[0.07] bg-[#11151d]"
                  style={{ borderRadius: 10 }}
                >
                  <div className="grid min-h-[310px] md:grid-cols-[1fr_0.74fr]">

                    {/* Progress bars panel */}
                    <div className="p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal-300/80">
                        Software roadmap
                      </p>
                      <h2 className="mt-2 text-3xl font-black leading-none text-white">
                        Build plan
                      </h2>

                      <div className="mt-6 space-y-4">
                        {roadmapBars.map((bar, i) => {
                          const displayPct = activeBars[i] ?? bar.pct;
                          return (
                            <div key={bar.label}>
                              <div className="mb-1.5 flex justify-between text-[11px] font-bold text-white/42">
                                <span>{bar.label}</span>
                                <motion.span
                                  key={displayPct}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="tabular-nums"
                                  style={{ color: activeColor }}
                                >
                                  {displayPct}%
                                </motion.span>
                              </div>
                              <AnimBar
                                key={`${bar.label}-${displayPct}`}
                                pct={displayPct}
                                color={activeColor}
                                delay={i * 0.08}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Stats side */}
                    <div
                      className="border-t border-white/[0.07] bg-white/[0.03] p-5 md:border-l md:border-t-0"
                      style={{ boxShadow: "inset 1px 0 0 rgba(255,255,255,0.03)" }}
                    >
                      <div className="flex h-full flex-col justify-between gap-4">
                        {/* KPI card */}
                        <div
                          className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4"
                          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
                        >
                          <BarChart3 size={18} className="text-teal-300" />
                          <p className="mt-3 text-3xl font-black text-white">+38%</p>
                          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">
                            Projected lead lift
                          </p>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-2.5">
                          {(["Secure scope", "Responsive pages", "Launch ready"] as const).map((label, i) => (
                            <motion.div
                              key={label}
                              className="flex items-center gap-2.5 text-xs font-semibold text-white/58"
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <CheckCircle2 size={14} className="shrink-0 text-teal-300" />
                              {label}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform badges bento row */}
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {["Shopify", "WordPress", "Custom Code", "SEO"].map((p, i) => (
                    <motion.div
                      key={p}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredBadge(i)}
                      onMouseLeave={() => setHoveredBadge(null)}
                      className="cursor-default rounded-lg border px-2 py-2.5 text-center text-[11px] font-black transition-all duration-250"
                      style={{
                        borderColor: hoveredBadge === i ? "rgba(20,184,166,0.55)" : "rgba(255,255,255,0.07)",
                        background: hoveredBadge === i ? "rgba(20,184,166,0.08)" : "rgba(255,255,255,0.03)",
                        color: hoveredBadge === i ? "#14b8a6" : "rgba(255,255,255,0.5)",
                        transform: hoveredBadge === i ? "translateY(-2px)" : "translateY(0)",
                        boxShadow: hoveredBadge === i ? "0 4px 16px rgba(20,184,166,0.12)" : "none",
                      }}
                    >
                      {p}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ══════════════ MARQUEE ══════════════ */}
      <div
        className="relative border-t border-white/[0.07] py-6"
        onMouseEnter={() => setMarqueeHovered(true)}
        onMouseLeave={() => setMarqueeHovered(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(90deg, #08090d, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(270deg, #08090d, transparent)" }} />

        <div className="overflow-hidden">
          <div
            className="flex w-max gap-3"
            style={{
              animation: `marquee ${marqueeHovered ? "38s" : "22s"} linear infinite`,
              transition: "animation-duration 0.8s ease",
            }}
          >
            {platforms.map((p, i) => {
              const isHov = hoveredBadge === i % 8;
              return (
                <span
                  key={i}
                  onMouseEnter={() => setHoveredBadge(i % 8)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  className="cursor-default whitespace-nowrap rounded-full border px-5 py-2 text-sm font-bold transition-all duration-250"
                  style={{
                    borderColor: isHov ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)",
                    background: isHov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
                    color: isHov ? "#ffffff" : "rgba(255,255,255,0.42)",
                    transform: isHov ? "translateY(-2px)" : "translateY(0)",
                    boxShadow: isHov ? "0 4px 20px rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  {p}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
