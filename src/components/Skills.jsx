import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionArtwork from './SectionArtwork';
const groups = [
    { name: 'Languages', mark: '{ }', description: 'The fundamentals behind the interfaces and systems I build.', tools: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'] },
    { name: 'Interfaces', mark: '</>', description: 'From a blank browser to responsive, thoughtfully crafted experiences.', tools: ['HTML5', 'CSS3', 'React', 'Next.js', 'Tailwind'] },
    { name: 'Backend & data', mark: '[ ]', description: 'The APIs, databases, and application logic beneath the surface.', tools: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL'] },
    { name: 'ML & workflow', mark: '↗', description: 'Exploring data, building models, and keeping development reproducible.', tools: ['Scikit-learn', 'Pandas', 'NumPy', 'Git', 'Docker'] },
];
export default function Skills() {
    const [active, setActive] = useState(0);
    const reduced = useReducedMotion();
    const group = groups[active];
    return <section className="crafted-section stack-section">
        <header className="crafted-heading"><div><p className="eyebrow"><span />03 / TOOLKIT</p><h2>Different tools.<br /><span>One curious mind.</span></h2></div><p className="crafted-intro">A look inside my everyday toolkit.<br />Choose a drawer to explore.</p></header>
        <div className="tool-cabinet">
            <div className="cabinet-bar"><span><i /> IBRAHIM / TOOLBOX</span><span>20 TOOLS · 4 DRAWERS</span></div>
            <div className="cabinet-body">
                <div className="tool-drawers" role="group" aria-label="Tool categories">
                    {groups.map((g, index) => <button key={g.name} type="button" aria-pressed={active === index} aria-controls="tool-display" onClick={() => setActive(index)} className={`tool-drawer ${active === index ? 'drawer-open' : ''}`}><span className="drawer-index">0{index + 1}</span><span>{g.name}</span><span className="drawer-handle" aria-hidden="true" /></button>)}
                    <p className="drawer-note">BUILT WITH CURIOSITY.<br />ALWAYS ADDING TO THE COLLECTION.</p>
                </div>
                <div id="tool-display" className="tool-display" aria-live="polite" aria-atomic="true">
                    <motion.div key={active} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
                        <div className="tool-display-top"><span>DRAWER 0{active + 1}</span><span aria-hidden="true">{group.mark}</span></div>
                        <div className={`tool-hero-art voxel-art voxel-art-${active}`} aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
                        <h3>{group.name}</h3><p>{group.description}</p>
                        <div className="tool-keyboard">{group.tools.map((tool, i) => <motion.div className="tool-key" key={tool} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .045 }}><small>0{i + 1}</small><strong>{tool}</strong><span aria-hidden="true">▪</span></motion.div>)}</div>
                    </motion.div>
                    <div className="tool-display-footer"><span>IDEA → INTERFACE → SYSTEM</span><SectionArtwork name="skills" /></div>
                </div>
            </div>
        </div>
    </section>;
}
