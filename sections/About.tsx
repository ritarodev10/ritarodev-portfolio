"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import ProfilePicture from "@/components/ui/ProfilePicture";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const moveDistance = isMobile ? 150 : 50;

      // Marquee Animations
      gsap.to(marqueeRef1.current, {
        xPercent: -moveDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(marqueeRef2.current, {
        xPercent: moveDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Card Reveal
      gsap.from(".about-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-32 md:py-48 relative overflow-hidden bg-background">
      {/* Kinetic Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div ref={marqueeRef1} className="whitespace-nowrap text-[15vw] font-black font-heading leading-none text-white">
          FULL STACK DEVELOPER AUTOMATION ADDICT 
        </div>
        <div ref={marqueeRef2} className="whitespace-nowrap text-[15vw] font-black font-heading leading-none text-white ml-[-50vw]">
          CLEAN CODE MESSY DESK SHIP IT FAST
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="about-card">
            <GlassCard className="p-8 md:p-12 border-t border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                
                {/* Avatar / Icon Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-panel rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-neon-lime/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <ProfilePicture className="w-16 h-16 md:w-24 md:h-24 text-white group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Glitch lines */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  </div>
                </div>

                <div className="flex-grow space-y-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-mono text-neon-lime tracking-widest uppercase">
                      // System.Identity
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-heading text-white">
                      Who is Riza?
                    </h3>
                  </div>

                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    I’m a <span className="text-white font-medium">full-stack developer</span> who likes building things that feel clean, intuitive, and slightly smarter than they should be. I care about UX clarity, thoughtful interfaces, and shipping features that make users think, “oh, that was nice.”
                  </p>

                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    I also spend a questionable amount of time fixing design choices I made 48 hours earlier.
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
                      <p className="flex-1 text-sm md:text-base font-mono text-white/80 italic">
                      “Fully capable of coding alone, but why suffer when AI exists?”
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-white/50">STATUS:</span>
                      <span className="text-neon-lime drop-shadow-[0_0_8px_rgba(183,255,90,0.5)] animate-pulse">ONLINE</span>
                    </div>
                    <span className="hidden md:inline text-white/30">•</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white/50">LOC:</span>
                      <span className="text-neon-lime drop-shadow-[0_0_8px_rgba(183,255,90,0.5)] animate-pulse">MALANG</span>
                    </div>
                    <span className="hidden md:inline text-white/30">•</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white/50">UPTIME:</span>
                      <span className="text-neon-lime drop-shadow-[0_0_8px_rgba(183,255,90,0.5)] animate-pulse">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
