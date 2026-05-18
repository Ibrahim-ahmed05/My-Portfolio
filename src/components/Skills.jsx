import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
    { name: 'Numpy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
];

const SkillItem = ({ skill }) => (
    <div className="flex flex-col items-center justify-center p-3 md:p-6 mx-2 md:mx-3 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 hover:border-rose-500/40 transition-all duration-300 group hover:-translate-y-2 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] cursor-pointer shrink-0">
        <div className="relative w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-4 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-2xl">
            {skill.name === 'Express' || skill.name === 'Next.js' ? (
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain invert" />
            ) : (
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
            )}
        </div>
        <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
            {skill.name}
        </span>
    </div>
);

export default function Skills() {
    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Tech <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">Stack</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Technologies and tools I leverage to build highly scalable applications and intelligent AI models.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full py-10">
                {/* Edge fade masks */}
                <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#080808] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#080808] to-transparent z-20 pointer-events-none" />

                {/* Top Row - Moving Left */}
                <div className="flex overflow-hidden mb-6">
                    <motion.div
                        className="flex min-w-full"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    >
                        {[...skillsData, ...skillsData].map((skill, index) => (
                            <SkillItem key={`row1-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Row - Moving Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex min-w-full"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    >
                        {[...skillsData].reverse().concat([...skillsData].reverse()).map((skill, index) => (
                            <SkillItem key={`row2-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}