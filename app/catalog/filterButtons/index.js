import { useState } from "react";
import styles from './FilterButtons.module.scss';

export default function FilterButtons({ filterButtons }) {

    return (
        <>
            <div className={styles.casesFilterButtons}>
                {filterButtons && filterButtons.map((item, index) => {
                    return (
                        <button className={item.active ? `${styles.button} ${styles.active}` : `${styles.button} ${styles.deactive}`} key={index}>
                            {item.name}
                        </button>
                    )
                })}
            </div >
        </>
    );
}
