import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-panel py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-xl font-bold font-heading tracking-tighter text-white hover:text-neon-lime transition-colors">
            RITARODEV
          </Link>
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} — Built by Riza Rohman.
          </p>
          <p className="text-xs text-text-secondary/50">
            No AI was harmed during this deployment.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors" data-magnetic>
            <Github size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors" data-magnetic>
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors" data-magnetic>
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@ritaro.dev" className="text-text-secondary hover:text-white transition-colors" data-magnetic>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
