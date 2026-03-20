import React from 'react';
import { cn } from '../utils';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'square';
}

export function Logo({ className, variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <div className={cn("flex items-center justify-center rounded-full bg-tomato text-cream font-serif font-black tracking-tighter shadow-sm", className)}>
        <span className="leading-none" style={{ fontSize: '0.6em' }}>P</span>
        <span className="leading-none text-yellow" style={{ fontSize: '0.6em', marginLeft: '-0.1em' }}>O</span>
        <span className="leading-none" style={{ fontSize: '0.6em', marginLeft: '-0.1em' }}>L</span>
      </div>
    );
  }

  if (variant === 'square') {
    return (
      <div className={cn("flex flex-col items-center justify-center bg-cream border-4 border-tomato p-6 text-center shadow-md", className)}>
        <div className="text-tomato font-serif font-black uppercase tracking-tighter leading-none text-4xl mb-2">
          Proof
          <br />
          <span className="text-pink">Of</span>
          <br />
          Life
        </div>
        <div className="w-12 h-1 bg-yellow mb-2"></div>
        <div className="text-navy font-sans font-bold uppercase tracking-widest text-[0.5rem] leading-tight">
          Two Delusional Besties<br/>Telling Each Other Exactly
        </div>
      </div>
    );
  }

  // Full variant (horizontal/editorial)
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className="flex items-baseline gap-1">
        <span className="text-tomato font-serif font-black uppercase tracking-tighter leading-none text-3xl sm:text-4xl md:text-5xl">
          Proof
        </span>
        <span className="text-pink font-serif font-black uppercase tracking-tighter leading-none text-3xl sm:text-4xl md:text-5xl">
          Of
        </span>
        <span className="text-tomato font-serif font-black uppercase tracking-tighter leading-none text-3xl sm:text-4xl md:text-5xl">
          Life
        </span>
      </div>
      <div className="mt-1 flex items-center gap-2">
        <div className="h-[2px] w-8 bg-yellow hidden sm:block"></div>
        <span className="text-navy font-sans font-bold uppercase tracking-widest text-[0.5rem] sm:text-xs leading-tight">
          Two Delusional Besties Telling Each Other Exactly
        </span>
      </div>
    </div>
  );
}
