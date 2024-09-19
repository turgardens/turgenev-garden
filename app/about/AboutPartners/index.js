'use client'

import React from "react";
import Image from "next/image";
import styles from './AboutPartners.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import viktoriaLogo from "../../../public/img/partners/viktoria.webp";
import miratorgLogo from "../../../public/img/partners/miratorg.webp";
import fruktomaniaLogo from "../../../public/img/partners/fruktomania.webp";
import pyaterockaLogo from '../../../public/img/partners/pyaterochka.webp';
import kantMarketLogo from '../../../public/img/partners/kant-market.webp';
import pivnoyDvorLogo from '../../../public/img/partners/pivnoy-dvor.webp';
import sparLogo from '../../../public/img/partners/spar.webp';
import butilLogo from '../../../public/img/partners/butil.webp';
import svetoforLogo from '../../../public/img/partners/svetofor.webp';
import ozonLogo from '../../../public/img/partners/ozon.webp';


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
              На данный момент купить соки компании Тургеневские сады можно в Калининградской области, Москве, Московской области и Санкт-Петербурге.<br /> Мы сотрудничаем с большинством крупнейших торговых сетей России, а также со средними и мелкими ритейлерами
            </p>
          </div>
        </div>
      </div>

      <div className={styles.aboutPartnersSliderContainer}>
        <Swiper
          className={styles.swiper}
          ref={swiperContainer}
          modules={[Pagination, Navigation, Autoplay]}
          loop={true}
          centeredSlides={true}

          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}

          speed={800}
          navigation={{
            nextEl: ".about-partners__arrow-next",
            prevEl: ".about-partners__arrow-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
            800: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
            1300: {
              slidesPerView: 7,
              spaceBetween: 60,
            },
            2000: {
              slidesPerView: 8,
              spaceBetween: 120,
            },
          }}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={viktoriaLogo}
              alt="Виктория - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={sparLogo}
              alt="SPAR - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={miratorgLogo}
              alt="Мираторг - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={pyaterockaLogo}
              alt="Пятерочка - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={kantMarketLogo}
              alt="Кант маркет - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={pivnoyDvorLogo}
              alt="Пивной двор - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={sparLogo}
              alt="SPAR - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={butilLogo}
              alt="Бутыль - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={svetoforLogo}
              alt="Светофор - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={fruktomaniaLogo}
              alt="Фруктомания - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={ozonLogo}
              alt="OZON - партнер компании Тургеневские сады"
            />
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={viktoriaLogo}
              alt="Виктория - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={sparLogo}
              alt="SPAR - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={miratorgLogo}
              alt="Мираторг - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={pyaterockaLogo}
              alt="Пятерочка - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={kantMarketLogo}
              alt="Кант маркет - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={pivnoyDvorLogo}
              alt="Пивной двор - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={sparLogo}
              alt="SPAR - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={butilLogo}
              alt="Бутыль - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={svetoforLogo}
              alt="Светофор - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={fruktomaniaLogo}
              alt="Фруктомания - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.aboutPartnersSliderImg}
              src={ozonLogo}
              alt="OZON - партнер компании Тургеневские сады"
            />
          </SwiperSlide>
        </Swiper>

        <div className="about-partners__arrow-next"></div>
        <div className="about-partners__arrow-prev"></div>
      </div>
    </section>
  );
}