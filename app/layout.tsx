import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PixelForge Studio | Premium CMS & Web Development Agency",
  description: "Premium Shopify, WordPress, Wix & Squarespace development agency. We build high-converting CMS websites for modern businesses across the USA.",
  keywords: "Shopify development, WordPress agency, Wix websites, Squarespace design, CMS development, web agency USA",
  openGraph: {
    title: "PixelForge Studio | Premium CMS Agency",
    description: "We build high-converting CMS websites for modern businesses.",
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
