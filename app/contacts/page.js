import React from 'react';
import Head from 'next/head';

// Компоненты
import PageMain from '../../components/blocks/pageMain';
import ContactsInformation from './ContactsInformation';

import background from '../../public/img/contacts/background.webp'

export default function Contacts() {
    return (
        <>
            <Head>
                <title>Контакты - компания Тругеневские сады</title>
            </Head>

            <PageMain title='Контакты' backgroundImg={background} />
            <ContactsInformation />

            {/* <h2>Тут добавить карту!</h2> */}
        </>
    );
}