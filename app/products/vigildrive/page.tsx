import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Eye, Zap, AlertTriangle, BarChart3, LayoutDashboard, Cloud, ShieldCheck, Activity } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VigilDrive | AI Driver Safety System",
  description: "Advanced computer vision-powered driver monitoring system for fatigue and distraction detection.",
};

const FEATURES = [
  { title: "Real-Time Fatigue Detection", description: "Identifies drowsiness through eye closure rate, blinking patterns, and head position.", icon: Eye },
  { title: "Distraction Monitoring", description: "Detects mobile phone usage, gaze deviation, and inattentive driving.", icon: AlertTriangle },
  { title: "AI-Powered Alerts", description: "Instant audio and visual alerts to drivers, reducing reaction time and preventing accidents.", icon: Zap },
  { title: "Driver Behavior Analytics", description: "Tracks driving patterns and provides actionable insights for training and improvement.", icon: BarChart3 },
  { title: "Cloud Dashboard & Reports", description: "Centralized dashboard for fleet managers with real-time monitoring and safety reports.", icon: LayoutDashboard },
  { title: "Edge + Cloud Processing", description: "Works reliably even in low connectivity environments with on-device AI support.", icon: Cloud },
];

export default function VigilDrivePage() {
  const product = PRODUCTS.find(p => p.id === "vigildrive")!;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="px-4 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold uppercase tracking-widest mb-6">
            Enterprise Solution
          </span>
          <h1 className="text-4xl md:text-7xl font-syne font-extrabold mb-6 tracking-tighter">
            Intelligent Driver Safety & <br /> <span className="text-red-500">Fatigue Monitoring</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed">
            VigilDrive is an advanced computer vision–powered driver monitoring system designed to enhance road safety, reduce accidents, and improve fleet efficiency.
          </p>
          <div className="mt-10">
            <a href="/contact">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-full px-10 h-14 text-lg">
                Deploy for Your Fleet
              </Button>
            </a>
          </div>
        </div>

        {/* Vision Area Mockup */}
        <div className="relative mb-32 max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-slate-950 border border-white/10 aspect-video shadow-2xl shadow-red-500/10 group">
            {/* Background Image - Direct Frontal Face for AI Monitoring */}
            <div 
              className="absolute inset-0 bg-cover bg-[center_top] transition-transform duration-1000 group-hover:scale-110" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000")' }}
            >
              {/* Camera Feed Effect Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
              <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* AI HUD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-8 md:p-12">
                   {/* Camera Labels */}
                   <div className="absolute top-8 left-8 flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white font-mono text-sm tracking-[0.3em] font-bold">LIVE FEED · CAM_01</span>
                   </div>

                   {/* Face Mesh / Points Overlay (Simulated) */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-64 h-80 border border-red-500/40 rounded-[3rem] hidden md:block">
                      {/* Tracking Points - Eyes and Mouth */}
                      <div className="absolute top-[35%] left-[25%] w-1.5 h-1.5 bg-red-400 rounded-full shadow-[0_0_10px_#f87171]" />
                      <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-red-400 rounded-full shadow-[0_0_10px_#f87171]" />
                      <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-4 h-1 border-b border-red-400 rounded-full" />
                      
                      {/* Scanning Line */}
                      <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                         <div className="w-full h-1 bg-red-500/20 absolute top-0 animate-scan shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                      </div>

                      {/* AI Bounding Box Labels */}
                      <div className="absolute -top-6 left-0 bg-red-500 text-white text-[10px] font-mono px-2 py-0.5 rounded-t-md uppercase tracking-widest font-bold">
                         Subject Identified
                      </div>
                   </div>

                   {/* Corner UI Elements */}
                   <div className="absolute top-24 left-8 flex flex-col gap-4">
                      <div className="p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 w-48">
                         <p className="text-[10px] font-mono text-white/50 uppercase mb-1 tracking-widest">Fatigue Score</p>
                         <p className="text-xl font-mono text-green-400 font-bold">0.12 <span className="text-[10px] font-normal ml-1">SAFE</span></p>
                         <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[12%]" />
                         </div>
                      </div>
                      <div className="p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 w-48">
                         <p className="text-[10px] font-mono text-white/50 uppercase mb-1 tracking-widest">Attention</p>
                         <p className="text-xl font-mono text-white font-bold">98.4%</p>
                      </div>
                   </div>

                   <div className="absolute top-8 right-8 flex flex-col items-end gap-4">
                      <div className="p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-right">
                         <p className="text-[10px] font-mono text-white/50 uppercase mb-1 tracking-widest">Processing</p>
                         <div className="flex items-center gap-2 justify-end">
                            <p className="text-sm font-mono text-white font-bold">EDGE AI ACTIVATED</p>
                         </div>
                      </div>
                      <div className="p-4 rounded-xl bg-red-500/20 backdrop-blur-md border border-red-500/30 text-right">
                         <p className="text-[10px] font-mono text-red-200 uppercase mb-1 tracking-widest">Alert Status</p>
                         <p className="text-xl font-mono text-blue-400 font-bold uppercase">NO RISKS</p>
                      </div>
                   </div>

                   {/* Bottom UI - Telemetry */}
                   <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="flex gap-4">
                         <div className="p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
                               <Activity size={20} />
                            </div>
                            <div>
                               <p className="text-[10px] font-mono text-white/50 uppercase tracking-tighter">Heart Rate</p>
                               <p className="text-lg font-mono text-white font-bold">68 BPM</p>
                            </div>
                         </div>
                      </div>
                      
                      <div className="text-right">
                         <p className="text-[10px] font-mono text-white/50 uppercase mb-1">Session Duration</p>
                         <p className="text-2xl font-mono text-white font-bold tracking-widest">04:22:15</p>
                      </div>
                   </div>
                </div>
            </div>

            {/* Viewfinder Corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30" />
        </div>

        <SectionHeading 
          heading="Prevent Accidents with Real-time AI"
          subheading="Built for commercial fleets, logistics, and public transport to transform safety into proactive intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="p-8 border-white/5 bg-slate-50 dark:bg-white/5 backdrop-blur-sm hover:border-red-500/30 transition-colors">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-500 w-fit mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-syne font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-32">
          <div className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] border border-white/10">
            <h2 className="text-3xl font-syne font-bold mb-8">Key Benefits</h2>
            <div className="flex flex-col gap-6">
              {[
                "Reduce accident rates and operational risks",
                "Improve driver accountability and performance",
                "Lower insurance and maintenance costs",
                "Ensure compliance with safety regulations",
                "Enhance brand trust and passenger safety"
              ].map(item => (
                <div key={item} className="flex gap-4">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-1" size={20} />
                  <p className="text-lg text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-50 dark:bg-white/5 p-12 md:p-16 rounded-[3rem] border border-red-100 dark:border-white/10">
             <h3 className="text-3xl font-syne font-bold mb-8">Industry Use Cases</h3>
             <ul className="space-y-6">
                {[
                    { title: "Logistics & Delivery Fleets", icon: "🚚" },
                    { title: "Public Transportation (Buses)", icon: "🚌" },
                    { title: "Taxi & Ride-Sharing Services", icon: "🚕" },
                    { title: "Mining & Industrial Vehicles", icon: "🚜" }
                ].map(useCase => (
                    <li key={useCase.title} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-black/5 dark:border-white/5">
                        <span className="text-3xl">{useCase.icon}</span>
                        <span className="text-lg font-medium">{useCase.title}</span>
                    </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="mt-32 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-syne font-bold mb-8">Why Choose VigilDrive?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Unlike basic monitoring systems, VigilDrive combines real-time computer vision with predictive analytics to deliver a complete driver safety ecosystem. It not only detects risks but helps businesses prevent them through intelligent insights and continuous learning.
            </p>
            <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-red-500 to-red-600 text-white shadow-2xl shadow-red-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-syne font-extrabold mb-6 tracking-tight italic">“Smarter driving. Safer roads.”</h3>
                    <p className="text-white/80 mb-10 text-xl max-w-2xl mx-auto">Make every journey safer with AI-driven intelligence. Deploy VigilDrive today.</p>
                    <a href="/contact">
                       <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 font-bold px-12 h-16 rounded-full text-lg">
                          Get in Touch with Aspire AI
                       </Button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
