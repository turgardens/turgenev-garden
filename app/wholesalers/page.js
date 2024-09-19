import React from 'react';
import Head from 'next/head';
import PageMain from '../../components/blocks/pageMain';

import background from '../../public/img/wholesalers/background.webp';
import Description from './description';

export default function Manufacture() {
    return (
        <>
            <Head>
                <title>Оптовым покупателям - Тургеневские сады</title>
            </Head>
            <PageMain title='Оптовикам' backgroundImg={background} />
            <Description />
        </>
    )
};


