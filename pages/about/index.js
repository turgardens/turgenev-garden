import React from 'react';
import Head from 'next/head';
import PageMain from '../../components/PageMain';
import AboutDescription from './AboutDescription';
import AboutPartners from './AboutPartners';

import background from '../../public/img/about/background.webp';
import AboutAdvantages from './AboutAdvantages';
import OurFarm from '@/components/OurFarm';

import oneImage from '../../public/img/about/background.webp';

// Минимум 10 изображений
const array = [oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage];
const advantagesArray = [
    { text: 'Особенность текст 1' },
    { text: 'Особенность текст 2' },
    { text: 'Особенность текст 3' }
]

export default function About() {
    return (
        <>
            <Head>
                <title>О нас - компания Тругеневские сады</title>
                {/* Заполнить */}
            </Head>
            <PageMain title='О нас' backgroundImg={background} />
            <AboutDescription />
            <AboutAdvantages />
            <OurFarm photos={array} title='Как мы живем' subTitle='Мы с любовью заботимся о наших садах и соблюдаем все технологии производства яблочного сока' advantagesArray={advantagesArray} />
            <AboutPartners />
        </>
    )
};