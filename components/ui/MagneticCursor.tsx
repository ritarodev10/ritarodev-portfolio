"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest("a") || target.closest("button") || target.closest("[data-magnetic]");
      
      if (isLink) {
        gsap.to(cursor, { scale: 0, duration: 0.2 });
        gsap.to(follower, { 
          scale: 3, 
          backgroundColor: "rgba(183, 255, 90, 0.1)", // Neon Lime with opacity
          borderColor: "rgba(183, 255, 90, 0.5)",
          duration: 0.2 
        });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(follower, { 
          scale: 1, 
          backgroundColor: "transparent",
          borderColor: "rgba(255, 255, 255, 0.5)",
          duration: 0.2 
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [pathname]);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
    </>
  );
}
