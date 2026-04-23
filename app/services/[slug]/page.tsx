import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Metadata } from "next";

interface ServiceDetailProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  return {
    title: service?.title || "Service",
    description: service?.description,
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors mb-12 group text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>

        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 rounded-2xl bg-accent-primary/10 text-accent-primary">
              <service.icon size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl font-syne font-extrabold">{service.title}</h1>
          </div>
          <p className="text-2xl text-text-secondary leading-relaxed font-syne">
            {service.details.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-syne font-bold mb-8">What we build</h2>
            <div className="flex flex-col gap-6">
              {service.details.capabilities.map((cap) => (
                <div key={cap} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 size={24} className="text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">{cap}</h3>
                    <p className="text-text-secondary text-sm">Enterprise-grade implementation using state-of-the-art architectures.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-syne font-bold mb-8">Tech stack we use</h2>
            <div className="flex flex-wrap gap-3">
              {service.details.techStack.map((tech) => (
                <div key={tech} className="px-5 py-3 rounded-xl bg-surface border border-border/50 text-text-primary font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
              <h3 className="font-syne font-bold text-accent-primary mb-4">Discuss a project</h3>
              <p className="text-text-secondary text-sm mb-6">
                Have a specific requirement for {service.title.toLowerCase()}? Let's talk about how we can help.
              </p>
              <Link href="/contact">
                <Button className="w-full">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
