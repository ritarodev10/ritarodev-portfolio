"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/providers/SmoothScroll";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href);
    }
    setIsOpen(false);
  };

  if (pathname === "/cv") return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-heading tracking-tighter hover:text-neon-lime transition-colors" data-magnetic>
          RITARODEV
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group cursor-pointer"
              data-magnetic
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-lime transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neon-lime transition-colors cursor-pointer"
            data-magnetic
          >
            Let's Talk
          </a>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-transparent border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Download size={16} />
            Download CV
          </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-magnetic
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-text-secondary hover:text-neon-lime transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-5 py-3 bg-white text-black text-center font-bold rounded-full hover:bg-neon-lime transition-colors mt-2"
            >
              Let's Talk
            </a>
            <a
              href="/docs/2025 - CV of Riza Taufiqur Rohman.pdf"
              download
              className="flex items-center justify-center gap-2 px-5 py-3 bg-transparent border border-white/20 text-white text-center font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
