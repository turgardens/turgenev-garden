'use client'

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

import styles from './scroll.module.scss';

import BackgroundFirst from "../../../../../public/img/decorative/element-4.webp"
import BackgroundSecond from "../../../../../public/img/decorative/element-3.webp"
import BackgroundThird from "../../../../../public/img/decorative/element-6.webp"

// Движение объектов при скролле
export default function Scroll() {
    const imgLeftRef = useRef(null);
    const imgRightRef = useRef(null);
    const imgCenterRef = useRef(null);

    useEffect(() => {
        const textLeft = imgLeftRef.current;
        const textRight = imgRightRef.current;
        const textCenter = imgCenterRef.current;

        gsap.to(textLeft, {
            x: 10,
            y: 200,
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
            y: 285,
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
            y: 255,
            rotate: 25,
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
                <Image className={styles.image} src={BackgroundFirst} width="250" height="255" />
            </div>

            <div className={styles.imageContainerCenter} ref={imgCenterRef} style={{ opacity: 1 }}>
                <Image className={styles.image} src={BackgroundThird} width="200" height="195" />
            </div>

            <div className={styles.imageContainerRight} ref={imgRightRef} style={{ opacity: 1 }}>
                <Image className={styles.image} src={BackgroundSecond} width="100" height="100" />
            </div>
        </div>
    );
};