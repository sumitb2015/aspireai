import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[2rem] p-12 md:p-20 relative overflow-hidden bg-surface border border-border/50">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10 -z-10" />
        
        <div className="text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold mb-6">
            Ready to build your AI advantage?
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you're looking for specialized AI consulting or want to leverage our market-ready products, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services">
              <Button size="lg">Explore Services</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
