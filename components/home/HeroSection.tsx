"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="hero-blob top-0 -left-20 bg-blue-500/10" />
      <div className="hero-blob bottom-0 -right-20 bg-indigo-500/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles size={14} /> Built for the Indian AI Frontier
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-h1 font-syne font-extrabold mb-8 tracking-tight max-w-5xl"
          >
            Where Intelligence Meets <span className="text-primary italic">Possibility.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            AspireAI Solutions delivers production-ready AI products for Indian markets. From fintech analytics to career optimization, we bridge the gap between LLM potential and real-world value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/products">
              <Button size="lg" className="rounded-full">
                Explore Products <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full">
                Schedule a Demo
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "OI Alpha",
                desc: "Institutional-grade options analytics for the Indian derivatives market.",
                icon: <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-xs">OI</div>,
                tag: "Live Now"
              },
              {
                title: "BespokeCV",
                desc: "AI-powered resume optimization built specifically for Indian tech talent.",
                icon: <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xs">CV</div>,
                tag: "Popular"
              },
              {
                title: "Enterprise AI",
                desc: "Custom LLM fine-tuning and autonomous agents for business scale.",
                icon: <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs">EA</div>,
                tag: "Solutions"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="group p-8 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   {item.icon}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">{item.tag}</div>
                <h3 className="text-xl font-syne font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
