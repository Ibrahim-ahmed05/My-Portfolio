import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SectionArtwork({ name, className = '' }) {
    const reduced = useReducedMotion();
    return <motion.div className={`section-artwork ${className}`} aria-hidden="true"
        initial={reduced ? false : { opacity: 0, y: 24, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 70, damping: 18 }}
        whileHover={reduced ? undefined : { y: -8, rotate: 2 }}>
        <img src={`${import.meta.env.BASE_URL}images/${name}-voxel.webp`} alt="" width="1254" height="1254" loading="lazy" decoding="async" />
    </motion.div>;
}


