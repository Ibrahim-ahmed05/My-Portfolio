import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particles = [];
        const chars = ['0', '1'];

        // Theme colors
        const roseColor = '225, 29, 72'; // rose-600
        const emeraldColor = '16, 185, 129'; // emerald-500
        const slateColor = '71, 85, 105'; // slate-600

        let mouse = { x: -1000, y: -1000, radius: 180 };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 10 + 10; // Font size 10-20
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = (Math.random() - 0.5) * 0.8;
                this.char = chars[Math.floor(Math.random() * chars.length)];
                
                // Assign color based on probability
                const rand = Math.random();
                if (rand < 0.15) this.color = emeraldColor;
                else if (rand < 0.3) this.color = roseColor;
                else this.color = slateColor;
                
                this.baseOpacity = Math.random() * 0.4 + 0.1;
                this.currentOpacity = this.baseOpacity;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Boundary check
                if (this.x > width) this.x = 0;
                else if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                else if (this.y < 0) this.y = height;

                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    
                    // Push particles away smoothly
                    this.x -= forceDirectionX * force * 2;
                    this.y -= forceDirectionY * force * 2;
                    
                    this.currentOpacity = 1; // full opacity when near mouse
                } else {
                    // Gradually return to base opacity
                    if (this.currentOpacity > this.baseOpacity) {
                        this.currentOpacity -= 0.02;
                    }
                }
                
                // Randomly change binary character for cool matrix effect
                if (Math.random() < 0.01) {
                    this.char = this.char === '0' ? '1' : '0';
                }
            }

            draw() {
                ctx.font = `${this.size}px monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = `rgb(${roseColor})`;
                    ctx.fillStyle = `rgba(${roseColor}, ${this.currentOpacity})`;
                } else {
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = `rgba(${this.color}, ${this.currentOpacity})`;
                }

                ctx.fillText(this.char, this.x, this.y);
                ctx.shadowBlur = 0; // reset
            }
        }

        const init = () => {
            particles = [];
            // Responsive particle count
            let numberOfParticles = Math.floor((width * height) / 12000);
            
            // Limit max particles to maintain performance
            numberOfParticles = Math.min(numberOfParticles, 150);
            
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const connect = () => {
            let maxDistance = 140;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        let opacity = (1 - (distance / maxDistance)) * 0.2;
                        
                        let mouseDx = mouse.x - particles[a].x;
                        let mouseDy = mouse.y - particles[a].y;
                        let mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
                        
                        if (mouseDistance < mouse.radius) {
                            ctx.strokeStyle = `rgba(${roseColor}, ${opacity * 3})`;
                        } else {
                            ctx.strokeStyle = `rgba(${slateColor}, ${opacity})`;
                        }
                        
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            connect();
            
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };
        
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        // Debounce resize event
        let resizeTimeout;
        let lastWidth = window.innerWidth;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // On mobile, height changes when scrolling due to address bar. 
                // Only re-init if width changes to prevent jarring resets.
                if (window.innerWidth !== lastWidth) {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    lastWidth = window.innerWidth;
                    init();
                } else {
                    // Just update height but don't re-init particles
                    height = canvas.height = window.innerHeight;
                }
            }, 200);
        };

        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-60"
        />
    );
};

export default InteractiveBackground;
