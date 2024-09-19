'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

import logo from '../../public/img/header/logo.svg';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleHeader = () => {
        setOpen(!open);
    }

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className="container">
                    <div className={styles.wrapper}>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
                                <Image className={styles.logoImg} src={logo} alt="Логотип компании Тургеневские сады" width={100} height={100} />
                                <div className={styles.logoBackground} />
                            </Link>
                        </motion.div>

                        {/* Бургер открытия меню */}
                        <div className={styles.menuContainer} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                            <nav onMouseLeave={() => setOpen(false)} className={`${styles.fullscreen} ${open ? [styles.active] : ''}`}>
                                <AnimatePresence>
                                    {open && (
                                        <ul className={styles.list}>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                                <motion.li
                                                    className={styles.item}
                                                    key="about"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    transition={{ duration: 0.15, delay: 0.1 }}
                                                >
                                                    <Link href='/about' className={styles.link} onClick={() => setOpen(false)}>О нас</Link>
                                                </motion.li>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                                <motion.li
                                                    className={styles.item}
                                                    key="catalog"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    transition={{ duration: 0.15, delay: 0.2 }}
                                                >
                                                    <Link className={styles.link} href="/catalog" onClick={() => setOpen(false)}>Продукция</Link>
                                                </motion.li>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                                <motion.li
                                                    className={styles.item}
                                                    key="wholesalers"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    transition={{ duration: 0.15, delay: 0.3 }}
                                                >
                                                    <Link className={styles.link} href="/wholesalers" onClick={() => setOpen(false)}>Оптовикам</Link>
                                                </motion.li>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                                <motion.li
                                                    className={styles.item}
                                                    key="contacts"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    transition={{ duration: 0.15, delay: 0.4 }}
                                                >
                                                    <Link className={styles.link} href="/contacts" onClick={() => setOpen(false)}>Контакты</Link>
                                                </motion.li>
                                            </motion.div>
                                        </ul>
                                    )}
                                </AnimatePresence>
                            </nav>

                            <div className={`${styles.toggle} ${styles.toggleMobile} ${open ? [styles.active] : ''}`} onClick={() => toggleHeader()}>
                                Меню
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                onMouseEnter={() => setOpen(true)}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <div className={`${styles.toggle} ${styles.toggleDesktop} ${open ? [styles.active] : ''}`}>
                                    Меню
                                </div>
                            </motion.div>
                        </div>

                        {/* <div className={styles.contact}>
                            <Link href='/contacts' className={`button ${styles.button}`}>Связаться</Link>
                        </div> */}

                    </div>
                </div>
            </div>

        </header >
    )
};