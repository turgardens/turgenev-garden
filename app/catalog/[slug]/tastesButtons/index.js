import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './tastesButtons.module.scss';

export default function FilterButtons({ tastesButtons, currentProduct }) {

    return (
        <>
            <div className={styles.casesFilterButtons}>
                {tastesButtons && tastesButtons.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            className={styles.buttonContainer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link
                                href={item.href}
                                className={styles.button}
                                style={item.name === currentProduct.name ? { background: currentProduct.activeColor, color: "#fff" } : {}}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    )
                })}
            </div >
        </>
    );
}