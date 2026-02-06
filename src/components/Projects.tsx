"use client";

import { useState } from "react";
import { Card } from "./ui/Card";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight } from "lucide-react";

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

const projects: Project[] = [
    {
        id: "1",
        title: "Tourvisto – AI Travel Agency",
        description: "An intelligent travel planning platform that creates personalized trip plans using AI.",
        fullDescription: "Tourvisto is a smart travel agency web application designed to simplify trip planning through artificial intelligence. The platform analyzes user preferences, budget, travel dates, and interests to generate optimized travel itineraries. By combining real-time data with AI-driven recommendations, Tourvisto helps users plan stress-free, well-structured trips in just a few clicks.",
        features: [
            "AI-powered personalized trip itinerary generation",
            "Smart destination and activity recommendations",
            "Budget-aware and time-optimized travel planning",
            "Responsive and modern user-friendly interface",
            "Dynamic trip customization based on user inputs"
        ],
        image: "https://ik.imagekit.io/cloudclube/vercel_img/Screenshot%202026-02-07%20021155.png",
        tags: ["React", "Next.js", "AI", "Tailwind"],
        link: "https://travel-agency-murex-zeta.vercel.app/",
        githubLink: "https://github.com/swapnil-2004/travel-agency"
    },
    {
        id: "2",
        title: "Tethor – Smart Movie Discovery",
        description: "An intelligent movie discovery platform that helps users find films they’ll enjoy without the hassle.",
        fullDescription: "Tethor is a modern movie discovery web application built to simplify how users explore and choose movies. Powered by the TMDB API, the platform delivers rich movie data, trending titles, and personalized recommendations. With a clean UI and smooth animations, Tethor transforms browsing movies into a fast, engaging, and enjoyable experience.",
        features: [
            "Real-time movie data integration using TMDB API",
            "Personalized movie recommendations based on trends and ratings",
                "Advanced search with genre, rating, and popularity filters",
            "Smooth and interactive UI animations",
            "Responsive design optimized for all devices"
        ],
        image: "https://ik.imagekit.io/cloudclube/vercel_img/Screenshot%202026-02-07%20022928.png",
        tags: ["Vite", "TMDB API", "Appwrite"],
        link: "https://tethor.vercel.app/",
        githubLink: "https://github.com/Swapnil27012000/tethor.git"

    },
    {
        id: "3",
        title: "KonkanVastu – Local Stay & Food Finder",
        description: "A location-based platform to find nearby restaurants and lodging options with ease.",
        fullDescription: "KonkanVastu is a smart discovery platform designed to help users quickly find nearby restaurants, hotels, and lodges across the Konkan region. The application focuses on simplicity and speed, providing accurate location-based results and essential details so travelers and locals can make informed decisions without hassle.",
        features: [
            "Nearby restaurant and lodge discovery based on user location",
            "Region-focused listings tailored for Konkan travel",
            "Fast and intuitive search experience",
            "Mobile-friendly interface for travelers on the go",
            "Clear display of distance, contact, and location details"
        ],
        image: "https://ik.imagekit.io/cloudclube/vercel_img/konkanvastu.jpg",
        tags: ["React Native", "Appwrite"],
        link: "https://konkanvastu.vercel.app/",
        githubLink: "https://github.com/Swapnil27012000/konkanvastu.git"
    },
    // {
    //     id: "4",
    //     title: "Neural Network Viz",
    //     description: "Interactive visualization of deep learning models and weight distribution.",
    //     fullDescription: "Neuromancer is an educational tool designed to demystify neural networks. It provides a real-time, interactive playground where users can visualize how data flows through various layers and how weights are adjusted during training.",
    //     features: [
    //         "Interactive layer-wise visualization",
    //         "Real-time weight distribution graphs",
    //         "Support for custom model architectures",
    //         "Exportable training animations"
    //     ],
    //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    //     tags: ["Python", "TensorFlow", "React", "Canvas"],
    //     link: "#",
    //     githubLink: "#"
    // },
    // {
    //     id: "5",
    //     title: "Glassmorphism UI Kit",
    //     description: "A comprehensive design system based on glassmorphism principles.",
    //     fullDescription: "Vitreous is a premium UI component library that captures the elegance of frosted glass. It provides developers with a robust set of accessible, highly-styled components that maintain visual clarity across any background.",
    //     features: [
    //         "Adaptive glass transparency levels",
    //         "Accessible color contrast ratios",
    //         "Optimized for high-DPI displays",
    //         "Plug-and-play Tailwind integration"
    //     ],
    //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    //     tags: ["Design", "CSS", "React", "Storybook"],
    //     link: "#",
    //     githubLink: "#"
    // },
    // {
    //     id: "6",
    //     title: "Autonomous Fleet Ops",
    //     description: "Management platform for autonomous drone fleets with real-time tracking.",
    //     fullDescription: "AeroOps is a robust mission planning and fleet management platform. It integrates geospatial data with real-time telemetry to provide a unified command center for autonomous operations in challenging environments.",
    //     features: [
    //         "Real-time geolocation tracking",
    //         "Automated mission path planning",
    //         "Encrypted telemetry data stream",
    //         "Incident response automation"
    //     ],
    //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    //     tags: ["Go", "React", "Mapbox", "Kubernetes"],
    //     link: "#",
    //     githubLink: "#"
    // }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewProject = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="py-24 bg-[#050510] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f3ff] rounded-full blur-[160px] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Done <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A selection of my recent works where design meets cutting-edge technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} className="p-0 overflow-hidden group border-white/5 hover:border-[#00f3ff]/20 bg-[#0a0a1a]">
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 bg-white/5 text-[#00f3ff] rounded border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f3ff] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => handleViewProject(project)}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white group/link hover:text-[#00f3ff] transition-colors"
                                >
                                    <span>View Project</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};
