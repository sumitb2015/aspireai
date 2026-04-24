import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, FileText, Sparkles, Zap, Shield, Search, CreditCard } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BespokeCV",
  description: "AI-powered resume builder for global job seekers.",
};

const FEATURES = [
  { title: "45+ ATS Templates", description: "Industry-standard templates that pass through global ATS filters.", icon: FileText },
  { title: "AI Content Generation", description: "Tailor your experience section with AI-optimized bullet points.", icon: Sparkles },
  { title: "Secure Payments", description: "Secure, global payment processing for seamless access.", icon: CreditCard },
  { title: "PDF Export", description: "One-click high-quality PDF downloads.", icon: Zap },
  { title: "Job Role Optimization", description: "Optimize your CV for specific global job descriptions.", icon: Search },
  { title: "Privacy First", description: "Your data is encrypted and never sold to third parties.", icon: Shield },
];

export default function BespokeCVPage() {
  const product = PRODUCTS.find(p => p.id === "bespokecv")!;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="px-4 py-1 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20 text-xs font-bold uppercase tracking-widest mb-6">
            Live Product
          </span>
          <h1 className="text-fluid-h1 font-syne font-extrabold mb-6">
            AI-Powered Resumes for <br /> <span className="text-accent-primary">Global Job Seekers</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl leading-relaxed">
            Stop worrying about ATS filters. BespokeCV uses advanced AI to help you build professional, high-impact resumes in minutes.
          </p>
          <div className="mt-10">
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Build Your Resume</Button>
            </a>
          </div>
        </div>

        {/* Mockup Area */}
        <div className="relative mb-32 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
             {[1, 2, 3].map(i => (
                <div key={i} className="aspect-[3/4] glass-card rounded-2xl p-4 flex flex-col gap-4 opacity-40 hover:opacity-100 transition-opacity">
                   <div className="h-4 bg-accent-primary/30 w-3/4 rounded" />
                   <div className="h-2 bg-accent-primary/20 w-1/2 rounded" />
                   <div className="mt-4 flex-grow border border-border/50 rounded flex items-center justify-center">
                      <FileText className="text-accent-primary/20" size={48} />
                   </div>
                </div>
             ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-primary/5 blur-[120px] -z-10" />
        </div>

        <SectionHeading 
          heading="Built for the Modern Job Market"
          subheading="Everything you need to stand out in the competitive global tech and corporate landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="p-8">
              <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary w-fit mb-6">
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
                { title: "Fresh Graduates", desc: "Start your career with a professional resume that gets noticed." },
                { title: "Career Changers", desc: "Highlight transferable skills with AI-assisted content." },
                { title: "IT Professionals", desc: "Showcase your tech stack and projects with clean, modern templates." }
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="text-accent-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center lg:text-right">
             <h3 className="text-4xl font-syne font-extrabold mb-6">Your dream job starts here.</h3>
             <a href={product.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Get Started Now</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
