import SmoothScroll from './components/SmoothScroll';
import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import DoodleLayer from './components/DoodleLayer';
import MicroDetails from './components/MicroDetails';

function App() {
    return (
        <MotionConfig reducedMotion="user"><div className="min-h-screen bg-[#fafafa] text-stone-900 overflow-x-hidden relative">
            <SmoothScroll /><InteractiveBackground /><DoodleLayer /><MicroDetails />
            <Navbar />
            <main className="relative z-10">
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="education"><Education /></section>
                <section id="skills"><Skills /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </main>
        </div></MotionConfig>
    );
}

export default App;


