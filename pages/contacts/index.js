import React from 'react';
import Head from 'next/head';

// Компоненты
import PageMain from '../../components/PageMain';
import ContactsInformation from './ContactsInformation';
import ContactsSocial from './ContactsSocial';

import background from '../../public/img/contacts/background.webp'

export default function Contacts() {
    return (
        <>
            <Head>
                <title>Контакты - компания Тругеневские сады</title>
                {/* Заполнить */}
            </Head>
            <PageMain title='Контакты' backgroundImg={background} />
            <ContactsInformation />
            <ContactsSocial />
        </>
    );
}