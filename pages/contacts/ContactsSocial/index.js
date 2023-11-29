import React from "react";
import styles from './ContactsSocial.module.scss';

function ContactsSocial() {
    return (
        <section className={styles.contactsSocial}>
            <div className="container">
                <div className={styles.contactsSocialTitleContainer}>
                    <h2 className={`title ${styles.contactsSocialTitle}`}>Мы Вконтакте</h2>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialSignature}
                    >
                        vk.com/turgardens
                    </a>
                </div>
                <div className={styles.contactsSocialList}>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                    <a
                        href="https://vk.com/zalesskyfermer"
                        alt="Вконтакте - Залесский фермер"
                        className={styles.contactsSocialItemLink}
                    ></a>
                </div>
            </div>
        </section>
    );
}

export default ContactsSocial;