'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import styles from './videoPopup.module.scss';
import { useStore } from '../../../store';

export default function VideoPlayer() {

    // Вытаскиваем значения из zustand store
    const { stateVideoPopup, stateVideoUrl, setStateVideoPopup } = useStore();

    return (
        <AnimatePresence>
            {stateVideoPopup && (
                <motion.div
                    className={styles.videoPopup}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <button
                        onClick={() => setStateVideoPopup(false)}
                        className={styles.videoPopupButton}>
                    </button>
                    <div
                        onClick={() => setStateVideoPopup(false)}
                        className={styles.videoPopupOverlay}
                    />
                    <ReactPlayer
                        className={styles.videoPopupPlayer}
                        wrapper={'div'}
                        url={stateVideoUrl}
                        playing={true}
                        controls
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
