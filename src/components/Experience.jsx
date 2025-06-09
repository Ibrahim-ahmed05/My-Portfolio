import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 px-4"
        ><h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-4 sm:mb-6 text-center md:text-left">My Experience</h2>
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-l-4 border-red-500 dark:border-red-700">
                
                <div className="space-y-4 sm:space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400">Teaching Assistant</h3>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">FAST University Karachi</p>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">2025 - Present</p>
                            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                                <li>Assisting students with programming assignments</li>
                                <li>Conducting lab sessions</li>
                                <li>Grading assignments and providing feedback</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 