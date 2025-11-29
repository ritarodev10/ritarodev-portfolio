"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Breather() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".breather-orb", 
        { scale: 0, opacity: 0.8 },
        {
          scale: 4,
          opacity: 0,
          duration: 4,
          ease: "power1.out",
          stagger: {
            each: 1,
            repeat: -1,
          }
        }
      );

      gsap.from(".breather-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-48 md:py-80 relative overflow-hidden flex items-center justify-center">
      {/* Animated Orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="breather-orb absolute w-[300px] h-[300px] rounded-full border border-neon-lime/20" />
        <div className="breather-orb absolute w-[300px] h-[300px] rounded-full border border-neon-lime/10" />
        <div className="breather-orb absolute w-[300px] h-[300px] rounded-full border border-neon-lime/5" />
      </div>

      <div className="relative z-10 text-center breather-text px-6">
        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-white mb-6">
          Your thumb must be tired.
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-lg mx-auto leading-relaxed">
          Take a breath. The next section is just a contact form, so you're almost done.
        </p>
      </div>
    </section>
  );
}
