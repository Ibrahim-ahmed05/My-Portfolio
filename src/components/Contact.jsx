import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        
        // Simulate email sending since no actual keys are provided
        setTimeout(() => {
            setStatus('success');
            form.current.reset();
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section className="relative py-28 bg-transparent overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
                    <div className="h-1 w-20 bg-rose-600 rounded-full mb-6" />
                    <p className="text-slate-400 text-center max-w-2xl">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            
                            <div className="space-y-6">
                                <a href="mailto:iamalik2005@gmail.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                                        <p className="text-white font-medium group-hover:text-rose-400 transition-colors">iamalik2005@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://linkedin.com/in/ibrahim-ahmed05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                        <FaLinkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium mb-1">LinkedIn</p>
                                        <p className="text-white font-medium group-hover:text-rose-400 transition-colors">ibrahim-ahmed05</p>
                                    </div>
                                </a>

                                <a href="https://github.com/Ibrahim-ahmed05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                        <FaGithub size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium mb-1">GitHub</p>
                                        <p className="text-white font-medium group-hover:text-rose-400 transition-colors">Ibrahim-ahmed05</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all placeholder:text-slate-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                                    <input 
                                        required 
                                        type="email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all placeholder:text-slate-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                                <textarea 
                                    required 
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all placeholder:text-slate-600 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button 
                                disabled={status === 'loading' || status === 'success'}
                                type="submit" 
                                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:ring-offset-2 focus:ring-offset-[#080808] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.3)]"
                            >
                                {status === 'idle' && <><FaPaperPlane /> Send Message</>}
                                {status === 'loading' && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                {status === 'success' && 'Message Sent Successfully!'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            
            {/* Footer footer */}
            <div className="absolute bottom-0 w-full text-center py-6 border-t border-white/5">
                <p className="text-sm text-slate-500">
                    Designed & Built by <span className="text-rose-400 font-medium">Ibrahim Ahmed Malik</span>
                </p>
            </div>
        </section>
    );
}