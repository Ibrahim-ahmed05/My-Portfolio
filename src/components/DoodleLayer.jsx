import React from 'react';

const doodles = [
    { type: 'bracket', className: 'doodle-one' },
    { type: 'spark', className: 'doodle-two' },
    { type: 'arrow', className: 'doodle-three' },
    { type: 'asterisk', className: 'doodle-four' },
    { type: 'folder', className: 'doodle-five' },
    { type: 'pixels', className: 'doodle-six' },
];

function Shape({ type }) {
    if (type === 'bracket') return <svg viewBox="0 0 80 80"><path d="M30 12H18v56h12M50 12h12v56H50" /></svg>;
    if (type === 'spark') return <svg viewBox="0 0 80 80"><path d="M40 7v24M40 49v24M7 40h24M49 40h24M17 17l16 16M47 47l16 16M63 17L47 33M33 47L17 63" /></svg>;
    if (type === 'arrow') return <svg viewBox="0 0 100 70"><path d="M8 53c23-4 31-28 58-29l22-1M72 12l17 11-13 16" /></svg>;
    if (type === 'asterisk') return <svg viewBox="0 0 80 80"><path d="M40 8v64M8 40h64M17 17l46 46M63 17L17 63" /></svg>;
    if (type === 'folder') return <svg viewBox="0 0 100 75"><path d="M7 18h31l9 10h46v39H7z" /><path d="M7 18V9h28l8 9" /></svg>;
    return <svg viewBox="0 0 80 80"><path d="M12 12h12v12H12zM36 12h12v12H36zM60 12h8v12h-8zM12 36h12v12H12zM36 36h8v12h-8zM60 60h8v8h-8zM12 60h12v8H12z" /></svg>;
}

export default function DoodleLayer() {
    return <div className="doodle-layer" aria-hidden="true">{doodles.map(doodle => <div className={`doodle ${doodle.className}`} key={doodle.className}><Shape type={doodle.type} /></div>)}</div>;
}
