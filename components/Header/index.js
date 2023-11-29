import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const openHeader = () => {
        if (open === true) {
            setOpen(!open);
        }
    }

    React.useEffect(() => {
        if (open === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open])

    return (
        <header className={styles.header}>
            <div className={styles.headerMenu}>
                <div className={styles.headerTopMenu}>
                    <div className="container">
                        <div className={styles.headerTopMenuWrapper}>
                            <Link href="/" className={styles.headerTopLogo} onClick={() => setOpen(false)}></Link>
                            <ul className={styles.headerTopMenuList}>
                                <ul className={styles.headerTopMenuItemLeft}>
                                    <li className={styles.headerTopMenuItem}>
                                        <a href="" className={`${styles.headerTopMenuLink} ${styles.headerTopMenuLinkCity}`} >Калининград</a>
                                    </li>
                                    <li className={styles.headerTopMenuItem}>
                                        <a href="" className={styles.headerTopMenuLink}>agrodelo.39@mail.ru</a>
                                    </li>
                                </ul>
                                <ul className={styles.headerTopMenuItemRight}>
                                    <li className={styles.headerTopMenuItem}>
                                        <ul className={styles.headerTopSocialList}>
                                            <li className={styles.headerTopSocialItem}>
                                                <a href="https://t.me/thisispronin"
                                                    className={`${styles.headerTopSocialLink} ${styles.headerTopSocialLinkTelegram}`}></a>
                                            </li>
                                            <li className={styles.headerTopSocialItem}>
                                                <a href="https://vk.com/turgardens" className={`${styles.headerTopSocialLink} ${styles.headerTopSocialLinkVk}`}></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`${styles.headerTopMenuItem} ${styles.headerTopMenuItemPhones}`}>
                                        <a href="tel:+79217100080" className={`${styles.headerTopMenuLink} ${styles.headerTopMenuLinkPhone}`}>+7 921 710-00-80</a>
                                    </li>

                                    <ul className={`${styles.headerTopSocialList} ${styles.headerTopSocialListMobile}`}>
                                        <li className={styles.headerTopSocialItem}>
                                            <a href="tel:+79217100080" className={`${styles.headerTopSocialLink} ${styles.headerTopSocialLinkPhone}`}></a>
                                        </li>
                                        <li className={styles.headerTopSocialItem}>
                                            <a href="mailto:agrodelo.39@mail.ru" className={`${styles.headerTopSocialLink} ${styles.headerTopSocialLinkEmail}`}></a>
                                        </li>
                                    </ul>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.headerBottomMenu}>
                    <div className="container">
                        <div className={styles.headerBottomMenuWrapper}>

                            {/* Бургер открытия меню */}
                            <div className={`${styles.headerBottomToggle} ${open ? [styles.active] : ''}`} onClick={() => openHeader()}>
                                <span className={styles.headerBottomToggleLine}></span>
                                <span className={styles.headerBottomToggleLine}></span>
                                <span className={styles.headerBottomToggleLine}></span>
                            </div>


                            <div className={styles.headerBottomOverlayContainer}>
                                <div className={styles.headerBottomOverlay}></div>
                            </div>

                            <nav className={`${styles.headerBottomFullscreen} ${open ? [styles.active] : ''}`}>
                                {/* <nav className={styles.headerBottomFullscreen}> */}

                                <ul className={styles.headerBottomMenuList}>
                                    <ul className={styles.headerBottomMenuItemLeft}>
                                        <li className={styles.headerBottomMenuItem}>
                                            <Link href='/about' className={styles.headerBottomMenuLink} onClick={() => setOpen(false)}>О нас</Link>
                                        </li>
                                        <li className={styles.headerBottomMenuItem}>
                                            <Link className={styles.headerBottomMenuLink} href="/apple-juice" onClick={() => setOpen(false)}>Продукция</Link>
                                        </li>
                                        <li className={styles.headerBottomMenuItem}>
                                            <Link className={styles.headerBottomMenuLink} href="/manufacture" onClick={() => setOpen(false)}>Производство</Link>
                                        </li>
                                    </ul>
                                    <ul className={styles.headerBottomMenuItemRight}>
                                        <li className={styles.headerBottomMenuItem}>
                                            <Link className={styles.headerBottomMenuLink} href="/gardens" onClick={() => setOpen(false)}>Сады</Link>
                                        </li>
                                        <li className={styles.headerBottomMenuItem}>
                                            <Link className={styles.headerBottomMenuLink} href="/wholesalers" onClick={() => setOpen(false)}>Оптовикам</Link>
                                        </li>
                                        <li className={styles.headerBottomMenuItem}>
                                            <Link className={styles.headerBottomMenuLink} href="/contacts" onClick={() => setOpen(false)}>Контакты</Link>
                                        </li>
                                    </ul>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
};