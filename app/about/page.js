import React from 'react';
import Head from 'next/head';
import PageMain from '../../components/blocks/pageMain';
import AboutDescription from './AboutDescription';
import Advantages from './Advantages';
import AboutAdvantages from './AboutAdvantages';
import AboutPartners from './AboutPartners';

import background from '../../public/img/about/background.webp';

export default function About() {
    return (
        <>
            <Head>
                <title>О нас - компания Тругеневские сады</title>
            </Head>

            <PageMain title='О нас' backgroundImg={background} />
            <AboutDescription />
            <Advantages />
            <AboutAdvantages />
            <AboutPartners />
        </>
    )
};