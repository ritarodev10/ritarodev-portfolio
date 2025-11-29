"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const terminalLines = [
  ">_ deploying: next-app --with-ai --no-drama",
  ">_ status: shipping dashboards, bots, and tiny miracles",
  ">_ note: code may contain traces of coffee",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background elements
      gsap.to(".hero-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal animation
      gsap.from(textRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });
      // Terminal line rotation
      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      // Sequential Glow Animation for Workflow
      const workflowItems = gsap.utils.toArray(".workflow-item");
      gsap.to(workflowItems, {
        color: "#ccff00", // neon-lime
        textShadow: "0 0 10px #ccff00, 0 0 20px #ccff00",
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
          repeatDelay: 2, // Wait 2 seconds before repeating
        },
        duration: 0.5,
        ease: "power1.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const i = loopNum % terminalLines.length;
    const fullText = terminalLines[i];

    const handleTyping = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(20);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(40);
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const workflowSteps = ["Coffee", "Code", "Refactor", "Regret", "Repeat"];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-neon-lime opacity-20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={textRef} className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8 opacity-0 translate-y-10">
          
          {/* Terminal Line */}
          <div className="flex items-center gap-2 text-neon-lime font-mono text-sm md:text-base bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm min-h-[40px]">
            <span>{text}</span>
            <span className="w-2 h-4 bg-neon-lime animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter text-white uppercase leading-none">
              RITARODEV
            </h1>
            <p className="text-lg md:text-xl font-mono text-neon-lime">
              Riza Rohman — Full Stack Developer
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-text-secondary max-w-2xl leading-relaxed font-light">
            Building systems that somehow work — <span className="text-white/60 italic font-serif">don’t ask how.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-neon-lime text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Riza 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
            >
              Download CV
            </a>
          </div>

          {/* Trivia */}
          <div className="mt-12 font-mono text-xs text-text-secondary/50 flex items-center gap-2">
            {workflowSteps.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="workflow-item transition-colors duration-300">{step}</span>
                {index < workflowSteps.length - 1 && <span>→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
