import React from 'react';
import styles from './ContactsMain.module.scss';

export default function ContactsMain() {
    return (
        <section className={styles.contactsMain}>
            <div className={styles.contactsMainContent}>
                <h2 className={styles.contactsMainTitle}>О нас</h2>
            </div>
        </section>
    );
}