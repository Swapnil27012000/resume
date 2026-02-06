"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Github, ExternalLink, Cpu, Layout, Code2, Globe } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    features?: string[];
    image: string;
    tags: string[];
    link: string;
    githubLink?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#050510]/95 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
                >
                    <X size={20} />
                </button>

                {/* Left side: Image */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />
                </div>

                {/* Right side: Details */}
                <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar bg-[url('/grid-pattern.svg')] bg-fixed">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider font-mono px-3 py-1 bg-[#00f3ff]/10 text-[#00f3ff] rounded-full border border-[#00f3ff]/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {project.fullDescription || project.description}
                    </p>

                    {/* Features List */}
                    {project.features && (
                        <div className="space-y-4 mb-8">
                            <h3 className="text-white font-semibold flex items-center gap-2">
                                <Cpu size={18} className="text-[#00f3ff]" />
                                Key Features
                            </h3>
                            <ul className="grid grid-cols-1 gap-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#bd00ff] shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-[#00f3ff] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all hover:scale-[1.02]"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:scale-[1.02]"
                            >
                                <Github size={18} />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
