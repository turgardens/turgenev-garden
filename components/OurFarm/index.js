import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

import styles from './OurFarm.module.scss';

export default function OurFarm({ photos, title, subTitle, arrayRed }) {
    const paramsMainSwiper = {
        navigation: {
            nextEl: ".excursions-gallery__arrow-next",
            prevEl: ".excursions-gallery__arrow-prev",
        },
    };

    return (
        <section className={`our-farm ${styles.excursionsGallery}`}>
            <div className={styles.excursionsGalleryWrapper}>
                <div className={styles.excursionsGalleryTitleContainer}>
                    <div className="container">

                        <div className={styles.titleContainer}>
                            <div className={`container ${styles.excursionContainer}`}>
                                <h2 className={`title ${styles.title}`}>{title}</h2>
                                <p className={styles.text}>{subTitle}</p>

                                {arrayRed &&
                                    <div className={styles.excursionArrows}>
                                        <motion.div
                                            className={`${styles.buttonArrowContainer} ${styles.red} ${styles.left}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <div className={`excursions-gallery__arrow-prev red`} />
                                        </motion.div>

                                        <motion.div
                                            className={`${styles.buttonArrowContainer} ${styles.red} ${styles.right}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <div className={`excursions-gallery__arrow-next red`} />
                                        </motion.div>

                                    </div>
                                }

                                {!arrayRed &&
                                    <div className={styles.excursionArrows}>
                                        <motion.div
                                            className={`${styles.buttonArrowContainer} ${styles.left}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <div className="excursions-gallery__arrow-prev" />
                                        </motion.div>

                                        <motion.div
                                            className={`${styles.buttonArrowContainer} ${styles.right}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <div className="excursions-gallery__arrow-next" />
                                        </motion.div>

                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.excursionsGallerySlider}>
                    <Swiper
                        {...paramsMainSwiper}
                        modules={[Navigation]}
                        className={styles.swiper}
                        loop={true}
                        centeredSlides={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            550: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            650: {
                                slidesPerView: 1.6,
                                spaceBetween: 20,
                            },
                            860: {
                                slidesPerView: 1.8,
                                spaceBetween: 40,
                            },
                            1000: {
                                slidesPerView: 2.2,
                                spaceBetween: 60,
                            },
                            1350: {
                                slidesPerView: 3.2,
                                spaceBetween: 60,
                            },
                            1800: {
                                slidesPerView: 3.8,
                                spaceBetween: 60,
                            },
                            2200: {
                                slidesPerView: 4.8,
                                spaceBetween: 60,
                            },
                        }}
                    >
                        {photos && photos.map((item, index) => {

                            return (
                                <SwiperSlide key={index} className={styles.swiperSlide}>
                                    <Image
                                        className={`slider-image ${styles.excursionsGallerySliderImg}`}
                                        src={item}
                                        alt="Тургеневские сады - фотографии компании"
                                        priority={true}
                                        width={800}
                                        height={800}
                                    ></Image>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </div>
        </section >
    );
};
