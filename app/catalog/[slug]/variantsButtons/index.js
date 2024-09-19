import { useState } from "react";
import styles from './variantsButtons.module.scss';
import { motion } from 'framer-motion';

export default function FilterButtons({ variantsButtons, activeButton, setActiveButton, setActiveVariant }) {

    return (
        <>
            <div className={styles.casesFilterButtons}>

                {variantsButtons && variantsButtons.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            className={styles.buttonContainer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <button className={activeButton === index ? `${styles.variantButton} ${styles.active}` : `${styles.variantButton} `} onClick={() => [setActiveVariant(item.image), setActiveButton(index)]}>{item.size}</button>
                        </motion.div>
                    )
                })}
            </div >
        </>
    );
}
