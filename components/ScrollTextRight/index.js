import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
// Делаем dist на next.js

gsap.registerPlugin(ScrollTrigger);

import BackgroundFirst from "../../public/img/decorative/element-1.webp"

export default function ScrollTextRight() {
    const imgAdditionsRef = useRef(null);

    useEffect(() => {
        const textRight = imgAdditionsRef.current;

        gsap.to(textRight, {
            x: 450,
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
        <div>
            <div ref={imgAdditionsRef} style={{ opacity: 0 }}>
                <Image src={Background} width="300" height="300" />
            </div>
        </div>
    );
};