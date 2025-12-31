import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Albus Landscape Artisans | Professional Landscaping Services",
  description:
    "Transform your outdoor space with Albus Landscape Artisans. Professional landscape design, maintenance, hardscaping, and irrigation services.",
  keywords: [
    "landscaping",
    "landscape design",
    "lawn maintenance",
    "hardscaping",
    "irrigation",
    "outdoor living",
  ],
  authors: [{ name: "Albus Landscape Artisans" }],
  openGraph: {
    title: "Albus Landscape Artisans | Professional Landscaping Services",
    description:
      "Transform your outdoor space with professional landscaping services",
    type: "website",
    locale: "en_US",
    siteName: "Albus Landscape Artisans",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
