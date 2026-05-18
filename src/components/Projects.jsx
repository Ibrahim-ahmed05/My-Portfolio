import React, { useState } from 'react';
import { motion } from 'framer-motion';

import airlineImg from '../assets/ariline.jpg';
import thoughtify from '../assets/thoughifyapp.jpg';
import creditcard from '../assets/credit.jpg';
import fitness from '../assets/fitness2.jpg';
import rainfall from '../assets/rainfall.jpg';
import phone from '../assets/phonedirectory.jpg';
import enerlytics from '../assets/enerylytics.jpg';
import eztravel from '../assets/eztravel.jpg';
import employee from '../assets/employee.jpg';


const projects = [
    {
        title: "Enerlytics — FYP",
        description: "AI-driven electricity forecasting and recommendation system for K-Electric consumers using TFT + Bi-LSTM. Built with Next.js, FastAPI, and Supabase.",
        image: enerlytics, 
        tags: ["Next.js", "FastAPI", "Deep Learning"],
        link: "#"
    },
    {
        title: "AiR Travel",
        description: "Robust flight booking system with JWT authentication, flight search, booking, and ticket management.",
        image: airlineImg,
        tags: ["Angular", "Node.js", "MySQL"],
        link: "https://github.com/Ibrahim-ahmed05/Database-Project-Backend.git"
    },
    {
        title: "EZ Travel",
        description: "Red Bus route optimizer using A* search to find shortest/cheapest routes based on OpenStreetMap data and Haversine formula.",
        image: eztravel,
        tags: ["React", "FastAPI", "A* Search"],
        link: "#"
    },
    {
        title: "Thoughtify",
        description: "Social interaction platform developed with a complete MERN-like stack.",
        image: thoughtify,
        tags: ["React.js", "Express", "MySQL"],
        link: "https://github.com/Ibrahim-ahmed05/Thoughtify-App.git"
    },
    {
        title: "Gym and Fitness Website",
        description: "Developed using React.js and Bootstrap to create a responsive and interactive fitness platform.",
        image: fitness,
        tags: ["React.js", "Bootstrap", "UI/UX"],
        link: "https://gym-website-ashen-six.vercel.app/"
    },
    {
        title: "Rainfall Prediction",
        description: "Predicting rainfall using supervised learning algorithms like Logistic Regression, KNN, Naive Bayes, Decision Tree, and SVM.",
        image: rainfall,
        tags: ["Python", "Machine Learning", "Scikit-learn"],
        link: "https://github.com/Ibrahim-ahmed05"
    },
    {
        title: "Employee Attrition Prediction",
        description: "AI-powered prediction system using XGBoost, providing real-time attrition insights from surveys.",
        image: employee,
        tags: ["React.js", "FastAPI", "XGBoost"],
        link: "#"
    },
    {
        title: "Credit Card Fraud Detection",
        description: "Fraud detection system utilizing SVM and Decision Tree Classifier machine learning models.",
        image: creditcard,
        tags: ["Python", "SVM", "Decision Trees"],
        link: "https://github.com/Ibrahim-ahmed05/Credit-Card-Fraud_Detection.git"
    },
    {
        title: "Advanced Phone Directory",
        description: "Implemented using data structures like Stack, Queue, Heap, Trees, and Linked Lists for efficient contact management.",
        image: phone,
        tags: ["C++", "Data Structures", "Algorithms"],
        link: "https://github.com/Ibrahim-ahmed05/Advanced-Phone-Directory.git"
    }
];

export default function Projects() {
    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none hw-accelerate" />
            
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-16 md:mb-24 hw-accelerate"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight text-center">Selected Work</h2>
                    <div className="h-1 w-16 md:w-20 bg-rose-600 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link !== '#' ? project.link : undefined}
                            target={project.link !== '#' ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative h-[350px] md:h-[400px] rounded-3xl overflow-hidden bg-[#111] border border-white/5 cursor-pointer block hw-accelerate"
                        >
                            {/* Background Image / Placeholder */}
                            <div className="absolute inset-0 z-0 hw-accelerate">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover opacity-50 md:opacity-40 transition-transform duration-700 ease-out group-hover:scale-105 md:group-hover:opacity-60"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-rose-950/40 to-black flex flex-col justify-center items-center opacity-70 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-90">
                                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent opacity-50" />
                                    </div>
                                )}
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent md:from-black md:via-black/50 md:to-transparent z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 z-20 flex flex-col p-6 md:p-8 justify-end transition-transform duration-500 ease-out md:translate-y-8 md:group-hover:translate-y-0 hw-accelerate">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 hw-accelerate">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 md:px-3 text-[10px] md:text-xs font-bold tracking-wider uppercase text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Text */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                        {project.title}
                                    </h3>
                                    
                                    <div className="h-auto md:h-0 md:overflow-hidden md:group-hover:h-auto transition-all duration-500 ease-out opacity-100 md:opacity-0 md:group-hover:opacity-100 mt-2 md:mt-4 hw-accelerate">
                                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                        
                                        {project.link !== '#' && (
                                            <div className="mt-4 md:mt-6 flex items-center text-rose-400 font-semibold text-xs md:text-sm">
                                                View Project 
                                                <svg className="w-4 h-4 ml-1 md:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}