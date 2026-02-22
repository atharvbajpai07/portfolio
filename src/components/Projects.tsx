import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Reclame Hub",
        description: "SEO-Optimized marketing site for a digital agency. Built to hit 95+ Lighthouse scores for performance and accessibility using React and lazy loading.",
        tags: ["React", "Netlify", "SEO", "Tailwind CSS"],
        link: "#",
        github: "#"
    },
    {
        title: "ShopEase",
        description: "Full-Stack e-commerce platform with a mobile-first layout to reduce checkout friction. Features product filtering and seamless buying flow.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Bruised Passports",
        description: "High-performance React Native app achieving a 4.8/5 rating with 10,000+ installs through optimized bundle size and asset delivery caching.",
        tags: ["React Native", "TypeScript", "App Store", "Google Play"],
        link: "#",
        github: "#"
    },
    {
        title: "Born to Create",
        description: "Influencer platform scaling to 500,000+ monthly interactions. Built robust dashboards and interactive campaign UIs.",
        tags: ["React", "Django", "Micro-Frontends"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full relative py-20 z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Selected Work<span className="text-primary">.</span>
                    </h2>
                    <p className="text-white/50 mt-4 text-lg max-w-lg">
                        A collection of projects focusing on high-performance web applications and mobile experiences.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative h-full"
                    >
                        {/* Glowing Background Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform" />

                        <div className="relative glass-card h-full p-8 flex flex-col justify-between overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-xl border-white/5 group-hover:bg-[#111111]/90 transition-all duration-300">

                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />

                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                    </div>
                                    <div className="flex gap-4 text-white/50">
                                        <a href={project.github} className="hover:text-primary transition-colors"><Github size={20} /></a>
                                        <a href={project.link} className="hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                <p className="text-white/60 leading-relaxed mb-8">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 font-mono text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
