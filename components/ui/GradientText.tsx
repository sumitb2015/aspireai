import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export default function GradientText({ 
  children, 
  className, 
  from = "#00D4FF", 
  to = "#FF6B35" 
}: GradientTextProps) {
  return (
    <span 
      className={cn("bg-clip-text text-transparent bg-gradient-to-r", className)}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {children}
    </span>
  );
}
