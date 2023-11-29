import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { PopupProvider } from '../PopupContext';
import VideoPopup from '../../components/VideoPopup';

export default function Layout({ children }) {

    return (
        <>
            <main>
                <Header />

                <PopupProvider>
                    <VideoPopup />
                    {children}
                </PopupProvider>

                <Footer />
            </main>
        </>
    )

}