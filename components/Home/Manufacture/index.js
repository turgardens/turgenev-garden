import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Scroll from './Scroll';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { usePopup } from '../../PopupContext';
import styles from './Manufacture.module.scss';

export default function Gardens() {

    const { openVideoPopup } = usePopup();

    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;

        gsap.set(container, { perspective: 600 }, { position: 'relative' }, { zIndex: -1 });

        gsap.to(text, {
            // yPercent: 15,
            opacity: 2.2,
            // rotationY: 10,
            // rotationX: -10,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    useEffect(() => {
        const gsapElement = imgRef.current;

        gsap.to(gsapElement, {
            x: 0,
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
        <section className={styles.manufacture}>
            <Scroll />

            <div className="container">
                <div className={styles.wrapper}>

                    <div className={styles.textContainer}>

                        <div className={styles.titleContainer}>
                            <h2 className={`title ${styles.title}`}>Производство</h2>
                            <p className={`text ${styles.text}`}>Производство продукции осуществляется в городе Калининграде, мы делаем исключительную ставку на идеальное качество, безопасность и впечатляющие вкусовые свойства наших продуктов</p>
                        </div>

                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <h3>Производственное оборудование</h3>
                                <p>Новая, Европейская, полностью автоматическая линия с двойной мойкой яблок</p>
                            </li>
                            <li className={styles.item}>
                                <h3>Безопасность продукции</h3>
                                <p>Ежедневные проверки и контроль качества, квалифицированный и обученный персонал</p>
                            </li>
                        </ul>

                        <motion.div
                            className={styles.buttonContainer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link href="/manufacture" className='button redColor'>Подробнее</Link>
                        </motion.div>
                    </div>

                    <div className={styles.video} onClick={() => openVideoPopup('https://www.youtube.com/watch?v=Y-dcuIZVpxo')} ref={imgRef}>
                        <div className={styles.videoContainer} />
                        <div className={styles.videoDecorativeElement} />
                        <div className={styles.videoButton}>
                            <svg className={styles.videoButtonIcon} id="_Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.44 61.11">
                                <g id="_Слой_1-2" data-name="Слой 1">
                                    <g>
                                        <path d="M65.7,15.04c-2.46-6.5-7.92-10.84-14.46-12.88-3.52-1.1-7.28-1.44-10.93-1.81-4.04-.41-8.11-.52-12.15,.01-.87,.11-1.74,.24-2.61,.37-.12,.02-.23,.05-.33,.08C11.6,3.77,1.36,15.47,.12,29.35c-.62,7.01,1.09,14.49,5.27,20.22,4.17,5.71,10.43,8.79,17.25,10.1,3.4,.66,6.86,.96,10.31,1.15,3.34,.19,6.69,.35,10.03,.24,6.39-.23,13.19-1.65,17.64-6.62,4.57-5.1,5.59-12.18,6.21-18.74,.64-6.8,1.34-14.14-1.13-20.67Zm-12.14,13.94c-.29,1.33-1.17,2.23-2.17,3.07-4.09,3.42-8.43,6.49-12.9,9.39-2.62,1.7-5.17,3.49-7.99,4.86-.8,.39-1.63,.77-2.5,.94-2.43,.49-4.54-1.04-4.85-3.5-.12-.94-.06-1.92,.02-2.87,.37-4.4,.81-8.79,1.16-13.19,.28-3.52,.3-7.06-.06-10.58-.09-.83-.23-1.65-.32-2.47-.04-.34-.04-.7,.04-1.02,.24-1.04,1.14-1.54,1.89-2.12,.58-.44,1.28-.31,1.96-.1,2.55,.77,4.93,1.93,7.17,3.35,4.3,2.73,8.56,5.51,12.83,8.27,1.16,.75,2.33,1.48,3.46,2.27,.58,.41,1.13,.88,1.6,1.41,.3,.35,.43,.85,.64,1.28v1Z" />
                                        <path d="M34.8,20c-1.79-1.16-3.6-2.3-5.55-3.18-.12-.05-.25-.1-.4-.17,.05,1,.12,1.95,.15,2.89,.12,3.62-.06,7.24-.36,10.85-.26,3.14-.51,6.27-.77,9.41-.07,.92-.14,1.83-.21,2.8,7.14-4.27,14.24-8.46,20.53-13.89-.14-.09-.23-.16-.32-.22-4.35-2.83-8.7-5.66-13.06-8.49Z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};