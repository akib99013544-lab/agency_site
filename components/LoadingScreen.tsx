"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar from 0 → 100 over ~1.8s
    let raf: number;
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Small pause at 100% before exit
        setTimeout(() => setLoading(false), 260);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08090d]"
        >
          {/* Grid texture */}
          <div className="absolute inset-0 grid-texture opacity-25" />

          {/* Ambient glow behind logo */}
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
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
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

          {/* Loading bar + dots */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="relative z-10 mt-10 flex flex-col items-center gap-5"
          >
            {/* Animated dots */}
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

            {/* Progress bar track */}
            <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              {/* Filled bar */}
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #14b8a6, #3b82f6)",
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
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
