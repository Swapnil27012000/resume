"use client";

import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-[#050510]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image Section */}
                    <div className="w-full md:w-1/3 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#12122b] flex items-center justify-center">
                            {/* Gradient Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00f3ff]/20 to-[#bd00ff]/20 animate-pulse" />
                            <Image
                                src="/avatar.png"
                                alt="Profile"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity z-10"
                                onError={(e) => {
                                    // Hide image if it fails to load
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            {/* <div className="text-gray-500 text-sm font-mono z-0">[IMAGE_PLACEHOLDER]</div> */}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#00f3ff] uppercase bg-[#00f3ff]/10 rounded-full">
                            Who I am
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-[#00f3ff]">Me</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a passionate web developer with a keen eye for detail and a love for creating seamless digital experiences. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            My journey began with a curiosity about how things work on the web, which quickly turned into a career obsession. I specialize in building responsive, accessible, and performant web applications using modern technologies.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <button className="px-8 py-3 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] text-white font-bold rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(189,0,255,0.5)] transition-shadow">
                                Portfolio
                            </button>
                            <a
                                href="/swapnil-kamble.pdf"
                                download="Swapnil_Kamble_CV.pdf"
                                className="px-8 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors inline-block"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">3+</h3>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
                                <p className="text-sm text-gray-400">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
