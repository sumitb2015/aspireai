import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16 max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}>
      {eyebrow && (
        <span className="text-accent-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-fluid-h2 mb-4">
        {heading}
      </h2>
      {subheading && (
        <p className="text-text-secondary text-lg md:text-xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
