import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="#header" className={styles.footerButtonReturn}></a>
            <div className="container">
                <div className={styles.footerWrapper}>
                    <div className={styles.footerLeftBlock}>
                        <div className={styles.footerTitleContainer}>
                            <div className={styles.footerMiddleBlock}>
                                <h2 className={`title ${styles.footerTitle}`}>Контакты</h2>
                                <ul className={styles.footerMenuList}>
                                    <li className={styles.footerMenuItem}>
                                        <a href="about.html" className={styles.footerMenuLink}>О компании</a>
                                    </li>
                                    <li className={styles.footerMenuItem}>
                                        <a href="catalog.html" className={styles.footerMenuLink}>Продукция</a>
                                    </li>
                                    <li className={styles.footerMenuItem}>
                                        <a href="factory.html" className={styles.footerMenuLink}>Производство</a>
                                    </li>
                                    <li className={styles.footerMenuItem}>
                                        <a href="contacts.html" className={styles.footerMenuLink}>Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.headerTopLogo} />
                        <h3>Присоединяйтесь!</h3>
                        <ul className={styles.footerSocialList}>
                            <li className={styles.footerSocialItem}>
                                <a href="" className={`${styles.footerSocialLink} ${styles.footerTopSocialLinkTelegram}`}></a>
                            </li>
                            <li className={styles.footerSocialItem}>
                                <a href="" className={`${styles.footerSocialLink} ${styles.footerTopSocialLinkVk}`}></a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerRightBlock}>
                        <div className={styles.footerRightBlockWrapper}>
                            <a href="+79217100080" className={`${styles.footerContactLink} ${styles.footerContactLinkPhone}`}>+7 921 710-00-80</a>
                            <a href="mailto:agrodelo.39@mail.ru"
                                className={`${styles.footerContactLink} ${styles.footerContactLinkEmail}`}>agrodelo.39@mail.ru</a>
                            <a href="https://yandex.ru/maps/-/CCQlRGQIdD"
                                className={`${styles.footerContactLink} ${styles.footerContactLinkMap}`}>пос. Тургенево, 14</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
};