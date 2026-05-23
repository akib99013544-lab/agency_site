"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Shows the same branded loading screen on every client-side page navigation.
 *
 * Strategy:
 *  1. Intercept all <a> clicks via a document-level listener.
 *  2. Show the loader immediately.
 *  3. Navigate programmatically with router.push().
 *  4. Watch pathname — when it changes the new page has mounted → hide loader.
 */
export default function PageTransitionLoader() {
  const pathname = usePathname();
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  /* ── Run progress animation whenever loader becomes visible ── */
  useEffect(() => {
    if (!visible) return;

    setProgress(0);
    let raf: number;
    const start = performance.now();
    const duration = 900; // faster than initial load — feels snappy

    const tick = (now: number) => {
      const pct = Math.min(((now - start) / duration) * 100, 92); // stop at 92, finish on arrival
      setProgress(pct);
      if (pct < 92) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  /* ── When pathname changes → new page mounted → finish bar & hide ── */
  useEffect(() => {
    if (!visible) return;
    // Snap to 100 then fade out
    setProgress(100);
    const t = setTimeout(() => setVisible(false), 380);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* ── Navigate after loader appears ── */
  useEffect(() => {
    if (!pendingHref) return;
    router.push(pendingHref);
    setPendingHref(null);
  }, [pendingHref, router]);

  /* ── Intercept anchor clicks ── */
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Skip: external, hash-only, mailto, tel, download, modifier keys, new tab
      const isExternal =
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("whatsapp:");
      const isHashOnly = href.startsWith("#");
      const hasModifier = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      const opensNewTab =
        target.target === "_blank" || target.getAttribute("rel")?.includes("noopener");

      if (isExternal || isHashOnly || hasModifier || opensNewTab) return;

      // Same page — skip
      const targetPath = href.split("?")[0].split("#")[0];
      const currentPath = window.location.pathname;
      if (targetPath === currentPath) return;

      e.preventDefault();
      setVisible(true);
      setPendingHref(href);
    },
    []
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleClick]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#08090d]"
        >
          {/* Grid texture */}
          <div className="absolute inset-0 grid-texture opacity-25" />

          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(20,184,166,0.13) 0%, rgba(59,130,246,0.07) 50%, transparent 72%)",
              filter: "blur(48px)",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10"
          >
            <Image
              src="/modulus-software-logo.png"
              alt="MODULUS SOFTWARE"
              width={560}
              height={280}
              priority
              className="h-56 w-auto object-contain drop-shadow-[0_24px_80px_rgba(20,184,166,0.32)]"
            />
          </motion.div>

          {/* Dots + bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="relative z-10 mt-10 flex flex-col items-center gap-5"
          >
            {/* Bouncing dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="block rounded-full bg-teal-300"
                  style={{ width: 6, height: 6 }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.3, 0.8],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.13,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #14b8a6, #3b82f6)",
                  transition: "width 0.12s linear",
                }}
              />
              {/* Shimmer sweep */}
              <motion.div
                className="absolute top-0 h-full w-12 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                }}
                animate={{ x: [-48, 192] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Percentage */}
            <p className="text-xs font-bold tabular-nums text-white/30">
              {Math.round(progress)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
