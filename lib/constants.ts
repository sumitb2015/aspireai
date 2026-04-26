import { 
  MessageSquare, 
  Zap, 
  Eye, 
  Bot, 
  BarChart3, 
  FileText,
  Rocket,
  Shield,
  Globe,
  Database,
  Tags
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
    id: "vigildrive",
    name: "VigilDrive",
    tagline: "Intelligent Driver Safety",
    description: "Advanced computer vision-powered driver monitoring system. Real-time detection of fatigue, distraction, and unsafe driving patterns to prevent accidents.",
    url: "/contact",
    featuresUrl: "/products/vigildrive",
    category: "Computer Vision · Fleet Safety",
    features: ["Fatigue Detection", "Distraction Monitoring", "AI-Powered Alerts", "Behavior Analytics"],
    accentColor: "#EF4444",
    status: "enterprise",
    badge: "New · Fleet Safety",
  },
  {
    id: "oialpha",
    name: "OI Alpha",
    tagline: "Professional Options Analytics",
    description: "Professional-grade options analytics for professional derivatives traders. Real-time OI tracking, Greeks, IV surface, and AI-powered market insights.",
    url: "https://oialpha.com",
    featuresUrl: "/products/oialpha",
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
    featuresUrl: "/products/bespokecv",
    category: "Career Tech · HR",
    features: ["ATS Optimized", "AI Content", "45+ Templates", "Global Compatibility"],
    accentColor: "#00D4FF",
    status: "live",
    badge: "Live · AI Resume Builder",
  }
];

export const SERVICES = [
  {
    id: "data-annotation",
    title: "Data Annotation & Labeling",
    seoTitle: "Data Annotation & Labeling Offering | High-Quality AI Data Labeling",
    seoDescription: "Explore our comprehensive Data Annotation and Labeling offering. We provide highly accurate, secure image, video, and text labeling services for Computer Vision and GenAI models.",
    seoKeywords: ["data annotation offering", "data labeling services", "AI data labeling", "computer vision annotation", "NLP labeling", "RLHF services"],
    description: "Accelerate AI development with 15x faster labeling and 99.99% accuracy using state-of-the-art automated workflows.",
    icon: Database,
    slug: "data-annotation",
    content: [
      {
        heading: "Enterprise-Grade Annotation with 99.99% Accuracy",
        text: "High-quality annotated data is the bedrock of reliable AI. We provide enterprise-grade, human-in-the-loop (HITL) data labeling services that turn raw datasets into precise training signals. Our multi-tier QA workflows guarantee an industry-leading 99.99% accuracy rate, strictly adhering to enterprise SLAs."
      },
      {
        heading: "AI-Powered Automated vs. Manual Annotation",
        text: "Traditional manual labeling requires 10+ hours per 1,000 images; our AI-driven automated pipeline slashes this to just 30 minutes. By integrating tools like Unitlab AI and SegmentsAI, we achieve 15x faster acceleration and 5x cost reduction, enabling enterprises to reach production 1-3 months ahead of schedule while freeing up 60% of engineering resources."
      },
      {
        heading: "Advanced Computer Vision & Sensor Fusion",
        text: "We power autonomous systems, robotics, and geospatial AI through pixel-perfect semantic segmentation, 3D point cloud annotation, and LiDAR sensor fusion. Our workforce is trained on Labelbox and CVAT to handle complex 3D cuboid annotations, polyline tracking, and temporal object tracking across thousands of frames."
      },
      {
        heading: "Generative AI: RLHF & Red Teaming",
        text: "In the era of Generative AI, alignment is critical. We offer specialized Reinforcement Learning from Human Feedback (RLHF), prompt engineering, and model red teaming. We evaluate model responses for toxicity, hallucinations, and factual accuracy, tailoring the output to your specific enterprise taxonomy."
      }
    ],
    details: {
      tagline: "15x Faster Labeling. 99.99% Accuracy. Secure & Reliable.",
      capabilities: [
        "LiDAR & 3D Point Cloud Fusion",
        "Pixel-Perfect Semantic Segmentation",
        "RLHF & Model Red Teaming",
        "Automated QA & Consensus Loops"
      ],
      techStack: ["Unitlab AI", "Labelbox", "SegmentsAI", "CVAT", "Python"]
    }
  },
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
    seoTitle: "Autonomous AI Agents & Multi-Agent Systems | Enterprise Solutions",
    seoDescription: "Deploy sophisticated multi-agent AI systems for supply chain, customer success, and finance. We leverage CrewAI, LangGraph, and AutoGPT for enterprise automation.",
    seoKeywords: ["AI agents", "autonomous agents", "multi-agent systems", "CrewAI development", "LangGraph agents", "enterprise AI automation", "agentic RPA"],
    description: "Deploy autonomous, multi-agent swarms capable of complex reasoning, tool calling, and executing multi-step enterprise workflows.",
    icon: Bot,
    slug: "intelligent-agents",
    content: [
      {
        heading: "Enterprise Multi-Agent Orchestration",
        text: "We move beyond single-prompt LLMs to build autonomous multi-agent systems using LangGraph and CrewAI. By deploying specialized agent swarms with distinct roles (e.g., Researcher, Analyst, Executor), we enable complex, multi-step reasoning and collaborative problem-solving that mimics human operational teams."
      },
      {
        heading: "Real-World Use Cases & Impact",
        text: "Our agents drive measurable ROI across industries: \n• Automated Financial Research: Agents autonomously scrape SEC filings, analyze sentiment, and generate competitive intelligence reports.\n• Intelligent Customer Success: L1/L2 support agents capable of querying CRM APIs, issuing refunds, and updating tickets, reducing resolution times by up to 80%.\n• Supply Chain Automation: Agentic RPA systems that monitor inventory databases, negotiate with supplier APIs, and dynamically reroute logistics during disruptions."
      },
      {
        heading: "Advanced Tool Integration & Semantic Memory",
        text: "Our agents don't just chat—they act. We equip them with custom RAG (Retrieval-Augmented Generation) pipelines, semantic vector memory (Pinecone/Milvus), and deterministic API tool-calling capabilities. This allows agents to read proprietary databases, execute code, send emails, and update enterprise systems (Salesforce, SAP, Jira) autonomously."
      },
      {
        heading: "Reliability & Human-in-the-Loop (HITL)",
        text: "Enterprise automation requires trust. We implement ReAct (Reason + Act) architectures with strict guardrails, explicit state management, and continuous learning loops. Critical decisions trigger Human-in-the-Loop (HITL) approval gates, ensuring complete auditability and compliance with corporate governance."
      }
    ],
    details: {
      tagline: "Deploy specialized agent swarms to automate complex, multi-step enterprise workflows.",
      capabilities: [
        "Multi-Agent Swarm Orchestration",
        "Deterministic API Tool Calling",
        "ReAct Architecture & Semantic Memory",
        "Human-in-the-Loop (HITL) Workflows"
      ],
      techStack: ["LangGraph", "CrewAI", "AutoGPT", "Pinecone", "Python"]
    }
  }
];

export const STATS = [
  { label: "Enterprise AI Models", value: 8, suffix: "+" },
  { label: "Proprietary Datasets", value: 15, suffix: "+" },
  { label: "Monthly Active Users", value: 100, suffix: "+" },
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
