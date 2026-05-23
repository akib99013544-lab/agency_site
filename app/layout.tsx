import type { Metadata } from "next";
import { Slabo_27px } from "next/font/google";
import "./globals.css";
import PageTransitionLoader from "@/components/PageTransitionLoader";

const slabo = Slabo_27px({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MODULUS SOFTWARE | CMS, Custom Code & Full Stack Web Development",
  description: "MODULUS SOFTWARE builds Shopify stores, WordPress sites, custom code solutions, full stack web apps, SEO, and website maintenance for modern businesses.",
  keywords: "MODULUS SOFTWARE, custom code development, full stack development, SEO agency, Shopify development, WordPress agency, Wix websites, Squarespace design, website maintenance, CMS development",
  openGraph: {
    title: "MODULUS SOFTWARE | CMS, Custom Code & Full Stack Development",
    description: "Premium CMS, custom code, full stack development, SEO, and website maintenance for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${slabo.className} antialiased`}>
        <PageTransitionLoader />
        {children}
      </body>
    </html>
  );
}
