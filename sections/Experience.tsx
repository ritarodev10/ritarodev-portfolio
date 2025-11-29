"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";

const experiences = [
  {
    company: "CloudNow",
    role: "Full‑Stack Developer",
    period: "Dec 2024 – Present",
    desc: "Cloud solutions, hosting, and cybersecurity.",
    points: [
      "Building and maintaining company + client sites end‑to‑end.",
      "Shipping internal dashboards and client platforms with clean, scalable APIs.",
      "Working on Mailtrace (DMARC SaaS) and reusable admin + RAG kits.",
    ],
    honest: "Peak happiness: when the deployment pipeline runs green on the first try.",
  },
  {
    company: "Ingersoll Rand",
    role: "Frontend Developer",
    period: "Nov 2024 – Mar 2025",
    desc: "Global industrial tech, compressors and mission‑critical tools.",
    points: [
      "Built multi‑site templates in Next.js to speed up brand rollouts.",
      "Turned a large design system into reusable atomic components.",
    ],
    honest: "Learned that even industrial compressors need pixel‑perfect spacing.",
  },
  {
    company: "Monis",
    role: "Full‑Stack Developer",
    period: "Sep 2024 – Aug 2025",
    desc: "Global rental marketplace for ergonomic desks, chairs, and gear.",
    points: [
      "Developed an advanced subscription‑based checkout and billing flow.",
      "Built an admin dashboard for merchants to manage rentals and returns.",
      "Created WhatsApp automation + AI chatbot to handle most notifications and inquiries.",
    ],
    honest: "If a rental flow survives all edge cases, it deserves a celebration.",
  },
  {
    company: "NavDeck",
    role: "Frontend Developer",
    period: "Apr 2024 – Aug 2024",
    desc: "AI‑driven skill mapping and learning paths.",
    points: [
      "Co‑built the core dashboard from Figma to MVP.",
      "Implemented AI‑driven career mapping and an interactive LMS experience.",
    ],
    honest: "Taught an app how to suggest what people should learn next.",
  },
  {
    company: "Beamco",
    role: "Frontend Developer",
    period: "Apr 2023 – Mar 2024",
    desc: "Music & artist community with real‑time fan engagement.",
    points: [
      "Led frontend for official site, admin dashboard, and artist dashboard.",
      "Built an offline concert stage screen integrated with real‑time mobile tipping.",
    ],
    honest: "Nothing like watching your WebSocket power a live crowd.",
  },
  {
    company: "G2Academy",
    role: "Full‑Stack Developer",
    period: "Jan 2022 – Feb 2023",
    desc: "Tech education and bootcamps.",
    points: [
      "Redesigned the company site for better navigation and conversion.",
      "Overhauled a Vue‑based CMS for national program reporting.",
    ],
    honest: "Education platforms demand two things: clean UX and cleaner data.",
  },
  {
    company: "Ternaknesia",
    role: "Web Developer",
    period: "Apr 2018 – Feb 2020",
    desc: "Agritech startup for digital livestock commerce.",
    points: [
      "Developed and optimized the main website and flows for online farming.",
      "Helped ship features that supported hundreds of products and transactions.",
    ],
    honest: "Yes, I’ve debugged code that sells cows on the internet.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Grid Animation
      gsap.to(gridRef.current, {
        backgroundPosition: "0px 100px",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Line drawing animation
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // Experience cards animation
      const cards = gsap.utils.toArray(".experience-card");
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
      />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-lime/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter text-white mb-8 text-center">
          Experience
        </h2>

        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto text-center mb-20 leading-relaxed">
          I’ve worked with teams across Canada, the US, Europe, and Asia — usually somewhere between <span className="text-white italic">“we have an idea”</span> and <span className="text-white italic">“this needs to go live yesterday.”</span>
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-lime via-cyan-glow to-transparent -translate-x-1/2 block" 
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center relative experience-card`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 border-neon-lime rounded-full -translate-x-1/2 z-10 block shadow-[0_0_10px_rgba(183,255,90,0.5)]" />

                {/* Content */}
                <div className="w-full md:w-1/2 pl-12 md:px-12">
                  <GlassCard className="relative overflow-hidden group border-white/5 hover:border-neon-lime/30 transition-colors duration-500">
                    <div className="absolute top-0 left-0 w-1 h-full bg-neon-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-lime transition-colors">{exp.company}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="text-neon-lime font-medium">{exp.role}</span>
                          <span className="text-text-secondary">•</span>
                          <span className="text-text-secondary font-mono">{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-text-secondary text-sm">{exp.desc}</p>

                      <ul className="list-disc list-outside ml-4 text-sm text-text-secondary space-y-1 marker:text-neon-lime">
                        {exp.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      <div className="mt-2 pt-4 border-t border-white/5">
                        <p className="text-xs font-mono text-cyan-glow/80 italic">
                          "{exp.honest}"
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
                
                {/* Empty side for layout balance */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>

          {/* Spacing Trivia */}
          <div className="text-center mt-24">
            <p className="text-xs text-text-secondary/50 font-mono">
              I once deployed something that worked on the first try. Still suspicious of that moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
