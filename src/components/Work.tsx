import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const workProjects = [
    {
        title: "Bruised Passports App",
        description: "Developed a high-performance React Native travel app featuring travel tips and video guides across 7 continents. Optimized bundle size, caching, and asset delivery to achieve a 4.8/5 rating with 10,000+ installs on Google Play and App Store.",
        tags: ["React Native", "TypeScript", "Mobile Development", "Performance Optimization"],
        link: "https://play.google.com/store/apps/details?id=com.bruisedpassports",
        role: "Mobile App Developer"
    },
    {
        title: "Gruhas Collective Consumer Fund",
        description: "Built a venture capital fund website on Webflow for India-based VC focused on consumer sector. A collaboration platform between Gruhas and Collective Artists Network empowering bold visionaries to revolutionize the consumer realm.",
        tags: ["Webflow", "Web Development", "VC Platform", "Consumer Tech"],
        link: "https://www.gruhascollectivefund.com/",
        role: "Web Developer"
    },
    {
        title: "Born to Create",
        description: "Developed an influencer platform in React.js scaling to 500,000+ monthly interactions. Built robust dashboards and interactive campaign UIs for creators to access brand deals, talent managers, and monetization opportunities.",
        tags: ["React", "Dashboard Development", "Creator Economy", "Campaign Management"],
        link: "https://borntocreate.bigbang.social/",
        role: "Frontend Developer"
    },
    {
        title: "Creator Performance Tool",
        description: "Built an analytics dashboard in React for talent leadership at Collective Artists Network, cutting decision turnaround time by 35%. Provides comprehensive performance metrics and insights for creator management.",
        tags: ["React", "Analytics", "Data Visualization", "Performance Metrics"],
        link: "https://app.collectiveartists.com/dashboard/",
        role: "Frontend Developer"
    },
    {
        title: "Collective Artists Network",
        description: "Main corporate website for Collective Artists Network built in WordPress with YellowPencil customization. Maintained and enhanced the site for over a year, ensuring optimal performance and user experience.",
        tags: ["WordPress", "YellowPencil", "Website Maintenance", "CMS"],
        link: "https://www.collectiveartists.in/",
        role: "Web Developer & Maintainer"
    },
    {
        title: "Collective Creative Labs",
        description: "Strategy-led creative company website built and maintained by third-party team. Responsible for ongoing maintenance and updates for over a year, ensuring the platform showcases campaigns, directors, and brand experiences effectively.",
        tags: ["Website Maintenance", "Brand Platform", "Creative Showcase"],
        link: "https://www.collectivecreativelabs.in/",
        role: "Maintenance Engineer"
    }
];

export default function Work() {
    return (
        <section id="work" className="w-full relative py-20 z-10 min-h-screen flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 flex flex-col items-center text-center gap-6"
            >
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Professional Work<span className="text-primary">.</span>
                    </h2>
                    <p className="text-white/50 mt-4 text-base md:text-lg max-w-lg mx-auto">
                        Real-world projects I've built and maintained for leading brands and platforms.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
                {workProjects.map((project, index) => {
                    return (
                        <WorkCard key={index} project={project} index={index} />
                    );
                })}
            </div>
        </section>
    );
}

function WorkCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-full [perspective:1000px]"
        >
            <motion.div
                whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full w-full [transform-style:preserve-3d]"
            >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 [transform:translateZ(-50px)]" />

                <div className="relative glass-card h-full p-8 flex flex-col justify-between overflow-hidden bg-[#0a0a0a]/60 backdrop-blur-xl border-white/10 hover:bg-[#111111]/80 transition-colors duration-300 [transform:translateZ(20px)] shadow-2xl">

                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150 [transform:translateZ(-10px)]" />

                    <div className="[transform:translateZ(30px)]">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            <div className="flex gap-4 text-white/50">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <div className="mb-2">
                            <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">{project.role}</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-white/60 leading-relaxed mb-8 group-hover:text-white/80 transition-colors">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto [transform:translateZ(40px)]">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 font-mono text-xs rounded-full bg-white/5 border border-white/10 text-white/70 shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
