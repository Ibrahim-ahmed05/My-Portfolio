import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar2.png'; // Adjust path to your saved image

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 bg-gradient-to-br from-red-900 via-black to-red-950 dark:from-black dark:via-black dark:to-black relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ef4444" fillOpacity="0.13" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
                </svg>
            </motion.div>

            {/* Avatar Image - Typing Effect */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
                className="z-10 mb-4 md:mb-6"
            >
                <motion.img
                    src={avatar}
                    alt="Typing Avatar"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-4 border-red-500"
                    animate={{ y: [1, -2, -1], rotate: [0, -2, -4, 1] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </motion.div>

            {/* Text Content */}
            <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold text-white dark:text-white text-center mb-2 drop-shadow-lg px-4"
            >
                Ibrahim Ahmed Malik
            </motion.h1>
            <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="z-10 text-lg sm:text-xl md:text-2xl font-semibold text-red-600 dark:text-red-400 text-center mb-2 px-4"
            >
                Computer Science Undergraduate
            </motion.h2>
            <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="z-10 text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 text-center mb-6 px-4"
            >
                "Innovating through Code & AI."
            </motion.p>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.7 }}
                className="z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 px-4"
            >
                <a href="https://github.com/ibrahim-ahmed05" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2 rounded-lg bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-colors motion-safe:hover:scale-105">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/ibrahim-ahmed05" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2 rounded-lg bg-red-100 text-red-700 font-semibold shadow hover:bg-red-200 transition-colors motion-safe:hover:scale-105">
                    LinkedIn
                </a>
            </motion.div>
        </section>
    );
}
