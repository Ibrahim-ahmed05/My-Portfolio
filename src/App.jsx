import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-black dark:to-black transition-colors duration-300">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="relative">
                {/* Hero Section */}
                <section id="home" className="min-h-screen">
                    <Hero />
                </section>

                {/* About Section */}
                <section id="about" className="min-h-screen py-20">
                    <About />
                </section>

                {/* Education Section */}
                <section id="education" className="min-h-screen py-20">
                    <Education />
                </section>

                {/* Skills Section */}
                <section id="skills" className="min-h-screen py-20">
                    <Skills />
                </section>

                {/* Experience Section */}
                <section id="experience" className="min-h-screen py-20">
                    <Experience />
                </section>

                {/* Projects Section */}
                <section id="projects" className="min-h-screen py-20">
                    <Projects />
                </section>

                {/* Contact Section */}
                <section id="contact" className="min-h-screen py-20">
                    <Contact />
                </section>
            </main>
        </div>
    );
}

export default App; 