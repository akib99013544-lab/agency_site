import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MODULUS SOFTWARE | Professional App, Software & CMS Consulting",
  description: "MODULUS SOFTWARE provides professional consulting, software development, app strategy, CMS websites, and premium web solutions for modern businesses.",
  keywords: "MODULUS SOFTWARE, software consulting, app consulting, software development agency, CMS development, web development, Shopify development, WordPress agency",
  openGraph: {
    title: "MODULUS SOFTWARE | App, Software & Web Consulting",
    description: "Professional consulting and premium web development for apps, software, and CMS platforms.",
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
