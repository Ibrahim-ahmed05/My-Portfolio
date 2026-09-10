import React, { useRef } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

const educationData = [
    {
        institution: 'National University of Computer and Emerging Sciences',
        location: 'Karachi, Pakistan',
        degree: 'Bachelors in Computer Science',
        year: '2022 – 2026',
        gpa: '3.3/4.0',
        honors: [
            "Dean's List holder for achieving a 3.5+ SGPA",
            "Secured 97.7 percentile in HEC–P@SHA National Skill Competency Test"
        ],
        courses: [
            'Programming Fundamentals', 'Object-Oriented Programming', 'Data Structures',
            'Operating Systems', 'Software Engineering', 'Artificial Intelligence',
            'Data Science', 'Database Management Systems', 'Deep Learning',
            'Agile Project Management', 'Computer Networks', 'Information Security',
            'Recommender Systems'
        ],
        type: 'university'
    },
    {
        institution: 'Pakistan International School Jeddah',
        location: 'Jeddah, Saudi Arabia',
        degree: 'Pre-Engineering',
        year: '2008 – 2022',
        gpa: null,
        honors: [
            "Overall first position in Intermediate"
        ],
        courses: [],
        type: 'school'
    }
];

function Campus({ item, index }) {
    const ref = useRef(null);
    const reduced = useReducedMotion();
    const rotateX = useSpring(0, { stiffness: 110, damping: 18 });
    const rotateY = useSpring(0, { stiffness: 110, damping: 18 });
    const tilt = e => {
        if (reduced || e.pointerType !== 'mouse') return;
        const rect = e.currentTarget.getBoundingClientRect();
        rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 4);
        rotateX.set(-((e.clientY - rect.top) / rect.height - 0.5) * 3);
    };
    return <article ref={ref} className={`campus-scene campus-layered campus-type-only campus-${item.type}`} onPointerMove={tilt} onPointerLeave={() => { rotateX.set(0); rotateY.set(0); }}>
        <motion.div className="campus-stage" >
            <span className="scene-number" aria-hidden="true">0{index + 1}</span>
            <div className="scene-pixels" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>
            <motion.div className="campus-tilt" style={{ rotateX, rotateY }}>
                <motion.img className={`campus-cutout cutout-${item.type}`} src={`${import.meta.env.BASE_URL}images/${item.type}.webp`} alt={`Isometric illustration of ${item.institution}`} width="1536" height="1024" loading="lazy" initial={reduced ? false : { opacity: 0, scale: 0.82, rotate: index ? 7 : -7 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ type: 'spring', stiffness: 65, damping: 17 }} />
            </motion.div>
            <div className="scene-location"><span />{item.location}</div>
        </motion.div>
        <motion.div className="scene-copy" style={{ rotateX, rotateY, transformPerspective: 1400 }} initial={reduced ? false : { opacity: 0, x: index ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow"><span />{item.year} / {index === 0 ? 'THE NEXT CHAPTER' : 'WHERE IT BEGAN'}</p>
            <h3>{index === 0 ? <>FAST<span>–NUCES</span></> : <>Pakistan International<br /><span>School Jeddah.</span></>}</h3>
            {index === 0 && <p className="institution-full">{item.institution}</p>}
            <p className="campus-degree">{item.degree}</p>
            {item.gpa && <p className="campus-gpa">CGPA <strong>{item.gpa}</strong></p>}
            <ul className="campus-honors">{item.honors.map(honor => <li key={honor}>{honor}</li>)}</ul>
            {!!item.courses.length && <details className="campus-courses"><summary>Explore coursework <span>+</span></summary><div>{item.courses.map(course => <span key={course}>{course}</span>)}</div></details>}
        </motion.div>
    </article>;
}
export default function Education() {
    return <section className="education-section">
        <div className="education-wrap">
            <header className="education-heading">
                <p className="eyebrow"><span />02 / EDUCATION</p>
                <h2>Where it started.</h2>
                <p>Foundations for everything I build.</p>
            </header>
            <div className="campus-journey">{educationData.map((item, index) => <Campus key={item.type} item={item} index={index} />)}</div>
            <div className="education-note"><span>JEDDAH → KARACHI</span><span>Always learning. Always building.</span><span>2008 — 2026</span></div>
        </div>
    </section>;
}





