import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
    const education = [
        {
            institution: "National University of Computer and Emerging Sciences, Karachi",
            degree: "BS Computer Science",
            year: "2022 - 2026",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            institution: "Pakistan International School, Jeddah",
            degree: "Pre Engineering",
            year: "2008 - 2022",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto py-12 sm:py-16 md:py-24 px-4"
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-6 sm:mb-8 text-center md:text-left">Education</h2>
            <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.institution}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white dark:bg-black rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-red-500 dark:border-red-700"
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                                {edu.icon}
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400">{edu.institution}</h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{edu.degree}</p>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{edu.year}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
} 