'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './compound.module.scss';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

import juice from '../../../../public/img/compound/juice.webp';

export default function Compound() {

    const imgRef = React.useRef(null);

    React.useEffect(() => {
        const gsapElement = imgRef.current;

        gsap.to(gsapElement, {
            x: 50,
            y: 0,
            rotate: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: gsapElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, []);

    return (
        <section className={styles.compound}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.imageContainer} ref={imgRef}>
                        <Image className={styles.image} src={juice} fill={true}></Image>
                    </div>

                    <div className={styles.textContainer}>
                        <div className={styles.titleContainer}>
                            <h2 className='title'>Безупречный состав</h2>
                        </div>

                        <ul className={styles.list}>
                            <li className={styles.item}>Мы отбираем только лучшие яблоки из собственного сада</li>
                            <li className={styles.item}>Тестируем воду и проверяем готовый продукт в лаборатории на вкусовые качества и безопасность</li>
                            <li className={styles.item}>Наш сок проходит оценку качества на каждом этапе производства</li>
                        </ul>

                        <motion.div
                            className={styles.buttonContainer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link href="/catalog/juice-apple" className='button redColor'>
                                Подробнее о соке
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
};