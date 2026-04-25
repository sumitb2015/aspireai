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
  metadataBase: new URL("https://aspireaisolutions.com"),
  title: {
    template: "%s | AspireAI Solutions",
    default: "Top AI Development Company in India & Pune | AspireAI",
  },
  description: "AspireAI Solutions is a leading AI development company in Pune, India. We build enterprise-grade Generative AI, Computer Vision, and autonomous agent solutions for global markets.",
  keywords: ["AI development company India", "Generative AI services Pune", "Computer Vision solutions India", "LLM fine-tuning", "AI agents", "Enterprise AI", "AspireAI"],
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
    title: "Top AI Development Company in India & Pune | AspireAI",
    description: "Building the future with advanced AI products and enterprise-grade solutions. Specialist in LLM fine-tuning and Computer Vision.",
    siteName: "AspireAI Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "AspireAI Solutions | AI Development Company India",
    description: "Innovative AI Products & Services — Building the future of Enterprise AI.",
    creator: "@aspireai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AspireAI Solutions",
    "url": "https://aspireaisolutions.com",
    "logo": "https://aspireaisolutions.com/logo.png",
    "description": "Leading AI products and services company based in Pune, India, specializing in Generative AI, Computer Vision, and Intelligent Agents.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "email": "contact@aspireaisolutions.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/aspireai-solutions",
      "https://twitter.com/aspireai"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${syne.variable} font-dmSans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
