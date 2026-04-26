"use client";

import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Proprietary Tech"
          heading="Market-Ready AI Products"
          subheading="We build high-performance tools that solve critical challenges in the global market."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="group relative h-full border-none bg-gradient-to-br from-card to-muted/20 shadow-xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              {/* Stretched Link for Card Clickability */}
              <Link href={product.featuresUrl} className="absolute inset-0 z-0">
                <span className="sr-only">View {product.name} Features</span>
              </Link>

              <CardHeader className="p-8 md:p-12 pb-6 relative z-10 pointer-events-none">
                <div className="flex items-center justify-between mb-8 pointer-events-auto">
                  <Badge variant="secondary" className="px-4 py-1 rounded-md bg-primary/10 text-primary border-primary/20">
                    {product.badge}
                  </Badge>
                  <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground opacity-50">
                    {product.category}
                  </span>
                </div>
                <CardTitle className="text-4xl md:text-5xl font-syne font-extrabold mb-4 tracking-tighter group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-8 md:px-12 relative z-10 pointer-events-none">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-8 md:px-12 pb-12 relative z-20">
                <div className="flex flex-wrap gap-4 w-full">
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-grow md:flex-grow-0"
                  >
                    <Button size="lg" className="w-full md:w-auto rounded-full px-8">
                      Launch {product.name} <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </a>
                  <div className="flex-grow md:flex-grow-0">
                    <Button variant="outline" size="lg" className="w-full md:w-auto rounded-full px-8 bg-transparent">
                      View Features
                    </Button>
                  </div>
                </div>
              </CardFooter>
              
              <div className="h-2 bg-gradient-to-r from-primary to-indigo-500 opacity-50 relative z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
