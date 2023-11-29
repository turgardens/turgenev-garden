import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from './scrollThird.module.scss';

const ScrollThird = ({ right, yNumber, xNumber, rotateNumber }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const image = imageRef.current;

        gsap.set(container, { perspective: 600 });

        gsap.to(image, {
            opacity: 1.1,
            yPercent: yNumber,
            xPercent: xNumber,
            rotate: rotateNumber,
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
        <div ref={containerRef}>
            <div className="container">
                <div className={right ? `${styles.block}` : `${styles.block} ${styles.right}`}>
                    <img
                        className={styles.image}
                        ref={imageRef}
                        src="https://i.pinimg.com/originals/6c/02/26/6c0226ddcec6494ba011010f20d194c6.jpg"
                        alt="Parallax Image"
                    />
                    <div className={styles.textBlock}>
                        <h1 className={styles.title}>Самые чистые и красивые поля</h1>
                        <p className={styles.text}>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Повседневная практика показывает, что рамки и место обучения кадров в значительной степени обуславливает создание дальнейших направлений развития. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании соответствующий условий активизации.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollThird;