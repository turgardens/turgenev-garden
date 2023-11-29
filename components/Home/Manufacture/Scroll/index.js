import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

import styles from './Scroll.module.scss';

import BackgroundFirst from "../../../../public/img/decorative/element-8.webp"
import BackgroundSecond from "../../../../public/img/decorative/element-7.webp"
import BackgroundThird from "../../../../public/img/decorative/element-2.webp"

// Движение объектов при скролле
export default function ScrollTextLeft() {
    const imgLeftRef = useRef(null);
    const imgRightRef = useRef(null);
    const imgCenterRef = useRef(null);

    useEffect(() => {
        const textLeft = imgLeftRef.current;
        const textRight = imgRightRef.current;
        const textCenter = imgCenterRef.current;

        gsap.to(textLeft, {
            x: 10,
            y: 440,
            rotate: 25,
            opacity: 1,
            scrollTrigger: {
                trigger: textLeft,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        gsap.to(textRight, {
            x: 0,
            y: 245,
            rotate: -15,
            opacity: 1,
            scrollTrigger: {
                trigger: textRight,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        gsap.to(textCenter, {
            x: 0,
            y: 240,
            rotate: 35,
            opacity: 1,
            scrollTrigger: {
                trigger: textCenter,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, []);

    return (
        <div className={styles.block}>
            <div className={styles.imageContainerLeft} ref={imgLeftRef} style={{ opacity: 1 }}>
                <Image className={styles.image} src={BackgroundFirst} width="130" height="135" />
            </div>

            <div className={styles.imageContainerCenter} ref={imgCenterRef} style={{ opacity: 1 }}>
                <Image className={styles.image} src={BackgroundSecond} width="170" height="155" />
            </div>

            <div className={styles.imageContainerRight} ref={imgRightRef} style={{ opacity: 1 }}>
                <Image className={styles.image} src={BackgroundThird} width="130" height="135" />
            </div>
        </div>
    );
};