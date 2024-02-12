import React from 'react';
import Head from 'next/head';
import PageMain from '../../components/PageMain';
import OurFarm from '../../components/OurFarm';

import background from '../../public/img/gardens/background.webp'
import Description from '../../components/Description';

import oneImage from '../../public/img/gardens/1.webp';
import twoImage from '../../public/img/gardens/2.webp';
import threeImage from '../../public/img/gardens/3.webp';

import one from '../../public/img/gardens/gallery/1.webp';
import two from '../../public/img/gardens/gallery/2.webp';
import three from '../../public/img/gardens/gallery/3.webp';
import fourth from '../../public/img/gardens/gallery/4.webp';
import five from '../../public/img/gardens/gallery/5.webp';
import six from '../../public/img/gardens/gallery/6.webp';
import seven from '../../public/img/gardens/gallery/7.webp';
import eight from '../../public/img/gardens/gallery/8.webp';
import nine from '../../public/img/gardens/gallery/9.jpg';
import ten from '../../public/img/gardens/gallery/10.jpg';
import eleven from '../../public/img/gardens/gallery/11.jpg';
import twelve from '../../public/img/gardens/gallery/12.webp';

import iconFirst from '../../public/img/gardens/icon-1.svg';
import iconSecond from '../../public/img/gardens/icon-2.svg';
import iconThird from '../../public/img/gardens/icon-3.svg';

// Минимум 10 изображений
const array = [one, two, three, fourth, five, six, seven, eight, nine, ten, eleven, twelve];
const advantagesArray = [
    { text: 'Пять премиальных сортов яблок', img: iconFirst },
    { text: 'Не зависим от поставок из вне', img: iconSecond },
    { text: 'Полный контроль процесса', img: iconThird }
]
const imagesArray = [oneImage, twoImage, threeImage]

export default function Gardens() {
    return (
        <>
            <Head>
                <title>Сады - Тургеневские сады</title>
            </Head>
            <PageMain title='Сады' backgroundImg={background} />
            <Description scrollIcon="apple" title='Мы гордимся нашими садами в тургенево' subTitle='Площадью 30 гектар, 42000 деревьев дают урожай до 800 тонн в год. Эти результаты не только обеспечивают нас обильным урожаем, но и предоставляют нам контроль над качеством – от момента, когда первое яблоко созревает под лучами солнца, до розлива сока в упаковки' advantagesArray={advantagesArray} imagesArray={imagesArray} />
            <OurFarm photos={array} title='Давайте прогуляемся' subTitle='Мы с любовью выращиваем наши яблоки используя огромномый опыт и соблюдая все технологии производства' />
        </>
    )
};