import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFaq from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Contact | MODULUS SOFTWARE",
  description:
    "Book a free strategy call or send us a message. We respond within 2 business hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <ContactHero />

        {/* ── Main form + info grid ── */}
        <section className="section-shell border-y border-white/10 bg-white/[0.02]">
          <div className="section-inner">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        <ContactFaq />
      </main>
      <Footer />
    </>
  );
}
