import { useScroll } from "framer-motion";
import { useRef } from "react";
import Scene from "./components/canvas/Scene";
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

  // Pass MotionValue directly to avoid React re-renders on scroll

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-background text-white font-sans selection:bg-primary/30 min-h-screen">

      {/* Global 3D WebGL Scene */}
      <Scene scrollProgress={scrollYProgress} />

      {/* Subtle Grid overlay for futuristic feel - keep z-index above scene but behind content */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

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
