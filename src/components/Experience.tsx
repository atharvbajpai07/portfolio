import { motion } from "framer-motion";

const experiences = [
    {
        company: "Collective Artists Network",
        role: "Senior Software Engineer",
        period: "Sep 2024 – Present",
        location: "Bengaluru",
        achievements: [
            "Owned and shipped the Bruised Passports React Native app — optimized bundle size, caching, and asset delivery to achieve a 4.8/5 rating with 10,000+ installs.",
            "Built an analytics dashboard in React for talent leadership, cutting decision turnaround time by 35%.",
            "Developed the Born to Create influencer platform (React + Django), scaling it to handle 500,000+ monthly interactions during peak campaigns.",
            "Improved page load times by ~50% on media-heavy marketing sites through Core Web Vitals and SEO fixes.",
        ],
    },
    {
        company: "Guardians of IT",
        role: "Freelance Front-End Developer",
        period: "Sep 2023 – Aug 2024",
        location: "Remote",
        achievements: [
            "Built campaign UIs and dashboards in React and TypeScript that improved client funnel conversion by ~40%.",
            "Achieved 95+ Lighthouse scores on all projects through code splitting, lazy loading, and image optimization.",
            "Developed reusable component libraries aligned with client design systems, cutting development time by 30% across projects.",
            "Collaborated directly with non-technical clients to scope and ship frontend features end-to-end.",
        ],
    },
    {
        company: "muvin",
        role: "Front-End Software Engineer / Intern",
        period: "May 2021 – Aug 2023",
        location: "Bengaluru",
        achievements: [
            "Built Video KYC and UPI payment flows in React with SIM binding and backend integration, increasing wallet onboarding completion by 40%.",
            "Maintained core wallet features — onboarding, KYC, payments, and offers.",
            "Built Finmania as a micro-frontend testing platform in React.",
            "Reduced core bundle size by ~30% through lazy loading, code splitting, and CDN optimizations.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="w-full relative py-32 min-h-screen flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                    Experience<span className="text-primary">.</span>
                </h2>
                <p className="text-white/50 mt-4 text-base md:text-lg mx-auto">Where I've built and scaled products.</p>
            </motion.div>

            <div className="relative border-l border-white/10 ml-4 md:mx-auto pl-8 md:pl-12 flex flex-col gap-16 max-w-3xl">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative group max-w-3xl"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300" />

                        <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold font-display">{exp.role}</h3>
                                    <div className="text-primary font-medium mt-1">{exp.company}</div>
                                </div>
                                <div className="flex flex-col md:items-end text-sm text-white/40 font-mono">
                                    <span>{exp.period}</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mt-6">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start text-white/60 leading-relaxed group/item">
                                        <span className="text-primary mr-3 mt-1.5 opacity-50 text-xs">▹</span>
                                        <span className="group-hover/item:text-white/80 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
