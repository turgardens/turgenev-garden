import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
// Делаем dist на next.js

gsap.registerPlugin(ScrollTrigger);

import styles from './ScrollTextAnimation.module.scss';

import BackgroundFirst from "../../public/img/decorative/element-1.webp"
import BackgroundSecond from "../../public/img/decorative/element-2.webp"

export default function ScrollTextLeft() {
    const imgLeftRef = useRef(null);
    const imgRightRef = useRef(null);

    useEffect(() => {
        const textLeft = imgLeftRef.current;
        const textRight = imgRightRef.current;

        gsap.to(textLeft, {
            x: 550,
            y: 180,
            rotate: -65,
            opacity: 1,
            scrollTrigger: {
                trigger: textLeft,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        gsap.to(textRight, {
            x: -450,
            y: -200,
            rotate: -45,
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
                <Image src={BackgroundFirst} width="300" height="335" />
            </div>

            <div className={styles.imageContainerRight} ref={imgRightRef} style={{ opacity: 1 }}>
                <Image src={BackgroundSecond} width="300" height="335" />
            </div>
        </div>
    );
};