"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Search, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Discovery & Strategy",
    desc: "We analyze your existing workflows to identify high-impact AI use cases specific to the Indian market.",
    icon: Search,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Data & Modeling",
    desc: "Training and fine-tuning state-of-the-art LLMs or Vision models with your domain-specific data.",
    icon: Code2,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Deployment & Scale",
    desc: "Integrating intelligent systems into production with a focus on performance, security, and data sovereignty.",
    icon: Rocket,
    color: "bg-emerald-500/10 text-emerald-500",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="The Journey"
          heading="How We Build the Future"
          subheading="A structured approach to transforming business complexity into intelligent automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-border hidden md:block -z-10" />

          {STEPS.map((step, i) => (
            <Card key={i} className="bg-card border-none shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-500" />
              <CardHeader className="pt-10">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon size={32} />
                </div>
                <div className="text-4xl font-syne font-black opacity-10 absolute top-8 right-8">
                  0{i + 1}
                </div>
                <CardTitle className="text-2xl font-syne font-bold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-10">
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
