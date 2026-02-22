import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative">
            <motion.div style={{ y, opacity }} className="max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex glass px-4 py-2 rounded-full text-sm font-mono text-primary mb-6 items-center bg-primary/10 border-primary/30"
                >
                    <span className="relative flex h-3 w-3 mr-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight leading-[1.1] mb-6"
                >
                    Atharv <br /> Bajpai.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-2xl md:text-3xl font-sans text-white/70 font-light mb-6"
                >
                    Crafting futuristic <span className="text-primary font-medium">Frontend Experiences</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg sm:text-lg md:text-xl text-white/50 font-sans max-w-2xl mb-10 leading-relaxed"
                >
                    Frontend Engineer with 4+ years of experience building scalable web and mobile products. Focused on React, React Native, and pushing the boundaries of what's possible in the browser.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-white/10 border border-white/20 rounded-full overflow-hidden transition-all hover:bg-white/20 hover:scale-105 active:scale-95 glass">
                        <span className="relative flex items-center gap-2">
                            View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-8 py-4 font-medium text-white/80 hover:text-white transition-colors gap-2">
                        <Download className="w-4 h-4" /> Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center gap-6 mt-12 text-white/40"
                >
                    <a href="https://linkedin.com/in/atharv-bajpai" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:atharvbajpai07@gmail.com" className="hover:text-primary transition-colors hover:scale-110">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
