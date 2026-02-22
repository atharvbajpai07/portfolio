import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full relative py-32 z-10 flex flex-col items-center">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative glass-card p-10 md:p-16 w-full max-w-4xl text-center rounded-3xl overflow-hidden group"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connect</span>
                </h2>

                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                    Whether you have a question, a project in mind, or just want to say hi, my inbox is always open. Let's build something extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="mailto:atharvbajpai07@gmail.com"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                        <span className="relative flex items-center gap-2">
                            <Mail className="w-5 h-5" /> Say Hello
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com/in/atharv-bajpai"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto"
                    >
                        LinkedIn <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Footer text inside card */}
                <div className="mt-20 pt-8 border-t border-white/10 text-white/30 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Atharv Bajpai.</p>
                    <p>Designed with <span className="text-primary">React</span> & <span className="text-secondary">Tailwind</span></p>
                </div>
            </motion.div>
        </section>
    );
}
