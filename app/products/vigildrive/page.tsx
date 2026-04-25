import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
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
  Car,
  Volume2,
  Maximize2,
  MousePointer2,
  Layers,
  Search,
  Wrench,
  BellRing,
  Star
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VigilDrive | AI Driver Safety & Fatigue Monitoring System India",
  description: "Advanced AI Driver Monitoring System (DMS). Detect driver fatigue, distraction, and drowsiness in real-time with our computer vision hardware. Best fleet safety solution in India.",
  keywords: [
    "Driver Monitoring System India",
    "AI Driver Safety",
    "Driver Fatigue Detection",
    "DMS System India",
    "Fleet Safety Technology",
    "VigilDrive",
    "AspireAI",
    "Anti-sleep alarm for drivers",
    "ADAS systems India",
    "Computer Vision Driver Safety"
  ],
  openGraph: {
    title: "VigilDrive | AI-Powered Driver Monitoring System",
    description: "Advanced computer vision technology for real-time driver fatigue, distraction, and safety monitoring. Professional-grade hardware for fleet safety.",
    url: "https://aspireaisolutions.com/products/vigildrive",
    siteName: "AspireAI Solutions",
    images: [
      {
        url: "/vigil1.png",
        width: 1200,
        height: 630,
        alt: "VigilDrive AI Safety System",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VigilDrive | AI Driver Safety & Fatigue Monitoring",
    description: "Real-time AI detection of driver drowsiness and distraction. Protect your fleet with VigilDrive.",
    images: ["/vigil1.png"],
  },
};

const MARKET_STATS = [
  { label: "Global ADAS Market", value: "$63B", sub: "by 2030, 10% CAGR", icon: Globe },
  { label: "Commercial Fleets", value: "10M+", sub: "In India alone", icon: Truck },
  { label: "Accident Reduction", value: "40%", sub: "With active DMS", icon: ShieldCheck },
  { label: "Safety Compliance", value: "100%", sub: "Regulatory ready", icon: CheckCircle2 }
];

const CORE_TECHNOLOGY = [
  {
    title: "Pupil Identification v2.0",
    description: "State-of-the-art pupil detection and recognition technology that identifies signs of fatigue before they become critical.",
    icon: Eye
  },
  {
    title: "Facial Feature Mapping",
    description: "Real-time 3D face mapping to monitor driver state, head pose, and attention levels with real-time, frame-level inference at the edge.",
    icon: Camera
  },
  {
    title: "PERCLOS Analytics",
    description: "Advanced analysis of blinking patterns and Percentage of Eye Closure to accurately assess physiological drowsiness.",
    icon: Activity
  }
];

const FEATURES = [
  {
    title: "Real-time AI Alerts",
    icon: Volume2,
    items: [
      "Immediate audible warnings upon fatigue",
      "Progressive alert intensity based on risk",
      "Multi-modal feedback (Visual + Audio)",
      "Zero-latency edge processing"
    ]
  },
  {
    title: "Enterprise Hardware",
    icon: Cpu,
    items: [
      "Compact automotive-grade design",
      "2-second instant calibration",
      "High-precision IR night vision",
      "Robust mounting for all cabin types"
    ]
  },
  {
    title: "Fleet Dashboard",
    icon: LayoutDashboard,
    items: [
      "Centralized behavior analytics",
      "Safety event logging and video clips",
      "Predictive risk scoring for drivers",
      "Seamless API integration for TMS"
    ]
  }
];

const HARDWARE_SPECS = [
  { label: "Optics", value: "Wide-angle IR Lens" },
  { label: "Processing", value: "Embedded Neural Engine" },
  { label: "Vision", value: "Day & Night (Full IR)" },
  { label: "Connectivity", value: "LTE / Wi-Fi / RS232" },
  { label: "Calibration", value: "Fully Automatic" },
  { label: "Power", value: "9V - 36V Wide Input" }
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Simple Install",
    description: "Plug-and-play hardware setup. Mounts in minutes to any vehicle cabin with automotive-grade stability.",
    icon: Wrench
  },
  {
    step: "02",
    title: "AI Detection",
    description: "Advanced neural engine monitors driver state in real-time, detecting even subtle micro-sleep and distraction events.",
    icon: Eye
  },
  {
    step: "03",
    title: "Alert & Report",
    description: "Immediate in-cabin audible alerts prevent accidents, while events are logged to the fleet dashboard for review.",
    icon: BellRing
  }
];

const TESTIMONIAL = {
  quote: "Since deploying VigilDrive in our long-haul fleet, we've seen a dramatic reduction in critical fatigue events. The real-time alerts are a game-changer for our drivers' safety and our operational peace of mind.",
  author: "Operations Head, National Logistics Partner",
  rating: 5
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Simple Install",
    description: "Plug-and-play hardware setup. Mounts in minutes to any vehicle cabin with automotive-grade stability.",
    icon: Wrench
  },
  {
    step: "02",
    title: "AI Detection",
    description: "Advanced neural engine monitors driver state in real-time, detecting even subtle micro-sleep and distraction events.",
    icon: Eye
  },
  {
    step: "03",
    title: "Alert & Report",
    description: "Immediate in-cabin audible alerts prevent accidents, while events are logged to the fleet dashboard for review.",
    icon: BellRing
  }
];

const TESTIMONIAL = {
  quote: "Since deploying VigilDrive in our long-haul fleet, we've seen a dramatic reduction in critical fatigue events. The real-time alerts are a game-changer for our drivers' safety and our operational peace of mind.",
  author: "Operations Head, National Logistics Partner",
  rating: 5
};

const PRICING = [
  {
    name: "Professional",
    target: "Individual/Small Fleets",
    price: "₹9,999",
    unit: "per unit",
    desc: "Single Device + Local Alerts",
    features: [
      "VigilDrive Hardware Unit",
      "Real-time audio alerts",
      "Suction cup mount included",
      "Standard 1-year warranty",
      "Mobile App integration"
    ],
    icon: Car
  },
  {
    name: "Enterprise Fleet",
    target: "Logistics & Transport",
    price: "Contact",
    unit: "Sales",
    desc: "Hardware + Cloud SaaS",
    features: [
      "Advanced IR Night-vision unit",
      "Centralized Cloud Dashboard",
      "Real-time event uploads",
      "Behavioral analytics reports",
      "Dedicated Support Manager"
    ],
    popular: true,
    icon: Truck
  },
  {
    name: "Custom OEM",
    target: "Vehicle Manufacturers",
    price: "Custom",
    unit: "Quote",
    desc: "Software Licensing + API",
    features: [
      "Source code licensing option",
      "Custom algorithm tuning",
      "Embedded system porting",
      "Hardware reference design",
      "Full API/SDK access"
    ],
    icon: Layers
  }
];

export default function VigilDrivePage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge className="px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold uppercase tracking-widest">
              Safety Intelligence for the Modern Road
            </Badge>
            <Badge className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest">
              AIS-140 Compatible
            </Badge>
          </div>
          <h1 className="text-4xl md:text-7xl font-syne font-extrabold mb-6 tracking-tighter">
            VigilDrive: Advanced <br /> <span className="text-red-500 text-glow-red">Driver Monitoring</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed mb-10">
            Harnessing proprietary computer vision technology to detect fatigue and distraction in real-time. Protect your drivers, your cargo, and your bottom line with VigilDrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <Link href="/contact">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-full px-10 h-14 text-lg shadow-lg shadow-red-500/20 transition-all hover:scale-105">
                Book a Demo
              </Button>
            </Link>
            <Link href="#tech">
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-white/10 hover:bg-white/5 transition-all">
                The Technology
              </Button>
            </Link>
          </div>

          {/* Main Product Image (vigil1.png) */}
          <div className="relative w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
             <Image 
                src="/vigil1.png" 
                alt="VigilDrive Product Showcase" 
                width={1200} 
                height={675}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
             
             {/* HUD Overlay Elements */}
             <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]" />
                <span className="text-white font-mono text-[10px] tracking-[0.4em] font-bold">SYSTEM_ACTIVE // EYE_TRACK_V2</span>
             </div>
          </div>
        </div>

        {/* Market Relevance */}
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

        {/* Tech Showcase (vigil2.png) */}
        <div id="tech" className="mb-32">
          <SectionHeading 
            heading="Intelligence on the Edge"
            subheading="VigilDrive doesn't just record—it understands. Our neural engine processes every frame locally to ensure instant intervention."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <div className="space-y-8">
                {CORE_TECHNOLOGY.map((tech, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 p-4 rounded-2xl bg-red-500/10 text-red-500 h-fit group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      <tech.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-syne font-bold mb-2">{tech.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
             <div className="flex flex-col gap-6">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
                   <Image 
                      src="/vigil2.png" 
                      alt="VigilDrive Technical Analysis" 
                      width={800} 
                      height={600}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay" />
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-white/10">
                   <div className="flex items-center gap-3 mb-2">
                      <Search className="text-red-500" size={16} />
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">Inference Engine Analysis</p>
                   </div>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                      Our proprietary neural engine detects abnormal eye-closure patterns and fatigue triggers with industry-leading accuracy across varied lighting and demographics.
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mb-32">
          <SectionHeading 
            heading="How VigilDrive Works"
            subheading="A simple 3-step process designed to keep your fleet safe and your operations compliant."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-white/10 group hover:border-red-500/30 transition-all duration-300">
                <div className="absolute top-6 right-8 text-4xl font-syne font-black text-foreground/5 group-hover:text-red-500/10 transition-colors">
                  {item.step}
                </div>
                <div className="p-4 rounded-2xl bg-red-500/10 text-red-500 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-syne font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-32">
          <SectionHeading 
            heading="Engineered for Reliability"
            subheading="From the rugged hardware to the cloud analytics platform, every component is built for mission-critical safety."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feat, i) => (
              <Card key={i} className="p-8 border-white/5 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-500">
                    <feat.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-syne font-bold">{feat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {feat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="text-red-500 shrink-0 mt-1" size={16} />
                      <span className="text-muted-foreground text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Hardware in Action (vigil3.png) */}
        <div className="mb-32 relative">
            <div className="absolute inset-0 bg-red-500/5 blur-[120px] rounded-full -z-10" />
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Badge className="bg-red-500 text-white mb-6 uppercase tracking-widest font-bold">Form & Function</Badge>
                        <h2 className="text-4xl md:text-5xl font-syne font-extrabold mb-8 text-white">Precision Hardware <br /> for <span className="text-red-500 italic">Global</span> Standards</h2>
                        <p className="text-white/60 text-lg mb-12 leading-relaxed">
                            VigilDrive's hardware is designed to be unobtrusive yet exceptionally powerful. Its industrial-grade IR illuminators ensure perfect performance even in total darkness, while the rugged casing withstands extreme cabin temperatures.
                        </p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                            {HARDWARE_SPECS.map((spec, i) => (
                                <div key={i} className="border-l-2 border-red-500/50 pl-4">
                                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">{spec.label}</p>
                                    <p className="text-lg font-bold text-white">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-3xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
                           <Image 
                              src="/vigil3.png" 
                              alt="VigilDrive Hardware Installation" 
                              width={700} 
                              height={700}
                              className="w-full h-auto"
                           />
                           <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent pointer-events-none" />
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-white/10">
                           <p className="font-bold text-sm mb-1 text-foreground">Ultra-Compact Design</p>
                           <p className="text-xs text-muted-foreground leading-relaxed">Optimized for minimal field-of-view obstruction while maintaining maximum sensor coverage for diverse cabin architectures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Holistic Perspective (Original Hero dms.png) */}
        <div className="mb-32">
          <SectionHeading 
            heading="The Holistic Perspective"
            subheading="Experience the full scope of our intelligent monitoring system through a unified driver-centric view."
          />
          <div className="relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 aspect-video shadow-2xl shadow-red-500/10 group">
              <Image 
                src="/dms.png" 
                alt="VigilDrive Full System Perspective" 
                fill
                className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* AI HUD Overlay (Restored and refined) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full p-8 md:p-12">
                    {/* Scanning Indicator */}
                    <div className="absolute top-8 left-8 flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_#ef4444]" />
                        <span className="text-white font-mono text-xs tracking-[0.4em] font-bold drop-shadow-md">LIVE_FEED // ANALYSIS_ACTIVE</span>
                    </div>

                    {/* Face Frame */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-64 h-80 md:w-80 md:h-[28rem] border-2 border-red-500/30 rounded-[4rem] hidden md:block backdrop-blur-[1px]">
                        <div className="absolute top-[30%] left-[25%] w-3 h-3 border-t-2 border-l-2 border-red-500/60 z-20" />
                        <div className="absolute top-[30%] right-[25%] w-3 h-3 border-t-2 border-r-2 border-red-500/60 z-20" />
                        <div className="absolute inset-0 overflow-hidden rounded-[4rem]">
                          <div className="w-full h-1 bg-red-500/40 absolute top-0 animate-scan shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                        </div>
                    </div>

                    {/* Telemetry Labels */}
                    <div className="absolute bottom-12 left-12 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                            <p className="text-[8px] font-mono text-red-400 uppercase tracking-widest mb-1">Attention Level</p>
                            <p className="text-lg font-mono text-white font-bold">OPTIMAL</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                            <p className="text-[8px] font-mono text-red-400 uppercase tracking-widest mb-1">Distraction Risk</p>
                            <p className="text-lg font-mono text-white font-bold">LOW</p>
                        </div>
                    </div>

                    <div className="absolute top-12 right-12">
                        <div className="flex flex-col items-end gap-2">
                           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40 backdrop-blur-sm">
                              <Activity size={14} className="text-red-500 animate-pulse" />
                              <span className="text-[10px] font-mono text-white font-bold uppercase tracking-tight">Real-time Processing</span>
                           </div>
                        </div>
                    </div>
                  </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20 rounded-tl-2xl" />
              <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20 rounded-tr-2xl" />
              <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/20 rounded-bl-2xl" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20 rounded-br-2xl" />
          </div>
        </div>

        {/* Business Models */}
        <SectionHeading 
          heading="Scalable Safety Solutions"
          subheading="Whether you operate a single vehicle or a national logistics network, VigilDrive has a deployment model for you."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {PRICING.map((tier) => (
            <Card key={tier.name} className={`relative flex flex-col p-8 transition-all hover:translate-y-[-8px] ${tier.popular ? 'border-red-500 shadow-2xl shadow-red-500/10 scale-105 z-10 bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-white/5 border-white/5'}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg shadow-red-500/20">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-0 mb-8 text-center">
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${tier.popular ? 'bg-red-500 text-white shadow-xl shadow-red-500/20' : 'bg-muted text-muted-foreground'}`}>
                   <tier.icon size={32} />
                </div>
                <CardTitle className="text-2xl font-syne font-bold mb-2">{tier.name}</CardTitle>
                <p className="text-xs font-bold text-red-500 uppercase tracking-widest">{tier.target}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow text-center">
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground font-medium ml-1">{tier.unit}</span>
                </div>
                <Badge variant="outline" className="mb-10 font-bold border-red-500/30 text-red-500 px-4 py-1">
                  {tier.desc}
                </Badge>
                <ul className="space-y-4 text-left">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-red-500 shrink-0" size={16} />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0 mt-12">
                <Link href="/contact" className="w-full">
                  <Button className={`w-full rounded-2xl py-7 text-lg font-bold ${tier.popular ? 'bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/20' : ''}`} variant={tier.popular ? 'primary' : 'outline'}>
                    Select {tier.name}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pilot Testimonial Section */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-red-500/5 border border-red-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Star size={120} className="text-red-500" />
             </div>
             <div className="relative z-10 text-center">
                <div className="flex justify-center gap-1 mb-8">
                   {[...Array(TESTIMONIAL.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-red-500 text-red-500" />
                   ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-syne font-medium italic mb-10 leading-relaxed text-foreground">
                   "{TESTIMONIAL.quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                   <div className="w-12 h-1 bg-red-500 mb-4" />
                   <p className="font-bold text-lg">{TESTIMONIAL.author}</p>
                   <p className="text-sm text-muted-foreground uppercase tracking-widest font-mono mt-1">Pilot Program Partner</p>
                </div>
             </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative rounded-[4rem] bg-slate-900 p-12 md:p-24 overflow-hidden border border-white/10 shadow-3xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[150px] -mr-64 -mt-64 rounded-full" />
            <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-syne font-extrabold text-white mb-8 tracking-tighter">Ready to Eliminate <br className="hidden md:block" /> Driver Fatigue?</h2>
                <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    Join industry leaders who trust VigilDrive to keep their operations safe, compliant, and efficient. Let's make every journey a safe one.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/contact">
                       <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 h-16 rounded-full text-lg shadow-2xl shadow-red-500/30 border-none transition-all hover:scale-105">
                          Request a Pilot
                       </Button>
                    </Link>
                    <Link href="/services/computer-vision">
                       <Button size="lg" variant="ghost" className="text-white hover:bg-white/5 font-bold px-8 h-16 rounded-full text-lg">
                          Explore Vision AI
                       </Button>
                    </Link>
                </div>
            </div>
        </div>

      </div>
      
      {/* Background Decorative Elements */}
      <div className="fixed top-1/4 -right-64 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full -z-50 pointer-events-none" />
      <div className="fixed bottom-1/4 -left-64 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-50 pointer-events-none" />
    </div>
  );
}
