import { useEffect } from "react";

const SmoothScroll = () => {
    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const container = document.documentElement;
            const delta = e.wheelDelta / 60 || -e.deltaY / 3;
            const scrollTop = container.scrollTop;
            const scrollTarget = scrollTop - delta * 100;

            container.scrollTo({
                top: scrollTarget,
                behavior: "smooth",
            });
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return null;
};

export default SmoothScroll;