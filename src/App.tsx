import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax background transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-background text-white font-sans selection:bg-primary/30 min-h-screen">

      {/* Dynamic Parallax Backgrounds */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"
      />

      <motion.div
        style={{ y: starsY }}
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        aria-hidden="true"
      >
        <div className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
        <div className="absolute top-[30%] left-[80%] w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_15px_#8b5cf6]" />
        <div className="absolute top-[60%] left-[10%] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_20px_#06b6d4]" />
        <div className="absolute top-[80%] left-[60%] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_#fff]" />
        <div className="absolute top-[40%] left-[40%] w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_12px_#3b82f6]" />
      </motion.div>

      {/* Grid overlay for futuristic feel */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <main className="w-full max-w-7xl px-6 sm:px-12 md:px-24 flex flex-col gap-32 pb-32">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>

    </div>
  );
}

export default App;
