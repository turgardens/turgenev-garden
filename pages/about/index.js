import React from 'react';
import Head from 'next/head';
import PageMain from '../../components/PageMain';
import AboutDescription from './AboutDescription';
import AboutPartners from './AboutPartners';
import Advantages from './Advantages';
import AboutAdvantages from './AboutAdvantages';

import background from '../../public/img/about/background.webp';

import oneImage from '../../public/img/about/background.webp';

export default function About() {
    return (
        <>
            <Head>
                <title>О нас - компания Тругеневские сады</title>
                {/* Заполнить */}
            </Head>
            <PageMain title='О нас' backgroundImg={background} />
            <AboutDescription />
            <Advantages />
            <AboutAdvantages />
            <AboutPartners />
        </>
    )
};