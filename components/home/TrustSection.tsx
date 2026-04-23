import { TRUST_CARDS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export default function TrustSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-4">Why AspireAI?</h2>
            <p className="text-text-secondary text-lg">
              We bridge the gap between cutting-edge AI research and practical, market-ready applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_CARDS.map((item) => (
            <Card key={item.title} className="group border-l-2 border-l-transparent hover:border-l-accent-primary">
              <div className="mb-6 text-accent-primary">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-syne font-bold mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
