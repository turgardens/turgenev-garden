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
                                Собираем тонн продукции в год
                            </p>
                        </li>
                        <li className={styles.aboutAdvantagesItem}>
                            <span className={styles.aboutAdvantagesItemNumber}>
                                1300
                            </span>
                            <p className={styles.aboutAdvantagesItemText}>
                                Производим пачек сока в сутки
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};