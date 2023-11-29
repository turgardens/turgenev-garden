import React from "react";
import { motion } from 'framer-motion';

import styles from './ContactsInformation.module.scss';

import aboutBackground from "../../../public/img/gardens/image-1.webp";

function ContactsInformation() {
    return (
        <section className={styles.contactsInformation}>
            < div className="container" >
                <div className={styles.contactsInformationWrapper}>
                    <div className={styles.contactsInformationContent}>
                        <div className={styles.contactsInformationTitleContainer}>
                            <h2 className={`title ${styles.contactsInformationTitle}`}>
                                Связаться с нами
                            </h2>

                            <h3 className={styles.contactsInformationSubtitle}>По всем вопросам:</h3>
                            <div className={styles.contactsInformationList}>
                                <a className={`${styles.contactsInformationLink} ${styles.contactsInformationIcon} ${styles.contactsInformationMail}`} href="tel:+79217100080">+7 (921) 710-00-80</a>
                                <a className={`${styles.contactsInformationLink} ${styles.contactsInformationIcon} ${styles.contactsInformationMail}`} href="mailto:agrodelo.39@mail.ru">agrodelo.39@mail.ru</a>
                                <span className={`${styles.contactsInformationLink} ${styles.contactsInformationIcon} ${styles.contactsInformationAdress}`}>Калининград, ул. Полтавская 3</span>

                                <div className={styles.massengerList}>
                                    <motion.div
                                        className={styles.massengerItemContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <a href="https://t.me/thisispronin" className={`${styles.massengerItem} ${styles.telegram}`} />
                                    </motion.div>
                                    <motion.div
                                        className={styles.massengerItemContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <a href="https://wa.me/79217100080" className={`${styles.massengerItem} ${styles.whatsapp}`} />
                                    </motion.div>
                                    <motion.div
                                        className={styles.massengerItemContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <a href="https://viber.click/79217100080" className={`${styles.massengerItem} ${styles.viber}`} />
                                    </motion.div>
                                    <motion.div
                                        className={styles.massengerItemContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <a href="https://vk.com/turgardens" className={`${styles.massengerItem} ${styles.vk}`} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <div className={styles.imageContainer} />
                        <div className={styles.imageDecorativeElement} />
                    </div>

                </div>
            </div >
        </section >
    );
}

export default ContactsInformation;