import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function MicroDetails() {
    const [progress, setProgress] = useState(0);
    const reduced = useReducedMotion();
    useEffect(() => {
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
    }, []);
    return <><div className="site-scroll-meter" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
        <motion.div className="site-status-chip" initial={reduced ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}>
            <i /> Available for select work <b>↗</b>
        </motion.div>
        <div className="site-corner-index" aria-hidden="true"><span>SCROLL</span><b>{String(progress).padStart(2, '0')}</b></div>
    </>;
}
