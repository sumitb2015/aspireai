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
  tagline: "Where AI Meets Possibilities",
  url: "https://aspireaisolutions.com",
  email: "contact@aspireaisolutions.com",
  location: "Pune, India",
  founded: "2024",
  socials: {
    linkedin: "https://linkedin.com/company/aspireai-solutions",
    twitter: "https://twitter.com/aspireai",
    github: "https://github.com/aspireai",
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
    description: "Professional-grade options analytics for NSE/NIFTY derivatives traders. Real-time OI tracking, Greeks, IV surface, and AI-powered market insights.",
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
    description: "AI-powered resume builder for Indian job seekers. ATS-friendly templates, one-click generation, and smart content suggestions tailored for the Indian job market.",
    url: "https://bespokecv.in",
    category: "Career Tech · HR",
    features: ["ATS Optimized", "AI Content", "45+ Templates", "Indian Market"],
    accentColor: "#00D4FF",
    status: "live",
    badge: "Live · AI Resume Builder",
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
  { label: "Live Products", value: 2, suffix: "+" },
  { label: "AI Technologies", value: 5, suffix: "+" },
  { label: "Users Served", value: 500, suffix: "+" },
  { label: "Focus Market", value: "India", isText: true },
];

export const TRUST_CARDS = [
  {
    title: "India-First",
    description: "Built for Indian markets, regulations, and users.",
    icon: Globe,
  },
  {
    title: "Production-Ready",
    description: "Not demos, real products with real users.",
    icon: Rocket,
  },
  {
    title: "Full-Stack AI",
    description: "From model fine-tuning to deployed web products.",
    icon: Shield,
  }
];
