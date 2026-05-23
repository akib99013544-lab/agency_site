"use client";
import Image from "next/image";
import { ArrowRight, Code, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const footerLinks = {
  Services: ["Shopify", "WordPress", "Wix", "Squarespace", "Redesigns", "SEO setup"],
  Company: ["About", "Process", "Portfolio", "Contact"],
  Resources: ["Free audit", "CMS guide", "SEO checklist", "Launch plan"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090d]">
      <div className="section-inner py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/modulus-software-logo.png"
              alt="MODULUS SOFTWARE logo"
              width={320}
              height={170}
              className="h-28 w-auto object-contain drop-shadow-[0_12px_38px_rgba(20,184,166,0.18)]"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/48">
              Professional software consulting and premium web development for modern businesses.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/48">
              <p className="flex items-center gap-3"><Mail size={15} className="text-teal-300" /> hello@modulussoftware.com</p>
              <p className="flex items-center gap-3"><Phone size={15} className="text-teal-300" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-3"><MapPin size={15} className="text-teal-300" /> New York, NY - USA</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">{category}</h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/46 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <form onSubmit={(event) => event.preventDefault()} className="flex max-w-lg gap-3">
            <input type="email" placeholder="your@email.com" className="form-field min-w-0 flex-1" />
            <button type="submit" className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#08090d]">
              Subscribe
              <ArrowRight size={15} />
            </button>
          </form>
          <div className="flex gap-2">
            {[MessageSquare, Code].map((Icon, index) => (
              <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/48 transition hover:text-white" aria-label="Social link">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/34 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 MODULUS SOFTWARE. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
