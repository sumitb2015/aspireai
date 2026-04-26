import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Metadata } from "next";
import Image from "next/image";

interface ServiceDetailProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  return {
    title: service?.seoTitle || service?.title || "Service",
    description: service?.seoDescription || service?.description,
    keywords: (service as any)?.seoKeywords || [],
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

  const deliverySteps = [
    { title: "Discovery & Strategy", desc: "We analyze your data landscape and define precise business objectives." },
    { title: "Architecture Design", desc: "Engineering scalable, secure, and performant AI infrastructure tailored to your needs." },
    { title: "Development & Tuning", desc: "Iterative model development, fine-tuning, and rigorous validation loops." },
    { title: "Deployment & Scaling", desc: "Seamless integration into your production environment with continuous monitoring." }
  ];

  return (
    <div className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-16 group text-xs font-bold uppercase tracking-[0.2em]">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-lg shadow-primary/5">
                <service.icon size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-dmSans font-bold tracking-tight">{service.title}</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-dmSans mb-16 max-w-4xl border-l-4 border-primary/20 pl-8 py-2">
              {service.details.tagline}
            </p>

            {service.slug === "data-annotation" && (
              <div className="mb-20 rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5 relative group">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                <Image 
                  src="/data_annotation.png" 
                  alt="Data Annotation and Labeling Interface" 
                  width={1200} 
                  height={600} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            )}

            <div className="flex flex-col gap-16 mt-16 max-w-3xl">
              {service.content?.map((section) => (
                <div key={section.heading} className="group">
                  <h2 className="text-2xl md:text-3xl font-dmSans font-bold text-text-primary mb-6 group-hover:text-primary transition-colors">
                    {section.heading}
                  </h2>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-10">
            <div className="p-8 rounded-3xl bg-surface/50 backdrop-blur-md border border-border/50 shadow-2xl shadow-black/5">
              <h2 className="text-xl font-dmSans font-bold mb-8 flex items-center gap-3 text-primary">
                <div className="w-8 h-[1px] bg-primary" />
                Capabilities
              </h2>
              <div className="flex flex-col gap-6">
                {service.details.capabilities.map((cap) => (
                  <div key={cap} className="flex gap-4 group/item">
                    <div className="mt-1 shrink-0 text-primary group-hover/item:scale-110 transition-transform">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary mb-1">{cap}</h3>
                      <p className="text-text-secondary text-xs leading-relaxed">Production-ready implementation at enterprise scale.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface/50 backdrop-blur-md border border-border/50 shadow-2xl shadow-black/5">
              <h2 className="text-xl font-dmSans font-bold mb-8 flex items-center gap-3 text-primary">
                <div className="w-8 h-[1px] bg-primary" />
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.details.techStack.map((tech) => (
                  <div key={tech} className="px-4 py-2 rounded-xl bg-background border border-border/50 text-text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:border-primary/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24 pt-24 border-t border-border/50">
          <SectionHeading 
            eyebrow="Our Approach"
            heading="How we deliver excellence"
            subheading="A structured, iterative lifecycle designed for high-impact AI deployment."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step, idx) => (
              <div key={step.title} className="relative p-8 rounded-2xl bg-surface/30 border border-border/30 hover:border-primary/30 transition-all group">
                <div className="text-4xl font-dmSans font-black text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-4">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-[3rem] bg-gradient-to-br from-primary via-blue-700 to-indigo-900 p-12 md:p-20 overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-dmSans font-bold mb-8">Ready to transform your business with AI?</h2>
            <p className="text-white/80 text-lg mb-12 leading-relaxed">
              Our experts are ready to discuss your specific requirements and build a custom {service.title.toLowerCase()} solution that scales with your ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 h-14 text-base font-bold shadow-xl shadow-black/20">
                  Start a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 px-10 h-14 text-base font-bold backdrop-blur-sm">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
