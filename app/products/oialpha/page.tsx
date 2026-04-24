import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, BarChart3, TrendingUp, Cpu, Database, Layout, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OI Alpha",
  description: "Professional-grade options analytics for professional derivatives traders.",
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
          <div className="aspect-video bg-surface rounded-[2rem] border border-border/50 overflow-hidden shadow-2xl relative">
             <div className="scan-line" />
             <div className="p-8 h-full flex flex-col gap-6 opacity-40">
                <div className="h-12 bg-border/50 w-1/4 rounded-lg" />
                <div className="flex-grow grid grid-cols-12 gap-4">
                   <div className="col-span-8 bg-border/30 rounded-xl" />
                   <div className="col-span-4 flex flex-col gap-4">
                      <div className="flex-grow bg-border/30 rounded-xl" />
                      <div className="flex-grow bg-border/30 rounded-xl" />
                   </div>
                </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-12 text-center">
                   <h3 className="text-2xl font-syne font-bold mb-4">Dark Terminal Aesthetic</h3>
                   <p className="text-text-secondary">Designed for the modern quantitative trader.</p>
                </div>
             </div>
          </div>
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
