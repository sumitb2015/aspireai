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
    default: "AspireAI Solutions — Innovative AI Products & Services",
  },
  description: "AspireAI Solutions delivers cutting-edge AI-powered products and enterprise services. Explore OI Alpha for professional options analytics and BespokeCV for global AI resume building.",
  keywords: ["AI products", "AI services", "enterprise AI solutions", "options analytics", "AI resume builder", "generative AI", "computer vision", "AI agents"],
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
    locale: "en_US",
    url: "https://aspireaisolutions.com",
    title: "AspireAI Solutions — Innovative AI Products & Services",
    description: "Building the future with advanced AI products and enterprise-grade solutions for a global market.",
    siteName: "AspireAI Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "AspireAI Solutions",
    description: "Innovative AI Products & Services — Building the future of AI.",
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
