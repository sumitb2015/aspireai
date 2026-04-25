import { content as blog1 } from "../content/blogs/ai-transforming-indian-insurance-2025";
import { content as blog2 } from "../content/blogs/fine-tuning-llama-3-indian-enterprise";
import { content as blog3 } from "../content/blogs/automated-vehicle-damage-detection-yolov8-case-study";
import { content as blog4 } from "../content/blogs/gen-ai-use-cases-indian-fintech";
import { content as blog5 } from "../content/blogs/options-analytics-failing-retail-traders";
import { content as blog6 } from "../content/blogs/langchain-vs-llamaindex-2025";
import { content as blog7 } from "../content/blogs/implementing-dms-indian-fleets";
import { content as blog8 } from "../content/blogs/ats-resume-optimization-india-2025";
import { content as blog9 } from "../content/blogs/secure-rag-pipelines-banking";
import { content as blog10 } from "../content/blogs/multi-agent-systems-crewai-automation";
import { content as blog11 } from "../content/blogs/cost-custom-llm-development-india";
import { content as blog12 } from "../content/blogs/aspireai-product-updates-q1-2024";

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
    title: "Automated Vehicle Damage Detection: A YOLOv8 Case Study",
    slug: "vehicle-damage-detection-yolov8-case-study",
    excerpt: "A deep dive into how we built a high-precision damage detection system for insurance automation and used car platforms using YOLOv8.",
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
  }
];