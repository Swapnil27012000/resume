"use client";

import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { GoogleTranslate } from "../components/GoogleTranslate";


export const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", mobile: "", message: "" });
                setTimeout(() => setIsOpen(false), 2000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                <button
                    onClick={() => setIsOpen(true)}
                    className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform cursor-pointer"
                >
                    Let's Talk
                </button>

                <footer className="mt-20 pt-8 border-t border-white/5 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Swapnil Kamble. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/Swapnil27012000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
                        <a href="https://www.linkedin.com/in/swapnil-kamble2701" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://x.com/kamble2701" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                        <GoogleTranslate />
                    </div>
                </footer>
            </div>

            {/* Modal Backdrop */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-[#050510]/80 backdrop-blur-sm transition-opacity"
                        onClick={() => !isSubmitting && setIsOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-lg glass-card rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold gradient-text">
                                    Let's Collaborate
                                </h3>
                                <button
                                    disabled={isSubmitting}
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors disabled:opacity-50"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all text-white placeholder-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all text-white placeholder-gray-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Mobile</label>
                                        <input
                                            required
                                            type="tel"
                                            value={formData.mobile}
                                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all text-white placeholder-gray-500"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all text-white placeholder-gray-500 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </>
                                    )}
                                </button>

                                {status === "success" && (
                                    <p className="text-green-400 text-sm text-center mt-2 animate-bounce">
                                        Message sent! I'll get back to you soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-400 text-sm text-center mt-2">
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};


