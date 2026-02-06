"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: any;
    }
}

export const GoogleTranslate = () => {
    const initializedRef = useRef(false);

    useEffect(() => {
        if (initializedRef.current) return;
        initializedRef.current = true;

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };

        const scriptId = "google-translate-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div id="google_translate_element" className="[&_.goog-te-gadget-simple]:bg-transparent [&_.goog-te-gadget-simple]:border-none [&_.goog-te-gadget-simple]:text-sm [&_.goog-te-gadget-icon]:hidden [&_.goog-te-menu-value]:text-gray-400 [&_.goog-te-menu-value]:hover:text-white" />
    );
};
