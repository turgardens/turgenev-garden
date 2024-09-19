import React from 'react';
import styles from './advantages.module.scss';

export default function Advantages() {
    return (
        <section className={styles.about}>
            <div className="container">

                <div className={styles.aboutListContain}>

                    <ul className={styles.aboutList}>
                        <li className={styles.aboutItem}>
                            <div className={`${styles.aboutItemImg} ${styles.aboutItemImgFirst}`}></div>
                            <div className={styles.aboutItemContentContain}>
                                <p className={styles.aboutItemContentText}>Прямой отжим<br /> из свежих яблок</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <div className={`${styles.aboutItemImg} ${styles.aboutItemImgSecond}`}></div>
                            <div className={styles.aboutItemContentContain}>
                                <p className={styles.aboutItemContentText}>Натуральный продукт<br /> без добавления сахара</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <div className={`${styles.aboutItemImg} ${styles.aboutItemImgThird}`}></div>
                            <div className={styles.aboutItemContentContain}>
                                <p className={styles.aboutItemContentText}>Яблоки только<br /> из собственных садов</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}