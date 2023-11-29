import React from "react";
import Image from "next/image";
import styles from './AboutPartners.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import imageFirst from "../../../public/img/partners/1.webp";
import imageSecond from "../../../public/img/partners/2.webp";
import imageThird from "../../../public/img/partners/3.webp";

export default function AboutPartners() {
  const swiperContainer = React.useRef();

  return (
    <section className={styles.aboutPartners}>
      <div className="container">
        <div className={styles.aboutPartnersWrapper}>
          <div className={styles.aboutPartnersTitleContainer}>
            <h2 className={`title ${styles.aboutPartnersTitle}`}>Нас можно найти</h2>
            {/* <p className="about-partners__text">
                На сегодняшний день продукцию компании можно найти не только в
                Калининградском регионе, но и в Москве и Московской области,
                Санкт-Петербурге. Мы являемся поставщиками крупнейших российских
                сетей: Ашан, X5 Retail Group, Oкей, Дикси, «Spar», Billa,
                Верный, Метро, Мираторг. Представлены на крупных
                интернет-площадках «Утконос», «Сбермаркет».
              </p> */}
            <p className={`text ${styles.aboutPartnersText}`}>
              На сегодняшний день продукцию компании можно найти не только в
              Калининградском регионе, но и в Москве и Московской области,
              Санкт-Петербурге. Мы представлены в крупнейших российских сетях: Пятерочка, Мираторг, «SPAR».
            </p>
          </div>
        </div>

        <div className={styles.aboutPartnersSliderContainer}>
          <Swiper
            ref={swiperContainer}
            modules={[Pagination, Navigation]}
            loop={true}
            speed={800}
            navigation={{
              nextEl: ".about-partners__arrow-next",
              prevEl: ".about-partners__arrow-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              550: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.aboutPartnersSliderImg}
                src={imageFirst}
                alt="Пятерочка - пртнер компании Тургеневские сады"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.aboutPartnersSliderImg}
                src={imageSecond}
                alt="SPAR - пртнер компании Тургеневские сады"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.aboutPartnersSliderImg}
                src={imageThird}
                alt="Мираторг - пртнер компании Тургеневские сады"
              />
            </SwiperSlide>
          </Swiper>

          <div className="about-partners__arrow-next"></div>
          <div className="about-partners__arrow-prev"></div>
        </div>

      </div>
    </section>
  );
}