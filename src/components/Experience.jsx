import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

const experiences = [
    {
        title: "Software Developer Intern",
        company: "Vison71 Technologies",
        period: "2025 - Present",
        icon: <FaLaptopCode size={24} />,
        responsibilities: [
            "Developing and optimizing MERN stack applications for enhanced performance and scalability.",
            "Designing highly engaging 3D web experiences using modern libraries like Framer and Spline.",
            "Integrating AI features and workflows into products via Hugging Face and n8n."
        ]
    },
    {
        title: "Teaching Assistant",
        company: "FAST-NUCES",
        period: "2025 - Present",
        icon: <FaChalkboardTeacher size={24} />,
        responsibilities: [
            "Assisting in delivering lectures and explaining complex architectural concepts to students.",
            "Conducting hands-on lab sessions and grading assignments to ensure active student learning.",
            "Providing one-on-one support to students struggling with coursework to improve retention."
        ]
    }
];

const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 15 } }
};

export default function Experience() {
    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_rgba(225,29,72,0.15),_transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(225,29,72,0.1),_transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="flex flex-col items-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 tracking-tight">Work Experience</h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full" />
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-12 relative"
                >
                    {/* Center line for large screens */}
                    <div className="hidden md:block absolute left-[45px] top-10 bottom-10 w-px bg-gradient-to-b from-rose-500/50 via-rose-500/20 to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariant}
                            whileHover={{ x: 10 }}
                            className="relative flex flex-col md:flex-row gap-8 items-start group"
                        >
                            {/* Icon Container */}
                            <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-[2rem] bg-[#0d0d0d] border border-white/10 flex items-center justify-center text-rose-400 shadow-2xl group-hover:border-rose-500/50 group-hover:text-white group-hover:bg-rose-600 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(225,29,72,0.4)]">
                                {exp.icon}
                            </div>
                            
                            {/* Content Card */}
                            <div className="flex-grow bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-rose-500/30 transition-colors duration-500 relative overflow-hidden">
                                {/* Hover Gradient Reveal */}
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-6 gap-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-rose-400 transition-colors">{exp.title}</h3>
                                            <h4 className="text-xl text-rose-300 font-semibold">{exp.company}</h4>
                                        </div>
                                        <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#080808] border border-white/10 text-sm font-bold tracking-widest uppercase text-slate-300 shadow-inner w-max">
                                            {exp.period}
                                        </span>
                                    </div>
                                    
                                    <ul className="space-y-4">
                                        {exp.responsibilities.map((task, i) => (
                                            <li key={i} className="flex items-start text-slate-400 font-medium">
                                                <svg className="w-6 h-6 text-rose-500 mr-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="leading-relaxed text-base">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}