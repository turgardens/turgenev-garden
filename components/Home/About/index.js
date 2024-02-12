import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Link from "next/link";
import { motion } from 'framer-motion';
import styles from './About.module.scss';

import Scroll from './Scroll';

export default function About() {

    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;

        gsap.set(container, { perspective: 600 }, { position: 'relative' }, { zIndex: -1 });

        gsap.to(text, {
            yPercent: 15,
            opacity: 1.6,
            rotationY: 10,
            rotationX: -10,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: container,
                start: 'center bottom',
                end: 'bottom center',
                scrub: true,
            },
        });
    }, []);

    return (
        <section ref={containerRef} className={styles.about}>
            <Scroll />
            <div className="container">
                <div ref={textRef} className={styles.wrapper}>

                    <div className={styles.titleContainer}>
                        <h2 className='title'>Тургеневские сады</h2>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={`text ${styles.text}`}>Тургеневские сады - предприятие Российского агропромышленного комплекса, специализирующееся на выращивании и переработке яблок, производстве соков, печенья и сидра. Мы предоставляем потребителям полезные, безопасные и доступные продукты питания и создаем уникальные вкусовые впечатления, поддерживая здоровый образ жизни наших клиентов</p>
                    </div>

                    <div className={styles.buttonBlock}>
                        <motion.div
                            className={styles.buttonContainer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link href={'/about'} className='button redColor'>Подробнее</Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section >
    );
};