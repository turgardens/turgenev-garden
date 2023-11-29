import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from './scrollSeven.module.scss';

const ScrollSeven = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;

        gsap.set(container, { perspective: 1200 }, { position: 'relative' }, { zIndex: -1 });

        gsap.to(text, {
            yPercent: 75,
            opacity: 1.2,
            scale: 1.6,
            rotationY: 10,
            rotationX: -10,
            rotate: 5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: container,
                start: 'top center',
                end: 'center top',
                scrub: true,
            },
        });
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <div className="container">
                <div className={styles.block}>
                    <div ref={textRef} className={styles.textBlock}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollSeven;