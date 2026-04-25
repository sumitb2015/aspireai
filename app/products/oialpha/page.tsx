import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, BarChart3, TrendingUp, Cpu, Database, Layout, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import ImageCarousel from "./ImageCarousel";

export const metadata: Metadata = {
  title: "OI Alpha | Professional Options Analytics & OI Tracking Tool",
  description: "Advanced options analytics for derivatives traders. Real-time Open Interest (OI) tracking, Greeks, IV surface, and AI-powered market insights for Indian markets.",
  keywords: [
    "Options Analytics Tool",
    "Open Interest Tracking",
    "OI Data Analysis India",
    "Nifty Options Greeks",
    "Bank Nifty OI Analysis",
    "Implied Volatility Surface",
    "Derivatives Trading Software",
    "OI Alpha",
    "AspireAI Fintech",
    "Real-time OI dashboard"
  ],
  openGraph: {
    title: "OI Alpha | Professional Options Analytics",
    description: "Professional-grade options analytics for derivatives traders. Real-time OI tracking, Greeks, and AI-powered market insights.",
    url: "https://oialpha.com",
    siteName: "AspireAI Solutions",
    images: [
      {
        url: "/og-oialpha.png",
        width: 1200,
        height: 630,
        alt: "OI Alpha Options Analytics",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OI Alpha | Professional Options Analytics",
    description: "Master the options market with real-time OI tracking and advanced derivatives analytics.",
    images: ["/og-oialpha.png"],
  },
};

const FEATURES = [
  { title: "OI Tracking", description: "Real-time Open Interest tracking for derivatives markets.", icon: BarChart3 },
  { title: "IV Surface", description: "Visualize Implied Volatility across different strikes and expiries.", icon: TrendingUp },
  { title: "Strategy Payoff", description: "Simulate complex option strategies with visual payoff graphs.", icon: Layout },
  { title: "AI Narratives", description: "Natural language summaries of market trends using LLMs.", icon: Cpu },
  { title: "Exchange Data", description: "High-frequency data directly from exchange feeds.", icon: Database },
  { title: "Dark Terminal UI", description: "Designed for focused, long-duration trading sessions.", icon: ShieldCheck },
];

export default function OIAlphaPage() {
  const product = PRODUCTS.find(p => p.id === "oialpha")!;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="px-4 py-1 rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20 text-xs font-bold uppercase tracking-widest mb-6">
            Live Product
          </span>
          <h1 className="text-fluid-h1 font-syne font-extrabold mb-6">
            Professional Options <br /> Analytics for <span className="text-accent-secondary">Modern Traders</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl leading-relaxed">
            OI Alpha provides professional-grade tools to retail and institutional traders, enabling them to make data-driven decisions in complex derivatives markets.
          </p>
          <div className="mt-10">
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">Open OI Alpha</Button>
            </a>
          </div>
        </div>

        {/* Mockup Area */}
        <div className="relative mb-32 max-w-5xl mx-auto">
          <ImageCarousel />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-secondary/20 blur-[80px] -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-primary/20 blur-[80px] -z-10" />
        </div>

        <SectionHeading 
          heading="Engineered for Performance"
          subheading="Every feature is built with the modern quantitative trader in mind."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="p-8">
              <div className="p-3 rounded-xl bg-accent-secondary/10 text-accent-secondary w-fit mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-syne font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface/30 p-12 md:p-20 rounded-[3rem] border border-border/50">
          <div>
            <h2 className="text-3xl font-syne font-bold mb-8">Built For</h2>
            <div className="flex flex-col gap-6">
              {[
                { title: "Retail Options Traders", desc: "Gain an edge over big players with data-driven insights." },
                { title: "HNI Investors", desc: "Manage large portfolios with sophisticated hedging tools." },
                { title: "Algo Traders", desc: "Integrate high-frequency OI data into your execution models." }
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="text-accent-secondary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center lg:text-right">
             <h3 className="text-4xl font-syne font-extrabold mb-6">Ready to trade smarter?</h3>
             <a href={product.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">Try OI Alpha for Free</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
