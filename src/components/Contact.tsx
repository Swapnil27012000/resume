export const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#050510] relative overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[#00f3ff]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Ready to <span className="gradient-text">start a project?</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10">
                    I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <a href="mailto:[EMAIL_ADDRESS]" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    Let's Talk
                </a>

                <footer className="mt-20 pt-8 border-t border-white/5 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Swapnil Kamble. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/Swapnil27012000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
                        <a href="https://www.linkedin.com/in/swapnil-kamble2701" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://x.com/kamble2701" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

