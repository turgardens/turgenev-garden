import React from "react";
import Head from "next/head";
// import "./card-product.css";
// import { useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import AdvantagesProduct from './Advantages';
import Image from "next/image";
// import ScrollToTop from "../../include/ScrollToTop.js";

import styles from './Product.module.scss';

import juiceImg from '../../public/img/apple-juice/background.webp';

export default function CardProduct(props) {

    // ScrollToTop();

    // const currentUrl = useLocation().pathname.split("/");
    // const endCurrentUrl =
    //     useLocation().pathname.split("/")[currentUrl.length - 1];

    // let currentProduct = "";

    // props.items.forEach((element) => {
    //     if (element.fields.url === endCurrentUrl) {
    //         currentProduct = element;
    //     }
    // });

    const swiperContainer = React.useRef();

    return (
        <>

            <Head>
                <title>Яблочный сок - Тургеневские сады</title>
            </Head>

            <>
                <section
                    className={styles.cardProduct}
                    style={{ background: '#6cb71d' }}
                >
                    <div className="card-product__decoration-first"></div>
                    <div className="card-product__decoration-second"></div>
                    <div className="card-product__decoration-third"></div>

                    <div className="container">

                        <div className={styles.cardProductMain}>
                            <div className={styles.cardProductSwiperWrapper}>
                                <Swiper
                                    className={styles.cardProductSwiper}
                                    ref={swiperContainer}
                                    loop={true}
                                    speed={500}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    effect={"flip"}

                                    navigation={{
                                        nextEl: ".card-product__arrow-next",
                                        prevEl: ".card-product__arrow-prev",
                                    }}
                                >
                                    <SwiperSlide className="swiper-slide">
                                        <div className={styles.swiperImageContainer}>
                                            <Image
                                                className={styles.swiperImage}
                                                src={juiceImg}
                                                fill={true}
                                                alt='Тургеневские сады - яблочный сок из Калининградской области'
                                            ></Image>
                                        </div>
                                    </SwiperSlide>

                                    {/* {currentProduct.fields.photos.map((currentImage, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide">
                                                <img
                                                    className="swiper-slide__img"
                                                    width="400px"
                                                    height="400px"
                                                    src={`https://${currentImage.fields.file.url}`}
                                                    alt={currentProduct.fields.name}
                                                ></img>
                                            </SwiperSlide>
                                        )
                                    })} */}

                                    {/* {currentProduct.fields.photos.length > 1 && (
                                        <div className="card-product__arrows-container">
                                            <div className="card-product__arrow-prev"></div>
                                            <div className="card-product__arrow-next"></div>
                                        </div>
                                    )} */}

                                </Swiper>
                            </div>

                            <div className={styles.cardProductDescription}>
                                <h1 className={`title ${styles.cardProductMainTitle}`}>
                                    Яблочный сок
                                </h1>

                                <div className={styles.cardProductDescription}>
                                    <p className={`text ${styles.cardProductText}`}>
                                        Сок прямого отжима производится из свежих яблок сладких сортов, выращенных в собственных садах. Тщательно отобранные яблоки отжимаются на прессе, полученный сок подвергается щадящей пастеризации что бы максимально сохранить витамины и другие полезные вещества.
                                    </p>

                                    {/* <p className={`text ${styles.cardProductText}`}>
                                        Без добавления сахара, ароматизаторов, красителей, консервантов. Содержит сахара природного происхождения.
                                    </p> */}
                                </div>

                                <h3 className={styles.cardProductTitle}>
                                    Пищевая ценность в 100 г. сока:
                                </h3>

                                <ul className={styles.cardProductCharacteristicsList}>
                                    <div className={styles.cardProductCharacteristicsItem}>
                                        <li className={styles.cardProductCharacteristicsItemName}>Углеводы, г</li>
                                        <li className={styles.cardProductCharacteristicsItemValue}>10</li>
                                    </div>
                                    <div className={styles.cardProductCharacteristicsItem}>
                                        <li className={styles.cardProductCharacteristicsItemName}>Жирность, ккал/кдж</li>
                                        <li className={styles.cardProductCharacteristicsItemValue}>40/167</li>
                                    </div>
                                </ul>

                                <div className={styles.cardProductWeightContainer}>
                                    <span className={styles.cardProductWeightNumber}>Объем упаковки: 2 литра</span>
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