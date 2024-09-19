import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

import styles from './item.module.scss';

export default function CatalogItem({ slug, variants, img, title, color }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Link
            href={`/catalog/${slug}`}
            className={styles.catalogListItem}
        >
            <motion.div
                className={styles.buttonContainer}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <div className={styles.catalogListItemImageContainer}>
                    <div
                        className={styles.catalogListItemImageDecoration}
                        style={{ background: `${color ? color : 'rgb(47, 165, 255)'}` }}
                    ></div>
                    <Image
                        src={img}
                        className={`${styles.catalogListItemImage} ${loaded ? styles.fadeIn : ''}`}
                        width="300"
                        height="300"
                        alt={title}
                        loading="lazy"
                        onLoadingComplete={() => setLoaded(true)}
                    />

                    <div className={styles.catalogListCharacteristicsListContainer}>
                        <div className={styles.catalogListCharacteristicsList}>
                            {variants && variants.map((item, index) => {
                                return (
                                    <p key={index} className={styles.catalogListItemVariant}>{item.size}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* <p className={styles.catalogListItemName}>{title}</p> */}
        </Link >
    );
};