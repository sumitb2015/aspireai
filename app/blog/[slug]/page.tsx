import { BLOG_POSTS } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Metadata } from "next";

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

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors mb-12 group text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <article>
          <div className="mb-12">
            <Badge variant="primary" className="mb-6">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-between border-y border-border/30 py-6">
              <div className="flex items-center gap-6 text-sm text-text-secondary">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent-primary" /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-accent-primary" /> {post.readTime}
                </span>
              </div>
              <button className="text-text-secondary hover:text-accent-primary transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div className="prose prose-invert prose-cyan max-w-none">
             {/* Note: In a real app, use a markdown renderer like react-markdown */}
             <div className="text-text-secondary text-lg leading-relaxed space-y-8">
                {post.content.split('\n').map((para, i) => {
                  if (para.startsWith('##')) {
                    return <h2 key={i} className="text-3xl font-syne font-bold text-text-primary pt-8">{para.replace('## ', '')}</h2>
                  }
                  return para.trim() ? <p key={i}>{para}</p> : null;
                })}
             </div>
          </div>
        </article>

        <div className="mt-20 pt-12 border-t border-border/50">
           <h3 className="text-2xl font-syne font-bold mb-8">Related Posts</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                 <Link key={p.id} href={`/blog/${p.slug}`} className="group">
                    <span className="text-xs text-accent-primary uppercase font-bold tracking-widest mb-2 block">{p.category}</span>
                    <h4 className="text-xl font-syne font-bold group-hover:text-accent-primary transition-colors">{p.title}</h4>
                 </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
