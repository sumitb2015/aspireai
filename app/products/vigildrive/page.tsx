import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  CheckCircle2, 
  Eye, 
  Zap, 
  AlertTriangle, 
  BarChart3, 
  LayoutDashboard, 
  Cloud, 
  Activity, 
  Camera, 
  Cpu, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  Smartphone, 
  Package, 
  ShieldCheck, 
  Database,
  Truck,
  Bus,
  Car
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VigilDrive | AI Driver Fatigue & Safety Monitoring",
  description: "Computer vision SaaS detecting drowsiness, distraction & impairment for commercial fleets, buses & taxis.",
};

const MARKET_STATS = [
  { label: "Global ADAS Market", value: "$63B", sub: "by 2030, 10% CAGR", icon: Globe },
  { label: "India Fleet Vehicles", value: "5M+", sub: "Commercial + Buses", icon: Truck },
  { label: "Fatigue Accidents", value: "20–30%", sub: "Of road fatalities", icon: AlertTriangle },
  { label: "India TAM (Fleet)", value: "₹1,200Cr", sub: "Est. SaaS potential", icon: TrendingUp }
];

const CAPABILITIES = [
  {
    title: "Drowsiness Detection",
    icon: Eye,
    items: [
      "Eye aspect ratio (EAR) tracking",
      "PERCLOS (% eye closure) metrics",
      "Head nodding / micro-sleep detection",
      "Yawning frequency analysis"
    ]
  },
  {
    title: "Distraction Monitoring",
    icon: AlertTriangle,
    items: [
      "Head pose / gaze deviation",
      "Mobile phone & object detection",
      "Smoking & eating detection",
      "Hands-off-wheel alerts"
    ]
  },
  {
    title: "Impairment Analysis",
    icon: Activity,
    items: [
      "Micro-expression fatigue mapping",
      "Erratic steering patterns (OBD)",
      "Abnormal blinking frequency",
      "Pupil dilation tracking (IR)"
    ]
  }
];

const TECH_STACK = [
  { 
    title: "Vision & Inference", 
    icon: Camera, 
    items: ["YOLOv8 / MediaPipe", "OpenCV / dlib landmarks", "TensorRT optimization"] 
  },
  { 
    title: "Edge Hardware", 
    icon: Cpu, 
    items: ["NVIDIA Jetson Nano", "Raspberry Pi 5", "Dashcam SDK Integration"] 
  },
  { 
    title: "Backend / Cloud", 
    icon: Cloud, 
    items: ["FastAPI / Python", "AWS IoT Core", "PostgreSQL / Redis"] 
  },
  { 
    title: "Fleet Dashboard", 
    icon: LayoutDashboard, 
    items: ["React / Next.js", "Real-time MQTT alerts", "Automated Trip Reports"] 
  }
];

const PRICING = [
  {
    name: "Starter",
    target: "Taxis & Autos",
    price: "₹800",
    unit: "/mo",
    desc: "Software-only (Smartphone)",
    features: [
      "Uses smartphone camera",
      "Real-time audio alerts",
      "Basic trip history",
      "Standard support"
    ],
    icon: Car
  },
  {
    name: "Pro",
    target: "Buses & Trucks",
    price: "₹2,500",
    unit: "/mo",
    desc: "IR Camera Kit + SaaS",
    features: [
      "IR Night-vision hardware",
      "Full driver behavioral logs",
      "Manager dashboard access",
      "Priority fleet support"
    ],
    popular: true,
    icon: Truck
  },
  {
    name: "Enterprise",
    target: "Fleet Operations",
    price: "Custom",
    unit: "Quote",
    desc: "Hardware + API + Reports",
    features: [
      "Custom API integrations",
      "Compliance/Regulatory reports",
      "On-premise hosting option",
      "Dedicated account manager"
    ],
    icon: Package
  }
];

const REGULATORY = [
  { 
    title: "MORTH AIS-140+ Amendment", 
    desc: "Mandates driver behavior monitoring for stage carriages — buses already in scope." 
  },
  { 
    title: "Motor Vehicles Act 2019", 
    desc: "Stricter penalties for negligent driving — fleets proactively looking for compliance tools." 
  },
  { 
    title: "Insurance Incentives", 
    desc: "IRDAI telematics-linked premiums — safety monitoring directly reduces fleet insurance costs." 
  },
  { 
    title: "Smart City Mission", 
    desc: "Urban bus fleet modernization across 100 cities — large-scale procurement cycles opening." 
  },
  { 
    title: "National Road Safety Policy", 
    desc: "Target: 50% reduction in fatalities by 2030 — creating massive institutional buyer demand." 
  },
  { 
    title: "Global Export (EU/GCC)", 
    desc: "Stricter DMS mandates in EU (UNECE R158) — our SaaS is ready for global certification." 
  }
];

export default function VigilDrivePage() {
  const product = PRODUCTS.find(p => p.id === "vigildrive")!;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <Badge className="px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold uppercase tracking-widest mb-6">
            Computer Vision SaaS
          </Badge>
          <h1 className="text-4xl md:text-7xl font-syne font-extrabold mb-6 tracking-tighter">
            Driver Fatigue & <br /> <span className="text-red-500">Safety Monitoring</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed mb-10">
            Computer vision SaaS detecting drowsiness, distraction & impairment. Built for commercial fleets, buses & taxis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-full px-10 h-14 text-lg shadow-lg shadow-red-500/20">
                Deploy for Your Fleet
              </Button>
            </Link>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {MARKET_STATS.map((stat, i) => (
            <Card key={i} className="p-8 border-white/5 bg-slate-50 dark:bg-white/5 backdrop-blur-sm text-center group hover:border-red-500/30 transition-all duration-300">
              <stat.icon className="mx-auto mb-4 text-red-500 opacity-80 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-4xl font-syne font-extrabold text-foreground mb-2">{stat.value}</h3>
              <p className="font-bold text-sm text-foreground/80 mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sub}</p>
            </Card>
          ))}
        </div>

        {/* Vision Area Mockup */}
        <div className="relative mb-32 max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 aspect-video shadow-2xl shadow-red-500/20 group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
              style={{ backgroundImage: 'url("/dms.png")' }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* AI HUD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-8 md:p-12">
                   <div className="absolute top-8 left-8 flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]" />
                      <span className="text-white font-mono text-xs md:text-sm tracking-[0.3em] font-bold drop-shadow-md">LIVE HD · DMS_SYSTEM</span>
                   </div>

                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-56 h-72 md:w-72 md:h-96 border-2 border-red-500/30 rounded-[3.5rem] hidden md:block backdrop-blur-[0.5px]">
                      <div className="absolute top-[32%] left-[28%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444] z-20" />
                      <div className="absolute top-[32%] right-[28%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444] z-20" />
                      <div className="absolute inset-0 overflow-hidden rounded-[3.5rem]">
                         <div className="w-full h-1 bg-red-500/40 absolute top-0 animate-scan shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                      </div>
                   </div>

                   {/* Corner UI Elements */}
                   <div className="absolute top-24 left-8 flex flex-col gap-4">
                      <div className="p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 w-44 md:w-52">
                         <p className="text-[10px] font-mono text-white/70 uppercase mb-1 tracking-widest">Fatigue Risk</p>
                         <p className="text-xl md:text-2xl font-mono text-green-400 font-bold">LOW</p>
                      </div>
                      <div className="p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 w-44 md:w-52">
                         <p className="text-[10px] font-mono text-white/70 uppercase mb-1 tracking-widest">Attention</p>
                         <p className="text-xl md:text-2xl font-mono text-white font-bold">100%</p>
                      </div>
                   </div>

                   <div className="absolute top-8 right-8 flex flex-col items-end gap-4">
                      <div className="p-4 rounded-xl bg-emerald-500/80 text-white shadow-xl border border-white/20 text-right">
                         <p className="text-[10px] font-mono text-white/90 uppercase mb-1 tracking-widest">Status</p>
                         <p className="text-lg md:text-xl font-mono text-white font-bold uppercase">Safe Driving</p>
                      </div>
                   </div>

                   {/* Bottom UI - Telemetry */}
                   <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-4">
                         <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
                            <Activity size={20} />
                         </div>
                         <div>
                            <p className="text-[10px] font-mono text-white/70 uppercase tracking-tighter">Biometrics</p>
                            <p className="text-lg font-mono text-white font-bold">74 BPM</p>
                         </div>
                      </div>
                      
                      <div className="text-right p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20">
                         <p className="text-[10px] font-mono text-white/70 uppercase mb-1 tracking-widest">Trip Duration</p>
                         <p className="text-xl md:text-2xl font-mono text-white font-bold tracking-widest">01:14:22</p>
                      </div>
                   </div>
                </div>
            </div>

            {/* Viewfinder corners */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/50" />
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/50" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/50" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/50" />
        </div>

        {/* Detection Capabilities */}
        <SectionHeading 
          heading="Intelligent Detection Capabilities"
          subheading="Multi-modal vision analysis tracking 20+ behavioral parameters in real-time."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {CAPABILITIES.map((cap) => (
            <Card key={cap.title} className="p-8 border-white/5 bg-slate-50 dark:bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 w-fit">
                  <cap.icon size={24} />
                </div>
                <h3 className="text-2xl font-syne font-bold">{cap.title}</h3>
              </div>
              <ul className="space-y-4">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Technical Stack */}
        <SectionHeading 
          heading="Edge-to-Cloud Technical Stack"
          subheading="High-performance architecture optimized for sub-millisecond local inference."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {TECH_STACK.map((tech) => (
            <Card key={tech.title} className="p-6">
              <tech.icon className="text-primary mb-4" size={28} />
              <h3 className="font-bold text-lg mb-4">{tech.title}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground border border-border/50">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Regulatory Tailwinds */}
        <div className="mb-32">
          <div className="bg-red-50 dark:bg-white/5 p-12 md:p-16 rounded-[3rem] border border-red-100 dark:border-white/10">
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-10 text-center">Regulatory Adoption Tailwinds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {REGULATORY.map((reg, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-black/5 dark:border-white/5 group hover:border-red-500/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                      <BookOpen size={18} />
                    </div>
                    <h4 className="font-bold text-base leading-tight">{reg.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Model (Pricing) */}
        <SectionHeading 
          heading="SaaS + Hardware Business Model"
          subheading="Flexible pricing tiers designed for individual operators to massive enterprises."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {PRICING.map((tier) => (
            <Card key={tier.name} className={`relative flex flex-col p-8 ${tier.popular ? 'border-red-500 shadow-xl shadow-red-500/10 scale-105 z-10' : 'bg-slate-50 dark:bg-white/5 border-white/5'}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-0 mb-6 text-center">
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${tier.popular ? 'bg-red-500 text-white' : 'bg-muted text-muted-foreground'}`}>
                   <tier.icon size={28} />
                </div>
                <CardTitle className="text-2xl font-syne font-bold mb-2">{tier.name}</CardTitle>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{tier.target}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow text-center">
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground font-medium ml-1">{tier.unit}</span>
                </div>
                <Badge variant="outline" className="mb-8 font-bold border-red-500/30 text-red-500">{tier.desc}</Badge>
                <ul className="space-y-4 text-left">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-red-500 shrink-0" size={16} />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0 mt-10">
                <Link href="/contact" className="w-full">
                  <Button className={`w-full rounded-xl py-6 ${tier.popular ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20' : ''}`} variant={tier.popular ? 'default' : 'outline'}>
                    Choose {tier.name}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-syne font-bold mb-8 tracking-tight">Why Choose VigilDrive?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Unlike basic monitoring systems, VigilDrive combines real-time computer vision with predictive analytics to deliver a complete driver safety ecosystem. It not only detects risks but helps businesses prevent them through intelligent insights and continuous learning.
            </p>
            <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-red-500 to-red-600 text-white shadow-2xl shadow-red-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-6xl font-syne font-extrabold mb-6 tracking-tight italic">“Smarter driving. <br className="md:hidden" /> Safer roads.”</h3>
                    <p className="text-white/80 mb-10 text-xl max-w-2xl mx-auto">Make every journey safer with AI-driven intelligence. Deploy VigilDrive today.</p>
                    <Link href="/contact">
                       <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 font-bold px-12 h-16 rounded-full text-lg shadow-xl border-none">
                          Get in Touch with AspireAI
                       </Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
