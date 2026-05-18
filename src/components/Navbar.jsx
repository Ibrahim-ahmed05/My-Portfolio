import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-white">Ibrahim</span>
                        <span className="text-rose-500">.</span>
                    </span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map(link => (
                        <ScrollLink
                            key={link.name}
                            to={link.to}
                            spy smooth offset={-80} duration={600}
                            onSetActive={() => setActive(link.to)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-200 ${
                                active === link.to
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            {active === link.to && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/10 rounded-lg"
                                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </ScrollLink>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <ScrollLink to="contact" smooth offset={-80} duration={600}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold transition-colors duration-200"
                        >
                            Hire Me
                        </motion.button>
                    </ScrollLink>
                </div>

                {/* Mobile hamburger */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 bg-current rounded-full"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                            className="block h-0.5 bg-current rounded-full"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 bg-current rounded-full"
                        />
                    </div>
                </motion.button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/5"
                    >
                        <div className="px-5 py-4 flex flex-col gap-1">
                            {navLinks.map(link => (
                                <ScrollLink
                                    key={link.name}
                                    to={link.to}
                                    spy smooth offset={-80} duration={600}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                                        active === link.to
                                            ? 'bg-white/10 text-white'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </ScrollLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}