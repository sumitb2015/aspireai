import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, MapPin, Linkedin, Twitter, Github, Clock, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with AspireAI Solutions for AI consulting, product demos, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="Get in Touch"
          heading={<>Let's Build Something <span className="text-primary">Intelligent</span></>}
          subheading="Ready to transform your business with AI? Our team of experts is here to guide you through every step of your AI journey."
          align="left"
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-syne font-bold uppercase tracking-wider text-primary text-xs">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <a 
                  href={`mailto:${SITE_CONFIG.email}`} 
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/20"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60">Email Us</p>
                    <p className="text-lg font-medium">{SITE_CONFIG.email}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-muted-foreground p-4 rounded-2xl bg-muted/30 border border-border/50">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60">Visit Us</p>
                    <p className="text-lg font-medium">{SITE_CONFIG.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-syne font-bold uppercase tracking-wider text-primary text-xs">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: "LinkedIn" },
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all group"
                      title={social.label}
                    >
                      <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-sm uppercase tracking-widest">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/20 to-blue-600/10 border border-primary/20 shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 text-primary/20 group-hover:scale-125 transition-transform duration-500">
                  <Clock size={80} strokeWidth={1} />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <CheckCircle2 size={24} />
                    <h4 className="font-syne font-extrabold text-xl uppercase tracking-tighter italic">Fast Response</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    We typically respond to all inquiries within <span className="text-foreground font-bold">one business day</span>. Our experts are ready to provide technical insights for your AI vision.
                  </p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
