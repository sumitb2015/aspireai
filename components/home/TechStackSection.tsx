"use client";

import SectionHeading from "@/components/ui/SectionHeading";

const TECH = [
  { name: "GPT-4o", cat: "LLM" },
  { name: "LLaMA 3", cat: "LLM" },
  { name: "LangChain", cat: "Framework" },
  { name: "PyTorch", cat: "Modeling" },
  { name: "TensorFlow", cat: "Modeling" },
  { name: "Next.js", cat: "Frontend" },
  { name: "FastAPI", cat: "Backend" },
  { name: "OpenCV", cat: "Vision" },
  { name: "YOLO11", cat: "Vision" },
  { name: "PostgreSQL", cat: "Database" },
  { name: "Redis", cat: "Cache" },
  { name: "Docker", cat: "Infrastructure" },
  { name: "AWS", cat: "Cloud" },
  { name: "Vercel", cat: "Deployment" },
  { name: "TypeScript", cat: "Language" },
];

export default function TechStackSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          eyebrow="Our Arsenal"
          heading="Powered by the Best"
          subheading="We leverage cutting-edge technologies to build reliable, high-performance AI solutions."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {TECH.map((t) => (
            <div 
              key={t.name}
              className="px-6 py-4 rounded-2xl bg-card border border-border/50 shadow-sm hover:border-primary/40 hover:shadow-md transition-all group cursor-default"
            >
              <div className="flex flex-col items-center">
                 <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {t.name}
                 </span>
                 <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground opacity-50">
                    {t.cat}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
