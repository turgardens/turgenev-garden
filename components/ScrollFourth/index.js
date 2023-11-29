import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFourth = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;

        gsap.to(content, {
            y: () => -document.documentElement.clientHeight + content.clientHeight,
            ease: 'none',
            scrollTrigger: {
                trigger: content,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });
    }, []);

    return (
        <div ref={contentRef}>
            <h1>Контент 5</h1>
            {/* Your content here */}
        </div>
    );
};

export default ScrollFourth;