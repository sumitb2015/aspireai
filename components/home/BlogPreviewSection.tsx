"use client";

import { BLOG_POSTS } from "@/data/blog-posts";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPreviewSection() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <SectionHeading 
            eyebrow="Thought Leadership"
            heading="Latest from AspireAI Insights"
            subheading="Expert opinions on the evolution of AI in the Indian corporate landscape."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link href="/blog">
            <Button variant="outline" className="rounded-full px-8">
              View All Posts <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
              <Card className="h-full border-none shadow-lg group-hover:shadow-2xl transition-all duration-300 flex flex-col">
                <CardHeader className="pb-4">
                  <Badge variant="primary" className="mb-4 w-fit bg-primary/10 text-primary border-primary/20">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl font-syne font-bold group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-6 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-primary" />
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
