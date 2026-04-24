import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services & Solutions",
  description: "Comprehensive AI services for global enterprises, including Generative AI, Conversational AI, Computer Vision, and Autonomous Agents.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Our Expertise"
          heading="Specialized AI Services"
          subheading="We provide end-to-end AI development, from strategic consulting to deploying high-scale production systems."
          align="left"
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} className="p-8 md:p-12 flex flex-col group">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-background transition-all duration-500">
                  <service.icon size={36} />
                </div>
                <h2 className="text-3xl font-syne font-bold">{service.title}</h2>
              </div>
              
              <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                {service.description} {service.details.tagline}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.details.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 text-text-primary">
                    <CheckCircle2 size={18} className="text-accent-primary shrink-0" />
                    <span className="text-sm font-medium">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {service.details.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-surface text-text-secondary text-xs rounded-md border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline">Learn More <ArrowRight size={16} className="ml-2" /></Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
