import Link from "next/link";
import { SITE_CONFIG, PRODUCTS } from "@/lib/constants";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background pt-16 pb-8 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-syne font-extrabold text-text-secondary">Aspire</span>
            <span className="text-2xl font-syne font-extrabold text-accent-primary">AI</span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
            {SITE_CONFIG.tagline}. Building advanced AI solutions for the Indian market from the heart of Pune.
          </p>
          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Solutions Column */}
        <div>
          <h4 className="font-syne font-bold text-text-primary mb-6 uppercase tracking-wider text-xs">Solutions</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/services/conversational-ai" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Conversational AI</Link></li>
            <li><Link href="/services/generative-ai" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Generative AI</Link></li>
            <li><Link href="/services/computer-vision" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Computer Vision</Link></li>
            <li><Link href="/services/intelligent-agents" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Intelligent Agents</Link></li>
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="font-syne font-bold text-text-primary mb-6 uppercase tracking-wider text-xs">Products</h4>
          <ul className="flex flex-col gap-4">
            {PRODUCTS.map(product => (
              <li key={product.id}>
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h4 className="font-syne font-bold text-text-primary mb-6 uppercase tracking-wider text-xs">Connect</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-text-secondary text-sm">{SITE_CONFIG.location}</li>
            <li><a href={`mailto:${SITE_CONFIG.email}`} className="text-text-secondary hover:text-accent-primary transition-colors text-sm">{SITE_CONFIG.email}</a></li>
            <li><Link href="/contact" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Contact Support</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-xs">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
        <p className="text-text-secondary text-xs flex items-center gap-1">
          Built with <span className="text-accent-secondary">❤️</span> in Pune
        </p>
      </div>
    </footer>
  );
}
