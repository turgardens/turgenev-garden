import React from 'react';
import Image from 'next/image';

import styles from './Advantages.module.scss';

import ImageAdvantages from '../../../public/img/apple-juice/apple.webp';

export default function Advantages() {
    return (
        <section className={styles.advantages}>
            <div className={styles.cardProductSheetFirst}></div>
            <div className={styles.cardProductSheetSecond}></div>
            <div className={styles.cardProductSheetThird}></div>
            <div className={styles.cardProductSheetFourth}></div>
            <div className={styles.cardProductSheetFive}></div>
            <div className={styles.cardProductSheetSix}></div>

            <div className="container">

                <div className={styles.titleContainer}>
                    <h2 className={`title ${styles.title}`}>Преимущества нашего сока</h2>
                    <p className={styles.text}>Полезный и натуральный продукт прямо с нашего сада</p>
                </div>


                <div className={styles.cardProductAdvantagesList}>
                    <div className={`${styles.cardProductAdvantagesItemContainer} ${styles.cardProductAdvantagesItemContainerLeft}`}>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemFirst}`}>
                            <div className={styles.cardProductAdvantagesItemLine}>
                                <div
                                    className={styles.cardProductAdvantagesItemPoint}
                                ></div>
                            </div>
                            <h3 className={styles.cardProductAdvantagesItemTitle}>
                                Фермерский продукт
                            </h3>
                            <p className={styles.cardProductAdvantagesItemText}>
                                Яблоки выращены в экологически чистом месте Калининградской области
                            </p>
                        </div>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemSecond}`}>
                            <div className={styles.cardProductAdvantagesItemLine}>
                                <div
                                    className={styles.cardProductAdvantagesItemPoint}
                                ></div>
                            </div>
                            <h3 className={`${styles.cardProductAdvantagesItemTitle}`}>
                                Много витаминов
                            </h3>
                            <p className={styles.cardProductAdvantagesItemText}>
                                Большой набор питательных веществ в натуральном продукте
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardProductAdvantagesImageContainer}>
                        <Image
                            className={styles.cardProductAdvantagesImage}
                            src={ImageAdvantages}
                            alt='Клубника - ягодная ферма'
                        ></Image>
                    </div>

                    <div className={`${styles.cardProductAdvantagesItemContainer}`}>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemThird}`}>
                            <div className={styles.cardProductAdvantagesItemLine}>
                                <div
                                    className={styles.cardProductAdvantagesItemPoint}
                                ></div>
                            </div>
                            <h3 className={styles.cardProductAdvantagesItemTitle}>
                                Постоянный контроль
                            </h3>
                            <p className={styles.cardProductAdvantagesItemText}>
                                Выращиваем наши яблоки с момента созревания до розлива в упаковки
                            </p>
                        </div>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemFourth}`}>
                            <div className={styles.cardProductAdvantagesItemLine}>
                                <div
                                    className={styles.cardProductAdvantagesItemPoint}
                                ></div>
                            </div>
                            < h3 className={styles.cardProductAdvantagesItemTitle}>
                                Разные сорта яблок
                            </h3>
                            <p className={styles.cardProductAdvantagesItemText}>
                                Белорусское сладкое, айдаред, хани крисп, голден делишес, глостер и др.
                            </p>
                        </div>
                    </div>
                </div>

            </div >
        </section>
    )
};