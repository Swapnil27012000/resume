"use client";

import { useEffect, useState } from "react";

export const Cursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div
                className="absolute w-[500px] h-[500px] bg-[#00f3ff] rounded-full blur-[128px] opacity-[0.15] animate-pulse"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: "translate(-50%, -50%)",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] bg-[#bd00ff] rounded-full blur-[128px] opacity-[0.1] animate-pulse delay-700"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: "translate(-50%, -50%)",
                }}
            />
        </div>
    );
};
