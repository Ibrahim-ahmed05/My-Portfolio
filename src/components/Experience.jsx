import SectionArtwork from './SectionArtwork';
import React from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';
import { FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

const experiences = [
    {
        title: "Software Developer Intern",
        company: "Vison71 Technologies",
        period: "2025 - Present",
        icon: <FaLaptopCode size={24} />,
        responsibilities: [
            "Developing and optimizing MERN stack applications for enhanced performance and scalability.",
            "Designing highly engaging 3D web experiences using modern libraries like Framer and Spline.",
            "Integrating AI features and workflows into products via Hugging Face and n8n."
        ]
    },
    {
        title: "Teaching Assistant",
        company: "FAST-NUCES",
        period: "2025 - Present",
        icon: <FaChalkboardTeacher size={24} />,
        responsibilities: [
            "Assisting in delivering lectures and explaining complex architectural concepts to students.",
            "Conducting hands-on lab sessions and grading assignments to ensure active student learning.",
            "Providing one-on-one support to students struggling with coursework to improve retention."
        ]
    }
];

function ExperienceCard({ exp, index }) {
    const reduced = useReducedMotion();
    const rotateX = useSpring(0, { stiffness: 150, damping: 22 });
    const rotateY = useSpring(0, { stiffness: 150, damping: 22 });
    const move = e => {
        if (reduced || e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        rotateX.set(-((e.clientY - r.top) / r.height - .5) * 10);
        rotateY.set(((e.clientX - r.left) / r.width - .5) * 12);
    };
    return <div className="career-perspective" onPointerMove={move} onPointerLeave={() => { rotateX.set(0); rotateY.set(0); }}>
        <motion.article className="career-card" style={{ rotateX, rotateY }} initial={reduced ? false : { opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: index * .1 }}>
            <div className="career-top"><span>EXPERIENCE / 0{index + 1}</span><span className="career-live">● CURRENT</span></div>
            <div className="career-emblem" aria-hidden="true">{exp.icon}</div>
            <p className="career-company">{exp.company}</p><h3>{exp.title}</h3>
            <p className="career-period">{exp.period}</p>
            <div className="career-rule" />
            <ul>{exp.responsibilities.map((task, i) => <li key={task}><span>0{i + 1}</span><p>{task}</p></li>)}</ul>
            <footer><span>{index === 0 ? 'BUILD / SHIP / REFINE' : 'EXPLAIN / GUIDE / EMPOWER'}</span><span aria-hidden="true">↗</span></footer>
        </motion.article>
    </div>;
}
export default function Experience() {
    return <section className="crafted-section">
        <header className="crafted-heading"><div><p className="eyebrow"><span />04 / EXPERIENCE</p><h2>Learning by doing.<br /><span>Growing by giving.</span></h2></div><SectionArtwork name="experience" /></header>
        <div className="career-grid">{experiences.map((exp, index) => <ExperienceCard key={exp.company} exp={exp} index={index} />)}</div>
        <p className="section-footnote">TWO ROLES. ONE MINDSET: MAKE THINGS BETTER.</p>
    </section>;
}
