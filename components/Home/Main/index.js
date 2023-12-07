import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
// import { usePopup } from '../PopupContext';
import styles from "./Main.module.scss";
import { motion } from 'framer-motion';
import { usePopup } from '../../PopupContext';

import juice from '@/public/img/main/apple-juice.webp';
// import ThreeObject from '../../../components/ThreeObject';

export default function Main() {
    const { openVideoPopup } = usePopup();
    const [isLoading, setIsLoading] = React.useState();

    return (
        <>
            <section className={isLoading ? `${styles.main}` : `${styles.main} ${styles.active}`}>
                <div className={`${styles.mainContainer} container`}>
                    <div className={styles.mainWrapper}>

                        {/* <div className={styles.threeObjectContainer}>
                            <ThreeObject />
                        </div> */}

                        <div className={styles.mainImageContainer}>
                            <Image className={styles.mainImage} isLoading={() => setIsLoading(true)} src={juice} fill={true}></Image>
                        </div>

                        <div className={styles.mainTextContainer}>
                            <h1 className={styles.title}>Натуральный яблочный сок</h1>
                            <p>С собственных ферм Калининградской области</p>

                            <div className={styles.mainButtonsContainer}>
                                <div className={styles.mainButtons}>
                                    <motion.div
                                        className={styles.buttonContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <Link className='button' href="/apple-juice">
                                            Подробнее
                                        </Link>
                                    </motion.div>
                                    <button className={styles.videoButton} onClick={() => openVideoPopup('https://www.youtube.com/watch?v=Y-dcuIZVpxo')}>
                                        <span className={styles.videoButtonIcon} />
                                        <span className={styles.videoButtonText}>Смотреть видео о продукции</span>
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