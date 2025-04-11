'use client'

import React from "react";
import Image from "next/image";

import styles from './AboutDescription.module.scss';

import aboutDescriptionFirst from "../../../public/img/about/background-2.webp";
import aboutDescriptionSecond from "../../../public/img/about/background-3.webp";

export default function AboutDescription() {

    return (
        <section className={styles.aboutDescription}>
            <div className="container">
                <div className={styles.aboutDescriptionWrapper}>

                    <div className={styles.aboutDescriptionBlock}>
                        <div className={styles.aboutDescriptionContent}>
                            <div className={styles.aboutDescriptionTitleContainer}>
                                <h2 className={`title ${styles.aboutDescriptionTitle}`} >Думаем о людях</h2>
                            </div>
                            <p className='text'>
                                Компания «Тургеневские сады» была основана в 2018 году. Мы вырастили собственные яблоневые сады и затем построили производственную линию в городе Калининграде
                            </p>
                            <p className='text'>
                                Производственная мощность нашего предприятия составляет примерно 1200 упаковок натурального сока в сутки. Сегодня наше предприятие уже перерабатывает более 5 тонн свежих яблок в сутки
                            </p>
                        </div>

                        <div className={`${styles.aboutDescriptionImageContainer} ${styles.aboutDescriptionImageLeft}`}>
                            <Image src={aboutDescriptionFirst} fill={true} className={styles.aboutDescriptionImage}
                                alt="Тургеневские сады - яблочный сок" />
                        </div>
                    </div>

                    <div className={`${styles.aboutDescriptionBlock} ${styles.aboutDescriptionBlockRight}`}>
                        <div className={styles.aboutDescriptionContent}>
                            <div className={styles.aboutDescriptionTitleContainer}>
                                <h3 className={`title ${styles.aboutDescriptionTitle}`}>Внимание к деталям</h3>
                            </div>
                            <div className={styles.aboutDescriptionTextContainer}>
                                <p className='text'>
                                    Мы делаем ставку на качество и полезность нашей продукции, начиная с бережного сбора яблок на нашей ферме, заканчивая реализацией готовой продукции на российский рынок
                                </p>
                                <p className='text'>
                                    Наличие собственных садов и постоянный круглогодичный контроль производства позволяет получать необходимое количество высококачественной продукции
                                </p>
                            </div>

                            {/* <div className="about-description__button-container visually-hidden">
                                <i className="about-description__button-icon"></i>
                                <Link to="/excursions" className="about-description__button">
                                    Записаться на экскурсию
                                </Link>
                            </div> */}
                        </div>
                        <div className={`${styles.aboutDescriptionImageContainer} ${styles.aboutDescriptionImageRight}`}>
                            <Image src={aboutDescriptionSecond} fill={true} className={styles.aboutDescriptionImage} alt="Тургеневские сады - натуральные продукты" />
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};