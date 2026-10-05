import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muntasir Hasan | Components & AI Agents",
  description:
    "A showcase of UI components and AI agents built during the 90-day challenge. Featuring React, Tailwind CSS, and modern development practices.",
  openGraph: {
    title: "Muntasir Hasan | Components & AI Agents",
    description:
      "A showcase of UI components and AI agents built during the 90-day challenge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
