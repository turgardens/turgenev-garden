import React from 'react';
import Image from 'next/image';
import styles from './pageMain.module.scss';

export default function ContactsMain({ title, backgroundImg }) {
    return (
        <section className={styles.pageMain}>
            <Image className={styles.image} src={backgroundImg} fill={true}></Image>
            <div className={styles.pageMainContent}>
                <h2 className={styles.pageMainTitle}>{title}</h2>
            </div>
        </section>
    );
}