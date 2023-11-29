import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from './scrollFive.module.scss';

const ScrollFive = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;

        gsap.set(container, { perspective: 600 }, { position: 'relative' }, { zIndex: -1 });

        gsap.to(text, {
            yPercent: 65,
            opacity: 1.4,
            rotationY: 10,
            rotationX: -10,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <div className="container">
                <div className={styles.block}>
                    <div ref={textRef} className={styles.textBlock}>
                        <h1 className={styles.title}>Но в чем заключается наш главный секрет?</h1>
                        <p className={styles.text}>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Повседневная практика показывает, что рамки и место обучения кадров в значительной степени обуславливает.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollFive;