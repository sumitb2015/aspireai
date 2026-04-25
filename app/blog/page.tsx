import { BLOG_POSTS } from "@/data/blog-posts";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Insights & Engineering Blog",
  description: "Explore the latest insights, engineering deep-dives, and trends in Artificial Intelligence, LLMs, and Computer Vision.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Insights"
          heading="The AspireAI Blog"
          subheading="Sharing our journey, technical deep-dives, and thoughts on the future of AI."
          align="left"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full flex flex-col group overflow-hidden p-0 border-border/30">
                <div className="relative h-52 w-full overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="shadow-lg backdrop-blur-md bg-accent-primary/80 border-none">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-dmSans font-bold mb-4 group-hover:text-accent-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-foreground/80 text-sm mb-8 flex-grow leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/10">
                    <div className="flex items-center gap-4 text-xs text-foreground/60">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-accent-primary" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-accent-primary" /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight size={16} className="text-accent-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
