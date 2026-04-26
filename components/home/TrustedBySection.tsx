"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "GPT-4o",
  "LLaMA 3",
  "LangChain",
  "PyTorch",
  "TensorFlow",
  "Next.js",
  "FastAPI",
  "OpenCV",
  "YOLOv8",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "TypeScript",
];

export default function TrustedBySection() {
  return (
    <section className="py-12 border-b bg-muted/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Powered By Industry Leading Technologies
        </p>
      </div>

      <div className="flex relative items-center">
        {/* Continuous Marquee Animation */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 pr-16"
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-syne font-black text-muted-foreground/50 hover:text-primary/70 transition-colors cursor-default select-none"
            >
              {tech}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
