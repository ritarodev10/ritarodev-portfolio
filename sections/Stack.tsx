"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixelHeart, PixelHandshake, PixelSkull, PixelWarning } from "@/components/ui/PixelIcons";
import { cn } from "@/lib/utils";

const emotionalStack = [
  {
    id: "love",
    icon: PixelHeart,
    title: "Deep Bond",
    subtitle: "I would defend these in a Twitter thread.",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Postgres", "Node.js"],
    color: "bg-red-500",
    textColor: "text-red-500",
    borderColor: "border-red-500",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
  },
  {
    id: "like",
    icon: PixelHandshake,
    title: "Comfortable",
    subtitle: "We get along, but we don't text on weekends.",
    items: ["Vue/Nuxt", "Strapi", "Stripe", "Firebase", "GraphQL"],
    color: "bg-yellow-400",
    textColor: "text-yellow-400",
    borderColor: "border-yellow-400",
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.3)]",
  },
  {
    id: "trauma",
    icon: PixelSkull,
    title: "Trauma",
    subtitle: "It worked, but at what cost?",
    items: ["Spring Boot", "Laravel", "WordPress", "Custom Plugins"],
    color: "bg-gray-400",
    textColor: "text-gray-400",
    borderColor: "border-gray-400",
    glow: "shadow-[0_0_30px_rgba(156,163,175,0.3)]",
    className: "animate-pulse", // Simple glitch effect placeholder
  },
  {
    id: "danger",
    icon: PixelWarning,
    title: "Emergency",
    subtitle: "Break glass in case of legacy code.",
    items: ["jQuery", "Ancient PHP", "FTP Uploads"],
    color: "bg-orange-500",
    textColor: "text-orange-500",
    borderColor: "border-orange-500",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
  },
];

export default function Stack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>("love");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="stack" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter text-white mb-16 text-center">
          Emotional Stack
        </h2>

        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-4 w-full">
          {emotionalStack.map((stack) => {
            const isActive = activeId === stack.id;
            
            return (
              <div
                key={stack.id}
                onMouseEnter={() => setActiveId(stack.id)}
                className={cn(
                  "relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-crosshair border border-white/5",
                  isActive ? "flex-[3] bg-panel" : "flex-[1] bg-panel/30 hover:bg-panel/50",
                  isActive && stack.glow
                )}
              >
                {/* Background Gradient */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  isActive ? "opacity-10" : "opacity-0",
                  stack.color
                )} />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between h-full">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      "transition-all duration-300",
                      isActive ? "scale-100" : "scale-75 opacity-70"
                    )}>
                      <stack.icon className={cn("w-12 h-12", stack.textColor)} />
                    </div>
                    
                    {/* Vertical Text for Inactive State */}
                    {!isActive && (
                      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right whitespace-nowrap">
                        <span className="text-xl font-bold text-white/50 tracking-widest uppercase">
                          {stack.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content - Only visible when active */}
                  <div className={cn(
                    "transition-all duration-500 delay-100",
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute bottom-8 left-8"
                  )}>
                    <h3 className={cn("text-3xl md:text-5xl font-bold font-heading mb-2", stack.textColor)}>
                      {stack.title}
                    </h3>
                    <p className="text-text-secondary text-lg mb-8 font-mono italic">
                      "{stack.subtitle}"
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {stack.items.map((item, i) => (
                        <span 
                          key={i} 
                          className={cn(
                            "px-4 py-2 text-sm font-mono border rounded-lg bg-background/50 backdrop-blur-sm",
                            stack.borderColor,
                            stack.textColor
                          )}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
