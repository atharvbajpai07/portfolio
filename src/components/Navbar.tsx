import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex items-center justify-between gap-8 text-sm font-medium w-[90vw] md:w-max max-w-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
            <a href="#" className="font-display font-bold text-xl tracking-tighter hover:text-primary transition-colors">
                AB<span className="text-primary">.</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-white/70">
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Work</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-5 md:border-l md:border-white/20 md:pl-5">
                <a href="https://linkedin.com/in/atharv-bajpai" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white hover:scale-110 transition-all">
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </motion.nav>
    );
}
