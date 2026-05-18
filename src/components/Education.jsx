import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        institution: 'National University of Computer and Emerging Sciences',
        location: 'Karachi, Pakistan',
        degree: 'Bachelors in Computer Science',
        year: '2022 – 2026',
        gpa: '3.3/4.0',
        honors: [
            "Dean's List holder for achieving a 3.5+ SGPA",
            "Secured 97.7 percentile in HEC–P@SHA National Skill Competency Test"
        ],
        courses: [
            'Programming Fundamentals', 'Object-Oriented Programming', 'Data Structures',
            'Operating Systems', 'Software Engineering', 'Artificial Intelligence',
            'Data Science', 'Database Management Systems', 'Deep Learning',
            'Agile Project Management', 'Computer Networks', 'Information Security',
            'Recommender Systems'
        ],
        type: 'university'
    },
    {
        institution: 'Pakistan International School Jeddah',
        location: 'Jeddah, Saudi Arabia',
        degree: 'Pre-Engineering',
        year: '2008 – 2022',
        gpa: null,
        honors: [
            "Overall first position in Intermediate"
        ],
        courses: [],
        type: 'school'
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const pillVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 } }
};

export default function Education() {
    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
            {/* Static optimized background instead of rotating heavy gradient */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none hw-accelerate" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-16 md:mb-24 hw-accelerate"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 md:mb-6 tracking-tight text-center">Academic Journey</h2>
                    <div className="h-1.5 w-16 md:w-24 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full" />
                </motion.div>

                <div className="space-y-12 md:space-y-16 relative">
                    {/* Connecting Timeline Line */}
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-[38px] top-10 bottom-10 w-px bg-gradient-to-b from-rose-500 via-rose-500/20 to-transparent hidden md:block hw-accelerate" 
                    />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className="relative group pl-0 md:pl-24 hw-accelerate"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-9 top-10 w-4 h-4 rounded-full bg-rose-500 border-2 border-[#080808] shadow-[0_0_10px_rgba(225,29,72,0.6)] hidden md:block z-20 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-150 hw-accelerate" />

                            <div className="relative bg-[#0d0d0d] border border-white/5 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-xl md:hover:border-rose-500/30 transition-colors duration-500 overflow-hidden hw-accelerate">
                                
                                <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                                    {/* Left Column: Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                            {item.type === 'university' ? (
                                                <div className="p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-600/5 text-rose-400 border border-rose-500/20">
                                                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-white/5 text-slate-300 border border-white/10">
                                                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">{item.institution}</h3>
                                                <p className="text-slate-400 text-xs md:text-sm font-medium mt-1">{item.location}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 md:space-y-6">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
                                                <h4 className="text-lg md:text-xl font-semibold text-rose-400">{item.degree}</h4>
                                                <span className="hidden sm:block text-slate-600 text-lg md:text-xl">•</span>
                                                <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 text-slate-200 text-xs md:text-sm font-semibold border border-white/10 w-fit whitespace-nowrap">
                                                    {item.year}
                                                </span>
                                            </div>

                                            {item.gpa && (
                                                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-gradient-to-r from-rose-500/10 to-transparent border-l-2 md:border-l-4 border-rose-500 w-fit">
                                                    <p className="text-slate-300 text-xs md:text-sm font-medium">
                                                        CGPA: <span className="text-white font-bold text-sm md:text-lg ml-1">{item.gpa}</span>
                                                    </p>
                                                </div>
                                            )}

                                            {item.honors.length > 0 && (
                                                <div className="pt-2 md:pt-4">
                                                    <h5 className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.1em] md:tracking-[0.2em] mb-2 md:mb-4">Honors & Awards</h5>
                                                    <ul className="space-y-2 md:space-y-3">
                                                        {item.honors.map((honor, i) => (
                                                            <li key={i} className="flex items-start gap-2 md:gap-3 text-slate-300 text-xs md:text-sm font-medium">
                                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span className="leading-relaxed">{honor}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Coursework Grid */}
                                    {item.courses.length > 0 && (
                                        <div className="flex-1 xl:max-w-md pt-6 xl:pt-0 xl:pl-8 border-t xl:border-t-0 xl:border-l border-white/10 mt-4 xl:mt-0">
                                            <h5 className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.1em] md:tracking-[0.2em] mb-4 md:mb-6 flex items-center gap-2">
                                                <svg className="w-3 h-3 md:w-4 md:h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                Relevant Coursework
                                            </h5>
                                            
                                            <motion.div 
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="show"
                                                viewport={{ once: true, margin: "-50px" }}
                                                className="flex flex-wrap gap-2 md:gap-2.5 hw-accelerate"
                                            >
                                                {item.courses.map((course, i) => (
                                                    <motion.span 
                                                        variants={pillVariant}
                                                        key={i} 
                                                        className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs lg:text-sm font-medium bg-white/[0.03] text-slate-300 border border-white/[0.08] rounded-lg md:rounded-xl shadow-sm hw-accelerate"
                                                    >
                                                        {course}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}