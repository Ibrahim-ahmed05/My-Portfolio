import SectionArtwork from './SectionArtwork';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    const [page, setPage] = useState(0);
    const project = projects[page];
    const next = () => setPage((page + 1) % projects.length);
    const previous = () => setPage((page - 1 + projects.length) % projects.length);
    return <section className="project-showcase-section">
        <div className="project-showcase-wrap">
            <header className="project-showcase-heading"><div><p className="eyebrow"><span />05 / SELECTED WORK</p><h2>Selected work,<br /><span>one frame at a time.</span></h2></div><SectionArtwork name="projects" /></header>
            <div className="project-showcase" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={page} className="project-slide" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: .38 }}>
                        <div className="project-visual-column">
                            <div className="project-index">{String(page + 1).padStart(2, '0')} <span>/</span> {String(projects.length).padStart(2, '0')}</div>
                            <motion.div className="project-tilt-card" initial={{ rotate: page % 2 ? 3 : -3 }} animate={{ rotate: page % 2 ? 1 : -1 }} whileHover={{ rotate: 0, y: -8 }} transition={{ type:'spring', stiffness:100, damping:15 }}>
                                <div className="project-pixel-corner" aria-hidden="true" />
                                <img src={project.image} alt={project.title} loading="eager" decoding="async" />
                                <div className="project-image-label">PROJECT / {String(page + 1).padStart(2, '0')}</div>
                            </motion.div>
                            <span className="project-visual-note">A SMALL WINDOW INTO THE WORK</span>
                        </div>
                        <div className="project-story">
                            <p className="project-story-kicker">{project.tags.join('  ·  ')}</p>
                            <h3>{project.title}</h3>
                            <div className="project-story-rule" />
                            <p className="project-story-description">{project.description}</p>
                            <div className="project-story-meta"><span>ROLE</span><strong>DESIGN / ENGINEERING</strong></div>
                            {project.link !== '#' && <a className="project-story-link" href={project.link} target="_blank" rel="noopener noreferrer">Open project <span>↗</span></a>}
                            <div className="project-navigation"><button className="project-arrow-card" onClick={previous} aria-label="Previous project"><span>←</span><small>PREV</small></button><div className="project-progress"><span style={{ width: `${((page + 1) / projects.length) * 100}%` }} /></div><button className="project-arrow-card next" onClick={next} aria-label="Next project"><small>NEXT</small><span>→</span></button></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </section>;
}
