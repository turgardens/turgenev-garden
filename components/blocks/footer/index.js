'use client'

import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';
import { usePathname } from 'next/navigation';

export default function Footer() {

    const pathname = usePathname();
    const hideFooter = pathname.includes('/catalog/') ? false : true;
    const hideContacts = pathname.includes('/contacts') ? false : true;
    const whiteBackground = ['/about', '/catalog', '/wholesalers', '/contacts']
        .some(path => pathname.includes(path)) ? false : true;

    return (
        <>
            {hideFooter &&
                <footer className={whiteBackground ? `${styles.footer}` : `${styles.footer} ${styles.white}`} >
                    <span className={styles.footerButtonReturn} />
                    <div className="container">
                        <div className={styles.footerWrapper}>
                            <div className={styles.footerLeftBlock}>
                                <div className={styles.footerTitleContainer}>
                                    <div className={styles.footerMiddleBlock}>
                                        {/* <h2 className={`title ${styles.footerTitle}`}>Контакты</h2> */}
                                        <ul className={styles.footerMenuList}>
                                            <li className={styles.footerMenuItem}>
                                                <Link href="/about" className={styles.footerMenuLink}>О компании</Link>
                                            </li>
                                            <li className={styles.footerMenuItem}>
                                                <Link href="/catalog" className={styles.footerMenuLink}>Продукция</Link>
                                            </li>
                                            <li className={styles.footerMenuItem}>
                                                <Link href="/manufacture" className={styles.footerMenuLink}>Производство</Link>
                                            </li>
                                            <li className={styles.footerMenuItem}>
                                                <Link href="/gardens" className={styles.footerMenuLink}>Сады</Link>
                                            </li>
                                            <li className={styles.footerMenuItem}>
                                                <Link href="/contacts" className={styles.footerMenuLink}>Контакты</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link href="/" className={styles.headerTopLogo} />
                                {/* <h3>Присоединяйтесь!</h3> */}
                                {/* <ul className={styles.footerSocialList}>
                                    <li className={styles.footerSocialItem}>
                                        <a href="@turgardens39" className={`${styles.footerSocialLink} ${styles.footerTopSocialLinkTelegram}`}></a>
                                    </li>
                                    <li className={styles.footerSocialItem}>
                                        <a href="https://www.instagram.com/turgardens/" className={`${styles.footerSocialLink} ${styles.footerTopSocialLinkVk}`}></a>
                                    </li>
                                </ul> */}
                            </div>

                            {hideContacts &&
                                <div className={styles.footerRightBlock}>
                                    <div className={styles.footerRightBlockWrapper}>
                                        <a href="+79217100080" className={`${styles.footerContactLink} ${styles.footerContactLinkPhone}`}>+7 921 710-00-80</a>
                                        <a href="mailto:agrodelo.39@mail.ru"
                                            className={`${styles.footerContactLink} ${styles.footerContactLinkEmail}`}>agrodelo.39@mail.ru</a>
                                        <a href="https://yandex.ru/maps/-/CDHqQEkL"
                                            className={`${styles.footerContactLink} ${styles.footerContactLinkMap}`}>Полтавская, 3</a>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </footer >
            }
        </>
    )
};