"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08090d]"
        >
          <div className="absolute inset-0 grid-texture opacity-25" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <Image
              src="/modulus-software-logo.png"
              alt="MODULUS SOFTWARE logo"
              width={420}
              height={240}
              priority
              className="h-40 w-auto object-contain drop-shadow-[0_18px_70px_rgba(20,184,166,0.28)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
