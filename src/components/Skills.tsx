import { motion } from "framer-motion";

const skillsData = {
    Frontend: ["React.js", "React Native", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Context API", "React Query", "React Hooks"],
    "Styling & UI": ["Tailwind CSS", "CSS3", "HTML5", "Flexbox", "Grid", "Responsive Design", "Mobile-First UI", "Design Systems"],
    Performance: ["Micro-Frontends", "Code Splitting", "Lazy Loading", "Bundle Optimization", "CDN", "Core Web Vitals", "Lighthouse", "SEO"],
    "Backend & Tools": ["Node.js", "Django", "REST APIs", "Strapi CMS", "MongoDB", "Git", "GitHub/GitLab", "CI/CD", "Jest", "React Testing Library", "Agile/Scrum"]
};

export default function Skills() {
    return (
        <section id="skills" className="w-full relative py-20 z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                    Technical Arsenal<span className="text-primary">.</span>
                </h2>
                <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
                    Technologies and tools I leverage to build highly performant, scalable, and maintainable applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {Object.entries(skillsData).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="glass-card p-8 group relative overflow-hidden"
                    >
                        {/* Decorative Background Hex */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/10 rotate-45 skew-x-12 rounded-3xl transition-transform duration-700 group-hover:scale-150 group-hover:rotate-90 pointer-events-none" />

                        <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-3">
                            <span className="w-8 h-px bg-primary hidden md:block"></span>
                            {category}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {items.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                                    className="px-4 py-2 bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/50 rounded-lg text-sm font-sans text-white/80 hover:text-white transition-all cursor-default shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:-translate-y-1"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
