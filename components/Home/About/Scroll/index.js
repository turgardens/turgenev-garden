import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

import styles from './Scroll.module.scss';

import BackgroundFirst from "../../../../public/img/decorative/element-1.webp"
import BackgroundSecond from "../../../../public/img/decorative/element-2.webp"

// Движение объектов при скролле
export default function ScrollTextLeft() {
    const imgLeftRef = useRef(null);
    const imgRightRef = useRef(null);

    useEffect(() => {
        const textLeft = imgLeftRef.current;
        const textRight = imgRightRef.current;

        gsap.to(textLeft, {
            x: 0,
            y: 180,
            rotate: -15,
            opacity: 1,
            scrollTrigger: {
                trigger: textLeft,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        gsap.to(textRight, {
            x: -15,
            y: 260,
            rotate: -25,
            opacity: 1,
            scrollTrigger: {
                trigger: textRight,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, []);

    return (
        <div className={styles.block}>
            <div className={styles.imageContainerLeft} ref={imgLeftRef} style={{ opacity: 1 }}>
                <Image className={styles.image} src={BackgroundFirst} width="250" height="255" />
            </div>

            <div className={styles.imageContainerRight} ref={imgRightRef} style={{ opacity: 1 }}>
                <Image className={styles.image} src={BackgroundSecond} width="250" height="295" />
            </div>
        </div>
    );
};