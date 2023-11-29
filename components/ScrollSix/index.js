import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from './scrollSix.module.scss';

const ScrollSix = () => {
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
                        <h1 className="title">Естественно в авторепе</h1>
                        <p className="subTitle">Йоу, йоу, мы с подмыхычем идем, вперед, за ореховым шииком ...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollSix;