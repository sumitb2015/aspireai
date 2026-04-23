import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with AspireAI Solutions for AI consulting, product demos, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Get in Touch"
          heading={<>Let's Build Something <span className="text-primary">Intelligent</span></>}
          subheading="Ready to transform your business with AI? Our team is here to help you navigate the possibilities."
          align="left"
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xl font-syne font-bold mb-6 uppercase tracking-wider text-accent-primary text-xs">Contact Info</h3>
              <div className="space-y-6">
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 text-text-secondary hover:text-accent-primary transition-colors group">
                  <div className="p-3 rounded-lg bg-surface border border-border/50 group-hover:border-accent-primary/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">{SITE_CONFIG.email}</span>
                </a>
                <div className="flex items-center gap-4 text-text-secondary group">
                  <div className="p-3 rounded-lg bg-surface border border-border/50 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">{SITE_CONFIG.location}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-syne font-bold mb-6 uppercase tracking-wider text-accent-primary text-xs">Follow Us</h3>
              <div className="flex items-center gap-4">
                {[
                  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin },
                  { icon: Twitter, href: SITE_CONFIG.socials.twitter },
                  { icon: Github, href: SITE_CONFIG.socials.github },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-xl bg-surface border border-border/50 text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-accent-primary/5 border border-accent-primary/10">
               <h4 className="font-syne font-bold text-text-primary mb-3">Quick Response Guarantee</h4>
               <p className="text-sm text-text-secondary leading-relaxed">
                  We usually respond to all inquiries within one business day. For urgent matters, please mention "URGENT" in the subject line.
               </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
