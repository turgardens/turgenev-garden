'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '../../../../store'; // Убедись, что путь правильный

import { motion } from 'framer-motion';

// Переделать на Zustand
// import { usePopup } from '../../PopupContext';

import styles from "./main.module.scss";

import juice from '../../../../public/img/main/apple-juice.webp';

export default function Main() {
    const [isLoading, setIsLoading] = React.useState();
    const { setStateVideoPopup, setStateVideoUrl } = useStore();

    const openVideoPopup = (url) => {
        setStateVideoUrl(url);
        setStateVideoPopup(true);
    };

    return (
        <>
            <section className={isLoading ? `${styles.main}` : `${styles.main} ${styles.active}`}>
                <div className={`${styles.mainContainer} container`}>
                    <div className={styles.mainWrapper}>

                        {/* 3d объект */}
                        {/* <div className={styles.threeObjectContainer}>
                            <ThreeObject />
                        </div> */}

                        <div className={styles.mainImageContainer}>
                            {/* <span>Все таки добавить 3d</span> */}
                            <Image className={styles.mainImage} isLoading={() => setIsLoading(true)} src={juice} fill={true}></Image>
                            {/* <ThreeObject minRotate={true} /> */}
                        </div>

                        <div className={styles.mainTextContainer}>
                            <h1 className={styles.title}>Новые вкусы,<br /> новые впечатления!</h1>
                            <p>Интересные сочетания, яркие вкусы, прямой отжим и высочайшее качество</p>

                            <div className={styles.mainButtonsContainer}>
                                <div className={styles.mainButtons}>
                                    <motion.div
                                        className={styles.buttonContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <Link className='button' href="/catalog">
                                            Продукция
                                        </Link>
                                    </motion.div>
                                    <button className={styles.videoButton} onClick={() => openVideoPopup('/video/turgadens-video.mp4')}>
                                        <span className={styles.videoButtonIcon} />
                                        <span className={styles.videoButtonText}>Видео о нас</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};