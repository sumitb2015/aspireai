import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="py-24 bg-accent/30 border-y relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {STATS.map((stat, i) => (
            <div 
              key={stat.label} 
              className={cn(
                "flex flex-col items-center text-center px-8",
                i !== STATS.length - 1 && "lg:border-r"
              )}
            >
              <div className="mb-4">
                {stat.isText ? (
                  <span className="font-syne font-bold text-4xl md:text-5xl text-foreground tracking-tighter">
                    {stat.value}
                  </span>
                ) : (
                  <div className="text-primary">
                    <AnimatedCounter 
                      target={stat.value as number} 
                      suffix={stat.suffix} 
                    />
                  </div>
                )}
              </div>
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
