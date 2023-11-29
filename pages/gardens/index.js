import React from 'react';
import Head from 'next/head';
import PageMain from '../../components/PageMain';
import OurFarm from '../../components/OurFarm';

import background from '../../public/img/gardens/background.webp'
import Description from '../../components/Description';

import oneImage from '../../public/img/about/background.webp';

import iconFirst from '../../public/img/compound/icon-1.svg';
import iconSecond from '../../public/img/compound/icon-2.svg';
import iconThird from '../../public/img/compound/icon-2.svg';

// Минимум 10 изображений
const array = [oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage];
const advantagesArray = [
    { text: 'Пять премиальных сортов яблок', img: iconFirst },
    { text: 'Не зависим от поставок из вне', img: iconSecond },
    { text: 'Полный контроль процесса', img: iconThird }
]
const imagesArray = [oneImage, oneImage, oneImage]

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