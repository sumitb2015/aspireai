import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  fontSize?: string;
  showText?: boolean;
}

export function Logo({ 
  className, 
  iconSize = 32, 
  fontSize = "text-xl", 
  showText = true 
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div 
        style={{ width: iconSize, height: iconSize }}
        className="rounded-lg bg-primary flex items-center justify-center text-white font-black italic shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300"
      >
        <span style={{ fontSize: iconSize * 0.7 }}>A</span>
      </div>
      {showText && (
        <div className={cn("font-syne font-extrabold tracking-tighter flex items-center", fontSize)}>
          <span className="text-foreground">Aspire</span>
          <span className="text-primary">AI</span>
        </div>
      )}
    </div>
  );
}
