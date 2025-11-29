"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";

const TESTIMONIALS = [
  {
    id: "0x1A4",
    text: "He said it was 'just a small change'. Three commits later, we had a new dashboard.",
    author: "Project Manager",
    role: "Internal Monologue",
    status: "MERGED",
    color: "text-neon-lime",
  },
  {
    id: "0x2B8",
    text: "Explains complex stuff like he’s talking to a future version of himself who forgot everything.",
    author: "Senior Dev",
    role: "Code Review",
    status: "APPROVED",
    color: "text-neon-cyan",
  },
  {
    id: "0x3C1",
    text: "Our WhatsApp notifications stopped waking us up at 3AM. 10/10.",
    author: "Client",
    role: "Real Human",
    status: "DEPLOYED",
    color: "text-neon-pink",
  },
  {
    id: "0x4D9",
    text: "His pull requests are long, but so are the explanations. Somehow, that helps.",
    author: "Team Lead",
    role: "GitHub",
    status: "REVIEWING",
    color: "text-white",
  },
  {
    id: "0x5E2",
    text: "I asked for a landing page. We got a landing page, an admin view, and an automation idea.",
    author: "Startup Founder",
    role: "Visionary",
    status: "SCALING",
    color: "text-neon-lime",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const text = textRef.current;
      
      if (!track || !text) return;

      // Calculate total width to scroll
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%", // Scroll distance
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Parallax Text Animation
      gsap.to(text, {
        xPercent: -20, // Move text slightly slower/faster
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-background overflow-hidden">
      {/* Scroll Trigger Container - Height defines scroll duration */}
      <div ref={triggerRef} className="h-screen flex items-center relative overflow-hidden">
        
        {/* Parallax Background Text */}
        <div ref={textRef} className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.04] pointer-events-none select-none z-0">
          <span className="text-[30vw] font-black font-heading leading-none text-white">
            FEEDBACK FEEDBACK FEEDBACK
          </span>
        </div>

        {/* Horizontal Track */}
        <div ref={trackRef} className="flex gap-8 px-12 md:px-24 relative z-10 items-center">
          
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[25vw] h-[50vh] flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black font-heading text-white mb-6 leading-tight">
              TOTALLY <br />
              <span className="text-neon-lime">REAL</span> <br />
              FEEDBACK
            </h2>
            <p className="text-lg text-text-secondary font-mono max-w-md">
              // Collected from the internet, internal monologues, and possibly AI.
            </p>
          </div>

          {/* Testimonial Cards */}
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[85vw] md:w-[30vw] h-[40vh] md:h-[50vh]">
              <GlassCard className="h-full p-8 md:p-12 flex flex-col justify-between border-white/10 hover:border-neon-lime/50 transition-colors duration-500 group relative overflow-hidden">
                
                {/* Decorative "Code" Header */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="font-mono text-xs text-white/30">
                    COMMIT: {item.id}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="text-5xl text-white/10 font-serif absolute -top-4 -left-2">“</div>
                  <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed relative z-10">
                    {item.text}
                  </p>
                </div>
                
                <div className="mt-auto pt-8 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xl ${item.color}`}>
                        {item.author[0]}
                      </div>
                      <div>
                        <p className="text-white font-bold text-base">{item.author}</p>
                        <p className="text-white/40 text-xs font-mono uppercase tracking-wider">{item.role}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block">
                      <span className={`text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-neon-lime/5 rounded-full blur-[100px] group-hover:bg-neon-lime/10 transition-colors duration-500 pointer-events-none" />
              </GlassCard>
            </div>
          ))}
          
          {/* End Spacer */}
          <div className="w-[10vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
