import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";
import { Users, Target, Shield, Zap, Code2, Cpu, Globe, Rocket } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AspireAI Solutions and our mission to build practical AI products for Indian markets.",
};

const VALUES = [
  { title: "Innovation", icon: Zap, desc: "We push the boundaries of what's possible with AI." },
  { title: "Practicality", icon: Target, desc: "We focus on real-world utility, not just research demos." },
  { title: "India-First", icon: Globe, desc: "Our products are localized for the unique needs of Indian users." },
  { title: "Transparency", icon: Shield, desc: "We build ethical AI systems that are clear and explainable." },
];

const TECH_STACK = [
  "GPT-4o", "LLaMA 3", "PyTorch", "TensorFlow", "FastAPI", "Next.js", "TypeScript", 
  "Tailwind CSS", "LangChain", "Hugging Face", "Docker", "AWS", "Vercel", "PostgreSQL",
  "Redis", "OpenCV", "YOLOv8", "Detectron2", "LangGraph", "CrewAI"
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Our Story"
          heading="Where AI Meets Possibilities"
          subheading="Founded in 2024, AspireAI Solutions was born from a simple mission: to make advanced AI accessible and practical for Indian businesses."
          align="left"
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Based in the technology hub of Pune, we are a team of engineers, data scientists, and product thinkers dedicated to building the next generation of AI-native applications.
            </p>
            <p>
              We believe that the true power of Artificial Intelligence lies in its ability to solve specific, local problems. Whether it's navigating the complexities of the Indian stock market or helping job seekers stand out in a competitive landscape, our products are designed with the end-user in mind.
            </p>
            <div className="pt-8">
               <Card className="bg-accent-primary/5 border-accent-primary/20 p-8">
                  <blockquote className="text-2xl font-syne font-bold text-text-primary italic mb-4">
                    "Our goal isn't just to build AI; it's to build tools that empower people to do more, see further, and aspire higher."
                  </blockquote>
                  <cite className="text-accent-primary font-bold not-italic">— Founder, AspireAI Solutions</cite>
               </Card>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {VALUES.map(v => (
                <Card key={v.title} className="p-8">
                   <v.icon className="text-accent-primary mb-4" size={32} />
                   <h3 className="font-syne font-bold text-xl mb-2">{v.title}</h3>
                   <p className="text-sm text-text-secondary">{v.desc}</p>
                </Card>
             ))}
          </div>
        </div>

        <div className="mb-32">
           <h2 className="text-3xl font-syne font-bold mb-12 text-center">The Stack We Work With</h2>
           <div className="flex flex-wrap justify-center gap-3">
              {TECH_STACK.map(tech => (
                 <span key={tech} className="px-6 py-3 rounded-full bg-surface border border-border/50 text-text-primary font-medium hover:border-accent-primary transition-colors cursor-default">
                    {tech}
                 </span>
              ))}
           </div>
        </div>

        <div className="bg-surface/30 p-12 md:p-20 rounded-[3rem] border border-border/50 text-center">
           <Rocket className="text-accent-secondary mx-auto mb-8" size={64} />
           <h2 className="text-4xl font-syne font-extrabold mb-6">Building the Future, <span className="text-accent-primary">From Pune to the World.</span></h2>
           <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Join us on our journey to redefine what's possible with Artificial Intelligence.
           </p>
        </div>
      </div>
    </div>
  );
}
