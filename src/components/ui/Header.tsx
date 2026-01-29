import Link from "next/link";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-[#00f3ff] transition-colors">
                    Clouds<span className="gradient-text">Networks.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <Link href="#home" className="hover:text-white transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>

                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                        <span>EN</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                </nav>
            </div>
        </header>
    );
};
