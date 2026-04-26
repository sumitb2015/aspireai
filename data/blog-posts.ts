import { content as blog1 } from "../content/blogs/ai-transforming-indian-insurance-2025";
import { content as blog2 } from "../content/blogs/fine-tuning-llama-3-indian-enterprise";
import { content as blog3 } from "../content/blogs/automated-vehicle-damage-detection-yolo11-case-study";
import { content as blog4 } from "../content/blogs/gen-ai-use-cases-indian-fintech";
import { content as blog5 } from "../content/blogs/options-analytics-failing-retail-traders";
import { content as blog6 } from "../content/blogs/langchain-vs-llamaindex-2025";
import { content as blog7 } from "../content/blogs/implementing-dms-indian-fleets";
import { content as blog8 } from "../content/blogs/ats-resume-optimization-india-2025";
import { content as blog9 } from "../content/blogs/secure-rag-pipelines-banking";
import { content as blog10 } from "../content/blogs/multi-agent-systems-crewai-automation";
import { content as blog11 } from "../content/blogs/cost-custom-llm-development-india";
import { content as blog12 } from "../content/blogs/aspireai-product-updates-q1-2024";
import { content as blog13 } from "../content/blogs/state-of-autonomous-driving-india-2026";
import { content as blog14 } from "../content/blogs/vit-vs-cnns-traffic-analysis-2026";
import { content as blog15 } from "../content/blogs/sensor-fusion-lidar-camera-adas";
import { content as blog16 } from "../content/blogs/synthetic-data-cv-autonomous-vehicles";
import { content as blog17 } from "../content/blogs/edge-ai-low-latency-pedestrian-detection";
import { content as blog18 } from "../content/blogs/regulatory-compliance-av-cv-perspective";
import { content as blog19 } from "../content/blogs/vibe-coding-redefining-software-engineering-2026";
import { content as blog20 } from "../content/blogs/beyond-transformers-next-gen-deep-learning";
import { content as blog21 } from "../content/blogs/quantum-machine-learning-enterprise-reality";
import { content as blog22 } from "../content/blogs/neuro-symbolic-ai-logic-and-learning";
import { content as blog23 } from "../content/blogs/decentralized-ai-agents-on-blockchain";
import { content as blog24 } from "../content/blogs/agi-milestones-tracking-progress-2026";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "AI Strategy" | "Product Updates" | "Technical Guides" | "Indian Market";
  date: string;
  readTime: string;
  coverImage: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "13",
    title: "The State of Autonomous Driving in India: Navigating Chaotic Traffic with Edge AI (2026)",
    slug: "state-of-autonomous-driving-india-2026",
    excerpt: "While Level 5 autonomy remains a challenge, India is leading the way in Level 3 and 4 restricted autonomous systems using hardened Edge AI.",
    category: "AI Strategy",
    date: "April 26, 2026",
    readTime: "22 min read",
    content: blog13,
    coverImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "14",
    title: "Vision Transformers (ViT) vs. CNNs for Real-Time Traffic Analysis in 2026",
    slug: "vit-vs-cnns-traffic-analysis-2026",
    excerpt: "Why the industry is moving from pure CNNs to Hybrid-ViT architectures for dense urban traffic understanding and behavior prediction.",
    category: "Technical Guides",
    date: "April 24, 2026",
    readTime: "20 min read",
    content: blog14,
    coverImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "15",
    title: "Sensor Fusion Algorithms: Combining LiDAR and Camera Data for ADAS",
    slug: "sensor-fusion-lidar-camera-adas",
    excerpt: "Deep dive into asychnronous late fusion and feature-level deep fusion for robust perception in extreme weather conditions.",
    category: "Technical Guides",
    date: "April 22, 2026",
    readTime: "24 min read",
    content: blog15,
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "16",
    title: "Synthetic Data Generation: Accelerating CV Training for Autonomous Vehicles",
    slug: "synthetic-data-cv-autonomous-vehicles",
    excerpt: "How NeRFs and digital twins are solving the data scarcity problem for rare edge cases on Indian roads.",
    category: "Technical Guides",
    date: "April 20, 2026",
    readTime: "21 min read",
    content: blog16,
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "17",
    title: "Edge AI Deployment: Low-Latency Pedestrian Detection in 2026",
    slug: "edge-ai-low-latency-pedestrian-detection",
    excerpt: "Optimizing deep learning models for sub-5ms inference on automotive-grade NPUs using mixed-precision quantization.",
    category: "Technical Guides",
    date: "April 18, 2026",
    readTime: "18 min read",
    content: blog17,
    coverImage: "https://images.unsplash.com/photo-1475503562779-19a843d738a4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "18",
    title: "Regulatory Compliance for Autonomous Fleets: A Computer Vision Perspective",
    slug: "regulatory-compliance-av-cv-perspective",
    excerpt: "Navigating the 2026 Bharat Safety Standards through AI explainability, saliency maps, and data privacy by design.",
    category: "AI Strategy",
    date: "April 15, 2026",
    readTime: "25 min read",
    content: blog18,
    coverImage: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "1",
    title: "How AI is Transforming the Indian Insurance Sector in 2025",
    slug: "ai-transforming-indian-insurance-2025",
    excerpt: "The Indian insurance market is undergoing a radical shift as AI-powered damage detection and risk assessment become the industry standard.",
    category: "AI Strategy",
    date: "April 20, 2026",
    readTime: "20 min read",
    content: blog1,
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "2",
    title: "Fine-Tuning LLaMA 3 for Indian Enterprise Use Cases",
    slug: "fine-tuning-llama-3-indian-enterprise",
    excerpt: "Learn why fine-tuning open-source models like LLaMA 3 is more cost-effective and secure for Indian businesses than relying solely on generic APIs.",
    category: "Technical Guides",
    date: "April 10, 2026",
    readTime: "22 min read",
    content: blog2,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "3",
    title: "Automated Vehicle Damage Detection: A YOLO11 Case Study",
    slug: "vehicle-damage-detection-yolo11-case-study",
    excerpt: "A deep dive into how we built a high-precision damage detection system for insurance automation and used car platforms using YOLO11.",
    category: "Technical Guides",
    date: "March 15, 2026",
    readTime: "25 min read",
    content: blog3,
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "4",
    title: "Top 5 Generative AI Use Cases for Indian Fintechs",
    slug: "gen-ai-use-cases-indian-fintech",
    excerpt: "From automated KYC to AI-powered market narratives, discover how GenAI is redefining the fintech landscape in India.",
    category: "AI Strategy",
    date: "February 28, 2026",
    readTime: "21 min read",
    content: blog4,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "5",
    title: "Why Traditional Options Analytics Are Failing Retail Traders",
    slug: "options-analytics-failing-retail-traders",
    excerpt: "The Indian derivatives market is evolving. Static charts and tables are no longer enough for the modern options trader.",
    category: "Indian Market",
    date: "January 15, 2026",
    readTime: "25 min read",
    content: blog5,
    coverImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "6",
    title: "LangChain vs LlamaIndex: Choosing the Right Framework for Enterprise AI in 2025",
    slug: "langchain-vs-llamaindex-2025",
    excerpt: "A comprehensive technical comparison of LangChain and LlamaIndex for enterprise-grade RAG and Agentic systems, focusing on the Indian market and DPDP compliance.",
    category: "Technical Guides",
    date: "November 20, 2025",
    readTime: "22 min read",
    content: blog6,
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "7",
    title: "Implementing Driver Monitoring Systems (DMS) in Indian Fleets",
    slug: "implementing-dms-indian-fleets",
    excerpt: "Reducing road accidents through real-time fatigue and distraction detection in commercial vehicles.",
    category: "Technical Guides",
    date: "October 12, 2025",
    readTime: "23 min read",
    content: blog7,
    coverImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "8",
    title: "Navigating ATS in 2025: Resume Optimization for Indian IT",
    slug: "ats-resume-optimization-india-2025",
    excerpt: "The hiring landscape in Indian IT is more competitive than ever. Learn how to ensure your resume passes the automated filters.",
    category: "Technical Guides",
    date: "September 05, 2025",
    readTime: "20 min read",
    content: blog8,
    coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "9",
    title: "Building Secure RAG Pipelines for Banking & Finance",
    slug: "secure-rag-pipelines-banking",
    excerpt: "How to implement Retrieval-Augmented Generation while meeting the stringent security and compliance requirements of the BFSI sector.",
    category: "Technical Guides",
    date: "August 25, 2025",
    readTime: "24 min read",
    content: blog9,
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "10",
    title: "How Multi-Agent Systems (CrewAI) Automate Workflows",
    slug: "multi-agent-systems-crewai-automation",
    excerpt: "Moving beyond single-prompt AI to autonomous teams of agents that can solve complex business problems.",
    category: "Technical Guides",
    date: "July 15, 2025",
    readTime: "22 min read",
    content: blog10,
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "11",
    title: "The Cost of Custom LLM Development in India",
    slug: "cost-custom-llm-development-india",
    excerpt: "A transparent breakdown of the costs involved in building, fine-tuning, and deploying custom AI models for your business.",
    category: "AI Strategy",
    date: "June 05, 2025",
    readTime: "21 min read",
    content: blog11,
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "12",
    title: "AspireAI Product Updates: Scaling OI Alpha and BespokeCV",
    slug: "aspireai-product-updates-q1-2024",
    excerpt: "A look at the new features and improvements we've rolled out for our flagship products in the first quarter of 2024.",
    category: "Product Updates",
    date: "May 25, 2025",
    readTime: "20 min read",
    content: blog12,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "19",
    title: "The Rise of Vibe Coding: How AI is Redefining Software Engineering in 2026",
    slug: "vibe-coding-redefining-software-engineering-2026",
    excerpt: "Software engineering is undergoing its most profound transformation. Explore how 'Vibe Coding' is enabling teams to build complex systems through intent-driven development.",
    category: "AI Strategy",
    date: "May 15, 2026",
    readTime: "18 min read",
    content: blog19,
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "20",
    title: "Beyond Transformers: The Next Generation of Deep Learning Architectures",
    slug: "beyond-transformers-next-gen-deep-learning",
    excerpt: "As we scale into 2026, the quadratic computational cost of Transformers has forced researchers to look beyond. Discover the rise of SSMs, Mamba, and Liquid Neural Networks.",
    category: "Technical Guides",
    date: "May 12, 2026",
    readTime: "22 min read",
    content: blog20,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "21",
    title: "Quantum Machine Learning: Moving from Theory to Enterprise Reality (2026)",
    slug: "quantum-machine-learning-enterprise-reality",
    excerpt: "2026 marks an inflection point where NISQ devices are yielding practical advantages for specific machine learning workloads in finance and drug discovery.",
    category: "AI Strategy",
    date: "May 10, 2026",
    readTime: "25 min read",
    content: blog21,
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "22",
    title: "Neuro-Symbolic AI: Bridging the Gap Between Logic and Learning",
    slug: "neuro-symbolic-ai-logic-and-learning",
    excerpt: "To build AI systems that can be trusted with mission-critical tasks, 2026 has seen the adoption of Neuro-Symbolic AI, marrying deep learning with rigorous logic.",
    category: "Technical Guides",
    date: "May 08, 2026",
    readTime: "20 min read",
    content: blog22,
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "23",
    title: "The Decentralized Web: AI Agents Operating on the Blockchain",
    slug: "decentralized-ai-agents-on-blockchain",
    excerpt: "Explore the technical infrastructure behind Decentralized AI, where autonomous agents possess crypto wallets and execute cross-chain transactions.",
    category: "AI Strategy",
    date: "May 05, 2026",
    readTime: "24 min read",
    content: blog23,
    coverImage: "https://images.unsplash.com/photo-1639762681037-4f1d1ce50cbb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "24",
    title: "AGI Milestones: Tracking the Progress of Artificial General Intelligence in 2026",
    slug: "agi-milestones-tracking-progress-2026",
    excerpt: "AGI has transitioned from philosophical debate to engineering timeline. Track the critical thresholds crossed in mid-2026, from reasoning breakthroughs to multimodal fluency.",
    category: "AI Strategy",
    date: "May 01, 2026",
    readTime: "21 min read",
    content: blog24,
    coverImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200"
  }
];