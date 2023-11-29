import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";


SwiperCore.use([Navigation]);

export default function Slider() {

    const paramsMainSwiper = {
        navigation: {
            nextEl: ".swiper-arrow-next-main",
            prevEl: ".swiper-arrow-prev-main",
        },
    };

    return (
        <Swiper
            {...paramsMainSwiper}
            spaceBetween={0}
            slidesPerView={1}
            loop={currentProduct.fields.photos.length > 1 ? true : false}
        >
            {currentProduct.fields.photos.map((item, index) => {

                return (
                    <SwiperSlide key={index + item.fields.file.url}>
                        <div className="card-card-img-container">
                            <Image
                                className="card-card__img"
                                // src={"https:" + item.fields.file.url}
                                layout="fill"
                                // alt={item.fields.title}
                                unoptimized={true}
                                priority
                            ></Image>
                        </div>
                    </SwiperSlide>
                );
            })}

            <div className="swiper-arrow--card-page">
                <div className="swiper-arrow__container">
                    <div className="swiper-arrow-next-main"></div>
                    <div className="swiper-arrow-prev-main"></div>
                </div>
            </div>


        </Swiper>
    )
};