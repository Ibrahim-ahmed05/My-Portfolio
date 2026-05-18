import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveBackground from './components/InteractiveBackground';

// Lazy load below-the-fold components to improve initial load time
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
    return (
        <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden relative">
            <InteractiveBackground />
            <Navbar />
            <main className="relative z-10">
                <section id="home"><Hero /></section>
                
                {/* Suspense wrapper for lazy loaded sections */}
                <Suspense fallback={
                    <div className="w-full py-32 flex justify-center items-center">
                        <div className="w-10 h-10 border-4 border-rose-500/20 border-t-rose-500 rounded-full animate-spin"></div>
                    </div>
                }>
                    <section id="about"><About /></section>
                    <section id="education"><Education /></section>
                    <section id="skills"><Skills /></section>
                    <section id="experience"><Experience /></section>
                    <section id="projects"><Projects /></section>
                    <section id="contact"><Contact /></section>
                </Suspense>
            </main>
        </div>
    );
}

export default App;