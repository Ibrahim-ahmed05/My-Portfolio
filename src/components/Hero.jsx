import React from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';
import resume from '../assets/ResumeLatest.pdf';

function PixelCube({ className }) {
    return <div className={`hero-cube ${className}`} aria-hidden="true"><i /><i /><i /></div>;
}
export default function Hero() {
    const reduced = useReducedMotion();
    const x = useSpring(0, { stiffness: 70, damping: 20 });
    const y = useSpring(0, { stiffness: 70, damping: 20 });
    const move = e => {
        if (reduced || e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - .5) * 18);
        y.set(((e.clientY - r.top) / r.height - .5) * 14);
    };
    const reveal = { initial: reduced ? false : { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0 }, transition: { duration: .8 } };
    return <section className="hero-editorial">
        <div className="hero-layout">
            <motion.div className="hero-copy" {...reveal}>
                <div className="hero-availability"><span /> AVAILABLE FOR OPPORTUNITIES</div>
                <p className="hero-intro">Hi, I'm Ibrahim Ahmed Malik.</p>
                <h1>Thoughtful code.<br /><span>Real possibilities.</span></h1>
                <p className="hero-description">I build intelligent digital experiences.<br />From full-stack applications to AI-powered systems, I turn complex ideas into software that feels simple.</p>
                <div className="hero-actions">
                    <motion.a href="#projects" className="hero-primary" whileHover={{ y: -3 }} whileTap={{ scale: .98 }}>Explore my work <span>↗</span></motion.a>
                    <a href={resume} download="Ibrahim_Ahmed_Malik_Resume.pdf" className="hero-secondary">Download résumé <span>↓</span></a>
                </div>
                <div className="hero-current"><span className="hero-current-mark">↳</span><p>Currently building at<br /><strong>Vison71 Technologies</strong></p></div>
            </motion.div>
            <motion.div className="hero-world" onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }} {...reveal} transition={{ duration: 1, delay: .15 }}>
                <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
                <motion.div className="hero-portrait-stage" style={{ x, y }}>
                    <img className="hero-portrait-cutout" src={`${import.meta.env.BASE_URL}images/avatar-voxel.webp`} alt="Voxel portrait of Ibrahim Ahmed Malik" width="1254" height="1254" fetchPriority="high" />
                </motion.div>
                <div className="hero-floating-window" aria-hidden="true"><div><i /><i /><i /></div><code><span>const</span> idea = build();<br /><em>// made with curiosity</em><br /><span>return</span> possibility;</code></div>
                <div className="hero-ai-object" aria-hidden="true"><div className="chip-pins"><span>AI</span></div><small>INTELLIGENCE, BUILT IN.</small></div>
                <div className="hero-wire-cube" aria-hidden="true"><i /><i /><i /><i /><b>01</b></div>
                <div className="hero-code-orbit" aria-hidden="true"><span>&lt;/&gt;</span><span>{'{ }'}</span><span>01</span></div>
                <div className="hero-signal" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                <PixelCube className="cube-one" /><PixelCube className="cube-two" /><PixelCube className="cube-three" />
                <span className="hero-coordinate" aria-hidden="true">01 / THE BUILDER</span>
            </motion.div>
        </div>
        <div className="hero-baseline"><span>SOFTWARE ENGINEER & CREATIVE THINKER</span><a href="#about">GET TO KNOW ME <span>↓</span></a><span>KARACHI, PAKISTAN</span></div>
    </section>;
}


