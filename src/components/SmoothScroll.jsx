import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
    useEffect(() => {
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        let lenis;
        const configure = () => {
            lenis?.destroy();
            lenis = undefined;
            if (!preference.matches) {
                lenis = new Lenis({ autoRaf: true, lerp: 0.12, smoothWheel: true, syncTouch: false, anchors: { offset: -80 }, prevent: node => node.hasAttribute('data-native-scroll') });
            }
        };
        configure();
        preference.addEventListener('change', configure);
        return () => { preference.removeEventListener('change', configure); lenis?.destroy(); };
    }, []);
    return null;
}
