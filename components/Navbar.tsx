"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("/#")) {
      const selector = href.replace("/", "");
      const target = document.querySelector(selector);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }

      window.location.href = href;
      return;
    }

    window.location.href = href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#08090d]/88 py-2 backdrop-blur-xl"
            : "border-transparent bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex w-[min(1160px,calc(100%-2rem))] items-center justify-between">
          <button
            onClick={() => handleNavClick("/#hero")}
            className="flex items-center text-left"
            aria-label="Go to top"
          >
            <Image
              src="/modulus-software-logo.png"
              alt="MODULUS SOFTWARE logo"
              width={260}
              height={120}
              priority
              className="h-16 w-auto object-contain drop-shadow-[0_8px_24px_rgba(20,184,166,0.22)]"
            />
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-white/62 transition hover:bg-white/7 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("/#contact")}
            className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#08090d] transition hover:bg-teal-200 md:flex"
          >
            Book a Call
            <ArrowRight size={16} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed left-4 right-4 top-20 z-40 border border-white/10 bg-[#0f1117]/96 p-3 shadow-2xl backdrop-blur-xl md:hidden"
            style={{ borderRadius: 8 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold text-white/72 hover:bg-white/7 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/#contact")}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#08090d]"
            >
              Book a Call
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
