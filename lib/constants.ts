import { 
  MessageSquare, 
  Zap, 
  Eye, 
  Bot, 
  BarChart3, 
  FileText,
  Rocket,
  Shield,
  Globe
} from "lucide-react";

export const SITE_CONFIG = {
  name: "AspireAI Solutions",
  tagline: "Innovative AI Products & Services",
  url: "https://aspireaisolutions.com",
  email: "contact@aspireaisolutions.com",
  location: "Pune, India",
  founded: "2024",
  socials: {
    linkedin: "#",
    twitter: "#",
    github: "#",
  }
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const PRODUCTS = [
  {
    id: "oialpha",
    name: "OI Alpha",
    tagline: "Professional Options Analytics",
    description: "Professional-grade options analytics for professional derivatives traders. Real-time OI tracking, Greeks, IV surface, and AI-powered market insights.",
    url: "https://oialpha.com",
    category: "Fintech · Options Trading",
    features: ["Open Interest Tracking", "IV Surface", "Strategy Builder", "AI Narratives"],
    accentColor: "#FF6B35",
    status: "live",
    badge: "Live · Options Analytics",
  },
  {
    id: "bespokecv",
    name: "BespokeCV",
    tagline: "AI-Powered Resume Builder",
    description: "AI-powered resume builder for global job seekers. ATS-friendly templates, one-click generation, and smart content suggestions tailored for modern hiring platforms.",
    url: "https://bespokecv.in",
    category: "Career Tech · HR",
    features: ["ATS Optimized", "AI Content", "45+ Templates", "Global Compatibility"],
    accentColor: "#00D4FF",
    status: "live",
    badge: "Live · AI Resume Builder",
  },
  {
    id: "vigildrive",
    name: "VigilDrive",
    tagline: "Intelligent Driver Safety",
    description: "Advanced computer vision-powered driver monitoring system. Real-time detection of fatigue, distraction, and unsafe driving patterns to prevent accidents.",
    url: "/contact",
    category: "Computer Vision · Fleet Safety",
    features: ["Fatigue Detection", "Distraction Monitoring", "AI-Powered Alerts", "Behavior Analytics"],
    accentColor: "#EF4444",
    status: "enterprise",
    badge: "New · Fleet Safety",
  }
];

export const SERVICES = [
  {
    id: "conversational-ai",
    title: "Conversational AI",
    description: "Build intelligent chatbots and voice assistants that understand context and nuance.",
    icon: MessageSquare,
    slug: "conversational-ai",
    details: {
      tagline: "Engage your customers with human-like intelligence.",
      capabilities: [
        "Multilingual Support",
        "Context-Aware Conversations",
        "Intent Recognition",
        "Seamless Human Handoff"
      ],
      techStack: ["GPT-4o", "LangChain", "FastAPI", "Python"]
    }
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Harness the power of LLMs to generate content, code, and creative assets.",
    icon: Zap,
    slug: "generative-ai",
    details: {
      tagline: "Unleash creativity at scale.",
      capabilities: [
        "Custom LLM Fine-tuning",
        "Automated Content Pipelines",
        "Code Generation Agents",
        "Creative Image Generation"
      ],
      techStack: ["LLaMA 3", "PyTorch", "Hugging Face", "Stable Diffusion"]
    }
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Extract actionable insights from visual data using state-of-the-art models.",
    icon: Eye,
    slug: "computer-vision",
    details: {
      tagline: "See the world through data.",
      capabilities: [
        "Real-time Object Detection",
        "Image Segmentation",
        "Facial Recognition",
        "Anomaly Detection in Video"
      ],
      techStack: ["YOLOv8", "OpenCV", "TensorFlow", "Detectron2"]
    }
  },
  {
    id: "intelligent-agents",
    title: "Intelligent Agents",
    description: "Autonomous agents that can plan, execute, and learn from complex tasks.",
    icon: Bot,
    slug: "intelligent-agents",
    details: {
      tagline: "Automate complexity with autonomy.",
      capabilities: [
        "Autonomous Task Planning",
        "Multi-Agent Orchestration",
        "Tool Integration (APIs, DBs)",
        "Continuous Learning Loops"
      ],
      techStack: ["AutoGPT", "CrewAI", "LangGraph", "Docker"]
    }
  }
];

export const STATS = [
  { label: "Live Products", value: 3, suffix: "+" },
  { label: "AI Technologies", value: 5, suffix: "+" },
  { label: "Users Served", value: 500, suffix: "+" },
  { label: "Global Reach", value: "Worldwide", isText: true },
];

export const TRUST_CARDS = [
  {
    title: "Enterprise-Ready",
    description: "Built for global scale, security, and performance.",
    icon: Globe,
  },
  {
    title: "Production-Grade",
    description: "Battle-tested products with real-world users.",
    icon: Rocket,
  },
  {
    title: "End-to-End AI",
    description: "From strategy to model fine-tuning and deployment.",
    icon: Shield,
  }
];
