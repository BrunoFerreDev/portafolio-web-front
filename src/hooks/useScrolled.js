import { useState, useEffect } from "react";

export default function useScrolled(threshold = 10) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > threshold);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, [threshold]);
    return scrolled;
}
