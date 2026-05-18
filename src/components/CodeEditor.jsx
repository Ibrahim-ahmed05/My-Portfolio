import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// The code structure with syntax highlighting tokens
const codeLines = [
    [
        { text: "import ", color: "text-rose-400" },
        { text: "{ Developer, AI_Enthusiast } ", color: "text-emerald-300" },
        { text: "from ", color: "text-rose-400" },
        { text: "'tech-world';", color: "text-yellow-300" }
    ],
    [
        { text: "import ", color: "text-rose-400" },
        { text: "{ FAST_NUCES } ", color: "text-emerald-300" },
        { text: "from ", color: "text-rose-400" },
        { text: "'universities/pakistan';", color: "text-yellow-300" }
    ],
    [{ text: "", color: "" }], // Empty line
    [
        { text: "class ", color: "text-rose-400" },
        { text: "IbrahimAhmed ", color: "text-amber-200 font-bold" },
        { text: "extends ", color: "text-rose-400" },
        { text: "Developer ", color: "text-emerald-300" },
        { text: "{", color: "text-slate-300" }
    ],
    [
        { text: "  constructor", color: "text-blue-400" },
        { text: "() {", color: "text-slate-300" }
    ],
    [
        { text: "    super", color: "text-blue-400" },
        { text: "();", color: "text-slate-300" }
    ],
    [
        { text: "    this", color: "text-rose-400" },
        { text: ".role ", color: "text-sky-300" },
        { text: "= ", color: "text-rose-400" },
        { text: '"Software Developer @ Vison71 Technologies";', color: "text-yellow-300" }
    ],
    [
        { text: "    this", color: "text-rose-400" },
        { text: ".education ", color: "text-sky-300" },
        { text: "= ", color: "text-rose-400" },
        { text: "new ", color: "text-rose-400" },
        { text: "FAST_NUCES", color: "text-emerald-300" },
        { text: "({ ", color: "text-slate-300" },
        { text: "major: ", color: "text-sky-300" },
        { text: '"Computer Science", ', color: "text-yellow-300" },
        { text: "grad: ", color: "text-sky-300" },
        { text: "2026", color: "text-purple-400" },
        { text: " });", color: "text-slate-300" }
    ],
    [
        { text: "    this", color: "text-rose-400" },
        { text: ".passions ", color: "text-sky-300" },
        { text: "= ", color: "text-rose-400" },
        { text: '["AI/ML", "Full-Stack Web Dev", "Predictive Models"];', color: "text-yellow-300" }
    ],
    [
        { text: "  }", color: "text-slate-300" }
    ],
    [{ text: "", color: "" }],
    [
        { text: "  getAchievements", color: "text-blue-400" },
        { text: "() {", color: "text-slate-300" }
    ],
    [
        { text: "    return ", color: "text-rose-400" },
        { text: "[", color: "text-slate-300" }
    ],
    [
        { text: '      "Dean\'s List for 3.5+ SGPA",', color: "text-yellow-300" }
    ],
    [
        { text: '      "97.7 Percentile in HEC-P@SHA Test",', color: "text-yellow-300" }
    ],

    [
        { text: '      "Creator of Enerlytics (AI Forecasting)"', color: "text-yellow-300" }
    ],
    [
        { text: "    ];", color: "text-slate-300" }
    ],
    [
        { text: "  }", color: "text-slate-300" }
    ],
    [
        { text: "}", color: "text-slate-300" }
    ],
    [{ text: "", color: "" }],
    [
        { text: "export default ", color: "text-rose-400" },
        { text: "new ", color: "text-rose-400" },
        { text: "IbrahimAhmed", color: "text-amber-200 font-bold" },
        { text: "();", color: "text-slate-300" }
    ]
];

const CodeEditor = () => {
    const [displayedLines, setDisplayedLines] = useState([]);

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < codeLines.length) {
                setDisplayedLines(prev => [...prev, codeLines[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
            }
        }, 120); // Speed of typing out new lines

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl font-mono text-sm sm:text-base hw-accelerate">
            {/* macOS window top bar */}
            <div className="bg-[#1a1a1a] px-4 py-3 flex items-center border-b border-white/5 relative">
                <div className="flex gap-2 z-10">
                    <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_5px_rgba(225,29,72,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-xs text-slate-400 font-medium tracking-wider">Ibrahim.js</span>
                </div>
            </div>

            {/* Code Editor Body */}
            <div className="p-5 sm:p-6 overflow-x-auto min-h-[380px]">
                <div className="flex flex-col">
                    {displayedLines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex"
                        >
                            <span className="w-6 sm:w-8 shrink-0 text-slate-600 select-none text-right pr-4">{index + 1}</span>
                            <span className="whitespace-pre">
                                {line && line.map((token, i) => (
                                    <span key={i} className={token.color}>{token.text}</span>
                                ))}
                            </span>
                        </motion.div>
                    ))}
                    {/* Blinking Cursor */}
                    {displayedLines.length < codeLines.length && (
                        <div className="flex">
                            <span className="w-6 sm:w-8 shrink-0 text-slate-600 select-none text-right pr-4">{displayedLines.length + 1}</span>
                            <motion.div
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="w-2 h-5 bg-rose-500 ml-1"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
