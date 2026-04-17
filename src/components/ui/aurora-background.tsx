"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-zinc-900",
        className
      )}
      {...props}
    >
      {/* Aurora background layer with inline styles */}
      <div 
        className="absolute inset-0 opacity-50 will-change-transform"
        style={{
          backgroundImage: `
            repeating-linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 7%, transparent 10%, transparent 12%, rgba(255,255,255,0) 16%),
            repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)
          `,
          backgroundSize: '300% 200%, 200% 100%',
          backgroundPosition: '50% 50%, 50% 50%',
          animation: 'aurora 60s linear infinite',
          filter: 'blur(10px)',
          maskImage: showRadialGradient 
            ? 'radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)'
            : 'none',
          WebkitMaskImage: showRadialGradient
            ? 'radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)'
            : 'none',
        } as React.CSSProperties}
      />
      
      {/* Content layer */}
      <div className="relative z-10 w-full h-full">{children}</div>

      <style>{`
        @keyframes aurora {
          from {
            background-position: 50% 50%, 50% 50%;
          }
          to {
            background-position: 350% 50%, 350% 50%;
          }
        }
      `}</style>
    </div>
  );
};
