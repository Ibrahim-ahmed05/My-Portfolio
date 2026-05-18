import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import avatar from '../assets/avatar2.png';
import resume from '../assets/ResumeLatest.pdf';

const roles = [
    'Software Developer',
    'MERN Stack Engineer',
    'AI/ML Enthusiast',
    'Final Year CS Student',
];

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [speed, setSpeed] = useState(120);

    useEffect(() => {
        const role = roles[roleIdx];
        if (!deleting && text === role) {
            const t = setTimeout(() => setDeleting(true), 2200);
            return () => clearTimeout(t);
        }
        if (deleting && text === '') {
            setDeleting(false);
            setRoleIdx(p => (p + 1) % roles.length);
            return;
        }
        const t = setTimeout(() => {
            setText(deleting ? role.slice(0, text.length - 1) : role.slice(0, text.length + 1));
            setSpeed(deleting ? 40 : 120);
        }, speed);
        return () => clearTimeout(t);
    }, [text, deleting, roleIdx, speed]);

    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-transparent">
            {/* HW-Accelerated Background Radial Glow */}
            <div className="absolute inset-0 pointer-events-none hw-accelerate">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-rose-600/10 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full pt-20 pb-12">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase hw-accelerate"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    Open to Work
                </motion.div>

                {/* Avatar */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 sm:mb-8 hw-accelerate"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-rose-600 to-rose-900 blur-md opacity-70" />
                        <motion.img
                            src={avatar}
                            alt="Ibrahim Ahmed Malik"
                            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-rose-500/50"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        />
                        <div className="absolute bottom-1 right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-400 border-2 border-[#080808]" />
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 sm:mb-3 hw-accelerate px-2"
                >
                    Ibrahim Ahmed{' '}
                    <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent inline-block">
                        Malik
                    </span>
                </motion.h1>

                {/* Typing role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-2xl md:text-3xl font-light text-slate-400 mb-6 min-h-[2.5rem] hw-accelerate"
                >
                    {text}<span className="animate-blink text-rose-400">|</span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl text-slate-500 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed px-4 hw-accelerate"
                >
                    Building intelligent, scalable software — from full-stack web apps to AI-powered systems.
                    Currently working at <span className="text-rose-400 font-medium">Vison71 Technologies</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto px-4 hw-accelerate"
                >
                    <ScrollLink to="projects" smooth offset={-80} duration={600} className="w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(225,29,72,0.35)' }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm tracking-wide transition-colors duration-200"
                        >
                            View My Work
                        </motion.button>
                    </ScrollLink>

                    <motion.a
                        href={resume}
                        download="Ibrahim_Ahmed_Malik_Resume.pdf"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wide transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
