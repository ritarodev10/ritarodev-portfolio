"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixelMedal } from "@/components/ui/PixelIcons";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          // markers: true, // Debugging
        },
      });

      // Initial state
      gsap.set(contentRef.current, { opacity: 0, scale: 0.8 });

      // Animation sequence
      tl.to(topTextRef.current, {
        yPercent: -100,
        opacity: 0.2,
        ease: "power2.inOut",
      }, "split")
      .to(bottomTextRef.current, {
        yPercent: 100,
        opacity: 0.2,
        ease: "power2.inOut",
      }, "split")
      .to(contentRef.current, {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      }, "split+=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="relative bg-background">
      <div ref={triggerRef} className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
        
        {/* Background Noise/Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
        />

        {/* Massive Typography - Top */}
        <h2 ref={topTextRef} className="text-[12vw] md:text-[15vw] font-black font-heading leading-none tracking-tighter text-white z-10 select-none mix-blend-difference">
          TOP
        </h2>

        {/* The Reveal Content */}
        <div ref={contentRef} className="absolute z-20 max-w-2xl px-6 text-center">
          <div className="bg-panel/90 backdrop-blur-xl border border-neon-lime/30 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(183,255,90,0.1)]">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-neon-lime/10 rounded-full border border-neon-lime/20 animate-pulse">
                <PixelMedal className="w-12 h-12 text-neon-lime" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold font-heading text-white mb-6">
              CLASSIFIED WORK
            </h3>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-mono">
              “Everything I’ve built is locked behind NDAs, VPNs, and security protocols I barely understand. <span className="text-neon-lime">Translation: I can’t show you anything.</span> Come back once a project goes public… or once I manage to finish a side project without it collapsing in staging like a wet cardboard box.”
            </p>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-2">
              <p className="text-sm text-neon-lime/70 font-mono uppercase tracking-widest">
                Status: Deployment Pending
              </p>
            </div>
          </div>
        </div>

        {/* Massive Typography - Bottom */}
        <h2 ref={bottomTextRef} className="text-[12vw] md:text-[15vw] font-black font-heading leading-none tracking-tighter text-white z-10 select-none mix-blend-difference">
          SECRET
        </h2>
      </div>
    </section>
  );
}
