export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "AI Strategy" | "Product Updates" | "Technical Guides" | "Indian Market";
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Why Indian Fintech Needs AI-Native Options Analytics",
    slug: "indian-fintech-ai-options-analytics",
    excerpt: "The Indian derivatives market is unique. Traditional tools are failing retail traders who need real-time, AI-driven insights to compete.",
    category: "AI Strategy",
    date: "March 15, 2024",
    readTime: "6 min read",
    content: `
      The Indian stock market, specifically the NSE derivatives segment, has seen an explosion in retail participation over the last three years. However, the tools available to these traders haven't kept pace with the complexity of the market.
      
      ## The Problem with Static Data
      Traditional trading terminals provide rows of numbers—OI, Change in OI, Volume, Greeks. For a retail trader, processing this in real-time during a volatile expiry day is nearly impossible. This is where AI-native analytics come in.
      
      ## Enter AI Narratives
      At AspireAI, we built OI Alpha with the philosophy that data should tell a story. By using Large Language Models (LLMs) to analyze the option chain in real-time, we can provide "Market Narratives" that explain exactly where the "Big Money" is moving.
    `
  },
  {
    id: "2",
    title: "Building ATS-Friendly Resumes for Indian Job Market in 2025",
    slug: "ats-friendly-resumes-india-2025",
    excerpt: "Learn how to optimize your resume for the specific Applicant Tracking Systems used by major Indian IT firms and startups.",
    category: "Technical Guides",
    date: "February 28, 2024",
    readTime: "8 min read",
    content: `
      In 2024, a standard resume isn't enough. With thousands of applicants for every role at companies like TCS, Infosys, or Swiggy, your first hurdle isn't a human—it's an algorithm.
      
      ## What is ATS?
      Applicant Tracking Systems are software used by HR to filter resumes based on keywords, formatting, and relevance. If your resume isn't "readable" by these systems, you'll never get an interview call.
      
      ## How BespokeCV Solves This
      Our AI-powered tool, BespokeCV, was built after analyzing thousands of job descriptions from the Indian market. It suggests keywords that are actually being searched for by Indian recruiters.
    `
  },
  {
    id: "3",
    title: "YOLOv8 vs Detectron2: Choosing the Right CV Model for Production",
    slug: "yolov8-vs-detectron2-production",
    excerpt: "A technical deep dive into performance, latency, and accuracy trade-offs for computer vision deployments.",
    category: "Technical Guides",
    date: "January 12, 2024",
    readTime: "12 min read",
    content: `
      When building real-time vision systems for Indian manufacturing or retail sectors, latency is often the primary constraint. 
      
      ## Performance Benchmarks
      YOLOv8 offers incredible speed-to-accuracy ratios, making it ideal for edge deployments. On the other hand, Detectron2's modularity is perfect for complex research-heavy tasks.
    `
  },
  {
    id: "4",
    title: "The State of Generative AI Adoption in Indian Enterprises",
    slug: "gen-ai-adoption-indian-enterprises",
    excerpt: "How Indian banks and retail giants are moving from LLM hype to production-ready AI agents.",
    category: "Indian Market",
    date: "December 05, 2023",
    readTime: "10 min read",
    content: `
      India is no longer just a service hub for global AI; it is becoming a consumption powerhouse. 
      
      ## Sector Focus: Fintech
      Indian banks are increasingly looking at GenAI for internal knowledge bases and personalized customer support in regional languages.
    `
  },
  {
    id: "5",
    title: "How We Built BespokeCV: From Idea to 500+ Users",
    slug: "building-bespokecv-journey",
    excerpt: "A look behind the scenes at our product development process and the challenges of building for the Indian consumer.",
    category: "Product Updates",
    date: "November 20, 2023",
    readTime: "7 min read",
    content: `
      BespokeCV started as a side project to help friends with their job search. Today, it serves over 500 users across India. 
      
      ## The Pivot
      Initially, we built a generic resume builder. But we quickly realized that the Indian market has specific requirements—focus on education, specific project formats, and multi-page layouts.
    `
  }
];
