"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
    vx: number;
    vy: number;
}

export const InteractiveParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles: Particle[] = [];
        let mouse = { x: width / 2, y: height / 2, active: false };

        const colors = ['#00f3ff', '#bd00ff', '#ffffff', '#4f4f4f'];

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            particles = [];

            const particleCount = Math.floor((width * height) / 10000); // Responsive density

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    z: Math.random() * 1000, // Depth
                    size: Math.random() * 2 + 0.5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                // Parallax movement based on mouse
                const parallaxX = (mouse.x - width / 2) * (p.z / 5000);
                const parallaxY = (mouse.y - height / 2) * (p.z / 5000);

                // Constant drift
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                const finalX = p.x + parallaxX;
                const finalY = p.y + parallaxY;

                // Magnetic effect when mouse is active
                if (mouse.active) {
                    const dx = mouse.x - finalX;
                    const dy = mouse.y - finalY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 250) {
                        const force = (250 - dist) / 5000;
                        p.vx += dx * force;
                        p.vy += dy * force;
                        // Push particles back/forward slightly for 3D feel
                        p.z += (mouse.active ? 1 : 0) * (250 - dist) * 0.05;
                    }
                }

                // Return z to original position slowly
                p.z += (p.z > 500 ? -0.5 : 0.5);

                // Damping
                p.vx *= 0.98;
                p.vy *= 0.98;

                // Projection
                const scale = 1000 / (1000 + p.z);
                const opacity = Math.min(1, Math.max(0.1, scale * 0.8));

                ctx.beginPath();
                ctx.arc(finalX, finalY, p.size * scale, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = opacity;
                ctx.fill();
            });

            // Draw Mouse Spotlight/Glow
            if (mouse.active) {
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
                gradient.addColorStop(0, 'rgba(0, 243, 255, 0.1)');
                gradient.addColorStop(1, 'rgba(0, 243, 255, 0)');

                ctx.globalAlpha = 1;
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);

                const purpleGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
                purpleGradient.addColorStop(0, 'rgba(189, 0, 255, 0.05)');
                purpleGradient.addColorStop(1, 'rgba(189, 0, 255, 0)');

                ctx.fillStyle = purpleGradient;
                ctx.fillRect(0, 0, width, height);
            }

            requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        init();
        draw();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};
