import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Stack from "@/sections/Stack";
import Testimonials from "@/sections/Testimonials";
import Breather from "@/sections/Breather";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Testimonials />
      <Breather />
      <Contact />
    </div>
  );
}
