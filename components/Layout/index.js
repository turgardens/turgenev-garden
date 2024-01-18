import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { PopupProvider } from '../PopupContext';
import VideoPopup from '../../components/VideoPopup';
import { ThreeObjectProvider } from '../../context';

export default function Layout({ children }) {

    return (
        <>
            <main>
                <ThreeObjectProvider>
                    <Header />
                    <PopupProvider>
                        <VideoPopup />
                        {children}
                    </PopupProvider>

                    <Footer />
                </ThreeObjectProvider>
            </main>
        </>
    )

}