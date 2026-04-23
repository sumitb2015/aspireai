import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ExternalLink, Cpu, BarChart3, Users, Zap, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore AspireAI's market-ready AI solutions including OI Alpha and BespokeCV.",
};

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Market-Ready Solutions"
          heading="AI Products Built for Impact"
          subheading="We bridge the gap between complex AI models and practical, daily utility for the Indian market."
          align="left"
          className="mb-20"
        />

        <div className="flex flex-col gap-24">
          {PRODUCTS.map((product, index) => (
            <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Product Info */}
              <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <Badge variant="secondary" className="mb-6 rounded-md px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                  {product.badge}
                </Badge>
                <h2 className="text-4xl md:text-6xl font-syne font-extrabold mb-6 tracking-tighter">
                  {product.name}
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary">
                        <Zap size={14} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                      Open {product.name} <ExternalLink size={18} className="ml-2" />
                    </Button>
                  </a>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" size="lg" className="rounded-full px-8">
                      Product Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Insight Component (Replacing the placeholder) */}
              <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <Card className="border-none bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-2xl p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-syne font-bold mb-8">Product Intelligence</h3>
                    
                    <div className="space-y-6">
                      {product.id === "oialpha" ? (
                        <>
                          <div className="p-6 rounded-xl bg-background/50 border border-white/10">
                            <BarChart3 className="text-orange-500 mb-4" size={32} />
                            <h4 className="font-bold mb-2">NSE Real-time Engine</h4>
                            <p className="text-sm text-muted-foreground">Proprietary data pipeline processing 10k+ option strikes per second with sub-millisecond latency.</p>
                          </div>
                          <div className="p-6 rounded-xl bg-background/50 border border-white/10">
                            <Cpu className="text-primary mb-4" size={32} />
                            <h4 className="font-bold mb-2">Predictive AI Narratives</h4>
                            <p className="text-sm text-muted-foreground">Fine-tuned LLMs that translate complex Greeks into actionable market sentiment summaries.</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-6 rounded-xl bg-background/50 border border-white/10">
                            <Search className="text-primary mb-4" size={32} />
                            <h4 className="font-bold mb-2">ATS Semantic Mapping</h4>
                            <p className="text-sm text-muted-foreground">Advanced NLP matching that aligns candidate skills with specific Indian IT sector requirements.</p>
                          </div>
                          <div className="p-6 rounded-xl bg-background/50 border border-white/10">
                            <ShieldCheck className="text-emerald-500 mb-4" size={32} />
                            <h4 className="font-bold mb-2">Market-Specific Templates</h4>
                            <p className="text-sm text-muted-foreground">Curated designs optimized for top Indian conglomerates including Tata, Reliance, and Fintech unicorns.</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Global Product Tech Section */}
        <div className="mt-48 pt-24 border-t">
          <SectionHeading 
            eyebrow="The Backbone"
            heading="Shared AI Infrastructure"
            subheading="All our products leverage the AspireAI core framework for reliability and scale."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-muted/30 border-none shadow-none">
              <Users className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3">User-Centric Design</h3>
              <p className="text-muted-foreground text-sm">Interfaces built for clarity, reducing cognitive load for complex tasks.</p>
            </Card>
            <Card className="text-center p-8 bg-muted/30 border-none shadow-none">
              <Cpu className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3">Modular LLM Core</h3>
              <p className="text-muted-foreground text-sm">Pluggable model architecture supporting GPT-4o, Claude 3.5, and LLaMA 3.</p>
            </Card>
            <Card className="text-center p-8 bg-muted/30 border-none shadow-none">
              <ShieldCheck className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3">Data Sovereignty</h3>
              <p className="text-muted-foreground text-sm">Enterprise-grade security ensuring all user data stays within Indian regulatory boundaries.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
