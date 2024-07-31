import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header.jsx';
import FloatingWhatsAppButton from './floatingWhatsAppButton.jsx';

export default function Layout() {
    return (
        <>
            <Header />
            <FloatingWhatsAppButton />
            <div className=' container mb-5'>
                <Outlet />
            </div>
        </>
    )
}
