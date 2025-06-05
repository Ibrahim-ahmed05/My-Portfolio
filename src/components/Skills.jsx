import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
    const skills = [
        {
            category: 'Languages',
            items: ['C', 'C++', 'JavaScript', 'Python', 'HTML/CSS', 'SQL'],
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            category: 'Frameworks',
            items: ['React JS', 'Node JS', 'Express','Angular', 'Tailwind', 'Bootstrap', 'Material UI', 'Scikit learn', 'Pandas', 'Numpy'],
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="#ef4444" strokeWidth="2" />
                    <path d="M12 6L12 18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 12L18 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            category: 'Tools',
            items: ['Git', 'VS Code', 'MongoDB', 'PostgreSQL', 'Vercel','MySQL','Oracle', 'CISCO Packet Tracer', 'Wireshark','Microsoft Office'],
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" />
                    <path d="M12 8L12 16" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 12L16 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 px-4"
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-8 sm:mb-12 text-center md:text-left">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white dark:bg-black rounded-xl shadow-lg p-4 sm:p-6 border border-red-200 dark:border-red-800"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400">{skill.category}</h3>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {skill.items.map((item) => (
                                <li key={item} className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
} 