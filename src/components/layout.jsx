import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header.jsx';
import FloatingWhatsAppButton from './floatingWhatsAppButton.jsx';
import Pictures from './pictures.jsx';

export default function Layout() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header />
            <FloatingWhatsAppButton />
            {windowWidth < 992 ?
                <div className='container'>
                    <Pictures />
                    <Outlet />
                </div> :
                <div className='d-flex'>
                    <div className='mt-5 container col-lg-3'>
                        <Pictures />
                    </div>
                    <div className='container mx-5'>
                        <Outlet />
                    </div>
                </div>}
        </>
    );
}
