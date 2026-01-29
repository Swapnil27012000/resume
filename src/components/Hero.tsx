import Link from "next/link";

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00f3ff] rounded-full blur-[128px] opacity-20 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#bd00ff] rounded-full blur-[128px] opacity-20 animate-pulse delay-1000" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <h2 className="text-xl md:text-2xl font-mono text-[#00f3ff] mb-6">
                    Hey, I am <span className="text-white">Web De</span><span className="animate-blink">|</span>
                </h2>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                    Building your dream <br />
                    <span className="gradient-text">pixel by pixel!</span>
                </h1>

                <p className="max-w-2xl mx-auto text-gray-400 mb-12 text-lg">
                    I create engaging, accessible, and performant user interfaces for humans.
                </p>

                <Link
                    href="#about"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-sm transition-all hover:scale-105 group"
                >
                    <span className="text-white font-medium">Read More</span>
                    <svg className="group-hover:translate-y-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

        </section>
    );
};
