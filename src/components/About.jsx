import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from './CodeEditor';

const stats = [
    { label: 'CGPA', value: '3.3', suffix: '/4.0' },
    { label: 'Projects', value: '10', suffix: '+' },
    { label: 'Percentile', value: '97.7', suffix: '%' },
    { label: 'Experience', value: '1', suffix: 'yr+' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function About() {
    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            {/* Dynamic Background */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-rose-900/10 rounded-[40%] blur-[100px]" />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8"
            >
                {/* High Impact Heading */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 tracking-tight">About Me</h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
                    {/* Left - Code Editor (Col Span 7) */}
                    <motion.div variants={itemVariants} className="lg:col-span-7 min-w-0 w-full">
                        <CodeEditor />
                        
                        {/* Contact info below editor */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:iamalik2005@gmail.com"
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-white transition-colors shadow-lg"
                            >
                                <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Me
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="https://linkedin.com/in/ibrahim-ahmed05"
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-white transition-colors shadow-lg"
                            >
                                <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z" />
                                </svg>
                                LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right - Avatar + Stats (Col Span 5) */}
                    <div className="lg:col-span-5 flex flex-col items-center gap-10 min-w-0 w-full">
                        {/* Avatar */}
                        <motion.div variants={itemVariants} className="relative group">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-rose-600/30 via-rose-500/10 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500" />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group-hover:border-rose-500/30 transition-colors duration-500 flex items-center justify-center bg-[#0a0a0a]">
                                <dotlottie-wc 
                                    src="https://lottie.host/33f62aae-370e-4647-9ebe-673eb0294f64/OyKHqu82zm.lottie" 
                                    style={{ width: "100%", height: "100%" }} 
                                    autoplay 
                                    loop
                                ></dotlottie-wc>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-40 pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.06)" }}
                                    className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 text-center transition-all duration-300 shadow-xl backdrop-blur-sm"
                                >
                                    <div className="text-3xl font-extrabold text-white tracking-tight">
                                        {stat.value}
                                        <span className="text-rose-500 text-xl font-bold">{stat.suffix}</span>
                                    </div>
                                    <div className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
