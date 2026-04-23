import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | AspireAI Solutions",
    default: "AspireAI Solutions — Where AI Meets Possibilities",
  },
  description: "AspireAI Solutions builds AI-powered products for Indian markets. Explore OI Alpha for options analytics and BespokeCV for AI resume building.",
  keywords: ["AI solutions India", "options analytics", "AI resume builder", "generative AI India", "computer vision"],
  authors: [{ name: "AspireAI Solutions" }],
  creator: "AspireAI Solutions",
  publisher: "AspireAI Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aspireaisolutions.com",
    title: "AspireAI Solutions — Where AI Meets Possibilities",
    description: "Building advanced AI products and solutions for the Indian market.",
    siteName: "AspireAI Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "AspireAI Solutions",
    description: "Where AI Meets Possibilities — Building the future of AI in India.",
    creator: "@aspireai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${syne.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
