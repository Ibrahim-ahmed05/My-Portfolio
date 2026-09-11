import React, { useState } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';
import './Projects.css';

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

function ProjectTile({ project, index, variant = '' }) {
    const reduced = useReducedMotion();
    const rotateX = useSpring(0, { stiffness: 180, damping: 24 });
    const rotateY = useSpring(0, { stiffness: 180, damping: 24 });
    function move(event) {
        if (reduced || event.pointerType !== 'mouse') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        rotateX.set(-((event.clientY - bounds.top) / bounds.height - .5) * 6);
        rotateY.set(((event.clientX - bounds.left) / bounds.width - .5) * 6);
    }
    function reset() { rotateX.set(0); rotateY.set(0); }
    return <motion.article className={`work-tile ${variant}`} style={{ rotateX, rotateY, transformPerspective: 1100 }}
        onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
        <div className="work-tile-top"><span>{String(index + 1).padStart(2, '0')} / 09</span>{index === 0 ? <span className="work-featured"><i />Featured project</span> : <span aria-hidden="true">▦</span>}</div>
        <div className="work-image-stage"><div className="work-image-plane"><img src={project.image} alt={project.title + ' project preview'} loading="lazy" decoding="async" /></div><span className="work-stage-mark" aria-hidden="true">+</span></div>
        <div className="work-tile-copy"><h3>{project.title}</h3><p>{project.description}</p>
            <div className="work-tile-bottom"><ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                {project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>↗</a>}
            </div>
        </div>
    </motion.article>;
}

export default function Projects() {
    const [expanded, setExpanded] = useState(false);
    return <section className="selected-projects" aria-labelledby="selected-projects-title">
        <header className="selected-projects-heading">
            <div><p className="work-eyebrow"><span /> PROJECTS / 05</p><h2 id="selected-projects-title">Selected Projects<span>.</span></h2><p className="work-subtitle">Building thoughtful software that solves real problems.</p></div>
            <div className="work-editorial"><span>IDEAS<br />INTO USEFUL<br />THINGS.</span><p>A collection of experiments, challenges, and things brought to life through code.</p></div>
        </header>
        <div className="work-bento">
            {projects.slice(0, 4).map((project, index) => <ProjectTile key={project.title} project={project} index={index} variant={index === 0 ? 'work-tile-feature' : index === 3 ? 'work-tile-wide' : ''} />)}
        </div>
        <div id="more-selected-projects" className="work-archive" hidden={!expanded}>
            {expanded && projects.slice(4).map((project, index) => <ProjectTile key={project.title} project={project} index={index + 4} />)}
        </div>
        <footer className="work-footer"><span>{expanded ? '09' : '04'} PROJECTS ON DISPLAY <b>·</b> MANY MORE TO COME</span>
            <button type="button" aria-expanded={expanded} aria-controls="more-selected-projects" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show selected projects' : 'Explore all 9 projects'} <span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
        </footer>
    </section>;
}
