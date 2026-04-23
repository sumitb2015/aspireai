"use client";

import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Our Services"
          heading="Enterprise-Grade AI Capabilities"
          subheading="We build the future with custom-trained models and scalable AI architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <Card className="h-full border-muted hover:border-primary/50 bg-card/30 backdrop-blur-sm group cursor-pointer transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="text-xl font-syne group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight size={14} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
