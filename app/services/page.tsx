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
    <div className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24">
          <SectionHeading 
            eyebrow="Expertise & Solutions"
            heading="Specialized AI Services for the Global Enterprise"
            subheading="We bridge the gap between AI research and production-grade reality, delivering scalable, secure, and highly accurate intelligent systems."
            align="left"
            className="mb-0"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <Card key={service.id} className="relative group p-8 md:p-12 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500">
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-lg shadow-primary/5">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-dmSans font-bold tracking-tight">{service.title}</h2>
                </div>
                
                <p className="text-text-secondary text-base md:text-lg mb-12 leading-relaxed max-w-xl">
                  {service.description} <span className="text-primary/80 font-medium">{service.details.tagline}</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                  {service.details.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3 group/cap">
                      <div className="mt-1 p-0.5 rounded-full bg-primary/20 text-primary group-hover/cap:bg-primary group-hover/cap:text-background transition-colors">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-sm font-medium text-text-primary/90">{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-8 pt-10 border-t border-border/40">
                  <div className="flex flex-wrap gap-2.5">
                    {service.details.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-surface/50 text-text-secondary text-[10px] uppercase font-bold tracking-widest rounded-lg border border-border/30 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" className="group/btn relative overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
                      <span className="relative z-10 flex items-center">
                        Explore Solution <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
