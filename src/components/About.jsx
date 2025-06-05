import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/who.jpg';

// Animation variants for staggered text
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 px-4"
        >
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-l-4 border-red-500 dark:border-red-700 flex flex-col md:flex-row items-center gap-4 md:gap-6">

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-red-600 to-red-800 flex items-center justify-center shadow-lg"
                >
                    <motion.img
                        src={avatar}
                        alt="Avatar"
                        className="w-32 h-32 sm:w-28 sm:h-32 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-4 border-red-500"
                        animate={{ y: [0, -2, 0], rotate: [0, -2, 0] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 1.5,
                            ease: 'easeInOut',
                            delay: 1,
                        }}
                    />
                </motion.div>

                <motion.div
                    className="space-y-3 sm:space-y-4 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={textVariant}
                        className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        variants={textVariant}
                        className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed"
                    >
                        I'm a CS undergrad and Teaching Assistant at FAST NUCES Karachi, passionate about software development and AI.
                    </motion.p>

                    <motion.p
                        variants={textVariant}
                        className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed"
                    >
                        I build full-stack apps using JavaScript and Python, and enjoy working on AI projects like predictive models and optimizers.
                    </motion.p>

                    <motion.p
                        variants={textVariant}
                        className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed"
                    >
                        My goal is to solve real-world problems with intelligent, scalable, and impactful tech.
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
}
