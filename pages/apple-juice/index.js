import React from "react";
import Head from "next/head";

import ThreeObject from "@/components/ThreeObject";
import Scroll from './Scroll';
import Image from "next/image";
import AdvantagesProduct from './Advantages';

import juice from '../../public/img/main/apple-juice.webp';

import styles from './Product.module.scss';

export default function CardProduct() {

    return (
        <>

            <Head>
                <title>Яблочный сок - Тургеневские сады</title>
            </Head>

            <>
                <section
                    className={styles.cardProduct}
                    style={{ background: '#1e4537' }}
                >

                    <Scroll />

                    <div className="container">

                        <div className={styles.cardProductMain}>
                            <div className={styles.cardProductWrapper}>

                                {/* <div className={styles.threeObjectContainer}>
                                    <ThreeObject maxRotate={true} />
                                </div> */}

                                <div className={styles.imageContainer}>
                                    <Image className={styles.image} src={juice} alt="Яблочный сок"></Image>
                                </div>
                            </div>

                            <div className={styles.cardProductDescription}>
                                <h1 className={`title ${styles.cardProductMainTitle}`}>
                                    Яблочный сок
                                </h1>

                                <div>
                                    <p className={styles.cardProductTextNumber}>ТУ-10.32.16-001-02976426-2023</p>

                                    <div className={styles.cardProductBlock}>
                                        <h3 className={styles.cardProductTitle}>Прямой отжим из свежих яблок!</h3>
                                        <p className={styles.cardProductText}>Сок прямого отжима производится из свежих яблок сладких сортов, выращенных в собственных садах в Калининградской области, поселок Тургенево! Тщательно отобранные яблоки отжимаются на прессе, полученный сок подвергается щадящей пастеризации (85 градусов цельсия), чтобы максимально сохранить витамины и другие полезные вещества.</p>
                                        <p className={styles.cardProductText}>Вкус сока может незначительно различаться в зависимости от сорта яблок и месяца сбора урожая. Для производства сока мы используем яблоки сортов: белорусское сладкое, айдаред, хани крисп, голден делишес, глостер и др.</p>
                                    </div>

                                    <div className={styles.cardProductBlock}>
                                        <h3 className={styles.cardProductTitle}>Состав:</h3>
                                        <ul className={styles.cardProductList}>
                                            <li className={styles.cardProductItem}>Яблочный сок прямого отжима</li>
                                            <li className={styles.cardProductItem}>100% сок прямого отжима из свежих яблок выращенных в собственных садах!</li>
                                            <li className={styles.cardProductItem}>Без добавления сахара, ароматизаторов, красителей, консервантов.</li>
                                            <li className={styles.cardProductItem}>Содержит сахара природного происхождения.</li>
                                            <li className={styles.cardProductItem}>Продукт пастеризован и асептически упакован.</li>
                                        </ul>
                                    </div>

                                    <div className={styles.cardProductBlock}>
                                        <h3 className={styles.cardProductTitle}>Пищевая ценность в 100 г. сока (средние значения):</h3>
                                        <ul className={styles.cardProductList}>
                                            <li className={styles.cardProductItem}>Углеводы, г. 10</li>
                                            <li className={styles.cardProductItem}>Энергетическая ценность, ккал/кДж 40/167</li>
                                            <li className={styles.cardProductItem}>Показатели пищевой и энергетической ценности могут незначительно колебаться в зависимости от природных условий и сортовых особенностей сырья.</li>
                                            <li className={styles.cardProductItem}>После вскрытия упаковки хранить в холодильнике при температуре от 0 до +6 °С не более 10 уток в пределах срока годности.</li>
                                            <li className={styles.cardProductItem}>Допускается наличие осадка.</li>
                                        </ul>
                                    </div>

                                    <div className={styles.cardProductBlock}>
                                        <h3 className={styles.cardProductTitle}>Изготовитель:</h3>

                                        <ul className={styles.cardProductList}>
                                            <li className={styles.cardProductItem}>ООО Агродело</li>
                                            <li className={styles.cardProductItem}>Адрес производства: 236004, Россия, г. Калининград ул. Полтавская</li>
                                            <li className={styles.cardProductItem}>Адрес производства: 236034, Россия, г. Калининград ул. подполковника Емельянова, 280</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <AdvantagesProduct />
            </>
        </>
    );
};