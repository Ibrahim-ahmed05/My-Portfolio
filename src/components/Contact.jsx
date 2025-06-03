import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const SOCIALS = [
    {
        name: 'GitHub',
        url: 'https://github.com/ibrahim-ahmed05',
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
        ),
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/ibrahim-ahmed05',
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z" /></svg>
        ),
    },
];

export default function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = e => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then(() => {
                setSent(true);
                setLoading(false);
            }, () => {
                setLoading(false);
            });
    };

    return (
        <section className="max-w-2xl mx-auto py-12 sm:py-16 md:py-24 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-6 sm:mb-8 text-center md:text-left">Contact</h2>
            <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white dark:bg-black rounded-xl shadow p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 border-l-4 border-red-500 dark:border-red-700"
            >
                <input
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="px-3 sm:px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none text-sm sm:text-base"
                />
                <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="px-3 sm:px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none text-sm sm:text-base"
                />
                <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows={4}
                    className="px-3 sm:px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none text-sm sm:text-base"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 px-4 sm:px-6 py-2 rounded bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-colors motion-safe:hover:scale-105 text-sm sm:text-base"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
                {sent && <p className="text-green-600 mt-2 text-sm sm:text-base">Message sent! Thank you.</p>}
            </motion.form>
            <div className="flex gap-4 mt-6 sm:mt-8 justify-center">
                {SOCIALS.map(social => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition-colors motion-safe:hover:scale-110"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </section>
    );
} 