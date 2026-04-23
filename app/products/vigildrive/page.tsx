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
            {/* Background Image - Driver in Car Seat with Full Face Focus */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593414220166-085ca8023465?auto=format&fit=crop&q=80&w=2000")' }}
            >
              {/* Camera Feed Effect Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
              <div className="absolute inset-0 bg-red-900/5 mix-blend-overlay" />
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* AI HUD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-8 md:p-12">
                   {/* Camera Labels */}
                   <div className="absolute top-8 left-8 flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]" />
                      <span className="text-white font-mono text-xs md:text-sm tracking-[0.3em] font-bold">LIVE FEED · CAM_01</span>
                   </div>

                   {/* Face Mesh / Points Overlay (Simulated) */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-64 md:h-80 border-2 border-red-500/30 rounded-[3rem] hidden md:block">
                      {/* Tracking Points - Eyes, Nose, Mouth */}
                      <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_#f87171] opacity-80" />
                      <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_#f87171] opacity-80" />
                      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400/60 rounded-full" />
                      <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-10 h-2 border-b-2 border-red-400/40 rounded-full" />
                      
                      {/* Scanning Line */}
                      <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                         <div className="w-full h-1.5 bg-red-500/40 absolute top-0 animate-scan shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
                      </div>

                      {/* AI Bounding Box Label */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-mono px-3 py-1 rounded-full uppercase tracking-widest font-bold whitespace-nowrap">
                         Driver Detected · Verified
                      </div>
                   </div>

                   {/* Corner UI Elements */}
                   <div className="absolute top-20 left-8 flex flex-col gap-4">
                      <div className="p-4 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10 w-40 md:w-48">
                         <p className="text-[9px] font-mono text-white/50 uppercase mb-1 tracking-widest">Fatigue Level</p>
                         <p className="text-lg md:text-xl font-mono text-green-400 font-bold">0.08 <span className="text-[9px] font-normal ml-1">NORMAL</span></p>
                         <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[8%]" />
                         </div>
                      </div>
                      <div className="p-4 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10 w-40 md:w-48">
                         <p className="text-[9px] font-mono text-white/50 uppercase mb-1 tracking-widest">Gaze Attention</p>
                         <p className="text-lg md:text-xl font-mono text-white font-bold">99.1%</p>
                      </div>
                   </div>

                   <div className="absolute top-8 right-8 flex flex-col items-end gap-4">
                      <div className="hidden md:block p-4 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10 text-right">
                         <p className="text-[9px] font-mono text-white/50 uppercase mb-1 tracking-widest">Network</p>
                         <div className="flex items-center gap-2 justify-end">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <p className="text-xs font-mono text-white font-bold tracking-wider">CLOUD UPLINK OK</p>
                         </div>
                      </div>
                      <div className="p-4 rounded-xl bg-red-600 text-white shadow-lg shadow-red-900/40 border border-white/10 text-right">
                         <p className="text-[9px] font-mono text-white/70 uppercase mb-1 tracking-widest">Safety Mode</p>
                         <p className="text-lg md:text-xl font-mono text-white font-bold uppercase tracking-tighter">Protected</p>
                      </div>
                   </div>

                   {/* Bottom UI - Telemetry */}
                   <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="flex gap-4">
                         <div className="p-3 md:p-4 rounded-2xl bg-black/70 backdrop-blur-lg border border-white/10 flex items-center gap-3 md:gap-4">
                            <div className="p-1.5 md:p-2 rounded-lg bg-red-500/20 text-red-500">
                               <Activity size={18} />
                            </div>
                            <div>
                               <p className="text-[9px] font-mono text-white/50 uppercase tracking-tighter">Biometric</p>
                               <p className="text-sm md:text-lg font-mono text-white font-bold">71 BPM</p>
                            </div>
                         </div>
                      </div>
                      
                      <div className="text-right hidden sm:block">
                         <p className="text-[9px] font-mono text-white/50 uppercase mb-1 tracking-widest">Active Session</p>
                         <p className="text-xl md:text-2xl font-mono text-white font-bold tracking-widest">02:45:12</p>
                      </div>
                   </div>
                </div>
            </div>

            {/* Viewfinder Corners */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-white/40" />
            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-white/40" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-white/40" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-white/40" />
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
