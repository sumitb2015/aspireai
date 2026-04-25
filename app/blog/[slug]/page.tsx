import { BLOG_POSTS } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Twitter, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt,
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Helper to detect first paragraph
  let pCount = 0;

  return (
    <div className="pt-32 pb-24 px-6 relative">
      {/* Reading Progress Bar (Fixed at top) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-border/20">
        <div 
          className="h-full bg-accent-primary origin-left w-full" 
          style={{ 
            animation: 'progress-bar linear forwards',
            animationTimeline: 'scroll(root)' 
          }} 
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress-bar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      ` }} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar - Sticky Metadata & Share */}
          <aside className="lg:w-1/4 order-2 lg:order-1">
            <div className="sticky top-40">
              <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group text-sm font-bold uppercase tracking-widest mt-7 mb-5 block">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 order-1 lg:order-2">
            <article>
              <div className="mb-12">
                <div className="relative w-full aspect-[21/10] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-accent-primary/5 group">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-dmSans font-extrabold mt-8 mb-6 leading-tight tracking-tight text-text-primary">
                  {post.title}
                </h1>

                <div className="flex items-center gap-5 flex-wrap text-sm text-text-secondary mt-3 mb-10">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={16} className="text-accent-primary/50" />
                    {post.date}
                  </span>
                  <span aria-hidden="true" className="text-text-secondary opacity-50">·</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={16} className="text-accent-primary/50" />
                    {post.readTime}
                  </span>
                  <Badge variant="secondary" className="px-3 py-1 text-[11px] tracking-wider uppercase font-bold bg-gray-100 text-gray-700 border-none rounded-full">
                    {post.category}
                  </Badge>
                  <button className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary bg-transparent border border-border/50 rounded-md px-2.5 py-1 cursor-pointer hover:text-accent-primary hover:border-accent-primary transition-colors">
                    ↗ Share
                  </button>
                </div>
              </div>
              <div className="max-w-4xl">
                <div className="prose prose-invert prose-cyan max-w-none">
                  <div className="text-foreground/90 text-[1.15rem] md:text-[1.25rem] leading-[1.8] font-dmSans font-light">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: () => null,
                          h2: ({node, ...props}) => (
                            <h2 className="text-2xl md:text-3xl font-dmSans font-bold text-text-primary pt-12 pb-5 mb-8 border-b-2 border-accent-primary/10 tracking-tight" {...props} />
                          ),
                          h3: ({node, ...props}) => (
                            <h3 className="text-xl md:text-2xl font-dmSans font-bold text-text-primary pt-10 mb-6 tracking-tight" {...props} />
                          ),
                          p: ({node, ...props}) => {
                            pCount++;
                            const isLede = pCount === 1;
                            return (
                              <p 
                                className={`mb-6 leading-relaxed ${
                                  isLede 
                                    ? "text-xl md:text-2xl font-dmSans font-medium text-text-primary leading-[1.6] mb-12 opacity-100 first-letter:text-6xl first-letter:font-bold first-letter:text-accent-primary first-letter:mr-3 first-letter:float-left first-letter:leading-[1]" 
                                    : "opacity-90"
                                }`} 
                                {...props} 
                              />
                            );
                          },
                          strong: ({node, ...props}) => <strong className="font-bold text-white opacity-100 border-b border-accent-primary/30" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-none ml-0 my-8 space-y-4" {...props} />,
                          li: ({node, ...props}) => (
                            <li className="flex gap-4 items-start pl-0">
                              <span className="w-2 h-2 rounded-sm bg-accent-primary mt-2.5 rotate-45 flex-shrink-0" />
                              <span className="opacity-95 text-lg" {...props} />
                            </li>
                          ),
                          table: ({node, ...props}) => (
                            <div className="my-10 overflow-x-auto rounded-2xl border border-border/30 bg-surface/20">
                              <table className="w-full text-left border-collapse" {...props} />
                            </div>
                          ),
                          thead: ({node, ...props}) => <thead className="bg-accent-primary/5 text-accent-primary uppercase text-[10px] font-bold tracking-[0.2em]" {...props} />,
                          th: ({node, ...props}) => <th className="px-6 py-4 border-b border-border/30" {...props} />,
                          td: ({node, ...props}) => <td className="px-6 py-4 border-b border-border/10 font-normal text-sm md:text-base opacity-80" {...props} />,
                          blockquote: ({node, ...props}) => (
                            <div className="relative my-16 py-10 pl-16 pr-8 bg-surface/30 rounded-3xl border-l-4 border-accent-primary">
                               <span className="absolute top-4 left-6 text-6xl font-dmSans text-accent-primary/20 pointer-events-none select-none">"</span>
                               <blockquote className="text-xl md:text-3xl font-dmSans font-bold text-text-primary leading-tight tracking-tight italic" {...props} />
                            </div>
                          ),
                          hr: () => (
                            <div className="flex items-center justify-center gap-4 my-16">
                              <div className="w-12 h-[1px] bg-border/50" />
                              <div className="w-2 h-2 rounded-full bg-accent-primary/50" />
                              <div className="w-12 h-[1px] bg-border/50" />
                            </div>
                          ),
                        }}
                      >
                        {post.content}
                      </ReactMarkdown>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>

        {/* Footer section for related posts */}
        <div className="mt-40 pt-20 border-t border-border/30">
           <div className="flex items-center justify-between mb-16">
             <div className="space-y-2">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-primary">Up Next</span>
               <h3 className="text-3xl md:text-4xl font-dmSans font-bold">Continue Reading</h3>
             </div>
             <Link href="/blog" className="group flex items-center gap-2 text-accent-primary font-bold hover:underline">
               View all posts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {BLOG_POSTS
                .filter(p => p.id !== post.id)
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map(p => (
                 <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                    <div className="relative h-80 rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                      <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <Badge variant="primary" className="absolute top-6 left-6">{p.category}</Badge>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-dmSans font-bold group-hover:text-accent-primary transition-colors mb-6 line-clamp-2 leading-tight tracking-tight">{p.title}</h4>
                    <p className="text-text-secondary text-lg line-clamp-2 mb-6 font-light">{p.excerpt}</p>
                    <div className="flex items-center gap-3 text-accent-primary font-bold text-sm uppercase tracking-[0.2em]">
                      Explore Article <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                 </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
