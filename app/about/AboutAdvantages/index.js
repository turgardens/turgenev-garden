import React from 'react';
import styles from './AboutAdvantages.module.scss';

export default function AboutAdvantages() {
    return (
        <section className={styles.aboutAdvantages}>
            <div className={styles.decorativeTop} />
            <div className={styles.decorativeBottom} />

            <div className="container">
                <div className={styles.aboutAdvantagesWrapper}>
                    <h2 className={`title ${styles.aboutAdvantagesTitle}`}>Показатели которыми мы гордимся</h2>
                    <ul className={styles.aboutAdvantagesList}>
                        <li className={styles.aboutAdvantagesItem}>
                            <span className={styles.aboutAdvantagesItemNumber}>
                                30
                            </span>
                            <p className={styles.aboutAdvantagesItemText}>
                                Гектар собственных яблоневых садов
                            </p>
                        </li>
                        <li className={styles.aboutAdvantagesItem}>
                            <span className={styles.aboutAdvantagesItemNumber}>
                                42000
                            </span>
                            <p className={styles.aboutAdvantagesItemText}>
                                Молодых яблоневых деревьев
                            </p>
                        </li>
                        <li className={styles.aboutAdvantagesItem}>
                            <span className={styles.aboutAdvantagesItemNumber}>
                                800
                            </span>
                            <p className={styles.aboutAdvantagesItemText}>
                                Тонн продукции собираем в год
                            </p>
                        </li>
                        <li className={styles.aboutAdvantagesItem}>
                            <span className={styles.aboutAdvantagesItemNumber}>
                                1200
                            </span>
                            <p className={styles.aboutAdvantagesItemText}>
                                Пачек сока производим в сутки
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};