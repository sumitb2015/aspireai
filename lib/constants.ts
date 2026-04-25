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
    seoTitle: "Conversational AI & Custom Chatbot Development India",
    seoDescription: "Build context-aware conversational AI and voice assistants. We use LangChain & FastAPI to deploy multilingual, scalable chatbots for Indian businesses.",
    description: "Build intelligent chatbots and voice assistants that understand context and nuance.",
    icon: MessageSquare,
    slug: "conversational-ai",
    content: [
      {
        heading: "Enterprise-Grade Conversational AI Development",
        text: "As a leading conversational AI company in India, we specialize in building intelligent, context-aware chatbots and voice assistants. Our solutions go beyond simple rule-based systems; we leverage Large Language Models (LLMs) to ensure your customers feel heard and understood in every interaction."
      },
      {
        heading: "Custom Chatbot Development for Indian Markets",
        text: "Navigating the diverse linguistic landscape of India requires more than just translation. We build multilingual chatbots that understand regional nuances, intent, and sentiment. Whether it's for fintech customer support or e-commerce engagement, our enterprise chatbot development services are designed to scale with your business."
      },
      {
        heading: "Modern Tech Stack: LangChain, FastAPI & Python",
        text: "Our LangChain developers in India are experts at orchestrating complex conversational flows, integrating with your existing APIs, and ensuring low-latency responses using FastAPI. We prioritize security and privacy, ensuring your proprietary data remains safe while delivering a premium user experience."
      }
    ],
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
    seoTitle: "Generative AI & Custom LLM Fine-Tuning Services India",
    seoDescription: "Expert Generative AI services in India. We specialize in custom LLM fine-tuning (LLaMA 3, GPT-4o) and building secure GenAI pipelines for enterprises.",
    description: "Harness the power of LLMs to generate content, code, and creative assets.",
    icon: Zap,
    slug: "generative-ai",
    content: [
      {
        heading: "Top Generative AI Company in India",
        text: "AspireAI is at the forefront of the GenAI revolution, helping Indian enterprises transition from AI experimentation to production-ready value. We provide end-to-end generative AI services, from initial strategy to the deployment of custom fine-tuned models that outperform generic APIs."
      },
      {
        heading: "Custom LLM Fine-Tuning and RAG Systems",
        text: "We specialize in custom LLM fine-tuning for models like LLaMA 3 and Mistral, ensuring they speak your brand's voice and understand your domain-specific data. Our Retrieval-Augmented Generation (RAG) systems provide accurate, grounded responses by securely connecting AI to your internal knowledge bases."
      },
      {
        heading: "Secure Enterprise GenAI Solutions",
        text: "Security is non-negotiable for enterprise GenAI solutions. We build private, secure AI pipelines using AWS and on-premise deployments that ensure your data never leaves your control. From automated content generation to complex code assistants, our solutions are built for scale and reliability."
      }
    ],
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
    seoTitle: "Computer Vision & Video Analytics Solutions Company India",
    seoDescription: "Leading computer vision company in India using YOLOv8 & PyTorch. We deliver real-time driver monitoring, vehicle damage detection, and visual analytics.",
    description: "Extract actionable insights from visual data using state-of-the-art models.",
    icon: Eye,
    slug: "computer-vision",
    content: [
      {
        heading: "Advanced Computer Vision Services in India",
        text: "Transform visual data into actionable business intelligence. As a premier computer vision company in India, we deliver state-of-the-art solutions for real-time object detection, image segmentation, and facial recognition using the latest models like YOLOv8 and Detectron2."
      },
      {
        heading: "Specialized Video Analytics & Driver Safety",
        text: "Our expertise extends to specialized domains like fleet safety and insurtech. We build intelligent driver monitoring systems (DMS) that detect fatigue and distraction in real-time, as well as automated vehicle damage detection systems for insurance platforms using custom-trained PyTorch models."
      },
      {
        heading: "YOLOv8 Consulting & Visual AI Deployment",
        text: "Deploying high-performance vision models requires deep expertise in hardware optimization. Our YOLOv8 consulting team helps you bridge the gap between research and real-world deployment on edge devices, ensuring low-latency inference for manufacturing, retail, and security applications."
      }
    ],
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
    seoTitle: "Autonomous AI Agents Development for Enterprise | AspireAI",
    seoDescription: "Automate complex enterprise workflows with autonomous AI agents. We build secure, multi-agent systems using AutoGPT and CrewAI for scalable operations.",
    description: "Autonomous agents that can plan, execute, and learn from complex tasks.",
    icon: Bot,
    slug: "intelligent-agents",
    content: [
      {
        heading: "Leading AI Agent Development Company",
        text: "The future of automation lies in autonomous agents. We are a pioneer AI agent development company in India, building multi-agent systems that can plan, reason, and execute complex workflows without constant human intervention."
      },
      {
        heading: "Autonomous AI Agents for Enterprise Workflows",
        text: "We leverage frameworks like CrewAI, LangGraph, and AutoGPT to build agents that integrate directly with your existing tools—from CRM systems to proprietary databases. These agents don't just chat; they perform work, reducing operational overhead for large enterprises."
      },
      {
        heading: "Multi-Agent Orchestration & Continuous Learning",
        text: "Our intelligent agents are designed for continuous learning and adaptation. By orchestrating multiple specialized agents to work in harmony, we solve problems that single-model LLMs cannot. We focus on reliability, ensuring every agent action is traceable and aligned with business goals."
      }
    ],
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
  { label: "Enterprise AI Models", value: 12, suffix: "+" },
  { label: "Proprietary Datasets", value: 25, suffix: "+" },
  { label: "Monthly Active Users", value: 2500, suffix: "+" },
  { label: "Global Presence", value: "Worldwide", isText: true },
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
