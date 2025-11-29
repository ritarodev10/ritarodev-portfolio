"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lines = [
  "FULL-STACK BUT NOT FULL-SLEEP",
  "BUG FIXER BY NECESSITY",
  "DEPLOYING WITH HOPE",
  "DEBUGGING WITH REGRET",
  "COFFEE-POWERED CODING",
  "CURSOR ENJOYER",
  "DOCUMENTS LATER",
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xPercent = 0;
    let direction = -1;
    const isMobile = window.innerWidth < 768;
    const speed = isMobile ? 0.2 : 0.1;

    const animate = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      
      gsap.set(sliderRef.current, { xPercent: xPercent });
      xPercent += speed * direction;
      requestAnimationFrame(animate);
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onUpdate: (self) => {
          direction = self.direction * -1;
        },
      });
    }, containerRef);

    requestAnimationFrame(animate);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 bg-neon-lime/5 border-y border-neon-lime/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 bg-neon-lime/20 text-neon-lime text-[10px] font-mono px-2 py-1 uppercase tracking-widest">
        Currently building things for real users
      </div>
      
      <div ref={sliderRef} className="flex whitespace-nowrap">
        {/* Triple duplication for smooth infinite loop */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            {lines.map((line, index) => (
              <span key={index} className="text-4xl md:text-6xl font-bold font-heading text-transparent stroke-text opacity-80">
                {line} <span className="text-neon-lime mx-4">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
}
