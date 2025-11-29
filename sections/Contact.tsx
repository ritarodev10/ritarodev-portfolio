"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Github, Mail, MessageCircle, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rizarohman@ritaro.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={containerRef} id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="contact-anim text-5xl md:text-7xl font-bold font-heading tracking-tighter text-white leading-tight">
          Let’s build something that lets you chill at night.
          </h2>
          
          <p className="contact-anim text-xl md:text-2xl text-text-secondary max-w-2xl">
            Big idea, tiny spark, or half-baked concept? <br /> Bring it over. Whatever stage it’s in, I’ll help you cook it so you don’t have to live on caffeine and panic.
          </p>

          <div className="contact-anim flex flex-col md:flex-row items-center gap-4 mt-8">
            <Link
              href="https://wa.me/6287855826341"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neon-lime text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group"
              data-magnetic
            >
              <MessageCircle size={20} />
              WhatsApp
            </Link>
          
            <button
              onClick={handleCopyEmail}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 relative"
              data-magnetic
            >
              {copied ? <Check size={20} /> : <Mail size={20} />}
              {copied ? "'rizarohman@ritaro.dev' copied!" : "Email Me"}
              
              {/* Popup Toast */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap pointer-events-none border border-white/10"
                  >
                    Email copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
